# CH5 From Scratch Basic example

This is a beginners project taking the absolute simplest path to making a functional touchpanel in HTML5.  This uses ONLY the Crestron CRComLib and standard CSS,HTML5,Javascript.   it also will work for both joins and contracts,  the first example is joins only for simplicity and ease of understanding for those new to dipping into making touch panels with HTML.

a lot of CSS is relative positioning and has a heavy lift in learning how to manipulate it properly.   the touch panel just renders the HTML for you, so there is nothing "Crestron specific" at all in the html.   the only Crestron specific is creating the objects that the crcomlib.js will leverage to send and return information or state.



# Installation
First you will need to install node.js from https://nodejs.org  **<u>DO NOT INSTALL CURRENT</u>**  install the LTS version only, only  do this only if you do not have it currently installed.   if you accidently installed current you will need to fully  uninstall it and install the LTS version.

Then open a windows cmd prompt window with a login that has admin rights and run the command

​    `npm install -g @crestron/ch5-utilities-cli`

This will install the cli tools globally. you will **not** have to do this again for any projects on out.

Now open VS code and find the extensions icon.  in the search box type crestron.  you are looking for the Crestron Components extension the icon has CH<5> in it. install this.    There are other extensions for javascript, Html5 and CSS that will help you but this  beginner example does not use any of those.



# Setting up the project
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



 