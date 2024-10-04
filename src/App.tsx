import { useState } from "react";
import { AptosConnectButton, useAptosWallet } from "@razorlabs/wallet-kit";
import "@razorlabs/wallet-kit/style.css";
import "./App.css";
import Minting from "./components/Mint";

function App() {
  const [message, setMessage] = useState<string>("");
  const { connected } = useAptosWallet();


  return (
    <>
      <div className="card">
        <AptosConnectButton />
      </div>
      {connected ? (
        <>
          <Minting setMessage={setMessage} />
          <div>{message}</div>
        </>
      ) : null}
      <a href="" className="read-the-docs">
        Click here to learn more about
      </a>
    </>
  );
}

export default App;
