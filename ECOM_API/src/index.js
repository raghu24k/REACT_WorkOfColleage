const express = require('express')
const category = require("./routes/category.route");
const errors = require("./utils/error");
const app = express()
const port = 3000
app.use(express.json());
app.use(errors.errorHandler);
app.use("/category", category);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))