# RateStudySpace

Rate My Study Space is an intuitive rating platform for remote workers to rate cafes and libraries based on how good they are for working in. Other users can then find these spaces easily by filtering for their location, quietness, and many other metrics.

## Project task requirements:
### 3-5 minimal requirements (will definitely complete)
  Setting up(Schema, connection from frontend) MangoDB for the database. (Completed)
  Landing page (Completed)
  Post a review page (Completed)
  Register a new study space page (Completed)
  View/Filter study spaces page (Complete)
## 3-7 "standard" requirements (will most likely complete)
  Rest Endpoints(for registering new reviews, study spaces, and filtering) (Complete)
  Queries(search, filter) for endpoints to execute in the database (Complete)
  Styling to make a modern user interface (Complete)
  Aggregation component for study space (Complete)
  Photo gallery of study space (Complete)
  Thumbs up functionality for reviews. (For the Future)
## 2-3 stretch requirements (plan to complete at least 1!)
  Map view of study spaces, using pins (Complete)
  Users will have their personal account (Profile setup) and recommendations. (For Future)
  ML model to extract key info from reviews. (For Future)
## Tech Usage
### Unit 1: HTML/CSS/Javascript
We use Material UI components in our project, styling them with CSS classes. Furthermore, Javascript is the primary language used for both our front end and back end. 
We chose Material UI components to quickly have an attractive functioning UI, without spending tons of time writing CSS.

### Unit 2: ReactJS/Redux
We use ReactJS for our front end functionality, and already mentioned, we use Material UI components. ReactJS was integral for us in making a high performance single page application. Furthermore, we use Redux through RTK queries to our backend. These queries are a seamless packaged solution for fetching data and caching them in state.

### Unit 3: Node.JS/Express
We use Node.JS and Express for our Web Server. These technologies were important for creating endpoints and business logic in our app. This business logic handles all the aggregating of reviews, submitting our data to the DB, and sending data back to the user.

### Unit 4: MongoDB/Mongoose
We use MongoDB for storing all the application data including Study Spaces and Reviews. Study Space and Review each have their own schema, with Review having a Foregin Key referencing a Study Space. In addition we also store geo coordinates created by Google Maps in our MongoDB storage. We also use MongoDB triggers to update aggregate values in a Study Space whenever a new review is posted. We use Mongoose for creating queries to query our data. This was particularly useful for our filter functionality and for the aggregation functionality.

### Unit 5: Heroku Deployment
We use Heroku for deploying our application. Because our project is a monorepo, we set up the deployment scripts so that the backend is deployed on one process, and it feeds the front end to the browser. This way, we can also have our environment variables in one place.

## Above and beyond:
For our above and beyond feature we have decided to integrate Google Maps into our application. For this integration we have maps visible in the Post Study Space pages and in the Filter Page. These maps show markers where the filtered study spaces are located. We store these coordinates in our MongoDB storage, and use MongoDb's geonear aggregation to filter radially near locations. Furthermore, we also make use of a reusable Google Maps autocomplete search bar throughout our app. This search bar will suggest locations as the user types. This is similar to the search bar that the actual Google Maps app uses (though that one is proprietary). This Google Maps integration enriches the user experience, and sets our application apart from other projects.

## Next Steps:
Our next steps would be to add user authentication to our app. Ideally, each user would have user specific features such as favorite study spaces, previous reviews, saved queries, etc. This also opens the door to implementing an ML feature to suggest spaces to a specific user. These were both stretch goals for which time did not allow completion.

## List of Contributions:
### Dennis Polyakov (Denpoly):
I made contributions to the front end by overseeing the implementation of the landing page and of the individual study space page. For the backend, I did lots of initial setup to speed up future development for my teammates. I also was instrumental in the Google Maps integration described above by creating the suggestion search bar and creating the business logic for storing/filtering geo coordinates. More generally, I used my previous experience to dictate many decisions about structure/tools for the project, which made the development process smoother and more efficient.




Rate My Study Space is an intuitive rating platform for remote workers to rate cafes and libraries based on how good they are for working in. Other users can then find these spaces easily by filtering for their location, quietness, and many other metrics.

## Project task requirements:
### 3-5 minimal requirements (will definitely complete)
  * Setting up(Schema, connection from frontend) MangoDB for the database. (Completed)
  * Landing page (Completed)
  * Post a review page (Completed)
  * Register a new study space page (Completed)
  * View/Filter study spaces page (Complete)
### 3-7 "standard" requirements (will most likely complete)
  * Rest Endpoints(for registering new reviews, study spaces, and filtering) (Complete)
  * Queries(search, filter) for endpoints to execute in the database (Complete)
  * Styling to make a modern user interface (Complete)
  * Aggregation component for study space (Complete)
  * Photo gallery of study space (Complete)
  * Thumbs up functionality for reviews. (For the Future)
### 2-3 stretch requirements (plan to complete at least 1!)
  * Map view of study spaces, using pins (Complete)
  * Users will have their personal account (Profile setup) and recommendations. (For Future)
  * ML model to extract key info from reviews. (For Future)

## Tech Usage
### Unit 1: HTML/CSS/Javascript

We use Material UI components in our project, styling them with CSS classes. Furthermore, Javascript is the primary language used for both our front end and back end. We chose Material UI components to have quickly have an attractive functioning UI, without spending tons of time writing CSS.

### Unit 2: ReactJS/Redux
We use ReactJS for our front end functionality, and already mentioned, we use Material UI components. ReactJS was integral for us in making a high performance single page application. Furthermore, we use Redux through RTK queries to our backend. These queries are a seamless packaged solution for fetching data and caching them in state.

### Unit 3: Node.JS/Express
We use Node.JS and Express for our Web Server. These technologies were important for creating endpoints and business logic in our app. This business logic handles all the aggregating of reviews, submitting our data to the DB, and sending data back to the user.

### Unit 4: MongoDB/Mongoose
We use MongoDB for storing all the applicaton data including Study Spaces and Reviews. Study Space and Review each has their own schema, with Review have a Foregin Key referencing a Study Space. In addition we also store geo coordinates created by Google Maps in our MongoDB storage. We also use MongoDB triggers to update aggregate values in a Study Space whenever a new review is posted. We use Mongoose for creating queries to query our data. This was particularly useful for our filter functionality and for the aggregation functionality.

### Unit 5: Heroku Deployment
We use Heroku for deploying our application. Because our project is a monorepo, we set up the deployment scripts so that the backend is deployed on one process, and it feeds the front end to the browser. This way, we can also have our environment variables in one place.

## Above and beyond:
For our above and beyond feature we have decided to integrate Google Maps into our application. For this integration we have maps visible in the Post Study Space pages and in the Filter Page. These maps show markers where the filtered study spaces are located. We store these coordinates in our MongoDB storage, and use MongoDb's geonear aggregation to filter radially near locations. Furthermore, we also make use of a resusable Google Maps autocomplete search bar throughout our app. This search bar will suggest locations as the user types. This is similar to the search bar that the actual Google Maps app uses (though that one is proprietary). This Google Maps integration enriches the user experience, and sets our application apart from other projects.

## Next Steps:
Our next steps would be to add user authentication to our app. Ideally, each user would have user specific features such as favorited study spaces, previous reviews, saved queries, etc. This also opens the door to implementing an ML feature to suggest spaces to a specific user. These were both stretch goals for which time did not allow completion.

## List of Contributions:

### Dennis Polyakov (Denpoly):
I made contributions to the front end by overseeing the implementation of the landing page and of the individual study space page. For the backend, I did lots of initial set up to speed up future development for my teammates. I also was instrumental in the Google Maps integration described above by created the suggestion search bar and creating the business logic for storing/filtering geo coordinates. More generally, I used my previous experience to dictate many decisions about structure/tools for the project, which made the development process smoother and more efficient.
