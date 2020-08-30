import * as React from "react";
import "./styles.css";

import { Wallet, Camera, Cloud, Bell, Folder } from "./icons";
export default function App() {
  return (
    <div className="App">
      <Folder />
      <Bell />
      <Cloud />
      <Camera />
      <Wallet />
    </div>
  );
}
