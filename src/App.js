import flortData from './flortData';
import ImageCard from './ImageCard';

export default function App() {
  return (
    <>
      <h1>FLORTAGORM</h1>
      <div className="flort-container">
        <ImageCard flort={flortData} />
      </div>
    </>
  );
}
