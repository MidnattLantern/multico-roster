import Styles from "../styles/ThirdsCrossDecorator.module.css";

const ThirdsCrossDecorator = () => {

    const ThirdsCrossDecorators = () => {
        const Cross = () => {
            return(<>
                <line x1="0vw" y1="1vw" x2="2vw" y2="1vw" className={Styles.ThirdsCrossDecorator} />
                <line x1="1vw" y1="0vw" x2="1vw" y2="2vw" className={Styles.ThirdsCrossDecorator} />
            </>)
        }
        return(<>
            {/*
            <svg width={"2vw"} height={"2vw"} className={Styles.ThirdsCrossPlacement1}>
                <Cross />
            </svg>
            */}
            <svg width={"2vw"} height={"2vw"} className={Styles.ThirdsCrossPlacement2}>
                <Cross />
            </svg>
            <svg width={"2vw"} height={"2vw"} className={Styles.ThirdsCrossPlacement3}>
                <Cross />
            </svg>
            <svg width={"2vw"} height={"2vw"} className={Styles.ThirdsCrossPlacement4}>
                <Cross />
            </svg>

            {/*
            <svg width={"2vw"} height={"2vw"} className={Styles.ThirdsCrossPlacement5}>
                <Cross />
            </svg>
            */}
            <svg width={"2vw"} height={"2vw"} className={Styles.ThirdsCrossPlacement6}>
                <Cross />
            </svg>
            <svg width={"2vw"} height={"2vw"} className={Styles.ThirdsCrossPlacement7}>
                <Cross />
            </svg>
            <svg width={"2vw"} height={"2vw"} className={Styles.ThirdsCrossPlacement8}>
                <Cross />
            </svg>

            {/*
            <svg width={"2vw"} height={"2vw"} className={Styles.ThirdsCrossPlacement9}>
                <Cross />
            </svg>
            <svg width={"2vw"} height={"2vw"} className={Styles.ThirdsCrossPlacement10}>
                <Cross />
            </svg>
            <svg width={"2vw"} height={"2vw"} className={Styles.ThirdsCrossPlacement11}>
                <Cross />
            </svg>
            <svg width={"2vw"} height={"2vw"} className={Styles.ThirdsCrossPlacement12}>
                <Cross />
            </svg>
            */}

            {/*
            <svg width={"2vw"} height={"2vw"} className={Styles.ThirdsCrossPlacement13}>
                <Cross />
            </svg>
            <svg width={"2vw"} height={"2vw"} className={Styles.ThirdsCrossPlacement14}>
                <Cross />
            </svg>
            <svg width={"2vw"} height={"2vw"} className={Styles.ThirdsCrossPlacement15}>
                <Cross />
            </svg>
            <svg width={"2vw"} height={"2vw"} className={Styles.ThirdsCrossPlacement16}>
                <Cross />
            </svg>
            */}
        </>)
    };

    return(<>
        <ThirdsCrossDecorators />
    </>)
};

export default ThirdsCrossDecorator