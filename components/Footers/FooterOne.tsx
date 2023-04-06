import Link from 'next/link'

type Props = {
  text: string
}




export default function Footer(props: Props) {
  const { text } = props
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden py-4 px-8 sm:py-8 lg:px-8">
      
  <p className="mt-10 text-center text-md leading-5 text-gray-500">
          &copy; {text}. Wszystkie prawa zastrzeżone.
        </p>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
        *DISCLAIMER: Ten produkt nie jest przeznaczony do zastąpienia profesjonalnej porady medycznej, diagnozy lub leczenia. Wszelkie pytania dotyczące stanu zdrowia należy zawsze konsultować z lekarzem lub innym wykwalifikowanym pracownikiem medycznym.
        </p>
      </div>
    </footer>
  )
}
