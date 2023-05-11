require("dotenv").config()
const API_URL = process.env.API_URL
const PUBLIC_KEY = process.env.PUBLIC_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY

const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(API_URL)

const contract = require("../artifacts/contracts/GFTK.sol/GoldenFish.json")
const contractAddress = "0x1858202760577046261aE71EF580DbecF79B8FDe"
const nftContract = new web3.eth.Contract(contract.abi, contractAddress)

async function mintNFT(tokenURI) {
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest") //get latest nonce

    //the transaction
    const tx = {    // 下面signPromise，取得交易hash時要使用的資訊
        from: PUBLIC_KEY,
        to: contractAddress,
        nonce: nonce,    // 從我們的地址發送的交易數量的帳戶隨機數(nonce)
        gas: 500000,
        data: nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI(),    // 我們希望在此交易中執行的計算——在本例中是鑄造 NFT
    }

    const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY)     // give us the transaction hash
    signPromise
        .then((signedTx) => {
            web3.eth.sendSignedTransaction(
                signedTx.rawTransaction,
                function(err, hash) {
                    if (!err) {     // 執行正確
                        console.log(
                            "The hash of your transaction is: ",
                            hash,
                            "\nCheck Alchemy's Mempool to view the status of your transaction!"
                        )
                    } else {
                        console.log(
                            "Something went wrong when submitting your transaction:",
                            err
                        )
                    }
                }
            )
        })
        .catch((err) => {
            console.log("Promise failed:", err)
        })
}

mintNFT("ipfs://QmVHmhnwuHhtN4tX2kto1tLv3GLKLPaU46Jb3ydUSxX7dr")