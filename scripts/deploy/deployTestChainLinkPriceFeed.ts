import hre, { ethers } from "hardhat";
import addresses from "../../utils/addresses";
import { TestChainLinkPriceFeed__factory } from "../../typechain-types";

export async function deployTestChainLinkPriceFeed() {
  const [owner] = await ethers.getSigners();

  const TestChainLinkPriceFeed = (await ethers.getContractFactory(
    "TestChainLinkPriceFeed",
    owner
  )) as TestChainLinkPriceFeed__factory;

  const testChainLinkPriceFeed = await TestChainLinkPriceFeed.deploy();

  await testChainLinkPriceFeed.deployed();
  console.log(
    "TestChainLinkPriceFeed deployed to:",
    testChainLinkPriceFeed.address
  );

  await addresses.saveAddresses(hre.network.name, {
    TestChainLinkPriceFeed: testChainLinkPriceFeed.address,
  });
}

deployTestChainLinkPriceFeed();
