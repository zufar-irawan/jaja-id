import { useTranslations } from "next-intl"

const Mengungkapkan = () => {
    const t = useTranslations('privacy_policy.disclosure')

    const items = t.raw('items') as string[]
    const additional = t.raw('additional_info') as string[]

    const one = additional[0]
    const two = additional[1]
    const three = additional[2]

    const a = items[0]
    const b = items[1]
    const c = items[2]
    const d = items[3]

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

            <p className="text-sm pt-6">
                {a}<br />
                {b}<br />
                {c}<br />
                {d}
            </p>

            <p className="text-sm pt-6">
                {one}
            </p>

            <p className="text-sm pt-6">
                {two}
            </p>

            <p className="text-sm pt-6">
                {three}
            </p>

        </div>
    )
}

export default Mengungkapkan