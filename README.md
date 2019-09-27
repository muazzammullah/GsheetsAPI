# What do i do with this
This script allows anyone to create a rest api over their google sheets data in seconds
## Step 1
On your google sheets document,Go to tools and then click on Script Editor in the dropdown

## Step 2
Copy the code from Code.gs file in this repository and paste it in the script editor under the current code.

## Step 3
Click on Publish and in the dropdown that displays,click deploy as web app.

## Step 4
There will be a few options
### Execute the app as;Choose
Me(Your email Address)
### Who has access to the app;Choose
Anyone,even Anonymous

## Step 5
Press publish button and follow **all** authorisation prompts

## Step 6
You will receive your **Current web app URL**

Congratulations you are now able to access a rest api which you can use to receive data from your sheets.Have a look below to see how to use your rest api

# API Documentation

https://script.google.com/macros/s/{id}/exec Root URL returns default status response.
To get a response you have to include the sheet name as a parameter for example
https://script.google.com/macros/s/{id}/exec?sheet=mysheet
which should return data.


| Required Parameters | Description                               |
|---------------------|-------------------------------------------|
| sheet               | Select sheet by Name                      |


| Optional Parameters | Description                               |
|---------------------|-------------------------------------------|
| sort                | Sort sheet by colomn name (all lowercase) |
|                     |                                           |
