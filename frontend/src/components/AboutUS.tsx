import stableData from "../data"
import { Service } from "../data"

function AboutUs() {
    return <div>
        <div className="card card-border bg-base-100 w-full">
            <div className="card-body flex justify-center items-center">
                <h2 className="card-title">Card Title</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

            </div>
        </div>
        <div className="w-full h-2/4 flex justify-around flex-wrap">
            {stableData.services.sections.map((service) => {
                return <Card img={service.img} title={service.title} description={service.description} />
            })}
        </div>
    </div>
}

function Card({ img, title }: Service) {
    return (
        <div className="card bg-base-100 h-70 sm:h-100 sm:w-1/5 shadow-sm pb-10">
            <figure className="h-full">
                <img className="h-full w-full object-cover"
                    src={img}
                    alt="Shoes" />
            </figure>
            <div className="flex justify-center">
            <h2 className="card-title absolute bottom-13 bg-amber-600 w-full flex justify-center opacity-85">{title}</h2>
            </div>
        </div>
    )
}

export default AboutUs