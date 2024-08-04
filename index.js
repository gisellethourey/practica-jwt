
import express from "express";
import userRoutes from "./routes/userRoutes.js";
const app = express();
const PORT = process.env.SERVER_PORT || 3000;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/', userRoutes)

app.listen(PORT, () => {
    console.log(`Server on 🔥 http://localhost:${PORT}`);
});


