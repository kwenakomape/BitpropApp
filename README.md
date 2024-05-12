# BitpropApp
A system that allows prospective tenants to view available properties and register their interest for specific properties. The system should, via email, notify the agent responsible for the relevant property when a tenant has indicated interest.


# Please follow the instructions below to run the application succesfully


## Development


From your terminal in the order shown:

```sh
npm install
node database.js
node crud.js
node Server.js

After running those commands open localhost on port 3000 to run the application

```
* As I read from the document you have two agents ,I also created two gmail acounts that agent they are going use

# Adim/agent detais to log in the Gmail account to check if the recieved messages

 Agent 1 Details:
   email: Fezco0963@gmail.com 
   password : Lele@0714829314  

 Agent 2 Details:
   email: keithsamuel70test1@gmail.com
   password : Kwena@2024
   
# Adim/agent detais to log in the system and see tenants full details

 Agent 1 Details:
   email: Fezco0963@gmail.com  
   password : 54656

 Agent 2 Details:
   email: keithsamuel70test1@gmail.com
   password : 54656 


# Pleas make you enter the details correctly in order access the system


# Pointers

 * I assumed there are only ten properties on the app, I used random properties from different agencies around the country 
   because I couldn't find specific information about Bitprop properties, so I did make up the data about properties

 * Important note, I used javasript for backend logic instead of python, I can always switch to python,but in this case
   I found as I was building it was effient,thats the only thing different from the instruction.
 * For my front end I used ccs,html and javascript, I used bootstrap for user friendly interface
 * I added and extra feature to view all the agents avaible at Bitprop and their details
 * Each properties has enough information to help tenant make a better decision
 * Once the tenants shows some interest they can send message notification to the Agent responsible for the property,
   they can actually write message and it will be recieved by the agent on their email.
 * I ensured the link to the site(which is localhost) is included so that the agent can log in from their email.

 * I used nodemailer module to setup an email external API. it uses SMTP transport machanisn
 * In the Navbar on the home pages I have Buy and Developments items , I used assumed  Bitprop deals
   mostly with rental properties so when you hover on them you should see message that says 'nothing yet'.
 * Each propertias displayed has all the information including types of room,bathrooms  etc
 * As I said ,I was making up the data ,we just need to replace the data with the actual data from the
  the Bitprop database.
 * The tenants information is submiited to the sqllite database through node express server
 * Initially I added the Agent/Admin  and property data, I made sure Agent/Admin have access to the privilege system that a tenant wont have
 * The admin site will show table of all the tenants and their interest so the agency can be able to commuicate with them further
 * The Admin can also see other Agency assigned properties and see who have showed interest in them


