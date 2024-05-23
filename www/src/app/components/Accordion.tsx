"use client"

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

export function SubmittingATalk() {
  return (
    <Accordion allowZeroExpanded={true}>
      <AccordionItem className="border-b border-black">
        <AccordionItemHeading>
          <AccordionItemButton className="accordion__button py-4 text-3xl md:text-4xl leading-tight tracking-tight cursor-pointer border-b-1 border-black hover:text-ctjs-red">
            How do I submit a talk?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel style={{paddingLeft: '60px'}}>
          <p className="text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            Visit the our site GitHub repository and <a href="https://github.com/sanctuarycomputer/chinatown.js" target="_blank" className="underline decoration-wavy underline-offset-4 decoration-1 hover:text-ctjs-red" rel="noopener noreferrer">create a new issue</a> using the template. Make sure to pick up to 3 months that work for you!
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem className="border-b border-black">
        <AccordionItemHeading>
          <AccordionItemButton className="accordion__button py-4 text-3xl md:text-4xl leading-tight tracking-tight cursor-pointer border-b-1 border-black hover:text-ctjs-red">
            What would be a good talk topic?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel style={{paddingLeft: '60px'}}>
          <p className="text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            We accept a variety of technical and non-technical talks and the audience has varying technical backgrounds and interests.
          </p>
          <p className="text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            Talks from accepted proposals have focused on, but not limited to:
          </p>
          <ul className="text-3xl md:text-4xl leading-tight tracking-tight mb-4 list-disc list-inside">
            <li>Sharing the process and journey of how you created something and what you&apos;ve learned.</li>
            <li>Achieving empathy in the workplace.</li>
            <li>A dive into a particular technical concept.</li>
          </ul>
          <p className="text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            Examples of topics that may not get accepted:
          </p>
          <ul className="text-3xl md:text-4xl leading-tight tracking-tight mb-4 list-disc list-inside	">
            <li>Why x framework is better than y framework.</li>
            <li>How a tool/language/library works.</li>
            <li>Startup or company pitches.</li>
          </ul>
          <p className="text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            We&apos;ve found that the best talks tell a story, we encourage you to get creative!
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem className="border-b border-black">
        <AccordionItemHeading>
          <AccordionItemButton className="accordion__button py-4 text-3xl md:text-4xl leading-tight tracking-tight cursor-pointer border-b-1 border-black hover:text-ctjs-red">
            What do speakers get?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel style={{paddingLeft: '60px'}}>
          <ul className="text-3xl md:text-4xl leading-tight tracking-tight mb-4 list-disc list-inside	">
            <li>2 ChinatownJS ticket s(Free) for you to attend and bring a friend.</li>
            <li>10 minutes to present what you are excited about.</li>
          </ul>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem className="border-b border-black">
        <AccordionItemHeading>
          <AccordionItemButton className="accordion__button py-4 text-3xl md:text-4xl leading-tight tracking-tight cursor-pointer border-b-1 border-black hover:text-ctjs-red">
            When are speakers chosen?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel style={{paddingLeft: '60px'}}>
          <p className="text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            We usually select speakers two weeks before an event, the day before tickets go on sale.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem className="border-b border-black">
        <AccordionItemHeading>
          <AccordionItemButton className="accordion__button py-4 text-3xl md:text-4xl leading-tight tracking-tight cursor-pointer border-b-1 border-black hover:text-ctjs-red">
            I have more questions about submitting talks, what should I do?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel style={{paddingLeft: '60px'}}>
          <p className="text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            Please feel free to email us at <a href="mailto:ctjs@sanctuary.computer"  target="_blank" className="underline decoration-wavy underline-offset-4 decoration-1 hover:text-ctjs-red" rel="noopener noreferrer">ctjs@sanctuary.computer</a>
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}

export function SpeakingAtChinatownJS() {
  return (
    <Accordion allowZeroExpanded={true}>

      <AccordionItem className="border-b border-black">
        <AccordionItemHeading>
          <AccordionItemButton className="accordion__button py-4 text-3xl md:text-4xl leading-tight tracking-tight cursor-pointer border-b-1 border-black hover:text-ctjs-red">
            How long is my talk?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel style={{paddingLeft: '60px'}}>
          <p className="text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            Each talk is 10 minutes. We&apos;ll have a countdown clock on the wall for your reference.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem className="border-b border-black">
        <AccordionItemHeading>
          <AccordionItemButton className="accordion__button py-4 text-3xl md:text-4xl leading-tight tracking-tight cursor-pointer border-b-1 border-black hover:text-ctjs-red">
            Speaker Checklist
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel style={{paddingLeft: '60px'}}>
          <p className="text-3xl md:text-4xl leading-tight tracking-tight mb-4 underline underline-offset-4 decoration-1">
            Slides
          </p>
          <p className="text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            If you are live coding or showing your terminal etc, please keep your font size LARGE!
          </p>
          <p className="text-3xl md:text-4xl leading-tight tracking-tight mb-4 underline underline-offset-4 decoration-1">
            Equipment
          </p>
          <p className="text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            We have:
          </p>
          <ul className="text-3xl md:text-4xl leading-tight tracking-tight mb-4 list-disc list-inside	">
            <li>Projector</li>
            <li>Chromecast</li>
            <li>WiFi</li>
          </ul>
          <p className="text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            Our space is intimate, and we’ll be running these talks without microphones. Please use this as an opportunity to practice your vocal projection!
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem className="border-b border-black">
        <AccordionItemHeading>
          <AccordionItemButton className="accordion__button py-4 text-3xl md:text-4xl leading-tight tracking-tight cursor-pointer border-b-1 border-black hover:text-ctjs-red">
            Program
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel style={{paddingLeft: '60px'}}>
          <p className="text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            Once the event starts, we&apos;ll have an intermission between each talk. If you are the next presenter, please come up to the podium at the front to setup for your presentation during the intermission.
          </p>
          <p className="text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            If you want to test out slides/equipment etc, feel free to do so before the event. Just contact one of the organizers.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

    </Accordion>
  );
}