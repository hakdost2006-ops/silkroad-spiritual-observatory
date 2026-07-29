export type KubraStudySection = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  sourceNotes: string[];
  verse?: { reference: string; note: string; href: string };
};

export const kubraStudySections: KubraStudySection[] = [
  {
    id: "threshold",
    eyebrow: "01 · Khwarazm",
    title: "A master at the threshold of a broken world",
    paragraphs: [
      "Najm al-Dīn Kubrā stands at a turning point in the history of Central Asian Sufism. He taught in Khwarazm, in the learned and commercially powerful world of Gurganj, before the Mongol conquest shattered the political order that had made such cities flourish. His later memory is inseparable from that catastrophe, but his real importance does not begin with martyrdom. It begins with a patient, exacting account of what happens when a human being turns inwardly toward God.",
      "Kubra’s writing does not offer a shortcut to ecstasy. It gives the seeker a discipline of attention: how to recognise fear without worshipping it, how to receive beauty without becoming captive to it, how to examine a vision without mistaking an image for truth. In this sense, he is a master of interiority whose work remains radically ethical. The heart is not a private theatre; it is the place from which conduct, companionship, and responsibility are remade.",
    ],
    sourceNotes: [
      "Historical orientation: Encyclopaedia Iranica, “Kobrawiya i. The Eponym.”",
      "Primary corpus: Fawāʾiḥ al-Jamāl wa Fawātiḥ al-Jalāl; al-Uṣūl al-ʿAshara.",
    ],
  },
  {
    id: "formation",
    eyebrow: "02 · Formation",
    title: "The one who forms saints",
    paragraphs: [
      "Later tradition calls Kubra shaykh-i walītarāsh, the master who fashions saints. The phrase should not be heard as a claim of spiritual manufacture. It names a pedagogy: the teacher helps the disciple become capable of truthfulness. He does this through companionship, correction, spiritual practice, and adab, the difficult art of right relation.",
      "For Kubra, a seeker is not authenticated by intensity. A powerful inward state may be a mercy, a temptation, a confusion, or a mixture of all three. The guide’s task is therefore protective as well as illuminating. He teaches the disciple not to build an identity out of exceptional experiences. This is one reason the Kubrawi path can speak about light so richly without collapsing into spectacle.",
    ],
    sourceNotes: [
      "Primary corpus: Ādāb al-Murīdīn and Kubra’s shorter treatises on the seeker and the traveller.",
      "Later transmission should be read alongside, not confused with, Kubra’s own authorial voice.",
    ],
  },
  {
    id: "voluntary-death",
    eyebrow: "03 · al-Uṣūl al-ʿAshara",
    title: "Voluntary death: the inner architecture of the path",
    paragraphs: [
      "The Ten Principles are Kubra’s compact architecture of transformation. Their governing image is voluntary death: the seeker chooses a return to God before bodily death imposes one. This is not a hatred of the world, nor a performance of sadness. It is the gradual end of the self’s demand to be sovereign over desire, reputation, possession, and outcome.",
      "The sequence moves from repentance and renunciation to trust, contentment, seclusion, remembrance, turning toward God, patience, watchfulness, and satisfaction with the divine decree. Taken together, these are not ten disconnected exercises. They describe a single education of attention. The self is no longer allowed to move wherever appetite pulls it; it is trained to return, wait, remember, and receive.",
      "Our English draft preserves the startling force of Kubra’s comparison: repentance is a chosen return, while death is a return without choice. The point is not to produce fear for its own sake. It is to awaken freedom before the moment when freedom can no longer be postponed.",
    ],
    verse: {
      reference: "Qur’an 89:27–30",
      note: "Kubra’s meditation on return resonates with the address to the tranquil soul: return to your Lord. The page uses the reference rather than borrowing a modern English rendering.",
      href: "https://quran.com/89/27-30",
    },
    sourceNotes: [
      "Atlas translation corpus, al-Uṣūl al-ʿAshara: First Principle, “On Repentance,” p. 47.",
      "Atlas translation corpus: table of contents and principles, pp. 45–87.",
    ],
  },
  {
    id: "ten-principles",
    eyebrow: "04 · Practice",
    title: "The ten principles as a way of living",
    paragraphs: [
      "Repentance begins the movement because the heart must first turn. Renunciation loosens the habits that keep the self facing its own interests. Trust gives the seeker courage to release false securities. Contentment and seclusion make room for another centre of gravity. Remembrance gathers the heart; turning toward God gives that gathering a direction.",
      "Patience carries the disciple through the ordinary fatigue of change. Watchfulness keeps the work from becoming mechanical: the heart notices its intention and remains open to grace. Finally, riḍā, satisfaction with the divine decree, is not resignation. It is the refusal to turn every difficulty into an argument against God. In Kubra’s rendering, the mature seeker does not become inert; the seeker becomes less governed by objection.",
    ],
    sourceNotes: [
      "Atlas translation corpus, al-Uṣūl al-ʿAshara: Third Principle, “On Trust,” p. 53; Sixth Principle, “On Constant Remembrance,” p. 65.",
      "Atlas translation corpus: Seventh, Eighth, Ninth, and Tenth Principles, pp. 73–87.",
    ],
  },
  {
    id: "lights",
    eyebrow: "05 · Fawāʾiḥ al-Jamāl",
    title: "The science of lights is a science of discernment",
    paragraphs: [
      "Fawāʾiḥ al-Jamāl wa Fawātiḥ al-Jalāl is Kubra’s great book of inward perception. Its landscapes are vivid: coloured lights, stars, sun and moon, seas, fire, deserts, gardens, forms rising from below and lights descending from above. But the book’s essential question is never simply, What did you see? It is, What is this perception doing to the heart, and how is it to be judged?",
      "The lights belong to a moral and spiritual grammar. A perception may disclose expansion, constriction, mercy, danger, or the unfinished labour of the self. It needs interpretation within worship, ethical conduct, and the supervision of a mature guide. The Kubrawi seeker is therefore not asked to collect visionary experiences. The seeker is asked to become increasingly incapable of lying to himself about them.",
      "This is why colour must be handled with care. It has meaning in the text, but it is not a universal code that can be detached from the state of the person who sees it. The Atlas will eventually add a visual map of Kubra’s imaginal language, but it will always preserve this warning: no light is self-interpreting.",
    ],
    verse: {
      reference: "Qur’an 24:35",
      note: "The language of light in Kubra’s discussion is illuminated by the Qur’anic verse of light; it should not be reduced to a colour chart or a clinical system.",
      href: "https://quran.com/24/35",
    },
    sourceNotes: [
      "Primary corpus: Fawāʾiḥ al-Jamāl wa Fawātiḥ al-Jalāl.",
      "Scholarly orientation: Fritz Meier’s critical edition; Encyclopaedia Iranica, “Kobrawiya i. The Eponym.”",
    ],
  },
  {
    id: "bewilderment",
    eyebrow: "06 · The Perplexed Traveller",
    title: "Bewilderment is not failure",
    paragraphs: [
      "Kubra’s shorter epistles give dignity to a state often hidden in simplified spiritual language: ḥayra, bewilderment. The traveller may be sincere, attentive, and still unable to see a clear road. Fear of blame can deepen that trial. The seeker wonders whether he has gone too far, misunderstood the call, or become lost in his own imagination.",
      "Kubra does not answer this difficulty with a promise of constant clarity. He answers it with discipline. The seeker remains in adab, keeps the bond with God, receives correction, and refuses to turn confusion into theatrical despair. Bewilderment then becomes a threshold: the ego loses its demand to know in advance what every stage must mean.",
    ],
    sourceNotes: [
      "Primary corpus: Risāla ilā al-Ḥāʾim al-Khāʾif min Lawmat al-Lāʾim; Risālat al-Sāʾir al-Ḥāʾir.",
      "The English archive labels “The Perplexed Seeker” and “Path of the Seekers” are retained as working labels while title mappings continue to be collated.",
    ],
  },
  {
    id: "divine-names",
    eyebrow: "07 · Esmāʾ al-Ḥusnā",
    title: "Divine names and the education of the heart",
    paragraphs: [
      "The Divine Names are not decorative additions to Kubra’s path. They name the truth toward which the seeker is being educated: the heart learns mercy rather than possessiveness, patience rather than panic, truthfulness rather than self-display. Yet the Atlas will not attach a Name to every stage merely for atmosphere. A Name enters the interpretation only where the primary text, Qur’anic language, or a clearly identified later Kubrawi commentary warrants it.",
      "This restraint matters. The Names are not instruments for controlling outcomes, and they are not psychological labels. They are modes of remembering that the world does not belong to the ego. When Kubra teaches the seeker to turn toward God, he is not instructing a technique of self-enhancement. He is displacing the self from the centre of its own attention.",
    ],
    verse: {
      reference: "Qur’an 7:180",
      note: "The Qur’an directs believers to call upon God by the Most Beautiful Names. Any contemplative association on this page remains a source-marked interpretation, not an independent ritual prescription.",
      href: "https://quran.com/7/180",
    },
    sourceNotes: [
      "Interpretive method for this Atlas: distinguish Kubra’s own wording, Qur’anic resonance, and later Kubrawi elaboration.",
      "No new litany or healing claim is made on the basis of this study page.",
    ],
  },
  {
    id: "legacy",
    eyebrow: "08 · Afterlife",
    title: "A lineage carried beyond Khwarazm",
    paragraphs: [
      "Kubra’s teaching survived the destruction of Khwarazm because it was carried in people as well as in books. His disciples and their successors brought Kubrawi modes of practice and interpretation into Iran, Central Asia, South Asia, and Kashmir. In Bukhara, Sayf al-Dīn Bākharzī preserved a major institutional presence; in Kashmir, later Kubrawi figures such as Mīr Sayyid ʿAlī Hamadānī made the tradition part of a wider Persianate religious world.",
      "The mausoleum at Kunya-Urgench should therefore be approached as more than a destination. It is the material point where a city, a death, a body of writing, and centuries of remembered discipleship meet. Its presence protects a simple fact: a Sufi order is never only an abstract chain of names. It is also a geography of graves, books, households, journeys, and communities learning how to remember.",
    ],
    sourceNotes: [
      "Historical orientation: Encyclopaedia Iranica, “Kobrawiya i. The Eponym” and “Kobrawiya ii. The Order.”",
      "Atlas master profiles: Sayf al-Dīn Bākharzī and Mīr Sayyid ʿAlī Hamadānī.",
    ],
  },
];

export const kubraStudySources = [
  {
    title: "Atlas primary corpus",
    body: "Working English drafts and extracted witnesses for al-Uṣūl al-ʿAshara, Fawāʾiḥ al-Jamāl, The Perplexed Seeker, Treatise on the Path to God, and related Kubrawi files in the project archive.",
  },
  {
    title: "Encyclopaedia Iranica",
    body: "Hamid Algar, “Kobrawiya i. The Eponym,” including the bibliography of works by Najm al-Dīn Kubrā and the historical account of his thought.",
    href: "https://www.iranicaonline.org/articles/kobrawiya-i-the-eponym/",
  },
  {
    title: "Textual scholarship",
    body: "Fritz Meier’s edition of Fawāʾiḥ al-Jamāl; editions and translations of al-Uṣūl al-ʿAshara and Kubra’s minor treatises listed in Iranica’s bibliography.",
  },
] as const;
