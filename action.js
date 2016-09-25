//grab the search token, separated by spaces
window.onload=function(){
var buttonclick = document.getElementById("button");
buttonclick.addEventListener("click", function(){
	var xmlhttp = new XMLHttpRequest();
	var search = document.getElementById('search').value;
	//var realsolr = "http://localhost:8983/solr/gettingstarted/select?indent=on&q=" + search + "&wt=json";
    var fakesolr = "https://api.github.com/users/mralexgray/repos"; //remove this fake instance
    
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
};
	xmlhttp.open("GET", fakesolr, true);
	xmlhttp.send();

//structures the JSON response and injects into HTML front-end 
function myFunction(arr) {
    var output = "";
    var i;
    var datascape = document.getElementById("datatable");
    for(i = 0; i < arr.length; i++) {
    	var row = datascape.insertRow(i+1);
    	var cell0 = row.insertCell(0);
    	var cell1 = row.insertCell(1);
    	var cell2 = row.insertCell(2);
    	cell0.innerHTML = arr[i].id;
		cell1.innerHTML = arr[i].name;
		cell2.innerHTML = '<a href="' + arr[i].url + '">' + "Open" + '</a><br>';
    }
}
});

}