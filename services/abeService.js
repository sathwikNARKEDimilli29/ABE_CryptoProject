const { deserialize, decrypt } = require("charm");
const fs = require("fs");

const privateKeyFile = "abe_private_key.json"; // Store your private key file
const serializedCiphertext = ""; // Load the serialized ciphertext
const sessionKey = ""; // Load the session key

// Load private key from file (previously generated during setup)
const privateKey = JSON.parse(fs.readFileSync(privateKeyFile, "utf8"));

// Deserialize the ciphertext
const ciphertext = deserialize(serializedCiphertext);

// Decrypt the ciphertext using the private key and session key
const decryptedData = decrypt(ciphertext, privateKey, sessionKey);

// The decryptedData now contains the original plaintext data

module.exports = decryptedData;
