import {CSVLink} from 'react-csv';

export function DownloadAsCSV(props) {
  return (
    <CSVLink
      style={{ textDecoration: 'none' }}
      data={props.data}
      filename={'one-rep-maxes.csv'}
      target="_blank"
    >
      Download as CSV
    </CSVLink>
  )
}