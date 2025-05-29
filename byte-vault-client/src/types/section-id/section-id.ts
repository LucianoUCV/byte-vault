export const SectionIdEnum = {
    Home : "home",
    Pricing: "pricing",
    About: "about",
    Security: "security",
    Contact: "contact"
} as const

export type SectionId = typeof SectionIdEnum[keyof typeof SectionIdEnum];