import Marquee from "react-fast-marquee";
import ChinatownJS from "@/app/components/ChinatownJS";
import WelcomeAll from "@/app/components/WelcomeAll";

import { SubmittingATalk, SpeakingAtChinatownJS } from "@/app/components/Accordion";

const SHOW_SPEAKERS = false;

type Speaker = {
  title: string;
  link: string;
}

const SPEAKER: Speaker[] = [{
  title: "Johan Michalove — FireAid: Mapping Mutual Aid in LA",
  link: "https://github.com/sanctuarycomputer/chinatown.js/issues/27"
}, {
  title: "Hyning Gan — Augmenting Tradition: Bilingual Typography in the Digital Age",
  link: "https://github.com/sanctuarycomputer/chinatown.js/issues/21"
}, {
  title: "Elijah Kennedy — Welcome to the Socketverse",
  link: "https://github.com/sanctuarycomputer/chinatown.js/issues/10"
}];

export default function Home() {
  return (
    <main className="w-full pt-24">
      <div className="fixed top-0 flex flex-row w-full z-50">
        <Marquee className="marquee bg-ctjs-yellow border-ctjs-red border-solid border-4 flex-grow m-8">
          <p className="text-ctjs-red text-4xl md:text-6xl">Next event: May 6th 7–9:00 PM 120 Walker 3rd Floor ☞☞☞</p>
        </Marquee>
        <a className="text-4xl md:text-6xl bg-white hover:bg-ctjs-red border-ctjs-red border-solid border-4 mr-8 my-8 flex flex-col justify-center px-4 text-ctjs-red hover:text-white" href="https://lu.ma/be2931t8" target="_blank">
          Tickets
        </a>
      </div>

      <section className="bg-white md:flex md:flex-row px-8 pt-8 pb-24 relative md:mb-4">
        <div className="md:w-1/2 md:pr-2">
          <h2 className="text-4xl md:text-6xl leading-tight tracking-tight pb-8">Program</h2>
          <p className="text-3xl md:text-4xl leading-tight tracking-tight pb-8">
            Chinatown JS features three or four 10-minute talks by Javascript developers on both technical and non-technical topics. <a href="https://github.com/sanctuarycomputer/chinatown.js" target="_blank" className="underline decoration-wavy underline-offset-4 decoration-1 hover:text-ctjs-red" rel="noopener noreferrer">Submit a talk</a> if you’d like to be featured at our next event!
          </p>
          <p className="text-3xl md:text-4xl leading-tight tracking-tight pb-8">
            Snacks & drinks will be served.
          </p>
        </div>
        <div className="md:w-1/2 md:pl-2 flex-col flex-grow text-right">
          <div className="text-center bg-white border-ctjs-red border-solid border-4 w-full h-full text-ctjs-red text-6xl flex flex-col justify-center p-16">
            <ChinatownJS />
          </div>
          <p className="text-3xl md:text-2xl leading-tight tracking-tight pb-8 pt-2 text-ctjs-red">
            Hosted by <a href="https://www.sanctuary.computer/" target="_blank" className="underline decoration-wavy underline-offset-4 decoration-1 hover:text-ctjs-red" rel="noopener noreferrer">Sanctuary Computer</a> at <a href="https://www.index-space.org/irl/nyc" target="_blank" className="underline decoration-wavy underline-offset-4 decoration-1 hover:text-ctjs-red" rel="noopener noreferrer">Index NYC</a>.
          </p>
        </div>
      </section>

      <section className="bg-white md:flex md:flow-row px-8 pt-8 pb-24 relative md:mb-4">
        <div className="w-full sm:w-1/2 md:w-1/3 aspect-square relative p-8">
          <div className="bg-ctjs-green w-full h-full absolute top-0 bottom-0 left-0 right-0"></div>
            <p className="text-white text-4xl md:text-5xl leading-tight tracking-tight text-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
              <a href={SHOW_SPEAKERS ? SPEAKER[0].link : "https://github.com/sanctuarycomputer/chinatown.js"} target="_blank" className="underline decoration-wavy underline-offset-4 decoration-1 hover:text-ctjs-red" rel="noopener noreferrer">
                {SHOW_SPEAKERS ? SPEAKER[0].title : "Be our first speaker!"}
              </a>
            </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 aspect-square relative p-8 mx-auto">
          <div className="polygon bg-ctjs-pink w-full h-full absolute top-0 bottom-0 left-0 right-0"></div>
          <p className="text-black text-4xl md:text-5xl leading-tight tracking-tight text-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <a href={SHOW_SPEAKERS ? SPEAKER[1].link : "https://github.com/sanctuarycomputer/chinatown.js"} target="_blank" className="underline decoration-wavy underline-offset-4 decoration-1 hover:text-ctjs-red" rel="noopener noreferrer">
              {SHOW_SPEAKERS ? SPEAKER[1].title : "Be our second speaker!"}
            </a>
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 aspect-square relative p-8 ml-auto">
          <div className="bg-ctjs-blue  w-full h-full absolute top-0 bottom-0 left-0 right-0 rounded-full"></div>
          <p className=" text-ctjs-red text-4xl md:text-5xl leading-tight tracking-tight text-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <a href={SHOW_SPEAKERS ? SPEAKER[2].link : "https://github.com/sanctuarycomputer/chinatown.js"} target="_blank" className="underline decoration-wavy underline-offset-4 decoration-1 hover:text-ctjs-red" rel="noopener noreferrer">
              {SHOW_SPEAKERS ? SPEAKER[2].title : "Be our third speaker!"}
            </a>
          </p>
        </div>
      </section>

      <section className="grid grid-cols-4 gap-4 md:gap-8 px-8 w-100 place-items-center">
        <img src="/_next/image?url=/images/photo-1.jpeg&w=1200&q=80" />
        <div className="col-span-2 w-full h-full bg-no-repeat bg-cover" style={{backgroundImage: "url(/_next/image?url=/images/photo-2.jpeg&w=1200&q=80)"}}>
        </div>
        <img src="/_next/image?url=/images/photo-3.jpeg&w=1200&q=80" />
        <div className="col-span-2 w-full h-full bg-no-repeat bg-cover" style={{backgroundImage: "url(/_next/image?url=/images/photo-4.jpeg&w=1200&q=80)"}}>
        </div>
        <img src="/_next/image?url=/images/photo-5.jpeg&w=1200&q=80" />
        <img src="/_next/image?url=/images/photo-6.jpeg&w=1200&q=80" />
      </section>

      <section className="bg-ctjs-white md:flex md:flex-row p-8 relative md:mt-8">
        <div className="md:w-1/2 md:pr-2">
          <WelcomeAll />
          <p className="text-3xl md:text-4xl leading-tight tracking-tight pt-4">
            Whether you’re a pro Typescript developer, student interested in technology, or curious neighbor, all are welcome!
          </p>
        </div>
        <div className="md:w-1/2 md:pl-2">
        </div>
      </section>

      <section className="bg-ctjs-white md:flex md:flex-row p-8 relative md:mb-4">
        <div className="md:w-1/2 md:pr-2">
        </div>
        <div className="md:w-1/2 md:pl-2">
          <p className="text-3xl md:text-4xl leading-tight tracking-tight pb-8">
            We reserve a handful free tickets for each event for local youth in our neighborhood. Email us at <a href="mailto:ctjs@sanctuary.computer"  target="_blank" className="underline decoration-wavy underline-offset-4 decoration-1 hover:text-ctjs-red" rel="noopener noreferrer">ctjs@sanctuary.computer</a> to snag one.
          </p>
        </div>
      </section>

      <section className="bg-ctjs-yellow md:flex md:flex-row p-8 relative md:pt-12">
        <div className="md:w-1/2 md:pr-2">
          <h2 className="text-4xl md:text-6xl leading-tight tracking-tight pb-8">Submit a Talk</h2>
          <p className="text-3xl md:text-4xl leading-tight tracking-tight pb-8">
            We welcome & encourage everyone to submit a talk! Whether you have been writing JavaScript for 20 years or few days, experienced or 1st time speaker, we want to hear what you are excited about.
          </p>
        </div>
        <div className="md:w-1/2 md:pl-2">
          <SubmittingATalk />
        </div>
      </section>

      <section className="bg-ctjs-yellow md:flex md:flow-row p-8 relative">
        <div className="md:w-1/2 md:pr-2">
          <h2 className="text-4xl md:text-6xl leading-tight tracking-tight pb-8">Speaking at ChinatownJS</h2>
          <p className="text-3xl md:text-4xl leading-tight tracking-tight pb-8">
            We are excited to have you as speaker! Here are few things to keep in mind while making your talk. If you have any questions or want to discuss your talk with organizers, please feel free to reach out.
          </p>
        </div>
        <div className="md:w-1/2 md:pl-2">
          <SpeakingAtChinatownJS />
        </div>
      </section>

      <section className="bg-ctjs-yellow md:flex md:flex-row p-8 relative md:pb-12">
        <div className="md:w-1/2 md:pr-2">
          <h2 className="text-4xl md:text-6xl leading-tight tracking-tight pb-8">Attending ChinatownJS</h2>
        </div>
        <div className="md:w-1/2 md:pl-2">
          <p className="text-3xl md:text-4xl leading-tight tracking-tight pb-4 underline underline-offset-4 decoration-1">
            Event Capacity
          </p>
          <p className="text-3xl md:text-4xl leading-tight tracking-tight pb-8">
            Our space accommodates up to 60 people. Early arrivals get the best seats! Please let us know if you have special requirements for seating (ie, a seat with a back; space for a wheelchair). We’d be more than happy to accommodate.
          </p>

          <p className="text-3xl md:text-4xl leading-tight tracking-tight pb-4 underline underline-offset-4 decoration-1">
            Food & drinks
          </p>
          <p className="text-3xl md:text-4xl leading-tight tracking-tight pb-8">
            We’ll provide beer, non-alcoholic drinks, and some of our neighborhood favorites (dumplings).
          </p>

          <p className="text-3xl md:text-4xl leading-tight tracking-tight pb-4 underline underline-offset-4 decoration-1">
            Accessibility
          </p>
          <p className="text-3xl md:text-4xl leading-tight tracking-tight pb-8">
            Index NYC is ADA accessible.
          </p>

          <p className="text-3xl md:text-4xl leading-tight tracking-tight pb-4 underline underline-offset-4 decoration-1">
            Code of Conduct
          </p>
          <p className="text-3xl md:text-4xl leading-tight tracking-tight pb-8">
            Respect &gt; everything. <a href="https://garden3d.notion.site/Code-of-Conduct-Index-41bb9a1daa0b4fb9bfd03e5a18390556" target="_blank" className="underline decoration-wavy underline-offset-4 decoration-1 hover:text-ctjs-red" rel="noopener noreferrer">Read our full CoC here</a>.
          </p>
        </div>
      </section>

      <footer className="bg-ctjs-blue md:flex md:flex-row p-8 relative md:pt-12">
        <div className="md:w-1/2 md:pr-2">
          <h2 className="text-3xl md:text-4xl leading-tight tracking-tight pb-8 md:pb-16">
          <a href="https://www.sanctuary.computer/" target="_blank" className="underline decoration-wavy underline-offset-4 decoration-1 hover:text-ctjs-red" rel="noopener noreferrer">Sanctuary Computer</a> is a software & technology development studio based in Chinatown NYC.
          </h2>
          <p className="text-3xl md:text-4xl leading-tight tracking-tight">120 Walker St.</p>
          <p className="text-3xl md:text-4xl leading-tight tracking-tight">3rd Floor</p>
          <p className="text-3xl md:text-4xl leading-tight tracking-tight pb-8 md:pb-16">New York, NY, 10013</p>
        </div>
        <div className="md:w-1/2 md:pl-2 md:text-right">
          <a href="https://www.instagram.com/sanctucompu" target="_blank"><p className="hover:text-ctjs-red text-3xl md:text-4xl leading-tight tracking-tight underline decoration-wavy underline-offset-4 decoration-1" rel="noopener noreferrer">Instagram</p></a>
          <a href="https://x.com/sanctucompu" target="_blank"><p className="hover:text-ctjs-red text-3xl md:text-4xl leading-tight tracking-tight underline decoration-wavy underline-offset-4 decoration-1" rel="noopener noreferrer">Twitter</p></a>
          <a href="https://github.com/sanctuarycomputer/chinatown.js" target="_blank"><p className="hover:text-ctjs-red text-3xl md:text-4xl leading-tight tracking-tight underline decoration-wavy underline-offset-4 decoration-1" rel="noopener noreferrer">Github</p></a>
        </div>
      </footer>
    </main>
  );
}
