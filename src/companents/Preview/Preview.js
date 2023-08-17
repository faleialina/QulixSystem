import { Link } from 'react-router-dom';
import style from './style.module.css';
import Header from "../../companents/Header/Header";
function Preview() {
    return (
        <div>
            <div className={style.bannerBgr}>
                <Header />
                <div className={style.banner}>

                    <h2>FREE WEBINAR</h2>
                    <h1>How to launch a neobank in 6 months?</h1>
                    <p>Register for the webinar now! Please fill out all fields</p>

                    <div className={style.form}>

                        <div > <input type="text" placeholder="First name*" /></div>
                        <div > <input type="text" placeholder="Last name*" /></div>
                        <div > <input type="text" placeholder="Company name*" /></div>
                        <div > <input type="text" placeholder="Email address*" required /></div>

                    </div>
                    <div className={style.btn}>Submit</div>
                </div>
            </div>

            <div className={style.targetAudience}>
                <h1>The webinar is best for</h1>
                <div className={style.info}>
                    <div className={style.startUp}>
                        <div className={style.img}></div>
                        <p>Fintech startups, banks, and financial organizations planning to launch digital banking</p>
                    </div>
                    <div className={style.business}>
                        <div className={style.img}></div>
                        <p>Businesses that are already developing a project, but would like to improve the process</p>
                    </div>
                    <div className={style.investor}>
                        <div className={style.img}></div>
                        <p>Investors who want to invest in a project, but don't understand its real cost</p>
                    </div>
                </div>
                <div className={style.btn}><Link to={'/auth'}>Register</Link></div>
            </div>

            <div className={style.specker}>
                <div className={style.img}></div>
                <div className={style.info}>
                    <h1>Alexander Arabey</h1>
                    <h2>Director of Business Development, Qulix Systems</h2>
                    <p>Alexander has more than 20 years' experience in the field of digital banking and fintech. He is ready to share his expertise and give you valuable advice during this webinar.</p>
                    <div className={style.btn}><Link to={'/auth'}>Register now</Link></div>
                </div>
            </div>

        </div>
    )
};
export default Preview;