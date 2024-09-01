import dotenv from "dotenv";
dotenv.config();

export default {
  schema: "./utils/schema.jsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "replace with your database url",
  },
};
