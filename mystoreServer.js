var express = require("express");
var cors = require("cors");
var app = express();
app.use(express.json());
app.use(cors())
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, , authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
  next();
});

var users = [
  {
    email: "email@test.com",
    password: "email123",
    orders: [
      {
        name: "Ashok",
        city: "Delhi",
        address: "Sector-15",
        amount: "Rs.2499.00",
        items: 2,
      },
      {
        name: "Sara",
        city: "Mumbai",
        address: "Bandra",
        amount: "Rs.1599.50",
        items: 3,
      },
      {
        name: "Rahul",
        city: "Bangalore",
        address: "Koramangala",
        amount: "Rs.899.00",
        items: 1,
      },
      {
        name: "Neha",
        city: "Kolkata",
        address: "Salt Lake",
        amount: "Rs.3499.99",
        items: 4,
      },
      {
        name: "Amit",
        city: "Chennai",
        address: "Adyar",
        amount: "Rs.499.50",
        items: 2,
      },
      {
        name: "Priya",
        city: "Hyderabad",
        address: "Gachibowli",
        amount: "Rs.199.00",
        items: 1,
      },
      {
        name: "Vikram",
        city: "Pune",
        address: "Kothrud",
        amount: "Rs.789.00",
        items: 3,
      },
      {
        name: "Ananya",
        city: "Jaipur",
        address: "Malviya Nagar",
        amount: "Rs.2999.00",
        items: 2,
      },
      {
        name: "Raj",
        city: "Ahmedabad",
        address: "Navrangpura",
        amount: "Rs.1299.50",
        items: 1,
      },
      {
        name: "Pooja",
        city: "Lucknow",
        address: "Gomti Nagar",
        amount: "Rs.599.00",
        items: 2,
      },
    ],
  },
];

storeData = [
  {
    id: 1,
    category: "Watches",
    description:
      "The look that made Swiss watches the toast of the world. Still unbeatable.",
    imgLink:
      "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    name: "Silver",
    price: 1600,
  },
  {
    id: 2,
    category: "Watches",
    description: "Dark, black beauty. Sure to look good on the wrist.",
    imgLink:
      "https://images.pexels.com/photos/1697566/pexels-photo-1697566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "Black",
    price: 899,
  },
  {
    id: 3,
    category: "Watches",
    description:
      "Multi chronographs, stop watch, timers. Altimeter. What else.",
    imgLink:
      "https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "Chronograph",
    price: 1199,
  },
  {
    id: 4,
    category: "Watches",
    description: "For all ages. For all times. Classic Look. Classic leather.",
    imgLink:
      "https://images.pexels.com/photos/236915/pexels-photo-236915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "Classic",
    price: 1250,
  },
  {
    id: 5,
    category: "Watches",
    description: "The original Apple Watch. Still a great buy.",
    imgLink:
      "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Apple v1",
    price: 999,
  },
  {
    id: 6,
    category: "Watches",
    description: "Mechanical 28 jewelled watch. Connoisseur delight.",
    imgLink:
      "https://images.pexels.com/photos/47339/mechanics-movement-feinmechanik-wrist-watch-47339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "Jewelled",
    price: 1999,
  },
  {
    id: 7,
    category: "Sunglasses",
    description: "Desirable, reddish tint. Sure to attract attention.",
    imgLink:
      "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "Tinted Red",
    price: 399,
  },
  {
    id: 8,
    category: "Sunglasses",
    description: "Nostalgic, bluish tint, sure to get memories back. Vintage.",
    imgLink:
      "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "Oldies",
    price: 199,
  },
  {
    id: 9,
    category: "Sunglasses",
    description: "Trendy, young sunglasses with retro look. Teen favourite.",
    imgLink:
      "https://images.pexels.com/photos/1362558/pexels-photo-1362558.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Youthful",
    price: 219,
  },
  {
    id: 10,
    category: "Sunglasses",
    description: "Chic sunglasses. Classic dark shades, sure to generate envy.",
    imgLink:
      "https://images.pexels.com/photos/65659/glasses-glass-circle-light-transmittance-65659.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "Classic Dark",
    price: 249,
  },
  {
    id: 11,
    category: "Watches",
    description: "Apple Watch Version 2. A delight.",
    imgLink:
      "https://images.pexels.com/photos/277406/pexels-photo-277406.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Apple v2",
    price: 1499,
  },
  {
    id: 12,
    category: "Belts",
    description: "Stylish formal brown belt. An office favourite.",
    imgLink:
      "https://as1.ftcdn.net/jpg/02/14/48/72/500_F_214487233_Aahw3DohDu6dSSfMqWCcU1QDatxpDt6E.jpg",
    name: "Fab Brown",
    price: 149,
  },
  {
    id: 13,
    category: "Handbags",
    description: "Desirable travel bag. Mix of convenience and style",
    imgLink:
      "https://images.pexels.com/photos/2534961/pexels-photo-2534961.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Travel Lite",
    price: 199,
  },
  {
    id: 14,
    category: "Handbags",
    description: "3 Pockets, 2 Zips -  ideal for shopping and parties",
    imgLink:
      "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Chic Leather",
    price: 749,
  },
  {
    id: 15,
    category: "Belts",
    description: "Signature belt from Gucci ",
    imgLink:
      "https://img.shopstyle-cdn.com/pim/c7/a6/c7a695a8db5a375b222f15bea045bdea_xlarge.jpg",
    name: "Raw Edge",
    price: 799,
  },
  {
    id: 16,
    category: "Belts",
    description: "Iconic metallic belt",
    imgLink:
      "https://img.shopstyle-cdn.com/pim/81/78/8178fa6c3b27d3f3e0fe18d019c992ea_xlarge.jpg",
    name: "Goofy Black",
    price: 349,
  },
  {
    id: 17,
    category: "Sunglasses",
    description: "Min black faded front shades",
    imgLink:
      "https://www.quayaustralia.com/cdn/shop/files/Quay_HighKey_BlackFade_Front.jpg?v=1692041216&width=500",
    name: "Quay Shades",
    price: 479,
  },
  {
    id: 18,
    category: "Belts",
    description: "Evergreen formal belt with classic buckle",
    imgLink:
      "https://as1.ftcdn.net/jpg/02/02/45/86/500_F_202458696_CYlcJbJfjgUb2VgQnPSUxHU79v6I3SC6.jpg",
    name: "Classic Brown",
    price: 128,
  },
  {
    id: 19,
    category: "Handbags",
    description: "Beach handbag to go along with a beach holiday",
    imgLink:
      "https://images.pexels.com/photos/2305000/pexels-photo-2305000.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Funky Jute",
    price: 99,
  },
];
var port = process.env.PORT||2410;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));

app.post("/loginuser", function (req, res) {
  let body = { email: req.body.email, password: req.body.password };
  let obj = users.find(
    (obj) => obj.email === body.email && obj.password === body.password
  );
  if (obj === undefined)
    res.status(401).send("Login Failed. Check the username and password");
  else {
    res.send(obj);
  }
});
app.get("/products", function (req, res) {
  res.send(storeData);
});

app.get("/products/:category", function (req, res) {
  const { category } = req.params;
  let products;

  if (category) {
    products = storeData.filter((pr) => pr.category === category);
  } else {
    products = storeData;
  }

  if (products.length > 0) {
    res.send(products);
  } else {
    res.status(404).send("Data not found");
  }
});

app.get("/orders", function (req, res) {
  const allOrders = users.map((user) => user.orders).flat();
  res.send(allOrders);
});

app.post("/orders", function (req, res) {
  const { name, address, city, totalPrice, items, email } = req.body;

  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(404).send("User not found");
  }

  const newOrder = {
    name,
    address,
    city,
    amount: `Rs.${totalPrice.toFixed(2)}`,
    items,
  };

  user.orders.push(newOrder);

  res.status(201).send(newOrder);
});

// Get details of a particular product
app.get("/product/:id", function (req, res) {
  const productId = +req.params.id;
  const product = storeData.find((pr) => pr.id === productId);

  if (product) {
    res.send(product);
  } else {
    res.status(404).send("Product not found");
  }
});

// Create a new product
app.post("/products", function (req, res) {
  const { name, price, category, imgLink, description } = req.body;

  const newProduct = {
    id: storeData.length + 1, // Assign a unique ID
    name,
    price,
    category,
    imgLink,
    description,
  };

  storeData.push(newProduct);

  res.status(201).send(newProduct);
});

// Edit a particular product
app.put("/products/:id", function (req, res) {
  const productId = parseInt(req.params.id);
  const productIndex = storeData.findIndex((pr) => pr.id === productId);

  if (productIndex !== -1) {
    const updatedProduct = {
      id: productId,
      name: req.body.name || storeData[productIndex].name,
      price: req.body.price || storeData[productIndex].price,
      category: req.body.category || storeData[productIndex].category,
      imgLink: req.body.imgLink || storeData[productIndex].imgLink,
      description: req.body.description || storeData[productIndex].description,
    };

    storeData[productIndex] = updatedProduct;
    res.send(updatedProduct);
  } else {
    res.status(404).send("Product not found");
  }
});

// Delete a particular product
app.delete("/products/:id", function (req, res) {
  const productId = parseInt(req.params.id);
  const productIndex = storeData.findIndex((pr) => pr.id === productId);

  if (productIndex !== -1) {
    const deletedProduct = storeData.splice(productIndex, 1);
    res.send(deletedProduct);
  } else {
    res.status(404).send("Product not found");
  }
});

