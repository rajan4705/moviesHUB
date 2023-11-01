import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'


const Home = () => {
  return (
    <>
        <Main />
        <Row rowID='1' title='Popular' fetchURL={requests.requestPopular}/>
        <Row rowID='2' title='Up Coming' fetchURL={requests.requestUpcoming}/>
        <Row rowID='3' title='Trending' fetchURL={requests.requestTrending}/>
        <Row rowID='4' title='Top Rated' fetchURL={requests.requestTopRated}/>
        <Row rowID='5' title='Recommeded' fetchURL={requests.requestRecommended}/>

        <div className="bg-black-900 text-white">
          <div className=" md:justify-between md:items-center items-center sm:px-9 px-3 mt-7 bg-black py-4">
            <h2 className="lg:text-4xl text-3xl text-center md:mb-0 mb-2 lg:leading-normal">
              <span className="text-[#FF9900] font-bold">Watch</span> until you're dead (×_×)
            </h2>
          </div>
          <div className="text-center mt-5 pt-5 text-gray-400 text-sm pb-5">
            <h5 className='text-white text-2xl font-semibold cursor-pointer inline-block font-sans'>movies<button className= 'bg-[#FF9900] text-black rounded font-bold pt-0 pr-1 pb-1 pl-1'>HUB</button></h5>
          </div>
          <div className="text-center pt-3 mt-2 text-gray-400 text-sm pb-8">
            <span>© 2023 All rights reserved.</span>
          </div>
        </div>
    </>
  )
}

export default Home