const { ethers } = require("hardhat")
const cryptoBeetlesJSON = require("../artifacts/contracts/CryptoBeetles.sol/CryptoBeetles.json")

async function main() {
  const abi = cryptoBeetlesJSON.abi
  const provider = new ethers.providers.InfuraProvider("rinkeby", process.env.RINKEBY_PROJECT_ID)
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
  const signer = wallet.connect(provider)

  const cryptoBeetles = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, signer)
  await cryptoBeetles.mint("https://ipfs.io/ipfs/Qme9VqqFn4GcD72Nxppdmaw2ScU3JeoagbJ8xk2YC9c8e4")
  console.log("NFT minted")
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})