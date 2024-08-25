import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

interface Album {
  id: number;
  name: string;
  image: string;
}

const albums: Album[] = [
  { id: 1, name: "brat", image: "src/images/brat.jpg" },
  { id: 2, name: "Romance", image: "src/images/Romance.jpg" },
  { id: 3, name: "God Said No", image: "src/images/God Said No.jpg" },
  { id: 4, name: "Scarlet", image: "src/images/Scarlet.jpg" }
];

const Lista: React.FC = () => {
  return (
    <div>
      <h1>L@s mejores 4 albums de musica</h1>
      <div className="lista-container">
        {albums.map(album => (
          <Link key={album.id} to={`/detalle/${album.id}`}>
            <div className="album-card">
              <img src={album.image} alt={album.name} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Lista;
