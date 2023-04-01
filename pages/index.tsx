import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import { TimeToDateLabels } from '../components/Specials/Timer3d'
import ContactOne from '../components/Contacts/ContactOne'
import Modal from '../components/Modals/ModalOne'
import product from '../resource/icons/product.png'
import HeroTwo from '../components/Heros/HeroTwo'
import backgroundHero from '../resource/bg/doctor.jpg'
import ReviewsOne from '../components/Reviews/ReviewsOne'
import face1 from '../resource/icons/face1.jpg'
import face2 from '../resource/icons/face2.jpg'
import face3 from '../resource/icons/face3.png'
import FeatureThree from '../components/Features/FeatureThree'
import featureIconThour from '../resource/icons/amarant.jpeg'
import featureIconTwo from '../resource/icons/obl.jpg'
import featureIconOne from '../resource/icons/tmin.jpg'
import featureIconThree from '../resource/icons/boyar.jpg'

const labelsTimer: TimeToDateLabels = {
  days: 'Días',
  hours: 'Horas',
  minutes: 'Minutos',
  seconds: 'Segundos'
}
const reviews = [
  {
    id: 1,
    rating: 5,
    content: `
      <p>
      Durante mucho tiempo no me decidía a pedir Zeaxan, pero después de leer sobre los efectos de los ingredientes en artículos médicos, dejé el pedido. Centro de llamadas rápido y eficaz, entrega gratuita, ¡pago después de recibir el producto! 
      ¡Llevo tomándolo unas semanas y no he tardado en obtener resultados!</p>
    `,
    date: 'Febrero 20, 2023',
    datetime: '2023-02-20',
    author: 'Angela Chavez',
    img: face3
  },
  {
    id: 2,
    rating: 5,
    content: `
      <p>
      Hola a todos, este es mi primer comentario de este tipo. Trabajo como programador, últimamente mi vista se ha resentido mucho, me duelen mucho los ojos después del trabajo. Decidí que había que hacer algo al respecto, investigué un poco en internet y di con Zeaxan. Llevo un tiempo tomándolo y no te lo vas a creer, ¡el dolor ha desaparecido y mi visión está mejor enfocada! Si usted tiene este tipo de problema, esto es lo que necesita..</p>
    `,
    date: 'Febrero 12, 2023',
    datetime: '2023-02-12',
    author: 'Manuel Alvarez',
    img: face1
  },
  {
    id: 3,
    rating: 5,
    content: `
      <p> A los 54 años, no esperaba que 1 cápsula al día pudiera hacer tanto para corregir mi vista</p>
    `,
    date: 'Diciembre 12, 2022',
    datetime: '2022-12-12',
    author: 'Salvador Garcia',
    img: face2
  }
]
const titleReviews = 'Opiniones de los clientes'
const descriptionHero =
  'Dioxil es un complejo de extractos naturales, que por su acción ayuda a prevenir las deficiencias visuales. Es un producto único que afecta al funcionamiento de los músculos del globo ocular, lo que ayuda a restablecer el enfoque normal y devolver una visión clara, nítida y voluminosa..'
const titleHero = 'Diolix - ¡La solución definitiva para la vista!'
const buttonHero = 'PEDIR DIOLIX'

const titleFeature = 'Composición de Incasol:'
const featureProduct = [
  {
    name: 'Extracto de Comino Negro',
    description:
      'Participa en el proceso de normalización de la tensión arterial. Establece los valores del nivel alcanzado. Controla el curso de los procesos biológicos en el organismo que impiden la reaparición de una crisis hipertensiva.',
    imageSrc: featureIconOne,
    imageAlt: 'Comino Negro',
    bgColor: 'black',
    textColor: 'white'
  },
  {
    name: 'Extracto de Espino Amarillo',
    description:
      'Previene la formación de coágulos en los vasos sanguíneos del organismo. Neutraliza el riesgo de obstrucción de los conductos de las venas.',
    imageSrc: featureIconTwo,
    imageAlt: 'Espino Amarillo',
    bgColor: 'white',
    textColor: 'black'
  },
  {
    name: 'Extracto de espino blanco',
    description:
      'Este ingrediente tiene un efecto calmante. Ante situaciones de estrés, el organismo deja de reaccionar con un aumento de la tensión arterial.',
    imageSrc: featureIconThree,
    imageAlt: 'Extracto de espino blanco',
    bgColor: 'white',
    textColor: 'black'
  },
  {
    name: 'Extracto de semillas de amaranto',
    description:
      'Limpia la estructura sanguínea de acumulaciones nocivas de toxinas e impurezas. Las partículas insalubres se acumulan en la estructura de los órganos internos como resultado del tabaquismo, el abuso del alcohol.',
    imageSrc: featureIconThour,
    imageAlt: 'Extracto de semillas de amaranto',
    bgColor: 'white',
    textColor: 'black'
  }
]

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
        <FeatureThree title={titleFeature} features={featureProduct} />
        <ReviewsOne title={titleReviews} reviews={reviews} />
      </>
    </>
  )
}

export default Home
