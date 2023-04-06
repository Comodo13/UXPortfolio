import Link from 'next/link'

type Props = {
  text: string
}

const navigation = {
  main: [
    { name: 'Condiciones generales', href: '/terms' },
    { name: 'Política de privacidad', href: '/policy' }
  ]
}

export default function Footer(props: Props) {
  const { text } = props
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden py-4 px-8 sm:py-8 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map(item => (
            <div key={item.name} className="pb-6">
              <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; {text} , (S.A.C.). Wszystkie prawa zastrzeżone..
        </p>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
        *DISCLAIMER: Ten produkt nie jest przeznaczony do zastąpienia profesjonalnej porady medycznej, diagnozy lub leczenia. Wszelkie pytania dotyczące stanu zdrowia należy zawsze konsultować z lekarzem lub innym wykwalifikowanym pracownikiem medycznym.
        </p>
      </div>
    </footer>
  )
}
