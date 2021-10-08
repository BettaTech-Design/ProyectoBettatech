const createHeader = () => {

    let header = document.querySelector('header');
    header.innerHTML = `
    <nav>
        <section class="contenedor nav">
            <div class="logo">
                <img src="img/png/tecnología.png" alt="BettaTech">
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
                    <h1>Our creativity is your success</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, similique rerum.</p>
                    <a href="https://www.google.com" target="_bank">Learn more</a>
                </section>
                    <img src="img/svg/1.svg" alt="">
            </section>
        </div>`;
}

createHeader();