import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Star } from 'lucide-react'

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Riya Yadav',
            designation: 'PGDM Student at RIIM',
            rating: 5,
            text: "Working with him has been amazing! His coding skills are top-notch and he always explains things clearly. Truly a pleasure to collaborate with.",
        },
        {
            id: 2,
            name: 'Anand Singh',
            designation: 'MCA Student at ADYPU',
            rating: 5,
            text: "Extremely talented and reliable. He delivered solutions quickly and was always open to feedback. Definitely someone I'd recommend!",
        },
        {
            id: 5,
            name: 'Afzal Ali',
            designation: 'MBA Student at SMS',
            rating: 5,
            text: "A highly skilled developer who is also fun to work with! Always ready to support and goes the extra mile to make things perfect.",
        },
        {
            id: 3,
            name: 'Aaditya Chavan',
            designation: 'MCA Student at ADYPU',
            rating: 5,
            text: "Super approachable and helpful. His problem-solving skills are impressive, and he makes even complex tasks seem simple.",
        },
        {
            id: 4,
            name: 'Vaishali Sharma',
            designation: 'Operation Executive at Visit Health',
            rating: 5,
            text: "I really appreciate his dedication and attention to detail. He turns ideas into working projects efficiently and professionally.",
        },
        {
            id: 6,
            name: 'Disha Bhojwani',
            designation: 'Dietician',
            rating: 5,
            text: "Hardworking and adaptable, delivered a smooth, high-quality website with a perfect color palette. Great experience — highly recommended!",
        },
    ]

    return (
        <section id='testimonials' className='bg-gray-700 py-16 px-4 relative border-t border-gray-500'>
            <div className='max-w-6xl mx-auto'>

                {/* Section header — matches system */}
                <div className='mb-12'>
                    <p className='text-[12px] font-mono tracking-[0.25em] uppercase text-red-500 mb-2'>
                        Kind Words
                    </p>
                    <h2 className='text-3xl font-bold text-white leading-none'>
                        Testimonials
                        <span className='text-red-500'>.</span>
                    </h2>
                </div>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    loop
                    speed={700}
                    autoplay={{ delay: 4000 }}
                    slidesPerView={3}
                    spaceBetween={16}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    pagination={{ clickable: true }}
                    className='!pb-10'
                >
                    {testimonials.map((item) => (
                        <SwiperSlide key={item.id} className='h-auto'>
                            <div className='group h-full bg-gray-800/60 border border-gray-700 hover:border-red-500/40 rounded-2xl p-5 flex flex-col gap-4 transition-all duration-300 relative overflow-hidden'>

                                {/* Hover glow */}
                                <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl'
                                    style={{ background: 'radial-gradient(ellipse at top left, rgba(239,68,68,0.06) 0%, transparent 70%)' }} />

                                {/* Stars */}
                                <div className='flex gap-0.5'>
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-3.5 h-3.5 ${i < item.rating ? 'text-red-400' : 'text-gray-600'}`}
                                            fill={i < item.rating ? 'currentColor' : 'none'}
                                        />
                                    ))}
                                </div>

                                {/* Quote text */}
                                <p className='text-xs text-gray-400 leading-relaxed flex-1'>
                                    "{item.text}"
                                </p>

                                {/* Footer */}
                                <div className='pt-3 border-t border-gray-700 flex items-center justify-between'>
                                    <div>
                                        <p className='text-sm font-semibold text-white group-hover:text-red-400 transition-colors duration-200'>
                                            {item.name}
                                        </p>
                                        <p className='text-[12px] text-gray-500 font-mono mt-0.5'>
                                            {item.designation}
                                        </p>
                                    </div>
                                    {/* Index marker */}
                                    <span className='text-[12px] font-mono font-bold text-red-500/50'>
                                        {String(testimonials.findIndex(t => t.id === item.id) + 1).padStart(2, '0')}
                                    </span>
                                </div>

                                {/* Bottom red line reveal */}
                                <div className='absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-red-500/50 transition-all duration-500 rounded-b-2xl' />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonials