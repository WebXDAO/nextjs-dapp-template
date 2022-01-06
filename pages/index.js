import Head from 'next/head'
import Image from 'next/image'
import {useEffect, useState } from 'react'

export default function ConnectWallet() {

  const [address, setAddress] = useState([]);

  const connectToMetamask = async () => {
    window.ethereum ?
      ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
        setAddress(accounts[0])
      }).catch((err) => console.log(err))
      : console.log("Please install MetaMask")
    }

  return (
    <>
      <Head>
        <title>TFTPDF Démo | Dashboard</title>
        <meta name="description" content="Bienvenue sur le dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <button onClick={connectToMetamask} variant="text">Connect Wallet</button>
        <p>address = {address}</p>
      </div>
    </>
  )

}