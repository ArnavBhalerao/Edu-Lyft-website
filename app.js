import { auth } from "./firebase.js";
import { onAuthStateChanged, signOut } from 
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const loginLink = document.getElementById("loginLink");
const logoutBtn = document.getElementById("logoutBtn");

onAuthStateChanged(auth, (user) => {
  if (user) {
    loginLink.style.display = "none";
    logoutBtn.style.display = "inline-block";
  } else {
    loginLink.style.display = "inline-block";
    logoutBtn.style.display = "none";
  }
});

logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
  window.location.reload();
});
