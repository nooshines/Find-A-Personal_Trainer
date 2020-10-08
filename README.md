# PROJECT #2

## Project Overview

Full-Stack application, users can search for personal trainers based on GEO location .
if user is a personal trainer can sign up as a trainer, create profile and make blog posts.

## TECHNOLOGIES & RESOURCES USED

    - Express JS
    - Bcrypt 
    - mongoose JS
    - cors JS
    - express-session
    - geojson
    - node-geocoder
    - moment 
    - multer
    - page


## MODELS and ROUTS
        #Auth Schema
            - username
            - password
            - email
        #Auth Routes
            - login
            - logout
            - new (sign up)     
        #Trainer Schema
         * pointSchema
            -type
            -coordinates *
            - name
            - certificate
            - address
            - bio
            - location
            - userId
        #Trainer Routes
            - create profile
            - delete profile
            - find trainer
            - get all trainers
            - get trainer by id
            - get trainer profile
            - update profile
        #Blog Schema
            - title
            - body
            - created at
            - userId
        #Blog Routes
            - create blog
            - delete blog
            - get all blogs
            - get blog by userId blogId
            - get blog by user
            - update blog
         

- **Front-end Framework **

#Tech
    * jquery
    * bootstrap
    * page
    * leaflet
    * mapquest-mapbox
    * moment

#Queries With
    * fetch
    * async await

