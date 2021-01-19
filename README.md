# Iro
##### A simple website for quotes and journaling inspiration
###### Anything in any way beautiful derives its beauty from itself and asks nothing beyond itself. Praise is no part of it, for nothing is made worse or better by praise. -Marcus Aurelius

## Table of Contents
* [Introduction](#introduction)
* [Features](#features)
* [Resources](#resources)
* [Contributors](#contributors)

## Introduction
Iro is a simple project built by me (Caleb Cyphers) for my third module final project at the Turing School of Software and Design. The project was to be a simple website that reaches out to an [inspirational quotes API called 'QuoteGarden'](https://pprathameshmore.github.io/QuoteGarden/) and allows the user to find and save quotes that they like for use in journaling, scrapbooking, etc.

### Learning Goals

I'm taking this project as an opprotunity to re-affirm and streamline my workflows, all the way from the ground up. This will include:

- Foundational planning
- UX flow planning
- Typechecking with PropTypes
- Wireframing
- Consistent Github workflow
- Consistent React architecture
- Clean routes with react-router
- Consistent TDD (Test Driven Development) using react-testing-library
- Consistent TDD using Cypress
- Design of clean, workable UI
- React Hooks
- Prop destructuring

### Setup

The repo was made using create-react-app and has not been deployed, so in order to view it: 

- Clone it down to a local machine, then `cd` into the repository and run `npm install` 
- Once the installation is complete, run `npm start` to spin up the development server.
- To view unit tests, run `npm test`
- To view Integration Tests, run `npx cypress open`

## Features

#### General Site Features
The site is a simple one. On the homepage, the user is greeted by a random quote from the api, along with four buttons.

![homepage](https://imgur.com/0fDvCwp.gif)

###### Saving a Quote
The 'My Quotes' page will show a small error handling message until the user saves a quote from the homepage. When the uer finds a quote they like, they can click the 'save' button on the homepage. The quote will now show up on the My Quotes page. Duplicate quotes will not be saved.
 
![saving a quote](https://imgur.com/p3rKfSw.gif)


#### Responsive Design
The CSS of this app is responsive and designed to allow it to be experienced on many shapes and sizes of screen.

![Responsive design](https://imgur.com/MrGqR2i.gif)

#### Resources

Quotes Api:
- https://pprathameshmore.github.io/QuoteGarden/

Testing:
- https://testing-library.com/docs/react-testing-library/
- https://www.cypress.io/

## Contributors
<img src="https://avatars2.githubusercontent.com/u/36242106?s=460&u=67cc9f62e495cec196581afa73f9110959c562cd&v=4" alt="Coding Dingus"
 width="150" height="auto" style="float: left" />\
**Caleb Cyphers**

[GitHub Profile](https://github.com/CalebCyphers)
