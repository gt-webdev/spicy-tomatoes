# spicy-tomatoes

## About

Website to post reviews for movies

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
4. Copy and paste the firebaseConfig into the ``dao.js`` file (replace the current definition of the variable)
5. If you receive an 'insufficient permissions' error, check the 'Rules' for your Cloud Firestore instance
