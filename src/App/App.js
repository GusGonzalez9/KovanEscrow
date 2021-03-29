import Web3 from "web3";
import React from "react";
import { Route, Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
function App() {
  const [connect, setConnect] = React.useState(false);
  const [accounts, setAccounts] = React.useState([]);
  const [balance, setBalance] = React.useState(false);
  let loadWeb3 = async () => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
    const network = await web3.eth.net.getNetworkType();
    const accounts = await web3.eth.getAccounts();

    let balance = await web3.eth
      .getBalance(accounts[0])
      .then((b) => b * 10 ** -18);
    setAccounts(accounts);
    setBalance(balance);
  };

  React.useEffect(async () => {
    await loadWeb3();
  }, []);

  return (
    <div>
      <Navbar account={accounts} />
      <Home balance={balance} />
    </div>
  );
}

export default App;