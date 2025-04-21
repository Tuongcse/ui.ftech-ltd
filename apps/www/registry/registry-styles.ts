export const styles = [
  {
    name: "ftech",
    label: "Ftech",
  },
  {
    name: "default",
    label: "Default",
  },
] as const

export type Style = (typeof styles)[number]
