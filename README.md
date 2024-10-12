# Safe Protocol Library

Safe Protocol Library is an open-source project aimed at providing a comprehensive list of mainstream Web3 protocols and their associated smart contract addresses. The primary goal of this project is to help developers and users identify secure on-chain contract entities, thereby enhancing overall security and protecting against potential phishing attacks.

## Features

- Detailed information on mainstream Web3 protocols
- Multi-chain support (Ethereum, BSC, Polygon, etc.)
- Verified contract addresses
- Additional protocol metadata (e.g., official websites, audit reports)

## How to Use

1. Clone the repository:
   ```
   git clone https://github.com/cryptousersecurity/safeprotocollib.git
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Use the provided tools to validate or query protocol information:
   ```
   node tools/address-validator.js
   ```

## Data Structure

Information for each protocol is stored in a JSON file with the following structure:

```json
{
  "name": "Protocol Name",
  "description": "Protocol Description",
  "chains": [
    {
      "name": "Chain Name",
      "contracts": [
        {
          "name": "Contract Name",
          "address": "Contract Address"
        }
      ]
    }
  ],
  "extra": {
    "website": "Official Website",
    "github": "GitHub Repository",
    "securityAudits": [
      {
        "auditor": "Auditor Name",
        "date": "Audit Date",
        "report": "Audit Report Link"
      }
    ],
    "tags": ["Tag1", "Tag2"]
  }
}
```

## How to Contribute

We welcome and encourage community contributions! If you want to add new protocol information or update existing information, please follow these steps:

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

For detailed contribution guidelines, please check the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## Security Warning

While this library aims to improve security, users should remain vigilant. Always verify the contract addresses you interact with and do not rely solely on this library.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, please open an issue or contact the project maintainers directly.

---

By using and contributing to this library, we are collectively working towards making the Web3 ecosystem more secure. Thank you for your support!