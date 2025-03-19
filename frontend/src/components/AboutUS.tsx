import stableData from "../data"
import Card from "./Card"

function AboutUs() {
    return <div>
        <div className="bg-base-100 w-full">
            <div className="card-body flex justify-center items-center text-center">
                <h2 className="card-title">{stableData.aboutUs.title}</h2>
                <p>{stableData.aboutUs.description}</p>

            </div>
        </div>
        <div className="w-full flex justify-around flex-wrap">
            {stableData.services.sections.map((service, index) => {
                return <Card key={index} img={service.img} title={service.title} description={service.description} />
            })}
        </div>
    </div>
}



export default AboutUs