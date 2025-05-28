
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getSeriesList, searchSeriesList } from "@/services/apiService";
import ShowCard from '@/components/ShowCard';
import SearchComponent from "@/components/SearchComponent";



function ShowTvSeries() {
    const [series, setSeries] = useState([]);

    const handleSearch = (query) => {
        console.log("Searching for:", query);
        searchSeriesList(query)
        .then((data) => setSeries(data))
        .catch((error) => console.error("Failed to fetch posts", error));
        // Here you can implement API calls or filtering logic
      };

    useEffect(() => {
        getSeriesList()
        .then((data) => setSeries(data)) // Limiting to 6 posts for display
        .catch((error) => console.error("Failed to fetch posts", error));
    }, []);
  
    return (
        <>
        <div className="my-3"><SearchComponent onSearch={handleSearch} onClear={handleSearch}/></div>
    <Container>
        <Row>{series.map((x,i)=>
          <Col ma={3} key={i} className="p-3 bg-light border"><ShowCard title={x.name||x.show.name} text='' image={x?.image?.medium||x?.show?.image?.medium}/></Col>
       ) }</Row>
       </Container></>);
  }
  
  export default ShowTvSeries;
  