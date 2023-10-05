import "./banner.css"

import logo from "../../assets/img/yandex-logo-black.png"
import scooter from "../../assets/img/banner-samokat.png"
import circle from "../../assets/img/circle.png"

const Banner = () => {
    return (
        <div className="bannerWrapper">
            <div className="banner">
                <div className="bannerInformation">
                    <img src={logo} alt="logo"/>
                    <h1>Вступайте в клуб самокатов</h1>
                    <p>Купите абонемент, чтобы стать частью клуба в новом сезоне–2024. 8 месяцев за
                        <span className="cost-group"><span className="main-cost">499 ₽</span><span className="before-cost">3190 ₽</span></span>
                    </p>
                    <button>Стать частью клуба</button>
                </div>
                <div className="bannerImg">
                    <img src={scooter} alt="samokat"/>
                    <img src={circle} alt="circle" className="circle"/>
                </div>
            </div>
        </div>
    )
}
export default Banner