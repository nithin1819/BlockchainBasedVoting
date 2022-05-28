const path = require("path");
var HDWalletProvider = require("@truffle/hdwallet-provider");
const MNEMONIC = 'vapor update anchor leaf arrow crane number list income junior aim roast';

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      network_id: "*",
      host: "localhost",
      // port: 7545, // for ganache gui
      port: 7545, // for ganache-cli
      gas: 6721975,
      gasPrice: 20000000000,
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/cee2eb70c73644dfaa961b51586a26e7")
      },
      network_id: 3,
      gas: 8000000,
      gasPrice:20000000000     //make sure this gas allocation isn't over 4M, which is the max
    }
    
  },
};
