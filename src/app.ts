import express, { Express, NextFunction, Request, Response } from "express";
import cors from "cors";
import connectDB from "./config/db.config";
// import AuthRoutes from "./routes/auth.routes";
// import userRoutes from "./routes/user.routes";
// import qrRoutes from "./routes/qr.routes";
import requestRoutes from "./routes/request.route";

const app: Express = express();
const port = 5000;

app.use(express.json());
app.use(cors());

// app.use("/api/auth", AuthRoutes);
// app.use("/api/user", userRoutes);
// app.use("/api/qr/", qrRoutes);
app.use("/api/chat", requestRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
  console.log("Server is pinged!!!");
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

connectDB();
