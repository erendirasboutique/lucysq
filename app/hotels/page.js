import { PageShell, Hero, Section, Cards } from '../components';import { hotels } from '../data';
export default function Page(){return <PageShell><Hero eyebrow="Hotels" title="Recommended Stays" text="Hotel options for family and guests traveling in for the celebration."/><Section kicker="Stay Nearby" title="Hotel recommendations"><Cards items={hotels}/></Section></PageShell>}
