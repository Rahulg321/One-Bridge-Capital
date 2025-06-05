import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "OneBridge Knowledge Partners",
    short_name: "OneBridge Knowledge Partners",
    description:
      "OneBridge Knowledge Partners is a leading provider of knowledge management and consulting services.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
