"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import 'remixicon/fonts/remixicon.css'
import { useTranslations, useLocale } from "next-intl"

const Header = () => {
    const [isInTentang, setIsInTentang] = useState(false)
    const [isInKebijakan, setIsInKebijakan] = useState(false)
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
    const pathName = usePathname()
    const router = useRouter()
    const locale = useLocale()
    const t = useTranslations('header')

    const languages = [
        { code: 'id', name: 'Indonesia', flag: '🇮🇩' },
        { code: 'en', name: 'English', flag: '🇺🇸' }
    ]

    const navlink = [
        {
            id: 1,
            nama: t('navigation.home'),
            href: "#beranda"
        },
        {
            id: 2,
            nama: t('navigation.about'),
            href: "/tentang"
        },
        {
            id: 3,
            nama: t('navigation.terms'),
            href: "/kebijakan-privasi#17"
        },
        {
            id: 4,
            nama: t('navigation.privacy'),
            href: "/kebijakan-privasi"
        },
        {
            id: 5,
            nama: t('navigation.shop'),
            href: "https://jaja.id"
        },
    ]

    const [isClicked, setIsClicked] = useState(false)
    const [isMedium, setIsMedium] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    const linkClick = () => {
        setIsClicked(false)
    }

    const handleLanguageChange = (langCode: 'id' | 'en') => {
        // Tutup dropdown
        setIsLanguageDropdownOpen(false)

        // Dapatkan path saat ini tanpa locale
        const currentPath = pathName.replace(`/${locale}`, '') || '/'

        // Redirect ke path yang sama dengan locale baru
        router.push(`/${langCode}${currentPath}`)
    }

    const toggleLanguageDropdown = () => {
        setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
    }

    const currentLanguage = languages.find(lang => lang.code === locale) || languages[0]

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100)
        }

        // Tutup dropdown saat scroll
        const handleScrollCloseDropdown = () => {
            setIsLanguageDropdownOpen(false)
        }

        // Tutup dropdown saat klik di luar
        const handleClickOutside = (event: MouseEvent) => {
            if (!(event.target as HTMLElement).closest('.language-dropdown')) {
                setIsLanguageDropdownOpen(false)
            }
        }

        if (typeof window === 'undefined') return

        setIsMedium(window.matchMedia('(max-width: 1090px)').matches)

        const media = window.matchMedia('(max-width: 1090px)')
        const handler = (e: MediaQueryListEvent) => {
            setIsMedium(e.matches)

            if (!e.matches) {
                setIsClicked(false)
            }
        }

        setIsInKebijakan(pathName.startsWith('/kebijakan-privasi') || pathName.includes('/kebijakan-privasi'));
        setIsInTentang(pathName.startsWith('/tentang') || pathName.includes('/tentang'));

        window.addEventListener("scroll", handleScroll)
        window.addEventListener("scroll", handleScrollCloseDropdown)
        window.addEventListener("click", handleClickOutside)
        media.addEventListener('change', handler)

        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("scroll", handleScrollCloseDropdown)
            window.removeEventListener("click", handleClickOutside)
            media.removeEventListener('change', handler)
        }
    }, [pathName])

    return (
        <header className={`w-full fixed bg-white py-2.5 px-4 z-40 transition-all ${isScrolled ? 'top-0 shadow-2xl ' : '-top-25'}`}>
            <div className="flex justify-between">
                <Link href={"/"} className="my-auto">
                    <Image
                        src="/images/logo.webp"
                        alt="Jaja.id Logo"
                        width={120}
                        loading="lazy"
                        height={120}
                        className="lg:ml-20 md:ml-10"
                    />
                </Link>

                {/* Large Nav*/}
                <div className={`my-auto flex items-center gap-4 ${isMedium ? 'hidden' : ''}`}>
                    <nav>
                        <ul className="flex gap-3 text-md font-medium">
                            {navlink
                                .filter((nav) => !((isInTentang || isInKebijakan) && nav.id === 1))
                                .map((nav) => (
                                    <li key={nav.id}>
                                        <Link href={nav.href} className="text-gray-700 transition-colors hover:text-white rounded-4xl px-8 py-5 hover:bg-[#FBB338]">
                                            {nav.nama}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </nav>

                    {/* Language Switcher Dropdown - Large Screen */}
                    <div className="relative language-dropdown mr-20">
                        <button
                            onClick={toggleLanguageDropdown}
                            className="flex items-center gap-2 text-gray-700 hover:text-white rounded-4xl px-4 py-2 hover:bg-[#FBB338] transition-colors"
                        >
                            <span className="text-sm font-medium">{currentLanguage.code.toUpperCase()}</span>
                            <i className={`ri-arrow-down-s-line text-sm transition-transform ${isLanguageDropdownOpen ? 'rotate-180' : ''}`}></i>
                        </button>

                        {/* Dropdown Menu */}
                        {isLanguageDropdownOpen && (
                            <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                                {languages.map((language) => (
                                    <button
                                        key={language.code}
                                        onClick={() => handleLanguageChange(language.code as 'id' | 'en')}
                                        className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors ${locale === language.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                                            }`}
                                    >
                                        <span className="text-lg">{language.flag}</span>
                                        <span className="text-sm font-medium">{language.name}</span>
                                        {locale === language.code && (
                                            <i className="ri-check-line text-blue-600 ml-auto"></i>
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Menu Button*/}
                <div className={`my-auto flex items-center gap-4 ${isMedium ? '' : 'hidden'}`}>
                    {/* Language Switcher - Mobile */}
                    <div className="relative language-dropdown">
                        <button
                            onClick={toggleLanguageDropdown}
                            className="flex items-center gap-1 text-gray-700 hover:text-[#55B4E5] transition-colors"
                        >
                            <span className="text-lg">{currentLanguage.flag}</span>
                            <i className={`ri-arrow-down-s-line text-sm transition-transform ${isLanguageDropdownOpen ? 'rotate-180' : ''}`}></i>
                        </button>

                        {/* Mobile Dropdown Menu */}
                        {isLanguageDropdownOpen && (
                            <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                                {languages.map((language) => (
                                    <button
                                        key={language.code}
                                        onClick={() => handleLanguageChange(language.code as 'id' | 'en')}
                                        className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-50 transition-colors ${locale === language.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                                            }`}
                                    >
                                        <span className="text-sm">{language.flag}</span>
                                        <span className="text-xs font-medium">{language.code.toUpperCase()}</span>
                                        {locale === language.code && (
                                            <i className="ri-check-line text-blue-600 ml-auto text-xs"></i>
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <a onClick={handleClick} className="hover:text-[#55B4E5] text-black">
                        <i className="ri-menu-3-line text-2xl px-10"></i>
                    </a>
                </div>
            </div>

            {/* Mobile Menu Nav*/}
            <nav className={`py-10 text-center z-50 absolute bg-white transition-all w-60 ${isClicked ? 'right-0' : '-right-60'}`}>
                <ul className="text-md font-medium mr-20 w-full">
                    {navlink
                        .filter((nav) => !((isInTentang || isInKebijakan) && nav.id === 1))
                        .map((nav) => (
                            <li key={nav.id} className="py-6 w-full text-gray-700 hover:text-white hover:bg-[#FBB338] transition-colors">
                                <Link href={nav.href} onClick={linkClick} className="w-full py-5">
                                    {nav.nama}
                                </Link>
                            </li>
                        ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header