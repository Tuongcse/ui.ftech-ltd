import { MainNavItem } from "types/nav"

export interface DocsConfig {
  mainNav: MainNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Blocks",
      href: "/blocks",
    },
    {
      title: "Themes",
      href: "/themes",
    },
    {
      title: "Colors",
      href: "/colors",
    },
  ],
}
