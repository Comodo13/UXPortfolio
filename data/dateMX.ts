import flo1 from '../resource/icons/flo1.png'
import flo2 from '../resource/icons/flo2.png'
import flo3 from '../resource/icons/flo3.png'
import flo4 from '../resource/icons/flo4.png'
import face1 from '../resource/icons/face1.jpg'
import face2 from '../resource/icons/face2.jpg'
import face3 from '../resource/icons/face3.png'
import featureIconThour from '../resource/icons/toxic.jpg'
import featureIconTwo from '../resource/icons/nadwaga.jpg'
import featureIconOne from '../resource/icons/tmin.jpg'
import featureIconThree from '../resource/icons/sugar.jpg'
import { TimeToDateLabels } from '../components/Specials/Timer3d'
import insomnia from '../resource/icons/insomnia.jpg'
import krw from '../resource/icons/blood.jpg'

export const labelsTimer: TimeToDateLabels = {
  days: 'Dni',
  hours: 'Godziny',
  minutes: 'Minuty',
  seconds: 'Sekundy'
}
export const reviews = [
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
export const titleReviews = 'Opiniones de los clientes'
export const descriptionHero =
  'Pomaga szybko unormować ciśnienie krwi, reguluje pracę serca, pomaga oczyszczać naczynia krwionośne, pomaga przy dusznicy bolesnej, arytmii, nerwicy i poprawia pamięć.*'
export const titleHero = 'Powiedz "nie" problemom z sercem!'
export const buttonHero = 'Zamów teraz!'

export const titleFeature = 'Ultra Cardio X pomaga zapobiegać głównym przyczynom wysokiego ciśnienia krwi'
export const featureProduct = [
  {
    name: 'Przeciążony układ nerwowy(stres, bezsenność itp.)',
    description:
      'Ultra Cardio X łagodzi niepokój dzięki kobalaminie oraz wyciągom z korzenia waleriany i owoców głogu.*',
    imageSrc: insomnia,
    imageAlt: 'Przeciążony układ nerwowy(stres, bezsenność itp.)',
    bgColor: 'black',
    textColor: 'white'
  },
  {
    name: 'Nadwaga',
    description:
      'Ultra Cardio X wspomaga odchudzanie, poprawia trawienie, działa żółciopędnie, normalizuje metabolizm lipidów i obniża poziom cholesterolu we krwi dzięki wyciągowi z korzenia pokrzywy.*',
    imageSrc: featureIconTwo,
    imageAlt: 'Nadwaga',
    bgColor: 'white',
    textColor: 'black'
  },
  {
    name: 'Podwyższony poziom cukru we krwi',
    description:
      'Chlorofil zawarty w pokrzywie działa stymulująco na układ odpornościowy i pomaga w gojeniu uszkodzonych tkanek. Badania na zwierzętach wykazały, że napary z liści pokrzywy mogą obniżać poziom cukru u diabetyków, zwiększać poziom hemoglobiny i normalizować funkcje układu krążenia.*',
    imageSrc: featureIconThree,
    imageAlt: 'Podwyższony poziom cukru we krwi',
    bgColor: 'white',
    textColor: 'black'
  },
  {
    name: 'Toksyny w naczyniach krwionośnych',
    description:
      'Ultra Cardio X poprawia pracę serca, działa przeciwzapalnie i odtruwa naczynia krwionośne dzięki ekstraktom z tiaminy i korzenia pokrzywy.*',
    imageSrc: featureIconThour,
    imageAlt: 'Toksyny w naczyniach krwionośnych',
    bgColor: 'white',
    textColor: 'black'
  },
  {
    name: 'Normalizuje ciśnienie krwi',
    description:
      'Działa kardiotonicznie i przeciwskurczowo, umiarkowanie obniża ciśnienie krwi, uspokaja układ nerwowy dzięki wyciągom z owoców i liści głogu.*',
    imageSrc: krw,
    imageAlt: 'Normalizuje ciśnienie krwi',
    bgColor: 'white',
    textColor: 'black'
  }
]

export const titleFeatureSeven = 'Incasol - ¿Cómo funciona?'
export const buttonFeatureSeven = 'Comprar Incasol'
export const textFooter = '2023 Ultra Cardio X w Polsce'

export const incentives = [
  {
    name: 'Wypełnij formularz',
    description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    img: flo1
  },
  {
    name: 'Operator skontaktuje się z Tobą',
    description: 'Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate.',
    img: flo2
  },
  {
    name: 'Dostawa 2-4 dni roboczych*',
    description: "Look how fast that cart is going. What does this mean for the actual experience? I don't know.",
    img: flo3
  }
]

export const descriptionCookie = `żywamy plików cookies w celu zapewnienia funkcjonalności strony internetowej oraz, za Państwa zgodą, w celu personalizacji zawartości naszej strony internetowej. Klikając na przycisk "Rozumiem", wyrażają Państwo zgodę na stosowanie plików cookie oraz na przekazywanie danych o zachowaniu w sieci w celu wyświetlania ukierunkowanych reklam w sieciach społecznościowych i sieciach reklamowych na innych stronach. Więcej informacji znajduje się w naszej `
