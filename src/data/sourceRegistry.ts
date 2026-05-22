import type { SourceLink } from "../types/medical";

export const sourceRegistry = {
  awmf: {
    title: "AWMF Leitlinienregister",
    url: "https://register.awmf.org/",
    type: "leitlinie"
  },
  niceCks: {
    title: "NICE Clinical Knowledge Summaries",
    url: "https://cks.nice.org.uk/",
    type: "leitlinie"
  },
  msdProfessional: {
    title: "MSD Manual Professional",
    url: "https://www.msdmanuals.com/professional",
    type: "manual"
  },
  ncbiBookshelf: {
    title: "NCBI Bookshelf",
    url: "https://www.ncbi.nlm.nih.gov/books/",
    type: "review"
  },
  kdigo: {
    title: "KDIGO Guidelines",
    url: "https://kdigo.org/guidelines/",
    type: "leitlinie"
  },
  esc: {
    title: "ESC Guidelines",
    url: "https://www.escardio.org/Guidelines",
    type: "leitlinie"
  },
  endocrineSociety: {
    title: "Endocrine Society Clinical Practice Guidelines",
    url: "https://www.endocrine.org/clinical-practice-guidelines",
    type: "leitlinie"
  },
  ada: {
    title: "ADA Standards of Care",
    url: "https://diabetesjournals.org/care/issue",
    type: "leitlinie"
  },
  ddg: {
    title: "Deutsche Diabetes Gesellschaft",
    url: "https://www.deutsche-diabetes-gesellschaft.de/",
    type: "leitlinie"
  },
  dge: {
    title: "Deutsche Gesellschaft für Endokrinologie",
    url: "https://www.endokrinologie.net/",
    type: "leitlinie"
  },
  dgk: {
    title: "Deutsche Gesellschaft für Kardiologie",
    url: "https://dgk.org/",
    type: "leitlinie"
  },
  dgn: {
    title: "Deutsche Gesellschaft für Neurologie",
    url: "https://dgn.org/",
    type: "leitlinie"
  },
  rki: {
    title: "Robert Koch-Institut",
    url: "https://www.rki.de/",
    type: "leitlinie"
  },
  who: {
    title: "World Health Organization",
    url: "https://www.who.int/",
    type: "leitlinie"
  }
} satisfies Record<string, SourceLink>;
