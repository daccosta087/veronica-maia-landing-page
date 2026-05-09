export default function VeronicaMaiaLandingPage() {
  const portfolio = [
    '/mnt/data/Essas são unhas naturais7.jpeg',
    '/mnt/data/Manutenção com mais de 30 dias.jpeg',
    '/mnt/data/unhas naturais.jpeg',
    '/mnt/data/WhatsApp Image 2026-03-25 at 13.36.06 (1).jpeg'
  ];

  const services = [
    'Manicure tradicional',
    'Pedicure',
    'Esmaltação em gel',
    'Alongamento de unhas',
    'Blindagem',
    'Spa dos pés'
  ];

  const prices = [
    'Blindagem de unha — R$ 100,00',
    'Banho de gel — R$ 140,00',
    'Manutenção (gel) — R$ 120,00',
    'Alongamento de unhas — R$ 170,00',
    'Manutenção (alongamento) — R$ 140,00',
    'Mudança de formato — R$ 30,00',
    'Decoração simples — R$ 10,00 por dedo',
    'Francesa — R$ 20,00',
    'Remoção de alongamento — R$ 50,00',
    'Remoção + manicure tradicional — R$ 90,00'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white text-gray-800">
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <img src="/mnt/data/390da132-36c9-4f44-918c-11e9ebd4459f.png" alt="Logo Verônica Maia" className="h-32 mx-auto mb-6 rounded-xl" />
        <h1 className="text-5xl font-serif font-bold text-rose-900 mb-4">Verônica Maia</h1>
        <p className="text-xl tracking-wide text-amber-700 mb-2">Manicure Profissional</p>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
          Elegância em cada detalhe. Unhas impecáveis para realçar sua beleza e autoestima.
        </p>
        <a href="https://wa.me/5519981595542" className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl shadow-lg transition">
          Agendar pelo WhatsApp
        </a>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-serif text-center text-rose-900 mb-10">Serviços</h2>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          {services.map((service) => (
            <div key={service} className="bg-white p-4 rounded-2xl shadow">{service}</div>
          ))}
        </div>
      </section>

      <section className="bg-rose-50 py-16 px-6">
        <h2 className="text-3xl font-serif text-center text-rose-900 mb-10">Tabela de Valores</h2>
        <div className="max-w-3xl mx-auto space-y-3">
          {prices.map((price) => (
            <div key={price} className="bg-white p-4 rounded-xl shadow text-center">{price}</div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-serif text-center text-rose-900 mb-10">Portfólio</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {portfolio.map((src, i) => (
            <img key={i} src={src} alt={`Portfólio ${i + 1}`} className="w-full rounded-2xl shadow-md" />
          ))}
        </div>
      </section>

      <section className="bg-rose-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-serif text-rose-900 mb-4">Local de Atendimento</h2>
        <p className="text-gray-700 text-lg">Rua Afonso Pena, 58 (dentro do Antigo Seu Rosa)</p>
        <p className="text-gray-700 mb-6">Uberlândia - MG</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="https://wa.me/5519981595542" className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-2xl shadow-lg transition">
            Reservar meu horário
          </a>
          <a href="https://instagram.com/veronicamanicureudia" className="inline-block bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-2xl shadow-lg transition">
            Ver mais no Instagram
          </a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-serif text-center text-rose-900 mb-10">O que nossas clientes dizem</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-700 italic mb-4">“Excelente!! Uma profissional incrível! Super atenciosa, dedicada e com preço muito bom. Recomendo demais.”</p>
            <p className="font-semibold text-rose-900">Felipe Henrique</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-700 italic mb-4">“Excelente profissional. Unhas sempre perfeitas e duram muito tempo sem estragar.”</p>
            <p className="font-semibold text-rose-900">Kawoma Silva</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-700 italic mb-4">“Melhor manicure no centro de Uberlândia! Fácil acesso, estacionamento gratuito e muita agilidade no atendimento.”</p>
            <p className="font-semibold text-rose-900">Carlos Alberto Da Costa</p>
          </div>
        </div>
      </section>
    </div>
  )
}
