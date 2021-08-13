import { useEffect, useState } from 'react';
import ImageCard from './ImageCard';

const flortAPI = 'http://localhost:3000/flort';

export default function App() {
  const [flortData, setFlortData] = useState({});

  useEffect(() => {
    fetch(flortAPI)
      .then((res) => res.json())
      .then((json) => setFlortData(json));
  }, []);

  function incrementLikes() {
    setFlortData({ ...flortData, likes: flortData.likes + 1 });
  }

  function decrementLikes() {
    setFlortData({ ...flortData, likes: flortData.likes - 1 });
  }

  return (
    <>
      <h1>FLORTAGORM</h1>
      <div className="flort-container">
        <ImageCard
          flort={flortData}
          incrementLikes={incrementLikes}
          decrementLikes={decrementLikes}
        />
      </div>
    </>
  );
}
