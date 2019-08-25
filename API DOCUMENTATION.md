# GsheetsAPI
A script to use Google sheets as a rest api

To use this go into google sheets and go to tool>script editor
copy and paste the script in the code.gs file into the script editor
And then Publish>Deploy as Web app.

Make sure you use the following settings 
Execute the app as:
Me
Who has access to the app:
Anyone,Even Anonymous

Then to test,copy the web app url and paste inside web browser.


API DOCUMENTATION

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
