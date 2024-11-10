import Link from "next/link";

const items = [{
  make: 'BMW',
  model: 'X6 M COMPETITION',
  engine: '617 HP / 553 KW',
  year: 2024,
  transmission: 'Automatic',
  color: 'Black Sapphire Metallic',
  description: 'The ultimate sports car',
  img: './x6.png',
  interior: 'Black Extended Merino Leather',
  video: 'https://www.youtube.com/watch?v=9TXUB2tqLao&ab_channel=RaceSportMedia'
}]
export default function DreamGaragepage() {
  return <div className="container">
    <div className="grid lg:grid-cols-3">
      {items.map((item, index) => (
        <Link key={index} href={item.video} target="_blank" className="no-underline">
          <div key={index} className="grid border rounded-xl dark:bg-transparent dark:border-slate-800 shadow cursor-pointer transition overflow-hidden hover:scale-[102%]">
            <div className="h-56" style={{
              backgroundImage: `url(${item.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}>
            </div>
            <div className="grid gap-0 px-4 py-3">
              <p className="font-[600]">{item.make} {item.model}</p>
              <p className="text-neutral-500 text-sm">{item.year}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>;
}