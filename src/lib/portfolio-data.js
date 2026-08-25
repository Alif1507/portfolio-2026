import {
  fallbackCertificates,
  fallbackCompetitions,
  fallbackProjects,
} from "../data/portfolio";

const DATA_URLS = {
  projects: "https://projects-sooty-chi.vercel.app/Projects/projects.json",
  competitions: "https://projects-sooty-chi.vercel.app/Competiton/competition.json",
  certificates: "https://projects-sooty-chi.vercel.app/Certif/certif.json",
};

function normalizeCollection(data, keys) {
  if (Array.isArray(data)) return data;

  for (const key of keys) {
    if (Array.isArray(data?.[key])) return data[key];
  }

  return [];
}

async function fetchCollection(url, keys, fallback) {
  try {
    const response = await fetch(url, {
      next: { revalidate: 3600 },
      headers: { Accept: "application/json" },
    });

    if (!response.ok) return fallback;
    const collection = normalizeCollection(await response.json(), keys);
    return collection.length > 0 ? collection : fallback;
  } catch {
    return fallback;
  }
}

export async function getProjects() {
  return fetchCollection(DATA_URLS.projects, ["projects", "Projects"], fallbackProjects);
}

export async function getPortfolioData() {
  const [projects, competitions, certificates] = await Promise.all([
    getProjects(),
    fetchCollection(DATA_URLS.competitions, ["competition", "Competitions", "Competition"], fallbackCompetitions),
    fetchCollection(DATA_URLS.certificates, ["certif", "certifs", "certificates"], fallbackCertificates),
  ]);

  return { projects, competitions, certificates };
}
