


export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image_url:string[];
  rating:number;
  url_product:string;
}

export const products = [
  {
    id: 1,
    name: 'Apple Vision Pro 1024 Gb',
    price: 2903535,
    description: 'Apple Vision Pro, революционный пространственный компьютер, который органично сочетает цифровой контент с физическим миром, позволяя пользователям оставаться на связи с другими людьми.',
    image_url:["https://resources.cdn-kaspi.kz/img/m/p/h8e/h73/85124918935582.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/he2/h06/85124919001118.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h30/hd7/85124919263262.jpg?format=gallery-medium"],
    rating:0,
    url_product:"https://kaspi.kz/shop/p/apple-vision-pro-1024-gb-116503057/?c=750000000"
  },
  {
    id: 2,
    name: 'Realme Buds T100',
    price: 9045,
    description: 'Наушники TWS Realme Buds T100 быстро синхронизируются со смартфоном по беспроводной технологии Bluetooth, обеспечивая удобство прослушивания музыки и звонков. ',
    image_url:["https://resources.cdn-kaspi.kz/img/m/p/h70/h1a/65147416477726.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h4a/h5a/65147417002014.jpg?format=gallery-medium"],
    rating:5,
    url_product:"https://kaspi.kz/shop/p/realme-buds-t100-chernyi-107357596/?c=750000000"
  },
  {
    id: 3,
    name: 'MacBook Air 13',
    price: 418143,
    description: 'Маленький чип. Грандиозный прорыв Первый чип, разработанный специально для Mac. Поразительно, но система на чипе Apple M1 вмещает 16 миллиардов транзис­торов и объединяет центральный и графи­ческий процессоры, систему Neural Engine, контроллеры ввода-вывода и множество других компонентов.' ,
    image_url:["https://resources.cdn-kaspi.kz/img/m/p/h9a/h35/64082972704798.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hf9/h31/64082981224478.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hf8/he3/64082978111518.jpg?format=gallery-medium"],
    rating:5,
    url_product:"https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/?c=750000000"
  },
  {
    id: 4,
    name: 'Xiaomi Redmi AirDots S',
    price: 2248,
    description: 'Redmi Airdots S — это доработанная и улучшенная версия компактных беспроводных наушников Xiaomi Airdots. Они отличаются более стабильным и быстрым сопряжением с мобильными гаджетами, а также наличием игрового режима со сниженной задержкой, что делает их использование ещё комфортнее. В остальном это всё те же стильные и функциональные наушники с широкими возможностями, отличной автономностью и продуманной эргономикой.' ,
    image_url:["https://resources.cdn-kaspi.kz/img/m/p/hfe/ha4/63971413032990.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h21/h1c/63971415916574.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hb0/h40/63971418603550.jpg?format=gallery-medium"],
    rating:4,
    url_product:"https://kaspi.kz/shop/p/xiaomi-redmi-airdots-s-chernyi-100286960/?c=750000000"
  },
  {
    id: 5,
    name: 'Apple iPhone 13 128Gb Midnight ',
    price: 291888,
    description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.' ,
    image_url:["https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium"],
    rating:5,
    url_product:"https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000"
  },
  {
    id: 6,
    name: 'Empire Computers Gaming PRO 70',
    price: 240986,
    description: 'Системный блок игровой' ,
    image_url:["https://resources.cdn-kaspi.kz/img/m/p/h97/h81/68183487119390.jpg?format=gallery-medium"],
    rating:5,
    url_product:"https://kaspi.kz/shop/p/empire-computers-gaming-pro-70-chernyi-108560461/?c=750000000"
  },
  {
    id: 7,
    name: 'UniComp Gaming-5 Pro',
    price: 198000,
    description: 'Системный блок игровой' ,
    image_url:["https://resources.cdn-kaspi.kz/img/m/p/h56/h5d/69226582016030.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h4b/h45/69226582540318.jpg?format=gallery-medium"],
    rating:5,
    url_product:"https://kaspi.kz/shop/p/unicomp-gaming-5-pro-belyi-108980574/?c=750000000"
  },
  {
    id: 8,
    name: 'ARDOR GAMING Gun Shield 10B',
    price: 89990,
    description: 'Игровое кресло черный' ,
    image_url:["https://resources.cdn-kaspi.kz/img/m/p/hb2/hf8/83052538036254.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h6b/h8d/83052539412510.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hbb/h95/83052539904030.jpg?format=gallery-medium"],
    rating:1,
    url_product:"https://kaspi.kz/shop/p/igrovoe-kreslo-ardor-gaming-gun-shield-10b-chernyi-oranzhevyi-112765673/?c=750000000"
  },
  {
    id: 9,
    name: 'SSD Kingston SA400S37 480 ГБ',
    price: 16490,
    description: 'SSD-накопитель Kingston A400 имеет достаточно большую емкость (480 ГБ). Такого объема достаточно не только для установки операционной системы, но и для множества программ, а, возможно, и нескольких игр. Использование SSD сделает скорость работы системы в 10 раз выше, чем она была бы с HDD. Запуск компьютера будет занимать считанные секунды, файлы будут открываться и сохраняться быстрее. Ускорится даже загрузка файлов из Интернет, так как они будут записываться на накопитель практически мгновенно.' ,
    image_url:["https://resources.cdn-kaspi.kz/img/m/p/h70/hb2/63763877920798.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hff/h36/63763878445086.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hae/h99/63763879428126.jpg?format=gallery-medium"],
    rating:5,
    url_product:"https://kaspi.kz/shop/p/ssd-kingston-sa400s37-480-gb-6800659/?c=750000000"
  },
  {
    id: 10,
    name: 'Xiaomi Mi Curved Gaming XMMNTWQ34',
    price: 153842,
    description: 'Монитор Xiaomi Mi Curved Gaming Monitor 34 [XMMNTWQ34] – модель с изогнутым 34-дюймовым антибликовым экраном, оптимизированная для мультимедийных развлечений и игр. Матрица VA с разрешающей способностью 3440x1440 пикселей, временем отклика 4 мс и частотой обновления 144 Гц обеспечивает создание детализированного изображения с реалистичной передачей цветовой палитры. Матовая поверхность, технологии защиты глаз и радиус кривизны 1500R гарантируют максимум комфорта в играх и при работе с контентом.' ,
    image_url:["https://resources.cdn-kaspi.kz/img/m/p/he5/h32/63858015436830.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h17/hc4/63858018779166.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h87/h05/63858021203998.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h75/hde/63858024415262.jpg?format=gallery-medium"],
    rating:5,
    url_product:"https://kaspi.kz/shop/p/xiaomi-mi-curved-gaming-xmmntwq34-chernyi-100129635/?c=750000000"
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/