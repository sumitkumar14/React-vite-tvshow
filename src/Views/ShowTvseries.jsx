
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState, useCallback } from "react";
import { getSeriesList, searchSeriesList } from "@/services/apiService";
import ShowCard from '@/components/ShowCard';
import SearchComponent from "@/components/SearchComponent";



const ShowTvSeries= () => {
    const [series, setSeries] = useState([]);

    // Memoized function to fetch TV series
  const getSeries = useCallback(() => {
    getSeriesList()
      .then((data) => setSeries(data)) // Fetch and set the series list
      .catch((error) => console.error("Failed to fetch series", error));
  }, []);

  // Memoized function to search TV series
  const handleSearch = useCallback((query) => {
    console.log("Searching for:", query);
    if(!query){
        getSeries();}
    else{    
    searchSeriesList(query)
      .then((data) => setSeries(data))
      .catch((error) => console.error("Failed to fetch series", error));}
  }, []);

  useEffect(()=>{getSeries()},[])
  
    return (
        <>
        <div className="m-1 p-1"><SearchComponent onSearch={handleSearch} onClear={getSeries}/></div>
    <Container fluid className="p-3">
         <Row className='justify-content-between'>{series.map((x,i)=>
          <Col md={3} className="d-flex p-2 m-0 justify-content-center" key={i} ><ShowCard title={x.name||x.show.name} text={x?.rating?.average || x.show?.rating?.average} route={`/ShowTvSeriesDetails/${x.id}`} image={x?.image?.medium||x?.show?.image?.medium}/></Col>
       ) }</Row>
       </Container></>);
  }
  
  export default ShowTvSeries;
  