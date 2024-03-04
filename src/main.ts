import { LayerServer } from "./http/server";

try {
  const layerServer = new LayerServer(5000);
  layerServer.init();
} catch (err) {
  console.log(err);
}
