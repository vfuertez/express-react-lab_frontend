import{ useLoaderData} from 'react-router-dom'

function Projects(props){
const projects = useLoaderData()

    return projects.map((project) => (
        <div className='projectDisplay'>
            <h2>{project.name}</h2>
            <img src={project.image} alt=""/>
            <div>
            < a href={project.git}>
                <button>Github</button>
            </a>
            <a href={project.live}>
                <button>Live Site</button>
            </a>
            </div>
        </div>
    ))
}

export default Projects