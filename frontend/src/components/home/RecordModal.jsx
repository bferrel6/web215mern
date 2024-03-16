/* eslint-disable react/prop-types */
import { AiOutlineClose } from 'react-icons/ai';
import { PiVinylRecordBold } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const RecordModal = ({ record, onClose }) => {
  return (
    <div 
        className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
        onClick={onClose}
    >
        <div 
            onClick={(event) => event.stopPropagation()}
            className='w-[600px] max-w-full h-[400px] bg-gray-200 text-slate-800 rounded-xl p-4 flex flex-col relative'
        >
            <AiOutlineClose 
                className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
                onClick={onClose}
            />
            <h4 className="w-fit px-4 py-1 bg-green-200 text-slate-800 rounded-lg text-2xl">
                {record.releaseYear}
            </h4>
            <h4 className="my-2 text-gray-500 text-l">{record._id}</h4>
            <div className="flex justify-start records-center gap-x-2">
                <PiVinylRecordBold className="text-slate-800 text-2xl mt-2" />
                <h5 className="my-1 text-2xl">{record.title}</h5>
            </div>
            <div className="flex justify-start records-center gap-x-2">
                <BiUserCircle className="text-red-400 text-2xl mt-2" />
                <h4 className="my-1 text-2xl">{record.artist}</h4>
            </div>
            <p className='mt-4'><em>Brawny Recommendation</em></p>
            <p className='my-2'>What a great record! I will never forget the first time I heard it...</p>
        </div>
    </div>
  )
}

export default RecordModal