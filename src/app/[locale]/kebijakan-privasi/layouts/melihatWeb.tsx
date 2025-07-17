import { useTranslations } from "next-intl"

const MelihatWeb = () => {
    const t = useTranslations('privacy_policy.viewing_web')

    return (
        <div className="py-10 px-5 sm:px-10 md:px-30 lg:px-50">
            <h1 className="font-bold text-2xl">
                <span className="bg-gradient-to-r from-gray-800 to-[#ED5625] bg-clip-text text-transparent">
                    {t('title')}
                </span>
            </h1>

            <p className="text-sm pt-8">
                {t('description')}
            </p>

        </div>
    )
}

export default MelihatWeb