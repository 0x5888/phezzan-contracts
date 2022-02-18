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

### ClearingHouse 

```
npx hardhat run scripts/ClearingHouse/clearing-house-config-deploy.js --network rinkeby

npx hardhat  verify --network rinkeby 0xD640e4FB5D5A97B29531c4499543F6be5699eC5d 


npx hardhat run scripts/ClearingHouse/clearing-house-deploy.js --network rinkeby

npx hardhat  verify --network rinkeby 0xC7A02A73D00aAD2772BaD35Bf67bc54051dDC7a8


```

### AccountBalance 

```
npx hardhat run scripts/AccountBalance/account-balance-deploy.js --network rinkeby 

npx hardhat  verify --network rinkeby 0x3776c1195cBcD987813763B9a9658Ec802366317
```


### Exchange 

```
npx hardhat run scripts/Exchange/exchange-deploy.js --network rinkeby 

npx hardhat  verify --network rinkeby 0xB518a56e157fC891BE072D235B5EaC0e605dCBbC
```


### InsuranceFund 

```
npx hardhat run scripts/InsuranceFund/insurance-fund-deploy.js --network rinkeby 

npx hardhat  verify --network rinkeby 0xd2177FfC4079A4912e0638a4b25Eb9547F376EDF
```

### MarketRegistry

```
npx hardhat run scripts/MarketRegistry/market-registry-deploy.js --network rinkeby

npx hardhat  verify --network rinkeby 0x31178DBfDe7CDFd40D607c3e49Ea26CeE100B48D
```

### OrderBook 

```
npx hardhat run scripts/OrderBook/order-book-deploy.js --network rinkeby

npx hardhat  verify --network rinkeby 0xDb4762e3EAA5c4332f868ef1Dfcf7Ed5E3b654BC
```

### QuoteToken (vUSD)

```
npx hardhat run scripts/Token/quote-token-deploy.js --network rinkeby 

npx hardhat  verify --network rinkeby 0x96e7588978B10CEAE986A3aE996A94D5f38e3993

npx hardhat run scripts/Token/init-usd-quote-token.js --network rinkeby 

```

### Vault 

```
npx hardhat run scripts/Vault/vault-deploy.js --network rinkeby

npx hardhat  verify --network rinkeby 0x9B6cd96496B2f8Ffa7BEca679061aFf66eBDe20f
```


### virtual token 
```
npx hardhat run scripts/Token/virtual-token-deploy.js --network rinkeby

npx hardhat  verify --network rinkeby 0x715f7a9564aF92C5784Cb9F3415BF95D3E4ed1e2

npx hardhat run scripts/Token/virtual-token-deploy.js --network rinkeby

npx hardhat  verify --network rinkeby 0x715f7a9564aF92C5784Cb9F3415BF95D3E4ed1e2

npx hardhat run scripts/Token/virtual-token-deploy.js --network rinkeby

npx hardhat  verify --network rinkeby 0x715f7a9564aF92C5784Cb9F3415BF95D3E4ed1e2
```