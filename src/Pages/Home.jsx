import React from 'react'
import loginImg from '../assets/login-img.png'

export const Home = () => {
    return (
        <div className=''>
            <div className='mx-auto my-4 w-158 h-12 max-w-screen-lg bg-amber-100'>
                <p className='font-mono text-2xl my-4 font-bold text-center'>
                    Simple recipes made for <span className='font-sans text-amber-700'>real, actual, everyday life.</span>
                </p>
            </div>

            <div className='category-container h-[75vh] w-full bg-gray-100 '>
                {/* Categories */}
                <div className='image-container flex justify-center gap-3 max-w-5xl mx-auto'>
                    <div className='group element relative my-7 h-80 w-65 mx-auto'>
                        <img src={loginImg} alt="winter" className='h-70 w-60 z-0 mx-auto group-hover:opacity-70' />
                        <p className='absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 bg-amber-500 w-fit max-w-30 px-3.5 py-1.5 text-[18px] font-serif '>
                            Vegitarian
                        </p>
                    </div>
                    <div className='group element relative my-7 h-80 w-65 mx-auto'>
                        <img src={loginImg} alt="winter" className='h-70 w-60 z-0 mx-auto group-hover:opacity-70' />
                        <p className='absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 bg-amber-500 w-fit max-w-30 px-3.5 py-1.5 text-[18px] font-serif '>
                            Vegitarian
                        </p>
                    </div>
                    <div className='group element relative my-7 h-80 w-65 mx-auto'>
                        <img src={loginImg} alt="winter" className='h-70 w-60 z-0 mx-auto group-hover:opacity-70' />
                        <p className='absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 bg-amber-500 w-fit max-w-30 px-3.5 py-1.5 text-[18px] font-serif '>
                            Vegitarian
                        </p>
                    </div>
                    <div className='group element relative my-7 h-80 w-65 mx-auto'>
                        <img src={loginImg} alt="winter" className='h-70 w-60 z-0 mx-auto group-hover:opacity-70' />
                        <p className='absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 bg-amber-500 w-fit max-w-30 px-3.5 py-1.5 text-[18px] font-serif '>
                            Vegitarian
                        </p>
                    </div>
                </div>
                {/* More Categories */}
                <div className='more-categories flex justify-center gap-8 max-w-5xl mx-auto'>
                    <div className='flex flex-col items-center group'>
                        <img src={loginImg} className='h-20 w-20 rounded-full group-hover:opacity-70'/>
                        <p className='max-w-20 text-center font-bold group-hover:opacity-70'>Quick and Easy</p>
                    </div>
                </div>
            </div>
                {/* Latest and Trending recipes */}
                <div className='trending-recipes w-full h-fit flex flex-col items-center bg-amber-50'>
                    <p className='mt-8 text-2xl font-stretch-95% bg-gray-400 p-3 font-semibold'>Latest and Trending recipes</p>
                    <hr className='my-8 w-[70%] mx-auto text-gray-400'/>
                    <div className='tile-container mt-8'>
                        <div className='trending-element flex h-[35vh] max-h-[55vh] w-[70vw] justify-start bg-cyan-5 space-x-8.5'>
                            <img src={loginImg} className='w-60 h-60 hover:opacity-75'/>
                            <div className='flex flex-col h-[60%] max-h-[100%] w-full justify-baseline gap-2'>
                                <p className='text-xl text-gray-800'>24th January, 2025</p>
                                <p className='text-2xl font-bold font-serif hover:underline hover:cursor-pointer'>Crockpot Chicken Bowls with Yellow Rice and Cilantro Pesto</p>
                                <p className='text-[18px] text-gray-600 font-serif max-w-168'>Saucy shredded chicken, yellow rice, pickled onions, greens, and cilantro pesto on top. It’s a flavor and color delight!</p>
                                <a className='text-[18px] font-bold text-orange-600 font-serif hover:text-orange-800 hover:cursor-pointer w-fit'>CONTINUE READING</a>
                            </div>
                        </div>
                        <hr className='my-8 w-[70%] mx-auto text-gray-400'/>
                        <div className='trending-element flex h-[35vh] max-h-[55vh] w-[70vw] justify-start bg-cyan-5 space-x-8.5'>
                            <img src={loginImg} className='w-60 h-60 hover:opacity-75'/>
                            <div className='flex flex-col h-[60%] max-h-[100%] w-full justify-baseline gap-2'>
                                <p className='text-xl text-gray-800'>24th January, 2025</p>
                                <p className='text-2xl font-bold font-serif hover:underline hover:cursor-pointer'>Crockpot Chicken Bowls with Yellow Rice and Cilantro Pesto</p>
                                <p className='text-[18px] text-gray-600 font-serif max-w-168'>Saucy shredded chicken, yellow rice, pickled onions, greens, and cilantro pesto on top. It’s a flavor and color delight!</p>
                                <a className='text-[18px] font-bold text-orange-600 font-serif hover:text-orange-800 hover:cursor-pointer w-fit'>CONTINUE READING</a>
                            </div>
                        </div>
                        <hr className='my-8 w-[70%] mx-auto text-gray-400'/>
                        <div className='trending-element flex h-[35vh] max-h-[55vh] w-[70vw] justify-start bg-cyan-5 space-x-8.5'>
                            <img src={loginImg} className='w-60 h-60 hover:opacity-75'/>
                            <div className='flex flex-col h-[60%] max-h-[100%] w-full justify-baseline gap-2'>
                                <p className='text-xl text-gray-800'>24th January, 2025</p>
                                <p className='text-2xl font-bold font-serif hover:underline hover:cursor-pointer'>Crockpot Chicken Bowls with Yellow Rice and Cilantro Pesto</p>
                                <p className='text-[18px] text-gray-600 font-serif max-w-168'>Saucy shredded chicken, yellow rice, pickled onions, greens, and cilantro pesto on top. It’s a flavor and color delight!</p>
                                <a className='text-[18px] font-bold text-orange-600 font-serif hover:text-orange-800 hover:cursor-pointer w-fit'>CONTINUE READING</a>
                            </div>
                        </div>
                        <hr className='my-8 w-[70%] mx-auto text-gray-400'/>
                    </div>
                </div>
        </div> 
    )
}
