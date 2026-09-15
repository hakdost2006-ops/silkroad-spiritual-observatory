export type PublishedTranslationChapter = {
  projectSlug: string;
  number: string;
  title: string;
  source: string;
  note: string;
  quotation: string[];
  paragraphs: string[];
  decisions: string[];
};

export const publishedTranslationChapters: PublishedTranslationChapter[] = [
  {
    projectSlug: "sufiy-tabobati",
    number: "Chapter 1",
    title: "Preface",
    source:
      "So'fiy tabobati. Ikkinchi kitob, Alisher Kushkarov (Tashkent, 2004), Latin Uzbek edition, pp. 4-6.",
    note: "This chapter is translated as a historical and cultural source. Its statements about medicine, healing systems, efficacy, and treatment reflect the author's viewpoint and are not medical advice.",
    quotation: [
      "A man was walking with the Messiah when he noticed several bones lying on the ground. He asked the Messiah to teach him how to bring the dead back to life.",
      "The Messiah replied: ‘This task is not suited to you. You cannot even take proper care of your own health, yet you are interested in influencing others.’",
    ],
    paragraphs: [
      "After Uzbekistan gained independence, much work was undertaken, and continues to be undertaken, to restore the values of the past, return its rare treasures to the public consciousness, and allow people to benefit from them. Life now calls for a different approach to present-day problems. This concerns medicine as well as economics and politics.",
      "Great changes are taking place especially in medicine. One reason, the author writes, is that the customs and practices of the peoples of Central Asia differ fundamentally from those of peoples and communities living in other regions of the world. During the former Soviet period, such differences received little attention and were sometimes looked upon dismissively.",
      "Modern medical science has, of course, achieved serious advances in the treatment of internal diseases, surgery, women's health, dentistry, and emergency care. New treatment and health-improvement centers are being established in Uzbekistan. At the same time, we possess a vast inheritance from the past, and medicine is no exception. The unique experience left by our ancestors has not been fully studied.",
      "In our region, this historical experience came to be called ‘non-traditional medicine,’ while abroad it has, conversely, been recognized as ‘traditional medicine.’ The author attributes this distinction to the Soviet-era rule that only people who had completed formal medical education were permitted to practice healing. Because inherited folk medicine, tested over centuries, was viewed with disregard, it acquired the label ‘non-traditional.’",
      "In recent years, attention to this field has increased around the world. Traditional healers emerging from local communities have been supported, and their distinctive abilities and experience studied. For this reason, the author proposes distinguishing the two fields not as ‘traditional’ and ‘non-traditional,’ but as ‘modern medicine’ and ‘folk medicine.’",
      "Ancient Turkistan - present-day Central Asia - has long been regarded as a cradle of folk medicine. As evidence, the author names Muhammad Razi, Husayni, Abu Mansur Bukhari, Abu Rayhan Biruni, and Abu Ali ibn Sina. He associates these scholars with the Gundishapur, or Sufi medicine, school.",
      "The author argues that the healing effectiveness of modern medicine can sometimes be diminished by the variety of chemical medicines, their long storage, and the fact that many are produced by foreign firms without considering a person's mijoz, or constitutional disposition. He contrasts this with inherited folk medicine, which he describes as possessing knowledge of constitutional temperament and of the balance between a person's inner energy and the external environment.",
      "The author further states that experiments combining modern medicine with folk-medicine approaches have been undertaken in developed countries, including the United States, Germany, China, and the Philippines. He describes attention to new methods of diagnosis, the broad use of medicinal plants, strengthening the body's resistance or immunity, and treatment of chronic illness.",
      "In Uzbekistan, too, folk medicine is developing from day to day. This development has both positive and negative aspects, the author notes, because modern medicine may be unable to supervise the work and knowledge of renowned traditional healers when it lacks familiarity with their practices.",
      "Nevertheless, the historical way of life of the people continues to lead them to seek healing from folk practitioners. Some practitioners also seek to apply their knowledge in relation to modern medicine. The author hopes that these efforts will revive and preserve the distinctive knowledge of earlier generations, support the raising of a healthy generation, and contribute to a spiritually mature society.",
      "The Center for the Study, Application, and Development of Modern and Traditional Eastern Medical Principles - briefly, the ‘Yassaviy-Turkiston Folk Medicine Center’ - sets out to apply modern, traditional, and non-traditional methods of healing, to serve citizens of Uzbekistan and visitors from abroad to the best of its ability, and to help them find relief and recovery. The author presents Sufi medicine, or the medicine of tasavvuf, as an important and inseparable element of the Center's work in Central Asia.",
      "In this booklet, the author aims to offer general information about Sufi medicine as an integral part of folk medicine; about knowledge and worship; about the place of Sufi medicine in the present day; and about the work of the Yassaviy-Turkiston Folk Medicine Center.",
    ],
    decisions: [
      "Debocha is rendered as Preface because it functions as an opening reflection rather than a numbered chapter.",
      "Tabobat is rendered as medicine in a historical and cultural sense; it does not validate clinical claims.",
      "Mijoz is glossed as constitutional disposition. It should not be simplified to patient.",
      "Specific historical attributions and health claims remain the author's assertions and require source verification before appearing elsewhere on the portal as factual statements.",
    ],
  },
];

export function getPublishedTranslationChapter(projectSlug: string) {
  return publishedTranslationChapters.find((chapter) => chapter.projectSlug === projectSlug);
}
