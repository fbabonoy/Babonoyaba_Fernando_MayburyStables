import stableData from "../Model/data"
import Card from "./Card"

function AboutUs() {
    return <div className=" bg-[#1f5c5c] m-5 rounded-2xl">
        <div className="w-full bg-transparent">
            <div className="card-body flex justify-center items-center text-center text-white ">
                <h2 className="card-title text-4xl">{stableData.aboutUs.title}</h2>
                <p className="text-2xl">{stableData.aboutUs.description}</p>
            </div>
        </div>
        <div className="w-full flex justify-around flex-wrap text-white pb-5">
            {stableData.services.sections.map((service, index) => {
                return <Card key={`${service.title}-${index}`} img={service.img} title={service.title} />
            })}
        </div>
    </div>
}



export default AboutUs