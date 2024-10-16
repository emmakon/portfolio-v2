function copy() {
  let email = document.getElementById("email");
  let success = document.getElementById("confirmation-message");

  navigator.clipboard.writeText(email.innerHTML);
  success.innerHTML = "Email Copied!";
}
