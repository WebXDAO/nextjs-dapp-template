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
      <button onClick={connectToMetamask} variant="text" style={styles.getStarted}>Connect Wallet</button>
      <p style={styles.textstyle}>address = {address}</p>
    </div>
  )
}

const styles = {
  getStarted: {
    backgroundColor: '#EF2F88',
    color: '#FFFFFF',
    p: ['0 16px'],
    minHeight: 45,
    ml: [6]
  },
  textstyle: {
    color: '#EF2F88'
  }
}

export default connectWallet
