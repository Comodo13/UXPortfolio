import type { NextPage } from 'next'
import pulse from '../resource/icons/pulse.png'
import bg from '../resource/bg/incbg3.png'
import product from '../resource/icons/zeaxan.jpg'
import organic from '../resource/icons/organic.png'
import gil from '../resource/icons/gil.jpg'
import eyeinv from '../resource/icons/eyeinv.png'
import eyebio from '../resource/icons/obl.jpg'
import lewoman from '../resource/icons/tmin.jpg'
import img1 from '../resource/icons/bery.png'
import img2 from '../resource/icons/flower.png'
import img3 from '../resource/icons/oil.png'
import img4 from '../resource/icons/salad.png'
import pill1 from '../resource/icons/caps.png'
import prodv from '../resource/icons/prodv.png'
import pill2 from '../resource/icons/fork.png'
import pill3 from '../resource/icons/budiksmaller.png'
import nature1 from '../resource/icons/nature1.png'
import nature2 from '../resource/icons/nature2.png'
import nature3 from '../resource/icons/nature3.png'
import Testimonials, { CardType } from '../components/Features/FeatureFive'
import OrderFlow from '../components/Services/ServiceOne'
import iconSubPrice from '../resource/icons/discount.png'
import parcel from 'resource/icons/parcel.png'
import order from 'resource/icons/order.png'
import call from 'resource/icons/call.png'
import wallet from 'resource/icons/wallet.png'
import Footer from '../components/Footers/FooterOne'
import Comments from '../components/Reviews/ReviewsOne'
import benefit1 from '../resource/icons/sleep.png'
import benefit2 from '../resource/icons/vari.png'
import benefit3 from '../resource/icons/cm.png'
import benefit4 from '../resource/icons/needle.png'
import benefit5 from '../resource/icons/parcel.png'
import Delivery from '../components/Services/ServiceTwo'
import { useState } from 'react'
import TimerOne from '../components/Banners/TimerOne'
import ContactOne from '../components/Contacts/ContactOne'
import Modal from '../components/Modals/ModalOne'
import HeroTwo from '../components/Heros/HeroTwo'
import flo1 from '../resource/icons/flo1.png'
import flo2 from '../resource/icons/flo2.png'
import flo3 from '../resource/icons/flo3.png'
import flo4 from '../resource/icons/flo4.png'
import FeatureTwo from '../components/Features/FeatureTwo'
import FeatureOne from '../components/Features/FeatureOne'
import FeatureSix from '../components/Features/FeatureSix'
import ProductFeature from '../components/Features/FeatureThree'
import CtaOne from '../components/Ctas/CtaOne'
import noga5 from '../resource/icons/noga5.png'
import Ginkgobiloba from '../resource/icons/alarm.png'
import centella from '../resource/icons/heart.png'
import menthol from '../resource/icons/dna.png'
import ruscus from '../resource/icons/molec.png'
import variquitnobg from '../resource/icons/slinc.png'
import Head from 'next/head'
import art from '../resource/icons/boyar.jpg'
import norm2 from '../resource/icons/norm2.png'
import HeroThree from '../components/Heros/HeroThree'
import normbgtest from '../resource/icons/normbgtest.png'
import insomnia1 from '../resource/icons/insomnia1.png'
import varic1 from '../resource/icons/varic1.png'
import bld1 from '../resource/icons/bld1.png'
import amarant from '../resource/icons/amarant.jpeg'
import ctbg from '../resource/icons/ctbg.png'

const description = 'Beneficios de Incasol©:'
const cards: CardType[] = [
  {
    heading: 'Ayuda rápida',
    text: 'Estimula la rápida normalización de la tensión arterial*.',
    img: Ginkgobiloba
  },
  {
    heading: 'No provoca picos de presión',
    text: 'Contribuye a regular el funcionamiento del corazón.*',
    img: centella
  },
  {
    heading: 'Mejora la salud de forma integral',
    text: 'Ayuda con la angina de pecho, la arritmia, la neurosis, mejora la memoria y ayuda en la recuperación del habla y el movimiento después de accidentes cerebrovasculares.*',
    img: menthol
  },
  {
    heading: 'Resultado eficaz sin efectos secundarios',
    text: 'Composición natural de ingredientes respetuosos con el medio ambiente.*',
    img: ruscus
  }
]
const description2 = 'Incasol ayuda a prevenir las principales causas de hipertensión'
const cards2: CardType[] = [
  {
    heading: 'Tensión del sistema nervioso(estrés, insomnio, etc.)',
    text: 'Incasol alivia la ansiedad gracias a su contenido en extracto de espino blanco.*',
    img: insomnia1
  },
  {
    heading: 'Varices y trombosis venosa',
    text: 'Incasol mejora la circulación sanguínea, ayuda a deshacer los coágulos y refuerza las paredes de los vasos sanguíneos gracias a sus extractos de corteza de sauce, espino amarillo y comino negro.*',
    img: varic1
  },
  {
    heading: 'Toxinas en los vasos sanguíneos',
    text: 'Incasol mejora la función cardiaca, limpia los vasos sanguíneos de impurezas gracias a los extractos de semillas de amaranto y espino blanco.*',
    img: bld1
  }
]
const flow = [
  {
    title: '1 cápsula',
    img: pill1
  },
  {
    title: 'tomar un vaso de agua',
    img: pill2
  }
]

const featruress = [
  {
    name: 'Extracto de Comino Negro',
    description:
      'Participa en el proceso de normalización de la tensión arterial. Establece los valores del nivel alcanzado. Controla el curso de los procesos biológicos en el organismo que impiden la reaparición de una crisis hipertensiva.',
    imageSrc: lewoman,
    imageAlt: 'Comino Negro',
    bgColor: 'black',
    textColor: 'white'
  },
  {
    name: 'Extracto de Espino Amarillo',
    description:
      'Previene la formación de coágulos en los vasos sanguíneos del organismo. Neutraliza el riesgo de obstrucción de los conductos de las venas.',
    imageSrc: eyebio,
    imageAlt: 'Espino Amarillo',
    bgColor: 'white',
    textColor: 'black'
  },
  {
    name: 'Extracto de espino blanco',
    description:
      'Este ingrediente tiene un efecto calmante. Ante situaciones de estrés, el organismo deja de reaccionar con un aumento de la tensión arterial.',
    imageSrc: art,
    imageAlt: 'Extracto de espino blanco',
    bgColor: 'white',
    textColor: 'black'
  },
  {
    name: 'Extracto de semillas de amaranto',
    description:
      'Limpia la estructura sanguínea de acumulaciones nocivas de toxinas e impurezas. Las partículas insalubres se acumulan en la estructura de los órganos internos como resultado del tabaquismo, el abuso del alcohol.',
    imageSrc: amarant,
    imageAlt: 'Extracto de semillas de amaranto',
    bgColor: 'white',
    textColor: 'black'
  }
]
const features2 = [
  {
    name: 'Edad'
  },
  {
    name: 'Cargas excesivas de los ojos'
  },
  {
    name: 'Varios procesos patológicos'
  },
  {
    name: 'Suministro insuficiente de sangre'
  },
  {
    name: 'Miastenia y debilidad muscular'
  }
]
const propss = {
  title: 'Composición de Incasol:',
  features: featruress
}
const reviews = [
  {
    id: 1,
    rating: 5,
    content: `
      <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
    `,
    date: 'July 16, 2021',
    datetime: '2021-07-16',
    author: 'Max Engineer',
    img: pill1
  },
  {
    id: 2,
    rating: 5,
    content: `
      <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
    `,
    date: 'July 12, 2021',
    datetime: '2021-07-12',
    author: 'Nikita alkash',
    img: pill1
  },
  {
    id: 3,
    rating: 4,
    content: `
      <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
    `,
    date: 'July 12, 2021',
    datetime: '2021-07-12',
    author: 'Hector Alkogolis',
    img: pill1
  }
]

const incentives = [
  {
    name: 'Rellene el formulario en el sitio',
    description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    img: flo1
  },
  {
    name: 'Un operador se pondrá en contacto con usted',
    description: 'Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate.',
    img: flo2
  },
  {
    name: 'Le enviaremos su paquete gratuitamente',
    description: "Look how fast that cart is going. What does this mean for the actual experience? I don't know.",
    img: flo3
  },
  {
    name: 'Pago solo después de recibir el producto',
    description: "Buy them for your friends, especially if they don't like our store. Free money for us, it's great.",
    img: flo4
  }
]
const ctaData = {
  title: 'Incasol©',
  heading: '¡SIN OMG! COMPOSICIÓN NATURAL!',
  description:
    'La fórmula de Incasol es única y utiliza exclusivamente ingredientes naturales. Recetas de remedios eficaces fueron recogidos de diversas partes del mundo en las fuentes de la medicina popular y con la ayuda de los conocimientos farmacológicos encontraron aplicación en este remedio.',
  img: ctbg,
  buttonText: 'ordenar ahora'
}
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
      <HeroTwo
        imageSrc={bg}
        title="¡Di no a los problemas cardiacos!"
        description="Normaliza rápidamente la tensión arterial, ayuda a regular el corazón, ayuda a purificar los vasos sanguíneos, ayuda en caso de angina de pecho, arritmia, neurosis y mejora la memoria.*"
        button="¡Ordenar ahora!"
      />
      <Testimonials cards={cards} title={description} />
      <ContactOne
        title="¡Atención! Promoción: ¡Obtenga un 50% de descuento!"
        price="34 990 CLP"
        imageSrc={variquitnobg}
        imageAlt="Product"
        labelMail="Mail"
        labelName="Nombre y apellidos*"
        labelPhone="Teléfono:*"
        placeholderName="Escribe tu nombre"
        placeholderPhone="Ingrese su número de teléfono:"
        placeholderEmail="Mail"
        priceDiscount="69 980 CLP"
        btnTitle="¡Ordenar ahora!"
        patternEmail="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        setOpen={setOpenModal}
        setError={setError}
        setIsLoading={setIsLoading}
        href="contact"
      />
      <Testimonials cards={cards2} title={description2} />
      <CtaOne
        title={ctaData.title}
        description={ctaData.description}
        buttonText={ctaData.buttonText}
        img={ctbg}
        heading={ctaData.heading}
        href="#contact"
      />
      <ProductFeature title={propss.title} features={propss.features} description={''} />
      <FeatureSix />
      <Delivery incentives={incentives} />
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
      <ContactOne
        title="¡Atención! Promoción: ¡Obtenga un 50% de descuento!"
        price="34 990 CLP"
        imageSrc={variquitnobg}
        imageAlt="Product"
        labelMail="Mail"
        labelName="Nombre y apellidos*"
        labelPhone="Teléfono:*"
        placeholderName="Escribe tu nombre"
        placeholderPhone="Ingrese su número de teléfono:"
        placeholderEmail="Mail"
        priceDiscount="69 980 CLP"
        btnTitle="¡Ordenar ahora!"
        patternEmail="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        setOpen={setOpenModal}
        setError={setError}
        setIsLoading={setIsLoading}
        href="contact"
      />
      <Footer />
    </>
  )
}

export default Home
