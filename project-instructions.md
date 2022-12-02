
# Project instructions

## Deadline

**December 22, 2022 (including).** You must push your latest commit before the midnight of this date. 

## Introduction

You must create a digital publishing application (blog, forum, or portfolio) with a minimal set of features:

* Authenticate users using an external provider with OAuth2.
* Navigate through authenticated user articles and comments, and manage them.
* Comment on other user's articles.
* Edit and remove his articles and comments.
* Display the user profile and modify his settings.
* Use the user Gravatar if any or provide a default randomly generated Gravatar, choose an avatar proposed by the application, and upload his avatar.
 
If hesitating, we recommend making a project inspired by [Medium](https://medium.com/creators) or [Hacker News](https://news.ycombinator.com/).

## Delivery

The following requirements **must be strictly followed**:

* The project must be published on GitHub. It must be the same repository as the one used for labs.
* The repository must be PRIVATE and you must give your teacher access.
* The production application must be deployed to [Vercel](https://vercel.com) and receive a publicly accessible domain name.
* It must contain at least 2 **root** folders inside:
  * `app` - the Next.js application
  * `supabase` - the configuration for the local Supabase instance
  * (optionally) `labs` - the folder that contains your labs' folders
* It must contain a root `README.md` file based on [this template](./project-template/README.md).
* The root `README.md` file must include the tasks you did with your comments and the self-evaluation:
  * **Comments** describe what you have done, why and how you implement features, instructions, recommendations, important notes... **All must be concise**. The goal is to provide the maximum context for the correction while accelerating the reviewing process.
  * **Self-evaluation** serves to assist the teacher in evaluating the project, it should be objective.
* The project must be a **professional** grade. You must think about everything expected from a project in production including securing sensitive information, error management, and environment variables...
* It is forbidden to:
  * Use any alternative framework to Next.js
  * Use any alternative storage to Supabase
  * Use any alternative CSS framework to Tailwind CSS

Feel free to leave your feedback in your README.md about the course, its structure, content, methods of conducting, advantages, and disadvantages...

It is recommended to continue on the project used for the labs. However, you are allowed to import the source code from the provided [project template](./project-template) that is based on the labs' corrections.

## Evaluation

* Each [task](#tasks) is associated with a grade that is provided for information and which might be adjusted. Be sure to respect the instructions. If any doubts, post an issue on the course GitHub repository.
* The maximum number of points is 60, which is equivalent to grade 20.
* **Any plagiarism will be penalized with a 0 and a warning.**
* You are provided with a working project. The final project must be working as well. No correction will be made on a project which does not start.

## Tasks

Note, you do not have to complete all tasks, do your best, and don't hesitate to ask questions. Some tasks are much easier than expected.

**Project management:**

* Naming convention
  * Points: 2
  * Level: easy
  * Respect the community conventions and best practices, consistency.
* Project structure
  * Points: 2
  * Level: easy
  * Simplicity and comprehensiveness, files/services/components organization.
* Git
  * Points: 2
  * Level: easy
  * Proper commit history respecting Conventional Commits, branch usage, merge versus rebase, squashing bad commits, and linter integration.
* Code quality
  * Points: 4
  * Level: medium
  * Indentation, understandability, lint usage and validation, line spacing.
* Design, UX, and content
  * Points: 4
  * Level: medium
  * Overall look and feel, user experience (UX), the responsiveness on all screens, meaningful content. Good usage of Tailwind CSS. You are allowed to use Tailwind-based component libraries like [Tailwind UI](https://tailwindui.com), [Flowbite](https://flowbite.com/), [Headless UI](https://headlessui.com/).

**Application development:**

* Home page
  * Points: 2
  * Level: easy
  * Make the home page friendly, good-looking, informative, and with a call to action. It can display the latest articles. Refer to other websites on the web to take inspiration and provide relevant information about your project. This task is mostly about content editing and design. The [Medium](https://medium.com/) or [Adaltas](https://www.adaltas.com/) homepages are good examples. It is recommended to prototype your design first in a graphical editor like [Figma](https://www.figma.com/) or [Gravit Designer](https://www.designer.io/en/), then code it.
* Login and profile page
  * Points: 4
  * Level: medium
  * Provide a login/logout button in the header. On login, open the login page with a signin/signup form with GitHub provider using Auth component of Supabase. Persist authenticated user information in React context and display it on the profile page and the header.
* New articles creation
  * Points: 6
  * Level: hard
  * Insert a button allowing the creation of a new article. Open a page with a form with the article properties (`title`, `content`, `categories`, `tags`, ...). Propose to cancel or save the form, and persist the article in the database.
* New comment creation
  * Points: 4
  * Level: medium
  * Display a form at the bottom of article pages allowing unauthenticated to leave a comment. You can be inspired by commenting on GitHub issues.
* Resource access control
  * Points: 6
  * Level: hard
  * It must use the RLS of Supabase to prevent unexpected access and intrusion attempts. Only authenticated users can create articles and comments. A user must only gain access to the articles or comments he created. The APIs must return the appropriate lists for the authenticated user.  The HTTP response must return an appropriate HTTP response code and message.
* Article modification
  * Points: 4
  * Level: medium
  * Once an article is created, only the author can see the "edit" button, redirecting to the editing page to modify the article.
* Article removal
  * Points: 2
  * Level: easy
  * Once an article is created, only the author can see the "delete" button to remove it.
* Comment modification
  * Points: 2
  * Level: easy
  * Once a comment is created, only the author can see the "edit" button, opening an editing form to modify the comment.
* Comment removal
  * Points: 2
  * Level: easy
  * Once a comment is created, only the author can see the "delete" button to remove it.
* Account settings
  * Points: 4
  * Level: medium
  * Create a screen for the user to modify his/her personal settings (email, name, language, ...). Those properties don't have to be active. The goal is to display and load form components with new values. You don't have to update the overall theme UI to reflect this value. If you do, it is part of the bonus and you must mention it in the readme.
* WYSIWYG integration
  * Points: 2
  * Level: easy
  * The `content` input fields for articles are featured with any [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG) library to edit its content.
* Gravatar integration
  * Points: 2
  * Level: easy
  * Display a Gravatar user icon right next to his comments, in the header, and on the profile page. [Gravatar](https://en.gravatar.com/) is a service that associates your email with an image you upload. Other services may then refer to it. Some people choose a photo of themself, while others use an abstract image. It is part of the tech culture and services such as GitHub and NPM.js use it. It is very easy to integrate and it will provide a default random image if the user email is not registered.
* Light/dark theme
  * Points: 2
  * Level: easy
  * Implement switching between light and dark themes using Tailwind CSS and persist the setting for the user session.
* Accent color selection
  * Points: 4
  * Level: medium
  * Allow the user to select his favorite color and use it as a primary color of your theme.

## Bonus ideas

Bonuses are expected to be proposed if a large majority of the tasks are implemented. Communicate about the bonuses inside the readme file to inform about their existence, usage and self-evaluation.

* Advanced authorization such as declaring a user as an administrator with extended permissions to remove or modify any article and comment.
* Users' profile pages display user information and their articles and comments.
* Reactions on comments.
* Likes on articles.
* DevOps: Implementing Docker and Docker Compose to start the application and the storage.
* Any feature of your liking...
