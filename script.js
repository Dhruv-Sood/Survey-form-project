let submitBtn = document.querySelector("#submitbtn");

submitBtn.addEventListener("click", () => {
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let address = document.querySelector("#address").value;
    let contact = document.querySelector("#contact").value;
  if (name == "" && email == "" && address == "" && contact == "") {
    alert("Form is empty");
  } else if (name == "") {
    alert("Enter name in the form");
  } else if (email == "") {
    alert("Enter email in the form");
  } else if (address == "") {
    alert("Enter address in the form");
  } else if (contact == "") {
    alert("Enter contact in the form");
  } else {
    alert("Form filled succesfully!!");
  }
});
