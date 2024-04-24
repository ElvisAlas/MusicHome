
import { useState, useEffect } from 'react';
import axios from 'axios';

function useUserData() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios.get('https://reqres.in/api/users/5')
      .then(response => {
        setUserData(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return userData;
}

export default useUserData;
