---
title: Gatsby on AWS S3 and CloudFront
date: '2019-01-13'
tags: ['programming', 'gatsby', 'aws']
---

This is a quick hit and run post on how I got my Gatsby site up and running on S3 and CloudFront with minimal fuss. The main perk to running a site this way is that it is very nearly free. Unless my blog gets a lot traffic, I assume I'll be paying at most <strong>$6.00 a year</strong> to host my blog. That's cheaper than I've ever hosted a site for, and the entirety of that charge is just paying for Route 53 to support DNS for my domain.

I mostly just followed <a href="https://itnext.io/static-website-over-https-with-s3-cloudfront-gatsby-continuously-delivered-b2b33bb7fa29?gi=a248acb3a913">this blog post from the team at Appfocused</a>. There's a couple bits of data they leave out, like how to set up your static hosting on S3, so here's <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/website-hosting-custom-domain-walkthrough.html">a link to the AWS tutorial you need</a> to tackle first to set up your containers.

One thing the tutorial doesn't make clear is that when you configure your primary site container, be sure to set your <em>error document</em> on your container to `404.html`, this'll make Gatsby happier to start with.

After that the tutorial is pretty clear, but I got sort of confused since they append a dollar sign to the example environment variables you have to set up in Travis. You do not need to include those dollar signs in the Travis configuration, just put `CLOUDFRONT_DISTRIBUTION_ID` and not `$CLOUDFRONT_DISTRIBUTION_ID` in the Travis config, and you'll be golden. This messed me up a little bit.

When it comes time to configure travis, you can just copy their `.travis.yml` file into your project and it'll work fine.

That's it! Maybe I'll eventually write up a full post on this setup so that I'm not just linking to various tutorials and it can be a full one-stop for beginners to set up Gatsby using GitHub, Travis, and AWS.

