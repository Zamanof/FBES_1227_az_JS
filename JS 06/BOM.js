// DOM - Document Object Model
// BOM - Browser Object Model

// window property
/*
innerHeight - kontentin hündürlüyü
innerWidth  - kontentin eni
outerHeight - browser pəncərəsinin hündürlüyü
outerWidth  - browser pəncərəsinin eni
screenLeft, screenX -
screenTop, screenY -
scrollX, scrollY
*/

// window methods
/*
open() - yeni boş pəncərə açmaq
open(address, id, attribute) - yeni pəncərə açmaq
stop() - pəncərənin yüklənməsini saxlamaq
close() - pəncərəni bağlmaq
moveTo(x, y)
moveBy(x, y)
resizeTo(w, h)
resizeBy(w, h)
*/
// var myWindow;
//
// function openWin() {
//     myWindow = window.open("", "", "width=250, height=250");
// }
//
// openWin()
// function resizeWinTo() {
//     myWindow.resizeTo(800, 600);
//     myWindow.focus();
// }
//
// function resizeWinBy() {
//     myWindow.resizeBy(-100, -50);
//     myWindow.focus();
// }
//
//
//
// setTimeout(resizeWinTo, 3000)
// setTimeout(resizeWinBy, 5000)
// setTimeout(()=>{
//     myWindow.close()
// }, 10000)

// navigator
/*
appCodeName     - Returns browser code name
appName         - Returns browser name
appVersion      - Returns browser version
getBattery()    - Returns battery info
connection      - Returns connection info
cookieEnabled   - Returns true if browser cookies are enabled
geolocation     - Returns a geolocation object for the user's location
language    	- Returns browser language
onLine	        - Returns true if the browser is online
platform	    - Returns browser platform
product	        - Returns browser engine name
userAgent	    - Returns browser user-agent header
*/


//screen
/*
availHeight     - Returns the height of the screen (excluding the Windows Taskbar)
availWidth	    - Returns the width of the screen (excluding the Windows Taskbar)
colorDepth	    - Returns the bit depth of the color palette for displaying images
height	        - Returns the total height of the screen
pixelDepth	    - Returns the color resolution (in bits per pixel) of the screen
width	        - Returns the total width of the screen
*/

// location
// https://www.w3schools.com/jsref/obj_location.asp

// history
/*
back()	    - Loads the previous URL (page) in the history list
forward()	- Loads the next URL (page) in the history list
go()	    - Loads a specific URL (page) from the history list
length	    - Returns the number of URLs (pages) in the history list
 */


window.history.replaceState({record: '0'}, 'page 0', '?record=0')
window.history.pushState({record: '1'}, 'page 1', '?record=1')
window.history.pushState({record: '2'}, 'page 2', '?record=2')
window.history.pushState({record: '3'}, 'page 3', '?record=3')
window.history.back()
