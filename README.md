# NoPlanNeeded

### NoPlanNeeded 
---
NPN is a quick and powerful random event generator.

## Background and Overview
---
As individuals living in the modern age, we are enveloped by choice. Too much choice. And finding what to do with our spare time is no exception. 

Enter NoPlanNeed; an easy-to-use and effective random event generator that allows users to filter based on their preferences and location to find the next event that is perfect for them and their friends. 

Not feeling picky? NoPlanNeeded also has a simple generator feature that requires no login or signup and will provide the user with events filtered by the users current location.

We will need to:
+ Ping multiple API's and format the responses
+ Build a database to store user data
+ Create a interactive event page that displays infromation about the event and allows users to filter preferences
+ Deisgn a user show page that shows past events attended as well as current preferences
+ Construct an interactive map that shows the user where the event is being held

## Functionality and MVP
---

[ ] User Authorization: sign up and log in
[ ] Successful execution of API calls with correct formatting
[ ] Event Display: modal shows event title and decription, and includes a map showing the location
[ ] Random event generator button is functional
[ ] Storage of User Prefences and attended events in Database
[ ] User home: Displays past events attended by the User as well as prefences for future events

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

## Accompolished over the Weekend
---
+ All members of the team read the Chrome and MERN tutorials
+ Set up database 
+ Wrote proposal README and planned work for the week
+ Implement user authorization on backend - **Stephanie**

## Group Members & Work Breakdown
---
\* Any task not assigned to an individual will be assigned to the team for completion

**Nick Ecton**, **Stephanie Hsu**, **Devin Flood**, **Clayton Christian**

## October 20 - October 21 
+ Develop frontend wireframe **Devin**
+ Research API's **Nick** & **Clayton**
+ Create User Auth **Stephanie**
+ Build README

## Ocobter 22
+ Finish deciding which API's to use **Nick** & **Clayton**
+ Begin building frontend **Devin**
+ Setup database to store user prefences and events **Stephanie**

## Ocobter 23
+ Format Api Responses to a singular requirement **Nick** & **Clayton**
+  Finish Splash page **Devin** & **Stephanie**

## Ocobter 24
+ Create event page and format API's to interact with page **Stephanie** & **Devin**
+ Build map and create functionality to interact with location of event **Nick** & **Clayton**

## Ocobter 25
+ Create User home page **Nick** & **Clayton**
+ Format API received data to be stored into Database **Stephanie** & **Devin**

## Ocobter 26
+ Test functionality of site and solve any problematic interactions

## Ocobter 27
+ Upon completion of necessary MVP's being creation of daily planner 

## Ocobter 28
+ Finish any styling and check for bugs before pushign to production


