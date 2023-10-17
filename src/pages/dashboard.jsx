import React from 'react'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <h6 className='login-here'>DASHBOARD</h6>
      <form action="#" className='form-dashboard'>
        <label className='choose-an-image'> Choose an Image</label>
        <input type="file" name="image" id="image"  className='input-dashboard'/>
        <input type="text" name="heading" id="heading" placeholder='Enter Heading title' className='input-dashboard' />
        <input type="text" placeholder='Enter author name' className='input-dashboard' />
        <input type="date" placeholder='Enter date'  className='input-dashboard'/>
        <input type="text" placeholder='Enter Description' className='input-dashboard-description'/>
        <button className='publish-button-dashboard'>Publish</button>
      </form>
        
    </div>
  )
}

export default Dashboard