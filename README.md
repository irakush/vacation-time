# vacation-time

![demo](./image.webp)


## PROJECT PITCH


## Owner/s:
Hadil, Igor, Melissa

## Project Name:
Vacation Time  

## Phase and Cohort:
Phase 2 SE-East-111323

## One sentence app description:
This app will allow people to “share their experience and rate the vacation spots we have taken them to”
Timeline:

Tuesday:
Wednesday:
Thursday:
Friday : Presentation

## Responsibilities:


Igor: CSS / Extra Patch / External API weather 

Hadil: db.json / Patch request / Edit / Reviews 

Melissa: HTML/ Delete request - Vacations descriptions / images 

## CRUD User Story
As a user, I want to be able to Create, Read, Update, and Delete my travel plans seamlessly.


## React Router Routes
/home: Home page displaying featured destinations and travel inspiration.
/explore: Explore page for browsing different destinations and packages.
/profile: User profile page for managing personal travel plans and preferences.


## Component Hierarchy

### App.js

<!-- ![demo](./drawio.png) -->
![demo](./diagram.svg) 

# Component Details
Navbar: Navigation bar for easy access to different sections.
Home: Displaying featured destinations and travel inspiration.
Explore: Listing destinations with brief information.
Profile: User dashboard for managing travel plans.
TravelPlan: Displaying details of a specific travel plan.
State/State Lifting
App: Manages global state, user authentication, and routing.
Events
DestinationCard: Click event to view detailed information.
Props
DestinationList: Receives a list of destinations to display.







## Wireframes: 

### Vacation Time
This app will allow people to “share their experience and rate the vacation spots we have taken them to”
Wireframe
CRUD User Story
As a user, I want to be able to Create, Read, Update, and Delete my travel plans seamlessly.
React Router Routes
/home: Home page displaying featured destinations and travel inspiration.
/explore: Explore page for browsing different destinations and packages.
/profile: User profile page for managing personal travel plans and preferences.
Component Hierarchy
App
Navbar
Home
FeaturedDestinations
Explore
DestinationList
DestinationCard
Profile
UserDashboard
TravelPlan
PlanDetails
Component Details
Navbar: Navigation bar for easy access to different sections.
Home: Displaying featured destinations and travel inspiration.
Explore: Listing destinations with brief information.
Profile: User dashboard for managing travel plans.
TravelPlan: Displaying details of a specific travel plan.
State/State Lifting
App: Manages global state, user authentication, and routing.
Events
DestinationCard: Click event to view detailed information.
Props
DestinationList: Receives a list of destinations to display.
db.json File Outline json


### db.json
```
{
  "plaсes": [
    {
      "id": 1,
      "name": "",
      "location": "",
      "image": "",
      "description": "",
      "cost": 0,
      "days": 0,
      "reviews": [
        {
          "id": 1,
          "name": "",
          "description": "",
          "created": ""
        }
      ]
    }
  ]
}
```

## Stretch Goals
Implement user authentication for personalized experiences.
Add a reviews/comments section for each destination.
Integrate a map feature to visualize travel plans.
Kanban Board
Link to your Kanban board (e.g., Trello, GitHub Projects) where you divide tasks among your team members.
