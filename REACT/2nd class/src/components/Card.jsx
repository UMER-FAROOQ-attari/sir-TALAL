import React from 'react'

export const Card = (props) => {
  return (
    <>
    <div className="flex items-center justify-center min-h-screen">
      
      <div className="w-[250px] overflow-hidden rounded-lg bg-white shadow-sm border border-gray-300 font-sans">
        
        {/* Profile Image Area */}
        {/* Agar image nahi lagani to yahan initials wala div use kar sakte hain */}
        <div className="h-[200px] w-full bg-gray-200">
           <img 
             src={props.src} 
             alt="Profile" 
             className="h-full w-full object-cover"
           />
        </div>

        {/* Content Area */}
        <div className="p-3">
          
          {/* User Name */}
          <h3 className="text-[17px] font-semibold text-[#050505] leading-tight">
             {props.name}
          </h3>

          {/* Mutual Friends Text */}
          <p className="mt-1 text-[13px] text-[#65676B]">
            12 mutual friends
          </p>

          {/* Action Buttons */}
          <div className="mt-3 flex flex-col gap-2">
            
            {/* Confirm Button */}
            <button className="w-full rounded-md bg-[#1877F2] py-[6px] text-[15px] font-semibold text-white transition-colors hover:bg-[#166fe5]">
              Confirm
            </button>

            {/* Delete Button */}
            <button className="w-full rounded-md bg-[#E4E6EB] py-[6px] text-[15px] font-semibold text-[#050505] transition-colors hover:bg-[#d8dadf]">
              Delete
            </button>
            
          </div>
        </div>
      </div>

    </div>
   </>
  )
}
