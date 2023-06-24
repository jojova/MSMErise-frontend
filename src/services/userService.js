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
  
  export const signInUser = async (userEmail, userPassword) => {
    try {
      const response = await fetch('https://msmerise-backend-production.up.railway.app/users/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userEmail, userPassword }),
      });
      const user = await response.json();
      return user;
    } catch (error) {
      console.error('Error signing in user:', error);
      throw error;
    }
  };
  