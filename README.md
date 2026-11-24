# Meridian Labs Application

## Overview

This is the core application for Meridian Labs services.

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Configure environment variables

## Deployment

### Staging Environment

To deploy to staging, use the CI pipeline. The pipeline requires a valid DEPLOY_TOKEN environment variable.

The DEPLOY_TOKEN should be a service account token provided by the Infrastructure team. It is NOT a GitHub Personal Access Token.

Contact the Infrastructure team at infra@meridianlabs.com for access to the correct deployment token.

### Production Environment

Production deployments require additional approval and use a different token format.

## API

...
