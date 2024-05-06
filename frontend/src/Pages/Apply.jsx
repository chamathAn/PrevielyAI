import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Apply() {
  const { id } = useParams();
  const [job, setJob] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await axios.get(`/api/application/${id}`);
        console.log(data);
        setJob(data);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };

    fetchData();

    return () => {
     
    };
  }, [id]); 
  return (
    <div className='bg-[#080c14] min-h-screen h-fit'>
      {/* Render your job data here */}
    </div>
  );
}
