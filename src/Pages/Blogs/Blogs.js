import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='mt-4 p-4 text-center'>
            <h2>Questions Answer </h2>
            <div className='blogs'>

                {/* qus 1----------------- */}
                <div className=' mb-3 mt-3 border-contain'>
                    <h1 >
                        <samp className=' text-info'>Qus 1:</samp>
                        <span className='blogs-title'>
                            Differences between authorization and authentication.
                        </span>
                    </h1>

                    <ul>
                        <h3 className=' text-info mb-3 mt-3'>Ans:

                        </h3>
                        <h3 className='text-decoration-underline'> Authentication</h3>
                        <li>Authentication verifies user.</li>
                        <li> Authentication generally works through passwords, its doing one-time pins, other information provided or entered by the user. </li>
                        <li>  Authentication is visible to and partially changeable by the user.</li>
                    </ul>
                    <ul>
                        <h3 className=' text-decoration-underline'> Authorization</h3>

                        <li> Authorization works through settings that are implemented and maintained by the System. </li>
                        <li>Authorization declare what resources a user can access.</li>
                        <li>  Authorization changeable by the user..</li>
                    </ul>

                </div>

                {/* qus 2----------------- */}
                <div className=' mb-3 mt-3 border-contain'>
                    <h1 >
                        <samp className=' text-info'>Qus 2:</samp>
                        <span className='blogs-title'>
                            Why are you using firebase? What other options do you have to implement authentication basically?
                        </span>
                    </h1>

                    <ul>
                        <h3 className=' text-info mb-3 mt-3'>Ans: </h3>
                        <h3 className='text-decoration-underline'> Firebase using for</h3>

                        <h5>
                            Firebase provides easy-to-use SDKs, hosting, database managemen, ready-made UI libraries to authenticate users etc  to my app.
                        </h5>
                        <h3 className='text-decoration-underline'> Some Firebase options for we are using firebase basically these are</h3>
                        <li>1. Authentication.</li>
                        <li>2. Cloud Firestore.</li>
                        <li> 3.  Extensions.</li>
                        <li> 4. Hosting. etc</li>

                    </ul>

                </div>

                {/* qus 3----------------- */}
                <div className=' mb-3 mt-3 border-contain'>
                    <h1 >
                        <samp className=' text-info'>Qus 3:</samp>
                        <span className='blogs-title'>
                            What other services does firebase provide other than authentication?
                        </span>
                    </h1>

                    <ul>
                        <h3 className=' text-info mb-3 mt-3'>Ans: <span className=' text-black'>Other services does firebase provide other than authentication those are </span></h3>
                        <li>1.Cloud Storage </li>
                        <li>2. Cloud Functions</li>
                        <li>3. Authentication</li>
                        <li>4. Hosting</li>
                        <li> 5.Cloud Firestore </li>
                        <li>6. Google Analytics</li>
                        <li> 7. Predictions</li>
                        <li> 8. Cloud Messaging</li>
                        <li>9. Dynamic Links</li>
                        <li>10 Remote Config</li>

                    </ul>

                </div>

            </div>

        </div >
    );
};

export default Blogs;