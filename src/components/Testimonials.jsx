// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {

    const testimonials = [
        {
            id: 1,
            name: "Riya Yadav",
            designation: "PGDM Student at RIIM",
            rating: 5,
            text: "Working with him has been amazing! His coding skills are top-notch and he always explains things clearly. Truly a pleasure to collaborate with."
        },
        {
            id: 2,
            name: "Anand Singh",
            designation: "MCA Student at ADYPU",
            rating: 5,
            text: "Extremely talented and reliable. He delivered solutions quickly and was always open to feedback. Definitely someone I’d recommend!"
        },
        {
            id: 5,
            name: "Afzal Ali",
            designation: "MBA Student at SMS",
            rating: 5,
            text: "A highly skilled developer who is also fun to work with! Always ready to support and goes the extra mile to make things perfect."
        },
        {
            id: 3,
            name: "Aaditya Chavan",
            designation: "MCA Student at ADYPU",
            rating: 5,
            text: "Super approachable and helpful. His problem-solving skills are impressive, and he makes even complex tasks seem simple."
        },
        {
            id: 4,
            name: "Vaishali Sharma",
            designation: "Operation Executive at Visit Health",
            rating: 5,
            text: "I really appreciate his dedication and attention to detail. He turns ideas into working projects efficiently and professionally."
        },
        
    ];

    return (
        <div id='testimonials' className='py-16 bg-gray-50 relative'>
            <h1 className='text-center text-2xl lg:text-4xl font-bold mb-8'>What Others Say</h1>
            <div className='max-w-6xl mx-auto px-4'>
                <Swiper
                    style={{
                        "--swiper-pagination-color": "#EF4444",
                        "--swiper-pagination-bullet-inactive-color": "#D1D5DB",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "10px",
                        "--swiper-pagination-bullet-horizontal-gap": "8px",
                    }}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    speed={700}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    slidesPerView={3}
                    spaceBetween={30}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 15 },
                        480: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 25 },
                        1024: { slidesPerView: 3, spaceBetween: 30 },
                    }}
                    pagination={{
                        el: ".swiper-pagination",
                        type: "bullets",
                        clickable: true,
                    }}
                    className="mySwiper"
                >
                    {testimonials.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='bg-white border border-gray-200 rounded-xl shadow-lg p-6 flex flex-col justify-between h-full hover:shadow-red-200 transition-shadow duration-300'>
                                <div className='flex mb-3'>
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} fill={i < item.rating ? 'true' : undefined} className="text-yellow-400 w-5 h-5"/>
                                    ))}
                                </div>
                                <p className='text-gray-700 mb-6 flex-1'>{item.text}</p>
                                <div className='flex justify-between items-center mt-auto'>
                                    <div>
                                        <h3 className='font-semibold text-red-500 text-lg'>{item.name}</h3>
                                        <p className='text-sm text-gray-500 mt-1'>{item.designation}</p>
                                    </div>
                                    <Quote className='text-red-400 w-6 h-6'/>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className='swiper-pagination mt-10 gap-2 relative'></div>
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials;
