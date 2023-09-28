import {colors} from "./colors";

const songScale = "w_40,h_40,c_scale";
export const itinerario: Itinerario = {
    id: "1",
    title: "Itinerario completo",
    color: colors.teal,
    cover:
        "https://res.cloudinary.com/djklfwvv2/image/upload/v1695164906/japon-2weeks/fxyo2y09qy4w6mofjfjy.jpg",
    artists: [],
}

interface Dia {
    id: string;
    title: string;
    image: string;
    cover: string;
    city: string;
    color: (typeof colors)[keyof typeof colors];
}

export const dias: Dia[] = [
    {
        id: "1",
        title: "Salida de capitales",
        image: `https://res.cloudinary.com/djklfwvv2/image/upload/${songScale}/v1695769000/japon-2weeks/lfiils6c3qrif8crd8ez.png`,
        cover: "https://res.cloudinary.com/djklfwvv2/image/upload/v1695769000/japon-2weeks/lfiils6c3qrif8crd8ez.png",
        city: "Barcelona y Roma",
        color: colors.teal,
    },
    {
        id: "2",
        title: "Primer contacto Japones",
        image: `https://res.cloudinary.com/djklfwvv2/image/upload/${songScale}/v1695768999/japon-2weeks/zekzp1ssev22vadx1cdq.jpg`,
        cover: "https://res.cloudinary.com/djklfwvv2/image/upload/v1695768999/japon-2weeks/zekzp1ssev22vadx1cdq.jpg",
        city: "Tokyo y Kyoto",
        color: colors.teal,

    },
    {
        id: "3",
        title: "El Este de Kyoto",
        image: `https://res.cloudinary.com/djklfwvv2/image/upload/${songScale}/v1695768999/japon-2weeks/lziutrh5t0jzssp9a5ej.jpg`,
        cover: "https://res.cloudinary.com/djklfwvv2/image/upload/v1695768999/japon-2weeks/lziutrh5t0jzssp9a5ej.jpg",
        city: "Kyoto",
        color: colors.teal,
    },
    {
        id: "4",
        title: "El templo dorado y bosque de bambú",
        image: `https://res.cloudinary.com/djklfwvv2/image/upload/${songScale}/v1695768999/japon-2weeks/jh16p87gxftxeq7gdhpu.png`,
        cover: "https://res.cloudinary.com/djklfwvv2/image/upload/v1695768999/japon-2weeks/jh16p87gxftxeq7gdhpu.png",
        city: "Kyoto",
        color: colors.teal,
    },
    {
        id: "5",
        title: "Excursion atomica",
        image: `https://res.cloudinary.com/djklfwvv2/image/upload/${songScale}/v1695768999/japon-2weeks/comjzny4r3zqqynwzyvk.jpg`,
        cover: "https://res.cloudinary.com/djklfwvv2/image/upload/v1695768999/japon-2weeks/comjzny4r3zqqynwzyvk.jpg",
        city: "Hiroshima y Miyajima",
        color: colors.teal,
    },
    {
        id: "6",
        title: "Visitando y comiendo Kobe",
        image: `https://res.cloudinary.com/djklfwvv2/image/upload/${songScale}/v1695768999/japon-2weeks/sxmlnzuloacufuyq9amk.jpg`,
        cover: "https://res.cloudinary.com/djklfwvv2/image/upload/v1695768999/japon-2weeks/sxmlnzuloacufuyq9amk.jpg",
        city: "Kobe",
        color: colors.teal,
    },
    {
        id: "7",
        title: "El japon mas diferente",
        image: `https://res.cloudinary.com/djklfwvv2/image/upload/${songScale}/v1695768999/japon-2weeks/ppv56urbazzgjbkbtgb6.jpg`,
        cover: "https://res.cloudinary.com/djklfwvv2/image/upload/v1695768999/japon-2weeks/ppv56urbazzgjbkbtgb6.jpg",
        city: "Osaka",
        color: colors.teal,
    },
    {
        id: "8",
        title: "Inari-Taisha y Nara",
        image: `https://res.cloudinary.com/djklfwvv2/image/upload/${songScale}/v1695768999/japon-2weeks/evdwq00nfnctzlppmulh.jpg`,
        cover: "https://res.cloudinary.com/djklfwvv2/image/upload/v1695768999/japon-2weeks/evdwq00nfnctzlppmulh.jpg",
        city: "Kyoto y Nara",
        color: colors.teal,
    },
    {
        id: "9",
        title: "¡ A LA CAPITAL !",
        image: `https://res.cloudinary.com/djklfwvv2/image/upload/${songScale}/v1695769000/japon-2weeks/vzs8f3jfjbyof0sp38b0.png`,
        cover: "https://res.cloudinary.com/djklfwvv2/image/upload/v1695769000/japon-2weeks/vzs8f3jfjbyof0sp38b0.png",
        city: "Tokyo",
        color: colors.teal,
    },
    {
        id: "10",
        title: "El cruze mas grande del mundo y mas",
        image: `https://res.cloudinary.com/djklfwvv2/image/upload/${songScale}/v1695768999/japon-2weeks/hzv47u5hbilnhozrwyvt.jpg`,
        cover: "https://res.cloudinary.com/djklfwvv2/image/upload/v1695768999/japon-2weeks/hzv47u5hbilnhozrwyvt.jpg",
        city: "Tokyo",
        color: colors.teal,
    },
    {
        id: "11",
        title: "El antiguo templo y frikismo",
        image: `https://res.cloudinary.com/djklfwvv2/image/upload/${songScale}/v1695768998/japon-2weeks/qeupjb704phllfhda7qu.jpg`,
        cover: "https://res.cloudinary.com/djklfwvv2/image/upload/v1695768998/japon-2weeks/qeupjb704phllfhda7qu.jpg",
        city: "Tokyo",
        color: colors.teal,
    },
    {
        id: "12",
        title: "Gran palacio y ricachones",
        image: `https://res.cloudinary.com/djklfwvv2/image/upload/${songScale}/v1695768998/japon-2weeks/hybe5pw1zzenf1njwakw.jpg`,
        cover: "https://res.cloudinary.com/djklfwvv2/image/upload/v1695768998/japon-2weeks/hybe5pw1zzenf1njwakw.jpg",
        city: "Tokyo",
        color: colors.teal,
    },
    {
        id: "13",
        title: "Excursion playera",
        image: `https://res.cloudinary.com/djklfwvv2/image/upload/${songScale}/v1695768998/japon-2weeks/wywduk3sjufrnqupykyt.jpg`,
        cover: "https://res.cloudinary.com/djklfwvv2/image/upload/v1695768998/japon-2weeks/wywduk3sjufrnqupykyt.jpg",
        city: "Tokyo",
        color: colors.teal,
    },
    {
        id: "14",
        title: "Isla artificial",
        image: `https://res.cloudinary.com/djklfwvv2/image/upload/${songScale}/v1695770479/japon-2weeks/ncng7gdji4egoqzcl1w3.jpg`,
        cover: "https://res.cloudinary.com/djklfwvv2/image/upload/v1695770479/japon-2weeks/ncng7gdji4egoqzcl1w3.jpg",
        city: "Tokyo",
        color: colors.teal,
    },
    {
        id: "15",
        title: "Compras y visitas de ultimo momento",
        image: `https://res.cloudinary.com/djklfwvv2/image/upload/${songScale}/v1695770480/japon-2weeks/v1k5bh9xlysjv8fl7gig.jpg`,
        cover: "https://res.cloudinary.com/djklfwvv2/image/upload/v1695770480/japon-2weeks/v1k5bh9xlysjv8fl7gig.jpg",
        city: "Tokyo",
        color: colors.teal,
    },
    {
        id: "16",
        title: "Sayonara",
        image: `https://res.cloudinary.com/djklfwvv2/image/upload/${songScale}/v1695768998/japon-2weeks/vtcjon8meam6mnincg5b.png`,
        cover: "https://res.cloudinary.com/djklfwvv2/image/upload/v1695768998/japon-2weeks/vtcjon8meam6mnincg5b.png",
        city: "Tokyo",
        color: colors.teal,
    },
];


export interface Itinerario {
    id: string;
    title: string;
    color: (typeof colors)[keyof typeof colors];
    cover: string;
    artists: string[];
}

export interface Sitio {
    id: string;
    title: string;
    color: (typeof colors)[keyof typeof colors];
    cover: string;
    badges: any[];
}


export interface Playlist {
    id: string;
    title: string;
    color: (typeof colors)[keyof typeof colors];
    cover: string;
    artists: string[];
}

export const sitios: Sitio[] = [
    {
        id: "1",
        title: "Tokyo",
        color: colors.teal,
        cover:
            "https://res.cloudinary.com/djklfwvv2/image/upload/v1695162989/japon-2weeks/p6necm70xlarvdujh6cs.png",
        badges: [
            {
                name: 'Templos',
                color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
                items: [
                    {
                        title: '',
                        href: '',
                        description: ''
                    }
                ]
            },
            {
                name: 'Restaurantes',
                color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
            },
            {
                name: 'Calles',
                color: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300'
            },
            {
                name: 'Zonas',
                color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
            },
            {
                name: 'Monumentos',
                color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
            }
        ],

    },
    {
        id: "2",
        title: "Kyoto",
        color: colors.green,
        cover:
            "https://res.cloudinary.com/djklfwvv2/image/upload/v1695163529/japon-2weeks/jj80s0riuhz0a4qwb3am.jpg",
        badges: [
            {
                name: 'Templos',
                color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
                items: [
                    {
                        title: 'Kiyomizu-dera',
                        href: 'https://maps.app.goo.gl/C5YPibvhU2FbFK1y7',
                        description: 'Conjunto de templos famoso por su enorme mirador'
                    },
                    {
                        title: 'Kinkakuji',
                        href: 'https://maps.app.goo.gl/KJuq2E6GUXPtMUSi7',
                        description: 'El famoso Pabellon Dorado'
                    },
                    {
                        title: 'Fushimi Inari-Taisha',
                        href: 'https://maps.app.goo.gl/2XSdVAzn9jLrub99A',
                        description: 'Santuario con el camino de toriis'
                    },
                    {
                        title: 'Sanjūsangen-dō',
                        href: 'https://maps.app.goo.gl/tnbR4DE3WVfiPUY16',
                        description: 'Templo con 1001 estatuas'
                    },
                    {
                        title: 'Santuario Heian',
                        href: 'https://maps.app.goo.gl/ymsc6T6kCxFk3bZg8',
                        description: 'Santuario con un jardín y lago precioso'
                    },
                    {
                        title: 'Nanzen-ji',
                        href: 'https://maps.app.goo.gl/rpsQAkRaLcCTLPPn6',
                        description: 'Santuario que da comienzo al paseo de los filósofos'
                    },
                    {
                        title: 'Ginkaku-ji',
                        href: 'https://maps.app.goo.gl/e7smqvqMG5vhsGfE8',
                        description: 'Conocido como el Pabellón de plata'
                    },
                    {
                        title: 'Tenryu-ji',
                        href: 'https://maps.app.goo.gl/oeKVZbkWcp16MFei6',
                        description: 'Templo al lado del bosque de bambú con jardín zen'
                    },
                    {
                        title: 'Gio-ji',
                        href: 'https://maps.app.goo.gl/eD28B9vNtnbcHM39A',
                        description: 'Templo para visitar en otoño con jardín de musgo y colores otoñales'
                    },
                    {
                        title: 'Ryōan-ji',
                        href: 'https://maps.app.goo.gl/BBfJvwnbDXZ4THfj9',
                        description: 'Templo de camino al pabellón dorado con jardines muy bonitos'
                    },
                ]
            },
            {
                name: 'Restaurantes',
                color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
            },
            {
                name: 'Calles',
                color: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
                items: [
                    {
                        title: 'Sannenzaka',
                        href: 'https://maps.app.goo.gl/h17Z3XsCUVirMXgK6',
                        description: 'Famosa calle al salir de Kiyomizu-dera'
                    },
                    {
                        title: 'Chawanzaka',
                        href: 'https://maps.app.goo.gl/h17Z3XsCUVirMXgK6',
                        description: 'Famosa calle al salir de Kiyomizu-dera'
                    },
                    {
                        title: 'Pontocho',
                        href: 'https://maps.app.goo.gl/nbHsRdAiNtTzSkxMA',
                        description: 'Calle llena de restaurantes para comer'
                    },
                    {
                        title: 'Gion',
                        href: 'https://maps.app.goo.gl/nbHsRdAiNtTzSkxMA',
                        description: 'Barrio de geishas y calles'
                    },
                    {
                        title: 'Paseo de los filosofos',
                        href: 'https://maps.app.goo.gl/tbRbrZPwywxdR2NH7',
                        description: 'Paseo para ver los cerezos'
                    },
                    {
                        title: 'Barrio de Arashiyama',
                        href: 'https://maps.app.goo.gl/3iA1x4HevBiK6iSU7',
                        description: 'Lleno de calles con restaurantes y tiendas'
                    },
                ]
            },
        ],
    },
    {
        id: "3",
        title: "Osaka",
        color: colors.rose,
        cover:
            "https://res.cloudinary.com/djklfwvv2/image/upload/v1695163617/japon-2weeks/sqlgpkqibwtypcqcxg7b.jpg",
        badges: [
            {
                name: 'Restaurantes',
                color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
            },
            {
                name: 'Calles',
                color: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
                items: [
                    {
                        title: 'Dotonbori',
                        href: 'https://maps.app.goo.gl/omw3Vd7MHS5URMdj7',
                        description: 'Calle con millones de leds y carteles luminosos'
                    },
                    {
                        title: 'Namba',
                        href: 'https://maps.app.goo.gl/Gd2DHLs2wdayrUgA9',
                        description: 'Calle paralela a la anterior mas grande'
                    },
                ]
            },
        ],
    },
    {
        id: "4",
        title: "Kobe",
        color: colors.red,
        cover:
            "https://res.cloudinary.com/djklfwvv2/image/upload/v1695163740/japon-2weeks/wliqlfz2rpnvoshstfgh.jpg",
        badges: [
            {
                name: 'Restaurantes',
                color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
            },
            {
                name: 'Zonas',
                color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
                items: [
                    {
                        title: 'Sannomiya Station',
                        href: 'https://maps.app.goo.gl/ds98ZDkYpu3av3jEA',
                        description: 'Zona de la estación'
                    },
                    {
                        title: 'Chinatown',
                        href: 'https://maps.app.goo.gl/DQgJQmngdTxkXuVJ9',
                        description: 'Barrio chino de Kobe'
                    },
                    {
                        title: 'Kobe Port',
                        href: 'https://maps.app.goo.gl/R2L9AWRGLT6evKSw7',
                        description: 'Puerto de Kobe'
                    },
                ]
            },
        ],
    },
    {
        id: "5",
        title: "Hiroshima",
        color: colors.pink,
        cover:
            "https://res.cloudinary.com/djklfwvv2/image/upload/v1695163889/japon-2weeks/wqhpklnq9tl51yceufcp.png",
        badges: [
            {
                name: 'Monumentos',
                color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
                items: [
                    {
                        title: 'Memorial bomba atomica',
                        href: 'https://maps.app.goo.gl/7jQ1MsxZP1HrEd8ZA',
                        description: 'Zona donde cayo la bomba atomica'
                    },
                    {
                        title: 'Castillo de Hiroshima',
                        href: 'https://maps.app.goo.gl/FzXkiL6LjZDT69ZF8',
                        description: 'Gran castillo de Hiroshima'
                    }
                ]
            },
            {
                name: 'Restaurantes',
                color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
            },
        ],
    },
]

export const morePlaylists = [
    ...sitios.map((item) => ({
        ...item,
        id: item.id + "a",
    })),
];

export const sidebarPlaylists = [
    ...sitios.map((item) => ({
        ...item,
        id: item.id + "_side",
    })),
];

export const allPlaylists = [
    ...sitios,
    ...morePlaylists,
    ...sidebarPlaylists,
];




