const dotenv = require("dotenv");
dotenv.config();
const server  = require("./server");
const port  = process.env.PORT;

server.get("*",(req,res) => {
    res.json("Hello from recipes server!");
})

server.listen(port,() => {
    console.log("listening on port",port);
});

