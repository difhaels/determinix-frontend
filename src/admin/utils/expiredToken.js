export default function expired(){
  const token = localStorage.getItem("token");

  if (token) {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const isExpired = payload.exp * 1000 < Date.now();

    if (isExpired) {
      alert("Session expired! Silakan login kembali.");
      localStorage.removeItem("token"); // Hapus token
      window.location.href = "/login"; // Redirect ke login
    }
  }
};
