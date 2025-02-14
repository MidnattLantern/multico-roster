import ContinueButtonArrow from "../../../assets/vector-graphics/ContinueButtonArrow.svg?react";
import Styles from "../styles/ContinueButton.module.css";

const ContinuteButton = () => {
    return(<>
    <div className={Styles.ContinuteButtonComponent}>
        <div className={Styles.ContinuteButtonBorder}>
            <button className={Styles.ContinuteButtonStyle}>
                {"Read about Nicolette"}
                <ContinueButtonArrow className={Styles.ContinuteButtonArrow}/>
            </button>
        </div>
    </div>
    </>)
}

export default ContinuteButton;