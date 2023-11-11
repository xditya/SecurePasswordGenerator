function generatePassword() {
  const length = document.getElementById("length").value;
  const uppercase = document.getElementById("uppercase").checked;
  const lowercase = document.getElementById("lowercase").checked;
  const numbers = document.getElementById("numbers").checked;
  const special = document.getElementById("special").checked;

  const charset = generateCharset(uppercase, lowercase, numbers, special);
  document.getElementById("password").value = generateRandomPassword(
    length,
    charset
  );
}

function generateCharset(uppercase, lowercase, numbers, special) {
  let charset = "";

  if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
  if (numbers) charset += "0123456789";
  if (special) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  return charset;
}

function generateRandomPassword(length, charset) {
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
  return password;
}

function copyToClipboard() {
  const password = document.getElementById("password");
  password.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}
