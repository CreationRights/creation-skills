export type LegalDocument = {
  slug: string;
  title: string;
  description: string;
  lastUpdated?: string;
};

export type LegalRegion = {
  id: string;
  label: string;
  flag: string;
  documents: LegalDocument[];
};

export const legalRegions: LegalRegion[] = [
  {
    id: "us",
    label: "United States",
    flag: "US",
    documents: [
      {
        slug: "privacy-policy",
        title: "Website Privacy Policy",
        description: "How we collect, use, and protect your information when you visit creationrights.com.",
        lastUpdated: "May 2026",
      },
      {
        slug: "state-privacy",
        title: "Privacy Policy for California and US State Residents",
        description: "Supplemental privacy policy for California (CCPA) and other US states with applicable privacy laws.",
        lastUpdated: "May 2026",
      },
      {
        slug: "terms-of-use",
        title: "Website Terms of Use",
        description: "Terms and conditions governing your access to and use of creationrights.com.",
        lastUpdated: "May 2026",
      },
      {
        slug: "online-sales-terms",
        title: "Terms and Conditions for Sale and Use of the Site",
        description: "Terms governing the purchase and sale of products and services through creationrights.com.",
      },
      {
        slug: "dmca",
        title: "Copyright Policy (DMCA)",
        description: "Reporting claims of copyright infringement and counter notification procedures.",
      },
      {
        slug: "disclaimer",
        title: "US Disclaimers Schedule",
        description: "Principal disclaimer language for Creation Rights platform workflows, transactions, and services.",
        lastUpdated: "18 May 2026",
      },
    ],
  },
  {
    id: "uk",
    label: "United Kingdom",
    flag: "UK",
    documents: [
      {
        slug: "privacy-policy",
        title: "Website Privacy Policy",
        description: "How we collect and process your personal data under UK GDPR when you use creationrights.com.",
      },
      {
        slug: "terms-and-conditions",
        title: "Website Terms and Conditions",
        description: "Terms and conditions governing your use of creationrights.com under English law.",
      },
      {
        slug: "supply-of-services",
        title: "Terms and Conditions for the Supply of Services",
        description: "Online terms and conditions for the supply of services to business customers.",
      },
      {
        slug: "cookie-policy",
        title: "Cookie Policy",
        description: "How we use cookies and similar technologies on creationrights.com.",
        lastUpdated: "May 2026",
      },
      {
        slug: "acceptable-use",
        title: "Acceptable Use Policy",
        description: "Content standards and prohibited uses when interacting with creationrights.com.",
      },
      {
        slug: "disclaimer",
        title: "UK Disclaimers Schedule",
        description: "Principal disclaimer language for Creation Rights platform workflows, transactions, and services under UK law.",
        lastUpdated: "18 May 2026",
      },
    ],
  },
];

export function getAllLegalParams(): { region: string; slug: string }[] {
  return legalRegions.flatMap((region) =>
    region.documents.map((doc) => ({ region: region.id, slug: doc.slug }))
  );
}

export function findLegalDocument(
  regionId: string,
  slug: string
): { region: LegalRegion; document: LegalDocument } | null {
  const region = legalRegions.find((r) => r.id === regionId);
  if (!region) return null;
  const document = region.documents.find((d) => d.slug === slug);
  if (!document) return null;
  return { region, document };
}
