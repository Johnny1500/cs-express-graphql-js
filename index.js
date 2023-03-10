import pkg from 'body-parser';
const { json } = pkg;
import express from "express";

console.log("start");
const app = express();
app.use(json());
console.log("end");

app.use("/graphql", function (req, res, next) {
  console.log("Hello from graphql");
});

app.listen(process.env.PORT, () => {
  console.log(`App listening at port ${process.env.PORT}`);
});
