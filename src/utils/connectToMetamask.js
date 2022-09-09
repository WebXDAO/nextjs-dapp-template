//todo: import store, and store the address

export async function connectToMetamask() {
  window.ethereum
    ? ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((accounts) => {
          // setAddress(accounts[0]);
          // todo: dispatch eth address in the store or context
        })
        .catch((err) => console.log(err))
    : console.log('Please install MetaMask')
}
