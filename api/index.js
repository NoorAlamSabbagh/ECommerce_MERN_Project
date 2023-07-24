const express = require("express")
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
dotenv.config();
// const stripeRoute = require("./routes/stripe");
const cors = require("cors");

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("DBConnection is suceessful"))
.catch((err) =>{
console.log(err);
})

app.get("/api/test", (req, res)=> {
    console.log("test is successfull")
    res.send("TEST")
})

// app.use(cors());
//1
app.use(cors(
    {
        origin: [""],
        methods: ["POST", "GET"],
        credentials: true
    }
));

//
app.get("/", (req, res) => {
    res.json("Hello");
})

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);


app.listen(process.env.PORT || 7000, ()=>{
    console.log('Backend server is running')
})