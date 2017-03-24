var numbers = [3,7,3,4,9].sort();
	document.getElementById('given').innerText = numbers;

	// console.log('start')
// 	var dec=[],b=10;while(b--)dec[b]=b+1; // var dec=[] creating new array, b being last value, while(b--)dec[b]=b+1; values descending from b to 0 + 1 as 1 needs to the first value of an array

function find() {
	var start = document.getElementById('start').value;
	var end = document.getElementById('end').value;
	var dec=[],b=end;while(b--)dec[b]=b+1;
	var remove=[],c=start-1;while(c--)remove[c]=c+1;

	var range = _.difference(dec, remove); 

	console.log(dec);
	console.log(remove);

	console.log('range: ' + range)

	
	document.getElementById('range').innerText = "Numbers missing in selected range (" + range[0] + " - " + dec.length + "):";

var difference = _.difference(range, numbers);
document.getElementById('num').innerText = difference;
console.log('range start ' + start);
console.log('range end ' + end);
}