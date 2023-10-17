import React from 'react'

const Contact = () => {
  return (
    <div>
        
        <div className='about-us'>
      {/* <Navbar/> */}
        <p className='about-heading'>Contact us</p>
        
        {/* <p className='about-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod saepe cumque omnis sit possimus maxime dolorum rem odio magnam ducimus dolores voluptatem velit, placeat numquam ea assumenda aspernatur tenetur. Eos. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint modi omnis consectetur est non cum voluptatem repellendus dolor quia praesentium, illo quasi quos labore fuga optio dignissimos. Adipisci, possimus sit!</p> */}
        {/* <p className='about-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod saepe cumque omnis sit possimus maxime dolorum rem odio magnam ducimus dolores voluptatem velit, placeat numquam ea assumenda aspernatur tenetur. Eos. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint modi omnis consectetur est non cum voluptatem repellendus dolor quia praesentium, illo quasi quos labore fuga optio dignissimos. Adipisci, possimus sit!</p> */}
        <p className='about-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod saepe cumque omnis sit possimus maxime dolorum rem odio magnam ducimus dolores voluptatem velit, placeat numquam ea assumenda aspernatur tenetur. Eos. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint modi omnis consectetur est non cum voluptatem repellendus dolor quia praesentium, illo quasi quos labore fuga optio dignissimos. Adipisci, possimus sit!</p>
        <h1 className='get-in-touch'>Get in touch here!</h1>
         <form action="#" className='form-contact'>
          <input type="text"  placeholder='Enter your Name'  className='input-contact'/>
          <input type="email"  placeholder='Enter your Email' className='input-contact'/>
          <input type="text"  placeholder='Enter your Message' className='input-contact'/>
          <button className='send-message-contact'>Send Message</button>
         </form>
    </div>
    </div>
  )
}

export default Contact