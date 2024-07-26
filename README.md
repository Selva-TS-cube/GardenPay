# Garden Pay
Garden Pay is a groundbreaking payroll solution that leverages blockchain technology to streamline global payroll processes and simplify payments for international workforces.
## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing) - [License](#license)
- [Team](#team)
- [Contact](#contact)

## Features

**Transparency**-Every transaction is recorded on the blockchain, providing a transparent and auditable trail for all parties involved.
**Security**:Blockchain technology is inherently secure, with advanced encryption and decentralized data storage, making it extremely difficult for malicious actors to access or tamper with payroll data.
**Efficiency**:Blockchain-based systems eliminate the need for intermediaries, reducing processing times and streamlining the payroll process.

## Tech Stack

- **Blockchain**: Polygon, Solidity
- **SDK**: Garden SDK
- **Front-End**: React js, HTML, CSS, JavaScript, MaterailUi
- **Back-End**: Node.js, Express.js, MongoDB
- **Database**: MongoDB
- **Tools**: VsCode, MongoDB Cloud
- **Deployment**: Polygon Cardona Test Network

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/Selva-TS-cube/GardenPay.git 
cd GardenPay
```
2. **Configure environment variables**
   Create a `.env` file in the root directory and add the following:

```DB_URI_DEV=your_monodb_uri
PRIVATE_KEY=your_private_key MONGODB_URI=your_mongodb_uri
JWT_SECRET_KEY=your_key
MEMONICS=your_memonics
WALLET_ADDRESS=your_wallet_address
IS_PROD=false
```
3. **Start backend server**

```
npm install
npm start
```

4. **Start Frontend**

```
cd Front-end
npm install
npm start
```

5. **Access the application**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contributing

We welcome contributions from the community! To contribute:

1. **Fork the repository**
2. **Create a new branch** (`git checkout -b feature/your-feature`)
3. **Commit your changes** (`git commit -m 'Add your feature'`)
4. **Push to the branch** (`git push origin feature/your-feature`)
5. **Create a Pull Request**



## License

This project is licensed under the MIT License - see the [LICENSE]
(LICENSE) file for details.
