---
layout: post
title: (Ghetto) Database Backups
tags: tech
---

I have a server. I have a database. I want to back it up. I have to figure out a solution that:

- Is (mostly) reliable
- Gives me access to backups on the server, at my work computer and the one at home
- Did I mention the time constraint of setting one up?

Lo and behold, dropbox to the rescue.

Yup - there's a cron job that runs "mongodump" twice a day into a dropbox folder on the server. 

Which syncs with all my computers, and available on the web.

Total setup time? Less than an hour. 

See [dropbox linux](https://www.dropbox.com/install?os=lnx) and their [python](https://linux.dropbox.com/packages/dropbox.py) script to autostart/manage your dropbox via the command line.
