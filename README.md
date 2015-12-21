# Imagick
Imagick is a Jquery Library that enables pure client side Image Upload Preview, using the HTML5 FileReader API. Full Demo aavailable.

# How To Use
1.) Include JQuery using Google CDN or Locally 
2.) Include imagick.js in /lib Folder 
3.) Have somewhere a input type="file" Element in DOM 
4.) Have somewhere a container with ID preview 

# JavaScript Documentation 
Imagick creates a local object named Imagick, which currently supplies 1 function named init(), this will be called and set up automatically if option autoload is set to true in imagick.js. If not you can always manually call Imagick.init() which will automatically erase and reinit eventHandlers(). 

# Options 
There are three options available: ( /lib/imagick.js on first lines) 

var inputSelector = 'input[type="file"]'; // Selector for FileInput Element
var previewSelector = '#preview'; // Container in which the preview Image Files will appear in

var autoload = true; // if you don't want auto init you can set this to false
