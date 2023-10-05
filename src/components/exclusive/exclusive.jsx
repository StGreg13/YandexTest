import "./exclusive.css"

import img1 from "../../assets/img/Frame 1171275596.png"
import img2 from "../../assets/img/Frame 1171275597.png"
import img3 from "../../assets/img/Frame 1171275598.png"
import img4 from "../../assets/img/Frame 1171275599.png"

const Exclusive = () => {
    return (
        <div className="exclusiveWrapper">
            <div className="exclusiveContainer">
                <h2>Эксклюзивный доступ к событиям Самокатов</h2>
                <p>С абонементом — у вас доступ к специальным мероприятиям, скидки и классный мерч.
                    В 2023 году мы танцевали на Даче Плюс с Антохой MC, катались на самокатах
                    с Сергеем Мезенцевым и слушали хор Attaque de Panique</p>
                <div className="exclusiveItems">
                    <div className="exclusiveItem">
                        <img src={img2} alt="exclusive photo"/>
                    </div>
                    <div className="exclusiveItem">
                        <img src={img1} alt="exclusive photo"/>
                    </div>
                    <div className="exclusiveItem">
                        <img src={img4} alt="exclusive photo"/>
                    </div>
                    <div className="exclusiveItem">
                        <img src={img3} alt="exclusive photo"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Exclusive