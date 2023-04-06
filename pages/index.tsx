import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import ContactOne from '../components/Contacts/ContactOne'
import Modal from '../components/Modals/ModalOne'
import ServiceTwo from '../components/Services/ServiceTwo'
import product from '../resource/icons/product.png'
import HeroTwo from '../components/Heros/HeroTwo'
import backgroundHero from '../resource/bg/bg.png'
import ReviewsOne from '../components/Reviews/ReviewsOne'
import FeatureThree from '../components/Features/FeatureThree'
import featureIconTwo from '../resource/icons/obl.jpg'
import featureIconOne from '../resource/icons/tmin.jpg'
import featureIconThree from '../resource/icons/boyar.jpg'
import FeatureSeven from '../components/Features/FeatureSeven'
import ModalInfo from '../components/Modals/ModalInfo'
import Smartlook from 'smartlook-client'
import FooterOne from '../components/Footers/FooterOne'
import FeatureFive from '../components/Features/FeatureFive'
import alarm from '../resource/icons/alarm.png'
import heart from '../resource/icons/heart.png'
import dna from '../resource/icons/dna.png'
import molec from '../resource/icons/molec.png'
import Testimonials, { CardType } from '../components/Features/FeatureFive'


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

const description = 'Korzyści z Ultra Cardio X:'
const cards: CardType[] = [
  {
    heading: 'Szybka pomoc',
    text: 'Stymuluje szybką normalizację ciśnienia krwi*.',
    img: alarm
  },
  {
    heading: 'Nie powoduje skoków ciśnienia',
    text: 'Pomaga regulować pracę serca.*',
    img: heart
  },
  {
    heading: 'Kompleksowa poprawa stanu zdrowia',
    text: 'Pomaga przy arytmii, nerwicy, obniża poziom cholesterolu we krwi, poprawia pamięć i sprzyja odzyskiwaniu mowy i ruchu po udarach.*',
    img: dna
  },
  {
    heading: 'Skuteczny wynik',
    text: 'Przywraca elastyczność naczyń krwionośnych, naturalnie normalizuje ciśnienie*',
    img: molec
  }
]

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
      name: 'Przeciążony układ nerwowy(stres, bezsenność itp.)',
      description: 'Ultra Cardio X łagodzi niepokój dzięki kobalaminie oraz wyciągom z korzenia waleriany i owoców głogu.*.',
      imageSrc: featureIconOne,
      imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
      openModal: setOpenModalInfoOne
    },
    {
      id: 2,
      name: 'Toksyny w naczyniach krwionośnych',
      description: 'Ultra Cardio X poprawia pracę serca, działa przeciwzapalnie i odtruwa naczynia krwionośne dzięki ekstraktom z tiaminy i korzenia pokrzywy.*',
      imageSrc: featureIconTwo,
      imageAlt: 'Front of plain black t-shirt.',
      openModal: setOpenModalInfoTwo
    },
    {
      id: 3,
      name: 'Nadwaga',
      description: 'Ultra Cardio X wspomaga odchudzanie, poprawia trawienie, działa żółciopędnie, normalizuje metabolizm lipidów i obniża poziom cholesterolu we krwi dzięki wyciągowi z korzenia pokrzywy.*.',
      imageSrc: featureIconTwo,
      imageAlt: 'Front of plain black t-shirt.',
      openModal: setOpenModalInfoTwo
    },
    {
      id: 4,
      name: 'Normalizuje ciśnienie krwi',
      description: 'Działa kardiotonicznie i przeciwskurczowo, umiarkowanie obniża ciśnienie krwi, uspokaja układ nerwowy dzięki wyciągom z owoców i liści głogu.*',
      imageSrc: featureIconThree,
      imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
      openModal: setOpenModalInfoThree
    },
    {
      id: 4,
      name: 'Podwyższony poziom cukru we krwi',
      description: 'Chlorofil obecny w pokrzywie działa stymulująco na układ odpornościowy, pomaga w gojeniu uszkodzonych tkanek i wspomaga wzrost włosów. Badania na zwierzętach wykazały, że napary z liści pokrzywy mogą obniżać poziom cukru u cukrzyków, podnosić poziom hemoglobiny i normalizować układ sercowo-naczyniowy.*',
      imageSrc: featureIconThree,
      imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
      openModal: setOpenModalInfoThree
    },

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
          title="Uwaga!! Promocja: skorzystaj z 50% rabatu!"
          price="147 PLN"
          imageSrc={product}
          imageAlt="Product"
          labelName="Imię*"
          labelPhone="Telefon:*"
          placeholderName="Wpisz swoją nazwę:"
          placeholderPhone="Wpisz swój numer telefonu:"
          priceDiscount="294 PLN"
          btnTitle="Zamów teraz!"
          patternEmail="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          setOpen={setOpenModal}
          setError={setError}
          setIsLoading={setIsLoading}
          href="contact"
        />
        <Modal
          modalTitleError={'Error'}
          modalTitleSuccess={'Dziękujemy za zapytanie'}
          button={'Dziękuję'}
          modalSuccess={'Wkrótce będziemy w kontakcie'}
          modalError={'Dziękuję'}
          setOpen={setOpenModal}
          error={error}
          open={openModal}
          isLoading={isLoading}
        />
        <Testimonials cards={cards} title={description} />
        <FeatureThree title={titleFeature} features={featureProduct} />
        {/* <ReviewsOne title={titleReviews} reviews={reviews} /> */}
        {/* <FeatureSeven title={titleFeatureSeven} buttonTitle={buttonFeatureSeven} features={featuresSeven} /> */}
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
          title="Uwaga!! Promocja: skorzystaj z 50% rabatu!"
          price="147 PLN"
          imageSrc={product}
          imageAlt="Product"
          labelName="Imię*"
          labelPhone="Telefon:*"
          placeholderName="Wpisz swoją nazwę:"
          placeholderPhone="Wpisz swój numer telefonu:"
          priceDiscount="294 PLN"
          btnTitle="Zamów teraz!"
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
