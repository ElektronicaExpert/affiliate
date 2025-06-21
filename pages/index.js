
import Head from 'next/head'
import Link from 'next/link'
import '../styles/globals.css'

export default function Home() {
  const categories = [
    "Smartphones & Accessoires",
    "Audioapparatuur",
    "Camera’s & Cameratoebehoren",
    "Laptops & Onderdelen",
    "PC-accessoires & Peripherals",
    "Monitoren & Schermen",
    "Gaming Consoles & Games",
    "Gaming-accessoires",
    "Streaming & TV-apparatuur",
    "Smartwatches & Wearables",
    "Smart Home Apparaten",
    "Powerbanks & Laadaccessoires",
    "Printers & Scanners",
    "Retro & Vintage Elektronica",
    "DJ & Muziekapparatuur",
    "Auto Elektronica",
    "Kabels & Verbinders",
    "Netwerk & Wi-Fi",
    "Microfoons & Opname-apparatuur",
    "Onderhoud & Reinigingstools"
  ];

  return (
    <>
      <Head>
        <title>Elektronica Expert</title>
      </Head>
      <main className="p-6 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-blue-700">Welkom bij Elektronica Expert</h1>
        <p className="mb-6 text-lg">Ontdek reviews, vergelijkingen en koopgidsen voor de nieuwste elektronica.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <Link href="#" key={i} className="p-4 bg-white shadow-md rounded hover:bg-blue-100 transition">
              {cat}
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
