// register it, tell the browser where the JavaScript file of your service worker is stored
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('./service-worker.js')
    .then(function (registration) {
// Registration of service worker ok
    console.log('Registration of service worker successful with scope: ',
    registration.scope);
   }).catch(function(err) {
// Registration of service worker failed
    console.log('Registration of service worker failed with error: ', err);
    }) } else {
    console.log('Service Worker is not supported by this browser'); 
}


/*  another way to register...
if (typeof navigator.serviceWorker !== 'undefined') {
    navigator.serviceWorker.register('./mysw.js')
}    
// this is from sw1/app.js
if (navigator.serviceWorker) {
    window.addEventListener('load', () => {
	   navigator.serviceWorker.register('./service-worker.js')
	      .then(registration => console.log('SW registered'))
		  .catch(err => console.log(`SW not registered - Error: ${err}`))
    })
} else {
    console.log('Service Worker is not supported in this browser.')
}
*/

// get Name
function getName(myForm) {
    let name=document.getElementById("name").value;
    var db = getLocalStorage() || dispError('Local Storage not supported.');
    if(errorMessage) return;
    console.log("getName "+ name);
    db.setItem('name', name);
}


function getLocalStorage() {
    try {
        if( !! window.localStorage ) return window.localStorage;
    } catch(e) {
        return undefined;
    }
}

// select Background 
function selectBackground(myForm){
    //console.log("my form:"+myForm.bkgrnd.options[myForm.bkgrnd.selectedIndex].value);
    document.body.style.backgroundImage = `url(images/${myForm.bkgrnd.options[myForm.bkgrnd.selectedIndex].value})`;
}

