import type { Registry } from "shadcn/registry"

export const blocks: Registry["items"] = [
  {
    name: "authentication",
    type: "registry:block",
    title: "Authentication",
    description: "A collection of authentication components",
    dependencies: [
      "react",
      "date-fns",
      "lucide-react",
      "react-day-picker",
      "react-hook-form",
      "react-phone-number-input",
      "@tanstack/react-query",
      "js-cookie",
      "axios",
      "sonner",
      "dayjs",
      "numeral",
      "clsx",
      "zod",
    ],
    registryDependencies: [
      "button",
      "calendar",
      "popover",
      "form",
      "command",
      "scroll-area",
      "alert",
    ],
    files: [
      {
        path: "blocks/auth/components/form/date-range.tsx",
        type: "registry:component",
        target: "components/form/date-range.tsx",
      },
      {
        path: "blocks/auth/components/form/input.tsx",
        type: "registry:component",
        target: "components/form/input.tsx",
      },
      {
        path: "blocks/auth/components/form/password-form-field.tsx",
        type: "registry:component",
        target: "components/form/password-form-field.tsx",
      },
      {
        path: "blocks/auth/components/form/phone-input.tsx",
        type: "registry:component",
        target: "components/form/phone-input.tsx",
      },
      {
        path: "blocks/auth/components/form/select.tsx",
        type: "registry:component",
        target: "components/form/select.tsx",
      },
      {
        path: "blocks/auth/components/form/skeleton.tsx",
        type: "registry:component",
        target: "components/form/skeleton.tsx",
      },
      {
        path: "blocks/auth/components/form/textarea.tsx",
        type: "registry:component",
        target: "components/form/textarea.tsx",
      },
      {
        path: "blocks/auth/data/auth/index.ts",
        type: "registry:lib",
        target: "data/auth/index.ts",
      },
      {
        path: "blocks/auth/data/core/model.ts",
        type: "registry:lib",
        target: "data/core/model.ts",
      },
      {
        path: "blocks/auth/data/core/net/api.ts",
        type: "registry:lib",
        target: "data/core/net/api.ts",
      },
      {
        path: "blocks/auth/data/core/net/index.ts",
        type: "registry:lib",
        target: "data/core/net/index.ts",
      },
      {
        path: "blocks/auth/data/index.ts",
        type: "registry:lib",
        target: "data/index.ts",
      },
      {
        path: "blocks/auth/forgot-password/_components/forgot-password-form.tsx",
        type: "registry:component",
        target: "forgot-password/_components/forgot-password-form.tsx",
      },
      {
        path: "blocks/auth/forgot-password/page.tsx",
        type: "registry:page",
        target: "ftech/page.tsx",
      },
      {
        path: "blocks/auth/layout.tsx",
        type: "registry:component",
        target: "layout.tsx",
      },
      {
        path: "blocks/auth/lib/helper.ts",
        type: "registry:lib",
        target: "lib/helper.ts",
      },
      {
        path: "blocks/auth/lib/utils.ts",
        type: "registry:lib",
        target: "lib/utils.ts",
      },
      {
        path: "blocks/auth/login/_components/login-form.tsx",
        type: "registry:component",
        target: "login/_components/login-form.tsx",
      },
      {
        path: "blocks/auth/login/page.tsx",
        type: "registry:page",
        target: "ftech/page.tsx",
      },
      {
        path: "blocks/auth/reset-password/_components/reset-password-form.tsx",
        type: "registry:component",
        target: "reset-password/_components/reset-password-form.tsx",
      },
      {
        path: "blocks/auth/reset-password/page.tsx",
        type: "registry:page",
        target: "ftech/page.tsx",
      },
      {
        path: "blocks/auth/types/auth.ts",
        type: "registry:lib",
        target: "types/auth.ts",
      },
      {
        path: "blocks/auth/types/global.ts",
        type: "registry:lib",
        target: "types/global.ts",
      },
      {
        path: "blocks/auth/types/index.ts",
        type: "registry:lib",
        target: "types/index.ts",
      },
      {
        path: "blocks/auth/utils/api-utils.ts",
        type: "registry:lib",
        target: "utils/api-utils.ts",
      },
      {
        path: "blocks/auth/validators/auth.ts",
        type: "registry:lib",
        target: "validators/auth.ts",
      },
    ],
    categories: ["ftech-internal"],
  },
]
