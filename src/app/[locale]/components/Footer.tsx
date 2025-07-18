"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations('footer')

  const [isInKebijakan, setIsInKebijakan] = useState(false)
  const [isInTentang, setIsInTentang] = useState(false)
  const pathName = usePathname()

  useEffect(() => {
    setIsInKebijakan(pathName.startsWith('/kebijakan-privasi') || pathName.includes('/kebijakan-privasi'));
    setIsInTentang(pathName.startsWith('/tentang') || pathName.includes('/tentang'));
  }, [pathName]);

  return (
    <footer className={`${isInKebijakan || isInTentang ? 'bg-white' : 'bg-[#55B4E5]'} text-[#fdb739] relative overflow-hidden`}>
      <div className={`max-w-7xl mx-auto bg-white rounded-t-2xl p-15 ${isInKebijakan ? '' : 'shadow-2xl'}`}>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <Image loading="lazy" src="/images/logo.webp" alt="Jaja.id Logo" width={120} height={40} />
          </div>

          <div>
            <h3 className="text-lg font-semibold uppercase mb-4">{t('company.name')}</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><Link href="/tentang" className="hover:text-[#fdb739]">{t('company.links.about')}</Link></li>
              <li><Link href="/kebijakan-privasi" className="hover:text-[#fdb739]">{t('company.links.privacy')}</Link></li>
            </ul>
          </div>


          <div>
            <h3 className="text-lg font-semibold uppercase mb-4">{t('socialMedia.title')}</h3>
            <div className="flex gap-4 mb-8">
              <Link target="_blank" href="https://api.whatsapp.com/send?phone=6287888337555"><Image loading="lazy" src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp Logo" width={32} height={32} /></Link>
              <Link target="_blank" href="https://web.facebook.com/jajaidofficial"><Image loading="lazy" src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook Logo" width={32} height={32} /></Link>
              <Link target="_blank" href="https://www.instagram.com/jajaid.official/"><Image loading="lazy" src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram Logo" width={32} height={32} /></Link>
              <Link target="_blank" href="https://www.tiktok.com/@jajaidmarketplace"><Image loading="lazy" src="https://cdn-icons-png.flaticon.com/512/3046/3046122.png" alt="TikTok Logo" width={32} height={32} /></Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold uppercase mb-4">{t('shipping.title')}</h3>
            <div className="flex flex-wrap gap-3">
              <Image src="/images/jnt-logo.webp" loading="lazy" alt="J&T Logo" width={50} height={24} />
              <Image src="/images/sicepat-logo.webp" loading="lazy" alt="SiCepat Logo" width={50} height={24} />
              <Image src="/images/bca-logo.webp" alt="BCA Logo" loading="lazy" width={40} height={20} />
              <Image src="/images/mandiri-logo.webp" loading="lazy" alt="Mandiri Logo" width={40} height={20} />
              <Image src="/images/cimb-logo.webp" loading="lazy" alt="CIMB Logo" width={40} height={20} />
              <Image src="/images/bni-logo.webp" alt="BNI Logo" loading="lazy" width={40} height={20} />
              <Image src="/images/visa-logo.webp" alt="VISA Logo" loading="lazy" width={40} height={20} />
              <Image src="/images/master-logo.webp" alt="MasterCard Logo" loading="lazy" width={40} height={20} />
              <Image src="/images/gopay-logo.webp" alt="GoPay Logo" loading="lazy" width={40} height={20} />
            </div>
          </div>

        </div>

        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold uppercase mb-4">{t('download.title')}</h3>
          <div className="flex justify-center gap-4">
            <Link href={"https://apps.apple.com/us/app/jaja-id/id6572288992"} target="_blank">
              <Image src="/images/appstore-logo.webp" alt="App Store Logo" loading="lazy" width={150} height={45} />
            </Link>

            <Link href={"https://play.google.com/store/apps/details?id=com.jajaidbuyer"} target="_blank">
              <Image src="/images/playstore-logo.webp" alt="Play Store Logo" loading="lazy" width={150} height={45} />
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-700">
          © {new Date().getFullYear()} Jaja.id. {t('copyright')}
        </div>
      </div>
    </footer>
  );
}

