/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { PiVinylRecordBold } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import RecordModal from "./RecordModal";

const RecordSingleCard = ({ record }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div
            key={record._id}
            className="border-2 border-slate-50 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
        >
            <h4 className="absolute top-1 right-2 px-4 py-1 bg-green-200 text-slate-800 rounded-lg text-2xl">
                {record.releaseYear}
            </h4>
            <div className="flex justify-start records-center gap-x-2 mt-8">
                <PiVinylRecordBold className="text-slate-800 text-2xl mt-2" />
                <h5 className="my-1 text-2xl">{record.title}</h5>
            </div>
            <div className="flex justify-start records-center gap-x-2">
                <BiUserCircle className="text-slate-800 text-2xl mt-2" />
                <h4 className="my-1 text-2xl">{record.artist}</h4>
            </div>
            <div className="flex justify-between records-center gap-x-2 mt-4 p-4">
                <BiShow
                    className="text-3xl text-blue-800 hover:text-black cursor-pointer"
                    onClick={() => setShowModal(true)}
                />
                <Link to={`/records/details/${record._id}`}>
                    <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
                </Link>
                <Link to={`/records/edit/${record._id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
                </Link>
                <Link to={`/records/delete/${record._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
                </Link>
            </div>
            {
                showModal && (
                    <RecordModal record={record} onClose={() => setShowModal(false)} />
                )
            }
        </div>
    );
};

export default RecordSingleCard;

//<h4 className="my-2 text-gray-500 text-l">{record._id}</h4>