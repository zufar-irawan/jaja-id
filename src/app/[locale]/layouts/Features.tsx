import Link from 'next/link'
import 'remixicon/fonts/remixicon.css'
import React, { useState, useEffect } from 'react'
import * as FramerMotion from 'framer-motion'
import { useTranslations } from 'next-intl'

const FeaturesSection = () => {
    const t = useTranslations('features')

    const motion = FramerMotion.motion

    const [isVisible, setIsVisible] = useState(false);
    const [isSmall, setIsSmall] = useState(false)

    const features = [
        {
            icon: "ri-truck-line",
            title: t('items.fastDelivery'),
            href: "#pengiriman"
        },
        {
            icon: "ri-refund-2-line",
            title: t('items.freeShipping'),
            href: "#gratisongkir"
        },
        {
            icon: "ri-shield-check-line",
            title: t('items.securePayment'),
            href: "#pembayaranaman"
        },
        {
            icon: "ri-verified-badge-fill",
            title: t('items.guaranteed100Original'),
            href: "#dijaminori"
        }
    ];

    useEffect(() => {
        if (typeof window === 'undefined') return

        setIsSmall(
            window.matchMedia('(max-width:460px)').matches
        )

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const media = window.matchMedia('(max-width:460px)')
        const mediaHandler = (e: MediaQueryListEvent) => setIsSmall(e.matches)

        const element = document.getElementById('features-section');
        if (element) {
            observer.observe(element);
        }

        media.addEventListener('change', mediaHandler)

        return () => {
            observer.disconnect();
            media.removeEventListener('change', mediaHandler)
        }
    }, []);

    return (
        <section id="features-section" className="relative bg-gradient-to-br from-[#1098ff] via-[#55B4E5] to-white overflow-hidden">

            {/* Animation */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('/images/dot.svg')] animate-pulse"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                                {t('title')}
                            </span>
                        </h2>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                            {t('subtitle')}
                        </p>
                    </div>
                </motion.div>

                {/* Features Grid */}
                <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 ${isSmall ? 'grid-cols-1' : 'grid-cols-2'}`}>
                    {features.map((feature, index) => (

                        <motion.div key={index}
                            className={`flex flex-col items-center text-center bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-white hover:bg-white transition-all duration-500 hover:scale-105 hover:shadow-2xl group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{
                                animationDelay: `${index * 0.1}s`
                            }}
                            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1, duration: 0.5 }}>
                            <Link href={feature.href}>
                                {/* Icon */}
                                <div className="mb-6">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#FBB338] to-[#ED5625] rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <i className={`${feature.icon} text-3xl text-white`}></i>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold bg-gradient-to-r from-[#FBB338] to-[#ED5625] bg-clip-text text-transparent">
                                        {feature.title}
                                    </h3>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection;