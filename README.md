# BlockChain
1112 semester course

# HW2 Faucet
>先用solidity寫完智能合約的程式碼後，我們嘗試部屬合約在Ganache, Truffle, Sepolia這三個不同的生成測試區塊鏈上

<<<<<<< HEAD
## HW3 ERC20
>發佈自己的ERC20到sepolia上，我們的token名字叫做LoveLJ，縮寫是LJTK

#### 開始執行
1. truffle compile
2. truffle migrate --network sepolia
    - 這裡會出現合約地址，要記得拿去貼到test/LoveLJ.js檔案
3. 測試智能合約有兩種方式，可以用第四點或第五點的方法
4. truffle console --network sepolia
    - 就把test file的指令拿出來打
    - addr = '0xB9De60DA40437733AA1bc4DB8768Ff07AbbA841C'
    - LoveLJ.at(addr).then(x => demo = x);
    - LoveLJ.deployed().then(inst => inst.decimals()).then(a => dea = a)
    - LoveLJ.deployed().then(inst => inst.totalSupply()).then(a => tota = a)
    -  web3.eth.getAccounts((err,res) => { accounts = res })
    -  LoveLJ.deployed().then(instance =>  instance.balanceOf(accounts[0])).then( b => bal = b)
        -  10000個token都在第零號帳號手中
    - LoveLJ.deployed().then(instance => { instance.transfer(accounts[1], 100000) })
5. truffle test --network sepolia
    - 先寫好test file放在test資料夾底下
    - [官方文件](https://trufflesuite.com/docs/truffle/how-to/debug-test/write-tests-in-javascript/)

## HW4 ERC721
> ERC721又稱為NFT，是非同質化代幣，作業4要發佈自己的NFT到sepolia網路上，我們的token名稱叫做GoldenFish
> 作業四是使用Hardhat來建立的

1. CREATE YOUR APP (AND API KEY)
    - 這次使用[Alchemy](https://dashboard.alchemy.com/)
2. 創立專案和下載一些東西
    ```shell=
    npm init -y
    npx hardhat
    npm install --save-dev "hardhat@^2.14.0" "@nomicfoundation/hardhat-toolbox@^2.0.0"
    ```
    - 創立 hardhat 專案，回答一些他的問題
    - 後面那是他建議我下載的
3. 撰寫合約
    - `npm install @openzeppelin/contracts`
4. CONNECT METAMASK & ALCHEMY TO YOUR PROJECT
    - 把合約、小狐狸和 Alchemy這三個連在一起
    - `npm install dotenv --save`
        - 在root資料夾創立.env檔案來放小狐狸的private key 和 HTTP Alchemy API URL 
    - `npm install --save-dev @nomiclabs/hardhat-ethers ethers@^5.0.0` 
        - Ethers.js 是一個 Library
            - makes it easier to interact and make requests to Ethereum by wrapping standard JSON-RPC methods with more user friendly methods.
5. UPDATE HARDHAT.CONFIG.JS
    ```javascript=
        /**
        * @type import('hardhat/config').HardhatUserConfig
        */
        require('dotenv').config();
        require("@nomiclabs/hardhat-ethers");
        const { API_URL, PRIVATE_KEY } = process.env;
        module.exports = {
        solidity: "0.8.9",
        defaultNetwork: "sepolia",
        networks: {
            hardhat: {},
            sepolia: {
                url: API_URL,
                accounts: [`0x${PRIVATE_KEY}`]
            }
        },
    }
    ```
6. WRITE DEPLOY SCRIPT
    - `const GoldenFish = await ethers.getContractFactory("GoldenFish")`
        - 在 Ethers.js 的 ContractFactory 會幫你部屬智能合約
        - GoldenFish是一個NFT合約的實例
    - `const goldenFish = await GoldenFish.deploy()`
        - GoldenFish呼叫deploy 
7.  DEPLOY OUR CONTRACT
    - `npx hardhat --network sepolia run scripts/deploy.js`
8.  Web3
    - `npm install @alch/alchemy-web3`
    - Web3 is similar to Ethers, as it is a library used to make creating requests to the Ethereum blockchain easier.
    - ABI (Application Binary Interface) :一個跟智能合約互動的介面
=======
# HW3 ERC20
>發佈自己的ERC20到sepolia上，我們的token名字叫做LoveLJ，縮寫是LJTK
>>>>>>> parent of 79b2638 (hw3 test file)
