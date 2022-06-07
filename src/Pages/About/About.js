import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='container-fluid text-center p5 py-5 bg-dark'>
            <h1 className=' text-white '>About My self</h1>
            <div className=' mt-5 outline'>
                <img className='my-img'
                    src="https://avatars.githubusercontent.com/u/81668276?v=4"
                    alt="Md. Rakibul Hasan"
                    title='Md. Rakibul Hasan' />

                <div className=' about-text w-75 mx-auto'>
                    <h3 className='my-4 mx-2'>
                        <span className=' text-warning'>Name : </span>
                        Rakibul Hasan
                    </h3>

                    <h5 className='my-4 mx-2'>
                        <span className=' text-warning'>My Goals : </span>
                        <br /><br />
                        <span className='mt-3'>Want to make my self a good and respected Web developer and Designer also a Graphic Designer.
                            Work for Helpless people make their happiness.  To build a pollution less better world for human.  </span>
                    </h5>


                </div>
            </div>
        </div>
    );
};

export default About;