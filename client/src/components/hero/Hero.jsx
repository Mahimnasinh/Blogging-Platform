import "./Hero.css";
import { hero } from "../../assets";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="Hero">
        <div className="HeroTitile">
            <span className="HeroTitleLg">Welcome! </span>
            <span className="HeroTitleMd">Start your journey here by creating your own blog and</span>
            <span className="HeroTitleSm">sharing your <a>thoughts</a> with the world.</span>
            <Link to="/write"><div className="button">
                <a>Create your Blog</a>
            </div></Link>
        </div>
        <img className="HeroImg" src={hero}/>
    </div>

  )
}
// "Welcome! Start your journey here by creating your own blog and sharing your thoughts with the world."










