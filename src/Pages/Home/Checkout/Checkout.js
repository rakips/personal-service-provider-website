
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Service from '../Service/Service';




const Checkout = () => {
    const { serviceId } = useParams();

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => console.log(data));
    }, [serviceId])



    return (
        <div className='text-center m-5'>
            <h1 className=' mt-5 text-info'>Checkout Process</h1>
            <h2 className='m-5'>Your Selected product is: <span className=' text-primary'> {serviceId}</span> </h2>
            <img className='container ' src="https://i.ibb.co/Qj7Yvrb/Videography.jpg" alt="" />

        </div>
    );
};

export default Checkout;