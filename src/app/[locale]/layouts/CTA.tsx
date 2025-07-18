import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"

const Cta = () => {
    const t = useTranslations('cta')

    const [isSmall, setIsSmall] = useState(false)

    useEffect(() => {
        if (typeof window === 'undefined') return

        setIsSmall(
            window.matchMedia('(max-width:650px)').matches
        )

        const smallMedia = window.matchMedia('(max-width:650px)')

        const smallMediaHandler = (e: MediaQueryListEvent) => {
            setIsSmall(e.matches)
        }

        smallMedia.addEventListener('change', smallMediaHandler)

        return () => {
            smallMedia.removeEventListener('change', smallMediaHandler)
        }
    }, [])

    return (
        <section className="pt-16 bg-[#55B4E5] w-full relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
                <div className="absolute top-32 right-16 w-12 h-12 bg-white rounded-full animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-20 w-16 h-16 bg-white rounded-full animate-pulse delay-500"></div>
                <div className="absolute top-20 right-32 w-8 h-8 bg-white rounded-full animate-pulse delay-700"></div>
            </div>

            <div className="mx-auto relative z-10">
                {/* Badge/Label */}
                <div className="flex justify-center mb-4">
                    <span className="bg-[#ED5625] text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg animate-bounce">
                        {t('badge')}
                    </span>
                </div>

                {/* Main Heading with enhanced styling */}
                <h1 className="text-5xl md:text-6xl font-black text-center mb-4 leading-tight">
                    <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-lg">
                        {t('mainHeading')}
                    </span>
                </h1>

                {/* Subheading */}
                <div className="text-center mb-6">
                    <p className="text-2xl font-bold text-white mb-2">
                        {t('subheading')}
                    </p>
                    <p className={`${isSmall ? 'px-1' : ''} text-lg text-blue-100 opacity-90`}>
                        {t('description')}
                    </p>
                </div>

                {/* Description with better spacing */}
                <p className={`${isSmall ? 'hidden' : ''} text-lg text-white/90 text-center w-[60%] mx-auto mb-8 leading-relaxed`}>
                    {t('longDescription')}
                </p>

                {/* Enhanced buttons with more effects */}
                <div className={`flex ${isSmall ? 'flex-col px-5 items-center' : 'flex-row'} gap-6 mx-auto justify-center mb-8`}>
                    <Link href={"https://jaja.id/"}>
                        <button className="bg-[#ED5625] hover:bg-[#c9451b] text-white font-bold py-5 px-10 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center justify-center group relative overflow-hidden text-lg">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            <span className="relative z-10 flex items-center">
                                {t('buttons.startShopping')}
                                <i className="ri-arrow-right-line ml-2 group-hover:translate-x-2 transition-transform duration-300"></i>
                            </span>
                        </button>
                    </Link>

                    <Link href={"https://jaja.id/seller/info"}>
                        <button className="bg-transparent border-2 border-white/40 text-white font-bold py-5 px-10 rounded-2xl hover:bg-white/30 hover:border-white/60 transition-all duration-300 hover:scale-105 shadow-xl text-lg">
                            {t('buttons.sellProducts')}
                        </button>
                    </Link>

                </div>

                <Image
                    src={"/images/toys-box.webp"}
                    alt="Toys Box"
                    width={500}
                    height={500}
                    loading="lazy"
                    className="mx-auto pt-10"
                />
            </div>
        </section>
    )
}

export default Cta