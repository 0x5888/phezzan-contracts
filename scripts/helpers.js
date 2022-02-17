

async function deployContract(name, args, label, options) {
    let info = name
    if (label) { info = name + ":" + label }
    const contractFactory = await ethers.getContractFactory(name)
    let contract
    if (options) {
        contract = await contractFactory.deploy(...args, options)
    } else {
        contract = await contractFactory.deploy(...args)
    }
    const argStr = args.map((i) => `"${i}"`).join(" ")
    console.info(`Deploying ${info} ${contract.address} ${argStr}`)
    await contract.deployTransaction.wait()
    console.info("... Completed!")
    return contract
}

async function contractAt(name, address, provider) {
    let contractFactory = await ethers.getContractFactory(name)
    if (provider) {
        contractFactory = contractFactory.connect(provider)
    }
    return await contractFactory.attach(address)
}

module.exports = {
    deployContract,
    contractAt
}