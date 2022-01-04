import {useEffect, useState } from 'react'
const connectWallet = () => {
  const [address, setAddress] = useState([])
  function connectToMetamask() {
    window.ethereum ?
      ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
        setAddress(accounts[0])
      }).catch((err) => console.log(err))
      : console.log("Please install MetaMask")
  }

  return(
    <div>
      <button onClick={connectToMetamask}>Connect Wallet</button>
      <p>address = {address}</p>
    </div>
  )
}

export default connectWallet
