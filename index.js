const nombreUI = document.querySelector("#nombre");
const correoUI = document.querySelector("#correo");
const edadUI = document.querySelector("#edad");
const sexoUI = document.querySelector("#sexo");
const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", agregar);

function agregar(evento) {
    evento.preventDefault();
    const objeto = {
        nombre: nombreUI.value,
        correo: correoUI.value,
        edad: edadUI.value,
        sexo: sexoUI.value,
    };

    let datos = JSON.parse(localStorage.getItem("valores"));
    console.log(datos)
    if (datos === null) {
        datos = [];
    }
    datos.push(objeto);
    console.log(datos)
    localStorage.setItem("valores", JSON.stringify(datos));

    // Actualizar la lista de personal
    mostrarListadoPersonal(datos);

    formulario.reset();
}

function mostrarListadoPersonal(datos) {
    listaPersonalUI.innerHTML = ""; // Limpiar la lista antes de actualizar

    datos.forEach((persona) => {
        const personaHTML = `
            <p>Nombre: ${persona.nombre}</p>
            <p>Correo: ${persona.correo}</p>
            <p>Edad: ${persona.edad}</p>
            <p>Sexo: ${persona.sexo}</p>
            <hr>
        `;
        listaPersonalUI.innerHTML += personaHTML;
    });
}

// Cargar el listado de personal al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    let datos = JSON.parse(localStorage.getItem("valores"));
    if (datos === null) {
        datos = [];
    }
    mostrarListadoPersonal(datos);
});

