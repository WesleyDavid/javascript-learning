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
