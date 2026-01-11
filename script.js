const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzokICuHR7ODBYjqArlBc3qfa9bCt-VZxalJhrkDzS5-Q9w5JZFdncAyi3-Aog7zEzV/exec";

const form = document.getElementById("regForm");
const msg = document.getElementById("msg");
const themeBtn = document.getElementById("themeBtn");
const container = document.getElementById("mainContainer");

let dark = false;

/* Submit form */
form.addEventListener("submit", function(e) {
  e.preventDefault();

  const data = new FormData(form);

  fetch(WEB_APP_URL, {
    method: "POST",
    body: data
  })
  .then(() => {
    msg.style.color = "green";
    msg.innerText = "Registration Successful!";
    form.reset();
  })
  .catch(() => {
    msg.style.color = "red";
    msg.innerText = "Submission Failed!";
  });
});

/* Clear form */
document.getElementById("clearBtn").addEventListener("click", () => {
  form.reset();
});

/* Theme toggle */
themeBtn.addEventListener("click", () => {
  dark = !dark;

  if (dark) {
    container.style.background = "#2d3436";
    container.style.color = "white";
    document.body.style.background =
      "linear-gradient(135deg, #000, #2d3436)";
  } else {
    container.style.background = "white";
    container.style.color = "black";
    document.body.style.background =
      "linear-gradient(135deg, #2f1325, #000)";
  }
});
