// Získání jména z URL parametrů
const params = new URLSearchParams(window.location.search);
const user = params.get("user");

const messageEl = document.getElementById("message");

if (!user) {
  messageEl.textContent = "Chyba: Nebylo zadáno jméno.";
} else {
  // Odeslání dat na Google Script
  fetch("https://script.google.com/macros/s/AKfycbx5sVkKZ7hySP0D-toNoiI9ItkjyCNvfpGBi8S7RXra1oHSZzyyjE_eL6dke00665w/exec?user=" + encodeURIComponent(user))
    .then(res => res.text())
    .then(response => {
      messageEl.textContent = response;
    })
    .catch(err => {
      console.error(err);
      messageEl.textContent = "Došlo k chybě při odesílání.";
    });
}
