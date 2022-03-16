//while loop a break
var i = 0;

while (i < 10 ){
    console.log(i);
    if(i == 5){
        break;
    }
    i++;   
}

// for loop a break
for(i = 0; i < 10; i++){
console.log(i);
if(i==7){
    break;
}
}

//break on array
var numbers = [12, 13, 45, 64, 85, 64 ,35, 62, 67];
for(var i = 0;  i < numbers.length; i++){
    var number = numbers[i];
    console.log(number);
    if(number > 50){
        break;
    }
}

