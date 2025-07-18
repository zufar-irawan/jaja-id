import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useTranslations } from "next-intl"

const Pengiriman = () => {
    const t = useTranslations('pengirimanCepat')

    const pengirimanRef = useRef<HTMLParagraphElement>(null)
    const [isInView, setIsInView] = useState(false)
    const [isMedium, setIsMedium] = useState(false)

    useEffect(() => {
        if (typeof window === 'undefined') return

        setIsMedium(
            window.matchMedia('(max-width:1024px)').matches
        )

        const media = window.matchMedia('(max-width:1024px)')
        const mediaHandler = (e: MediaQueryListEvent) => {
            setIsMedium(e.matches)
        }

        const currentRef = pengirimanRef.current
        if (!currentRef) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsInView(entry.isIntersecting)
                })
            },
            {
                threshold: 0.6
            }
        )

        observer.observe(currentRef)

        media.addEventListener('change', mediaHandler)

        return () => {
            observer.unobserve(currentRef)
            media.removeEventListener('change', mediaHandler)
        }
    }, [])

    return (
        <section id="pengiriman" className="relative py-20 w-full bg-gradient-to-br from-[#FBB338] via-[#FBB338] to-[#ED5625] overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-xl"></div>
                <div className="absolute bottom-20 right-20 w-48 h-48 bg-orange-300 rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-amber-500 rounded-full blur-lg"></div>
            </div>

            <div className={`relative z-10 flex ${isMedium ? 'flex-col' : 'flex-row'} w-[85%] max-w-6xl mx-auto gap-12 items-center`}>
                {/* Image Content */}
                <div className={`flex-1 ${isMedium ? 'order-1' : 'order-2'} relative group`}>
                    <div className="relative overflow-hidden p-8 transform transition-all duration-500 hover:scale-105">
                        {/* Floating animation wrapper */}
                        <div>
                            <Image
                                src={"/images/truk-pengiriman-cepat.webp"}
                                alt="Truk Pengiriman Cepat"
                                width={isMedium ? 280 : 500}
                                height={isMedium ? 280 : 500}
                                loading="lazy"
                                className="w-full h-auto object-contain filter drop-shadow-xl"
                            />
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute top-4 right-4 w-6 h-6 bg-orange-400 rounded-full animate-ping"></div>
                        <div className="absolute bottom-6 left-6 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
                    </div>
                </div>

                {/* Text Content */}
                <div className={`flex-1 ${isMedium ? 'order-2' : 'order-1'} space-y-8`}>
                    <div className="space-y-4">
                        <h1 className="font-bold text-4xl lg:text-5xl text-amber-50 drop-shadow-sm leading-tight">
                            {t('title')}
                            <span className="block text-amber-50">
                                {t('subtitle')}
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <div className="flex items-center gap-2 text-amber-50">
                            <span className="text-sm font-medium uppercase tracking-wider">{t('badge')}</span>
                        </div>
                    </div>

                    <div
                        ref={pengirimanRef}
                        className={`
                            relative transition-all duration-700 ease-out transform
                            ${isInView
                                ? 'translate-y-0 opacity-100 scale-100 shadow-2xl bg-white'
                                : 'translate-y-8 opacity-80 scale-95 bg-gray-100/80'
                            }
                            backdrop-blur-sm border border-white/20 rounded-2xl p-8 overflow-hidden
                        `}
                    >
                        {/* Glassmorphism effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm"></div>

                        {/* Content */}
                        <div className="relative z-10">
                            <p className="text-gray-800 leading-relaxed text-base lg:text-lg">
                                {t('description')}
                            </p>

                            <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                    <span>{t('features.delivery24Hours')}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                                    <span>{t('features.realtimeTracking')}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                                    <span>{t('features.safeGuarantee')}</span>
                                </div>
                            </div>
                        </div>

                        {/* Decorative corner elements */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-200/50 to-orange-200/50 rounded-bl-full"></div>
                        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-amber-200/50 to-yellow-200/50 rounded-tr-full"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pengiriman