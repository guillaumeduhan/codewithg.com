'use client';

import Link from "next/link";

export default function page() {
  const items = [
    {
      title: "Supabase course",
      link: "https://dub.sh/paSQB1N"
    }, {
      title: "Next.js Shadcn Dashboard",
      link: "https://dub.sh/nextjs-shadcnui"
    }, {
      title: "Next.js Supabase",
      link: "https://dub.sh/nextjs14-supabase"
    }, {
      title: "Next.js Newsletter app",
      link: "https://dub.sh/pwD7Fag"
    }, {
      title: "Nuxt 3 Shadcn",
      link: "https://dub.sh/nuxt3-shadcn"
    }, {
      title: "Next.js Resend",
      link: "https://github.com/guillaumeduhan/resend-nextjs14"
    }
  ]

  return <div>
    {items.map((item, index) => (
      <div key={index}><Link target="blank" href={item.link}>Link here</Link> – {item.title}</div>
    ))}
  </div>;
}