import rideInfo from "../dataRideInfo"
import { ButtonData } from "../dataRideInfo"

function RideInfoCard() {
    return (
        <div className="h-100 p-3 flex justify-between mt-4 mb-4">
            <img
                className="h-full w-18/40 object-cover rounded-l-2xl "
                src={rideInfo.banner}
                alt="" />
            <div className="h-full w-22/40 flex flex-wrap">
                {rideInfo.buttonData.map((data: ButtonData, index: number) => {
                    let border: string = ""
                    if (index === 1) {
                        border = "rounded-tr-2xl"
                    } else if (index === 3) {
                        border = "rounded-br-2xl"
                    }
                    return (
                        <div className={`flex flex-col justify-center items-center text-center p-3 h-1/2 w-1/2 bg-cyan-800 ${border}`}>
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