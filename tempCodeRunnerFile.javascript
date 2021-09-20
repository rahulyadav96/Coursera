var arr = "aabccdde"
var newString = arr[0]
console.log('newString:', newString)
for (var i = 1; i < arr.length; i++){

    if (arr[i] == newString[newString.length - 1])
    {
        continue;
    }

    else
    {
        
        newString += arr[i];
    }

    
}
console.log(newString);