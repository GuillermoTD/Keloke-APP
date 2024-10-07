import React from 'react'
import loadingImage from "../../assets/loading.svg"
import "./LoadingPage.css"

const LoadingPage = () => {
  return (
    <div className='w-full h-[100vh] flex items-center justify-center flex-col'>
        {/* Image centered  */}
        <img src={loadingImage} alt="loading" className='w-[35%] h-[35%]'/>

        {/* ProgressBar */}
        <div className="ProgressBarWrapper">
          <div className="ProgressBar">
            <div className="Bar"></div>
          </div>
        </div>

        <h2 className='text-emerald-600 text-[2.6rem] animate-bounce'>¡Keloke!</h2>

    </div>
  )
}

export default LoadingPage