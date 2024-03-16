/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const RecordsTable = ( { records } ) => {
  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border border-slate-50 rounded-md">No</th>
          <th className="border border-slate-50 rounded-md">Title</th>
          <th className="border border-slate-50 rounded-md max-md:hidden">
            Artist
          </th>
          <th className="border border-slate-50 rounded-md max-md:hidden">
            Release Year
          </th>
          <th className="border border-slate-50 rounded-md">Operations</th>
        </tr>
      </thead>
      <tbody>
        {records.map((record, index) => (
          <tr key={record._id} className="h-8">
            <td className="border border-slate-100 rounded-md text-center">
              {index + 1}
            </td>
            <td className="border border-slate-100 rounded-md text-center">
              {record.title}
            </td>
            <td className="border border-slate-100 rounded-md text-center max-md:hidden">
              {record.artist}
            </td>
            <td className="border border-slate-100 rounded-md text-center max-md:hidden">
              {record.releaseYear}
            </td>
            <td className="border border-slate-100 rounded-md text-center">
              <div className="flex justify-center gap-x-4">
                <Link to={`/records/details/${record._id}`}>
                  <BsInfoCircle className="text-2xl text-green-800" />
                </Link>
                <Link to={`/records/edit/${record._id}`}>
                  <AiOutlineEdit className="text-2xl text-yellow-600" />
                </Link>
                <Link to={`/records/delete/${record._id}`}>
                  <MdOutlineDelete className="text-2xl text-red-600" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default RecordsTable