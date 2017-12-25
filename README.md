# Front-End Interview Test
This program should be run using two scripts:
1. node server
 -- it will provide the access to public API  https://api.mcmakler.de/v1/advertisements 
 (in current realization the result is read from a file for performance issues, but rest mode is available too)
 the instruction will run the application on the port 3000 to provide the api for the second script
2. npm run serve
this will run webpack-web-server for testing the interface for the layout

The application code contains of two React components:
- Layout which renders a single advertisement
- Puzzle which renders a puzzle of layouts and perform processing of the data received from the API.
