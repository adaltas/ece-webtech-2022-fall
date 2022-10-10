---
duration: 2h
---

# Lab: get basic skills

## Objectives

Gain knowledge in all the prerequisites:

1. Computing fundamentals: Linux, networking, shell.
2. Basic usage of the most common tools: SSH, SFTP, Git, password managers.
3. Confortable in JavaScript, CSS, HTML.
4. Master the Markdown format, be ready to respect its syntax with care.

## Notes

This work is a part of the continuous assessment of this course. It will be the basis for your final project. Your final grade will be calculated based on the final project’s result and your Git’s history.

## 1. Working groups (easy level)

Team yourself with another colleague. Only groups of two will be created. In the
event of an odd number of students, one and only one group of three person is created.

Create a private Git repository on GitHub for your group. Name it `ece-webapp-{alastname}-{blastname}`, where lastname are sorted alphanumerically. Be ready to share the link during the course.

## 2. GitHub project subscription (easy level)

Navigate to this course repository and subscribe to it by selection `Watch > All Activity`.

## 3. Work environment (medium level)

When running Windows, download a Linux VM. MacOS users don't need a virtual machine.

Windows user with not enough RAM (8GB of RAM or less) can choose to set up their computer with dual boot or use WSL. However, we don't recommend the usage of WSL. We will not support it, do it at your own risk.

[VirtualBox](https://www.virtualbox.org/) is a popular choice. For MacOS based on Apple silicon, [Multipass](https://multipass.run/docs/installing-on-macos) works great.

[Ubuntu](https://ubuntu.com/) is a good distribution to get started. [Fedora](https://getfedora.org/), [Arch Linux](https://archlinux.org/) and [NixOS](https://nixos.org/) are great as well. All instructions are provided for Ubuntu.

Set up the Linux machine including an IDE, Linux tools, ... Don't install your IDE on your Windows host machine.

## 4. Node.js installation (medium level)

Install Node.js with n-install
```
sudo apt update
sudo apt install build-essential git curl
curl -L https://git.io/n-install | bash
```

**Don't install Node.js with your package manger.**

For those choosing the Windows path, you can stick with the official installer.

## 5. Feed yourself (medium level)

Here are the tutorials and resources to study:

* [Bash base commands](https://www.educative.io/blog/bash-shell-command-cheat-sheet)
* [GameShell: a "game" to teach the Unix shell](https://github.com/phyver/GameShell)
* [`vimtutor`](https://manpages.ubuntu.com/manpages/bionic/en/man1/vimtutor.1.html) or [VIM adventures](https://vim-adventures.com/)
* [Git cheat sheet](https://git-tower.com/blog/git-cheat-sheet/)
* [Git tutorial](https://git-scm.com/docs/gittutorial)
* [Markdown](https://www.markdownguide.org/) or [Markdown Tutorial](https://www.markdowntutorial.com) for an interactive tutorial

Good general source of learning, including HTML, CSS and JavaScript:

* [Kahn academy](https://www.khanacademy.org/)   
  Free, it is a non-profit relying on donations.
* [Codecademy](https://www.codecademy.com)   
  Free with a commercial offering.
