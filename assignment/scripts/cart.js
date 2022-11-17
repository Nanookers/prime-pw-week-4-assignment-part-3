console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem( food ){
    console.log(`Adding item:`, food);
    basket.push( food );
    return true;
}
console.log(addItem(`Kimchi`));
console.log(addItem(`Bean Sprouts`));
console.log(`Basket is:  ${basket}`);

/*
    for( let i=0; i<basket.length; i++){
        food = basket[i++];
        console.log(basket);
    }
    return food;
}
*/
function listItems( food ) {
    let item = food;
    for( let item of basket){
        console.log(item);
    }
    return basket;
}
console.log(listItems(basket));
console.log(addItem(`Curry Paste`));
console.log(listItems(basket));