
import React from 'react';

const Profile = () => {
  return (
      <div className='w-[392px] h-[72px] bg-[#FDFBF7] flex gap-8 items-center justify-center rounded-[8px] fixed bottom-0 z-[100]'>
        <div className='w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#3643FB4D]'>
            <img src="home-security_2185959.png" alt="Logo" className="w-8 h-8 rounded-full" />
        </div>
     
        <div className='w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#3643FB4D] '>
            <img src="search_15145169.png" alt="Logo" className="w-8 h-8" />
        </div>
     
        <div className='w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#3643FB4D] '>
            <img src="icons8-plus-40.png" alt="Logo" className="w-8 h-8 rounded-full" /> +
        </div>
     
        <div className='w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#3643FB4D] '>
            <img src="icons8-heart-50.png" alt="Logo" className="w-8 h-8 rounded-full" />
        </div>
        <div className='w-12 h-12 rounded-full  flex items-center justify-center hover:bg-[#3643FB4D] '>
            <img src="user.png" alt="Logo" className="w-8 h-8 rounded-full" />
        </div>
     

      </div>
  );
};
export default Profile;