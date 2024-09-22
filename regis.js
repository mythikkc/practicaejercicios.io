document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registroForm");
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const comentarios = document.getElementById("comentarios");

    nombre.addEventListener("blur", validarNombre);
    email.addEventListener("blur", validarEmail);
    password.addEventListener("blur", validarPassword);
    comentarios.addEventListener("blur", validarComentarios);

    form.addEventListener("submit", function(event) {
        if (!validarFormulario()) {
            event.preventDefault(); // Evita que se envíe el formulario
            alert("Por favor, corrija los errores antes de enviar el formulario.");
        }
    });

    function validarNombre() {
        if (nombre.value.trim() === "") {
            mostrarError(nombre, "El nombre es obligatorio.");
        } else {
            mostrarValido(nombre);
        }
    }

    function validarEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            mostrarError(email, "Por favor, ingrese un email válido.");
        } else {
            mostrarValido(email);
        }
    }

    function validarPassword() {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if (!passwordRegex.test(password.value)) {
            mostrarError(password, "La contraseña debe tener al menos 6 caracteres, una letra mayúscula, una minúscula y un dígito.");
        } else {
            mostrarValido(password);
        }
    }

    function validarComentarios() {
        if (comentarios.value.length > 50) {
            mostrarError(comentarios, "Los comentarios no deben exceder los 50 caracteres.");
        } else {
            mostrarValido(comentarios);
        }
    }

    function validarFormulario() {
        validarNombre();
        validarEmail();
        validarPassword();
        validarComentarios();

        return (
            !nombre.classList.contains("error") &&
            !email.classList.contains("error") &&
            !password.classList.contains("error") &&
            !comentarios.classList.contains("error")
        );
    }

    function mostrarError(element, message) {
        element.classList.add("error");
        element.classList.remove("valid");
        alert(message);
    }

    function mostrarValido(element) {
        element.classList.add("valid");
        element.classList.remove("error");
    }
});
