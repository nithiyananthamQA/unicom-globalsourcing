import { Helmet } from "react-helmet-async";

const SITE_NAME = "UGS — Unicom Globalsourcing";
const SITE_URL = "https://unicomglobalsourcing.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-cover.jpg`;

interface SeoProps {
  title: string;
  description: string;
  path: string; // e.g. "/about"
  image?: string;
}

export function Seo({ title, description, path, image }: SeoProps) {
  const url = `${SITE_URL}${path}`;
  const fullTitle =
    path === "/" ? `${SITE_NAME} | Strategic Sourcing Partner` : `${title} — ${SITE_NAME}`;
  const ogImage = image || DEFAULT_OG_IMAGE;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
