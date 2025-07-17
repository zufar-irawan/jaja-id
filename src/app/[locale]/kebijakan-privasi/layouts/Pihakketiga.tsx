import { useTranslations } from "next-intl"

const Pihakketiga = () => {
    const t = useTranslations('privacy_policy.thirdParty')

    return (
        <div className="py-10 px-5 sm:px-10 md:px-30 lg:px-50 bg-gray-100">
            <h1 className="font-bold text-2xl">
                <span className="bg-gradient-to-r from-gray-800 to-[#ED5625] bg-clip-text text-transparent">
                    {t('title')}
                </span>
            </h1>

            <p className="text-sm pt-8">
                {t('section14_1')}
            </p>

            <p className="text-sm pt-6">
                {t('section15_2')}
            </p>

        </div>
    )
}

export default Pihakketiga