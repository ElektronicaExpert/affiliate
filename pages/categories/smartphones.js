import RatingStars from '../../components/RatingStars'

export default function Smartphones() {
  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-4">Smartphones & Accessoires</h1>
      <p>Bekijk hier de beste smartphones en accessoires zoals hoesjes, laders en screenprotectors.</p>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">iPhone 14 Pro</h2>
        <RatingStars rating={5} />
        <p className="mb-4">De nieuwste iPhone met uitstekende prestaties en camera.</p>
      </div>
    </main>
  )
}
