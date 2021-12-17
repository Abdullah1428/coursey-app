# Project Log

_Note: this log is not exhaustive._ 

## Auth
- [x] Add username to user creation (first part of email)

## MyCoursey
- [x] We need to add FeedbackCard back as now there are a few too many differences in Course and Feedback card. Le sigh.
- [x] Improve layout of profile that is being shown (maybe two columns)
- [x] Make email Text field into Input Field (but disabled)
- [x] Add username field to mycoursey (depends on Auth above)
- [x] Api to fetch all user reviewed courses so that we can display that on mycoursey screen on the frontend.
    - Same functionality/presenter API as Overview cards
    - So to do that we can have a presenter with a useState for userCourses and then calling an api which sends the user courses as a response and then we set the state in the useEffect and pass along this state to the view where we can display all courses as Cards. 
- [x] Clicking on the course card at mycoursey will display a modal (Modal component from bootstrap) which will contain the user feedback given. 
    - To do that we can have a common component modal and then pass along the data to that modal to display.
    - Contains full feedback and link to the course details view for that course

### CourseDetail Page
- [x] Put Goals, About, etc in a card layout (shadow etc) 
- [x] Put details below the image also in a layout as above 
- [x] Shadow behind images
- [x] Show overall rating

### Overview Page
- [x] Same modal popup as MyCoursey
- [x] Modal onClick doesn’t work as there is a Link on the entire card
- [x] The Link needs to go back on the title and course code so that the modal and card link to different things again
- [x] Show list of popular course cards
- [x] Fix spacing of button really far away from cards

### SearchCard (FindCoursesView)
- [x] Use this card to set layout guidelines for other cards

### CourseCard (used in OverviewView)
- [x] Change to card styling from FindCoursesView

### Card layout (used in showing feedback)
- [x] Change ListGroup to card styling from FindCoursesView

### Carousel (Login/Register)
- [x] An about carousel with little info about coursey so that our visitors have good idea what are they actually looking at (from the review)
- [x] 3/4 slides with KTH background
- [x] Login/Register
- [x] Should we have a password reset functionality?
    - This is only possible via password reset email through firebase which is a simple function call but still...

### Layout/Styling
- [x] Set color theme - 1 primary color and 2 accent colors (used for things like links and emphasis)
- [x] No random rendering of components (search view re-renders images as you type)
- [x] Ensure consistent theme/UI across pages
- [x] Fix website copy anywhere there’s spelling errors or random capitalization etc 

### UX
- [x] FIX THE DAMN CARDS
- [x] Find better carousel pictures so text is more visible (darker backgrounds)
- [x] orderBy doesn’t work so the “Recent Activity” section on the Overview page always shows the same 3 courses.
- [x] Navbar links are showing up in a different shading/color than other nav items
    - Something within in-built CSS of LinkContainer is doing this
- [x] Document user evaluation (as well as anyone else who has done them)

### User evaluations
- [x] Find solutions for user evaluation feedback

### General
- [x] Removing unnecessary components
- [x] Deploying the final version with updated ReadMe.
