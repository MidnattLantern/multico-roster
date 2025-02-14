import Styles from "./CornerDecorators.module.css";
import TopLeftCorner from "../../../assets/vector-graphics/TopLeftCorner.svg?react";
import BottomLeftCorner from "../../../assets/vector-graphics/BottomLeftCorner.svg?react";
import BottomRightCorner from "../../../assets/vector-graphics/BottomRightCorner.svg?react";
import CirclesDecorator from "../../../assets/vector-graphics/CirclesDecorator.svg?react";

const CornerDecorators = () => {
    return(<>
        <div className={Styles.AlignTopLeftCorner}>
            <TopLeftCorner className={Styles.CornerAppearance} />
        </div>
        <div className={Styles.AlignBottomLeftCorner}>
            <BottomLeftCorner className={Styles.CornerAppearance} />
        </div>
        <div className={Styles.AlignBottomRightCorner}>
            <BottomRightCorner className={Styles.CornerAppearance} />
        </div>
        <div className={Styles.AlignCirclesDecorator}>
            <CirclesDecorator className={Styles.CirclesDecoratorAppearace}/>
        </div>
    </>)
};

export default CornerDecorators;
