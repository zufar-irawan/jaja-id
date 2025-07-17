"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import 'remixicon/fonts/remixicon.css'
import { useTranslations } from "next-intl"

const Header = () => {
    const [isInTentang, setIsInTentang] = useState(false)
    const [isInKebijakan, setIsInKebijakan] = useState(false)
    const pathName = usePathname()
    const t = useTranslations('header')

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

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100)
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
        media.addEventListener('change', handler)

        return () => {
            window.removeEventListener("scroll", handleScroll)
            media.removeEventListener('change', handler)
        }
    }, [pathName])

    return (
        <header className={`w-full fixed bg-white py-2.5 px-4 z-40 transition-all ${isScrolled ? 'top-0 shadow-2xl ' : '-top-25'}`}>
            <div className="flex justify-between">
                <Link href={"/"} className="my-auto">
                    <Image
                        src="/images/logo.png"
                        alt={t('logo.alt')}
                        width={120}
                        height={120}
                        className="lg:ml-20 md:ml-10"
                    />
                </Link>

                {/* Large Nav*/}
                <nav className={`my-auto ${isMedium ? 'hidden' : ''}`}>
                    <ul className="flex gap-3 text-md font-medium mr-20">
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

                {/* Mobile Menu Button*/}
                <div className={`my-auto ${isMedium ? '' : 'hidden'}`}>
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