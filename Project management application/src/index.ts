import mongoose from "mongoose";
import { MONGODB_CLUSTER, MONGODB_PASS, MONGODB_USER, PORT } from "./constants";

import * as serverService from "./services/server.service";

(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${MONGODB_USER}:${MONGODB_PASS}@cluster0.${MONGODB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`
    );
    serverService.server.listen(process.env.PORT || PORT, function () {
      console.log("Сервер ожидает подключения...");
    });
  } catch (error) {
    console.log(error);
  }
})();

process.on("SIGINT", async () => {
  await mongoose.disconnect();
  process.exit();
});
