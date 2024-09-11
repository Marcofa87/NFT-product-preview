import imageEquilibrium from "@/images/image-equilibrium.jpg";
import iconEthereum from "@/images/icon-ethereum.svg";
import clockIcon from "@/images/icon-clock.svg";
import avatarIcon from "@/images/image-avatar.png";
import viewIcon from "@/images/icon-view.svg";
import "./nftcard.css";

function NftCard() {
  return (
    <main>
      <div className="container">
        <div className="image-container">
          <picture>
            <img src={imageEquilibrium} alt="equilibrium image NFT" />
          </picture>
          <picture className="overlay">
            <img src={viewIcon} alt="view icon" />
          </picture>
        </div>
        <div className="card-container-description">
          <h2 className="hover">Equilibrium #3429</h2>
          <p>Our Equilibrium collection promotes balance and calm</p>
          <div className="card-container-value-date-box">
            <div className="card-container-value">
              <img src={iconEthereum} alt="Ethereum image icon" />{" "}
              <p>0.041 ETH</p>
            </div>

            <div className="card-container-time">
              <img src={clockIcon} alt="clock icon" />
              <p>3 days left</p>
            </div>
          </div>
        </div>
        <footer>
          <img src={avatarIcon} alt="Avatar User Icon" />
          <p>
            Creation of <span className="hover">Marco Falasca</span>
          </p>
        </footer>
      </div>
    </main>
  );
}

export default NftCard;
