import { type Registry } from "shadcn/registry"

import { blocks } from "@/registry/registry-blocks"
import { hooks } from "@/registry/registry-hooks"
import { lib } from "@/registry/registry-lib"
import { themes } from "@/registry/registry-themes"
import { ui } from "@/registry/registry-ui"

import { charts } from "./registry-charts"

export const registry = {
  name: "shadcn/ui",
  homepage: "https://ui.ftech.ltd",
  items: [
    ...ui,
    ...blocks,
    ...charts,
    ...lib,
    ...hooks,
    ...themes,
    // Internal use only.
    // ...internal,
    // ...examples,
  ],
} satisfies Registry
