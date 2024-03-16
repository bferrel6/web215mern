/* eslint-disable react/prop-types */
import RecordSingleCard from './RecordSingleCard';

const RecordCards = ({ records }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {records.map((item) => (
        <RecordSingleCard key={item._id} record={item} />
      ))}
    </div>
  )
}

export default RecordCards