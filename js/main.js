const buttonAuth = document.querySelector(".button-auth");
const modalAuth = document.querySelector(".modal-auth");
const closeAuth = document.querySelector(".close-auth");
const logInForm = document.querySelector("#logInForm");
const inputLogin = document.querySelector("#login");
const inputPassword = document.querySelector("#password");
const buttonOut = document.querySelector(".button-out");
const userName = document.querySelector(".user-name");
const error = document.querySelector(".error");
const buttonLogin = document.querySelector(".button-login");

const login = (user) => {
  buttonAuth.style.display = "none";
  buttonOut.style.display = "flex";
  userName.style.display = "flex";
  //debugger;

  userName.textContent = user.login;
  modalAuth.style.display = "none";
};

const logout = () => {
  buttonAuth.style.display = "flex";
  buttonOut.style.display = "none";
  userName.style.display = "none";
  userName.textContent = "";
  localStorage.removeItem("user");
};

buttonAuth.addEventListener("click", () => {
  modalAuth.style.display = "flex";
});

closeAuth.addEventListener("click", () => {
  modalAuth.style.display = "none";
});

buttonOut.addEventListener("click", () => {
  logout();
});

//Блокировка кнопки и вывод сообщения о необходимости ввода логина
if (!inputLogin.value) {
  buttonLogin.disabled = false;
}

logInForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const user = {
    login: inputLogin.value,
    password: inputPassword,
  };

  localStorage.setItem("user", JSON.stringify(user));
  login(user);
});

if (localStorage.getItem("user")) {
  login(JSON.parse(localStorage.getItem("user")));
}