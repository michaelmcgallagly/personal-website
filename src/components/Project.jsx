
import projects from "../data/projects.js"
import ProjectCard from "./ProjectCard.jsx"

export default function Project() {
  return (
    <div>
    <div className="flex justify-center" id="projects">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-2 font-bold">My<span className="text-blue-400"> Projects</span> (so far)</h1>
       
    </div>

    <div className="flex flex-col justify-center items-center mt-10">
         {projects.map((project, index)=>(
          <ProjectCard
          key={index}
          logo={project.logo}
          title={project.title}
          description={project.description}
          siteUrl={project.siteUrl}
          codeUrl={project.codeUrl}
          />
         ))}
    </div>
    </div>
  )
}