
const Review = () => {
    return (
        <div
            className="relative flex flex-col items-center justify-center w-full overflow-hidden px-7 xl:px-[108px] 2xl:px-[140px] mb-6">
            <section className="box-content w-full py-6 overflow-hidden testimonySwipper md:w-11/12 lg:w-full lg:px-5">
                <h1 data-aos="fade-up" data-aos-delay="250"
                    className="mb-12 mt-24 text-2xl font-semibold text-center md:text-3xl lg:text-4xl">
                    Apa Kata Fitnity?
                </h1>
                <div data-aos="fade-up" data-aos-delay="500" className="flex lg:justify-center lg:items-center swiper-wrapper">
                    <div className="flex items-center justify-center w-fit swiper-slide">
                        <section
                            className="items-center w-10/12 max-w-xs max-h-[520px] h-[400px] md:w-[280px] lg:h-[450px] lg:w-[280px] xl:w-80 justify-center rounded-2xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_20px] bg-gradient-to-t from-primary-200 via-primary-300 to-25% to-primary-500">
                            <div className="grid items-center justify-center h-full grid-cols-1">
                                <img className="mx-auto mt-5 rounded-full" src="https://demo.fitaja.id//storage/testimonies/HErLgTk8r1dQltFPCjxeAMgHCzS3AL7RZxx7X84v.jpg" alt="PERSON"></img>
                                <div className="flex items-center justify-center w-4/5 my-auto mx-auto h-[50px]">
                                    <h1 className="mt-2 text-xl font-bold text-center name">
                                        Jhon Doe</h1>
                                </div>
                                <p className="hidden w-4/5 mt-2 mx-auto overflow-hidden text-base text-left break-words xl:block xl:h-[200px]">
                                    Overall, FitAja! has been an invaluable companion on my journey towards a healthier lifestyle. The app&#039;s comprehensive features, personalized guidance, and motivating support have made it easier than ever to prioritize my health a...
                                </p>
                                <p className="w-4/5 mx-auto my-auto overflow-hidden text-base text-left break-words xl:hidden">
                                    Overall, FitAja! has been an invaluable companion on my journey towards a healthier lifestyle. The app&#039;s comprehensive features, personalized guidance...
                                </p>
                                <a data-modal="modal-0"
                                    className="px-5 py-1 mx-auto my-2 font-semibold transition-all duration-300 bg-white border rounded-full show-modal text-primary-200 border-primary-200 hover:bg-primary-200 hover:text-white hover:cursor-pointer">
                                    Selengkapnya
                                </a>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Review