const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const { MONGO_URI } = require("./config/config");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "./public")));
app.use(
  cors({
    origin: "*", // Allows all origins
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());


mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));


app.use("/api/auth", authRoutes);


// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
