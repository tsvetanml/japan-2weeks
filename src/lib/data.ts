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
        title: "¡ A LA CAPITAL !", //llegada
        image: `https://res.cloudinary.com/djklfwvv2/image/upload/${songScale}/v1695769000/japon-2weeks/vzs8f3jfjbyof0sp38b0.png`,
        cover: "https://res.cloudinary.com/djklfwvv2/image/upload/v1695769000/japon-2weeks/vzs8f3jfjbyof0sp38b0.png",
        city: "Tokyo",
        color: colors.teal,
    },
    {
        id: "10",
        title: "El cruze mas grande del mundo y mas",// gente
        image: `https://res.cloudinary.com/djklfwvv2/image/upload/${songScale}/v1695768999/japon-2weeks/hzv47u5hbilnhozrwyvt.jpg`,
        cover: "https://res.cloudinary.com/djklfwvv2/image/upload/v1695768999/japon-2weeks/hzv47u5hbilnhozrwyvt.jpg",
        city: "Tokyo",
        color: colors.teal,
    },
    {
        id: "11",
        title: "El antiguo templo y frikismo",// norte
        image: `https://res.cloudinary.com/djklfwvv2/image/upload/${songScale}/v1695768998/japon-2weeks/qeupjb704phllfhda7qu.jpg`,
        cover: "https://res.cloudinary.com/djklfwvv2/image/upload/v1695768998/japon-2weeks/qeupjb704phllfhda7qu.jpg",
        city: "Tokyo",
        color: colors.teal,
    },
    {
        id: "12",
        title: "Gran palacio y ricachones", //centro
        image: `https://res.cloudinary.com/djklfwvv2/image/upload/${songScale}/v1695768998/japon-2weeks/hybe5pw1zzenf1njwakw.jpg`,
        cover: "https://res.cloudinary.com/djklfwvv2/image/upload/v1695768998/japon-2weeks/hybe5pw1zzenf1njwakw.jpg",
        city: "Tokyo",
        color: colors.teal,
    },
    {
        id: "13",
        title: "Excursion playera",//nakamura y repaso
        image: `https://res.cloudinary.com/djklfwvv2/image/upload/${songScale}/v1695768998/japon-2weeks/wywduk3sjufrnqupykyt.jpg`,
        cover: "https://res.cloudinary.com/djklfwvv2/image/upload/v1695768998/japon-2weeks/wywduk3sjufrnqupykyt.jpg",
        city: "Tokyo",
        color: colors.teal,
    },
    {
        id: "14",
        title: "Cervezas y actividad nocturna",// tranquilos y festival padre
        image: `https://res.cloudinary.com/djklfwvv2/image/upload/${songScale}/v1695770479/japon-2weeks/ncng7gdji4egoqzcl1w3.jpg`,
        cover: "https://res.cloudinary.com/djklfwvv2/image/upload/v1695770479/japon-2weeks/ncng7gdji4egoqzcl1w3.jpg",
        city: "Tokyo",
        color: colors.teal,
    },
    {
        id: "15",
        title: "Compras y visitas de ultimo momento",//ultimos repasos
        image: `https://res.cloudinary.com/djklfwvv2/image/upload/${songScale}/v1695770480/japon-2weeks/v1k5bh9xlysjv8fl7gig.jpg`,
        cover: "https://res.cloudinary.com/djklfwvv2/image/upload/v1695770480/japon-2weeks/v1k5bh9xlysjv8fl7gig.jpg",
        city: "Tokyo",
        color: colors.teal,
    },
    {
        id: "16",
        title: "Sayonara",//despedida
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
            },
            {
                name: 'Restaurantes',
                color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
            },
            {
                name: 'Calles',
                color: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300'
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
                color: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300'
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
                color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
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
                color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
            }
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

interface Song {
    id: string;
    title: string;
    image: string;
    artists: string[];
    album: string;
    duration: string;
}

export const songs: Song[] = [
    {
        id: "1",
        title: "The Nights",
        image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776175/spotify-astro/song_1_qitfwl.jpg`,
        artists: ["Avicii"],
        album: "The Days / Nights",
        duration: "2:56",
    },
    {
        id: "2",
        title: "Saint-Tropez",
        image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776175/spotify-astro/song_2_cijs8v.jpg`,
        artists: ["Post Malone"],
        album: "Hollywood's Bleeding",
        duration: "2:23",
    },
    {
        id: "3",
        title: "SICKO MODE",
        image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776176/spotify-astro/song_3_td9ncs.jpg`,
        artists: ["Travis Scott", "Drake"],
        album: "ASTROWORLD",
        duration: "5:13",
    },
    {
        id: "4",
        title: "Blinding Lights",
        image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776176/spotify-astro/song_4_lwumgu.png`,
        artists: ["The Weeknd"],
        album: "After Hours",
        duration: "3:22",
    },
    {
        id: "5",
        title: "Shape of You",
        image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776175/spotify-astro/song_5_rd5xqa.jpg`,
        artists: ["Ed Sheeran"],
        album: "÷ (Divide)",
        duration: "3:53",
    },
    {
        id: "6",
        title: "Uptown Funk",
        image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776175/spotify-astro/song_6_f1lt7y.jpg`,
        artists: ["Mark Ronson", "Bruno Mars"],
        album: "Uptown Special",
        duration: "4:30",
    },
    {
        id: "7",
        title: "Bad Guy",
        image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776175/spotify-astro/song_7_m7f0mh.jpg`,
        artists: ["Billie Eilish"],
        album: "When We All Fall Asleep, Where Do We Go?",
        duration: "3:14",
    },
    {
        id: "8",
        title: "Yesterday",
        image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776175/spotify-astro/song_8_hwxisr.jpg`,
        artists: ["The Beatles"],
        album: "Today & Tomorrow",
        duration: "4:38",
    },
    {
        id: "9",
        title: "Havana",
        image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776176/spotify-astro/song_9_szemzp.jpg`,
        artists: ["Camila Cabello", "Young Thug"],
        album: "Camila",
        duration: "3:37",
    },
    {
        id: "10",
        title: "Radioactive",
        image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776176/spotify-astro/song_10_sz0cib.jpg`,
        artists: ["Imagine Dragons"],
        album: "Night Visions",
        duration: "3:07",
    },
];
