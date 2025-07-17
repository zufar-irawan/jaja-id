"use client"

import Footer from "../components/Footer";
import Header from "../components/header";
import BerbagiInfromasi from "./layouts/berbagiInformasi";
import Cookies from "./layouts/cookies";
import DataPribadi from "./layouts/dataPribadi";
import HubungiKami from "./layouts/hubungiKami";
import Informasi from "./layouts/informasi";
import JenisData from "./layouts/jenisData";
import KeamananPihakKetiga from "./layouts/keamananPihakKetiga";
import Layanan from "./layouts/layanan";
import MelihatWeb from "./layouts/melihatWeb";
import MelindungiInformasi from "./layouts/melindungiInformasi";
import MembuatAkun from "./layouts/membuatAkun";
import Memilih from "./layouts/memilih";
import MengunduhKonten from "./layouts/mengunduhKonten";
import Mengungkapkan from "./layouts/mengungkapkan";
import Pendahuluan from "./layouts/pendahuluan";
import Pihakketiga from "./layouts/Pihakketiga";
import Survei from "./layouts/survei";
import SyaratKetentuan from "./layouts/syaratKetentuan";
import { useState } from "react";
import 'remixicon/fonts/remixicon.css'
import { useTranslations } from "next-intl";

export default function KebijakanPage() {
    const t = useTranslations('privacyPolicy')

    const daftarIsi = t.raw('tableOfContents.items') as { href: string, text: string }[]

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Header />

            <main>
                <section className="w-full">
                    <h1 className="text-center p-10 font-bold text-4xl bg-[#55B4E5]">
                        <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                            {t('title')}
                        </span>
                    </h1>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`fixed top-40 z-50 py-2 px-3 bg-[#55B4E5] text-white shadow-lg hover:bg-blue-700 transition-transform duration-300 ${isOpen ? "translate-x-72" : "translate-x-0"
                            }`}
                        aria-label="Toggle Sidebar">
                        <i className={`ri-${isOpen ? "close-line" : "menu-line"} text-xl`} />
                    </button>

                    <aside className={`fixed top-0 left-0 z-40 h-full w-72 bg-white border-r border-gray-200 shadow-md transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                        <div className="p-4 overflow-y-auto h-full">
                            <h2 className="text-xl font-semibold mb-4 text-blue-700 flex items-center gap-2">
                                <i className="ri-list-unordered" />
                                {t('tableOfContents.title')}
                            </h2>
                            <ul className="space-y-2 text-sm">
                                {daftarIsi.map((item) => (
                                    <li key={item.href}>
                                        <a
                                            href={item.href}
                                            className="text-gray-700 hover:text-blue-600 hover:underline block"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* Pendahuluan */}
                    <div id="1">
                        <Pendahuluan />
                    </div>

                    {/* 2. KAPAN JAJA.ID MENGUMPULKAN DATA PRIBADI? */}
                    <div id="2">
                        <DataPribadi />
                    </div>

                    {/* 3. DATA PRIBADI APA YANG AKAN DIKUMPULKAN OLEH JAJA.ID? */}
                    <div id="3">
                        <JenisData />
                    </div>


                    {/* 4. MEMBUAT AKUN */}
                    <div id="4">
                        <MembuatAkun />
                    </div>

                    {/* 5. MELIHAT HALAMAN WEB */}
                    <div id="5">
                        <MelihatWeb />
                    </div>

                    {/* 6. COOKIES */}
                    <div id="6">
                        <Cookies />
                    </div>

                    {/* 7. MELIHAT DAN MENGUNDUH KONTEN DAN IKLAN */}
                    <div id="7">
                        <MengunduhKonten />
                    </div>

                    {/* 8. LAYANAN */}
                    <div id="8">
                        <Layanan />
                    </div>

                    {/* 9. SURVEI */}
                    <div id="9">
                        <Survei />
                    </div>

                    {/* 10. BAGAIMANA KAMI MENGGUNAKAN INFORMASI YANG ANDA BERIKAN KEPADA KAMI? */}
                    <div id="10">
                        <Informasi />
                    </div>

                    {/* 11. BERBAGI INFORMASI DARI LAYANAN */}
                    <div id="11">
                        <BerbagiInfromasi />
                    </div>

                    {/* 12. BAGAIMANA JAJA.ID MELINDUNGI INFORMASI PELANGGAN? */}
                    <div id="12">
                        <MelindungiInformasi />
                    </div>

                    {/* 13. APAKAH JAJA.ID MENGUNGKAPKAN INFORMASI YANG DIKUMPULKANNYA DARI PENGUNJUNG KEPADA PIHAK LUAR? */}
                    <div id="13">
                        <Mengungkapkan />
                    </div>

                    {/* 14. INFORMASI YANG DIKUMPULKAN OLEH PIHAK KETIGA */}
                    <div id="14">
                        <Pihakketiga />
                    </div>

                    {/* 16. PENAFIAN TENTANG KEAMANAN DAN SITUS PIHAK KETIGA */}
                    <div id="15">
                        <KeamananPihakKetiga />
                    </div>

                    {/* 17. BAGAIMANA ANDA DAPAT MEMILIH KELUAR, MENGHAPUS, MEMINTA AKSES ATAU MENGUBAH INFORMASI YANG TELAH ANDA BERIKAN KEPADA KAMI?
                     */}
                    <div id="16">
                        <Memilih />
                    </div>

                    {/* 18. PERTANYAAN, MASALAH ATAU KELUHAN? HUBUNGI KAMI */}
                    <div id="17">
                        <HubungiKami />
                    </div>

                    {/* 20. SYARAT DAN KETENTUAN */}
                    <div id="18">
                        <SyaratKetentuan />
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}