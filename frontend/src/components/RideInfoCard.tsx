import rideInfo from "../dataRideInfo"
import { ButtonData } from "../dataRideInfo"

function RideInfoCard() {
    return (
        <div className="h-200 sm:h-100 sm:p-3 sm:flex sm:justify-between mt-4 mb-4">
            <img
                className="h-1/2 sm:h-full sm:w-18/40 object-cover  sm:rounded-l-2xl "
                src={rideInfo.banner}
                alt="" />
            <div className="h-1/2 sm:h-full sm:w-22/40 flex flex-wrap">
                {rideInfo.buttonData.map((data: ButtonData, index: number) => {
                    let border: string = ""
                    if (index === 1) {
                        border = "sm:rounded-tr-2xl"
                    } else if (index === 3) {
                        border = "sm:rounded-br-2xl"
                    }
                    return (
                        <div className={`flex flex-col justify-center items-center text-center pl-3 pr-3 h-1/2 w-1/2 bg-cyan-800 ${border}`}>
                            <img src="" alt="" />
                            <h1 className="text-2xl">{data.icon}</h1>
                            <h2 className="text-md">{data.title}</h2>
                            <p className="text-sm line-clamp-5">{data.description}</p>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RideInfoCard