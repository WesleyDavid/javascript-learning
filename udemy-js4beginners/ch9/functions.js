// For Chapter 9

function gimmeNavInfo() {
 document.write(
  "Browser name: " + navigator.appName + "<br/>" +
  "Browser version: " + navigator.appVersion + "<br/>" +
  "Cookies enabled: " + navigator.cookieEnabled + "<br/>" 
  );
} // End gimmeNavInfo()


function gimmeScreenInfo() {
 document.write(
  "<br/>" +
  "Screen height: " + screen.height + "<br/>" +
  "Screen width: " + screen.width + "<br/><br/>"
 );
} //End gimmeScreenInfo()

function changeWindowStuff () {
 var myWindow = window.open();
 myWindow.resizeBy(300,300);
 myWindow.moveTo(0,0);
} //End changeWindowStuff()
