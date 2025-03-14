import stableData from "../data"
import { Service } from "../data"

function AboutUs() {
    return <div>
        <div className="bg-base-100 w-full">
            <div className="card-body flex justify-center items-center text-center">
                <h2 className="card-title">{stableData.aboutUs.title}</h2>
                <p>{stableData.aboutUs.description}</p>

            </div>
        </div>
        <div className="w-full flex justify-around flex-wrap">
            {stableData.services.sections.map((service) => {
                return <Card img={service.img} title={service.title} description={service.description} />
            })}
        </div>
    </div>
}

function Card({ img, title }: Service) {
    return (
        <div className="h-70 sm:h-90 lx:24/100 lg:w-23/100  md:w-22/100 sm:w-18/80 relative mb-3 sm:mb-0">
            <img className="h-full w-full object-cover rounded-2xl"
                src={img}
                alt="Shoes" />
            <div className="flex justify-center">
                <h2 className="card-title absolute bottom-5 bg-amber-600 w-full flex justify-center opacity-85">{title}</h2>
            </div>
        </div>
    )
}

export default AboutUs