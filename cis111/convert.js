window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // TODO: Complete the function
   
   let convertBtn= document.getElementById('convertButton');
   let degreesFahrenheit = document.getElementById("fInput");
   let degreesCelsius = document.getElementById("cInput");

   convertBtn.addEventListener('click', convertHandler);
      //  degreesCelsius.addEventListener("input", clearOpposingField);
      // degreesFahrenheit.addEventListener("input", clearOpposingField);
      // Add appropriate event listeners
   degreesCelsius.addEventListener("input", function () { clearTextbox(degreesFahrenheit); });
   degreesFahrenheit.addEventListener("input", function () { clearTextbox(degreesCelsius); });
}

function convertHandler() {
   // Here you get a reference to the DOM element with id degreesCelcius
   let degreesFahrenheit = document.getElementById("fInput");
   let degreesCelsius = document.getElementById("cInput");

   // Clear previous error message
   document.getElementById('errorMessage').innerHTML = "";
   
   if (degreesCelsius.value !== ""){
     // alert ("cel " + degreesCelsius.value);
      if (isNaN(parseFloat(degreesCelsius.value))) {
         document.getElementById('errorMessage').innerHTML = degreesCelsius.value +
         " is not a number";
      }
      else {
         var fahrenheit = convertCtoF(degreesCelsius.value);
         degreesFahrenheit.value = parseFloat(fahrenheit.toFixed(2));
      }
   } 
   else if (degreesFahrenheit.value !== "") {
      //alert ("fah " + degreesFahrenheit.value);
      if (isNaN(parseFloat(degreesFahrenheit.value))) {
         document.getElementById('errorMessage').innerHTML = degreesFahrenheit.value +
         " is not a number";
      }
      else {
         var celc = convertFtoC(degreesFahrenheit.value);
         degreesCelsius.value = parseFloat(celc.toFixed(2));
      }  
   }
   // change image based to reflect temperature
   var image = document.getElementById('weatherImage');
   if (parseFloat(degreesFahrenheit.value) <32) {
      image.src = "cold.png";
   }
   else {
      if (degreesFahrenheit.value <= 50) {
      image.src = "cool.png";
      }
      else {
      image.src = "warm.png";
      }
   }
}

function convertCtoF(celcius) {
   // °F = °C * 9/5 + 32 
    return (parseFloat(celcius) * 9/5 )+ 32;

}

function convertFtoC(fahrenheit) {
    // °C = (°F - 32) * 5/9
   return (parseFloat(fahrenheit) - 32) * (5 / 9); 

}

function clearOpposingField(event) {
   if (event.target.id === "cInput") {
     degreesFahrenheit.value = "";
   } else if (event.target.id === "fInput") {
     degreesCelsius.value = "";
   }
 }
 function clearTextbox(textInput) {
   textInput.value = "";
}
