# mern_stack

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