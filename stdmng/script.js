function submitForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let eventName = document.getElementById("event").value;
  let msg = document.getElementById("message");
  if (!name || !email || !phone || !eventName) {
    msg.style.color="red"; msg.innerText="Please fill all fields.";
  } else if (!email.includes("@") || !email.includes(".")) {
    msg.style.color="red"; msg.innerText="Enter a valid email.";
  } else if (phone.length != 10 || isNaN(phone)) {
    msg.style.color="red"; msg.innerText="Enter a 10-digit phone number.";
  } else {
    msg.style.color="green";
    msg.innerText=`Registration successful! Name: ${name}, Email: ${email}, Phone: ${phone}, Event: ${eventName}`;
  }
}
function clearForm() { document.getElementById("message").innerText=""; }