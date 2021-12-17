# Coursey

Coursey is an interactive app that lets you find and review cool KTH courses.

Coursey was built as part of a class project for DH2642 - Interaction Programming and the Dynamic Web

Coursey is available to use at : [coursey.herokuapp.com](http://coursey.herokuapp.com) _(Note: This is not a production-ready deployment.)_



### Created by:

- Abdullah
- Ayushman Khazanchi
- David Johansson
- Simon Hallak

### About the project
- The project uses [public API data from KTH](https://www.kth.se/api/)
- A full backlog is available in `LOG.md` 
- The mid-project review is available in `REVIEW.md`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses a backend of Node.js and Express. All names mentioned above contributed significantly in the development of all aspects of the project.


# Getting Started
## To setup the project locally

_Note: you will need to have a Firebase project setup and your Firebase API credentials available to use. You do not need to do any setup inside Firebase except creating a blank project._

- In the `coursey-app/frontend` folder, run: `npm install`
- In the `coursey-app` folder, run: `npm install`
- In the `coursey-app` folder, create a `.env` file with the following keys -
    ```
    API_KEY=YOUR_API_KEY_HERE
    AUTH_DOMAIN=YOUR__AUTH_DOMAIN_HERE
    PROJECT_ID=YOUR_PROJECT_ID_HERE
    STORAGE_BUCKET=YOUR_STORAGE_BUCKET_HERE
    MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_HERE
    APP_ID=YOUR_APP_ID_HERE
    MEASUREMENT_ID=YOUR_MEASUREMENT_ID_HERE
    ```
## To start the app

In the `coursey-app` folder, run: `npm run dev`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
