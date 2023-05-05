const LoveLJ = artifacts.require("LoveLJ");

contract('LoveLJ', () => {

	const tokenName = 'LoveLJ';
	const tokenSymbol = 'LJTK';	
		
	it("start", async () => {
		let addr = '0xB9De60DA40437733AA1bc4DB8768Ff07AbbA841C';
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
		let addr = '0xB9De60DA40437733AA1bc4DB8768Ff07AbbA841C';
		let loveLJJJ = await LoveLJ.at(addr);
		let dec = await loveLJJJ.decimals();
		console.log(`decimal:${dec}`);
	})

	it(`totalSupply`, async () =>{
		let addr = '0xB9De60DA40437733AA1bc4DB8768Ff07AbbA841C';
		let loveLJJJ = await LoveLJ.at(addr);
		let tot = loveLJJJ.totalSupply();
		console.log(`Total Supply:${tot}`);
	})

});
