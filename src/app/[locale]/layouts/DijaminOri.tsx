import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import { useTranslations } from "next-intl"

const Dijamin = () => {
    const t = useTranslations('dijaminOri')

    const [isInView, setIsInView] = useState(false)
    const dijaminRef = useRef<HTMLDivElement>(null)
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

        const currentRef = dijaminRef.current
        if (!currentRef) return

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setIsInView(entry.isIntersecting)
            })
        },
            {
                threshold: 0.8
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
        <section id="dijaminori" className="relative py-20 w-full bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-8">
                <div className="absolute top-16 right-16 w-40 h-40 bg-amber-400 rounded-full blur-2xl"></div>
                <div className="absolute bottom-20 left-20 w-52 h-52 bg-orange-300 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-yellow-400 rounded-full blur-xl"></div>
            </div>

            <div className={`relative z-10 flex ${isMedium ? 'flex-col' : 'flex-row'} w-[85%] max-w-6xl mx-auto gap-12 items-center`}>
                {/* Image Content */}
                <div className="flex-1 relative group">
                    <div className="relative overflow-hidden p-8 transform transition-all duration-500 hover:scale-105">

                        {/* Image with premium glow */}
                        <div className="relative">
                            <Image
                                src={"/images/dijamin.png"}
                                alt="Dijamin 100% Ori"
                                width={isMedium ? 300 : 500}
                                height={isMedium ? 300 : 500}
                                className="w-full h-auto object-contain filter drop-shadow-2xl"
                            />

                        </div>

                        {/* Premium indicators */}
                        <div className="absolute top-6 left-6 w-4 h-4 bg-gold-400 rounded-full animate-ping"></div>
                        <div className="absolute bottom-6 right-6 w-3 h-3 bg-amber-400 rounded-full animate-ping delay-500"></div>
                        <div className="absolute top-1/2 right-4 w-5 h-5 bg-yellow-400 rounded-full animate-ping delay-1000"></div>

                    </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 space-y-8">
                    <div className="space-y-4">
                        <h1 className="font-bold text-4xl lg:text-5xl bg-gradient-to-r from-[#55B4E5] to-[#008acf] bg-clip-text text-transparent drop-shadow-sm leading-tight">
                            {t('title')}
                            <span className="block bg-gradient-to-r from-[#55B4E5] to-[#008acf] bg-clip-text text-transparent">
                                {t('subtitle')}
                            </span>
                        </h1>

                        {/* Subtitle with authenticity emphasis */}
                        <div className="flex items-center gap-2 text-[#55B4E5]">
                            <span className="text-sm font-medium uppercase tracking-wider">{t('badge')}</span>
                        </div>
                    </div>

                    <div
                        ref={dijaminRef}
                        className={`
                            relative transition-all duration-700 ease-out transform
                            ${isInView
                                ? 'translate-y-0 opacity-100 scale-100 shadow-2xl bg-gradient-to-br from-[#0ca3ee] to-[#55B4E5] via-[#55B4E5]'
                                : 'translate-y-8 opacity-80 scale-95 bg-blue-400/60'
                            }
                            backdrop-blur-sm border border-white/20 rounded-2xl p-8 overflow-hidden
                        `}
                    >
                        {/* Premium pattern overlay */}
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-400/50 to-transparent"></div>
                            <div className="absolute top-4 right-4 w-8 h-8 bg-gold-400 rounded-full animate-ping"></div>
                            <div className="absolute bottom-6 left-6 w-6 h-6 bg-yellow-400 rounded-full animate-ping delay-300"></div>
                            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-amber-400 rounded-full animate-ping delay-700"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                            <p className="text-white leading-relaxed text-base lg:text-lg">
                                {t('description')}
                            </p>

                            {/* Quality assurance features */}
                            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                                <div className="flex items-center gap-2 text-white">
                                    <div className="w-3 h-3 bg-[#ED5625] rounded-full animate-pulse"></div>
                                    <span>{t('features.officialWarranty')}</span>
                                </div>
                                <div className="flex items-center gap-2 text-white">
                                    <div className="w-3 h-3 bg-[#FBB338] rounded-full animate-pulse delay-200"></div>
                                    <span>{t('features.qualityControl')}</span>
                                </div>
                            </div>


                        </div>

                        {/* Corner decorations */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-200/50 to-transparent rounded-bl-full"></div>
                        <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-yellow-200/50 to-transparent rounded-tr-full"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dijamin