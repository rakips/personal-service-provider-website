import React from 'react';

const NotFound = () => {
    return (
        <div className='text-center'>
            <h1 style={{ color: 'blue', fontFamily: "monospace", fontSize: '70px' }}>
                <samp style={{ fontSize: '150px' }}>404 </samp>
                <br />
                Link Invalid  </h1>

            <img className='mt-3' src="https://cdn.dribbble.com/users/1365063/screenshots/3979985/media/0428411f63725ede7c75b4de689156ab.png?compress=1&resize=400x300" alt="" />

        </div>
    );
};

export default NotFound;