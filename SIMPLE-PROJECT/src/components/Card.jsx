import React from "react";

const Card = () => {
  return (
    <div className="h-screen w-screen bg-black p-6 ">
      <div className="h-[300px] w-[250px] bg-amber-500 flex flex-col    rounded-2xl overflow-hidden">
        <div className="h-[50%]    w-[full] ">
          <img
            className="h-full w-full object-cover "
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
         <div className=" h-full  bg-white p-5 flex flex-col justify-between "> 
            <h3 className="font-medium">Nike Shoes</h3> 
            <div >
                <p className="leading-4.5 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, laudantium!</p>
            </div>
         </div>
      </div>
      
    </div>
  );
};

export default Card;
