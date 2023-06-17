import Agung from "./img/profile/Agung.jpg";
import Aru from "./img/profile/Aru.jpeg";
import Albi from "./img/profile/Albi.jpg";
import Wisnu from "./img/profile/Wisnu.jpg";
import Krisna from "./img/profile/Krisna.jpg";

export default function Agent() {
  return (
    <div className="px py">
      <h1 className="pt-20 pb-14 font-bold text-slate-100 text-4xl text-center">DX AGENTS</h1>

      <div id="sosmed" className="2xl:flex justify-center items-center mb-8 mx-[450px] border-2 border-slate-200 rounded-2xl text-slate-500 hidden">
        <h1 className="pr-3 text-xl text-slate-200">Tap the card to open social media</h1>
        <button
          className="font-bold text-red-500 text-2xl"
          onClick={function hide() {
            const sosmed = document.querySelector("#sosmed");
            sosmed.style.display = "none";
          }}
        >
          {"\u00D7"}
        </button>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 place-items-center">
        <a href="https://www.instagram.com/difhaels/?hl=id" target={"_blank"} rel="noreferrer" className="card-agent-odd">
          <img src={Agung} alt="Agung" className="card-image-about" />
          <div>
            <h1 className="card-text-about">Agung Saputra</h1>
            <div className="card-line-about"></div>
            <h1 className="card-text-about">Difhaels</h1>
          </div>
        </a>

        <a href="https://www.instagram.com/aruchvy_/" target={"_blank"} rel="noreferrer" className="card-agent-even">
          <img src={Aru} alt="Aru" className="card-image-about" />
          <div>
            <h1 className="card-text-about">Aru Chevy</h1>
            <div className="card-line-about"></div>
            <h1 className="card-text-about">Grouu</h1>
          </div>
        </a>

        <a href="https://www.instagram.com/salf_yurara/?hl=id" target={"_blank"} rel="noreferrer" className="card-agent-odd">
          <img src={Albi} alt="Albi" className="card-image-about" />
          <div>
            <h1 className="card-text-about">Albi Fahri</h1>
            <div className="card-line-about"></div>
            <h1 className="card-text-about">Kuroneko</h1>
          </div>
        </a>

        <a href="https://www.instagram.com/krisna.svx/?hl=id" target={"_blank"} rel="noreferrer" className="card-agent-even">
          <img src={Krisna} alt="Krisna" className="card-image-about" />
          <div>
            <h1 className="card-text-about">Krisna Setyo</h1>
            <div className="card-line-about"></div>
            <h1 className="card-text-about">S v X</h1>
          </div>
        </a>

        <a href="https://www.instagram.com/wsnuhrtno_._/?hl=id" target={"_blank"} rel="noreferrer" className="card-agent-odd">
          <img src={Wisnu} alt="WISNU" className="card-image-about" />
          <div>
            <h1 className="card-text-about">Wisnu Hartono</h1>
            <div className="card-line-about"></div>
            <h1 className="card-text-about">Wsnuhrtno</h1>
          </div>
        </a>
      </div>
    </div>
  );
}
