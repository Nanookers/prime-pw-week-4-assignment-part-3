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
console.log(`expect true:`, addItem(`Kimchi`)); //returns true to show that process happenened.
console.log(`expect true:`, addItem(`Bean Sprouts`));
console.log(`Basket is: ${basket}`);

//This is to set the max array length:

// List Items follows after this
console.log(`<______List Items Starts Here_______>`);
function listItems( basketItems ) {
    for( let i=0; i < basketItems; i++ ){
    console.log( basketItems[i]);
    }
    return basketItems;
}
console.log(listItems(basket));
/*
for(i in basket){
    console.log(basket[i]);
}

*/
console.log(`<______Empty Cart Moved to the End_______>`);
console.log(`expect true:`, addItem(`Curry Paste`));
console.log(`expect true:`, addItem(`Curry Paste`));
console.log(`expect true:`, addItem(`Curry Paste`));
console.log(`expect true:`, addItem(`Curry Paste`));
// isFull Follows after this
console.log(`<______is full Starts Here_______>`);
function isFull( item, maxBasket ) {
    for( i=0; i < item.length; i++){
        if( item.length >= maxBasket){
            item.splice(4);
            console.log( item );
            return item;
        }
        else{
            return item;
        }
    }
}
console.log(isFull( basket, maxItems));

console.log(`<______is full Starts Here, With Add Item_______>`);






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



