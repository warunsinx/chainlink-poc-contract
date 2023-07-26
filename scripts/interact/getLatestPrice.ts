import hre, { ethers } from "hardhat";
import addresses from "../../utils/addresses";
import { TestChainLinkPriceFeed__factory } from "../../typechain-types";

const main = async function () {
  const [owner] = await ethers.getSigners();
  const addressList = await addresses.getAddressList(hre.network.name);
  const TestChainLinkPriceFeed = TestChainLinkPriceFeed__factory.connect(
    addressList["TestChainLinkPriceFeed"],
    owner
  );

  // Binance Smart Chain Testnet Price Feed Addresses
  // BNB / USD 0x2514895c72f50D8bd4B4F9b1110F0D6bD2c97526
  // BTC / USD 0x5741306c21795FdCBb9b265Ea0255F499DFe515C
  // CAKE / USD 0xB6064eD41d4f67e353768aA239cA86f4F73665a1

  const testChainLinkPriceFeed = await TestChainLinkPriceFeed.getLatestPrice(
    "0x5741306c21795FdCBb9b265Ea0255F499DFe515C"
  );

  console.log(
    "testChainLinkPriceFeed: ",
    ethers.utils.formatUnits(
      testChainLinkPriceFeed[0],
      testChainLinkPriceFeed[1]
    )
  );
};

main();
