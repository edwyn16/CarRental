import React, { use, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dummyCarData } from '../assets/assets';

const CarDetails = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);

  useEffect(() => {
    setCar(dummyCarData.find((car) => car._id === id));
  }, [id]);

  return (
    <div>
        
    </div>
  )
}

export default CarDetails