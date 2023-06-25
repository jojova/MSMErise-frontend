export const signUpUser = async (userData) => {
    try {
      const response = await fetch('https://msmerise-backend-production.up.railway.app/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const createdUser = await response.json();
      return createdUser;
    } catch (error) {
      console.error('Error signing up user:', error);
      throw error;
    }
  };
  
  export async function signInUser(userData) {
    try {
      const response = await fetch('https://msmerise-backend-production.up.railway.app/users/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Authentication successful
        return {
          success: true,
          message: 'Authentication successful!',
          data: data,
        };
      } else {
        // Authentication failed
        return {
          success: false,
          message: data.error || 'Authentication failed. Please check your credentials.',
        };
      }
    } catch (error) {
      throw new Error('Error signing in user: ' + error.message);
    }
  }
  