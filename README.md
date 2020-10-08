# Tikit

### A ticket tracker web app that uses data from Github Issues

I wanted to start this project, because I do not like the current ticket tracking system that I use everyday. At the moment this is extremely bare bones, but I decided it would be fun to start the project for Hacktoberfest, and open it up to anyone who would like to add to contribute!

## Overview:
The main goal of the application is to query Github issues from a repo, and display each one as a new ticket in the dashboard of the application. I am thinking not every issue should be made into a ticket, but ones that contain a specific label, probably put on by the maintainer. The issues will also most likely have a template to follow so the ticket generation will be uniform in the dashboard. As of now, I am only concerned with querying the data from Github and populating new tickets in the "To Do" section of the board. Once that is complete, the next phase of interacting with the tickets on the dashboard can be planned out. 

At some point authentication will most likely need to be added of additional features I am thinking about, but as of right now, most of the functionality I am planning on implementing this month is using public routes. 

You will see that There is currently only a `client` folder, will most likely be adding a `server` folder when we want to save some of the data manipulations in the dashboard to a server. I am not really looking at doing this part right now. 

## Tech Stack:
The tech stack I am planning on using for the project

- [React](https://reactjs.org/docs/getting-started.html)
- [Tailwindcss](https://tailwindcss.com/)
- [Axios](https://github.com/axios/axios)
- [Github API](https://docs.github.com/en/free-pro-team@latest/rest)
- Postgres (later stages of the app)

## [Discord Link](https://discord.gg/Yn88v7y)
This is a work in progress that I would LOVE to collaborate on! This is open to everyone with any skill level, and will be in active architectural development for a while. Any input about features, specific libraries, architecture, or general questions are welcomed, and greatly appreciated! Please feel free to join the Discord server to discuss project, or ask questions. I would love to hear from you!

## How To Contribute
At some point soon, I will file some issues for work that has been hashed out. In the mean time, feel free to browse the current code, and play around with some solutions! Get creative! Hell knows I am abysmal at design...

1. Clone the repo to your computer:
```code
> git clone https://github.com/SheW0lf/Tikit.git
```

2. Set the folder to your current directory:
```code
> cd Tikit/client
```

3. Install the packages:
```code
> yarn install
```

4. Start the app:
```code
> yarn start
```

Once you have it running, make some changes in a new branch and open a Pull Request on the repo! I will probably add more details to the PR process, but for now, we will see how this goes...

# Happy Hacking!