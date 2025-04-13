import rideInfo from "../Model/dataRideInfo"
import { ButtonData } from "../Model/dataRideInfo"

function RideInfoCard() {
    return (
        <div className="h-200 md:h-100 md:p-3 md:flex md:justify-between mt-4 mb-4 text-white rounded-2xl overflow-hidden m-3">
            <img
                className="h-1/2 md:h-full md:w-18/40 object-cover  md:rounded-l-2xl "
                src={rideInfo.banner}
                alt="banner" />
            <div className="h-1/2 md:h-full md:w-22/40 flex flex-wrap">
                {rideInfo.buttonData.map((data: ButtonData, index: number) => {
                    let border: string = ""
                    if (index === 1) {
                        border = "md:rounded-tr-2xl"
                    } else if (index === 3) {
                        border = "md:rounded-br-2xl"
                    }
                    return (
                        <div key={index} className={`flex justify-center items-center text-center pl-1 pr-1 md:pl-3 md:pr-3 h-1/2 w-1/2 bg-[#90260cd2] ${border}`}>
                            {/* <img src="" alt="" /> */}
                            <h1 className="text-5xl sm:text-3xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-7xl sm:mr-2 lg:mr-4">{data.icon}</h1>
                            <div className="text-left m-4 sm:m-0">
                            <h2 className="text-xl md:text-lg xl:text-4xl font-bold">{data.title}</h2>
                            <p className="text-lg md:text-base lg:text-base xl:text-lg 2xl:text-xl line-clamp-5 ">{data.description}</p>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RideInfoCard