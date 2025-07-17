import { useTranslations } from "next-intl"

const DataPribadi = () => {
    const t = useTranslations('privacy_policy.personal_data_collection')

    const items = t.raw('items') as string[]
    const additional = t.raw('additional_info') as string[]

    const a = items[0]
    const b = items[1]
    const c = items[2]
    const d = items[3]
    const e = items[4]
    const f = items[5]
    const g = items[6]
    const h = items[7]
    const i = items[8]

    const one = additional[0]
    const two = additional[1]
    const three = additional[2]

    return (
        <div className="py-10 px-5 sm:px-10 md:px-30 lg:px-50 bg-gray-100">
            <h1 className="font-bold text-2xl">
                <span className="bg-gradient-to-r from-gray-800 to-[#ED5625] bg-clip-text text-transparent">
                    {t('title')}
                </span>
            </h1>

            <p className="text-sm pt-8">
                {t('description')}
            </p>

            <p className="text-sm pt-6">
                (a) {a}<br />
                (b) {b}<br />
                (c) {c}<br />
                (d) {d}<br />
                (e) {e}<br />
                (f) {f}<br />
                (g) {g}<br />
                (h) {h}<br />
                (i) {i}
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

export default DataPribadi