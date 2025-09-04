import Image from 'next/image'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="-m-1.5 p-1.5">
      <span className="sr-only">Zenteq Pvt. Ltd.</span>
      <div className="flex items-center space-x-2">
        <Image
          src="/Logo2_Icon_Z.png"
          alt="Zenteq Logo"
          width={32}
          height={32}
          className="w-8 h-8"
        />
        <span className="text-xl font-bold text-navy">Zenteq</span>
      </div>
    </Link>
  )
}
