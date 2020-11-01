import React from 'react';
import styles from '../css_modules/footer.module.css';

const Footer = () => {
    return (
        <footer className="row align-items-center mx-0">
            <div className="btn btn-danger col-2 offset-2">
                Send me an <span className={`${styles.email} text-uppercase small`}>email</span>
            </div>
        </footer>
    );
};

export default Footer;