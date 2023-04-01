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

export default function Footer() {
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
          &copy; 2023 Incasol en Chile, (S.A.C.). Todos los derechos reservados.
        </p>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          *DISCLAIMER: Este producto no pretende sustituir las recomendaciones, los diagnósticos o los tratamientos
          médicos profesionales. Consulta siempre a tu médico o a otro profesional médico calificado para cualquier
          pregunta que puedas tener sobre tu estado de salud.
        </p>
      </div>
    </footer>
  )
}
