console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;
console.log(basket);


console.log(`<______Add Items Starts Here_______>`);
function addItem( food ){
    basket.push( food );
    console.log(`Adding item:`, food);
    return true;
}
console.log(`expect true:`, addItem(`pie`)); //returns true to show that process happenened.
console.log(`expect true:`, addItem(`meat`));
console.log(`expect true:`, addItem(`veggies`));
console.log(`expect true:`, addItem(`fruit`));

console.log(`Basket is: ${basket}`);



console.log(`<______List Items Starts Here_______>`);
// List Items follows after this

function listItems( basket ){
    for ( i in basket ){
        console.log( basket [i] ); 
    }
    return basket; 
}
console.log( listItems( basket ));



console.log(`<______is full Starts Here_______>`);
function isFull( basket, maxBasket ) {
    for( i=0; i < basket.length; i++){
        if( basket.length >= maxBasket){
            basket.splice(5);
            console.log( basket );
            return true;
        }
        else{
            return false;
        }
    }
}
console.log(isFull( basket, maxItems));
console.log(`expect true:`, addItem(`ice`));
console.log(listItems(basket));


console.log(`<______Remove Items Starts Here_______>`);

function removeItem( items, num0 ){
    for( i=0; i<items.length; i--){
    items.indexOf(num0)
    items.splice(num0,1)
    return items;
    }
    
    
}
console.log(removeItem(basket,1));
console.log(basket);