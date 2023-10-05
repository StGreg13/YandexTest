import './participation.css'
import zero from "../../assets/img/zero-rub.png"
import scooter from "../../assets/img/scooter.png"
import time from "../../assets/img/time.png"
import battery from "../../assets/img/battery.png"

const Participation = () => {
    return (
        <div className="participationWrapper">
            <div className="participationContainer">
                <h2>Вот что даёт участие в клубе</h2>
                <div className="participationItems">
                    <div className="participationItem">
                        <img src={zero} alt="ноль рублей"/>
                        <p>0 ₽ за старт в каждой поездке</p>
                    </div>
                    <div className="participationItem">
                        <img src={scooter} alt="самокат"/>
                        <p>Катаетесь с друзьями? Бронируйте до трёх самокатов с аккаунта с абонементом — так у всех будет бесплатный старт</p>
                    </div>
                    <div className="participationItem">
                        <img src={time} alt="время"/>
                        <p>Бесплатная пауза 15 минут в поездке — например, чтобы зайти за кофе или передохнуть</p>
                    </div>
                    <div className="participationItem">
                        <img src={battery} alt="батарейка"/>
                        <p>Если самокат недостаточно заряжен или с ним неудобно переходить дорогу, замените по пути на другой — это бесплатно</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Participation