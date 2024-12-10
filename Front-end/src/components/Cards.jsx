import React from 'react';



function Cards ({item}) {
    //  console.log(item);

    return (
        <>
        <div className='mt-4 p-4'>
            <div className="card  w-90 bg-base-100 shadow-xl hover:scale-105 duration-200  dark:bg-slate-900 dark:text-white dark:border">
                <figure>
                    <img
                        //  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        //  src= {item.image} alt="Shoes" />
                         src= {item.image} alt='shoes'/>
                        </figure>
                <div className="card-body">
                    <h2 className="card-title">
                       {item.name}
                        <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">${item.price}</div>
                        <div className="cursor-pointer px-2 py-1  rounded-full  border-[2px] hover:bg-pink-500 hover:text-white  duration-200">Buy Now</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Cards;