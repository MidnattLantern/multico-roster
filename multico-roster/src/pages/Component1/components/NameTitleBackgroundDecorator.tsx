import Styles from "../styles/NameTitleBackgroundDecorator.module.css";

const NameTitleBackgroundDecorator = () => {
    return(<>
        <svg className={`${Styles.NameTitleBackgroundDecoratorComponent} ${Styles.CannotInteract}`}>
            <text x="0" y="90%" className={Styles.NameTitleBackgroundDecoratorText}>
                NICOLETTE NICOLETTE
            </text>
        </svg>
    </>)
};

export default NameTitleBackgroundDecorator;