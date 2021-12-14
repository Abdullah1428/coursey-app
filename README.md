# Coursey

Coursey is an interactive app that lets you provide feedback on KTH courses and helps you find new and interesting courses to take.

Bonus feature if we can get time: Coursey also recommends similar courses students can take based on the courses they’ve previously taken.

Available at: http://coursey.herokuapp.com


### Created by:
- Abdullah
- Ayushman Khazanchi
- David Johansson
- Simon Hallak

---

# Getting Started

## To setup the project

In the `coursey-app/frontend` folder, run: `npm install`

In the `coursey-app` folder, run: `npm install`

## To start the app

In the `coursey-app` folder, run: `npm run dev`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Mid Project Review

## What we have done so far:

- A skeleton structure of the layout of the app with the navigation bar and basic structure of the pages.
- Created custom components that we can re-use like Card component, Rating component, Loader, etc.
- Detailed View page for course detailed information
- React router setup for navigation through the application (not all links work fully yet).
- A simple Express-based Nodejs backend setup that calls the KTH apis and resolves an issue we were having with hitting the KTH api directly from React frontend (CORS issue).
- A model representing each course with course details that come from KTH course API. We are trying to follow as closely the MVP pattern of architecture presented in the course.
- Presenters that interact with the Model and dumb Views to present our API data  
- Two sources of API data currently being pulled -
    - https://www.kth.se/api/kopps/v2/courses?l=en
    - https://www.kth.se/api/kopps/v2/course/DH2642/detailedinformation?l=en (course ID is dynamically used in our app)
- Two main screens that are setup right now:
    - http://coursey.herokuapp.com/courses: Returns API data of 12 courses from KTH API
    - http://coursey.herokuapp.com/course/:id: Returns detailed course data from API for the course ID that is clicked/passed in the url
- Dummy data setup for layout/UI purposes for ratings and user feedback


## What we still plan to do:

- Possibly implementing redux into the application for better handling of application state
    - Currently the KTH api takes a really long time to respond each time for /courses
- Integrating Firebase authentication
- Creating Firebase database for our user feedback model
    - This will be for user-generated data stored in Firebase backend
- Layout for user course feedback form
- Presenters and views and components related to user feedback flow
- MyCoursey screen that displays the user’s past feedbacks and courses taken.
- Overview screen that gives an overview of user activity
- About page (goes over the history of Coursey)
- Basically a user profile screen with user details and user’s activity.
- Search bar for find courses screen that allows users to search by course code or course name
- Creating splash/welcome screen that integrates login and sign up functionality
- Universal styling for the whole website once all layout and UI is ready
- Pagination in main screen (if required) 
- Recommendations (maybe? We’re not sure if we enough time for this yet)
- Your project file structure (short description/purpose of each file)

## Overall structure
### Root: coursey-app
- backend
- frontend
- README.md
- package.json
    - dependencies and configuration of backend server

### In the `backend` folder:
- `app.js`: initializing express server and all routes for the backend api
- `server.js`: exposing the server on a port
- `controllers`: where all our controllers are defined that hit external KTH API data sources
- `routes:` defines routes for each controller above

### In the `frontend/src` folder:

- `index.js`: Starting point of the app, calls App.js
- `App.js`: Exposing all our components for the React frontend and wrapping them in react-router for navigation
- `components`: all re-usable common components defined here
- `models`: defines the KTH course model for now, will have other user models as well for application state management
- `presenters`: presenters for course list and course detail, will have others as well
- `views`: defines the UI layouts for our pages
- `package.json`: dependencies and configuration of frontend project
