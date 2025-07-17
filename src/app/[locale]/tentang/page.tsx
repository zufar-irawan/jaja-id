"use client"

import Image from "next/image";
import 'remixicon/fonts/remixicon.css'
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

const HeaderComponent = dynamic(
    () => import('../components/header'),
    { ssr: false }
)

const FooterComponent = dynamic(
    () => import('../components/Footer'),
    { ssr: false }
)

export default function TentangPage() {
    const t = useTranslations('about')

    const description = t.raw('company.description') as string[]
    const items = t.raw('vision_mission.mission.items') as string[]

    const first = description[0]
    const second = description[1]
    const third = description[2]

    const itemOne = items[0]
    const itemTwo = items[1]
    const itemThree = items[2]

    return (
        <>
            <HeaderComponent />

            <main>
                {/* Header Section */}
                <div className="text-center bg-[#55B4E5]">
                    <h1 className="text-4xl p-10">
                        <span className="font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                            {t('title')}
                        </span>
                    </h1>
                </div>

                {/* Section 1: Tentang Perusahaan */}
                <section className="py-16 px-10 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                    {t('company.title')}
                                </h2>
                                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                                    {first}
                                </p>
                                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                                    {second}
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {third}
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <Image
                                    src="/images/tentang.jpg"
                                    alt="Jaja ID"
                                    width={500}
                                    height={400}
                                    className="rounded-lg shadow-lg w-full max-w-md h-80 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Visi Misi */}
                <section className="py-16 px-10 bg-gray-50">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                            {t('vision_mission.title')}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Visi */}
                            <div className="bg-white rounded-lg p-8 shadow-md">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-[#55B4E5] rounded-full flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800">{t('vision_mission.vision.title')}</h3>
                                </div>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {t('vision_mission.vision.description')}
                                </p>
                            </div>

                            {/* Misi */}
                            <div className="bg-white rounded-lg p-8 shadow-md">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-[#55B4E5] rounded-full flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800">{t('vision_mission.mission.title')}</h3>
                                </div>
                                <ul className="text-gray-600 text-lg leading-relaxed space-y-2">
                                    <li>• {itemOne}</li>
                                    <li>• {itemTwo}</li>
                                    <li>• {itemThree}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Alamat Head Office */}
                <section className="py-16 px-10 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                            {t('head_office.title')}
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="flex justify-center lg:order-2">
                                <Image
                                    src="/images/alamat.jpg"
                                    alt={t('head_office.company_name')}
                                    width={500}
                                    height={400}
                                    className="rounded-lg shadow-lg w-full max-w-md h-80 object-cover"
                                />
                            </div>
                            <div className="lg:order-1">
                                <div className="bg-gray-100 rounded-2xl p-8">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                        {t('head_office.company_name')}
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <div className="w-6 h-6 text-2xl text-[#55B4E5] mr-3 flex-shrink-0">
                                                <i className="ri-map-pin-2-fill"></i>
                                            </div>

                                            <div>
                                                <p className="text-gray-800 font-semibold">{t('head_office.address.title')}</p>
                                                <p className="text-gray-600">
                                                    {t('head_office.address.value1')}<br />
                                                    {t('head_office.address.value2')}<br />
                                                    {t('head_office.address.value3')}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-6 h-6 text-[#55B4E5] mr-3 flex-shrink-0 text-2xl">
                                                <i className="ri-phone-fill"></i>
                                            </div>
                                            <div>
                                                <p className="text-gray-800 font-semibold">{t('head_office.phone.title')}</p>
                                                <p className="text-gray-600">{t('head_office.phone.value')}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-6 h-6 text-[#55B4E5] mr-3 flex-shrink-0 text-2xl">
                                                <i className="ri-mail-fill"></i>
                                            </div>
                                            <div>
                                                <p className="text-gray-800 font-semibold">{t('head_office.email.title')}</p>
                                                <p className="text-gray-600">{t('head_office.email.value')}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-6 h-6 text-[#55B4E5] mr-3 mt-1 flex-shrink-0 text-2xl">
                                                <i className="ri-time-fill"></i>
                                            </div>

                                            <div>
                                                <p className="text-gray-800 font-semibold">{t('head_office.operating_hours.title')}</p>
                                                <p className="text-gray-600">
                                                    {t('head_office.operating_hours.value')}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <FooterComponent />
        </>
    )
}