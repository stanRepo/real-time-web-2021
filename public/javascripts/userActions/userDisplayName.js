export default function (socket) {
  const input = document.querySelector("#inputDisplayName");
  const btn = document.querySelector("#confirmUsernameBtn");
  const fieldset = document.querySelector("#inputDisplayNameFieldSet");
  btn.addEventListener("click", (e) => {
    if (input.value.length > 3) {
      socket.emit("changeUsername", input.value);
      input.style = "hidden";
      btn.style = "hidden";
      fieldset.innerHTML = input.value;
    }
  });
}
