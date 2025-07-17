import { useTranslations } from "next-intl"

const Memilih = () => {
    const t = useTranslations('privacy_policy.opting_out')

    const items = t.raw('sections.opt_out.items') as string[]
    const items2 = t.raw('sections.access_correction.items') as string[]

    const section21 = items2[0]
    const section22 = items2[1]
    const section23 = items2[2]
    const section24 = items2[3]
    const section25 = items2[4]

    const section1 = items[0]
    const section2 = items[1]
    const section3 = items[2]
    const section4 = items[3]

    return (
        <div className="py-10 px-5 sm:px-10 md:px-30 lg:px-50 bg-gray-100">
            <h1 className="font-bold text-2xl">
                <span className="bg-gradient-to-r from-gray-800 to-[#ED5625] bg-clip-text text-transparent">
                    {t('title')}
                </span>
            </h1>

            <p className="text-sm pt-8">
                {t('sections.opt_out.title')}
            </p>

            <p className="text-sm pt-6">
                {section1}
            </p>

            <p className="text-sm pt-6">
                {section2}
            </p>

            <p className="text-sm pt-6">
                {section3}
            </p>

            <p className="text-sm pt-6">
                {section4}
            </p>

            <p className="text-sm pt-6">
                {t('sections.access_correction.title')}
            </p>

            <p className="text-sm pt-6">
                {section21}
            </p>

            <p className="text-sm pt-6">
                {section22}
            </p>

            <p className="text-sm pt-6">
                {section23}
            </p>

            <p className="text-sm pt-6">
                {section24}
            </p>

            <p className="text-sm pt-6">
                {section25}
            </p>

        </div>
    )
}

export default Memilih