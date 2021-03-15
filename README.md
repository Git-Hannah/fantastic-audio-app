# Fantastic Audio App

## Documentation of process:

When reading the challenge, my first thought was: I kinda know this from my language learning app, but simpler. In that app, there is no correction happening, just a checking functionality if the recorded audio matches the pre-recorded correct audio, so there is only a true or false of each recognized word.

### *

My next thought was, how cool!!! I would like to use that app.\
My next thought was, oh dear, that is actually a bug (Wanze), which can return a different kind of text than was initially said...

### *

Because I am incredulous and curious, I ask Google what there is already on the topic:\
Found this [Guide](https://cloud.google.com/speech-to-text/docs/basics)
and [this one](https://developers.google.com/web/updates/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API)

### *
Found out something interesting which I didn't realize before: The app will need to support multiple sound file formats due to varying browser support and user- and/or host- preference, which may differ due to dealing with eg license fees.

## Tech thoughts:
The User surface should have a requirement of a microphone.\
The recorded audio will be sent to the API.\
Question: Is the correcting process built in the API? If yes, how? And, is that a stupid question?\
Question: Does the corrected audio output have to be the user's voice or does it have a saved voice recording that already is correct? (Like the app I know)

## Coding:
Well, if I watch my watch I want to get started with coding and will map out the steps, considering my level of expertise:
### Approach:
Frontend:	React\
Backend:	NodeJS, ExpressJS

## Decisions:
What I can do: Build the page with style\
What I can't do (yet!): Build the speech correction function

### *
So I go on and build the React-Frontend with `$ npx create-react-app`\
Because React gives the ideal architecture for a SPA.

Then I create the Backend:\
    • First I put all files in a new folder called 'client'\
        Because client and server run on different ports.
    • Then run `$mkdir server`\
    • `$ npm init -y` to create package.json in the backend\
    • `$ npm install express` which is the server\ 
    • In client: `$ npm install axios` to do http-requests to server\
    • In client: create components folder, to set up the organisation of the React components\
    • create Record.js component which hosts the record button and leads to the recording functionality\
    • create Button to record audio with the users' microphone and which will trigger the routes to the API\
    • Googled how to do that, found this on [Medium](https://medium.com/front-end-weekly/recording-audio-in-mp3-using-reactjs-under-5-minutes-5e960defaf10)\
tried it NOT, because will take long\
    • Focused on what I can do in the remaining time which is styling css\
    • Todo: connect Frontend to Backend and to the API.

## To start the app:
In the client folder run `$ npm start`

## That was fun! 
Even though I can't wait to actually code something like this for real, just to see what already exists is kinda mindblowing. And scary. !!!

:purple_heart:

