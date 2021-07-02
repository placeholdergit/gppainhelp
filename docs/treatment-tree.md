---
id: treatment-tree
title: Get Started
---

import CardWrapper from "@theme/CardWrapper";

export const data = [
  {
    title: <>Mild to Moderate</>,
    icon: "😟",
    href: "/content/tree/mild-to-moderate"
  },
  {
    title: <>Moderate to Severe</>,
    icon: "😩",
    href: "/content/tree/moderate-to-severe"
  },
  {
    title: <>Breakthrough</>,
    icon: "😱",
    href: "/content/tree/breakthrough-pain",
    description: "A flare-up of pain that can occur despite taking regular pain medicine."
  },
]

Select what type of pain your patient is experiencing:

<div>
  {data.map((resource, index) => (
    <CardWrapper {...resource} />
  ))}
</div>
