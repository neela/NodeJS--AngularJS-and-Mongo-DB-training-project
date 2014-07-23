NodeJS--AngularJS-and-Mongo-DB-training-project
===============================================


################################################
############### GETTING STARTED ################
################################################

To get things working basically we have to do 2 set of things:

1. Git settings at the website

a. After creating an account at github.com, we have to authorise our machine at the server:
	Generate ssh key:
		ssh-keygen -t rsa
	Add it to our account (AccountSettings-->SSH Keys-->Add SSH Keys):
		Give any name and copy contents of ~/.ssh/id_rsa.pub to the Key field
	(Optional) Test: (it should report successfully authenticated)
		ssh -T git@github.com


2. Checkout the project (everything in terminal) at a local computer:

a. Make sure git is installed in the system
(for aptitude based systems like ubuntu):
sudo apt-get install git

b. git clone git://github.com/neela/NodeJS--AngularJS-and-Mongo-DB-training-project.git

That's it and you are ready to start working! :-)


################################################
################ BASIC CHECKIN #################
################################################

1. Always get the updates from the repository before starting to work
git pull

2. Edit/Create files as required

3. git add <edited_filename>

4. git commit

5. git push
