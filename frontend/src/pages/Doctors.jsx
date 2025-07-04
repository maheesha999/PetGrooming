import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { useEffect } from 'react'

const Doctors = () => {

  const { speciality } = useParams()
  const [filterDoc,setFilterDoc] = useState([])
  const [showFilter,setShowFilter] = useState(false)
  const navigate = useNavigate()

  const {doctors} = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    }else {
      setFilterDoc(doctors)
    }
  }

  useEffect(()=>{
    applyFilter()
  },[doctors,speciality])

  return (
    <div>
      <p className='text-gray-600'>Browse through the vet specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={()=>setShowFilter(prev => !prev)}>Filters</button>
        <div className={`flex flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={()=> speciality === 'Vaccination' ? navigate('/doctors') : navigate('/doctors/Vaccination') } className={`W-[94VW] SM:W-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Vaccination" ? "bg-indigo-100 text-black" : ""}` }>Vaccination</p>
          <p onClick={()=> speciality === 'Dental Care' ? navigate('/doctors') : navigate('/doctors/Dental Care') } className={`W-[94VW] SM:W-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dental Care" ? "bg-indigo-100 text-black" : ""}`}>Dental Care</p>
          <p onClick={()=> speciality === 'Training' ? navigate('/doctors') : navigate('/doctors/Training') } className={`W-[94VW] SM:W-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Training" ? "bg-indigo-100 text-black" : ""}`}>Training</p>
          <p onClick={()=> speciality === 'Grooming' ? navigate('/doctors') : navigate('/doctors/Grooming') } className={`W-[94VW] SM:W-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Grooming" ? "bg-indigo-100 text-black" : ""}`}>Grooming</p>
          <p onClick={()=> speciality === 'Vetenary Care' ? navigate('/doctors') : navigate('/doctors/Vetenary Care') } className={`W-[94VW] SM:W-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Vetenary Care" ? "bg-indigo-100 text-black" : ""}`}>Vetenary Care</p>
          <p onClick={()=> speciality === 'Parasite Control' ? navigate('/doctors') : navigate('/doctors/Parasite Control') } className={`W-[94VW] SM:W-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Parasite Control" ? "bg-indigo-100 text-black" : ""}`}>Parasite Control</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterDoc.map((item,index)=>(
              <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                  <img className='bg-blue-50' src={item.image} alt="" />
                  <div className='p-4'>
                      <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                          <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                      </div>
                      <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                      <p className='text-gray-600 text-sm'>{item.speciality}</p>
                  </div>
               </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors
