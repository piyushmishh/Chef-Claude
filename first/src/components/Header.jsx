import ChefImg from "../assets/chef.png";

export default function Header() {
  return (
    <header>
      <div className="container">
        <img src={ChefImg} alt="Chef" width={40} height={50} />
        <h1>Chef Claude</h1>
      </div>
    </header>
  );
}
