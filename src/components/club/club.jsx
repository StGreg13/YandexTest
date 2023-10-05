import './club.css'

import scooterPurpl from '../../assets/img/scooter-purple.png'
import scooterCloud from '../../assets/img/scooter-cloud.png'

const Club = () => {
    return (
        <div className="clubWrapper">
            <div className="clubContainer">
                <div className="clubItems">
                    <div className="clubItem">
                        <h2>Купить абонемент и вступить в клуб смогут те, кто в Плюсе</h2>
                        <p>За каждую поездку на самокатах такие пользователи получают кешбэк баллами.
                            Баллы можно тратить на поездки на самокатах и такси с Яндекс Go,
                            покупки и заказы в других сервисах Яндекса</p>
                    </div>
                    <div className="clubItem">
                        <img src={scooterCloud} alt="scooter"/>
                    </div>
                    <div className="clubItem">
                        <img src={scooterPurpl} alt="scooter"/>
                    </div>
                    <div className="clubItem">
                        <h2>80  % наших пользователей уже в клубе и экономят на поездках</h2>
                        <p>Присоединяйтесь — опция начнёт действовать в начале сезона–2024. Об открытии сезона предупредим заранее, чтобы вы были готовы</p>
                        <button>Хочу абонемент</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Club