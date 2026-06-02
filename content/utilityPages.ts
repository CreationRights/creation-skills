export const thankYouPages = {
  review: {
    title: "Thank You",
    headline: "Your C/Skills Review request has been received.",
    body: "We will review your submission and respond within two business days. If your request requires additional context, we may follow up with a short intake call before scheduling.",
    cta: { label: "Return Home", href: "/" },
  },
  contact: {
    title: "Thank You",
    headline: "Your message has been received.",
    body: "We will respond to your enquiry within two business days.",
    cta: { label: "Return Home", href: "/" },
  },
  partnership: {
    title: "Thank You",
    headline: "Your partnership enquiry has been received.",
    body: "We will review your submission and follow up within five business days.",
    cta: { label: "Return Home", href: "/" },
  },
  briefing: {
    title: "Thank You",
    headline: "Your briefing request has been received.",
    body: "We will confirm availability and follow up within five business days.",
    cta: { label: "Return Home", href: "/" },
  },
  newsletter: {
    title: "Thank You",
    headline: "You have been added to the Creation Skills mailing list.",
    body: "You will receive field notes, resource updates, and engagement announcements from Creation Skills.",
    cta: { label: "Return Home", href: "/" },
  },
} as const;
