export const getAllProjects = async () => {
    try {
      const response = await fetch('https://msmerise-backend-production.up.railway.app/projects');
      const projects = await response.json();
      return projects;
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }
  };
  
  export const createProject = async (projectData) => {
    try {
      const response = await fetch('https://msmerise-backend-production.up.railway.app/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData),
      });
      const createdProject = await response.json();
      return createdProject;
    } catch (error) {
      console.error('Error creating project:', error);
      throw error;
    }
  };
  
  export const updateProject = async (projectId, projectData) => {
    try {
      const response = await fetch(`https://msmerise-backend-production.up.railway.app/projects/${projectId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData),
      });
      const updatedProject = await response.json();
      return updatedProject;
    } catch (error) {
      console.error('Error updating project:', error);
      throw error;
    }
  };
  
  export const deleteProject = async (projectId) => {
    try {
      const response = await fetch(`https://msmerise-backend-production.up.railway.app/projects/${projectId}`, {
        method: 'DELETE',
      });
      const deletedProject = await response.json();
      return deletedProject;
    } catch (error) {
      console.error('Error deleting project:', error);
      throw error;
    }
  };
  