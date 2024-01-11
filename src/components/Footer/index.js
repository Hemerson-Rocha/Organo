import IMAGES from '../../images'
import './Footer.css'

const Footer = () => {
    return(
        <footer>
            <section className="bg" style={{ backgroundImage : `url(${IMAGES.fundo}`}}>
                <div>
                    <img src="./img/fb.png" alt="" />
                    <img src="./img/tw.png" alt="" />
                    <img src="./img/ig.png" alt="" />
                </div>
                <img src="./img/logo.png" alt="" />
                <p>Desenvolvido por Hemerson</p>
            </section>
        </footer>
    )
}

export default Footer