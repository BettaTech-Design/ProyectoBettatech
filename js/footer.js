const createFooter = () =>{

    let footer = document.querySelector('footer');
    footer.innerHTML = `
    <div class="partFooter" id="contact">
                        <img src="img/png/Bettatech.png" alt="">
                    </div>
                        <div class="partFooter">
                            <h4>Servicios</h4>
                            <a href="#">Servicios1</a>
                            <a href="#">Servicios2</a>
                            <a href="#">Servicios3</a>
                        </div>
                        <div class="partFooter">
                            <h4>Acerca de</h4>
                            <a href="#">About 1</a>
                            <a href="#">About 2</a>
                            <a href="#">About 3</a>
                        </div>
                        <div class="partFooter">
                            <h4>Redes Sociales</h4>
                            <div class="social-media">
                                <a href="https://www.facebook.com" target="_bank"><i class="fab fa-facebook"></i></a>
                                <a href="https://www.instagram.com" target="_bank"><i class="fab fa-instagram"></i></a>
                                <a href="https://twitter.com" target="_bank"><i class="fab fa-twitter"></i></a>
                                <a href="https://www.youtube.com" target="_bank"><i class="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
    `;
}

createFooter();