import Image from "next/image";
import abstract from "@/assets/image/abstract.jpg";

export default function Home() {
  return (
    <>
      <div className="newLetterContainer">
        <div className="newLetter flex">
          <div className="textContainer">
            <h1>
              Get the finest curated abstracts delivered weekly to your inbox
            </h1>
            <div className="keyItems">
              <p>Exclusive access to new abstract images and collections</p>
              <p>Unlock special promotiond only for subcribers</p>
              <p>Regular doese of artistic inspiration</p>
            </div>
            <div className="form">
              <form>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                />
                <button type="submit">Subscribe</button>
              </form>
              <p>We only send you the best! No spam.</p>
              <span></span>
            </div>
          </div>
          <div className="imageContainer">
            <Image src={abstract} alt=" " />
          </div>
        </div>
      </div>
    </>
  );
}
