import React from 'react'
import projects from '../../data/projects'
import { useInView } from 'react-intersection-observer'

const Projects = (props) => {
    const { ref: blockRef, inView: blockInView } = useInView({})

    return (
        <div ref={blockRef} className='pb-10 min-h-screen items-center flex flex-col font-aleo' style={{ paddingTop: props.topPadding }}>
            <h1 className={`text-[60px] font-semibold`}>Our Projects</h1>
            <div className={`grid grid-cols-3 ${blockInView ? "gap-8" : "gap-20"} duration-1000`}>
                {
                    projects.map((project, index) => {
                        return <ProjectCard key={index} project={project} />
                    })
                }
            </div>
        </div>
    )
}

export default Projects

const ProjectCard = ({ project }) => {
    return (
        <div className={`group h-[400px] w-[300px] bg-[#808080] rounded-xl shadow-card overflow-hidden flex relative justify-center items-center duration-[0.8s]
        bg-center bg-no-repeat bg-[length:300px] hover:bg-left hover:bg-[length:600px]`}
            style={{ backgroundImage: `url(${project.background})` }}>
            <p className='absolute text-xl font-bold top-0 w-full text-white p-3 bg-black group-hover:bg-transparent'>{project.title}</p>
            <div className='h-[calc(100%-10px)] w-[calc(100%-10px)] rounded-xl duration-500  border-transparent justify-center items-center flex flex-col space-y-6
            group-hover:border-[1px] group-hover:border-white group-hover:border-solid'>
                <button className='py-[10px] px-[20px] font-roboto text-white border-white border-[1px] text-[13px] opacity-0 
                group-hover:opacity-100 hover:bg-[#1b6666] hover:text-[#ecb403] duration-300'>LEARN MORE</button>
            </div>
        </div>
    )
}