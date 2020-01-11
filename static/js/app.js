

function ShowGraph(value){
	// alert(value);
	var url;
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

};
var year=[];
var borrowers=[];
var amount =[];


//const map1 = array1.map(x => x * 2);

function getLocationChart(url){
	var state=[];
	var balance=[];
	d3.json(url).then(function(response){
		response.map(resp=>state.push(resp.Location));
		response.map(resp=>balance.push(Number(resp.Balance)));
		console.log(response[0]);
		});
	console.log(state);
	console.log(balance);

	var data = [
  {
    x:state,
    y:balance,
    type: 'bar'
  }
];

Plotly.newPlot("by_location", data);

		


	
	};
	
	

function getAgeChart(url){};
	

function getSizeChart(url){};
	