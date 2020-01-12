function ShowGraph1(value){
	var yType=value;
	var xType=document.getElementById("loanTypeDropDown").value
  if (xType){
  	ShowGraph(xType,yType)
	}

}

function ShowGraph(value,yy){
	// alert(value);
	var url;
	if( yy=="borrower"){
	switch(value) {
	  case "age":
		url = "/byage";
		getAgeChart(url);
		break;
	  case "size":
		url = "/bysize";
		getSizeChart(url);
		break;
	  case "location":
		url = "/bylocation";
		getLocationChart(url);
		break;
	  default:
		url = "/byage";
	}
	}
if(yy=="balance"){
	switch(value) {
	  case "age":
		url = "/byageb";
		getAgeChart(url);
		break;
	  case "size":
		url = "/bysizeb";
		getSizeChart(url);
		break;
	  case "location":
		url = "/bylocationb";
		getLocationChart(url);
		break;
	  default:
		url = "/byage";
	}
	}

};

function getLocationChart(url){
	d3.json(url).then(function(response){
		 console.log(url);
		 

	var data = [response]


	Plotly.newPlot('plot', data);	
	});
}

function getAgeChart(url){
	d3.json(url).then(function(response){
		console.log(response);
	var data = response;	
	var layout = {barmode: 'group'};
	Plotly.newPlot('plot', data, layout);
	
	});
}
function getSizeChart(url){
	d3.json(url).then(function(response){
		console.log(response);
	var data = response;	
	var layout = {barmode: 'group'};
	Plotly.newPlot('plot', data, layout);
	
	});
	
}


function init() {
  // Grab a reference to the dropdown select element
  var yType = document.getElementById("outputType").value
  console.log(yType)
  
}



// Initialize the dashboard
init();