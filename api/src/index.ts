import app from "./app";
import { sequelize } from "./database/database";

async function main() {
  try {
    await sequelize.sync({ alter: true });
    app.listen(process.env.PORT, () => {
      console.log("listening on port", process.env.PORT);
    });
  } catch (error) {
    console.log("error", error);
  }
}

main();
