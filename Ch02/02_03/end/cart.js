let cart = [
  {
    productId: "530",
    itemKey: "34354b059d38a963ba3a1bed499f593d",
    itemName: "Bamboo Thermal Ski Coat",
    variations: {
      sizeWomens: "medium",
      color: "periwinkle",
      price: 99.00,
    }
  }, 
  {
    productId: "532",
    itemKey: "a14cab08bca65354fd65dc6482a55ff5",
    itemName: "Slicker Jacket",
    variations: {
      sizeMens: "large",
      color: "lemon",
      price: 125.00,
    }
  }
];

const cartJson = JSON.stringify(cart);
console.log(cartJSON);

let single = {
  productId: "530",
  itemKey: "34354b059d38a963ba3a1bed499f593d",
  itemName: "Bamboo Thermal Ski Coat",
  variations: {
    sizeWomens: "medium",
    color: "periwinkle",
    price: 99.00,
  }
};

const singleJson = JSON.stringify(single);2
console.log(singleJson);
