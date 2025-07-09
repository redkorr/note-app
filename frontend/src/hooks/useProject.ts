import axios from 'axios';
import { useState } from 'react';
import type { Project } from '../types';

const useProjects = () => {
  const [data, setData] = useState<Array<Project>>();
  const env =
    import.meta.env.NODE_ENV === 'production'
      ? `${import.meta.env.VITE_API_URL}`
      : 'http://localhost:3000';
  const URL = `${env}/api/projects`;

  async function getProjectsByUserId(userId: string) {
    try {
      const response = await axios.get(`${URL}/${userId}`);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function postProject(userId: string, project: Project) {
    try {
      await axios({
        method: 'post',
        url: URL,
        data: {
          name: project.name,
          description: project?.description,
          members: project.members,
          owner: userId,
          admins: project.admins,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function patchProject(project: Project) {
    try {
      await axios({
        method: 'patch',
        url: `${URL}/${project.id}`,
        data: project,
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteProject(projectId: string) {
    try {
      await axios({
        method: 'delete',
        url: `${URL}/${projectId}`,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return {
    getProjectsByUserId,
    postProject,
    patchProject,
    deleteProject,
    data,
  };
};

export default useProjects;
