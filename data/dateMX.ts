import flo1 from '../resource/icons/flo1.png'
import flo2 from '../resource/icons/flo2.png'
import flo3 from '../resource/icons/flo3.png'
import flo4 from '../resource/icons/flo4.png'
import face1 from '../resource/icons/face1.jpg'
import face2 from '../resource/icons/face2.jpg'
import face3 from '../resource/icons/face3.png'
import featureIconThour from '../resource/icons/amarant.jpeg'
import featureIconTwo from '../resource/icons/obl.jpg'
import featureIconOne from '../resource/icons/tmin.jpg'
import featureIconThree from '../resource/icons/boyar.jpg'
import { TimeToDateLabels } from '../components/Specials/Timer3d'

export const labelsTimer: TimeToDateLabels = {
  days: 'Días',
  hours: 'Horas',
  minutes: 'Minutos',
  seconds: 'Segundos'
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
  'Diolix es un 100% natural gotas para la diabetes. Seguro a cualquier edad. Restaura la sensibilidad de las células a la insulina, normaliza los niveles de azúcar en sangre, estimula la producción de hemoglobina y ayuda a transportar el oxígeno de los glóbulos rojos a los tejidos.*'
export const titleHero = 'Diolix - ¡La solución definitiva para la vista!'
export const buttonHero = 'COMPRAR AHORA'

export const titleFeature = 'Composición de Incasol:'
export const featureProduct = [
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

export const titleFeatureSeven = 'Incasol - ¿Cómo funciona?'
export const buttonFeatureSeven = 'Comprar Incasol'
export const textFooter = '2023 Dioxol en Mexico.'

export const incentives = [
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
