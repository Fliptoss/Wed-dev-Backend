import express from "express";
const app = express();

app.listen(3000, () =>{
    console.log("Server is running on 3000");
    // console.log(`Server is running on port ${port}`);
})