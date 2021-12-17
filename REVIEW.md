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