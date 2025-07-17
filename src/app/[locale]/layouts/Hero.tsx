"use client";

import React, { useState, useEffect } from 'react';
import 'remixicon/fonts/remixicon.css';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const HeroBanner = () => {
    const t = useTranslations('hero')

    const [isVisible, setIsVisible] = useState(false);

    const [isMedium, setIsMedium] = useState(false)

    useEffect(() => {
        if (typeof window === 'undefined') return

        setIsMedium(
            window.matchMedia('(max-width: 1025px)').matches
        )

        setIsVisible(true);

        const media = window.matchMedia('(max-width: 1025px)')
        const mediaHandler = (e: MediaQueryListEvent) => {
            setIsMedium(e.matches)
        }

        media.addEventListener('change', mediaHandler)

        return () => {
            media.removeEventListener('change', mediaHandler)
        };
    }, []);

    return (
        <section id="beranda" className="min-h-screen relative">
            <div className="bg-gradient-to-br to-[#55B4E5] from-white via-[#1098ff] overflow-hidden">

                {/* Animation */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/images/banner.svg')] animate-pulse"></div>
                    <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl animate-bounce"></div>
                </div>

                {/* Main Content */}
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen py-20 md:py-10">

                        {/* Left Content */}
                        <div className={`flex-1 text-amber-50 space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="inline-flex font-bold items-center bg-[#ED5625] backdrop-blur-sm rounded-full px-4 py-2 text-sm shadow-lg">
                                <span className="mr-2">🚀</span>
                                {t('badge')}
                            </div>

                            <div className="space-y-4">
                                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                                    <span className="text-amber-50">
                                        {t('title')}
                                    </span>
                                </h1>
                                <h2 className="text-2xl md:text-3xl font-semibold text-yellow-50">
                                    {t('subtitle')}
                                </h2>
                            </div>

                            <p className="text-md text-yellow-50 leading-relaxed max-w-2xl">
                                {t('description')}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href={"https://jaja.id/"}>
                                    <button className="bg-[#ED5625] hover:bg-[#c9451b] text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center group">
                                        {t('buttons.startShopping')}
                                        <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
                                    </button>
                                </Link>

                                <Link href={"https://jaja.id/"}>
                                    <button className="bg-transparent border-2 border-white/30 text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-105">
                                        {t('buttons.sellProducts')}
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className={`${isMedium ? 'hidden' : ''} flex-1 lg:ml-12 mt-12 lg:mt-0 transition-all duration-1000 delay-300`}>
                            <div className="relative w-full h-[400px] flex items-center justify-center">
                                <Image
                                    src={'/images/placeholder.png'}
                                    alt={`Hobby`}
                                    width={500}
                                    height={500}
                                    className={`bg-transparent absolute transition-all duration-700 hover:scale-105 float-animation`}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;
