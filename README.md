# mern_stack

##7/01/18
God... rent is due again! Didn't I just pay it last month!


##6/30/18
It's a new day!
going to add a crapton of boilerplate... redux redux redux, it will be the death of you.

make sure you are in the client directory so

cd client

npm i redux react-redux redux-thunk

added a ton of boilerplate code... gotta see the commits from last night (late). 

Today I'm going to remove the uuid from shoppingList.js since it's not used in that file anymore

I can display the static object items in the itemReducer.js file. so my boilerplate works.

I have delete items working, however my Redux dev tools stopped working, so BAH!!!! I'll figure that out later... 

Made ItemModal.js under components that is the modal window to add an item.

added addItem to the reducer, and itemModal

I'll work on connecting to the Express.js API next

need to make a request in the acitons, we need to change the item reducer. remove the static data, add loading: false since there is a delay in loading data.

Added ITEMS_LOADING to reducer.

Installed axios in client folder, this is just an HTTP client.

npm i axios

changed reducer for add delete and get. 
changed id to _id for mongo db



##6/29/18

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
Added POST and DELETE routes... works

created new folder called client for the client side app.

cd client

create-react-app (should be installed globally using npm i -g create-react-app)

changed server package.json file so we have scripts 

 "scripts": {

    "start": "node server.js",

    "server": "nodemon server.js",

    "client": "npm start --prefix client",

    "dev": "concurrently \"npm run server\" \"npm run client\"",

    "client-install": "npm install --prefix client"

  },

note with killing the port 3000, at least on my mac

lsof -i :3000

kill -9 PID

ran

npm i bootstrap reactstrap uuid react-transition-group

will start building the react app first then eventually use redux. using uuid for the static testing of the react app. 

Added AppNavBar in components directory, used reactstrap for a simple responsive "hamburger" menu.
Just added a link to my github page. 

started shoppinglist 

Made Add Item button

Made list of items

Tested adding works, however it's not connected to the back end yet, so it's only store in memory, and does not pass the ACID test, since it's not persistant.

Added delete button

added some css to App.css

Going back to study some redux... good night!

