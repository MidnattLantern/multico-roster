import Styles from "./NameTitle.module.css";

const NameTitle = () => {
    return(<>
        <div className={`${Styles.NameTitleComponent} ${Styles.CannotInteract}`}>
            <h1 className={Styles.NameTitleHeader}>{"NICOLETTE"}</h1>
            <p className={Styles.NameTitleSubText}>{"Street rat victim of a terrible fate"}</p>
        </div>
    </>)
};

export default NameTitle;