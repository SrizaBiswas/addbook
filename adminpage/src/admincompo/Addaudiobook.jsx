import React from 'react'

const Addaudiobook = () => {
  return (
    <main className='main-abk'>
    <div className='inbk'>
     <div className='headbk'>
        <img
              src="/assests/logoExplore.png"
              alt="Logo Image"/>
              <span className='line'><h2>Upload a Audiobook</h2></span>
      </div>
     <form className='input-form'>
      <div className='outbk'>
         <div className='innerbk'>
           <div className="inputbk">
             <label htmlFor="bkname">Audiobook Title</label>
             <div className="input-flexbk">
                <input
                   type="text"
                   name="bknme"
                   required
                   placeholder="Enter Audiobook name"
                ></input>
             </div> 
           </div>
           <div className="inputbk">
             <label htmlFor="authname">Author Name</label>
             <div className="input-flexbk">
               <input
                   type="text"
                   name="authnme"
                   required
                  placeholder="Author name"
               ></input>
             </div>
           </div>
         </div>
         <div className='innerbk'>
           <div className="inputbk">
             <label  htmlFor="bkimage">Audiobook Cover Url</label>
             <div className="input-flexbk">
                <input
                   type="text"
                   name="bkimage"
                   required
                   placeholder="Audiobook Image Url"
                ></input>
             </div> 
           </div>
           <div className="inputbk">
             <label htmlFor="bkgenre">Audiobook Genre</label>
             <div className="input-flexbk">
               <input
                   type="text"
                   name="bkgenre"
                   required
                  placeholder="Audiobooks Category"
               ></input>
             </div>
           </div>
         </div>
         <div className='innerbk'>
           <div className="inputbk">
             <label  htmlFor="bkimage">Audiobook Description</label>
             <div className="input-flexbk">
               <textarea
                  id="myTextarea"
                  rows={2} // Set the number of visible rows
                  cols={55} // Set the number of visible columns
                  placeholder="Write books Description"// Placeholder text
               ></textarea>
             </div> 
           </div>
           <div className="inputbk">
             <label htmlFor="bkgenre">Books Content</label>
             <div className="input-flexbk">
               <input
                   type="text"
                   name="bkcon"
                   required
                  placeholder=" Add your books audio"
               ></input>
             </div>
           </div>
         </div>
         
        </div> 
        <button type='submit' className='adbtn'>
        <span>Add</span>
        </button>
     </form>
     </div>
  </main>
  )
}

export default Addaudiobook

