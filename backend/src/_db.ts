import {Category, Product} from "./__generated__/graphql-schema-types";

export const categories: Category[] = [
    {
        id: "1",
        name: "TV",
        icon: "https://www.svgrepo.com/show/533162/tv-alt.svg"
    },
    {
        id: "2",
        name: "SMARTPHONE",
        icon: "https://www.svgrepo.com/show/529892/smartphone-2.svg"
    },
    {
        id: "3",
        name: "LAPTOP",
        icon: "https://www.svgrepo.com/show/529662/laptop.svg"
    }
];

export const products: Product[] = [
    {
        id: "1",
        name: "Huawei P40 Pro",
        price: 500,
        stock: 10,
        category: categories[1],
        description: "È uno smartphone Android avanzato e completo sotto tutti i punti di vista con alcune eccellenze. Dispone di un grande display da 6.58 pollici con una risoluzione di 2640x1200 pixel. Le funzionalità offerte da questo Huawei P40 Pro sono veramente tante e all'avanguardia. A cominciare dal modulo 5G che permette un trasferimento dati e una navigazione in internet eccellente. Questo Huawei P40 Pro è un prodotto con pochi competitor per ciò che riguarda la multimedialità grazie alla fotocamera da ben 50 megapixel che permette al Huawei P40 Pro di scattare foto di alta qualità con una risoluzione di 8060x6200 pixel e di registrare video in 4K alla risoluzione di 3840x2160 pixel. Guardando alle dimensioni, lo spessore di 9mm è contenuto e rende questo Huawei P40 Pro molto interessante. Per finire il peso è di 203g e abbiamo una batteria da 4200mAh"
    },
    {
        id: "2",
        name: "Samsung Galaxy S21 Ultra",
        price: 1200,
        stock: 8,
        category: categories[1],
        description: "Il Samsung Galaxy S21 Ultra è uno smartphone premium con un display Dynamic AMOLED 2X da 6.8 pollici e una risoluzione di 3200x1440 pixel. È dotato di un modulo 5G e una fotocamera quadrupla che include un sensore principale da 108MP. Supporta video 8K, ed è equipaggiato con una batteria da 5000mAh."
    },
    {
        id: "3",
        name: "Sony Bravia XR A90J",
        price: 2000,
        stock: 5,
        category: categories[0],
        description: "La Sony Bravia XR A90J è una TV OLED 4K da 55 pollici che utilizza il Cognitive Processor XR per offrire un'immagine eccezionale. Supporta HDR e Dolby Vision e dispone di funzionalità avanzate per una qualità dell'immagine eccezionale. È una delle migliori TV OLED di Sony con una qualità audio integrata di alto livello."
    },
    {
        id: "4",
        name: "Dell XPS 13",
        price: 1400,
        stock: 6,
        category: categories[2],
        description: "Il Dell XPS 13 è un laptop ultra-portatile da 13.4 pollici con uno schermo InfinityEdge e risoluzione 4K. Alimentato da processori Intel Core di 11a generazione, offre prestazioni elevate in un design compatto ed elegante. Dispone di una lunga durata della batteria e un touchpad di alta precisione."
    },
    {
        id: "5",
        name: "Apple MacBook Pro 16\"",
        price: 2400,
        stock: 7,
        category: categories[2],
        description: "Il MacBook Pro 16 pollici di Apple offre prestazioni incredibili grazie al chip Apple M1 Pro, un display Liquid Retina XDR e fino a 64GB di RAM. Ideale per professionisti creativi, dispone di uno storage SSD superveloce e una tastiera Magic Keyboard migliorata."
    },
    {
        id: "6",
        name: "LG OLED CX 65\"",
        price: 1800,
        stock: 4,
        category: categories[0],
        description: "La LG OLED CX è una TV OLED 4K da 65 pollici, con supporto per Dolby Vision, HDR10, e HLG. È dotata del processore α9 Gen 3 AI e della tecnologia NVIDIA G-SYNC, rendendola perfetta per il gaming e i contenuti multimediali."
    },
    {
        id: "7",
        name: "Samsung QLED Q90T",
        price: 1700,
        stock: 5,
        category: categories[0],
        description: "La Samsung QLED Q90T è una TV QLED 4K da 65 pollici con tecnologia Quantum Dot per colori vividi e un'eccellente luminosità. Supporta HDR10+ e ha una modalità di gioco avanzata per una reattività eccellente. Un'ottima scelta per il salotto."
    },
    {
        id: "8",
        name: "OnePlus 9 Pro",
        price: 750,
        stock: 10,
        category: categories[1],
        description: "OnePlus 9 Pro è uno smartphone di fascia alta con un display Fluid AMOLED da 6.7 pollici e una risoluzione QHD+. È dotato di una fotocamera Hasselblad per una qualità fotografica eccezionale e supporta la ricarica rapida Warp Charge a 65W."
    },
    {
        id: "9",
        name: "Google Pixel 6 Pro",
        price: 899,
        stock: 8,
        category: categories[1],
        description: "Il Google Pixel 6 Pro è uno smartphone Android con un display AMOLED LTPO da 6.71 pollici, alimentato dal chip Google Tensor. La sua fotocamera offre eccellenti prestazioni in condizioni di scarsa illuminazione e una straordinaria qualità di immagine."
    },
    {
        id: "10",
        name: "Acer Aspire 5",
        price: 600,
        stock: 12,
        category: categories[2],
        description: "Acer Aspire 5 è un laptop conveniente da 15.6 pollici con un display Full HD e processori Intel Core di 11a generazione. Perfetto per il lavoro quotidiano e lo studio, è leggero e ha una buona autonomia della batteria."
    },
    {
        id: "11",
        name: "HP Spectre x360 14",
        price: 1300,
        stock: 9,
        category: categories[2],
        description: "HP Spectre x360 14 è un laptop convertibile premium con display OLED 3K2K da 13.5 pollici e processore Intel di ultima generazione. Dispone di funzionalità di sicurezza avanzate e una lunga durata della batteria, ideale per la produttività."
    },
    {
        id: "12",
        name: "Sony Xperia 5 II",
        price: 700,
        stock: 10,
        category: categories[1],
        description: "Sony Xperia 5 II è uno smartphone Android compatto con un display OLED da 6.1 pollici e una risoluzione di 2520x1080 pixel. Dotato di un'eccezionale fotocamera tripla con sensori da 12 MP, supporta la registrazione video in 4K HDR e ha una batteria da 4000mAh."
    },
    {
        id: "13",
        name: "Asus ROG Zephyrus G14",
        price: 1500,
        stock: 6,
        category: categories[2],
        description: "Asus ROG Zephyrus G14 è un potente laptop da gaming da 14 pollici con display WQHD e processore AMD Ryzen 9. Dispone di una scheda grafica NVIDIA GeForce RTX 3060, rendendolo perfetto per i giocatori e i creativi."
    },
    {
        id: "14",
        name: "Apple iPhone 13 Pro Max",
        price: 1200,
        stock: 12,
        category: categories[1],
        description: "Apple iPhone 13 Pro Max offre un display Super Retina XDR da 6.7 pollici e una configurazione a tripla fotocamera per una qualità fotografica eccezionale. Alimentato dal chip A15 Bionic, supporta il 5G ed è resistente all'acqua."
    },
    {
        id: "15",
        name: "Samsung Galaxy Tab S7+",
        price: 800,
        stock: 9,
        category: categories[2],
        description: "Il Samsung Galaxy Tab S7+ è un tablet con display Super AMOLED da 12.4 pollici e risoluzione WQXGA. Dotato di S Pen, è perfetto per la produttività e il disegno digitale, con una batteria da 10090mAh."
    },
    {
        id: "16",
        name: "Xiaomi Mi 11 Ultra",
        price: 900,
        stock: 7,
        category: categories[1],
        description: "Xiaomi Mi 11 Ultra è uno smartphone Android di fascia alta con display AMOLED da 6.81 pollici e risoluzione QHD+. Dotato di una fotocamera posteriore tripla con sensore principale da 50 MP e registrazione video in 8K."
    },
    {
        id: "17",
        name: "LG Gram 17",
        price: 1600,
        stock: 5,
        category: categories[2],
        description: "LG Gram 17 è un laptop ultraleggero da 17 pollici con risoluzione WQXGA e processore Intel Core di 11a generazione. È ideale per la mobilità e la produttività grazie alla batteria a lunga durata e al design leggero."
    },
    {
        id: "18",
        name: "Samsung QN85A Neo QLED 55\"",
        price: 1500,
        stock: 4,
        category: categories[0],
        description: "Samsung QN85A Neo QLED è una TV 4K da 55 pollici con tecnologia Quantum Mini LED per una qualità d'immagine eccellente. Supporta HDR10+ e ha un design ultra sottile, perfetto per il salotto."
    },
    {
        id: "19",
        name: "OnePlus Nord 2",
        price: 400,
        stock: 15,
        category: categories[1],
        description: "OnePlus Nord 2 è uno smartphone di fascia media con display Fluid AMOLED da 6.43 pollici, risoluzione Full HD+ e processore MediaTek Dimensity 1200. È dotato di una tripla fotocamera da 50 MP e supporta la ricarica rapida Warp Charge."
    },
    {
        id: "20",
        name: "Acer Predator Helios 300",
        price: 1200,
        stock: 8,
        category: categories[2],
        description: "Acer Predator Helios 300 è un laptop da gaming da 15.6 pollici con display Full HD e processore Intel Core i7 di 10a generazione. Dotato di scheda grafica NVIDIA GeForce RTX 3060, è ideale per i giocatori esigenti."
    },
    {
        id: "21",
        name: "Panasonic TX-55HX600E",
        price: 700,
        stock: 6,
        category: categories[0],
        description: "Panasonic TX-55HX600E è una TV LED 4K da 55 pollici con supporto per Dolby Vision e HDR10. Offre un'esperienza visiva immersiva e funzionalità smart per accedere facilmente ai contenuti preferiti."
    }
];
