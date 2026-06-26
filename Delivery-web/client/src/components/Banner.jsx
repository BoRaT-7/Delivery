import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FiArrowUpRight } from "react-icons/fi";

import banner1 from "../assets/banner/banner1.png";
import banner2 from "../assets/banner/banner2.png";
import banner3 from "../assets/banner/banner3.png";

export default function Banner() {
    const banners = [banner1, banner2, banner3];

    return (
        <div className="max-w-7xl mx-auto mt-6">
            <div className="relative">

                {/* Carousel */}
                <Carousel
                    autoPlay
                    infiniteLoop
                    interval={3000}
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={true}
                    stopOnHover={true}
                    showArrows={false}
                >
                    {banners.map((banner, index) => (
                        <div key={index}>
                            <img
                                src={banner}
                                alt={`Banner ${index + 1}`}
                                className="rounded-3xl"
                            />
                        </div>
                    ))}
                </Carousel>

                {/* Fixed Buttons */}
                <div className="absolute bottom-20 left-12 flex gap-4 z-20">

                    {/* Track Your Parcel */}
                    <button className="btn bg-[#CAEB66] hover:bg-[#b8d95a] border-black rounded-full px-6">
                        Track Your Parcel

                        <div className="bg-black text-white rounded-full p-2">
                            <FiArrowUpRight size={16} />
                        </div>
                    </button>

                    {/* Be a Rider */}
                    <button className="btn bg-white hover:bg-[#CAEB66] border border-black rounded-full px-6">
                        Be a Rider
                    </button>

                </div>

            </div>
        </div>
    );
}