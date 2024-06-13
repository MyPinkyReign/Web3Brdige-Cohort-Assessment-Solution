// Caesar Cipher Encryption
function encrypt(text, key) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      let charCode = text.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        // Uppercase letters
        result += String.fromCharCode(((charCode - 65 + key) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        // Lowercase letters
        result += String.fromCharCode(((charCode - 97 + key) % 26) + 97);
      } else {
        // Non-alphabetic characters remain unchanged
        result += text.charAt(i);
      }
    }
    return result;
  }
  
  // Caesar Cipher Decryption
  function decrypt(text, key) {
    return encrypt(text, 26 - key);
  }
  
  // Handling Encrypt Button Click
  function handleEncrypt() {
    const text = document.getElementById('inputText').value;
    const key = parseInt(document.getElementById('key').value, 10);
    if (isNaN(key) || text === '') {
      alert('Please enter valid text and key.');
      return;
    }
    document.getElementById('outputText').innerText = encrypt(text, key);
  }
  
  // Handling Decrypt Button Click
  function handleDecrypt() {
    const text = document.getElementById('inputText').value;
    const key = parseInt(document.getElementById('key').value, 10);
    if (isNaN(key) || text === '') {
      alert('Please enter valid text and key.');
      return;
    }
    document.getElementById('outputText').innerText = decrypt(text, key);
  }
  