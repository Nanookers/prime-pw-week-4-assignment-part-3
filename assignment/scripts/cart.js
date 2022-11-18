console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
console.log(basket);

function addItem( food ){
    basket.push( food );
    console.log(`Adding item:`, food);
    return true;
}
console.log(addItem(`Kimchi`));
console.log(addItem(`Bean Sprouts`));
console.log(`Basket is:  ${basket}`);


function listItems( index ) {
    for( let index of basket){
        console.log(index);
    }
    return index;
}
console.log(listItems(basket));
console.log(addItem(`Curry Paste`));
console.log(listItems(basket));

function empty(index) {
    index = []; 
    console.log(`the cart has no items:`, index);
    return index;
}
console.log(empty(basket)); 
