import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox/*, MdOutlineDelete*/ } from "react-icons/md";
import RecordsTable from "../components/home/RecordsTable";
import RecordCards from "../components/home/RecordCards";
import { serverAddress } from "../config";

const Home = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [displayType, setDisplayType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://${serverAddress}:5555/records`)
      .then((response) => {
        setRecords(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="px-4 py-1 rounded-lg"
          onClick={() => setDisplayType('table')}
        >
          Table View
        </button>
        <button
          className="px-4 py-1 rounded-lg"
          onClick={() => setDisplayType('cards')}
        >
          Card View
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl my-8">Brawny Record Collection</h2>
        <Link className="flex justify-between" to="/records/add">
          <h3 className="mx-4">Add</h3>
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : displayType === 'table' ? (
        <RecordsTable records={records} />
      ) : (
        <RecordCards records={records} />
      )}
    </div>
  );
};

export default Home;
