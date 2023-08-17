

import style from './style.module.css';

function AuthPage() {
    return (
        <div className={style.bannerBgr}>

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
    )
}

export default AuthPage;