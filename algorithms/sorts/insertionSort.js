sort = function(elements){
	for(var i = 0; i < elements.length; i++){
		var currentNumber = elements[i];
		var j = i;
		while(currentNumber < elements[j-1] && j > 0){
			elements[j] = elements[j-1];
			j--;
		}
		elements[j] = currentNumber;
	}
	return elements;
}

exports.sort = sort;