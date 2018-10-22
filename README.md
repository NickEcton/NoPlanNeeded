# NoPlanNeeded

### NoPlanNeeded 
---
NPN is a quick and powerful random event generator. You can check out a [live](https://www.google.com) demo here!

## Background and Overview
---
As individuals living in the modern age, we are enveloped by choice. Too much choice. And finding what to do with our spare time is no exception. 

Enter NoPlanNeed; an easy-to-use and effective random event generator that allows users to filter based on their preferences and location to find the next event that is perfect for them and their friends. 

Not feeling picky? NoPlanNeeded also has a simple generator feature that requires no login or signup and will provide the user with events filtered by the users current location.


## Functionality and MVP
---
- [ ] User Authorization: Users should be able to sign up and log in
    - [ ] Users in the Database
    - [ ] Form with the user login and sign up
    - [ ] Splash page and nav bar
- [ ] Random event generator button that fetches a random event
    - [ ] Successful execution of API calls with correct formatting
    - [ ] Logged-in Users will have their preferences filtered by their preferences
    - [ ] Non logged-in users will be given any random event
- [ ] Event show page: modal shows an event's title and decription, and includes a map showing the location
    - [ ] Construct an interactive map that shows the user where the event is being held
- [ ] User show page: Displays past events attended by the User as well as preferences for future events
    - [ ] Storage of User's preferences and previously attended events in Database
    - [ ] Users can like or dislike an event 
    
### Bonus Features
- [ ] Users that dislike an event, will not be suggested that event
- [ ] NoPlanNeeded will be modified to support media-queries


## Technologies & Challenges
---
No Plan Needed is a web application built on MongoDB utilizing express.js as a framework. The database will be used to store user information, preferences, and previous events attended.

Backend Technical Challenges:
- Events should not be saved into the database unless a user decides to attend
- Users preferences for event filtering should be saved in the database

These events will be selected randomly from a number of APIs, based on user preference. APIs used to generate events: Google Places, Hiking Project, Eventful, izi Travel Tours, and possibly more.

API Technical Challenges:
- Because events come from multiple sources, they first have to be normalized before being placed into the application state
- Events should be able to be filtered for numerous preferences. These include: free/paid events, restaurants, bars, concerts, outdoors activities, etc.
- Random events should come from random categories (i.e. if there are mostly restaurants around, we do not want 9/10 button clicks to result in a restaurant)

The frontend will be displayed using React and Redux to keep the page responsive, and the state up to date.

Frontend Technical Challenges:
- The app should be functional without having to sign up, but signing up offers a few benefits such as saving preferences and events attended
- The event generator should not take a long time to send API requests, parse events, choose and show one

## Accomplished over the Weekend
---
+ Members have read/watch MERN tutorials
+ MongoDB (database) is set up with users
+ Wrote README **Nick and Clayton**
+ Researched different APIs **Nick and Clayton**
+ Logo, wireframes, UI, and UX **Devin**
+ Started user authorization on backend - **Stephanie**

## Group Members & Work Breakdown
---
\* Any task not assigned to an individual will be assigned to the team for completion

**Nick Ecton**, **Stephanie Hsu**, **Devin Flood**, **Clayton Christian**

## October 20 - October 21 
+ Develop frontend wireframe **Devin**
+ Research API's **Nick** & **Clayton**
+ Create User Auth **Stephanie**
+ Build README

## Octobter 22
+ Finish deciding which API's to use **Nick** & **Clayton**
+ Begin building frontend **Devin**
+ Setup database to store user prefences and events **Stephanie**

## Octobter 23
+ Format Api Responses to a singular requirement **Nick** & **Clayton**
+  Finish Splash page **Devin** & **Stephanie**

## Octobter 24
+ Create event page and format API's to interact with page **Stephanie** & **Devin**
+ Build map and create functionality to interact with location of event **Nick** & **Clayton**

## Octobter 25
+ Create User home page **Nick** & **Clayton**
+ Format API received data to be stored into Database **Stephanie** & **Devin**

## Octobter 26
+ Test functionality of site and solve any problematic interactions

## Ocobter 27
+ Upon completion of necessary MVP's being creation of daily planner 

## Ocobter 28
+ Finish any styling and check for bugs before pushign to production


