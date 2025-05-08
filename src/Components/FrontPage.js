// // src/components/FrontPage.js
// import React from 'react';

// const FrontPage = () => {
//   return (
//     <div>
//      <div className="container ] pl-4 py-2  w-[400px] h-[550px] bg-[#F5F5F5] rounded-[20px] mt-[75px] ml-[20px] gap=[36px]  flex-rows  justify-center ...">
//       <div className='mb-[20px]'>
//         <h1 className='text-2xl font-semibold'>Plan Your Journey, Your Way!</h1>
//         <h1 className='font-light'>Let's create your personalised travel experience</h1>
//       </div>
//       <div >
//         <h1 className='text-xl font-medium'>Where would you like to go?</h1>
//         <input type="text" placeholder="Enter Destination" className='w-[350px] h-[40px] pl-8 py-2 e outline outline-1 outline-gray-200   rounded-[4px] border-none mt-[10px] ' />
//         <h1 className='text-xl font-medium mt-[30px]'>How long will you stay?</h1>
//     <select className='w-[350px] h-[40px] pl-8 py-2 e outline outline-1 outline-gray-200  font-thin  rounded-[4px] border-none  mt-[10p'>
//         <option value="" disabled selected>Select duration</option>
//         <option value="1-day">1 Day</option>
//         <option value="3-days">3 Days</option>
//         <option value="1-week">1 Week</option>
//         <option value="1-month">1 Month</option>
//     </select>
//         <h1 className='text-xl font-medium  mt-[30px]'>Who are you traveling with?</h1>
//        <div className='mt-[10px] flex flex-wrap gap-6 '>
//           <div className="w-[160px] h-[40px] bg-white outline outline-1 outline-gray-300 rounded-[4px] flex items-center px-8 space-x-2">
//             <img src="solo-traveller.png" alt="Logo" className="w-4 h-4" />
//             <h1 className="text-xl font-thin ">Solo</h1>
//           </div>
//           <div className="w-[160px] h-[40px] bg-white outline outline-1 outline-gray-300 rounded-[4px] flex items-center px-8 space-x-2">
//             <img src="marriage_11682926.png" alt="Logo" className="w-4 h-4" />
//             <h1 className="text-xl font-thin ">Couple</h1>
//           </div>
//           <div className="w-[160px] h-[40px] bg-white outline outline-1 outline-gray-300 rounded-[4px] flex items-center px-8 space-x-2">
//             <img src="family_4161334.png" alt="Logo" className="w-4 h-4" />
//             <h1 className="text-xl font-thin ">Family</h1>
//           </div>
//           <div className="w-[160px] h-[40px] bg-white outline outline-1 outline-gray-300 rounded-[4px] flex items-center px-8 space-x-2">
//             <img src="team_14310269.png" alt="Logo" className="w-4 h-4" />
//             <h1 className="text-xl font-thin ">Friend</h1>
//           </div>
//           <button className='w-[353px] h-[44px] bg-[#3643FB] ml-[10px] text-white rounded-[4px]'>Countinue</button>
//         </div>

//       </div>
//       </div>
//     </div>
//   );
// };

// export default FrontPage;
// src/components/FrontPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const FrontPage = ({isDark, setDark}) =>  {
  return (

    
    <div className="flex justify-center items-center min-h-screen bg-[#ffffff]  " style={{color: isDark ? 'white' : 'black',backgroundColor: isDark ? '#000000' : '#ffffff'}}>
      
      <div className="w-full max-w-md  p-6">
      <button className="size-10 rounded-full flex justify-center " onClick={() => setDark((prev) => !prev) } style={{ backgroundColor: isDark ? 'white' : '', color: isDark ? 'white' : 'black' }}>
        <img src="brightness_5465005.png" alt="Logo" className="size-10" />
        {isDark ? '' : ''}
    </button>
        <div className="mb-6">
          <h1 className="text-2xl font-semibold" style={{color: isDark ? 'white' : 'black'}} >Plan Your Journey, Your Way!</h1>
          <p className="font-light">Let's create your personalised travel experience</p>
        </div>

        <div className='flex flex-col'>
          <h2 className="text-xl font-medium">Where would you like to go?</h2>
          <input
          style ={{backgroundColor: isDark ? 'rgba(51, 51, 51, 1)' : '#ffffff' ,color: isDark ? 'white' : 'black' ,borderColor: isDark ? 'rgba(51, 51, 51, 1)' : 'black'}}
            type="text"
            placeholder="Enter Destination"
            className="w-full h-10 pl-4 mt-2 outline outline-1 outline-gray-200 rounded-md"
          />

          <h2 className="text-xl font-medium mt-6">How long will you stay?</h2>
          <select className="w-full h-10 pl-4 mt-2 outline outline-1 outline-gray-200 rounded-md"  style ={{backgroundColor: isDark ? 'rgba(51, 51, 51, 1)' : '#ffffff' ,color: isDark ? 'white' : 'black' ,borderColor: isDark ? 'rgba(51, 51, 51, 1)' : 'black' ,}}>
            <option value="" disabled selected>Select duration</option>
            <option value="1-day">1 Day</option>
            <option value="3-days">3 Days</option>
            <option value="1-week">1 Week</option>
            <option value="1-month">1 Month</option>
          </select>

          <h2 className="text-xl font-medium mt-6">Who are you traveling with?</h2>
          <div className="mt-4 flex flex-wrap gap-4" >

            {[
              { img: "solo-traveller.png", label: "Solo" },
              { img: "marriage_11682926.png", label: "Couple" },
              { img: "family_4161334.png", label: "Family" },
              { img: "team_14310269.png", label: "Friend" }
            ].map(({ img, label }) => (
              <div key={label} className="flex items-center gap-2 w-[calc(50%-8px)] h-10 bg-white outline outline-1 outline-gray-300 rounded px-4"  style ={{backgroundColor: isDark ? 'rgba(51, 51, 51, 1)' : '#ffffff' ,color: isDark ? 'white' : 'black' ,borderColor: isDark ? 'rgba(51, 51, 51, 1)' : 'black'}}>
                <img src={img} alt={label} className="w-4 h-4" />
                <span className="text-base font-light">{label}</span>
              </div>
            ))}
          </div>

          <a href='/Dashboard' className="mt-6 flex items-center justify-center  h-[44px] bg-[#3643FB] text-white rounded-md hover:bg-[#2830c8] transition duration-200">
            Continue
          </a>
        </div>
      </div>
    </div>
  );
};


export default FrontPage;
