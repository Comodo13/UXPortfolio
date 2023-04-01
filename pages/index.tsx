import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import { TimeToDateLabels } from '../components/Specials/Timer3d'
import ContactOne from '../components/Contacts/ContactOne'
import Modal from '../components/Modals/ModalOne'
import product from '../resource/icons/product.png'
import HeroTwo from '../components/Heros/HeroTwo'
import backgroundHero from '../resource/bg/doctor.jpg'

const labelsTimer: TimeToDateLabels = {
  days: 'Días',
  hours: 'Horas',
  minutes: 'Minutos',
  seconds: 'Segundos'
}
const descriptionHero =
  'Dioxil es un complejo de extractos naturales, que por su acción ayuda a prevenir las deficiencias visuales. Es un producto único que afecta al funcionamiento de los músculos del globo ocular, lo que ayuda a restablecer el enfoque normal y devolver una visión clara, nítida y voluminosa..'
const titleHero = 'Dioxil'
const buttonHero = 'PEDIR DIOLIX'
const Home: NextPage = () => {
  const [openModal, setOpenModal] = useState(false)
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  return (
    <>
      <Head>
        <title>Incasol oficiale en Chile</title>
        <meta
          name="Incasol"
          content="Incasol capsulas"
          title="Incasol Capsulas en Perú.  comprar más barato - Incasol Chile. Envíos gratis . © Suplemento Nutricional Incasol 60 Capsulas ❤️"
        />
        <meta
          name=" Incasol 60 Caps"
          content="Incasol para la hipertensión: ¿funciona realmente? Descubre para qué sirve y el precio en la web oficial."
          title="Comprar  Incasol 60 Caps barato. Precios, opiniones. ¡Ordene Incasol Ahora!"
        />
        <meta
          name="Incasol"
          content=" Incasol 60 Caps en Chile.Envíos gratis  © Incasol 60 Caps ❤️"
          title="Incasol - cápsulas para la hipertensión Chile"
        />
        <meta
          name="Incasol"
          content="Incasol en Chile"
          title="Incasol
          "
        />
        <meta name="description" content="Incasol" title="Incasol - cápsulas para la hipertensión Chile" />
      </Head>
      <>
        <HeroTwo title={titleHero} description={descriptionHero} button={buttonHero} imageSrc={backgroundHero} />
        <ContactOne
          labelsTimer={labelsTimer}
          title="¡Atención! Promoción: ¡Obtenga un 50% de descuento!"
          price="34 990 CLP"
          imageSrc={product}
          imageAlt="Product"
          labelName="Nombre y apellidos*"
          labelPhone="Teléfono:*"
          placeholderName="Escribe tu nombre"
          placeholderPhone="Ingrese su número de teléfono:"
          priceDiscount="69 980 CLP"
          btnTitle="¡Ordenar ahora!"
          patternEmail="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          setOpen={setOpenModal}
          setError={setError}
          setIsLoading={setIsLoading}
          href="contact"
        />
        <Modal
          modalTitleError={'Error'}
          modalTitleSuccess={'Gracias por su consulta'}
          button={'Gracias'}
          modalSuccess={'Pronto nos pondremos en contacto.'}
          modalError={'Gracias'}
          setOpen={setOpenModal}
          error={error}
          open={openModal}
          isLoading={isLoading}
        />
      </>
    </>
  )
}

export default Home
