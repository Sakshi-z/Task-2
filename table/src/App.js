import { useState, useEffect } from 'react';


function formatDate(timestamp) {
  const date = new Date(timestamp);
  const options = { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
  return date.toLocaleString('en-US', options);
}

function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://demo.4pointx.com/_notebooks/notebooks/_all', {
      headers: {
        Authorization: 'Basic YWRtaW46OGtRM1VuVlVtU2dUWTBSWQ=='
      }
    })
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>notebook_name</th>
          <th>updated_at</th>
          <th>updated_by</th>
          <th>created_at</th>
          <th>last_run</th>
          <th>created_by</th>
          <th>no_of_runs</th>
          <th>notebook_id</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          
          <tr key={row.notebook_id}>
            <td bgcolor="#CDCDCD">{row.notebook_name || '-'}</td>
            <td bgcolor="#CDCDCD">{row.updated_at || '-'}</td>
            <td bgcolor="#CDCDCD">{row.updated_by || '-'}</td>
            <td bgcolor="#CDCDCD">{row.created_at ? formatDate(row.created_at) : '-'}</td>
            <td bgcolor="#CDCDCD">{row.last_run ? formatDate(row.last_run) : '-'}</td>
            <td bgcolor="#CDCDCD">{row.created_by || '-'}</td>
            <td bgcolor="#CDCDCD">{row.no_of_runs || '-'}</td>
            <td bgcolor="#CDCDCD">{row.notebook_id || '-'}</td>
            <td bgcolor="#CDCDCD">{row.status || '-'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
