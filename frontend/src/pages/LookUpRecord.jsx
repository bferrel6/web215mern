import { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const LookUpRecord = () => {
  const [record, setRecord] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/records/${id}`)
      .then((response) => {
        setRecord(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      })
  }, [id])

  return (
    <div className='p-4'>
      <BackButton />
      <h2 className='text-3xl my-4'>Record Details</h2>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-green-200 rounded-xl w-fit p-4 mx-auto">
          <div className="my-4">
            <span className='text-xl mr-4 text-slate-300'>Id</span>
            <span>{record._id}</span>
          </div>              
          <div className="my-4">
            <span className='text-xl mr-4 text-slate-300'>Title</span>
            <span>{record.title}</span>
          </div>
          <div className="my-4">
            <span className='text-xl mr-4 text-slate-300'>Artist</span>
            <span>{record.artist}</span>
          </div>
          <div className="my-4">
            <span className='text-xl mr-4 text-slate-300'>Release Year</span>
            <span>{record.releaseYear}</span>
          </div>
          <div className="my-4">
            <span className='text-xl mr-4 text-slate-300'>Added</span>
            <span>{new Date(record.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className='text-xl mr-4 text-slate-300'>Last Updated</span>
            <span>{new Date(record.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default LookUpRecord