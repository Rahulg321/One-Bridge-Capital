import { createClient } from "@/prismicio";

export const baseUrl = "https://onebridgeknowledgepartners.com";

export const getInsights = async () => {
  const client = createClient();
  const insights = await client.getAllByType("insight");
  return insights;
};

export const getServices = async () => {
  const client = createClient();
  const services = await client.getAllByType("service");
  return services;
};

export default async function sitemap() {
  const insights = await getInsights();
  const services = await getServices();

  const insightsRoutes = insights.map((post) => ({
    url: `${baseUrl}/insights/${post.uid}`,
    lastModified: post.last_publication_date,
  }));

  const servicesRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.uid}`,
    lastModified: service.last_publication_date,
  }));

  const routes = [
    "",
    "/insights",
    "/about",
    "/contact",
    "/services",
    "why-choose-us",
    "core-values",
    "sector-expertise",
    "engage-with-us",
    "testimonials",
    "frequently-asked-questions",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...insightsRoutes, ...servicesRoutes];
}
