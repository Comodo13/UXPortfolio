import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import ContactOne from '../components/Contacts/ContactOne'
import Modal from '../components/Modals/ModalOne'
import ServiceTwo from '../components/Services/ServiceTwo'
import product from '../resource/icons/product.png'
import HeroTwo from '../components/Heros/HeroTwo'
import backgroundHero from '../resource/bg/doctor.jpg'
import ReviewsOne from '../components/Reviews/ReviewsOne'
import FeatureThree from '../components/Features/FeatureThree'
import featureIconTwo from '../resource/icons/obl.jpg'
import featureIconOne from '../resource/icons/tmin.jpg'
import featureIconThree from '../resource/icons/boyar.jpg'
import FeatureSeven from '../components/Features/FeatureSeven'
import ModalInfo from '../components/Modals/ModalInfo'
import Smartlook from 'smartlook-client'
import FooterOne from '../components/Footers/FooterOne'

import {
  labelsTimer,
  featureProduct,
  titleHero,
  textFooter,
  titleFeature,
  titleFeatureSeven,
  titleReviews,
  reviews,
  descriptionHero,
  buttonHero,
  buttonFeatureSeven,
  incentives
} from '../data/dateMX'

const Home: NextPage = () => {
  const [openModal, setOpenModal] = useState(false)
  const [openModalInfoOne, setOpenModalInfoOne] = useState(false)
  const [openModalInfoTwo, setOpenModalInfoTwo] = useState(false)
  const [openModalInfoThree, setOpenModalInfoThree] = useState(false)
  const [openModalInfoFour, setOpenModalInfoFour] = useState(false)
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    Smartlook.init('e0cd33e3b82bae795b7c853978b6020466dd92a4')
  }, [])
  const featuresSeven = [
    {
      id: 1,
      name: 'Basic Tee 8-Pack',
      description: 'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
      imageSrc: featureIconOne,
      imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
      openModal: setOpenModalInfoOne
    },
    {
      id: 2,
      name: 'Basic Tee',
      description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
      imageSrc: featureIconTwo,
      imageAlt: 'Front of plain black t-shirt.',
      openModal: setOpenModalInfoTwo
    },

    {
      id: 3,
      name: 'Basic Tee 8-Pack',
      description: 'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
      imageSrc: featureIconThree,
      imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
      openModal: setOpenModalInfoThree
    }
  ]
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
        <FeatureSeven title={titleFeatureSeven} buttonTitle={buttonFeatureSeven} features={featuresSeven} />
        <ModalInfo
          setOpen={setOpenModalInfoOne}
          title="helllooo"
          open={openModalInfoOne}
          buttonTitle="close"
          description="jhgkhgkgkjgkjgkjgjkgjkgkgkgkgbkgbkkg"
          imageSrc={product}
          imageAlt="hell"
        />
        <ModalInfo
          setOpen={setOpenModalInfoTwo}
          title="helllooo"
          open={openModalInfoTwo}
          buttonTitle="close"
          description="jhgkhgkgkjgkjgkjgjkgjkgkgkgkgbkgbkkg"
          imageSrc={product}
          imageAlt="hell"
        />
        <ModalInfo
          setOpen={setOpenModalInfoThree}
          title="helllooo"
          open={openModalInfoThree}
          buttonTitle="close"
          description="jhgkhgkgkjgkjgkjgjkgjkgkgkgkgbkgbkkg"
          imageSrc={product}
          imageAlt="hell"
        />
        <ModalInfo
          setOpen={setOpenModalInfoFour}
          title="helllooo"
          open={openModalInfoFour}
          buttonTitle="close"
          description="jhgkhgkgkjgkjgkjgjkgjkgkgkgkgbkgbkkg"
          imageSrc={product}
          imageAlt="hell"
        />
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
        <ServiceTwo incentives={incentives} />
        <FooterOne text={textFooter} />
      </>
    </>
  )
}

export default Home
