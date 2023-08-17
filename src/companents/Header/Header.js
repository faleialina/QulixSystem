import { Link } from 'react-router-dom';
import style from './style.module.css';
function Header() {
    return (

        <div className={style.header}>
            <div className={style.img}><Link to={'/'}> </Link></div>
            <div className={style.btns}>
                <div className={style.aud}>Target audience </div>
                <div className={style.sum}>Summary </div>
                <div className={style.speck}><Link to={'/speck'}>Specker</Link> </div>
            </div>
        </div>

    )
};

export default Header;