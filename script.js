// Funkce pro načtení parametru z URL
function getUserFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('user');
}

const user = getUserFromUrl();

if (user) {
  document.getElementById('message').innerText = `${user.charAt(0).toUpperCase() + user.slice(1)}: přidáno pivo! 🍺`;
} else {
  document.getElementById('message').innerText = `Chybí parametr ?user=`;
}
