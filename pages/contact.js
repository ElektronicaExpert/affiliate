export default function Contact() {
  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-4">Contacteer ons</h1>
      <form action="https://formspree.io/f/xpzgrzzy" method="POST" className="space-y-4 max-w-md">
        <input type="email" name="email" placeholder="Jouw e-mailadres" className="border w-full p-2" required />
        <textarea name="message" placeholder="Je bericht..." className="border w-full p-2" rows="4" required></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">Verstuur</button>
      </form>
    </main>
  )
}
