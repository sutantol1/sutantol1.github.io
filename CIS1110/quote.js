//JAVASCRIPT
window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {
      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});

function fetchQuotes(topic, count) {
  let xhr = new XMLHttpRequest();
  let queryString = "topic=" + topic + "&count=" + count;
  xhr.addEventListener("load", responseReceivedHandler);
  xhr.responseType = "json";      
  xhr.open("GET", "https://wp.zybooks.com/quotes.php?" + queryString);
  xhr.send();
}

function responseReceivedHandler(){
   let quotesDiv = document.querySelector("#quotes");
   quotesDiv.innerHTML = ""; // Clear the content of the quotes div
   if (this.status === 200) {
      if (this.response.error) {
         quotesDiv.innerHTML = this.response.error;
      }
      else {
      const quotes = this.response;
         let html = "<ol>";
         for (let item of this.response) {
            html += `<li>${item.quote} - ${item.source}</li>`;
         }
         html += "</ol>";
         quotesDiv.innerHTML = html;
         }
      }
   else {
      quote.innerHTML = "Quote is unavailable.";
   } 
}
/*
  if (this.status === 200) {
   alert (this.response);
    const quotes = this.response;
    if (quotes && Array.isArray(quotes)) {
      let html = "<ol>";
      quotes.forEach((quote, index) => {
        html += `<li>Quote ${index + 1} - ${quote.quote} - ${quote.source}</li>`;
      });
      html += "</ol>";
      quotesDiv.innerHTML = html;
    } else {
      quotesDiv.innerHTML = "No quotes found for the selected topic.";
    }
  } else {
    quotesDiv.innerHTML = `Error: ${this.statusText}`;
  }
 
function fetchQuotes(topic, count) {
   // TODO: Modify to use XMLHttpRequest
 //Set the XMLHttpRequest's responseType to expect a JSON response.
 let xhr = new XMLHttpRequest();
 let queryString = "topic=" + encodeURIComponent(topic) + "&count=" + encodeURIComponent(count);
 xhr.addEventListener("load", responseReceivedHandler);
 xhr.responseType = "json";      
 xhr.open("GET", "https://wp.zybooks.com/quotes.php?" + queryString);
 xhr.send();

  let html = "<ol>";
   for (let c = 1; c <= count; c++) {
      html += `<li>Quote ${c} - Anonymous</li>`;
   }
   html += "</ol>";

   document.querySelector("#quotes").innerHTML = html;
  alert ("fecth Quotes"+topic + "count" + count);
}
   
function getForecast() {
  // alert("getforecaset");
   let zipcode = document.getElementById("zip").value;
   let xhr = new XMLHttpRequest();
   xhr.addEventListener("load", responseReceivedHandler);   
   xhr.open("GET", "https://wp.zybooks.com/weather.php?zip=" + zipcode);
   xhr.send();
}

function responseReceivedHandler () {
   if (this.status !== 200) {
      alert("Error making HTTP request");  
   }
   else {
      alert("response" + this.response.quote);
   }
// TODO: Add responseReceivedHandler() here
//Create a new function called responseReceivedHandler() 
//that receives the XMLHttpRequest response and displays the quotes in an ordered list. 

}
*/