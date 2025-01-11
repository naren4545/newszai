import Cookies from 'js-cookie';

export const checkTokenExpiry = (tokenKey:any) => {
  const token = Cookies.get(tokenKey); // Get the token from cookies
  if (!token) {
    console.log('Token not provided in cookies');
    return false;
  }

  try {
    const payload = JSON.parse(atob(token.split('.')[1])); // Decode the payload
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

    if (payload.exp > currentTime) {
      return true; // Token is valid
    } else {
      Cookies.remove(tokenKey); // Remove the expired token
      console.log('Token expired and removed from cookies');
      return false;
    }
  } catch (error) {
    console.error('Invalid token:', error);
    Cookies.remove(tokenKey); // Remove invalid token
    return false;
  }
};

// Example usage

