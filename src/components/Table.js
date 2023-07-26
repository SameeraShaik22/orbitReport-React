const Table = ({ sat }) => {
  console.log("yyyyyyyyyyyyy"+sat.length)
  return (
      <table>
       <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
        </thead>
        
        <tbody>
        {sat.map((item)=>(
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.launchDate}</td>
            <td>{item.launchDate}</td>
          </tr>
        ))}

        </tbody>
      </table>
  );
};

export default Table;