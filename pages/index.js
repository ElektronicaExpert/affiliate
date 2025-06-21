import Link from 'next/link'

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-4">Welkom bij Elektronica Expert</h1>
      <p className="mb-6">Ontdek reviews, vergelijkingen en koopgidsen voor de nieuwste elektronica.</p>
      <ul className="list-disc ml-6">
        <li><Link href="/categories/smartphones">Smartphones & Accessoires</Link></li>
        <li><Link href="/categories/audio">Audioapparatuur</Link></li>
        <li><Link href="/categories/cameras">Camera’s & Cameratoebehoren</Link></li>
        <li><Link href="/categories/laptops">Laptops & Onderdelen</Link></li>
        <li><Link href="/categories/gaming">Gaming Consoles & Games</Link></li>
      </ul>
    </main>
  )
}
