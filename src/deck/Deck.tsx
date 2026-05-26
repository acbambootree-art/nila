import SlideCover from './slides/Slide01Cover'
import SlideFounder from './slides/Slide02Founder'
import SlideSecret from './slides/Slide03Secret'
import SlideFirst from './slides/Slide04First'
import SlideVoyage from './slides/Slide05Voyage'
import SlideDepth from './slides/Slide06Depth'
import SlideMonths from './slides/Slide07Months'
import SlideScience from './slides/Slide08Science'
import SlideSustain from './slides/Slide09Sustain'
import SlideCollection from './slides/Slide10Collection'
import SlideHero from './slides/Slide11Hero'
import SlideCTA from './slides/Slide12CTA'

const total = 12
const props = { waveSpeed: 1, bubbles: true, total }

export default function Deck() {
  return (
    <deck-stage width="1920" height="1080">
      <section data-label="01 Cover">          <SlideCover     idx={1}  {...props} /></section>
      <section data-label="02 Founder">        <SlideFounder   idx={2}  {...props} /></section>
      <section data-label="03 Origin">         <SlideSecret    idx={3}  {...props} /></section>
      <section data-label="04 Singapore First"><SlideFirst     idx={4}  {...props} /></section>
      <section data-label="05 Voyage">         <SlideVoyage    idx={5}  {...props} /></section>
      <section data-label="06 Depth">          <SlideDepth     idx={6}  {...props} /></section>
      <section data-label="07 Six Months">     <SlideMonths    idx={7}  {...props} /></section>
      <section data-label="08 Science">        <SlideScience   idx={8}  {...props} /></section>
      <section data-label="09 Sustainability"> <SlideSustain   idx={9}  {...props} /></section>
      <section data-label="10 Collection">     <SlideCollection idx={10} {...props} /></section>
      <section data-label="11 Hero Bottle">    <SlideHero      idx={11} {...props} /></section>
      <section data-label="12 CTA">            <SlideCTA       idx={12} {...props} /></section>
    </deck-stage>
  )
}
