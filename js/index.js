// document.addEventListener('DOMContentLoaded', function() {
//     // Ejemplo de un simple saludo que aparece al cargar la página
//     // alert('Bienvenido a 4Pack - Expertos en envases flexibles');

//     // Agregar funcionalidad de scroll suave para la navegación
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();
//             let targetElement = document.querySelector(this.getAttribute('href'));
//             targetElement.scrollIntoView({ behavior: 'smooth' });
//         });
//     });

//     // Funcionalidad para el formulario de contacto
//     const form = document.querySelector('form');
//     form.addEventListener('submit', function(event) {
//         event.preventDefault();  // Evitar que el formulario se envíe automáticamente
//         let nombre = form.querySelector('input[type="text"]').value;
//         let email = form.querySelector('input[type="email"]').value;
//         let mensaje = form.querySelector('textarea').value;
//         console.log(`Nombre: ${nombre}, Email: ${email}, Mensaje: ${mensaje}`);
//         alert('Gracias por tu mensaje, te contactaremos pronto.');
//     });
// });



// NAVBAR generico para todas las paginas
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    navbar.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="inicio.html">
                <img src="./images/logo/logo.png" alt="Logo"> <!-- Cambia 'path_to_logo.png' al path correcto del logo -->
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="inicio.html">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="productos.html">Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="tecnologia.html">Tecnología</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contacto.html">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `;

    const currentLocation = location.href;
    document.querySelectorAll('#navbarNav .nav-link').forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add('active');
        }
    });
});
