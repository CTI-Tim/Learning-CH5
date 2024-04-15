<img src="https://img.shields.io/badge/Language-HTML5-yellow"> <img src="https://img.shields.io/badge/Language-Javascript-green"><img src="https://img.shields.io/badge/Language-SIMPL-forest"><img src="https://img.shields.io/badge/Language-C Sharp-blue"><img src="https://img.shields.io/badge/Platform-Crestron 4 series-blue"> <img src="https://img.shields.io/badge/CTI-Examples-blue">  <img src="https://img.shields.io/badge/Use-Educational-green"> <img src="https://img.shields.io/badge/Copyright-Crestron-blue"> <img src="https://img.shields.io/badge/License-Restricted-orange"><img src="https://img.shields.io/badge/Support-NONE-red">

# CH5/HTML5 for Crestron getting started

This is my personal journey walking through making HTML5 touch panels make sense for myself and the learning process.    I understand the power of the Crestron Idea of leveraging  Angular and React and using typescript instead,  but this creates a giant steep learning curve that ignores all the basics.



This is my take on the process.  separate little examples as simple as possible to do specific tasks. Is this the  Crestron best practices?  No  not at all.   Is this the official way of learning?  No.   It's Tim's way of learning.

Each step is a single folder with everything needed in that folder.

These files are not production ready.   in fact many of them are a giant mess that I need to clean up. But It's important that some actual beginner examples get out there so others can learn.   Again it's my personal opinion that the current CH5 learning process is overly complex.  I am trying to reduce it to smaller easier to eat  small bite examples.



# Installation and set up
First you will need to install node.js from https://nodejs.org  **<u>DO NOT INSTALL CURRENT</u>**  install the LTS version only, only  do this only if you do not have it currently installed.   if you accidently installed current you will need to fully  uninstall it and install the LTS version.

Then open a windows cmd prompt window with a login that has admin rights and run the command

​    `npm install -g @crestron/ch5-utilities-cli`

This will install the cli tools globally. you will **not** have to do this again for any projects on out.

Now open VS code and find the extensions icon.  in the search box type crestron.  you are looking for the Crestron Components extension the icon has CH<5> in it. install this.    There are other extensions for javascript, Html5 and CSS that will help you but this  beginner example does not use any of those.



# Setting up the project settings
Open the folder containing the project in VS Code by selecting File->Open Folder and navigate to the html folder in the project you unzipped.

Open a termial window in VS Code after opening the folder.
If this is the first time using VS Code and if it says Windows Powershell at the top of the terminal window run the command

 `Set-ExecutionPolicy RemoteSigned`

this will only have to be done once. you never need to do it again.  running it again will do no damage.

Now run the command to get the current crcomlib and it's assorted packages it depends on by issuing the following command in the same terminal window in your project.

 `npm install @crestron/ch5-crcomlib`




# Build project archive for loading to the touch panel
If you have built before delete the ./dist directory and it's contents before running this command 

`ch5-cli archive -p CH5-From-Scratch -d ./ -o dist`

This will create the .ch5z file that needs to be loaded to the touchpanel it will be in a new dist folder that appears in the current working folder.



 