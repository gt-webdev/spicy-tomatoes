# spicy-tomatoes

## About

Tutorial on how to create a website to post reviews for movies.

The completed code can be seen in the 'complete' branch. The 'main' branch contains the starter code for the tutorial. 

## Required Software

- [VSCode](https://code.visualstudio.com/download)
- [Live Server Extension for VSCode](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

## Get Started

1. Download or clone this repository
2. Open the folder in VSCode
3. Click the 'Go Live' button at the bottom-right to start a live server (ensure you  have the live server extension installed for VSCode)

![VSCodeGoLive](https://github.com/ritwickdey/vscode-live-server/raw/HEAD/images/Screenshot/vscode-live-server-statusbar-3.jpg)

4. Follow this tutorial: [https://github.com/gt-webdev/spicy-tomatoes/wiki/1.-Intro](https://github.com/gt-webdev/spicy-tomatoes/wiki/1.-Intro)

## How to Use Your Own Firebase Database

1. Create a new Firebase project
2. Enable Firestore Database in 'test' mode (this can be found in the 'Build' drop-down on the left side of the interface)
3. Go back to 'Project Overview' and click 'Add app' to create a new 'Web' app
4. Copy and paste the firebaseConfig into the ``dao.js`` file (replace the current definition of firebaseConfig)
5. If you receive an 'insufficient permissions' error, check the 'Rules' for your Cloud Firestore instance

## Screenshots

<img width="1498" alt="Screenshot 2023-02-17 at 7 24 43 PM" src="https://user-images.githubusercontent.com/7110480/219820724-8761b403-70bd-49f9-96a6-ef4e9c4c1403.png">

<img width="1499" alt="Screenshot 2023-02-17 at 7 24 48 PM" src="https://user-images.githubusercontent.com/7110480/219820730-cd514220-1c5c-4345-925c-db55e01e18f6.png">
