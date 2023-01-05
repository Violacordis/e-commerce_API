import express, {
  Request,
  Response,
  NextFunction,
  Application,
  json,
} from "express";
import * as dotenv from "dotenv";
import morgan from "morgan";
import dbConnect from "./db/dbConnect";
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 8000;

// Database connection
dbConnect();

app.use(json());
app.use(morgan("dev"));

app.get("/api/v1/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Viola's Store",
  });
});

app.listen(PORT, (): void =>
  console.log(`Server running on http://localhost:${PORT}`)
);
