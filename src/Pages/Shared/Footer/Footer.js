import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='container-fluid page-footer text-center bg-primary'>
            <div className='p-2'>
                <h6>Flowing on</h6>
                <a target='blank' href="https://www.facebook.com/profile.php?id=100041548471306">
                    Facebook</a>
                <a target='blank' href="https://github.com/rakips">Github</a>
            </div>
            <div>
                <Link to='/home'>  <span className=' text-white px-0'>Copyright ©</span> <span>Rakip's Photography</span></Link>
            </div>
        </footer>
    );
};

export default Footer;