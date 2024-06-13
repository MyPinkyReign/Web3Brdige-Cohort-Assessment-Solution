What is the Caesar Cipher Text Encryption/Decryption Application?
The Caesar Cipher Text Encryption/Decryption Application is a simple web-based tool that allows users to encrypt and decrypt text using the Caesar cipher technique. This application provides a user-friendly interface for encoding plaintext into ciphertext and decoding ciphertext back into plaintext using a specified key.

Features
Encrypt Text: Convert plaintext into ciphertext using a specified key.
Decrypt Text: Revert ciphertext back to plaintext using the same key.
User Input: Allows users to enter their own text and key.
Error Handling: Provides feedback for invalid inputs.

Usage
Encrypting Text
Open the application in your web browser.
Enter the plaintext you wish to encrypt in the Plaintext input field.
Enter a numeric key (shift value) in the Key input field.
Click the Encrypt button.
The encrypted text (ciphertext) will be displayed in the Ciphertext field.
Decrypting Text
Open the application in your web browser.
Enter the ciphertext you wish to decrypt in the Ciphertext input field.
Enter the same numeric key (shift value) used for encryption in the Key input field.
Click the Decrypt button.
The decrypted text (plaintext) will be displayed in the Plaintext field.
How It Works
The Caesar cipher is a substitution cipher where each letter in the plaintext is shifted a certain number of places down or up the alphabet. For example, with a shift of 1, 'A' becomes 'B', 'B' becomes 'C', and so on.

The application uses JavaScript to implement the Caesar cipher algorithm for both encryption and decryption:

Encryption: For each letter in the plaintext, the application shifts it by the specified key value to produce the ciphertext.
Decryption: For each letter in the ciphertext, the application shifts it backward by the specified key value to recover the plaintext.
Code Structure
index.html: The main HTML file containing the structure of the web page.
styles.css: The CSS file for styling the application.
script.js: The JavaScript file containing the Caesar cipher logic for encryption and decryption.
Example
Here’s a quick example of how the application works:

Plaintext: HELLO

Key: 3

Ciphertext: KHOOR

Ciphertext: KHOOR

Key: 3

Plaintext: HELLO

Error Handling
The application ensures that the key is a numeric value.
It provides feedback if the input text or key is missing.
It handles both uppercase and lowercase letters while preserving non-alphabetic characters (spaces, punctuation).
Contributing
Contributions are welcome! If you have any suggestions or improvements, please create a pull request or open an issue.

License
This project is open-source and available under the MIT License.

Contact
If you have any questions or need further assistance, feel free to reach out:

Philip Egwuyi 
GitHub: MyPinkyReign 
Files in this project Html, CSS and Javascript
