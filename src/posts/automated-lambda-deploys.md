---
title: Automating Python Lambda Deployments with Docker
date: '2019-02-23'
description: 'A quick guide on how to automate Lambda deployment package creation using Docker.'
tags: ['programming', 'docker', 'lambda', 'aws', 'python']
---

I recently started working more with [AWS Lambda functions](https://aws.amazon.com/lambda/), some of them with external dependencies, and I quickly ran into an issue where dependencies that are built on MacOS sometimes don't play nicely with Amazon Linux on Lambda.

The solution, back in the early days of Lambda, was that you would have to spin up an EC2 box, and then build and zip up your dependencies there. Luckily, things are much easier now because Amazon offers [a Docker image for Amazon Linux](https://hub.docker.com/_/amazonlinux/) that you can use to build your dependencies.

I found a blog post by Quilt that discusses [automating the process of creating your Lambda deployment package](https://blog.quiltdata.com/an-easier-way-to-build-lambda-deployment-packages-with-docker-instead-of-ec2-9050cd486ba8), but their solution stops at building the zip file you need. I wanted to take it a bit further and get the entire deployment process down to just one command, so I made some changes and additions.

First up, you have your Dockerfile. This is basically identical to Quilt's, except that I've added the `awscli` package to be installed.

```dockerfile
FROM amazonlinux:2017.03
RUN yum -y install git \
    python36 \
    python36-pip \
    zip \
    && yum clean all
RUN python3 -m pip install --upgrade pip \
    && python3 -m pip install boto3 awscli 
```

Then you need your `package.sh` file, this is the script that'll get run inside your Docker container once it's built. Note the `$LAMBDA_FUNC` environment variable. We'll be setting that when we run the container via the `Makefile`.

```bash
#!/bin/bash

mkdir tmp666
[ -f /io/requirements.txt ] && python3 -m pip install -r /io/requirements.txt -t tmp666
rm -f /io/lambda.zip
cp -r /io/* tmp666
cd tmp666
zip -r /io/lambda.zip *

cd /io
aws lambda update-function-code --function-name $LAMBDA_FUNC --zip-file fileb://lambda.zip

rm -f /io/lambda.zip
```

For AWS deployment to work inside the container, we've got to set up some environment variables with our AWS credentials. To keep everything sensitive in one place, I'm using a file called `.aws-env` that we'll load into our container when we run it.

```bash
AWS_DEFAULT_REGION=<YOUR REGION>
AWS_ACCESS_KEY_ID=<YOUR ACCESS KEY ID>
AWS_SECRET_ACCESS_KEY=<YOUR SECRET ACCESS KEY>
```

Before we tie it all together with the Makefile, I should clarify that I wanted this automation to be set up so that I could use it to deploy multiple different Lamdba functions to different places, so the directory structure is pretty important. In my setup, the directory structure looks like this:

```
lambda
├── hash-function
│   └── lambda_function.py
├── preview-function
│   ├── lambda_function.py
│   └── requirements.txt
├── validate-function
│   └── lambda_function.py
├── .aws-env
├── Dockerfile
├── Makefile
└── package.sh
```

You'll notice that a function may or may not have dependencies. Even without dependencies, this automation can still make developing in VSCode and deploying to Lambda slightly easier and faster (than copying, pasting, and saving). The main trick to this is that my folder names exactly match the name of the function in Lambda. So `hash-function` will deploy to `hash-function` in Lambda, and so on.

So our final step is to create our `Makefile`.

```makefile
deploy-lambda:
ifdef p
  cp -f package.sh $(shell pwd)/$(p)/package.sh
  docker build -t lambda .
  docker run --rm --env LAMBDA_FUNC=$(p) --env-file=.aws-env -v $(shell pwd)/$(p):/io -t lambda bash /io/package.sh
  rm -f $(shell pwd)/$(p)/package.sh
endif
```

Then to deploy to lambda it's as simple as writing...

 ```bash
 $ make deploy-lambda p=preview-function
 ```

In my real world use, I actually have a secondary `deploy-lambda-qa` command that simply appends `-qa` to the end of the `LAMBDA_FUNC` variable to deploy to the testing version of the function. To make this better, you'd most likely want to make the production deployment a little more elaborate, like asking for confirmation before deploying to your production functions.

That's about it! Doing this has saved me a lot of time that would have otherwise been spent running a couple different commands to deploy my Lambda functions. Now it's fast, easy, and worry-free. Again, kudos to Quilt and [their blog post](https://blog.quiltdata.com/an-easier-way-to-build-lambda-deployment-packages-with-docker-instead-of-ec2-9050cd486ba8) for doing more than half the work for me ;)