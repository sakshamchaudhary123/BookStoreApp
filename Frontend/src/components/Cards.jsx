import React from 'react'

function Cards({ books }) {
  return (
    <>
    <div className='my-6 '>
    <div className="card bg-base-100 w-72 md:w-80 shadow-xl hover:scale-105 duration-150 mx-2 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img
      src={books.image}
      alt="Book image"  className='h-72 w-80' />
  </figure>
  <div className="card-body p-4">
    <h2 className="card-title">
      {books.name}
      <div className="badge badge-secondary">{books.category}</div>
    </h2>
    <p>{books.title}</p>
    <div className="card-actions justify-between">
      <div className=" px-3 py-1 rounded-2xl border-[1px]  border-black ">${books.price}</div>
      <div className="cursor-pointer px-2 py-1 rounded-full border-[1px] hover:border-none border-black hover:bg-pink-500 hover:text-white">Buy now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards
