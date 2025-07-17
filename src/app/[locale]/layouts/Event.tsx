import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import * as FramerMotion from 'framer-motion'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import banners from '../../../../data/jaja_banner.json'
import { useTranslations } from 'next-intl'

const Events = () => {
    const t = useTranslations('events')

    const motion = FramerMotion.motion

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: false,
        arrows: false,
        pauseOnHover: false,
    }

    return (
        <section id="events" className="pb-10 w-full">
            <div className="pb-15 bg-gradient-to-br from-[#55B4E5] via-white to-amber-50 mx-auto">
                <motion.div className='pt-10 pb-4' initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                    <h1 className="font-bold text-4xl md:text-5xl pt-10 pb-8 text-center ">
                        <span className="bg-gradient-to-r from-blue-900 to-blue-900/70 bg-clip-text text-transparent">
                            {t('title')}
                        </span>
                    </h1>
                </motion.div>

                <Slider {...settings} className="pb-5 w-[60%] mx-auto">
                    {banners.map((banner) => (
                        <div key={banner.id}>
                            <Image
                                src={banner.image}
                                alt={t('altText')}
                                width={700}
                                height={700}
                                className="mx-auto rounded-2xl"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default Events