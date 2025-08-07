import  React,{ useState } from 'react'

import './App.css'
import Details from './Components/Details'
import Cv from './Components/Cv'

function App() {
  const [data, setData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        university: '',
        degree: '',
        startDate: '',
        endDate: '',
        location: '',
        companyName:'',
        position:'',
        expSartDate: '',
        expEndDate: '',
        expLocation: '',
        description: ''
    })

  return (
    <div className='App'>
      <Details data={data} setData={setData}/>
      <Cv data={data}/>
    </div>
  )
}

export default App
