

// NAVBAR generico para todas las paginas
document.addEventListener('DOMContentLoaded', function () {

    const navbar = document.getElementById('navbar');
    navbar.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="inicio.html">
                <img src="./images/logo/logo.png" alt="Logo">
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
                        <a class="nav-link" href="sobrenosotros.html">Sobre Nosotros</a>
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

    const pie_pagina = document.getElementById('pie-pagina')
    pie_pagina.innerHTML = `

    <div>
        <footer class="bg-primary text-center text-lg-start text-white">
            <div class="container p-4">
            <div class="row my-4">
                <div class="col-lg-3 col-md-6 mb-4 mb-md-1">

                    <div class=" shadow-1-strong d-flex align-items-center justify-content-center  mx-auto" style="width: 150px; height: 150px;">
                        <img src="./images/logo/logo-blanco.png" class="img-fluid" alt="Logo-blanco" loading="lazy" />
                    </div>

                    <ul class="list-unstyled d-flex flex-row justify-content-center">
                        <li>
                        <a class="text-white px-2" href="#!">
                            <i class="fab fa-facebook-square"></i>
                        </a>
                        </li>
                        <li>
                        <a class="text-white px-2" href="#!">
                            <i class="fab fa-instagram"></i>
                        </a>
                        </li>
                        <li>
                        <a class="text-white ps-2" href="#!">
                            <i class="fab fa-youtube"></i>
                        </a>
                        </li>
                    </ul>

                </div>

                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <div class="d-flex align-items-center justify-content-center ">
                        <h5 class="text-uppercase ">PARQUE INDUSTRIAL HUDSON</h5>
                    </div>

                    <ul class="list-unstyled ">
                        <li class=" d-flex justify-content-center">
                            <a href="#!" class="text-decoration-none text-white"><i class="fas fa-map-marker-alt pe-2"></i>Av. Otto Bemberg 4410</a>
                        </li>
                        <li class=" d-flex justify-content-center">
                            <a href="#!" class="text-decoration-none text-white"><i class="fas fa-map-marker-alt pe-2"></i>Hudson (CP 1885)</a>
                        </li>

                        <li class=" d-flex justify-content-center">
                            <a href="#!" class="text-decoration-none text-white"><i class="fas fa-map-marker-alt pe-2"></i>Berazategui - Buenos Aires</a>
                        </li>
                    </ul>
                </div>

                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                
                <div class="d-flex align-items-center justify-content-center ">
                    <h5 class="m-2 text-uppercase ">  TELEFONO</h5> 
                </div>

                <ul class="list-unstyled d-flex justify-content-center">
                    <li class="fas fa-phone pe-3 mb-2">
                        <a href="tel:+541152726318" class="text-decoration-none text-white">+54 11 5272 6318</a>
                    </li>
                </ul>
                </div>

                <div class="col-lg-3 col-md-6 mb-4 mb-md-0 ">
                    <div class="d-flex align-items-center justify-content-center  ">
                        <h5 class="text-uppercase  mb-2">  E-mail </h5> 
                        
                    </div>

                    <ul class="list-unstyled ">
                        <li class=" d-flex justify-content-center">
                            <p>
                                <i class="fas fa-envelope pe-2"></i>
                                ventas@4pack.com.ar
                            </p>
                        </li>
                            <li class=" d-flex justify-content-center">
                            <p>
                                <i class="fas fa-envelope pe-2"></i>
                                administracion@4pack.com.ar
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            </div>

            <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
                © 2024 4pack. Todos los derechos reservados.
            </div>
        </footer>

    </div>
    `
});
