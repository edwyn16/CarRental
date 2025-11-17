import React, { useState } from 'react'
import Title from '../../components/owner/Title'
import { assets } from '../../assets/assets'

const AddCar = () => {
  const currency = import.meta.env.VITE_CURRENCY;

  const [image, setImage] = useState(null)
  const [car, setCar] = useState({
    brand: '',
    model: '',
    year: 0,
    pricePerDay: 0,
    category: '',
    transmission: '',
    fuelType: '',
    seat: 0,
    description: '',
    location: ''
  })

  const onSubmitHandler = async (e) => {
    e.preventDefault()
  }

  return (
    <div className='px-4 py-10 md:px-10 flex-1'>
        <Title title="Add New Car" subTitle="Fill in details to list a new car for booking, including pricing, availability, and car specifications." />

        <form onSubmit={onSubmitHandler} className='flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl'>
          {/* Car Image */}
          <div className='flex items-center gap-2 w-full'>
            <label htmlFor="car-image">
              <img src={image ? URL.createObjectURL(image) : assets.upload_icon} alt="image" className='h-14 rounded cursor-pointer' />
              <input type="file" id='car-image' accept='image/*' hidden onChange={e => setImage(e.target.files[0])} />
            </label>
            <p className='text-sm text-gray-500'> Upload a picture of your car </p>
          </div>

          {/* Car Brand & model */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='flex flex-col w-full'>
              <label> Brand </label>
              <input className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' type="text" placeholder='e.g. BMW, Mercedes, Audi...' required value={car.brand} onChange={e => setCar({...car, brand: e.target.value})} />
            </div>
            <div className='flex flex-col w-full'>
              <label> Model </label>
              <input className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' type="text" placeholder='e.g. X5, E-Class, M4...' required value={car.model} onChange={e => setCar({...car, model: e.target.value})} />
            </div>
          </div>

          {/* Car Year, Price, Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className='flex flex-col w-full'>
              <label> Year </label>
              <input className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' type="number" placeholder='2025' required value={car.year} onChange={e => setCar({...car, year: e.target.value})} />
            </div>
            <div className='flex flex-col w-full'>
              <label> Daily Price ({currency}) </label>
              <input className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' type="number" placeholder='100' required value={car.pricePerDay} onChange={e => setCar({...car, pricePerDay: e.target.value})} />
            </div>
            <div className='flex flex-col w-full'>
              <label> Category </label>
              <select className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' onChange={e => setCar({...car, category: e.target.value})} value={car.category}>
                <option value=""> Select a category </option>
                <option value="Sedan"> Sedan </option>
                <option value="SUV"> SUV </option>
                <option value="Van"> Van </option>
              </select>
            </div>
          </div>

          {/* Car Transmission, Fuel Type, Seating Capacity */}
          <div></div>

        </form>
    </div>
  )
}

export default AddCar