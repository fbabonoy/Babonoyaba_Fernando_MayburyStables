import rideInfo from "../Model/dataRideInfo"
import { ButtonData } from "../Model/dataRideInfo"

function RideInfoCard() {
    return (
        <div className="h-250 sm:h-200 md:h-170 lg:h-150 md:p-3 lg:flex md:justify-between mt-4 mb-4 text-white rounded-2xl overflow-hidden m-3">
            <img
                className="h-1/3 sm:h-1/2 lg:h-full w-full lg:w-18/40 object-cover  rounded-tl-2xl rounded-tr-2xl lg:rounded-l-2xl lg:rounded-tr-none"
                src={rideInfo.banner}
                alt="banner" />
            <div className="h-2/3 sm:h-1/2 w-full lg:h-full lg:w-22/40 flex sm:flex-wrap flex-col sm:flex-row rounded-b-2xl lg:rounded-b-none overflow-hidden">
                {rideInfo.buttonData.map((data: ButtonData, index: number) => {
                    let border: string = ""
                    if (index === 1) {
                        border = "lg:rounded-tr-2xl"
                    } else if (index === 3) {
                        border = "lg:rounded-br-2xl"
                    }
                    return (
                        <div key={index} className={`flex justify-center items-center text-center pl-1 pr-1 md:pl-3 md:pr-3 h-1/2 sm:w-1/2 bg-[#90260cd2] ${border}`}>
                            {/* <img src="" alt="" /> */}
                            <h1 className="text-4xl sm:text-3xl md:text-xl lg:text-4xl xl:text-5xl 2xl:text-7xl sm:mr-2 lg:mr-4">{data.icon}</h1>
                            <div className="text-left m-2 sm:m-0">
                            <h2 className="text-xl md:text-lg xl:text-4xl font-bold">{data.title}</h2>
                            <p className="text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl line-clamp-6 sm:line-clamp-9 ">{data.description}</p>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RideInfoCard