import {BsGridFill, BsMenuButtonWideFill, BsCaretLeftSquareFill, BsMicFill, BsChatDotsFill, BsFileTextFill, BsFillBookFill, BsPlayBtnFill, BsImages, BsPencilSquare, BsFillPeopleFill, BsFillTelephoneFill} from 'react-icons/bs';
import {APP_PREFIX_PATH, AUTH_PREFIX_PATH} from '../../config/AppConfig'; 
import {AUTH_TOKEN} from '../../redux/constants/Auth';


export const items = [
    {
        key: `${APP_PREFIX_PATH}/home`, 
        icon: <BsGridFill/>, 
        label: 'Dashboard'
    },
    {
        key: `${APP_PREFIX_PATH}/courses`, 
        icon: <BsMenuButtonWideFill/>, 
        label: 'Products'
    },
    {
        key: `${APP_PREFIX_PATH}/certificate`,
        icon: <BsFileTextFill/>, 
        label: 'Staffs'
    },

    {
        key: AUTH_PREFIX_PATH,
        icon: <BsCaretLeftSquareFill/>, 
        label: <div onClick={() => localStorage.removeItem(AUTH_TOKEN)}> Hisobdan chiqish </div>
    }
];