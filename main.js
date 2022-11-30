let messageUser = document.getElementById('message-user');
let messageName = document.getElementById('message-name');
let messagePass = document.getElementById('message-pass');
let messageRPass = document.getElementById('message-repeat-pass');
let changeForm = document.getElementById('change-form');


const expreRegulares = {
    eUserName: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    eName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,       //Letras y espacios, pueden llevar acentos.
    ePassword: /^.{5,14}$/,       // contraseña de 5 a 14 carácteres.
}

changeForm.addEventListener('change', () => {
    let usuario = document.getElementById('user-input').value;
    let nombre = document.getElementById('name-input').value;
    let contraseña = document.getElementById('pass-input').value;
    let repetirContraseña = document.getElementById('rpass-input').value;



    const validationError = (dato) => {
        document.getElementById(`icon-check-${dato}`).classList.add('icon-validation-error');
        document.getElementById(`icon-check-${dato}`).classList.add('fa-circle-xmark');
        document.getElementById(`${dato}-input`).classList.add('input-error');
    }

    const validationCorrect = (dato) => {
        document.getElementById(`icon-check-${dato}`).classList.remove('fa-circle-xmark');
        document.getElementById(`icon-check-${dato}`).classList.remove('icon-validation-error');
        document.getElementById(`icon-check-${dato}`).classList.add('fa-circle-check');
        document.getElementById(`icon-check-${dato}`).classList.add('icon-validation-correct')
        document.getElementById(`${dato}-input`).classList.add('input-correct');
    }


    /* VALIDACIONES */
    if (usuario === "") {
        messageUser.innerHTML = "*Ingrese un nombre de usuario";
        validationError("user");
    } else if (expreRegulares.eUserName.test(usuario) == false) {
        messageUser.innerHTML = "*El usuario solo puede contener números, letras y guion bajo.";
        validationError("user");
    } else {
        messageUser.innerHTML = "";
        validationCorrect("user");
    }

    if (nombre === "") {
        messageName.innerHTML = "*Ingrese un nombre en el recuadro";
        validationError("name");
    } else if (expreRegulares.eName.test(nombre) == false) {
        messageName.innerHTML = "*Un nombre no puede contener caracteres especiales";
        validationError("name");
    } else {
        messageName.innerHTML = "";
        validationCorrect("name");
    }

    if (contraseña === "") {
        messagePass.innerHTML = "*Ingrese una contraseña";
        validationError("pass");
    } else if (expreRegulares.ePassword.test(contraseña) == false) {
        messagePass.innerHTML = "*La contraseña debe tener minimo 5 caracteres y maximo 14";
        validationError("pass");
    } else {
        messagePass.innerHTML = "";
        validationCorrect("pass");
    }

    if (repetirContraseña !== contraseña) {
        messageRPass.innerHTML = "*Las contraseñas ingresadas no coinciden.";
        validationError('rpass');
    } else if (repetirContraseña == "") {
        messageRPass.innerHTML = "*Repita su contraseña.";
        validationError("rpass");
    }
    else {
        messageRPass.innerHTML = "";
        validationCorrect('rpass');
    }
});

document.getElementById('button-send').addEventListener('click', (e) => {
    e.preventDefault()
    alert("registro exitoso");
})








