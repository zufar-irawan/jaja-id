import { useTranslations } from "next-intl"

const Informasi = () => {
    const t = useTranslations('privacy_policy.information_usage')

    const items = t.raw('items') as string[]
    const additional = t.raw('additional_info') as string[]

    const one = additional[0]
    const two = additional[1]

    const a = items[0]
    const b = items[1]
    const c = items[2]
    const d = items[3]
    const e = items[4]
    const f = items[5]
    const g = items[6]
    const h = items[7]
    const i = items[8]
    const j = items[9]
    const k = items[10]
    const l = items[11]
    const m = items[12]
    const n = items[13]
    const o = items[14]
    const p = items[15]
    const q = items[16]
    const r = items[17]
    const s = items[18]
    const ti = items[19]
    const u = items[20]

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

            <p className="text-sm pt-8">
                {a}<br />
                {b}<br />
                {c}<br />
                {d}<br />
                {e}<br />
                {f}<br />
                {g}<br />
                {h}<br />
                {i}<br />
                {j}<br />
                {k}<br />
                {l}<br />
                {m}<br />
                {n}<br />
                {o}<br />
                {p}<br />
                {q}<br />
                {r}<br />
                {s}<br />
                {ti}<br />
                {u}<br />
                {one}
            </p>

            <p className="text-sm pt-8">
                {two}
            </p>

        </div>
    )
}

export default Informasi