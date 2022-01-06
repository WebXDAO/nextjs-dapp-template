import Head from 'next/head'
import Image from 'next/image'
import {useEffect, useState } from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

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
        <title>Nextjs-Dapp-Template | Web3Community</title>
        <meta name="description" content="Bienvenue sur le dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>
      <div className="mx-auto flex flex-col h-screen">
        <div className="m-auto justify-center">
          <button
            type="button"
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-flex items-center px-6 py-3 text-base font-medium rounded-md shadow-sm text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
            onClick={connectToMetamask}
          >
            👛 Connect Wallet
          </button>
          <div className="font-medium">address = {address}</div>
        </div>
      </div>
    </>
  )

}