"use client";

// import komponen & section
import Footer from "./components/Footer";
import Products from "./layouts/Products";
import Pengiriman from "./layouts/PengirimanCepat";
import HeroBanner from "./layouts/Hero";
import Header from "./components/header";
import Events from "./layouts/Event";
import FeaturesSection from "./layouts/Features";
import Gratis from "./layouts/GratisOngkir";
import Pembayaran from "./layouts/PembayaranAman";
import Dijamin from "./layouts/DijaminOri";
import Cta from "./layouts/CTA";

export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-white">

        <HeroBanner />

        <FeaturesSection />

        <Events />

        <Pengiriman />

        <Gratis />

        <Pembayaran />

        <Dijamin />

        <Products />

        <Cta />

      </main>

      <Footer />
    </>
  );
}
