import { PageShell, Hero, Section, Cards, Placeholder } from './components';
import { schedule, site } from './data';

export default function Home(){
  return <PageShell>
    <Hero text="Welcome to Lucy's Quinceañera — a celebration of love, family, elegance, and unforgettable memories." />
    <Section kicker="Guest Experience" title="Everything in one beautiful place">
      <Cards items={[["Manage RSVP","Open your personalized RSVP portal to update your response and guest information.","Private Portal"],["Event Details","Find the schedule, dress code, venue information, and updates as the celebration gets closer.","Coming Soon"],["Travel Guide","Hotels, flights, restaurants, and helpful recommendations for out-of-town guests.","Guest Guide"]]} />
    </Section>
    <Section kicker="Countdown" title="January 4, 2027">
      <p>The final countdown can connect to your RSVP portal later. For now, this page is designed as a luxury branded mockup ready for your real photos and video.</p>
      <div className="cards"><div className="card"><h3>190 Days</h3><p>Time to prepare, celebrate, and make every detail beautiful.</p></div><div className="card"><h3>RSVP Portal</h3><p>Connect this button to your existing Vercel RSVP portal.</p><a className="glassBtn" href={site.rsvpUrl}>Open Portal</a></div><div className="card"><h3>Text Updates</h3><p>Twilio can send guests a portal link after they RSVP.</p></div></div>
    </Section>
    <Section kicker="Preview" title="Photo and video moments">
      <Placeholder label="Welcome Video Placeholder" />
    </Section>
    <Section kicker="Schedule Preview" title="A beautiful evening">
      <div className="timeline">{schedule.map(([time,event])=><div className="timelineItem" key={time}><strong>{time}</strong><span>{event}</span></div>)}</div>
    </Section>
  </PageShell>
}
