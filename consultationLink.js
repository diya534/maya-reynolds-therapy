const CONSULTATION_EMAIL = "hello@mayareynoldstherapy.com";

const SUBJECT = "Free Consultation Request";

const BODY = `Hi Dr. Maya Reynolds,

I'm interested in scheduling a free consultation and would like to know about the next available appointment.

Thank you.`;

export const CONSULTATION_GMAIL_URL = `mailto:${CONSULTATION_EMAIL}?subject=${encodeURIComponent(
  SUBJECT
)}&body=${encodeURIComponent(BODY)}`;