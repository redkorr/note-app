import { Link } from 'react-router';
import type { Project } from '../types';
import LINKS from '../utils/linkPaths';

interface ProjectButtonProps {
  project: Project;
}

const ProjectButton = ({ project }: ProjectButtonProps) => {
  return (
    <Link
      to={`${LINKS.projects}/${project.id}`}
      className='flex flex-col border rounded-2xl w-40 h-32'
    >
      <span className='bg-amber-600 p-1 rounded-tr-[15px] rounded-tl-[15px]'>
        {project.name}
      </span>
      <span className=''>{project.description}</span>
    </Link>
  );
};

export default ProjectButton;
