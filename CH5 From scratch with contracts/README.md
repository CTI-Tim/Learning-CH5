# CH5 From Scratch Basic example - With contracts

This is a beginners project taking the absolute simplest path to making a functional touchpanel in HTML5.  This uses ONLY the Crestron CRComLib and standard CSS,HTML5,Javascript.   it also will work for both joins and contracts.  This example uses contracts.  the contract editor files are in the "contracts" folder in the project.

# Installation
Everything done with the  first one is enough and does not have to be repeated.   



# Setting up the project
Open the folder containing the project in VS Code by selecting File->Open Folder and navigate to the html folder in the project you unzipped.

Open a termial window in VS Code after opening the folder.
If this is the first time using VS Code and if it says Windows Powershell at the top of the terminal window run the command

~~~
Set-ExecutionPolicy RemoteSigned
~~~



this will only have to be done once. you never need to do it again.  running it again will do no damage.

Now run the command to get the current crcomlib and it's assorted packages it depends on by issuing the following command in the same terminal window in your project.

~~~
npm install @crestron/ch5-crcomlib
~~~




# Build project archive for loading to the touch panel - Important change
If you have built before delete the ./dist directory and it's contents before running this command again. 

We need to tell it to include the contract so that crcomlib can read it. If you forget to include this then the contracts will not work at all. it is important to make sure you include the cse2j file.

 it is all one line and not two lines as shown below. a space after the -c and the .. is needed

~~~
ch5-cli archive -p CH5-From-Scratch-Contracts -d .\ -o dist -c ..\Contract\output\Example\interface\mapping\Example.cse2j
~~~



This will create the .ch5z file that needs to be loaded to the touchpanel it will be in a new dist folder that appears in the current working folder.



 