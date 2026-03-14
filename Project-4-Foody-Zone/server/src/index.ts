import express from "express";
import path from "path";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/images", express.static(path.join(__dirname, "../public/images")));

app.get("/", (req, res) => {
  console.log(path.join(__dirname, "../public"));
  const foodData = [
    {
      name: "Boiled Egg",
      price: 10,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/egg.png",
      type: "breakfast",
    },
    {
      name: "RAMEN",
      price: 25,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/images/ramen.png",
      type: "lunch",
    },
    {
      name: "GRILLED CHICKEN",
      price: 45,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/images/chicken.png",
      type: "dinner",
    },
    {
      name: "CAKE",
      price: 18,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/images/cake.png",
      type: "breakfast",
    },
    {
      name: "BURGER",
      price: 23,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/images/burger.png",
      type: "lunch",
    },
    {
      name: "PANCAKE",
      price: 25,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/images/pancake.png",
      type: "breakfast",
    },

    // Added fake data

    {
      name: "PIZZA",
      price: 30,
      text: "Delicious cheesy pizza topped with fresh vegetables.",
      image: "/images/pizza.png",
      type: "lunch",
    },
    {
      name: "FRENCH FRIES",
      price: 12,
      text: "Crispy golden fries served with ketchup.",
      image: "/images/fries.png",
      type: "lunch",
    },
    {
      name: "OMELETTE",
      price: 15,
      text: "Fluffy egg omelette with herbs and spices.",
      image: "/images/omelette.png",
      type: "breakfast",
    },
    {
      name: "SANDWICH",
      price: 20,
      text: "Grilled sandwich filled with cheese and vegetables.",
      image: "/images/sandwich.png",
      type: "breakfast",
    },
    {
      name: "STEAK",
      price: 55,
      text: "Juicy grilled steak served with vegetables.",
      image: "/images/steak.png",
      type: "dinner",
    },
    {
      name: "PASTA",
      price: 28,
      text: "Creamy pasta with rich Italian sauce.",
      image: "/images/pasta.png",
      type: "dinner",
    },
    {
      name: "DONUT",
      price: 14,
      text: "Sweet donut topped with chocolate glaze.",
      image: "/images/donut.png",
      type: "breakfast",
    },
    {
      name: "TACOS",
      price: 26,
      text: "Mexican tacos filled with spicy chicken.",
      image: "/images/tacos.png",
      type: "lunch",
    },
    {
      name: "NOODLES",
      price: 22,
      text: "Hot noodles tossed with vegetables and sauces.",
      image: "/images/noodles.png",
      type: "dinner",
    },
  ];

  res.json(foodData);
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
