import React, {useState, useEffect} from "react";
import axios from "axios";
import DataTable from "./DataTable";

function Temblores(){
    const [data, setData] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2023/01/01&endtime=2023/04/22&latitude=18.220&longitude=-66.590&maxradiuskm=150');
        const results = [];
        result.data.features.map((element, index) =>{
            console.log(element)
            results.push({'Id':element.id, 'Mag':element.properties.mag, 'Place':element.properties.place})
        })
        setData(results);
      };
  
      fetchData();
    }, []);

    const columns = ['ID','Mag','Place'];
    const values = data;
    
    return (
        <div>
        {data ? (
            <DataTable columns={columns} data={values} rowsPerPage={10} initialPage={1} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    )
}
export default Temblores