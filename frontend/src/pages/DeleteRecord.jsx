import { useState } from 'react'
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const DeleteRecord = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteRecord = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/records/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Record Deleted Successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        // alert('Something went wrong! Check console for details...');
        enqueueSnackbar('Something went wrong! Check console for details...', { variant: 'error' });
        console.log(error);
      })
  }

  return (
    <div className='p-4'>
      <BackButton />
      <h2 className='text-3xl my-4'>Delete Record</h2>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col items-center border-2 border-green-200 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are you <em>sure</em> you want to delete this record?</h3>
        <button
          className='p-4 bg-red-600 text-white m-8 w-full'
          onClick={handleDeleteRecord}
        >
          Confirm Delete
        </button>
      </div>
    </div>
  )
}

export default DeleteRecord