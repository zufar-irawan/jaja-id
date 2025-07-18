import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useTranslations } from "next-intl"

const Pembayaran = () => {
    const t = useTranslations('pembayaranAman')

    const [isInView, setIsInView] = useState(false)
    const pembayaranRef = useRef<HTMLDivElement>(null)
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

        const currentRef = pembayaranRef.current
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
        <section id="pembayaranaman" className="relative py-20 w-full bg-gradient-to-br from-[#55B4E5] to-[#008acf] via-[#55B4E5] overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-48 h-48 bg-blue-400 rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 right-1/4 w-28 h-28 bg-purple-400 rounded-full blur-lg"></div>
            </div>

            <div className={`relative z-10 flex ${isMedium ? 'flex-col' : 'flex-row'} w-[85%] max-w-6xl mx-auto gap-12 items-center`}>
                {/* Text Content */}
                <div className={`flex-1 ${isMedium ? 'order-2' : 'order-1'} space-y-8`}>
                    <div className="space-y-4">
                        <h1 className="font-bold text-4xl lg:text-5xl bg-gradient-to-r from-white to-amber-50  bg-clip-text text-transparent drop-shadow-sm leading-tight">
                            {t('title')}
                            <span className="block bg-gradient-to-r from-white to-amber-50 bg-clip-text text-transparent">
                                {t('subtitle')}
                            </span>
                        </h1>

                        {/* Subtitle with security emphasis */}
                        <div className="flex items-center gap-2 text-amber-50">
                            <span className="text-sm font-medium uppercase tracking-wider">{t('badge')}</span>
                        </div>
                    </div>

                    <div
                        ref={pembayaranRef}
                        className={`
                            relative transition-all duration-700 ease-out transform
                            ${isInView
                                ? 'translate-y-0 opacity-100 scale-100 shadow-2xl bg-white'
                                : 'translate-y-8 opacity-80 scale-95 bg-gray-100/80'
                            }
                            backdrop-blur-sm border border-white/30 rounded-2xl p-8 overflow-hidden
                        `}
                    >
                        {/* Glassmorphism effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm"></div>

                        {/* Content */}
                        <div className="relative z-10">
                            <p className="text-gray-800 leading-relaxed text-base lg:text-lg font-medium drop-shadow-md">
                                {t('description')}
                            </p>

                            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-blue-300 rounded-full animate-pulse delay-200"></div>
                                    <span>{t('features.multiPaymentGateway')}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <div className="w-3 h-3 bg-yellow-300 rounded-full animate-pulse delay-600"></div>
                                    <span>{t('features.monitoring24x7')}</span>
                                </div>
                            </div>

                            {/* Payment methods showcase */}
                            <div className="mt-6 p-4 bg-gray-400/10 rounded-xl backdrop-blur-sm border border-black/30">
                                <div className="text-gray-800 font-semibold mb-3">{t('paymentMethods.title')}</div>
                                <div className="grid grid-cols-4 gap-2 text-[9px] sm:text-[8px] md:text-xs lg:text-xs text-gray-800">
                                    <div className="bg-gray-400/20 rounded-lg p-2 text-center">{t('paymentMethods.bankTransfer')}</div>
                                    <div className="bg-gray-400/20 rounded-lg p-2 text-center">{t('paymentMethods.eWallet')}</div>
                                    <div className="bg-gray-400/20 rounded-lg p-2 text-center">{t('paymentMethods.creditCard')}</div>
                                    <div className="bg-gray-400/20 rounded-lg p-2 text-center">{t('paymentMethods.qris')}</div>
                                </div>
                            </div>

                        </div>

                        {/* Corner decorations */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#55B4E5] to-transparent rounded-bl-full"></div>
                        <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-indigo-400 to-transparent rounded-tr-full"></div>
                    </div>
                </div>

                {/* Image Content */}
                <div className={`flex-1 ${isMedium ? 'order-1' : 'order-2'} relative group`}>
                    <div className="relative overflow-hidden rounded-3xl p-8 transform transition-all duration-500 hover:scale-105">

                        <div className="relative">
                            <Image
                                src={"/images/handphone-pembayaran-aman.webp"}
                                alt="Handphone Pembayaran Aman"
                                width={isMedium ? 280 : 500}
                                height={isMedium ? 280 : 500}
                                loading="lazy"
                                className="w-full h-auto object-contain filter drop-shadow-2xl"
                            />

                        </div>

                        {/* Floating security indicators */}
                        <div className="absolute top-6 left-6 w-4 h-4 bg-blue-600 rounded-full animate-ping"></div>
                        <div className="absolute bottom-6 right-6 w-3 h-3 bg-[#ED5625] rounded-full animate-ping delay-500"></div>
                        <div className="absolute top-1/2 right-4 w-5 h-5 bg-[#FBB338] rounded-full animate-ping delay-1000"></div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pembayaran