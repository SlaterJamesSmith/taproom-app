## Taproom/Pub Menu App
#### _Angular practice, homework as assigned by Epicodus, 3/27/19_

#### Slater Smith

### Description

Application built for Angular practice using example persona stories from Epicodus homework assignment. The application is meant to provide potential bar/pub employees with a tool for entering and editing information about the beers it carries on tap.

#### Program behavior specifications:
| Behavior | Input | Output |
| --------------------------- | ------------------- | ------------------- |
| If a user submits information into form, a new keg with inputed specs will appear| User enters new beet name, brand, price, and alcohol percentage into respective form inputs and clicks 'submit' | New keg information appears below default list |
| User can edit existing information for any existing keg| User clicks 'Edit' button below list starting with 'keg2' | New form appears at the bottom of the page |
| Edited keg information is saved in by the browser | After clicking 'Edit' the user enters new information in the new form inputs and clicks 'Done'| New inputted content is saved to its respective list item |


### Technologies and Resources

* Angular
* npm & Node

### Setup Instructions

1. Clone this repository to your desktop at https://github.com/SlaterJamesSmith/taproom-app
2. Use a terminal of your choice to access the webpage and its files by inputting: "git clone {the above clone link}"
3. If homebrew is not yet installed on your Mac, install it by running the following command in your terminal: "$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
4. If you are not using a Mac, and homebrew is not yet installed, go to the node website and follow appropriate installer for your operating system at https://nodejs.org/en/download/
5. If typscript is not yet installed on your machine, run "$ npm install typescript -g" in your terminal.
6. To install the correct version of angular on your machine, run "$ npm install -g @angular/cli@1.6.5" in your terminal
7. If you receive the error "npm ERR! cb() never called!", you may need to update node with the command "$ brew upgrade node"
8. In your terminal, navigate from your desktop to your newly cloned directory by running the command "$ cd nyt-clone" in your terminal.
9. In the nyt-clone directory, run "ng build --prod" and then "$ ng serve" in your terminal.
10. Open application in your preferred web browser (for best performance, use Google Chrome) and navigate to the url "http://localhost:4200/"

### License

*This software is licensed under the MIT license*
Copyright (c) 2019 **_Slater Smith_**
