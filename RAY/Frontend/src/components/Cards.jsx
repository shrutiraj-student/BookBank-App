import React from 'react';

function Cards({ item, offer }) {
  return (
    <div className="bg-base-100 shadow-lg border-2 border-white rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-4">
        <h2 className="text-xl font-bold flex items-center justify-between">
          {item.name}
          <span className="ml-2 inline-block bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded">
            {item.category}
          </span>
        </h2>
        <p className="text-gray-600 mt-2">{item.title}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-semibold">
          {
            offer == "Free" ? 
            0
            : 
            item.price
          }
          </span>
          <button className="px-4 py-2 rounded-full border border-pink-500 hover:bg-pink-500 transition-colors duration-200 hover:text-white">
            Buy Now!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;


// div className='flex justify-between flex-wrap gap-4'>
//         <div className=" bg-base-100 shadow-xl transition-all w-50 hover:scale-105 duration-500">
//           <figure>
//             <img
//               src={item.image}
//               alt="image"
//               className='w-full md:w-1/2 lg:w-full xl:w-full' />
//           </figure>
//           <div className="card-body">
//             <h2 className="card-title">
//               {item.name}
//               <div className="badge badge-secondary">{item.category}</div>
//             </h2>
//             <p>{item.title}</p>
//             <div className="card-actions justify-between">
//               <div className="badge badge-outline">${item.price}</div>
//               <div className="cursor-pointer px-2 py-1 rounded-full  border-[2px] hover:bg-pink-500 duratiob: 200 hover:text-white duration:200">Buy Now!</div>
//             </div>
//           </div>
//         </div>
      // </div>
