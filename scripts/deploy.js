const { ethers } = require("hardhat")

async function main() {
  const CryptoBeetles = await ethers.getContractFactory("CryptoBeetles")
  const cryptoBeetles = await CryptoBeetles.deploy("CryptoBeetles", "CBET")

  await cryptoBeetles.deployed()
  console.log(`Contract successfully deployed :: ${cryptoBeetles.address}`)

  const newItemId = await cryptoBeetles.mint(
    "https://ipfs.io/ipfs/QmbXKiVcpzQyaHpvcqv2sKQkaoYXtkduWB3kagqBtgjuDc"
  )
  console.log(`NFT minted successfully :: ${newItemId}`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
