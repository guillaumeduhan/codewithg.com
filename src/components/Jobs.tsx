import dayjs from "dayjs";
import numeral from "numeral";
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime)

const JobItem = ({ item }: any) => {
  const { title, location, remote, created_at, entry_price, end_price, company_name } = item;
  return <div className="grid p-1 border rounded-xl bg-neutral-100 shadow cursor-pointer transition overflow-hidden hover:scale-[102%] hover:rotate-3">
    <div className="bg-white p-3 grid gap-2 rounded-lg shadow">
      <header className="flex gap-2 items-center ">
        <div className="w-12 h-12 bg-neutral-200 rounded-lg" />
        <p className="font-[600]">{company_name}</p>
      </header>
      <div>
        <p className="font-[600]">{title}</p>
        <div className="flex gap-2 text-neutral-500">
          <p>{location}</p> |
          <div className="flex">
            <p>{numeral(entry_price).format('0a')}</p>
            <span>-</span>
            <p>{numeral(end_price).format('0a')}</p>
          </div> |
          <p>{remote ? 'Remote' : 'Presential'}</p>
        </div>
      </div>
    </div>
    <p className="text-neutral-500 text-xs p-2">{dayjs(item.created_at).fromNow(true)} ago</p>
  </div>
}

export default function Jobs() {
  const jobs = [
    {
      title: "Product Manager",
      created_at: "2024-10-18T00:00:00",
      location: "Bruxelles, Belgium",
      entry_price: 26000,
      end_price: 28000,
      remote: true,
      company_name: "Wesmart",
      type: "Full-time",
      category: ["Product Manager"],
      disabled: false
    }, {
      title: "Developer Python",
      created_at: "2024-10-18T00:00:00",
      location: "Bruxelles, Belgium",
      entry_price: 26000,
      end_price: 28000,
      remote: true,
      company_name: "Wesmart",
      type: "Full-time",
      category: ["Developer"],
      disabled: false
    }
  ]
  return <div className="grid container">
    <div className="grid grid-cols-3 gap-4">
      {jobs.map((item, index) => (
        <JobItem key={index} {...{ item }} />
      ))}
    </div>
  </div>;
}