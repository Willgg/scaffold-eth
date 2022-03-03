# 🏗 Scaffold-ETH

> everything you need to build on Ethereum! 🚀

🧪 Quickly experiment with Solidity using a frontend that adapts to your smart contract:

![image](https://user-images.githubusercontent.com/2653167/124158108-c14ca380-da56-11eb-967e-69cde37ca8eb.png)


# 🏄‍♂️ Quick Start

Prerequisites: [Node (v16 LTS)](https://nodejs.org/en/download/) plus [Yarn](https://classic.yarnpkg.com/en/docs/install/) and [Git](https://git-scm.com/downloads)

> clone/fork 🏗 scaffold-eth:

```bash
git clone https://github.com/scaffold-eth/scaffold-eth.git
```

> install and start your 👷‍ Hardhat chain:

```bash
cd scaffold-eth
yarn install
yarn chain
```

> in a second terminal window, start your 📱 frontend:

```bash
cd scaffold-eth
yarn start
```

> in a third terminal window, 🛰 deploy your contract:

```bash
cd scaffold-eth
yarn deploy
```

🔏 Edit your smart contract `YourContract.sol` in `packages/hardhat/contracts`

📝 Edit your frontend `App.jsx` in `packages/react-app/src`

💼 Edit your deployment scripts in `packages/hardhat/deploy`

📱 Open http://localhost:3000 to see the app

# 📚 Web3 Email Stack and Design

- Web Client
    - React Based UI that allows users to connect to metamask and check their Emails
- Smart Contract
    - Code that lives on the chain and keeps up with Email users and the IPFS reference to their inbox
- Email Storage
    - A database/file hosted on IPFS that contains all the emails sent/received by the user

# 💌  Web Client
Added some use cases for the Web Client. 
- Create Inbox (Creates a new file/Database on IPFS for this user and registers it with the smart contract)
- Check For New Emails (Refresh button?? Decrypts using Metamask instead of grabbing private key??)
- Compose Email (Rich Text??)
- Send Email (Encrypt using Recievers public key)
 

# 📝  Smart Contract
This is roughly how I see the contract looking like:

KeyValueMap <address, string IPFS_location>  inboxes;
mempool string = 'someLocationInIPFS' ///it would look like ipfs/Qme7ss3ARVgxv6rXqVPiikMJ8u2NLgmgszg13pYrDKEoiu
- function RegisterUser(string->IPFS Storage Location)  //string would look like /ipfs/0x11D4C4C4845f142f372dF31c7021a97CDC7DdB66-inbox
    inboxes.add(address of the person calling the function,IPFS Storage Location)
- function GetUserInbox(address)
    index.get(address) //this would be null if the user address never registered otherwise it would return the ipfs address for that user
- function GetMempool()
    return mempool;


# 📚 Email Storage
A basic structure for Emails and storing/encrypting/decrypting them. We will defenitly need to expand.. alot!

//email object in JSON
```bash
{
    to: "0x11D4C4C4845f142f372dF31c7021a97CDC7DdB66",
    from: "0xad0c88eE3159FCbc44cd535f7f70E0ACa6eE2ddB",
    Subject: "Hello World",
    timestamp: "12316546521145",
    body: "I hope this works :D"
}
```

//the structure of the ipfs file/database will look like this
```bash
{
    inbox: [array of encrypted emails]
    sent: [array of encrypted emails]
}
```
//This file would have an ipfs reference location similar to -> /ipfs/0x11D4C4C4845f142f372dF31c7021a97CDC7DdB66-inbox
The email json objects would be encrypted using the public key of the user.


# 📚 How does it work in the background when an email is sent

- Step 1: Sender creates the email object in JSON
```bash
{
    to: "0x11D4C4C4845f142f372dF31c7021a97CDC7DdB66",
    from: "0xad0c88eE3159FCbc44cd535f7f70E0ACa6eE2ddB",
    Subject: "Hello World",
    timestamp: "12316546521145",
    body: "I sending this to 0x11D4C4C4845f142f372dF31c7021a97CDC7DdB66"
}
```
- Step 2: Web client calls the smart contract function `GetUserInbox(address)` and gets an IPFS db/file location. This function will either return an IPFS location (Step 3a) or a null(Step 3b).
- Step 3a: Web client encrypts the email object and adds it to the `inbox` list/array and saves the IPFS file/db
- Step 3b: If we got a null from Step 2. Then the Web Client calls `GetMempool()` and gets IPFS file/db that holds all pending emails. Adds the encrypted email there









