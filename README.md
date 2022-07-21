# RateStudySpace

Project Description:
Our project proposal is RateMyStudySpace. This app will allow users to rate and search for study spaces, based on a variety of metrics. They can rate and search based on quietness, space, affordability, etc. In addition, they can leave rating descriptions for other users to read. This app will be targeted towards students, remote workers, freelancers; anybody who needs a space to study/work. In the backend, we plan to store information about study spaces (libraries, cafes, other types of establishments), as well as information about reviews. As a stretch, we could also store information about user data. 



## Project task requirements:
### 3-5 minimal requirements (will definitely complete)
  * Setting up(Schema, connection from frontend) MangoDB for the database. (Done)
  * Landing page (done)
  * Post a review page (done, maybe just stylistic stuff)
  * Register a new study space page (done)
  * View/Filter study spaces page left to complete: hook up
### 3-7 "standard" requirements (will most likely complete)
  * Rest Endpoints(for registering new reviews, study spaces, and filtering) (done)
  * Queries(search, filter) for endpoints to execute in the database (done, just filter last changes)
  * Styling to make a modern user interface (needs more work)
  * Aggregation component for study space (average star rating, quietness, average of all reviews) (Work on next sprint)
  * Photo gallery of study space (done, reliability testing)
  * Thumbs up functionality for reviews. (work on in next sprint, maybe)
### 2-3 stretch requirements (plan to complete at least 1!)
  * Map view of study spaces, using pins (1)
  * Users will have their personal account (Profile setup) and recommendations. (2)
  * ML model to extract key info from reviews. (3)


For Design Review July 15, 2022
  * Map view of study spaces, using pins (1)
     * allows for search radius
     * map on search page, with pinpoints of fed studySpaces
     * schema change, to allow for coordinates(lat, lon) of studySpace or addresss
     * new query + endpoint to query by distance
     * Google autocomplete search bar, autocompletes address
     
 * Aggregation component for study space (average star rating, quietness, average of all reviews) (Work on next sprint)
    * whenever user posts new review, recalculate aggregate statistics for the study space, stores in studySpace.
    * some kind of trigger.
    * mongodb script to run.
 
 * Stylistic enchancements
    * make the forms (new review, studyspace) look consistent, material ui card
    * buttons on the individual study space page
    * reformat the review boxes
 * Bug Fix
    * cacheing issue after posting new review, new review doesnt show up in studySpace page unless you refresh
    * make the landing page buttons on bottom function
    * make "Vancouver" not hard coded location
    * more error handling for failed networks request
    * remove the all reviews on bottom of new review page

## Pick 2 of your minimal requirements:
break each of them down into ~2-5 smaller tasks! ○ This will help you divide up work among your teammates
### Register a new study space page
* Front end form with submit button for inputting information
* REST endpoint on backend.
* API request body builder with all study space info on front end
* Styling classes for input fields, buttons.
### Landing page	
* Search bar component to filter
* Rest endpoint for filtering functionality.
* API request body builder with all filter info.
* Navigation bar
* Project description
* Cards for different geographical areas, when pressed go to a filter by that location.
* Styling 

## Landing Page
![LandingPageSketch](https://user-images.githubusercontent.com/64231716/170760439-13dde11f-048a-4141-adcb-16bdc0ebd61a.png)

## New Study Space Page
<img width="786" alt="NewStudySpaceSketch" src="https://user-images.githubusercontent.com/64231716/170759741-6bfcb6a2-1e1c-4272-bcd2-434f0d194a12.png">

## New Review Page
<img width="481" alt="NewReviewSketch" src="https://user-images.githubusercontent.com/64231716/170760869-c7904e58-16d6-4d98-b623-53bf455c4a35.png">
