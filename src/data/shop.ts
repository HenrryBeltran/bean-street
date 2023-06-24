const shopItemList = [
  {
    section: "Hot Coffees",
    type: "drink",
    items: [
      {
        name: "Americano",
        description:
          "This popular coffee drink smooths the bitterness of espresso with hot water.",
        tip: "Espresso and hot water",
        imageUrl: "",
        price: 4.5,
        customizeTags: { sweetener: "none", milk: "none", size: "regular" },
      },
      {
        name: "Cappuccino",
        description:
          "A cappuccino is the perfect balance of espresso, steamed milk and foam. It has a bold coffee taste and some sweetness from the naturally occurring lactose sweetener in milk.",
        tip: "Espresso, steamed milk, and frothed milk",
        imageUrl: "",
        price: 5.0,
        customizeTags: { sweetener: "none", milk: "steamed milk", size: "regular" },
      },
      {
        name: "Espresso Coffee",
        description:
          "Espresso is a concentrated form of coffee served in small, strong shots and is the base for many coffee drinks. Is stronger, thicker, and higher in caffeine.",
        tip: "Finely ground beans brewed under high pressure",
        imageUrl: "",
        price: 4.0,
        customizeTags: { sweetener: "none", milk: "none", size: "regular" },
      },
      {
        name: "Latte Coffee",
        description:
          "This espresso is then combined with several ounces of steamed milk to create a rich, creamy beverage that has a more subtle espresso taste.",
        tip: "Espresso, steamed milk, and a layer of froth",
        imageUrl: "",
        price: 5.5,
        customizeTags: { sweetener: "none", milk: "steamed milk", size: "regular" },
      },
      {
        name: "Latte Macchiato Coffee",
        description:
          "The macchiato is an espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through.",
        tip: "Steamed milk and espresso",
        imageUrl: "",
        price: 6.0,
        customizeTags: { sweetener: "none", milk: "steamed milk", size: "regular" },
      },
    ],
  },
  {
    section: "Hot Drinks",
    type: "drink",
    items: [
      {
        name: "Hot Chocolate",
        description:
          "Some people might say it tastes rich and chocolatey, while others might say it tastes sweet and creamy. No matter how you describe it, hot chocolate is a wintertime favorite that is sure to warm you up on a cold day.",
        tip: "Steamed milk and chocolate syrup, with marshmallows",
        imageUrl: "",
        price: 5.0,
        customizeTags: { sweetener: "sugar", milk: "steamed milk", size: "regular" },
      },
    ],
  },
  {
    section: "Cold Coffees",
    type: "drink",
    items: [
      {
        name: "Cold Brew Coffee",
        description:
          "It's sweeter and smoother - Because the coffee grounds aren't exposed to high temps, cold brew coffee usually tastes more flavorful and less bitter.",
        tip: "Coffee brewed with cold water",
        imageUrl: "",
        price: 6.5,
        customizeTags: { sweetener: "none", milk: "none", size: "regular" },
      },
      {
        name: "Iced Latte",
        description:
          "Our Iced Latte turns your favorite morning beverage into a refreshing drink that you can enjoy at any time of the day.",
        tip: "Latte served over ice",
        imageUrl: "",
        price: 6.0,
        customizeTags: { sweetener: "none", milk: "whole milk", size: "regular" },
      },
      {
        name: "Frappe",
        description:
          "An iced beverage that has been shaken, blended or beaten to produce a tasty, foamy, and refreshing drink.",
        tip: "Iced coffee blended with milk and ice",
        imageUrl: "",
        price: 6.5,
        customizeTags: { sweetener: "none", milk: "whole milk", size: "regular" },
      },
      {
        name: "Matcha Latte",
        description:
          "A matcha latte consists of matcha powder (made from the finely-ground leaves of certain green tea plants), water, and milk.",
        tip: "Matcha powder and steamed milk",
        imageUrl: "",
        price: 6.5,
        customizeTags: { sweetener: "none", milk: "coconut milk", size: "regular" },
      },
    ],
  },
  {
    section: "Sandwiches & more",
    type: "food",
    items: [
      {
        name: "Chicken Wrap",
        description: "",
        tip: "Chicken, lettuce, and dressing wrapped in a tortilla",
        imageUrl: "",
        price: 8.5,
        customizeTags: { adjustOrder: "Make adjustments to this order" },
      },
      {
        name: "Ham Sandwich",
        description: "",
        tip: "Sandwich with ham and other fillings",
        imageUrl: "",
        price: 8.0,
        customizeTags: { adjustOrder: "Make adjustments to this order" },
      },
      {
        name: "Panini Sandwich",
        description: "",
        tip: "Grilled sandwich with various fillings",
        imageUrl: "",
        price: 8.5,
        customizeTags: { adjustOrder: "Make adjustments to this order" },
      },
    ],
  },
  {
    section: "Pastries",
    type: "food",
    items: [
      {
        name: "Chocolate Chip Cookie",
        description: "",
        tip: "A chewy cookie with chocolate chips",
        imageUrl: "",
        price: 7.0,
        customizeTags: { adjustOrder: null },
      },
      {
        name: "Chocolate Chip Muffin",
        description: "",
        tip: "A vanilla muffin with chocolate chips",
        imageUrl: "",
        price: 7.0,
        customizeTags: { adjustOrder: null },
      },
      {
        name: "Double Chocolate Chip Muffin",
        description: "",
        tip: "A chocolate muffin with chocolate chips",
        imageUrl: "",
        price: 7.5,
        customizeTags: { adjustOrder: null },
      },
      {
        name: "Classic Basque Cheesecake",
        description: "",
        tip: "Cheesecake with a creamy, custard-like texture",
        imageUrl: "",
        price: 10.0,
        customizeTags: { adjustOrder: null },
      },
      {
        name: "Lemon Cake",
        description: "",
        tip: "Cake with lemon flavoring",
        imageUrl: "",
        price: 9.0,
        customizeTags: { adjustOrder: null },
      },
    ],
  },
];
