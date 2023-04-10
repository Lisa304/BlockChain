# BlockChain
1112 semester course

# Need To Install
npm install @truffle/hdwallet-provider
npm install dotenv

# cmd
truffle migrate --network sepolia
truffle console --network sepolia
## 進入sepolia所創在地blockchain環境下測試指令:
-  let contract = await CallFaucet.at('他前面會出現的合約地址')
- let balance = await contract.get_balance()
- console.log('Balance of Account 0 =', BigInt(balance));
- 用小狐狸存錢進去
- contract.withdraw(10000000000000000n,'你的錢包地址')

## 有可能發生的錯誤
- Error: PollingBlockTracker - encountered an error while attempting to update latest block: undefind
    - 還不太懂為什麼，有時候會出現，有時候不會