var express = require("express");
var logger = require("morgan");

var indexRouter = require("./routes/index");

var app = express();

app.use(logger("dev"));
app.use(express.json());

app.use("/api", indexRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
