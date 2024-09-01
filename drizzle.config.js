import dotenv from "dotenv";
dotenv.config();

export default {
  schema: "./utils/schema.jsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://nwealthdb_owner:WqbK67ERasQn@ep-round-morning-a1rwr4b3.ap-southeast-1.aws.neon.tech/nwealthdb?sslmode=require",
  },
};
