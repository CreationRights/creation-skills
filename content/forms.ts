export const confidentialityNotice = "Do not send confidential source files, unreleased assets, private talent materials, contracts, legal documents, credentials, private links, or sensitive rights notes through this form.";

export const reviewFormFields = {
  title: "Book a C/Skills Review",
  subtitle: "Start with a focused review of one creation flow.",
  fields: [
    { name: "name", label: "Full Name", type: "text" as const, required: true },
    { name: "email", label: "Work Email", type: "email" as const, required: true },
    { name: "company", label: "Company", type: "text" as const, required: true },
    { name: "role", label: "Role / Title", type: "text" as const, required: true },
    { name: "industry", label: "Industry", type: "select" as const, required: true, options: [
      "Media and Entertainment",
      "Music and Artist Management",
      "Broadcasting",
      "Film and Documentary",
      "Brand / Consumer",
      "Agency / Production Company",
      "Fashion and Luxury",
      "Gaming and Interactive",
      "Sports Media",
      "Technology Platform",
      "Other",
    ]},
    { name: "productionPath", label: "Which creation flow would you like to review?", type: "textarea" as const, required: false },
    { name: "context", label: "Anything else we should know?", type: "textarea" as const, required: false },
  ],
} as const;

export const contactFormFields = {
  title: "Contact Us",
  subtitle: "For general enquiries, partnership questions, or to learn more about Creation Skills.",
  fields: [
    { name: "name", label: "Full Name", type: "text" as const, required: true },
    { name: "email", label: "Work Email", type: "email" as const, required: true },
    { name: "company", label: "Company", type: "text" as const, required: false },
    { name: "subject", label: "Subject", type: "select" as const, required: true, options: [
      "General Enquiry",
      "Partnership",
      "Speaking and Briefings",
      "Press",
      "Other",
    ]},
    { name: "message", label: "Message", type: "textarea" as const, required: true },
  ],
} as const;
