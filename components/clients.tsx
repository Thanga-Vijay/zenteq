import Image from 'next/image'

const logos = [
  { src: '/Logo1_Full_With_Tagline.png', alt: 'Client Logo 1' },
  { src: '/Logo2_Icon_Z.png', alt: 'Client Logo 2' },
  { src: '/Logo4_Transparent.png', alt: 'Client Logo 3' },
]

export function Clients() {
  return (
    <section className="py-16 bg-light-gray">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-600">Trusted by teams shipping with modern stacks</p>
        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3 lg:gap-10 items-center">
          {logos.map((logo, i) => (
            <div key={i} className="flex justify-center">
              <div className="bg-white rounded-md shadow-sm p-3 border inline-flex">
                <Image src={logo.src} alt={logo.alt} width={120} height={40} className="h-8 w-auto object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


