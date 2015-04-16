# node-toy-server

A simple low level server created by node.js.

### Get Started
Run:
```
$ npm install
$ ./bin/www
```
Check your console:
```
Server is listening 3000...
```
Go to http://localhost:3000/index.html and this is the simplest but basic server framework based on **http** module. We can play with this toy server by adding router, view and controller to simulate express.js

### File Structure

```
-bin
    www  # execute code
-public  # public folder for GET request
    index.html
server.js  # dispatch Http request 
    
```