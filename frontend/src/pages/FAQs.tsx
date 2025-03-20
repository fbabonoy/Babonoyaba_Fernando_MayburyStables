import faqs from "../Model/questions"

function FAQs() {
    return (
        <div className="mt-5 mb-5 flex gap-3 justify-evenly items-center flex-wrap">
            {faqs.map((question) => {
                return <div tabIndex={0} className="collapse bg-base-100 border-base-300 border w-1/3">
                    <div className="collapse-title font-semibold">{question.question}</div>
                    <div className="collapse-content text-sm">
                        {question.answer}
                    </div>
                </div>
            })}

        </div>
    )
}
export default FAQs