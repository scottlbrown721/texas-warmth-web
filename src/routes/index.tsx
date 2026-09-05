import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  CalendarCheck,
  ShieldCheck,
  HeartHandshake,
  Clock,
  BadgeCheck,
  Users,
  Home,
  Building2,
  Sparkles,
  MapPin,
  Mail,
  Check,
  Info,
} from "lucide-react";

import heroImg from "@/assets/hero-care.jpg";
import differenceImg from "@/assets/difference.jpg";

const PHONE_DISPLAY = "(210) 369-8103";
const PHONE_HREF = "tel:2103698103";

const title = "In-Home Care in San Antonio, TX | Gloria's Angels Caregivers Services";
const description =
  "Non-medical in-home care in San Antonio & Bexar County. Personal care, companion & homemaker services, and facility staffing for ALFs and SNFs. Available 24/7.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          additionalType: "https://schema.org/HomeHealthCareService",
          name: "Gloria's Angels Caregivers Services",
          description,
          telephone: "+1-210-369-8103",
          areaServed: [
            { "@type": "City", name: "San Antonio" },
            { "@type": "AdministrativeArea", name: "Bexar County" },
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "San Antonio",
            addressRegion: "TX",
            addressCountry: "US",
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        }),
      },
    ],
  }),
});

const badges = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: BadgeCheck, label: "Background-Checked Caregivers" },
  { icon: Clock, label: "Available 24/7" },
  { icon: MapPin, label: "Serving All of Bexar County" },
];

const services = [
  {
    icon: HeartHandshake,
    name: "Personal Care",
    blurb:
      "Hands-on help with bathing, dressing, grooming, mobility and everyday dignity — delivered by caregivers who treat your loved one like family.",
    href: "#personal-care",
  },
  {
    icon: Home,
    name: "Companion & Homemaker",
    blurb:
      "Conversation, errands, meal preparation and a tidy, safe home so seniors can stay independent and connected where they're most comfortable.",
    href: "#companion",
  },
  {
    icon: Building2,
    name: "Facility Staffing",
    blurb:
      "Dependable, pre-vetted caregivers and aides for assisted living facilities and skilled nursing facilities — on short notice, around the clock.",
    href: "#staffing",
  },
];

const difference = [
  {
    icon: Users,
    title: "Carefully matched caregivers",
    body: "We introduce you to the caregiver before care begins, and we match on personality and routine — not just availability.",
  },
  {
    icon: Sparkles,
    title: "A written plan of care",
    body: "Every client gets a personalized plan built with the family, reviewed regularly and updated as needs change.",
  },
  {
    icon: Phone,
    title: "A real person answers",
    body: "Days, nights, weekends and holidays. When something changes at 2 a.m., you reach our team — not a voicemail box.",
  },
  {
    icon: ShieldCheck,
    title: "Screened, trained, supervised",
    body: "Background checks, ongoing training and supervisory visits keep the standard of care consistent in every home.",
  },
];

function CallButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={PHONE_HREF}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-7 py-4 text-base font-bold text-terracotta-foreground shadow-lg transition hover:brightness-110 ${className}`}
    >
      <Phone className="h-5 w-5" aria-hidden="true" />
      Call Now: {PHONE_DISPLAY}
    </a>
  );
}

function ScheduleButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="#contact"
      className={`inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary bg-card px-7 py-4 text-base font-bold text-primary transition hover:bg-primary hover:text-primary-foreground ${className}`}
    >
      <CalendarCheck className="h-5 w-5" aria-hidden="true" />
      Schedule a Free In-Home Assessment
    </a>
  );
}

function ServiceDetail({
  id,
  eyebrow,
  heading,
  intro,
  items,
  note,
}: {
  id: string;
  eyebrow: string;
  heading: string;
  intro: string;
  items: string[];
  note: string;
}) {
  return (
    <article id={id} className="scroll-mt-24 rounded-3xl border bg-card p-7 sm:p-10">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-terracotta">{eyebrow}</p>
      <h3 className="mt-3 text-3xl font-semibold sm:text-4xl">{heading}</h3>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">{intro}</p>
      <ul className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="mt-7 rounded-2xl bg-secondary px-5 py-4 text-sm leading-relaxed text-secondary-foreground">
        {note}
      </p>
    </article>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Notification bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-1 px-4 py-2.5 text-center text-sm sm:flex-row sm:justify-center sm:gap-3">
          <span>Providing Compassionate In-Home Care in San Antonio</span>
          <span className="hidden sm:inline opacity-50">|</span>
          <a href={PHONE_HREF} className="font-bold underline underline-offset-4">
            Available 24/7: {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <a href="#top" className="leading-tight">
            <span className="block font-display text-xl font-semibold text-primary sm:text-2xl">
              Gloria's Angels
            </span>
            <span className="block text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Caregivers Services
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
            <a href="#services" className="hover:text-primary">Services</a>
            <a href="#difference" className="hover:text-primary">Gloria's Difference</a>
            <a href="#staffing" className="hover:text-primary">Facility Staffing</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </nav>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 rounded-full bg-terracotta px-4 py-2.5 text-sm font-bold text-terracotta-foreground shadow"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="border-b bg-cream">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:py-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
                Non-Medical In-Home Care · San Antonio & Bexar County
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
                Compassionate care that lets your loved one stay home.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Gloria's Angels Caregivers Services provides trusted personal care, companionship and
                homemaking across San Antonio — plus dependable caregiver staffing for assisted living
                and skilled nursing facilities. Care plans start at a few hours a week and go up to
                24-hour support.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <CallButton />
                <ScheduleButton />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Free, no-obligation assessment. Someone answers every hour of every day.
              </p>
            </div>
            <div className="overflow-hidden rounded-3xl border shadow-xl">
              <img
                src={heroImg}
                alt="Caregiver holding hands with a smiling senior woman in her San Antonio home"
                width={1344}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Trust badges */}
        <section className="border-b bg-background">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-8 lg:grid-cols-4">
            {badges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 rounded-2xl bg-secondary px-4 py-3">
                <Icon className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="text-sm font-semibold leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Service overview */}
        <section id="services" className="scroll-mt-24 border-b py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="max-w-2xl text-3xl font-semibold sm:text-4xl">
              Care built around your family's day, not ours
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Three ways we support seniors and care partners throughout San Antonio, Alamo Heights,
              Stone Oak, Helotes, Converse, Schertz and the rest of Bexar County.
            </p>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {services.map(({ icon: Icon, name, blurb, href }) => (
                <a
                  key={name}
                  href={href}
                  className="group rounded-3xl border bg-card p-7 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sage text-primary">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold">{name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{blurb}</p>
                  <span className="mt-5 inline-block text-sm font-bold text-terracotta">
                    Learn more about {name} →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Gloria's Difference */}
        <section id="difference" className="scroll-mt-24 border-b bg-cream py-16 lg:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border shadow-lg">
              <img
                src={differenceImg}
                alt="Caregiver and senior man laughing together while making tea in a home kitchen"
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
                Gloria's Difference
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                The care we'd want for our own mother
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Gloria's Angels was built on a simple promise: no family should have to choose between
                safety and independence. Here's what that looks like in practice.
              </p>
              <ul className="mt-8 space-y-6">
                {difference.map(({ icon: Icon, title: t, body }) => (
                  <li key={t} className="flex gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-card text-primary shadow-sm">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold">{t}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Detailed services */}
        <section className="border-b py-16 lg:py-20">
          <div className="mx-auto max-w-6xl space-y-8 px-4">
            <h2 className="max-w-2xl text-3xl font-semibold sm:text-4xl">
              What our caregivers do, in detail
            </h2>

            <ServiceDetail
              id="personal-care"
              eyebrow="Service One"
              heading="Personal Care"
              intro="Hands-on, non-medical assistance with the activities of daily living, provided in the home by trained attendants. Personal care is for seniors and adults with disabilities who are safest with a steady pair of hands nearby — after a hospital stay, following a fall, or as mobility and memory change over time."
              items={[
                "Bathing, showering and bed baths with dignity and privacy",
                "Dressing, grooming, shaving and oral care",
                "Toileting, incontinence care and discreet clean-up",
                "Transferring, standing assistance and safe walking support",
                "Repositioning and range-of-motion encouragement",
                "Medication reminders (prescribed by the client's physician)",
                "Feeding assistance and hydration monitoring",
                "Fall-risk watch and home safety checks each visit",
                "Morning wake-up and evening tuck-in routines",
                "Support for dementia and Alzheimer's routines",
              ]}
              note="Medication reminders only: our caregivers may prompt and observe, but never administer medication, perform injections, wound care or any other skilled nursing task."
            />

            <ServiceDetail
              id="companion"
              eyebrow="Service Two"
              heading="Companion & Homemaker Services"
              intro="For seniors who are largely independent but shouldn't be alone all day — or whose household has become more than they can manage. Companion care protects against isolation; homemaker services keep the home clean, stocked and safe to move through."
              items={[
                "Friendly conversation, games, hobbies and reading aloud",
                "Accompaniment to doctor visits, church and social outings",
                "Transportation and errands throughout Bexar County",
                "Grocery shopping and pantry restocking",
                "Meal planning, cooking and special-diet preparation",
                "Light housekeeping, dusting, vacuuming and dishes",
                "Laundry, linen changes and bed making",
                "Mail sorting and appointment reminders",
                "Pet care support: feeding and short walks",
                "Regular family check-in calls and updates",
              ]}
              note="Companion and homemaker visits can be scheduled from a few hours a week up to daily or live-in coverage, including nights, weekends and holidays."
            />

            <ServiceDetail
              id="staffing"
              eyebrow="Service Three"
              heading="Facility Staffing for ALFs & SNFs"
              intro="Assisted living facilities and skilled nursing facilities across San Antonio partner with Gloria's Angels to fill shifts fast without lowering the bar. We supply screened, oriented, dependable caregivers who show up ready to work and fit into your existing team and charting routine."
              items={[
                "Certified Nurse Aides (CNAs) and personal care attendants",
                "Caregivers, resident assistants and med-techs where permitted",
                "Sitters, one-to-one observation and restorative aides",
                "Per-diem, block-booked, contract and temp-to-hire placements",
                "Day, evening, NOC, weekend and holiday shift coverage",
                "Rapid call-out and last-minute shift fills, 24/7",
                "Census-surge and survey-window support",
                "Credential, TB, background and drug-screen verification on file",
                "Orientation to your policies, EHR and charting expectations",
                "One dedicated staffing contact for your DON or scheduler",
              ]}
              note="Facility partners: call our staffing line any hour for open-shift coverage. We confirm placements in writing and never send a caregiver we haven't vetted ourselves."
            />
          </div>
        </section>

        {/* Compliance notice */}
        <section className="border-b bg-secondary py-12">
          <div className="mx-auto flex max-w-4xl gap-4 px-4">
            <Info className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <h2 className="text-xl font-semibold">Texas Non-Medical Care Notice</h2>
              <p className="mt-3 text-sm leading-relaxed text-secondary-foreground">
                Gloria's Angels Caregivers Services provides <strong>non-medical, non-skilled
                personal assistance services only</strong>. We are not a home health agency, hospice
                or licensed medical provider, and we do not provide nursing care, therapy, medical
                diagnosis or treatment. Our caregivers do not administer medications, perform
                injections or infusions, provide wound or catheter care, or carry out any task that
                Texas law reserves for licensed medical professionals.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-secondary-foreground">
                Services are delivered in accordance with applicable Texas Health and Human Services
                Commission requirements for non-medical in-home care. Nothing on this website is
                medical advice. For medical concerns, contact the client's physician; in an
                emergency, call 911.
              </p>
            </div>
          </div>
        </section>

        {/* Contact / CTA */}
        <section id="contact" className="scroll-mt-24 bg-primary py-16 text-primary-foreground lg:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Let's talk about what your family needs
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed opacity-90">
              Tell us what's going on at home and we'll walk you through your options — hours,
              caregiver matching and cost — with no pressure and no obligation.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CallButton />
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-foreground/70 px-7 py-4 text-base font-bold transition hover:bg-primary-foreground hover:text-primary"
              >
                <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                Explore Our Services
              </a>
            </div>
            <div className="mt-10 grid gap-4 text-sm sm:grid-cols-3">
              <p className="flex items-center justify-center gap-2 opacity-90">
                <Clock className="h-4 w-4" aria-hidden="true" /> Available 24/7
              </p>
              <p className="flex items-center justify-center gap-2 opacity-90">
                <MapPin className="h-4 w-4" aria-hidden="true" /> San Antonio & Bexar County
              </p>
              <p className="flex items-center justify-center gap-2 opacity-90">
                <Mail className="h-4 w-4" aria-hidden="true" /> Free in-home assessment
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 text-center text-sm text-muted-foreground">
          <p className="font-display text-lg font-semibold text-primary">
            Gloria's Angels Caregivers Services
          </p>
          <p>
            Non-medical in-home care and facility staffing serving San Antonio and all of Bexar
            County, Texas.
          </p>
          <a href={PHONE_HREF} className="font-bold text-terracotta">
            {PHONE_DISPLAY}
          </a>
          <p className="text-xs">
            © {new Date().getFullYear()} Gloria's Angels Caregivers Services. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Mobile sticky call bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-background/95 p-3 backdrop-blur lg:hidden">
        <a
          href={PHONE_HREF}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-terracotta px-6 py-3.5 text-base font-bold text-terracotta-foreground shadow-lg"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          Call Now: {PHONE_DISPLAY}
        </a>
      </div>
      <div className="h-20 lg:hidden" aria-hidden="true" />
    </div>
  );
}
