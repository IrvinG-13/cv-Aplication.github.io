import '../Styles/Details.css';
import { useState } from 'react';

export default function Details({data, setData}){
    const [showPersonal, setShowPersonal] = useState(true);
    const [showEducation, setShowEducation] = useState(true);
    const [showExperience, setShowExperience] = useState(true);

     const resetAll =()=>{
        setData({
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
        setShowPersonal(true);
        setShowEducation(true);
        setShowExperience(true);
     }

    return(
        <div className='Details'>
            

            <div className="PersonalDetails">
                <h2 onClick={() => setShowPersonal(!showPersonal)}>Personal Details</h2>
                {showPersonal && (
                <>
                <label>Full Name</label>
                <input type="text" value={data.fullName} onChange={(e)=> setData({...data,fullName: e.target.value})}/>

                <label>Email</label>
                <input type="text" value={data.email} onChange={(e)=> setData({...data,email: e.target.value})} />

                <label>Phone</label>
                <input type="text" value={data.phone} onChange={(e)=> setData({...data,phone: e.target.value})}/>

                <label>Address</label>
                <input type="text" value={data.address} onChange={(e)=> setData({...data,address: e.target.value})}/>
                </>
                )}
            </div>

            <div className="educationalDetails">
                <h2 onClick={()=> setShowEducation(!showEducation)}>Educational Details</h2>
                {showEducation &&(
                    <>
                    <label htmlFor="">University</label>
                    <input type="text" value={data.university} onChange={(e)=> setData({...data, university: e.target.value})}/>

                    <label htmlFor="">Degree</label>
                    <input type="text" value={data.degree} onChange ={(e)=> setData({...data,degree: e.target.value})}/>

                    <label htmlFor="">Start Date</label>
                    <input type="date" value={data.startDate} onChange ={(e)=> setData({...data,startDate: e.target.value})}/>

                    <label htmlFor="">End Date</label>
                    <input type="date" value={data.endDate} onChange={(e)=> setData({...data,endDate: e.target.value})}/>

                    <label htmlFor="">Location</label>
                    <input type="text" value={data.location} onChange={(e)=> setData({...data,location: e.target.value})}/>
                    </>
                )}
                

            </div>

            <div className="experienceDetails">
                <h2 onClick={()=> setShowExperience(!showExperience)}>Experience Details</h2>
                {showExperience &&(
                    <>
                    <label htmlFor="">Company Name</label>
                    <input type="text" value={data.companyName} onChange={(e)=> setData({...data,companyName: e.target.value})}/>

                    <label htmlFor="">Position</label>
                    <input type="text" value={data.position} onChange={(e)=> setData({...data,position: e.target.value})}/>

                    <label htmlFor="">Start Date</label>
                    <input type="date" value={data.expSartDate} onChange ={(e)=> setData({...data,expSartDate: e.target.value})}/>

                    <label htmlFor="">End Date</label>
                    <input type="date" value={data.expEndDate} onChange ={(e)=> setData({...data,expEndDate: e.target.value})}/>

                    <label htmlFor="">Location</label>
                    <input type="text" value={data.expLocation} onChange={(e)=> setData({...data,expLocation: e.target.value})}/>

                    <label htmlFor="">Description</label>
                    <input type="text" value={data.description} onChange={(e)=> setData({...data,description: e.target.value})}/>
                    </>
                )}               
            </div>

            <div className="buttons">
            <button onClick={resetAll}>Reset</button>
            </div>
            
                      
        </div>
    )
}