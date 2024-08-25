import React from 'react';
import { useParams } from 'react-router-dom';
import './App.css';



interface Album {
  id: number;
  name: string;
  year: number;
  artist: string;
  description: string;
  image: string;
}

const albums: Album[] = [
  {
    id: 1,
    name: "brat",
    year: 2024,
    artist: "Charli xcx",
    description: "El álbum evoca y canaliza la escena rave ilegal de Londres, donde Charli XCX empezó a actuar «cuando [ella] tenía 14 o 15 años».",
    image: "src/images/brat.jpg"
  },
  {
    id: 2,
    name: "Romance",
    year: 2019,
    artist: "Camila Cabello",
    description: "Según la cantante, cada canción del disco entrega un lado más personal de ella, contando lo que ha vivido durante los últimos dos años",
    image: "src/images/Romance.jpg"
  },
  {
    id: 3,
    name: "God Said No",
    year: 2024,
    artist: "Omar Apollo",
    description: "Apollo afirmó que el álbum es un reflejo de [su] vida durante los últimos 2 años y no se siente como si fuera un montón de canciones juntas, llamándolo una secuencia que está hecha para ser escuchada de adelante hacia atrás",
    image: "src/images/God Said No.jpg"
  },
  {
    id: 4,
    name: "Scarlet",
    year: 2023,
    artist: "Doja Cat",
    description: "Doja Cat se propuso crear una continuación «masculina» de su tercer álbum de estudio, Planet Her (2021). Musicalmente, el disco se centra predominantemente en los géneros hip hop y R&B, marcando un alejamiento de los sonidos pop de su predecesor.",
    image: "src/images/Scarlet.jpg"
  }
];

const Detalle: React.FC = () => {
  const { albumId } = useParams<{ albumId: string }>();
  const id = parseInt(albumId || '', 10);

  if (isNaN(id)) {
    return <div>Invalid album ID</div>;
  }

  const album = albums.find(album => album.id === id);

  if (!album) {
    return <div>Album not found</div>;
  }

  return (
    <div className="detalle-container">
      <h1>{album.name}</h1>
      <img src={album.image} alt={album.name} />
      <p><strong>Año de publicación:</strong> {album.year}</p>
      <p><strong>Cantante:</strong> {album.artist}</p>
      <p><strong>Descripción:</strong> {album.description}</p>
    </div>
  );
};

export default Detalle;
