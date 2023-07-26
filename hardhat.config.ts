import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import accountUtils from "./utils/accounts";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.18",
      },
    ],
  },
  networks: {
    bsc_test: {
      url: "https://bsc-testnet.publicnode.com",
      accounts: accountUtils.getAccounts(),
    },
  },
};

export default config;
