const { expect } = require("chai");



describe("Color contract deployment", function () {
  it("Contract has been deployed successfully", async function () {
    const colorContract = await ethers.deployContract("Color");
    expect(colorContract , "contract has been deployed");
  });
});

describe("mint my hex code", function(){
  it("demonstrate the mint function", async function(){
        const colorContract = await ethers.deployContract("Color");
	await colorContract.mint("#F54927")
	expect(await colorContract.colors(0)).to.equal("#F54927")
	await colorContract.mint("#AFCC21")
	expect(await colorContract.colors(1)).to.equal("#AFCC21")
	await colorContract.mint("#808278")
	expect(await colorContract.colors(2)).to.equal("#808278")
  });

});

