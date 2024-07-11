import express from "express";
import userRoutes from "./routes/user.routes.js";
import userContact from "./routes/contact.routers.js";
import roomBook from "./routes/book.router.js";
import cors from "cors";
import { config } from "dotenv";
config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST", "GET", "PATCH", "DELETE"],
  }),
);

app.use(express.urlencoded({ extended: true }));
// app.use(express.urlencoded({extended: true}));

app.use(express.json());
app.use("/api/users/", userRoutes, userContact, roomBook);


app.listen(5000, () => {
  console.log("server running on port 5000...");
});
