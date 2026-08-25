const siteUrl = "https://www.alifwahyudi.my.id";

export default function sitemap() {
  return [
    { url: `${siteUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/projects`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
