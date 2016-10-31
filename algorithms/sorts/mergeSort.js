sort = function (elements) {
  var n = elements.length;
  var halfArr = Math.floor(n/2);
  if(n > 1){
    var restArr;
    if(n%2 != 0){
      restArr = (halfArr)+1;
    }else{
      restArr = halfArr;
    }
    var a2 = [];
    var a3 = [];

    for(var i = 0; i < halfArr; i++) a2[i] = elements[i];
    
    var arrIndex = 0;
    for(var i = halfArr; i < n; i++){
      a3[arrIndex] = elements[i];
      arrIndex++;
    }
    a2 = mergeSort(a2, halfArr);
    a3 = mergeSort(a3, restArr);

    var returnArr = [];
    var i = 0;
    var j = 0;
    for(var k = 0; k < n; k++){
      if(i >= halfArr){
        for(var k2 = k; k2 < n; k2++){
          returnArr[k2] = a3[j];
          j++;
        }
        break;
      }else if(j >= restArr){
        for(var k2 = k; k2 < n; k2++){
          returnArr[k2] = a2[i];
          i++;
        }
        break;
      }else if(a2[i] < a3[j]){
        returnArr[k] = a2[i];
        i++;
      }else if (a3[j] < a2[i]){
        returnArr[k] = a3[j];
        j++;
      }
    }
    return returnArr;
  }else{
   return elements; 
  }
}

exports.sort = sort;