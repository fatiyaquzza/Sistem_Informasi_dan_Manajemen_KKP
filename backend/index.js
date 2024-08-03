import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import router from "./routes/UserRoute.js";
import Authrouter from "./routes/AuthRoute.js";
import bodyParser from "body-parser";
import db from "./config/database.js";
import SequelizeStore from "connect-session-sequelize";
import Lawyerrouter from "./routes/LawyerRoute.js";
import Caserouter from "./routes/CaseRoute.js";
import fileUpload from "express-fileupload";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
  db: db,
  expiration: 24 * 60 * 60 * 1000,
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(fileUpload());
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use("/files", express.static(path.join(__dirname, "public/files")));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);
app.use(Lawyerrouter);
app.use(Authrouter);
app.use(Lawyerrouter);
app.use(Caserouter);

app.listen(process.env.APP_PORT, () => {
  console.log(`Server listening on ${process.env.APP_PORT}`);
});

// (async () => {
//   await db.sync();
// })();
