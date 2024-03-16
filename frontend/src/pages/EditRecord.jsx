import { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';


const EditRecord = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/records/${id}`)
      .then((response) => {
        setArtist(response.data.artist);
        setReleaseYear(response.data.releaseYear);
        setTitle(response.data.title);
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        alert('Something went wrong! Check console for details...');
        console.log(error);
      })
  }, [id])

  const handleEditRecord = () => {
    const data = {
      title,
      artist,
      releaseYear
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/records/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Record Edited Successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('Something went wrong! Check console for details...');
        enqueueSnackbar('Something went wrong! Check console for details...', { variant: 'error' });
        console.log(error);
      })
  }
  return (
    <div className='p-4'>
      <BackButton />
      <h2 className='text-3xl'>Edit Record</h2>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-green-100 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-slate-300'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-slate-300'>Artist</label>
          <input
            type='text'
            value={artist}
            onChange={(event) => setArtist(event.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-slate-300'>Release Year</label>
          <input
            type='text'
            value={releaseYear}
            onChange={(event) => setReleaseYear(event.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <button className='p-2 m-8' onClick={handleEditRecord}>
          Update
        </button>
      </div>

    </div>
  )
}

export default EditRecord