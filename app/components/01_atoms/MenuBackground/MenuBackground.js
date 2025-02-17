import style from "./menubackground.module.scss";

export const MenuBackground = () => {
    return (
        <div className={style.container}>
            <svg className={style.ellipse} viewBox="0 0 375 435" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="187.5" cy="217.5" rx="187.5" ry="217.5"/>
            </svg>
            <svg className={style.backgroundEllipse} viewBox="0 0 375 435" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="187.5" cy="217.5" rx="187.5" ry="217.5"/>
            </svg>
        </div>
    );
};

export default MenuBackground;