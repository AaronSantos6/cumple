function entrar() {

    const password = document.getElementById("password").value;

    if (password === "1976") {

        document.getElementById("login").style.display = "none";
        document.getElementById("contenido").style.display = "block";

    } else {

        document.getElementById("error").textContent =
            "Contraseña incorrecta ❤️";

    }
}