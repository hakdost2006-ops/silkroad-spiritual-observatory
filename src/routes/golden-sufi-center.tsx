import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpenText,
  ExternalLink,
  HeartHandshake,
  Network,
  ShieldCheck,
} from "lucide-react";
import { Chip, PageHeader, Panel, SectionHeader } from "../components/ui-primitives";

const publicMethods = [
  {
    title: "Silent remembrance and the heart",
    opening:
      "For the Naqshbandi tradition, remembrance is not only a matter of words recited aloud. It is also an education of attention: a patient turning of the heart toward the divine, worked out in the presence of a guide and a community. The Center places this inherited language of silent dhikr at the center of its contemporary approach.",
    body: "This is where the Atlas stops short of instruction. The Center's own essay explains how it understands meditation of the heart, while the relationship-based character of the practice remains with its teachers and community.",
    sourceTitle: "The Sufi Meditation of the Heart",
    href: "https://goldensufi.org/article/the-sufi-meditation-of-the-heart/",
  },
  {
    title: "Companionship and spiritual attention",
    opening:
      "The old Central Asian vocabulary of suhba, spiritual companionship, resists the image of a seeker working alone. The path was remembered in conversation, service, shared silence, and the difficult education of character. The Golden Sufi Center continues to use this relational language in describing its community life.",
    body: "Rabita, the inward bond with a guide, has its own varied Naqshbandi history. The Center's public account gives its contemporary meaning within its own teaching context rather than as a detached historical formula.",
    sourceTitle: "About the Golden Sufi Center",
    href: "https://goldensufi.org/about/",
  },
  {
    title: "Dreamwork and psychological listening",
    opening:
      "Dreams have long occupied a subtle place in Sufi memory: they may disturb, console, or disclose an image whose meaning cannot be reduced to a rule. In the Golden Sufi Center's modern work, this symbolic field meets the language of depth psychology and careful listening.",
    body: "That meeting is one of the Center's distinctive contemporary developments. It should not be projected backward as a standard medieval Naqshbandi method, and its fuller articulation belongs to the Center's own published work.",
    sourceTitle: "Sufi Dreamwork",
    href: "https://goldensufi.org/article/sufi-dreamwork/",
  },
  {
    title: "The work of ordinary life",
    opening:
      "The Khwajagan ideal of khalwat dar anjuman, solitude in the crowd, made ordinary life part of spiritual work rather than an interruption to it. Trade, family, hospitality, service, and the demands of a town could become the field in which inward attention was tested.",
    body: "The Golden Sufi Center describes its own contemporary version through work, family, service, conversation, and retreat. The resonance is real, but the modern articulation remains the Center's own.",
    sourceTitle: "Neither of the East nor of the West",
    href: "https://goldensufi.org/article/neither-of-the-east-nor-of-the-west/",
  },
];

const readingShelf = [
  {
    title: "Sufism: The Transformation of the Heart",
    author: "Llewellyn Vaughan-Lee",
    description:
      "A concise introduction to Sufi love, the heart, remembrance, service, and the role of a guide. Read it as a doorway into Vaughan-Lee's own teaching language rather than as a general history of Sufism.",
    href: "https://goldensufi.org/publications/books/sufism-the-transformation-of-the-heart/",
  },
  {
    title: "The Bond with the Beloved",
    author: "Llewellyn Vaughan-Lee",
    description:
      "A book centered on longing, devotion, and the intimacy of the seeker with the divine Beloved. It is especially useful for understanding the Center's devotional vocabulary.",
    href: "https://shop.goldensufi.org/products/the-bond-with-the-beloved",
  },
  {
    title: "Catching the Thread",
    author: "Llewellyn Vaughan-Lee",
    description:
      "A meeting point of Sufi teaching, dreamwork, and Jungian psychology. The book illuminates a distinctive modern layer of the Center's work rather than a universal template for reading dreams.",
    href: "https://shop.goldensufi.org/products/catching-the-thread",
  },
  {
    title: "In the Company of Friends",
    author: "Llewellyn Vaughan-Lee",
    description:
      "Reflections on companionship, service, and the shared life of a spiritual community. It offers a public window onto how relational practice is framed in the Center's contemporary setting.",
    href: "https://shop.goldensufi.org/products/in-the-company-of-friends",
  },
  {
    title: "Daughter of Fire",
    author: "Irina Tweedie",
    description:
      "Tweedie's account of her years with Radha Mohan Lal in India is an important modern witness for the line later associated with the Golden Sufi Center. It should be read alongside independent scholarship and the Center's own lineage account.",
    href: "https://shop.goldensufi.org/",
  },
];

export const Route = createFileRoute("/golden-sufi-center")({
  head: () => ({
    meta: [
      { title: "Golden Sufi Center - Silk Road Sufi Atlas" },
      {
        name: "description",
        content:
          "A source-aware profile of the Golden Sufi Center and its stated Naqshbandiyya-Mujaddidiyya connection to Central Asia.",
      },
      { property: "og:title", content: "Golden Sufi Center" },
      {
        property: "og:description",
        content:
          "A living contemporary expression of Naqshbandiyya-Mujaddidiyya, read in its Central Asian and South Asian context.",
      },
    ],
  }),
  component: GoldenSufiCenterPage,
});

function GoldenSufiCenterPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Living Naqshbandiyya-Mujaddidiyya"
        title="Golden Sufi Center"
        intro="A contemporary worldwide community that presents its lineage through the Naqshbandiyya-Mujaddidiyya. This page places that living account beside the older Central Asian and South Asian histories from which it draws."
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div>
          <SectionHeader
            eyebrow="Where it belongs"
            title="A journey that begins in Central Asia"
            intro="The Golden Sufi Center's published chain reaches through the Khwajagan masters of Transoxiana and the Naqshbandi world of Bukhara, then follows the Mujaddidi renewal in South Asia into a modern global community."
          />
          <div className="mt-9 grid gap-px overflow-hidden border border-gold/25 bg-gold/25 md:grid-cols-3">
            <LineagePlace
              number="01"
              title="Central Asia"
              body="Yusuf Hamadani, Abd al-Khaliq Ghujduwani, Baha al-Din Naqshband, and the Bukhara oasis form the historical ground of the Naqshbandi inheritance."
            />
            <LineagePlace
              number="02"
              title="Mujaddidi India"
              body="Through Baqi Billah and Ahmad Sirhindi, the order acquired a major South Asian form whose letters and contemplative vocabulary travelled widely."
            />
            <LineagePlace
              number="03"
              title="A modern community"
              body="The Center presents a twentieth- and twenty-first-century continuation shaped across India, England, California, and a worldwide network."
            />
          </div>
        </div>
        <Panel className="border-l-4 border-ruby">
          <ShieldCheck className="h-6 w-6 text-ruby" />
          <h2 className="mt-4 font-serif text-3xl text-lapis-deep">An editorial distinction</h2>
          <p className="mt-4 leading-relaxed text-stone">
            The Center's own publications describe a cross-tradition contemporary expression of the
            Naqshbandiyya-Mujaddidiyya. The Atlas includes this richness without treating it as a
            replacement for the Islamic legal, devotional, and social worlds of historical
            Naqshbandiyya. Community testimony and independently documented history are named
            separately throughout.
          </p>
        </Panel>
      </section>

      <section className="bg-lapis-deep py-20 text-ivory">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.28em] text-gold">
              A published lineage record
            </div>
            <h2 className="mt-3 font-serif text-4xl leading-[1.05] text-ivory md:text-5xl">
              From the Khwajagan to a living chain
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ivory/75">
              The sequence below condenses the Golden Sufi Center's published golden chain. It is
              presented as the community's own record, rather than as a newly certified historical
              silsila.
            </p>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden border border-ivory/20 bg-ivory/20 lg:grid-cols-3">
            <ChainPanel
              stage="01 - Central Asian roots"
              names="Yusuf Hamadani - Abd al-Khaliq Ghujduwani - Baha al-Din Naqshband"
              body="The early teachers associated with the Khwajagan and the Naqshbandi formation in and around Transoxiana."
            />
            <ChainPanel
              stage="02 - Mujaddidi bridge"
              names="Baqi Billah - Ahmad Sirhindi - Muhammad al-Masum"
              body="The South Asian renewal that became a major channel of Naqshbandi thought, discipline, and letters."
            />
            <ChainPanel
              stage="03 - Modern transmission"
              names="Radha Mohan Lal - Irina Tweedie - Llewellyn Vaughan-Lee - Emmanuel Vaughan-Lee"
              body="The modern portion of the Center's stated lineage, traced through India and England to its present community."
            />
          </div>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <a
              href="https://goldensufi.org/about/naqshbandiyya-mujaddidiyya-golden-chain/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-soft"
            >
              Read the Center's full chain <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="https://www.mdpi.com/2077-1444/13/8/690"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-soft"
            >
              Read scholarly context <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-gold/25 bg-parchment py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="Methods in public view"
            title="A contemporary vocabulary of practice"
            intro="These themes are drawn from the Center's public essays and are included for orientation, not as instructions for private spiritual practice."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {publicMethods.map((method, index) => (
              <article key={method.title} className="border border-gold/25 bg-card p-6 md:p-7">
                <div className="flex items-center justify-between gap-4">
                  <Chip>0{index + 1}</Chip>
                  {index === 0 ? (
                    <HeartHandshake className="h-5 w-5 text-ruby" />
                  ) : (
                    <Network className="h-5 w-5 text-gold" />
                  )}
                </div>
                <h3 className="mt-5 font-serif text-3xl text-lapis-deep">{method.title}</h3>
                <p className="mt-4 leading-relaxed text-stone">{method.opening}</p>
                <p className="mt-4 leading-relaxed text-stone">{method.body}</p>
                <div className="mt-6 border-l-2 border-gold bg-parchment/70 px-4 py-3">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-gold">
                    Continue with the tradition
                  </div>
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-sm text-lapis-deep hover:text-ruby"
                  >
                    Read {method.sourceTitle} <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <SectionHeader
            eyebrow="A contemporary library"
            title="Books for understanding this particular voice"
            intro="These are reading guides to officially available editions. The Atlas does not reproduce the books or imply that these modern works stand in for classical Naqshbandi sources."
          />
          <a
            href="https://shop.goldensufi.org/"
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 border-b border-gold pb-1 text-sm text-lapis-deep hover:text-ruby"
          >
            Browse the official bookshop <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        <div className="divide-y divide-gold/25 border-y border-gold/25">
          {readingShelf.map((book) => (
            <article key={book.title} className="py-6 first:pt-0 last:pb-0">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                <div>
                  <h3 className="font-serif text-2xl text-lapis-deep">{book.title}</h3>
                  <p className="mt-1 text-sm italic text-stone">{book.author}</p>
                </div>
                <BookOpenText className="h-5 w-5 shrink-0 text-gold" />
              </div>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone">
                {book.description}
              </p>
              <a
                href={book.href}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-lapis-deep hover:text-ruby"
              >
                Find the official edition <ExternalLink className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-gold/25 bg-parchment py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Sources and scope"
              title="How to read this page"
              intro="Official Golden Sufi Center publications establish how the community describes itself. Academic work supplies a wider frame for the twentieth-century transmission and its place in contemporary Western Sufism."
            />
          </div>
          <Panel>
            <h3 className="font-serif text-2xl text-lapis-deep">Continue through the Atlas</h3>
            <p className="mt-3 text-sm leading-relaxed text-stone">
              Follow the earlier Central Asian teachers and the historical Naqshbandi formation
              before returning to its later global continuations.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm">
              <Link
                to="/orders/naqshbandiyya"
                className="inline-flex items-center gap-2 text-lapis-deep hover:text-ruby"
              >
                Naqshbandiyya <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/khwajagan"
                className="inline-flex items-center gap-2 text-lapis-deep hover:text-ruby"
              >
                Khwajagan <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/library/idries-shah"
                className="inline-flex items-center gap-2 text-lapis-deep hover:text-ruby"
              >
                Idries Shah library <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Panel>
        </div>
      </section>
    </div>
  );
}

function LineagePlace({ number, title, body }: { number: string; title: string; body: string }) {
  return (
    <article className="bg-card p-6">
      <div className="text-[10px] uppercase tracking-[0.25em] text-gold">{number}</div>
      <h3 className="mt-4 font-serif text-3xl text-lapis-deep">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-stone">{body}</p>
    </article>
  );
}

function ChainPanel({ stage, names, body }: { stage: string; names: string; body: string }) {
  return (
    <article className="bg-lapis-deep p-7">
      <div className="text-[10px] uppercase tracking-[0.25em] text-gold">{stage}</div>
      <h3 className="mt-4 font-serif text-3xl leading-tight text-gold-soft">{names}</h3>
      <p className="mt-4 text-sm leading-relaxed text-ivory/70">{body}</p>
    </article>
  );
}
