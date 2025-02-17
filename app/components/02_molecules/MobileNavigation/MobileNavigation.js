import style from "./mobilenavigation.module.scss";
import MenuList from "@/app/components/01_atoms/MenuList/MenuList";

export const MobileNavigation = () => {
    return (
        <div className={style.mobileNavi}>
            {/*<MenuButton open={open} action={toggleMenu}/>*/}
            <svg className='growing-blob' viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M434.5,289Q443,338,400,362.5Q357,387,324.5,427.5Q292,468,247.5,435Q203,402,156.5,402.5Q110,403,76.5,369Q43,335,29,287.5Q15,240,48,201.5Q81,163,104.5,131.5Q128,100,158.5,57.5Q189,15,233.5,45Q278,75,318,83.5Q358,92,395,119.5Q432,147,429,193.5Q426,240,434.5,289Z"
                    fill="#1F2B6D"/>
            </svg>
            {/*<Overlay className='menu-overlay'/>*/}
            <div className="mobile-menu__open">
                <div className='mobile-menu__items'>
                    <MenuList/>
                </div>
            </div>
        </div>
    );
};

export default MobileNavigation;