import { Link } from 'react-router-dom';
import style from "./style.module.css"

function SpeckPage() {
    return (

        <div className={style.specker}>
                <div className={style.img}></div>
                <div className={style.info}>
                    <h1>Alexander Arabey</h1>
                    <h2>Director of Business Development, Qulix Systems</h2>
                    <p>Alexander has more than 20 years' experience in the field of digital banking and fintech. He is ready to share his expertise and give you valuable advice during this webinar.</p>
                    <div className={style.btn}><Link to={'/auth'}>Register now</Link></div>
                </div>
            </div>
    )
}

export default SpeckPage;