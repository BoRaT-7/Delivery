import serviceIcon from "../assets/service.png";

export default function OurServices() {
    const services = [
        {
            title: "Express & Standard Delivery",
            description:
                "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.",
        },
        {
            title: "Nationwide Delivery",
            description:
                "We deliver parcels nationwide with home delivery in every district ensuring your products reach customers.",
            featured: true,
        },
        {
            title: "Fulfillment Solution",
            description:
                "We also offer customized service with inventory management support and order processing.",
        },
        {
            title: "Cash on Home Delivery",
            description:
                "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
        },
        {
            title: "Corporate Service / Contract In Logistics",
            description:
                "Customized corporate services including warehouse and inventory management support.",
        },
        {
            title: "Parcel Return",
            description:
                "Through our reverse logistics facility we allow end customers to return products.",
        },
    ];

    return (
        <section className="max-w-7xl mx-auto mt-12 px-4">

            <div className="bg-[#03373D] rounded-[32px] py-16 px-6 md:px-10">

                {/* Heading */}
                <div className="text-center mb-14">

                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Our Services
                    </h2>

                    <p className="text-gray-300 max-w-3xl mx-auto mt-5 leading-8">
                        Enjoy fast, reliable parcel delivery with real-time
                        tracking and zero hassle. From personal packages
                        to business shipments — we deliver on time,
                        every time.
                    </p>

                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {services.map((service, index) => (

                        <div
                            key={index}
                            className={`
                                group
                                rounded-3xl
                                p-8
                                transition-all
                                duration-500
                                ease-in-out
                                cursor-pointer
                                hover:-translate-y-4
                                hover:scale-105
                                hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]
                                ${
                                    service.featured
                                        ? "bg-[#CAEB66]"
                                        : "bg-white"
                                }
                            `}
                        >

                            {/* Icon */}
                            <div className="flex justify-center">

                                <div className="
                                    w-20 h-20
                                    rounded-full
                                    bg-[#F3F3F3]
                                    flex
                                    items-center
                                    justify-center
                                    transition-all
                                    duration-500
                                    group-hover:rotate-12
                                    group-hover:scale-125
                                ">
                                    <img
                                        src={serviceIcon}
                                        alt=""
                                        className="w-10"
                                    />
                                </div>

                            </div>

                            {/* Title */}
                            <h3 className="
                                text-center
                                text-2xl
                                font-bold
                                text-[#03373D]
                                mt-6
                                mb-4
                                transition-all
                                duration-300
                                group-hover:text-black
                            ">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="
                                text-center
                                text-gray-600
                                leading-7
                            ">
                                {service.description}
                            </p>

                            {/* Animated Line */}
                            <div className="
                                h-1
                                w-0
                                bg-[#03373D]
                                rounded-full
                                mx-auto
                                mt-6
                                transition-all
                                duration-500
                                group-hover:w-24
                            "></div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}