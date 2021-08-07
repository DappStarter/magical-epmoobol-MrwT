require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arctic surge short bitter birth noise asset hunt kitchen orange sudden'; 
let testAccounts = [
"0x84bbf6fe5ff5e809008f9ec376c0202dc20ca3efb989e5086e2ea34bd7bcf8be",
"0x52550ed2d814147dfbe3a821986fcf0eb78a9f019b4bd7dc421fa4577d2e00fc",
"0x6f9a71466d074bed77e27e1ff70f4d08208c88549631ee422527faf5abc456c2",
"0x141644e1626a6889e88913860408cda9350d88a33bf3dc0e93ec2711313adc3e",
"0x7aafdf879d4cefe84434a1f1d49f0fe3c43114f8f215a0f95e296cf26d9c5da5",
"0x4724cb29b556833882ff9d6930de3b0bfd161f5163d274c6b620a7bf36b8e01a",
"0x6581c5f28a37ed4d841a061292d772cb58e237beee8050fa985f3d37a93c6230",
"0xf90c144dd559b9a02a801e78406ca84ae1618d5a13b522a5697c75e4de0736ed",
"0x1677904c1f47b3437e9c54394eb73c1c1a2f433cc3e9110d3eb4ebf7d6faa119",
"0x1e7c7265de87d768688b0b9fd917f96f67dcde5abf08a069bba84bb348159123"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

