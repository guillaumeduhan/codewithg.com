
export default function Home() {
  const description = "CTO, living and working remotely from France and USA with a love for teaching & creating useful products, Father of 2.";
  return <div className="grid gap-8">
    <header className="max-w-[500px] grid gap-2">
      <h1>{description}</h1>
      <div>
        <a target="_blank" href="https://dub.link/code">Youtube channel</a>
      </div>
    </header>
  </div>;
}