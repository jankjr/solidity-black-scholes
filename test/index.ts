import { expect } from "chai";
import { ethers } from "hardhat";

describe("Options price calculator", function () {
  it("Should calculate price", async function () {
    const OptionsPricingModule = await ethers.getContractFactory("OptionsPricingModule");
    const pricingModule = await OptionsPricingModule.deploy();
    await pricingModule.deployed();

    console.log(
      (await pricingModule.callStatic.calculatePremiums(
        "1000000000000000000",
        "4812000000000000000000",
        "4812000000000000000000",
        "2592000",

        "-150000000000000000",
        "900000000000000000",
        "0"
      )).map(e => e.toString())
    );
    console.log(
      (await pricingModule.callStatic.calculatePremiums(
        "1000000000000000000",
        "4812000000000000000000",
        "5000000000000000000000",
        "2592000",

        "-150000000000000000",
        "900000000000000000",
        "0"
      )).map(e => e.toString())
    );
    console.log(
      (await pricingModule.callStatic.calculatePremiums(
        "1000000000000000000",
        "4812000000000000000000",
        "4500000000000000000000",
        "2592000",

        "-150000000000000000",
        "900000000000000000",
        "0"
      )).map(e => e.toString())
    );
  });
});
