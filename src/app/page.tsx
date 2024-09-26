import Courses from "@/components/Courses";
import Projects from "@/components/Projects";
export default function Home() {
  const description = "CTO, Father of 2, living and working remotely from France and USA with a love for teaching & creating useful products.";
  return <div className="p-6 grid gap-4">
    <header className="max-w-[500px] grid gap-2">
      <h1>{description}</h1>
      <div>
        <a target="_blank" href="">Youtube channel</a>
      </div>
    </header>
    <main className="grid gap-12">
      <Courses />
      <Projects />
    </main>
  </div>;
}