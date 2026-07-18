import Image from "next/image";
import { RoyalElephant } from "./RoyalElephant";
import { MotionEffects } from "./MotionEffects";
import { RoyalWelcome } from "./RoyalWelcome";

const ASSET_ROOT = "/assets";

const squad = [
  "Alok Awasthi",
  "Atul Pratap Singh",
  "Harshit Mishra",
  "Swastick Mishra",
  "Ashwani Yadav",
  "Saurabh Singh",
  "Arpit Singh",
  "Utkarsh Srivastav",
  "Neeraj Verma",
  "Ashish Narayan",
  "Mayank Mishra",
  "Vivek Yadav",
  "Govind Kumar",
  "Anjani Dwivedi",
];

export default function Home() {
  return (
    <main>
      <MotionEffects />
      <RoyalWelcome />
      <nav className="topbar" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Gajraj Legion home">
          <span>GL</span> GAJRAJ LEGION
        </a>
        <div className="navlinks">
          <a href="#story">Story</a><a href="#leaders">Leaders</a><a href="#squad">Squad</a>
        </div>
        <a className="nav-cta" href="#squad">Meet the XIV <span>↘</span></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span>UTPL 2026</span> • T25 CRICKET • UNNAO</p>
          <h1 aria-label="The Legion has arrived">
            <span className="hero-title-line">THE LEGION</span>
            <span className="hero-title-line hero-title-line-accent">HAS <em>ARRIVED.</em></span>
          </h1>
          <p className="dek">Fourteen teachers. One crest. A new chapter in Unnao cricket begins in sky blue.</p>
          <div className="hero-actions">
            <a className="button dark" href="#squad">Explore the squad <span>↓</span></a>
            <span className="edition">01 / THE INAUGURAL CAMPAIGN</span>
          </div>
        </div>
        <div className="hero-art">
          <RoyalElephant />
          <div className="red-disc" />
          <div className="line-orbit" />
          <Image src={`${ASSET_ROOT}/gajraj-crest.jpg`} alt="Gajraj Legion elephant and cricket crest" width={1350} height={1540} priority />
          <p className="vertical-note">STRENGTH • WISDOM • UNITY</p>
        </div>
        <div className="hero-ticker"><span>शिक्षक खिलाड़ी — निपुण विद्यार्थी</span><b>GAJRAJ LEGION</b><span>UNNAO TEACHERS’ PREMIER LEAGUE</span></div>
      </section>

      <section className="manifesto" id="story">
        <div className="royal-motifs" aria-hidden="true"><span className="crown-motif">♛</span><span className="bat-motif"/><span className="ball-motif"/><span className="wicket-motif"/></div>
        <p className="section-index">01 — OUR CREED</p>
        <h2>IN THE CLASSROOM,<br/>WE SHAPE <span>MINDS.</span><br/>ON THE FIELD,<br/>WE SHAPE <i>HISTORY.</i></h2>
        <div className="manifesto-foot">
          <p>Born from the Basic Education Department of Unnao, Gajraj Legion brings together educators who lead with patience, play with courage, and stand as one.</p>
          <div className="circle-copy">ONE TEAM<br/>ONE LEGION<br/>ONE VICTORY</div>
        </div>
      </section>

      <section className="elephant-gallery" aria-label="Royal elephant spirit of Gajraj Legion">
        <div className="elephant-scene procession"><span>ROYAL STRENGTH</span></div>
        <div className="elephant-scene charge"><span>FEARLESS PURPOSE</span></div>
        <div className="elephant-scene armour"><span>LEGION SPIRIT</span></div>
        <div className="elephant-gallery-copy"><b>GAJRAJ</b><small>Royal in bearing. Relentless in play.</small></div>
      </section>

      <section className="leaders" id="leaders">
        <div className="leaders-title">
          <p className="section-index">02 — THE LEADERSHIP</p>
          <h2>THREE LEADERS.<br/><span>ONE MISSION.</span></h2>
        </div>
        <article className="leader-card owner">
          <Image className="leader-photo" src={`${ASSET_ROOT}/alok-awasthi.jpg`} alt="Alok Awasthi, owner of Gajraj Legion" fill sizes="(max-width: 900px) 50vw, 33vw" />
          <div className="leader-shade" />
          <span className="role">TEAM OWNER</span><span className="number">01</span>
          <h3>ALOK<br/>AWASTHI</h3>
          <p>“A team is built long before the first ball is bowled.”</p>
        </article>
        <article className="leader-card captain">
          <Image className="leader-photo" src={`${ASSET_ROOT}/mayank-mishra.png`} alt="Mayank Mishra, captain of Gajraj Legion" fill sizes="(max-width: 900px) 50vw, 33vw" />
          <div className="leader-shade" />
          <span className="role">CAPTAIN</span><span className="number">11</span>
          <h3>MAYANK<br/>MISHRA</h3>
          <p>Leading fourteen educators into one fearless unit.</p>
        </article>
        <article className="leader-card vice-captain">
          <Image className="leader-photo" src={`${ASSET_ROOT}/saurabh-singh.png`} alt="Saurabh Singh, vice captain of Gajraj Legion" fill sizes="(max-width: 900px) 50vw, 25vw" />
          <div className="leader-shade" />
          <span className="role">VICE CAPTAIN</span><span className="number">06</span>
          <h3>SAURABH<br/>SINGH</h3>
          <p>Bringing calm authority and match-day intent to the Legion core.</p>
        </article>
      </section>

      <section className="kit-section">
        <div className="cricket-mark cricket-mark-one" aria-hidden="true"><span/><i/></div>
        <div className="cricket-mark cricket-mark-two" aria-hidden="true"><span/><i/></div>
        <div className="kit-copy">
          <p className="section-index">03 — THE COLOURS</p>
          <h2>WEAR THE<br/><span>SKY.</span><br/>CARRY THE<br/><i>CROWN.</i></h2>
          <p>The elephant stands for strength held with wisdom. Gold marks ambition. Sky blue carries the openness of every possibility.</p>
        </div>
        <div className="jersey-3d motion-reveal is-visible" role="img" aria-label="Gajraj Legion jersey rotating to show its front and back">
          <div className="jersey-3d-spin">
            <div className="jersey-face jersey-face-front">
              <Image src={`${ASSET_ROOT}/gajraj-jersey-front.png`} alt="" fill sizes="(max-width: 760px) 84vw, 45vw" />
            </div>
            <div className="jersey-face jersey-face-back">
              <Image src={`${ASSET_ROOT}/gajraj-jersey-back.png`} alt="" fill sizes="(max-width: 760px) 84vw, 45vw" />
            </div>
          </div>
          <span className="jersey-3d-label">360° KIT VIEW</span>
        </div>
      </section>

      <section className="squad" id="squad">
        <div className="squad-watermark" aria-hidden="true">♛</div>
        <div className="squad-head">
          <div><p className="section-index">04 — THE PLAYING GROUP</p><h2>MEET THE <span>XIV.</span></h2></div>
          <p>Teachers by calling.<br/>Cricketers by spirit.<br/>A legion by choice.</p>
        </div>
        <div className="roster">
          {squad.map((name, i) => (
            <div className={`player ${i === 0 || i === 5 || i === 10 ? "featured" : ""}`} key={name}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <h3>{name}</h3>
              <b>{i === 0 ? "OWNER" : i === 5 ? "VICE CAPTAIN" : i === 10 ? "CAPTAIN" : "GAJRAJ LEGION"}</b>
              <i>↗</i>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <div className="footer-crest"><Image src={`${ASSET_ROOT}/gajraj-crest.jpg`} alt="Gajraj Legion crest" width={260} height={296} /></div>
        <h2>ONE TEAM.<br/>ONE LEGION.<br/><span>ONE VICTORY.</span></h2>
        <div className="footer-meta"><span>GAJRAJ LEGION © 2026</span><span>UNNAO TEACHERS’ PREMIER LEAGUE • T25</span><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}
