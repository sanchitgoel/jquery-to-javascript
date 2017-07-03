

document.querySelectorAll("nav a").forEach(function(e,i){
	e.addEventListener("click",function(event){
		event.preventDefault();
		let url = "includes/" + this.getAttribute("href") + ".html";
		let xhttp = new XMLHttpRequest();
		  xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
			 document.getElementById("main").innerHTML = this.responseText;
			}
		  };
		  xhttp.open("GET", url, true);
		  xhttp.send();
		
	});
});