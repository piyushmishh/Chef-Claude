import globeImg from '../assets/globe.jpg';

export default function Header() {
  return (
    <header>
      <img src={globeImg} alt="Globe" width={50} height={50}/>
      <h1>My Travel Journal.</h1>
    </header>
  );
}
