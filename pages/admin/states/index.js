import React from 'react'
import States from '../../../components/Admin/adminState/States'
import ProtectedAdmin from './../../../components/misc/ProtectedAdmin';


const states = () => {
  
  return (
    <div>
      <States />
    </div>
  )
}

export default ProtectedAdmin(states);