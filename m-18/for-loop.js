// for loop
/* for(let roastGiven = 0; roastGiven < 7; roastGiven++){
    console.log('roast den, Please')
    console.log(roastGiven)
} */


// standard way to write for-loop
// even number 
for(i = 0; i <= 20; i+=2){
    console.log(i)
}

// odd number
for(i = 1; i < 20; i += 2){
    console.log(i)
}


// display every elements of an array
let numbers = [45, 87, 89, 56, 32, 51, 25, 67, 22];

for(let i = 0; i < numbers.length; i++){
    let number = numbers[i];
    console.log(number)
}


// load products from an array
let products = ['bottle', 'watch', 'mobile', 'sunglass', 'pen'];

for(let i = 0; i < products.length; i++){
    let product = products[i];
    console.log(product)
}

// load products from an array
let items = ['bottle', 'watch', 'mobile', 'sunglass', 'pen'];

for(let i = 0; i < items.length; i++){
    let item = items[i];
    if(i == 3){
        break;
    }
    console.log(item)
}

// note: here break and continue process are almost same, just break, terminate/stop the program;on the otherhand, continue, run the program. 