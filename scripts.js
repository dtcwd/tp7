// tp6 java script 
// function to load files from a url "fromfile" into object identified by "whereTo"
function loadFileInto(fromFile, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
			if ((this.readyState == 4) && (this.status == 200)) {
				document.querySelector(whereTo).innerHTML += this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
			}
		
	} // end ajax.onreadystatechange function

	// initiate request and wait for response
	ajax.send();

}

window.onload = function() {
  
  loadFileInto("ingredients.html", "#ingredients ul");
  loadFileInto("equipment.html", "#equipment ul");
  loadFileInto("directions.html", "#directions ol");
  
  document.querySelector("#pagebanner h1").classList.add("tp");
  
  document.querySelector("#pagebanner h1").onclick = function() {
    
    this.classList.toggle("color");
  }
  
  document.querySelector("#columns #ingredients").onclick = function() {
    
    this.classList.toggle("show");
  }
  
  document.querySelector("#columns #equipment").onclick = function() {
    
    this.classList.toggle("show");
  }
  
  document.querySelector("#columns #directions").onclick = function() {
    
    this.classList.toggle("show");
  }
  
  document.querySelector("#columns #equipment ul").innerHTML += "<li>Electric Mixer</li>";
  
  
  
}// end window onload 