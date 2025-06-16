import React from 'react';

const Booked = ({roomsData}) => {
    console.log(roomsData);
    const{price} = roomsData
    return (
        <div>
            <button className='w-full py-7 font-bold text-4xl text-white bg-cyan-500 btn' onClick={()=>document.getElementById('my_modal_5').showModal()}>Book Now</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box flex flex-col justify-center items-center">
    <h3 className="font-bold text-lg">Room Details</h3>
    <p>Price/Night: {price}</p>
    <p className="py-4">Please Fill up this form for booking this room.</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

  <label className="label">Title</label>
  <input type="text" className="input" placeholder="My awesome page" />

  <label className="label">Slug</label>
  <input type="text" className="input" placeholder="my-awesome-page" />

  <label className="label">Author</label>
  <input type="text" className="input" placeholder="Name" />
  <input type="submit" className="btn" value="Confirm Booking" />
</fieldset>
     <button className="btn mt-4">Close</button>  
      </form>
    </div>
  </div>
</dialog>
        </div>
    );
};

export default Booked;