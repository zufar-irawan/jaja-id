import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useTranslations } from "next-intl"

const Gratis = () => {
    const t = useTranslations('gratisOngkir')

    const gratisRef = useRef<HTMLDivElement>(null)
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

        const currentRef = gratisRef.current
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
        <section id="gratisongkir" className="relative py-20 w-full bg-gradient-to-br from-amber-50 via-white to-amber-50 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 right-10 w-40 h-40 bg-orange-400 rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 left-20 w-56 h-56 bg-yellow-400 rounded-full blur-3xl"></div>
                <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-amber-500 rounded-full blur-xl"></div>
            </div>

            <div className={`relative z-10 flex ${isMedium ? 'flex-col' : 'flex-row'} w-[85%] max-w-6xl mx-auto gap-12 items-center`}>
                {/* Image Content */}
                <div className="flex-1 relative group">
                    <div className="relative overflow-hidden p-8 transform transition-all duration-500 hover:scale-105">

                        {/* Image with floating animation */}
                        <div className="relative">
                            <Image
                                src={"/images/gratis.png"}
                                alt="Free Delivery"
                                width={isMedium ? 320 : 500}
                                height={isMedium ? 320 : 500}
                                className="w-full h-auto object-contain filter drop-shadow-2xl"
                            />
                        </div>

                        {/* Sparkle effects */}
                        <div className="absolute top-8 left-8 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                        <div className="absolute bottom-8 right-8 w-2 h-2 bg-orange-400 rounded-full animate-ping delay-300"></div>
                        <div className="absolute top-1/2 right-6 w-4 h-4 bg-amber-400 rounded-full animate-ping delay-700"></div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 space-y-8">
                    <div className="space-y-4">
                        <h1 className="font-bold text-4xl lg:text-5xl bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-sm leading-tight">
                            {t('title')}
                            <span className="block bg-gradient-to-r from-[#FBB338] to-[#ED5625] bg-clip-text text-transparent">
                                {t('subtitle')}
                            </span>
                        </h1>

                        {/* Subtitle with money saving emphasis */}
                        <div className="flex items-center gap-2 text-orange-700">
                            <span className="text-sm font-medium uppercase tracking-wider">{t('badge')}</span>
                        </div>
                    </div>

                    <div
                        ref={gratisRef}
                        className={`
                            relative transition-all duration-700 ease-out transform
                            ${isInView
                                ? 'translate-y-0 opacity-100 scale-100 shadow-2xl bg-gradient-to-br from-orange-400 via-amber-400 to-yellow-400'
                                : 'translate-y-8 opacity-80 scale-95 bg-gradient-to-br from-orange-200 via-amber-200 to-yellow-200'
                            }
                            backdrop-blur-sm border border-white/30 rounded-2xl p-8 overflow-hidden
                        `}
                    >
                        {/* Animated background pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/50 to-transparent"></div>
                            <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full animate-ping"></div>
                            <div className="absolute bottom-6 left-6 w-6 h-6 bg-white rounded-full animate-ping delay-500"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                            <p className="text-white leading-relaxed text-base lg:text-lg font-medium drop-shadow-md">
                                {t('description')}
                            </p>

                            {/* Savings highlights */}
                            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                                <div className="flex items-center gap-2 text-white/90">
                                    <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
                                    <span>{t('features.save100Shipping')}</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/90">
                                    <div className="w-3 h-3 bg-blue-300 rounded-full animate-pulse delay-200"></div>
                                    <span>{t('features.noMinimumOrder')}</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/90">
                                    <div className="w-3 h-3 bg-purple-300 rounded-full animate-pulse delay-400"></div>
                                    <span>{t('features.allProducts')}</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/90">
                                    <div className="w-3 h-3 bg-pink-300 rounded-full animate-pulse delay-600"></div>
                                    <span>{t('features.wholeIndonesia')}</span>
                                </div>
                            </div>
                        </div>

                        {/* Corner decorations */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/30 to-transparent rounded-bl-full"></div>
                        <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-white/30 to-transparent rounded-tr-full"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gratis