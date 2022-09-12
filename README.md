
# Web Technologies

This repository contains supporting materials and labs for the Web Technologies course.

## Modules

1. Prerequisites and introduction to Web Technologies
2. Getting started with Node.js
3. Web Server with Node.js
4. Libraries and frameworks for the web
5. Styling in React
6. Rendering on the web
7. State management
8. Storage and databases
9. Authentication process
10. Deployment

## Assignment

1. Participation and labs
2. Project
3. MCQ exam (multiple choice questions)

## Usage

### Reading slides' content

Navigate inside the [`./courses/webtech/modules`](courses/webtech/modules) folder to read the raw material and access the labs. The module's folders contain following files:

- `index.md` - materials for the module
- `lab.md` - labs description
- `lab` folder - assets provided for the labs
- `image` folder - images used in the `.md` files

### Accessing online slides

The slides are available on Netlify as a static website - [ece-webtech-2022-fall.netlify.app](https://ece-webtech-2022-fall.netlify.app/).

[![Netlify Status](https://api.netlify.com/api/v1/badges/a0de952e-7ca4-48cf-82c0-95d770df3e4c/deploy-status)](https://app.netlify.com/sites/ece-webtech-2022-fall/deploys)

### Build slides locally as a static website

Run the following commands to get the site up and running.

```
# Clone the repository
git clone https://github.com/adaltas/ece-webtech-2022-fall.git webtech
cd webtech/gatsby
# Download the dependencies
npm install
# Start the development server
npm run develop
# If you have problem, try
npm run clean && npm run develop
```

## Teachers

Sergei Kudinov

Paul Farault
