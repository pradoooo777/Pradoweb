export const colorTokens = {
  ocean: {
    50: "#E8F1F8",
    100: "#C5DBEE",
    500: "#1B4B7A",
    700: "#123456",
  },
  sand: {
    50: "#FDF8EE",
    100: "#F4E4BC",
    500: "#C9A227",
    700: "#8B7019",
  },
  forest: {
    50: "#EAF3E8",
    500: "#2D5A27",
    700: "#1E3D1A",
  },
  neutral: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    300: "#D1D5DB",
    500: "#6B7280",
    700: "#374151",
    900: "#111827",
  },
  white: "#FFFFFF",
  error: "#B91C1C",
  success: "#15803D",
} as const;

export type ColorTokenGroup = keyof typeof colorTokens;
