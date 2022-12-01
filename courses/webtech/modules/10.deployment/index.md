---
duration: 1 hour
---

# Deployment to production

## Types of environments

- Development environment   
  This is where the software is developed. It could be a developer’s laptop as well as a server shared by several developers working together on the same project.
- Test environment   
  After an application has been developed it is deployed to a testing environment. This is where the automation tests are ensuring the quality of the application, open bugs, and review bug fixes.
- Staging environment   
  The staging is used to assemble, test, and review new versions of a website before it goes into production. This environment should resemble the production environment as much as possible.
- Production environment   
  This is where the application goes out to the world and is used by regular users.

## Production considerations

When going to production you must take into account:

- Running environment
- Environment variables
- Error handling 
- Security

## Running environment

- Hosting platforms: cloud or bare-metal
- Service type: on-premise, IaaS, PaaS or SaaS
- Virtualisation: containers or virtual machines
- OC: Linux distributions
- Dependencies: Software versions

## Environment variables

- Are variables whose values are set outside the program
- Are made up of a name/value pair
- Setting on Linux & macOS with `export NODE_ENV=production` on Windows with `$env:NODE_ENV = 'production'`
- In Node.js it is loaded into `process.env.[VAR_NAME]`
- In Node.js use [dotenv](https://www.npmjs.com/package/dotenv) module to ease the use

## Error handling 

- An error can be wrapped in an `Error` object 
- Once thrown (`throw new Error("...")`) it becomes an Exception
- Exceptions can be caught like in any other language 

## Security

- HTTPS instead of HTTP
- Access to hosting server 
- Database security: access, stored passwords, ...
- User sessions
- Nothing in front JS is secure
- Beware of what you git (passwords, API keys, access tokens, ...)
