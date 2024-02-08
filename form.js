const submit = document.querySelector(".submitBtn");
const login = document.querySelector(".logInBtn");
const form = document.querySelector("#myform");

const verifyPassword = (e) => {
  const passInput = document.querySelector("#pwd");
  const conpassInput = document.querySelector("#conpwd");

  if (passInput.value !== conpassInput.value) {
    conpassInput.setCustomValidity("*Passwords do not match");
    passInput.setCustomValidity("");
    e.preventDefault();
  } else if (passInput.value === "" || conpassInput.value === "") {
    passInput.setCustomValidity("This field is required");
    conpassInput.setCustomValidity("");
    e.preventDefault();
  }
};

myform.addEventListener("submit", verifyPassword);
