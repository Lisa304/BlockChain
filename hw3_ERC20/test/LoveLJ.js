const LoveLJ = artifacts.require("LoveLJ");

contract('LoveLJ', () => {

	const tokenName = 'LoveLJ';
	const tokenSymbol = 'LJTK';	
		
	it("start", async () => {
		let addr = '0x74017CC3ed2CC3A8E29cA0586fac4a848E208adE';
		let loveLJJJ = await LoveLJ.at(addr);
		console.log(loveLJJJ.address);
		assert.equal(loveLJJJ.address, addr, "Address不正確");
	});

	it(`should return Name:${tokenName}, Symbol:${tokenSymbol}`, async   () => {
		let instance = await LoveLJ.deployed();
		let name = await instance.name.call();
		let symbol = await instance.symbol.call();
		assert.equal(name, tokenName, "Name不正確");
		assert.equal(symbol, tokenSymbol, "Symbol不正確");
	});

	it(`show decimal`, async () =>{
		let instance = await LoveLJ.deployed();
		let dec = await instance.decimals();
		console.log(`decimal:${dec}`);
	})

	it(`totalSupply`, async () =>{
		let instance = await LoveLJ.deployed();
		let tot = await instance.totalSupply.call();
		console.log(`Total Supply:${tot}`);
	})

});
