'use client';

import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname();
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
      title: "Repositories",
      path: "/repos"
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
  return <div className={`flex gap-2`}>
    {items.map((item: any, i: number) => <div key={i} className="flex gap-2">
      <Link href={item.path}>{item.title}</Link>
      <span>/</span>
    </div>)}
  </div>;
}