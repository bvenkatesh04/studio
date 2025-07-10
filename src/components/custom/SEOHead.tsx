import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEOHead({
  title = 'TechFarm - Master Tomorrow\'s Tech Today',
  description = 'Transform your career with industry-leading courses in DevOps, Cloud Computing, Data Engineering, Testing, and Programming. Learn from experts, build real projects, and land your dream job.',
  keywords = 'online courses, programming, devops, cloud computing, aws, data engineering, software testing, selenium, cypress, java, python, kubernetes, docker, terraform, ansible, jenkins',
  image = '/og-image.jpg',
  url = 'https://techfarm.dev',
  type = 'website'
}: SEOHeadProps) {
  const fullTitle = title.includes('TechFarm') ? title : `${title} | TechFarm`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="TechFarm" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="TechFarm" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#22C55E" />
      <meta name="msapplication-TileColor" content="#22C55E" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "TechFarm",
            "description": description,
            "url": url,
            "logo": `${url}/logo.png`,
            "sameAs": [
              "https://twitter.com/techfarm",
              "https://linkedin.com/company/techfarm",
              "https://github.com/techfarm"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "url": `${url}/contact`
            }
          })
        }}
      />
    </Head>
  );
}