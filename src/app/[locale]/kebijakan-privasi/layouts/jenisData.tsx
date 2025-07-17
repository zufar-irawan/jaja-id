import { useTranslations } from "next-intl"

const JenisData = () => {
    const t = useTranslations('privacy_policy.data_types')
    const items = t.raw('items') as string[]

    const a = items[0]
    const b = items[1]
    const c = items[2]
    const d = items[3]
    const e = items[4]
    const f = items[5]
    const g = items[6]
    const h = items[7]

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

            <ul className="text-sm pt-2 list-disc">
                <li>{a}</li>
                <li>{b}</li>
                <li>{c}</li>
                <li>{d}</li>
                <li>{e}</li>
                <li>{f}</li>
                <li>{g}</li>
                <li>{h}</li>
            </ul>

            <p className="text-sm pt-6">
                {t('additional_info')}
            </p>

        </div>
    )
}

export default JenisData