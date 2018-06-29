# mern_stack

6/29/18

This is just me figuring out MERN stack... it's just a shopping list app, no security at this time.

Started with 

npm init
npm i express body-parser mongoose concurrently

then used nodemon as a dev dependency using -D

npm i -D nodemon

Changed package.json so we have 
"scripts": {
    "start": "node server.js",
    "server": "nodemon server.js"
  },

  added .gitignore file

Added server.js and connections to database on mlabs.
Added keys.js file and config directory. added example file for this since I don't want the db to leak
tested server on port 5000, did not deploy to offsite server. 

started creating model in mongoose, models directory, Item.js file inside has the model.

added routes and api folders, and added items.js file
added GET route.

tested using postman, http://localhost:5000/api/items, got a 200 and an empty set back, so it's good



