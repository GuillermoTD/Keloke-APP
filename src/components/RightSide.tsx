import MainImage from "../assets/MainImage.svg"


const RightSide = ()=>{
    return (
        <div className="p-[1rem] w-full h-full flex flex-col items-center justify-center gap-[2rem]">
            {/* Main Image when there is no image open */}
            <img src={MainImage} alt="MainImage" className="w-[40%] h-[40%]"/>
            {/* Title of Main Page */}
            <h2 className="font-medium text-[1.8rem]">Chat with your dear friends and family!</h2>
        </div>
    )
}


export default RightSide