'use client';

import { Link } from "next-view-transitions";

export default function Menu() {
  const items = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Jobs",
      path: "/jobs"
    },
    {
      title: "Todo",
      path: "/todo"
    },
    // {
    //   title: "Dream Garage",
    //   path: "/dream-garage"
    // },
    // {
    //   title: "Templates",
    //   path: "/templates"
    // },
    // {
    //   title: "Projects",
    //   path: "/projects"
    // },
  ]
  return <div className="flex gap-2">
    {items.map((item: any, i: number) => <div key={i}>
      <Link href={item.path}>{item.title}</Link> /
    </div>)}
  </div>;
}