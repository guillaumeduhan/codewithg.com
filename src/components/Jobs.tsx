// @ts-nocheck
import dayjs from "dayjs";
import numeral from "numeral";
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime)

const JobItem = ({ item }: any) => {
  const { title, location, remote, created_at, entry_price, end_price, company_name, type, icon_url } = item;
  return <div className="grid p-1 border rounded-xl bg-neutral-100 dark:bg-transparent dark:border-slate-800 shadow cursor-pointer transition overflow-hidden hover:scale-[102%] hover:rotate-3">
    <div className="grid gap-4 bg-white dark:bg-slate-800 p-3 grid gap-2 rounded-lg shadow">
      <header className="flex gap-2 items-center ">
        <div className="w-12 h-12 bg-neutral-200 dark:bg-slate-700 rounded-lg" style={{
          backgroundImage: `url(${icon_url})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }} />
        <div>
          <p className="font-[600]">{title}</p>
          <p className="text-sm">{company_name}</p>
        </div>
      </header>
      <div className="grid gap-2">
        <div className="flex gap-2 text-neutral-500">
          <div className="tag tag--type">{type}</div>
          <div className="tag tag--remote">{remote ? 'Remote' : 'Presential'}</div>
          {entry_price && end_price && <div className="tag tag--price">{numeral(entry_price).format('0a')}-{numeral(end_price).format('0a')}</div>}
          {location && <div className="tag tag--location">{location}</div>}
        </div>
      </div>
    </div>
    <p className="text-neutral-500 text-xs p-2">{dayjs(item.created_at).fromNow(true)} ago</p>
  </div>
}

export default function Jobs() {
  const jobs = [
    {
      title: "Front-End Engineer",
      created_at: "2024-10-23T00:00:00",
      location: null,
      remote: true,
      company_name: "Peerlist",
      type: "Internship",
      category: ["Developer"],
      disabled: false,
      icon_url: "./peerlist.webp",
      link: "https://x.com/Peerlist/status/1848980080141472039"
    }, {
      title: "Product Manager",
      created_at: "2024-10-18T00:00:00",
      location: "Bruxelles, Belgium",
      remote: true,
      company_name: "Wesmart",
      type: "Full-time",
      category: ["Product Manager"],
      disabled: false,
      icon_url: "https://media.licdn.com/dms/image/v2/D4E0BAQHZDq_xsclG6g/company-logo_200_200/company-logo_200_200/0/1718381251879/wesmart_logo?e=1737590400&v=beta&t=VCcaLRnuz3Y0V91iACB6WuE4nN5mySxhWcViGEPzXxE",
      link: "https://www.linkedin.com/company/wesmart/"
    }, {
      title: "Developer Python",
      created_at: "2024-10-18T00:00:00",
      location: "Bruxelles, Belgium",
      remote: true,
      company_name: "Wesmart",
      type: "Full-time",
      category: ["Developer"],
      disabled: false,
      icon_url: "https://media.licdn.com/dms/image/v2/D4E0BAQHZDq_xsclG6g/company-logo_200_200/company-logo_200_200/0/1718381251879/wesmart_logo?e=1737590400&v=beta&t=VCcaLRnuz3Y0V91iACB6WuE4nN5mySxhWcViGEPzXxE",
      link: "https://www.linkedin.com/company/wesmart/"
    }
  ]
  return <div className="grid container">
    <div className="grid lg:grid-cols-3 gap-4">
      {jobs.map((item, index) => (
        <JobItem key={index} {...{ item }} />
      ))}
    </div>
  </div>;
}