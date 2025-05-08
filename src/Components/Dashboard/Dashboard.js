import React from "react";
import Profile from "./Profile";

const Dashboard = ({isDark, setDark}) => {
  return (<>
  <Profile/>
    <div className="w-[396px] h-[1675px] rounded-[20px] flex-cols absolute  container" style={{ backgroundColor: isDark ? 'black' : '#F3F4F6', color: isDark ? 'white' : 'black' }}>

<div className="w-[396px] h-[60px] mt-8 flex justify-between items-center px-4 rounded-[12px] ">

  <div className="flex flex-col justify-center">
    <h1 className="text-[16px] font-bold">Hello Chhavi!</h1>
    <p className="text-[14px] text-gray-500">Ready for the trip?</p>
  </div>

    <button className="size-10 rounded-full " onClick={() => setDark((prev) => !prev) } style={{ backgroundColor: isDark ? 'white' : '', color: isDark ? 'white' : 'black' }}>
        <img src="brightness_5465005.png" alt="Logo" className="size-10" />
        {isDark ? '' : ''}
    </button>
 
  <div className="w-[38px] h-[38px] bg-[#FF6A29] rounded-full text-white font-semibold text-sm grid place-items-center">
    C
  </div>
</div>



        <div className="w-[177px] h-[24px] mt-[20px] ml-[20px] font-[Mont] Name-[H3]  "> Your Upcoming Trip</div>

        <div className="w-[353px] h-[330px] mt-[20px] ml-[20px] rounded-[20px] overflow-hidden relative bg-cover bg-center text-white" style={{ backgroundImage: "url('65e8fb60255868cc81be95b67d0397ab4ca845bb.png')" }}>
  

  <div className="absolute top-3 right-3 w-5 h-5 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold">
    ↗
  </div>


  <div className="p-4 mt-[140px]">
    <h1 className="text-[32px] font-extrabold leading-none">TOKYO</h1>
    <p className="text-[14px] font-medium">27.01.2025 - 01.02.2025</p>
  </div>



  <div className="absolute bottom-0 left-0 w-full px-4 py-3 bg-gradient-to-t from-black/70 to-transparent flex justify-between text-[12px]">
    <div className="flex items-center space-x-1 text-[12px]">
      <img src="wall-clock.png" alt="duration" className="w-4 h-4" />
      <span className="font-semibold ">8 Days</span>
    </div>
    <div className="flex items-center space-x-1">
      <img src="group-chat.png" alt="group" className="w-4 h-4" />
      <span className="font-semibold">4 (2M, 2F)</span>
      <span className="text-gray-300">Group Size</span>
    </div>
    <div className="flex items-center space-x-1">
      <img src="checklist.png" alt="activities" className="w-4 h-4" />
      <span className="font-semibold">14</span>
      <span className="text-gray-300">Activities</span>
    </div>
  </div>
</div>


<div className="w-[353px] h-[140px] bg-[#2A41F5] rounded-[16px] ml-[20px] mt-[20px] text-white px-4 py-3 flex justify-between items-start">

     <div className="flex flex-col space-y-2">
        <div>
         <h1 className="text-sm font-semibold">Flight Details</h1>
        <p className="text-xs text-white/80">26.01.2025, 10:50 am</p>
     </div>
    
        <div className="flex items-center space-x-4 mt-2">

        <div className="text-left">
         <h1 className="text-lg font-semibold">DEL</h1>
         <p className="text-xs text-white/80">Delhi, India</p>
        </div>

    
         <div className="text-xl">→</div>

  
        <div className="text-left">
         <h1 className="text-lg font-semibold">NRT</h1>
         <p className="text-xs text-white/80">Narita, Tokyo</p>
         </div>
     </div>
    </div>


     <div className="flex flex-col items-end justify-between h-full">
      <a href="#" className="text-[10px] text-lime-300 font-semibold">See all</a>
      <img src="ba767c0701b262c0054542aa8c36781a52ab13d6.png" alt="plane" className="w-[120px] h-auto mt-auto" />
     </div>
    </div>



    <div className="w-[353px] h-[24px] mt-[20px] ml-[20px]   flex justify-between items-center  ">
        <div className="w-[136px] h-[24px] font-[Mont] text-[18px]  flex items-center justify-start">
        Accomodation
        </div>
        <div className="w-[34px] h-[16px] font-[Mont]    grid place-items-center text-[10px]" style={{color : isDark ? 'rgba(209, 244, 98, 1)' : 'rgba(54, 67, 251, 1)'}} >
        See all
        </div>
    </div>



    <div className="w-[373px] h-[239px]  mt-[20px] ml-[10px] flex overflow-x-auto space-x-4 p-2 " >
      <div className="min-w-[198px] h-[230px] outline outline-1 rounded-[16px] outline-gray-300 flex-shrink-0 text-[12px] gap-12 " style ={{backgroundColor: isDark ? 'rgba(77, 77, 77, 1)' :' ',color: isDark ? 'black' : 'white',color : isDark ?'white' : 'black' }}>
        <div className="w-[198px] h-[124px] ">
            <img src="db00c75f9cc040bc12c87ced988c824a1119167f.png" alt="Hotel" className="w-full h-full object-cover rounded-tl-[16px] rounded-tr-[16px]" />
        </div>
        <h1 className="font-[Mont] text-[16px]">Shinagawa Prince Hotel </h1>
        <h1>Check in:26.01.2025, 11:15 pm </h1>
        <h1>Check out:28.01.2025, 11:15 am </h1>
        <div className="w-[182px] h-[20px] mt-[20px] ml-[2px]   flex justify-between items-center ">
        <div className="w-[49px] h-[16px]   flex items-center justify-start">
        2 Nights
        </div>
        <div className="w-[87px] h-[20px]  grid place-items-center text-[10px]" style  ={{color : 'rgba(144, 235, 97, 1)'}} >
        Confirmed
        </div>
        </div>
      </div>

      <div className="min-w-[198px] h-[230px] outline outline-1 rounded-[16px] outline-gray-300 flex-shrink-0 text-[12px] gap-12 " style ={{backgroundColor: isDark ? 'rgba(77, 77, 77, 1)' :' ',color: isDark ? 'black' : 'white',color : isDark ?'white' : 'black' }} >
        <div className="w-[198px] h-[124px] outline outline-1 outline-gray-300">
            <img src="fcc1c0b4ac8314522d7a73c68ae2c64f028de40e.png" alt="Hotel" className="w-full h-full object-cover rounded-tl-[16px] rounded-tr-[16px]" />
        </div>
        <h1 className="font-[Mont] text-[16px]">Mercure Tokyo Hotel </h1>
        <h1>Check in:26.01.2025, 11:15 pm </h1>
        <h1>Check out: 28.01.2025, 6:00 pm </h1>
        <div className="w-[182px] h-[20px] mt-[20px] ml-[2px]  flex justify-between items-center ">
        <div className="w-[49px] h-[16px]  flex items-center justify-start">
        2 Nights
        </div>
        <div className="w-[87px] h-[20px]  grid place-items-center text-[10px]" style={{color : 'rgba(255, 101, 37, 1)'}} >
        Pending
        </div>
        </div>
      </div>
      <div className="min-w-[198px] h-[230px] outline outline-1 rounded-[16px] outline-gray-300 flex-shrink-0 text-[12px] gap-12 " style ={{backgroundColor: isDark ? 'rgba(77, 77, 77, 1)' :' ',color: isDark ? 'black' : 'white',color : isDark ?'white' : 'black' }} >
        <div className="w-[198px] h-[124px] outline outline-1 outline-gray-300">
            <img src="fcc1c0b4ac8314522d7a73c68ae2c64f028de40e.png" alt="Hotel" className="w-full h-full object-cover rounded-tl-[16px] rounded-tr-[16px]" />
        </div>
        <h1>Shinagawa Prince Hotel </h1>
        <h1>Check in:26.01.2025, 11:15 pm </h1>
        <h1>Check out:28.01.2025, 11:15 am </h1>
        <div className="w-[182px] h-[20px] mt-[20px] ml-[2px]  flex justify-between items-center ">
        <div className="w-[49px] h-[16px]  flex items-center justify-start">
        2 Nights
        </div>
        <div className="w-[87px] h-[20px]  grid place-items-center text-[10px]" style={{color : 'rgba(255, 101, 37, 1)'}} >
        Pending
        </div>
        </div>
      </div>
      
    </div>

    <div className="w-[353px] h-[24px] mt-[20px] ml-[20px]  flex justify-between items-center ">
        <div className="w-[84px] h-[24px]  flex items-center justify-start">
        Activities
        </div>
        <div className="w-[34px] h-[16px] font-[Mont]    grid place-items-center text-[10px]" style={{color : isDark ? 'rgba(209, 244, 98, 1)' : 'rgba(54, 67, 251, 1)'}} >
        See all
        </div>
    </div>

    <div className="w-[353px] h-[114px] mt-[20px] ml-[20px] rounded-[12px] border border-gray-300  p-3">

  <div className="flex space-x-2 mb-3">
    <div className="px-3 py-1 rounded-[8px] bg-[#2E38F9] text-white text-[12px] font-medium" style={{ color: isDark ? 'black' : 'white', backgroundColor: isDark ? 'rgba(211, 244, 98, 1)' : '#2E38F9' }}>  
      Day Plan
    </div>
    <div className="px-3 py-1 rounded-[8px] border border-[#2E38F9] text-[#2E38F9] text-[12px] font-medium" style={{ color: isDark ? 'rgba(211, 244, 98, 1)' : 'white', backgroundColor: isDark ? 'rgba(41, 41, 41, 1)' : '#2E38F9', borderColor: isDark ? 'rgba(211, 244, 98, 1)' : '#2E38F9' }}>
      14 Activities
    </div>
  </div>


  <div className="flex gap-2 overflow-x-scroll">

    {/* <div className="min-w-[60px] h-[44px] rounded-[12px]  flex flex-col items-center justify-center text-[12px] font-medium"> */}
        <div className="flex shrink-0 w-[70px] gap-2 text-white border-[#2E38F9] border-2 rounded-[12px] overflow-hidden" style={{ borderColor: isDark ? 'rgba(211, 244, 98, 1)' : '#2E38F9'}}>
            <div className="flex flex-col gap-0 bg-[#2E38F9] text-white px-2" style ={{backgroundColor: isDark ? 'rgba(211, 244, 98, 1)' :'#2E38F9',color: isDark ? 'black' : 'white',   }} >
                {'JAN'.split('').map((letter, index) => (
                  <div key={index} className="text-[8px] m-0 font-bold">{letter}</div>
                ))}
            </div>
            <div className="flex items-center justify-center flex-col text-black text-xs">
                <div className="text-[10px] " style ={{color: isDark ? 'white' : 'black'  }} >MON</div>
                <div className="font-semibold"  style ={{color: isDark ? 'white' : 'black'  }}>27</div>
            </div>
        </div>
    {/* </div> */}


    {[
      { day: 'TUE', date: 28 },
      { day: 'WED', date: 29 },
      { day: 'THU', date: 30 },
      { day: 'FRI', date: 31 },
      { day: 'FEB', date: 1 },
    ].map((d, i) => (
      <div key={i} className={`min-w-[46px] h-[44px] rounded-[12px] ${d.day === 'FEB' ? 'bg-gray-500 text-white' : 'bg-gray-200 text-black'} flex flex-col items-center justify-center text-[12px] font-medium`} style={{ backgroundColor: isDark ? 'rgb(69, 67, 67)' : 'gray', color: isDark ? 'black' : 'white' }}>
        <div>{d.day}</div>
        <div>{d.date}</div>
      </div>
    ))}
  </div>
</div>




    <div className="w-[212px] h-[20px] mt-[20px] ml-[20px]  flex justify-between items-center text-centre ">
            <div className="w-[112px] h-[20px]  bg-[#3643FB] text-white rounded-[4px] flex items-center justify-start text-[12px]" style ={{backgroundColor: isDark ? 'rgba(211, 244, 98, 1)' :'#2E38F9',color: isDark ? 'black' : 'white' }}  >
            Day1 27.01.2025
            </div>
            <div className="w-[68px] h-[12px] grid place-items-center text-[12px] text-[#3643FB]" style ={{color: isDark ? 'rgba(211, 244, 98, 1)' : '#2E38F9', backgroundColor : isDark ? 'black' : '' }} >
            3 Activities
            </div>
      </div>


    <div className="w-[353px] mt-[20px] ml-[20px] pb-5 border-[1px] rounded-[4px]" style={{borderColor: isDark ? 'rgba(211, 244, 98, 1)' : ''  }}>
        <div className="w-[341px] h-[127px] mt-[20px] ml-[6px]  flex justify-between items-center outline outline-1 outline-gray-300 rounded-[12px]">
            <div className="w-[140px] h-[127px]  flex items-center justify-start text-[12px]">
             <img src="7dbb0104d22685c3c99d3d09e33d7351d338c445.png" alt="Hotel" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="w-[341px] h-[127px]   text-[12px] ml-[8px]" style ={{backgroundColor: isDark ? 'rgba(77, 77, 77, 1)' :' ',color: isDark ? 'black' : 'white',color : isDark ?'white' : 'black' }} >
                <div className="w-[194px] h-[45px]  grid mt-[6px] font-[Mont] text-[14px]">
                Senso-ji Temple & Nakamise Shopping Street Senso-ji
                </div>
                <div className="w-[106px] h-[16px grid mt-[10px] text-[12px]">
                Timing:8:15 AM
                </div>
                <div className="w-[119px] h-[16px grid mt-[5px]">
                Duration: 3 hours
                </div>
                <div className="w-[119px] h-[16px]grid mt-[5px]">
                Pick up:From Hotel
                </div>
            
            </div>
      </div>
        <div className="w-[341px] h-[127px] mt-[20px] ml-[6px]  flex justify-between items-center outline outline-1 outline-gray-300 rounded-[12px]" style ={{ bo: isDark ? 'black' : 'white' }}>   
            <div className="w-[127px] h-[127px]  flex items-center justify-start text-[12px]">
            <img src="b623b1b8fec970546453aeb841230372a48e671e.png" alt="Hotel" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="w-[341px] h-[127px]   text-[12px]  ml-[8px]" style ={{backgroundColor: isDark ? 'rgba(77, 77, 77, 1)' :' ',color: isDark ? 'black' : 'white',color : isDark ?'white' : 'black' }}>
                <div className="w-[194px] h-[40px]  grid text-[14px] font-[Mont] mt-[12px]">
                Tokyo Sky Tree
                </div>
                <div className="w-[106px] h-[16px] grid mt-[10px] text-[12px]">
                Timing:1 PM
                </div>
                <div className="w-[119px] h-[16px] grid mt-[5px]">
                Duration: 3 hours
                </div>
                <div className="w-[200px] h-[16pxgrid mt-[5px]">
                Pick up:From Nakamise Street
                </div>
            
            </div>
      </div>
        <div className="w-[341px] h-[127px] mt-[20px] ml-[6px]  flex justify-between items-center outline outline-1 outline-gray-300 rounded-[12px]">
            <div className="w-[127px] h-[127px]  flex items-center justify-start text-[12px]">
            <img src="57799dc94422c0f37ade05d3ecef20310ea89dab.png" alt="Hotel" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="w-[341px] h-[127px]  text-[12px]  ml-[8px]" style ={{backgroundColor: isDark ? 'rgba(77, 77, 77, 1)' :' ',color: isDark ? 'black' : 'white',color : isDark ?'white' : 'black' }}>
                <div className="w-[194px] h-[45px]  text-[14px]  grid font-[Mont] mt-[14px]">
                Kimono Wearing
                </div>
                <div className="w-[200px] h-[16px] grid mt-[10px] text-[12px]">
                Timing:Anytime before 8:00pm 
                </div>
                <div className="w-[119px] h-[16px]  grid mt-[5px]">
                Duration: 1-2 hours
                </div>
                <div className="w-[119px] h-[16px]  grid mt-[5px]">
                Pick up:From Hotel
                </div>
            
            </div>
      </div>

    </div>
    </div>
    </>
  );
};

export default  Dashboard;