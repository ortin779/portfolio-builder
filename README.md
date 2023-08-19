# Portfolio Builder

### Building Personal Porfolio made easy

Portfolio builder is a config based react Personal Portfolio website. With help of this repo, anyone can create their own Portfolio website in minutes. Update the `app-config.json` file, your website is ready to deploy.

## Features

- Website is completely based on the config
- Added support for Email Messages using EmailJS
- Much more to come ...

#### Motivation behind this Project

> In order to create a Personal Website we need to clone another repo and go through each and every page to modify the contents. So What if we take all that Personal info from a `json` file and build our website on top of it.

## Installation And Running Locally

Portfolio Builder requires [Node.js](https://nodejs.org/) v16+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd portfolio-builder
yarn install
```

In this Project we are using EmailJS [https://www.emailjs.com/] to Send emails to your email service registered in the EmailJS.

You need to create and configure the EmailJS with your own email service. So that we can use that service in this app to send mails whenever a User want to get in touch with us.

Once you create and setup the EmailJS account, Add your Public Key, Service Id and Template Id in the environment variables. Please refere to the `env.example` file.

Now we are done with setup, run the following command

```
yarn dev
```

## Updating the Config

- To create your personal website, you need to edit the configuration file `/src/app-config.json` with your details.
- This file needs following details
  - Header information: [Title and Logo Image]
  - Intro Section [Image Url and Description]
  - Projects [List of your Projects]
  - Blogs [List of Blogs you published]
  - About [Your Personal Information]
  - More to come [Experience and Services etc]
- This repo already has example data filled in the `src/app-config.json` file.

Once you are done with the changes, you can check the website in local. And then you can deploy it to your preferred website.

> CAUTION: Currently it has an automatic deployment script that will try to deploy to AWS. Will try to add more scripts and make them manual, So that users can run whatever the script they want.
