import { type Registry } from "shadcn/registry"

export const charts: Registry["items"] = [
  // Area Charts
  {
    name: "chart-area-axes",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-area-axes.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-area-default",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-area-default.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-area-gradient",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-area-gradient.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-area-icons",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-area-icons.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-area-interactive",
    type: "registry:block",
    registryDependencies: ["card", "chart", "select"],
    files: [
      {
        path: "charts/chart-area-interactive.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "chart-area-legend",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-area-legend.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-area-linear",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-area-linear.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-area-stacked-expand",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-area-stacked-expand.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-area-stacked",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-area-stacked.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-area-step",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-area-step.tsx",
        type: "registry:block",
      },
    ],
  },

  // Bar Charts
  {
    name: "chart-bar-active",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-bar-active.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-bar-default",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-bar-default.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-bar-horizontal",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-bar-horizontal.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-bar-interactive",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-bar-interactive.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-bar-label-custom",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-bar-label-custom.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-bar-label",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-bar-label.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-bar-mixed",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-bar-mixed.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-bar-multiple",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-bar-multiple.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-bar-negative",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-bar-negative.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-bar-stacked",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-bar-stacked.tsx",
        type: "registry:block",
      },
    ],
  },

  // Line Charts
  {
    name: "chart-line-default",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-line-default.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-line-dots-colors",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-line-dots-colors.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-line-dots-custom",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-line-dots-custom.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-line-dots",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-line-dots.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-line-interactive",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-line-interactive.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-line-label-custom",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-line-label-custom.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-line-label",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-line-label.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-line-linear",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-line-linear.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-line-multiple",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-line-multiple.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-line-step",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-line-step.tsx",
        type: "registry:block",
      },
    ],
  },

  // Pie Charts
  {
    name: "chart-pie-donut-active",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-pie-donut-active.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-pie-donut-text",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-pie-donut-text.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-pie-donut",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-pie-donut.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-pie-interactive",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-pie-interactive.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-pie-label-custom",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-pie-label-custom.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-pie-label-list",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-pie-label-list.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-pie-label",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-pie-label.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-pie-legend",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-pie-legend.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-pie-separator-none",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-pie-separator-none.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-pie-simple",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-pie-simple.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-pie-stacked",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-pie-stacked.tsx",
        type: "registry:block",
      },
    ],
  },

  // Radar Charts
  {
    name: "chart-radar-default",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radar-default.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-radar-dots",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radar-dots.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-radar-grid-circle-fill",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radar-grid-circle-fill.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-radar-grid-circle-no-lines",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radar-grid-circle-no-lines.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-radar-grid-circle",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radar-grid-circle.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-radar-grid-custom",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radar-grid-custom.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-radar-grid-fill",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radar-grid-fill.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-radar-grid-none",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radar-grid-none.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-radar-icons",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radar-icons.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-radar-label-custom",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radar-label-custom.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-radar-legend",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radar-legend.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-radar-lines-only",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radar-lines-only.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-radar-multiple",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radar-multiple.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-radar-radius",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radar-radius.tsx",
        type: "registry:block",
      },
    ],
  },

  // Radial Charts
  {
    name: "chart-radial-grid",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radial-grid.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-radial-label",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radial-label.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-radial-shape",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radial-shape.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-radial-simple",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radial-simple.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-radial-stacked",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radial-stacked.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-radial-text",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-radial-text.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-tooltip-default",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-tooltip-default.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-tooltip-indicator-line",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-tooltip-indicator-line.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-tooltip-indicator-none",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-tooltip-indicator-none.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-tooltip-label-none",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-tooltip-label-none.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-tooltip-label-custom",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-tooltip-label-custom.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-tooltip-label-formatter",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-tooltip-label-formatter.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-tooltip-formatter",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-tooltip-formatter.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-tooltip-icons",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-tooltip-icons.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "chart-tooltip-advanced",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-tooltip-advanced.tsx",
        type: "registry:block",
      },
    ],
  },
]
