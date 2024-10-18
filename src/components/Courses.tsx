import { LinkItem } from "./Projects";

export default function Courses() {
  const courses = [
    {
      name: "Developer-Course.com",
      link: "https://developer-course.com",
      price: "$29",
      img: "",
      status: "alive"
    }
  ]
  return <div className="grid gap-4">
    <div className="grid gap-1">
      {courses.map((item, index) => (
        <LinkItem key={index} {...{ item }} />
      ))}
    </div>
  </div>;
}