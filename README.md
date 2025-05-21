# GitHub Pages DevOps Demo

[![Deploy to GitHub Pages](https://github.com/wonderwhy-er/github-pages-devops-demo/actions/workflows/deploy.yml/badge.svg)](https://github.com/wonderwhy-er/github-pages-devops-demo/actions/workflows/deploy.yml)
[![PR Validation](https://github.com/wonderwhy-er/github-pages-devops-demo/actions/workflows/pr-validation.yml/badge.svg)](https://github.com/wonderwhy-er/github-pages-devops-demo/actions/workflows/pr-validation.yml)

A simple demonstration of DevOps practices using GitHub Actions and GitHub Pages.

> This project was created during a lightning talk at the DevOps and AI Meetup in Riga in 2025, using [Desktop Commander](https://desktopcommander.app/).

## Features

This repository demonstrates several DevOps practices using GitHub Actions:

- Automatic deployment to GitHub Pages when changes are pushed to the main branch
- Automated validation on pull requests:
  - HTML validation with HTMLHint
  - CSS linting with Stylelint
  - Link checking with broken-link-checker
  - Automated PR comments
- Build status badges

## Getting Started

### Prerequisites

- A GitHub account
- Git installed on your local machine

### Setup

1. Fork this repository
2. Update the badge URLs in the README.md to point to your repository
3. Clone your forked repository to your local machine
4. Make changes and push to see the GitHub Actions in action

## Workflow Details

### Deployment Workflow

The `deploy.yml` workflow automatically deploys the website to GitHub Pages whenever changes are pushed to the main branch. It uses the GitHub Actions for GitHub Pages to handle the deployment process.

### PR Validation Workflow

The `pr-validation.yml` workflow runs whenever a pull request is created against the main branch. It performs several validation steps:

1. HTML validation using HTMLHint
2. CSS linting using Stylelint
3. Link checking using broken-link-checker
4. Adds a comment to the PR indicating success

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Create a pull request
4. Wait for the validation workflow to complete
5. Address any issues that arise

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
