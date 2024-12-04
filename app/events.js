const events = [
  {
    id: 1, // Event ID
    datum1: 'vrijdag 11 oktober',
    dag: 'VR',
    nummerMaand: '11 okt',
    naam: 'LOVE IS ALL',
    stad: 'Breda',
    adres: 'Johan Frisostraat 22, Breda', // Nieuw veld
    genre: 'House', // Nieuw veld
    locatie: 'Jimmy Woo, Amsterdam', // Nieuw veld
    tijd: '22:00 - 03:00', // Nieuw veld
    extraInfo: 'Een geweldige avond met de beste DJ\'s!', // Nieuw veld
    lineup: 'DJ Mike, DJ Lisa', // Nieuw veld
    flyer: '/images/7fest2022.jpg',
    link: 'http://localhost:3000/events/1', // Aangepaste link
    ticket:'https://www.ticketswap.com/event/awakenings-nye-2024/526a62bf-15d3-4b4d-be4b-4b7ea3696a1d'
  },
  {
    id: 2,
    datum1: 'vrijdag 11 oktober',
    dag: 'VR',
    nummerMaand: '11 okt',
    naam: 'Techno Night',
    stad: 'Utrecht',
    adres: 'Vredenburg 12, Utrecht', // Nieuw veld
    genre: 'Techno', // Nieuw veld
    locatie: 'TivoliVredenburg, Utrecht', // Nieuw veld
    tijd: '23:00 - 04:00', // Nieuw veld
    extraInfo: 'Een nacht vol techno met top artiesten!', // Nieuw veld
    lineup: 'DJ Sam, DJ X', // Nieuw veld
    flyer: '/images/csc.jpg',
    link: 'http://localhost:3000/events/2', // Aangepaste link
  },
  {
    id: 3,
    datum1: 'vrijdag 11 oktober',
    dag: 'VR',
    nummerMaand: '11 okt',
    naam: 'Pop Up Jazz',
    stad: 'Rotterdam',
    adres: 'Klein Handelsgebouw, Rotterdam', // Nieuw veld
    genre: 'Jazz', // Nieuw veld
    locatie: 'LantarenVenster', // Nieuw veld
    tijd: '20:00 - 23:00', // Nieuw veld
    extraInfo: 'Geniet van een avond met live jazz!', // Nieuw veld
    lineup: 'The Jazz Collective', // Nieuw veld
    flyer: '/images/7fest2022.jpg',
    link: 'http://localhost:3000/events/3', // Aangepaste link
    ticket:'https://www.ticketswap.com/event/awakenings-nye-2024/526a62bf-15d3-4b4d-be4b-4b7ea3696a1d'
  },
  {
    id: 4,
    datum1: 'zaterdag 12 oktober',
    dag: 'ZA',
    nummerMaand: '12 okt',
    naam: 'The Underground Soul Train - Invites David Dam',
    stad: 'Oosterhout',
    adres: 'Oosterhoutseweg 99, Oosterhout', // Nieuw veld
    genre: 'Soul', // Nieuw veld
    locatie: 'De Loods', // Nieuw veld
    tijd: '21:00 - 02:00', // Nieuw veld
    extraInfo: 'Een soulvolle nacht met David Dam!', // Nieuw veld
    lineup: 'David Dam, DJ Groove', // Nieuw veld
    flyer: '/images/csc.jpg',
    link: 'http://localhost:3000/events/4', // Aangepaste link
  },
  {
    id: 5,
    datum1: 'zaterdag 12 oktober',
    dag: 'ZA',
    nummerMaand: '12 okt',
    naam: 'LEGENDS of ROCK Tribute Festival',
    stad: 'Enschede',
    adres: 'Veldhuisweg 1, Enschede', // Nieuw veld
    genre: 'Rock', // Nieuw veld
    locatie: 'Metropool', // Nieuw veld
    tijd: '19:00 - 01:00', // Nieuw veld
    extraInfo: 'Tribute aan de grootste rocklegendes!', // Nieuw veld
    lineup: 'Various Artists', // Nieuw veld
    flyer: '/images/7fest2022.jpg',
    link: 'http://localhost:3000/events/5', // Aangepaste link
  },
  {
    id: 6,
    datum1: 'zaterdag 12 oktober',
    dag: 'ZA',
    nummerMaand: '12 okt',
    naam: 'House Music Madness',
    stad: 'Amsterdam',
    adres: 'Westerpark, Amsterdam', // Nieuw veld
    genre: 'House', // Nieuw veld
    locatie: 'Amsterdam Dance Event', // Nieuw veld
    tijd: '22:00 - 06:00', // Nieuw veld
    extraInfo: 'Feest met de beste house DJ\'s!', // Nieuw veld
    lineup: 'DJ Tiësto, DJ Armin van Buuren', // Nieuw veld
    flyer: '/images/csc.jpg',
    link: 'http://localhost:3000/events/6', // Aangepaste link
  },
  {
    id: 7,
    datum1: 'zaterdag 12 oktober',
    dag: 'ZA',
    nummerMaand: '12 okt',
    naam: 'Festival of Lights',
    stad: 'Den Haag',
    adres: 'Kerkstraat 3, Den Haag', // Nieuw veld
    genre: 'Festival', // Nieuw veld
    locatie: 'Malieveld', // Nieuw veld
    tijd: '18:00 - 23:00', // Nieuw veld
    extraInfo: 'Een prachtig lichtfestival!', // Nieuw veld
    lineup: 'Various Artists', // Nieuw veld
    flyer: '/images/7fest2022.jpg',
    link: 'http://localhost:3000/events/7', // Aangepaste link
    ticket:'https://www.ticketswap.com/event/awakenings-nye-2024/526a62bf-15d3-4b4d-be4b-4b7ea3696a1d'
  },
  {
    id: 8,
    datum1: 'zaterdag 19 oktober',
    dag: 'ZA',
    nummerMaand: '19 okt',
    naam: 'Disco Fever met o.a. NPO radio dj Corné Klijn',
    stad: 'Zwolle',
    adres: 'Kerkstraat 5, Zwolle', // Nieuw veld
    genre: 'Disco', // Nieuw veld
    locatie: 'Stadsschouwburg', // Nieuw veld
    tijd: '20:00 - 01:00', // Nieuw veld
    extraInfo: 'Terug naar de disco jaren!', // Nieuw veld
    lineup: 'DJ Corné Klijn', // Nieuw veld
    flyer: '/images/csc.jpg',
    link: 'http://localhost:3000/events/8', // Aangepaste link
  },
  {
    id: 9,
    datum1: 'zaterdag 19 oktober',
    dag: 'ZA',
    nummerMaand: '19 okt',
    naam: 'Latin Dance Party',
    stad: 'Rotterdam',
    adres: 'Kruisplein 10, Rotterdam', // Nieuw veld
    genre: 'Latin', // Nieuw veld
    locatie: 'Club Vie', // Nieuw veld
    tijd: '21:00 - 04:00', // Nieuw veld
    extraInfo: 'Feest met de beste Latin muziek!', // Nieuw veld
    lineup: 'DJ Carlos', // Nieuw veld
    flyer: '/images/7fest2022.jpg',
    link: 'http://localhost:3000/events/9', // Aangepaste link
  },
  {
    id: 10,
    datum1: 'vrijdag 25 oktober',
    dag: 'VR',
    nummerMaand: '25 okt',
    naam: 'LEGENDS of ROCK Tribute Tour De Vorstin Hilversum',
    stad: 'Hilversum',
    adres: 'De Vorstin, Hilversum', // Nieuw veld
    genre: 'Rock', // Nieuw veld
    locatie: 'De Vorstin', // Nieuw veld
    tijd: '19:30 - 23:30', // Nieuw veld
    extraInfo: 'Een tribute aan rock legenden!', // Nieuw veld
    lineup: 'Various Artists', // Nieuw veld
    flyer: '/images/7fest2022.jpg',
    link: 'http://localhost:3000/events/10', // Aangepaste link
  },
  {
    id: 11,
    datum1: 'vrijdag 25 oktober',
    dag: 'VR',
    nummerMaand: '25 okt',
    naam: 'Jazz Night',
    stad: 'Groningen',
    adres: 'Oude Kijk in t Jatstraat 1, Groningen', // Nieuw veld
    genre: 'Jazz', // Nieuw veld
    locatie: 'Grand Theatre', // Nieuw veld
    tijd: '20:00 - 23:00', // Nieuw veld
    extraInfo: 'Geniet van een avond vol jazz!', // Nieuw veld
    lineup: 'DJ Jazz', // Nieuw veld
    flyer: '/images/csc.jpg',
    link: 'http://localhost:3000/events/11', // Aangepaste link
  },
  {
    id: 12,
    datum1: 'zaterdag 9 november',
    dag: 'ZA',
    nummerMaand: '9 nov',
    naam: 'Latin Live',
    stad: 'Breda',
    adres: 'Stationsplein 1, Breda', // Nieuw veld
    genre: 'Latin', // Nieuw veld
    locatie: 'Breda Stadsschouwburg', // Nieuw veld
    tijd: '21:00 - 02:00', // Nieuw veld
    extraInfo: 'Een avond met live Latin muziek!', // Nieuw veld
    lineup: 'DJ Latin', // Nieuw veld
    flyer: '/images/7fest2022.jpg',
    link: 'http://localhost:3000/events/12', // Aangepaste link
  },
  {
    id: 13,
    datum1: 'zaterdag 16 november',
    dag: 'ZA',
    nummerMaand: '16 nov',
    naam: 'Electronic Dance Festival',
    stad: 'Eindhoven',
    adres: 'Strijp-S, Eindhoven', // Nieuw veld
    genre: 'Electronic', // Nieuw veld
    locatie: 'Strijp-S', // Nieuw veld
    tijd: '19:00 - 04:00', // Nieuw veld
    extraInfo: 'Het grootste elektronische festival van het jaar!', // Nieuw veld
    lineup: 'DJ Hardwell, DJ Afrojack', // Nieuw veld
    flyer: '/images/csc.jpg',
    link: 'http://localhost:3000/events/13', // Aangepaste link
    ticket:'https://www.ticketswap.com/event/awakenings-nye-2024/526a62bf-15d3-4b4d-be4b-4b7ea3696a1d'
  },
  {
    id: 14,
    datum1: 'zaterdag 30 november',
    dag: 'ZA',
    nummerMaand: '30 nov',
    naam: 'Indie Music Night',
    stad: 'Amsterdam',
    adres: 'Melkweg, Amsterdam', // Nieuw veld
    genre: 'Indie', // Nieuw veld
    locatie: 'Melkweg', // Nieuw veld
    tijd: '20:00 - 00:30', // Nieuw veld
    extraInfo: 'De beste indie muziek van de nieuwste artiesten!', // Nieuw veld
    lineup: 'Various Artists', // Nieuw veld
    flyer: '/images/7fest2022.jpg',
    link: 'http://localhost:3000/events/14', // Aangepaste link
  },
  {
    id: 15,
    datum1: 'zaterdag 14 december',
    dag: 'ZA',
    nummerMaand: '14 dec',
    naam: 'Classic Rock Revival',
    stad: 'Nijmegen',
    adres: 'Kelfkensbos 6, Nijmegen', // Nieuw veld
    genre: 'Rock', // Nieuw veld
    locatie: 'Doornroosje', // Nieuw veld
    tijd: '20:00 - 01:00', // Nieuw veld
    extraInfo: 'Herbeleef de rock van vroeger!', // Nieuw veld
    lineup: 'Classic Rock Band', // Nieuw veld
    flyer: '/images/csc.jpg',
    link: 'http://localhost:3000/events/15', // Aangepaste link
  },
];

export default events;
