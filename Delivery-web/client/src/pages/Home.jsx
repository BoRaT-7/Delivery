import Banner from "../components/Banner";
import BookingIcon from "../assets/bookingIcon.png";
import OurServices from "../components/OurServices";
import Brands from "../components/Brands";
import Features from "../components/Features";
import MerchantSection from "../components/MerchantSection";
import CustomerReview from "../components/CustomerReview";
import FAQ from "../components/FAQ";
import Footer from "./footer/Footer";



export default function Home() {

    const services = [
        {
            title: "Booking Pick & Drop",
            description:
                "From personal packages to business shipments — we deliver on time, every time.",
        },
        {
            title: "Cash On Delivery",
            description:
                "From personal packages to business shipments — we deliver on time, every time.",
        },
        {
            title: "Delivery Hub",
            description:
                "From personal packages to business shipments — we deliver on time, every time.",
        },
        {
            title: "Booking SME & Corporate",
            description:
                "From personal packages to business shipments — we deliver on time, every time.",
        },
    ];

    return (
        <div className="mt-4">

            {/* Banner */}
            <Banner />

            {/* How it Works */}
            <section className="max-w-7xl mx-auto mt-14 px-4">

                <h2 className="text-4xl font-bold text-[#03373D] mb-10">
                    How it Works
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {services.map((item, index) => (
                        <div
                            key={index}
                            className="
                                group
                                bg-[#F4F5F7]
                                rounded-3xl
                                p-8
                                border
                                border-transparent
                                hover:border-[#CAEB66]
                                hover:bg-white
                                hover:shadow-2xl
                                hover:-translate-y-3
                                hover:scale-105
                                transition-all
                                duration-500
                                ease-in-out
                                cursor-pointer
                            "
                        >

                            {/* Icon */}
                            <div className="overflow-hidden">
                                <img
                                    src={BookingIcon}
                                    alt=""
                                    className="
                                        w-14
                                        mb-6
                                        transition-all
                                        duration-500
                                        group-hover:rotate-12
                                        group-hover:scale-125
                                    "
                                />
                            </div>

                            {/* Title */}
                            <h3 className="
                                font-bold
                                text-lg
                                mb-4
                                text-[#03373D]
                                transition-all
                                duration-300
                                group-hover:text-[#7CB518]
                            ">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="
                                text-gray-500
                                text-sm
                                leading-6
                                transition-all
                                duration-300
                                group-hover:text-gray-700
                            ">
                                {item.description}
                            </p>

                            {/* Bottom animated line */}
                            <div className="
                                h-1
                                w-0
                                bg-[#CAEB66]
                                mt-6
                                rounded-full
                                transition-all
                                duration-500
                                group-hover:w-full
                            "></div>

                        </div> 
                    ))}

                </div>

            </section>

           <OurServices></OurServices> 
         <Brands></Brands>
         <Features></Features>
         <MerchantSection></MerchantSection>
         <CustomerReview></CustomerReview>
         <FAQ></FAQ>
         <Footer></Footer>


        </div>
    );
}