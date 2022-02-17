# phezzan-contracts


# Install 

```
npm install 
```


# Chainlink (Test)
```
npx hardhat run scripts/Oracle/chainlink-price-feed-deploy.js --network rinkeby

// USDC/USD
npx hardhat  verify --network rinkeby 0x4034A2B251F311F2CD334FACF3891A463d7F34AA "0xa24de01df22b63d23Ebc1882a5E3d4ec0d907bFB"

// BTC/USD
npx hardhat  verify --network rinkeby 0x02B7EBa76B47471427071358c86f3dD69e79830D "0xECe365B379E1dD183B20fc5f022230C044d51404"

// ETH/USD
npx hardhat  verify --network rinkeby 0xCdc0eE066e1212f727A62889CBcCBa60Aa5de53D "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e"

npx hardhat  verify --network kovan 0x17bFE81b15cE27Fa421dd9b5452B89079356c08A "0x9211c6b3BF41A10F78539810Cf5c64e1BB78Ec60"
```

### BaseToken 

```
npx hardhat run scripts/BaseToken/base-token-deploy.js --network rinkeby

npx hardhat  verify --network rinkeby 0xbBbA9df971763B8d01356FBEa86De68B4541944F 

npx hardhat run scripts/BaseToken/initialize-args.js --network rinkeby

```