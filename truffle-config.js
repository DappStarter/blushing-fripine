require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give glove fresh speak notice crime remain soft harvest local fortune slide'; 
let testAccounts = [
"0xb62ce1441b7f21e906e07e4f19b7fe6b1a47b8aa50bc53b5a22ea0fd21366545",
"0x28da452f8465016878fde360b7415108ab2e5e154d2bd21b14b981b8c81b5362",
"0x16bd59a96ee5fa43036d4136afcc488d512ac990ebc7d2e1ee5daad1e422b0ef",
"0xda225bab0462e2f18e0c92ff28f96c2c2e59bfe0cb1e26b982d143ea5b04fe91",
"0x3d81b60a72cec450e16febb1b9f1cdd9c578d83e5b3dcb4a12c2e81171a3bef3",
"0x07ef331ae0f80c32f83f0b2cfb49f5d86429609af4d919ae2e8b3c17d1bc13bb",
"0xac691d6b33ecba6b564947dcb6d3f206e36ded28ede3c196fce0f4e1f2fd95b7",
"0x49a8bdfed6364c9c6921733f603dbfd57abdc2c47aad944d75dcba4d8dd279f1",
"0x7c63a586d0dfd6c50eb581d0848fde61c3e0bb2ad2bb5c974eafcbaa489cb4a4",
"0x2ad9c46bbc08ec3712ba48a46734d3c51424eaa4130df0cbbac3bf47609de92a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
