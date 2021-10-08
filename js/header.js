const createHeader = () => {

    let header = document.querySelector('header');
    header.innerHTML = `
    <nav>
        <section class="contenedor nav">
            <div class="logo">
                <img src="img/png/tecnologia.png" alt="BettaTech">
            </div>
            <div class="enlaces-header">
                <a href="#inicio">Inicio</a>
                <a href="#services">Services</a>
                <a href="#results">Results</a>
                <a href="#support">Support</a>
                <a href="#contact">Contact</a>
            </div>
            <div class="hamburguer">
                <i class="fas fa-bars"></i>
            </div>
        </section>
    </nav>
        <div class="questions contenedor" id="inicio">
            <section class="contenido-header">
                <section class="textos-header">
                    <h1>Buenas tardes Marianela Chaves</h1>
                    <p>Este es mi pequeño sitio wed, si no te gusta te comer un tufi xD xD </p>
                    <a href="https://www.google.com" target="_bank">Learn more</a>
                </section>
                    <img src="img/svg/1.svg" alt="">
            </section>
        </div>`;
}

createHeader();