import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.css';
function Header() {
    const [flag, setFlag] = useState(false)
    return (

        <div className={style.header}>

            <div className={style.img}><Link to={'/'}> </Link></div>

            <div className={style.btns}>
                <div className={style.aud}>Target audience </div>
                <div className={style.sum}>Summary </div>
                <div className={style.speck}><Link to={'/speck'}>Specker</Link> </div>
            </div>


            <div className={style.sidebar}>
                <div className={style.toggleBtn} onClick={(event) => {


                    if (flag === true) {
                        event.target.parentNode.style = 'right: -260px'
                        setFlag(false)
                    } else {
                        event.target.parentNode.style = 'right: 20px'
                        setFlag(true)
                    }

                }}>

                </div>

                <ul>
                    <li> Menu </li>
                    <li> Target audience </li>
                    <li> Summary </li>
                    <li> <Link to={'/speck'}>Specker</Link> </li>
                </ul>
            </div>

        </div >




    )

};

export default Header;