import { useEffect, useState } from "react"
import Card from "../components/Card";

export interface ImageData {
    title: string;
    imageUrl: string;
    _id: string;
}

function MeetTheHerd({change}: {change?:boolean}) {
    const [ data, setData ] = useState<ImageData[]>([])

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("http://localhost:8081/herd");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const result: ImageData[] = await response.json();
                setData(()=>result);
            } catch (error) {
                console.error("Error fetching herd data:", error);
            }
        }

        fetchData();

    }, [change])

    return (
        <div className="flex flex-wrap m-5 justify-evenly items-center p-5" >
            {data && data.map((card : ImageData)=>{
                console.log(card.imageUrl)
                return (
                <Card key={card._id} title={card.title} img={"http://localhost:8081" + card.imageUrl} ></Card>
                )
            })}
        </div>
    )
}

export default MeetTheHerd