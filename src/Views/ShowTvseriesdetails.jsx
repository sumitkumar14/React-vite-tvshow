
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getSeriesDetails, getSeriesEpisodesDetails } from "@/services/apiService";
import { useParams } from "react-router-dom";
import ShowCard from '@/components/ShowCard';
import DOMPurify from "dompurify";
import Table from '@/components/Table'
import ErrorBoundary from "@/components/ErrorBoundary";





function ShowTvSeriesDetails() {
    const [series, setSeries] = useState([]);
    const [episodes, setEpisodes] = useState([]);
    const { id } = useParams();

    function SafeRender({ content }) {
        const sanitizedContent = DOMPurify.sanitize(content);
        return <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />;
      }

    useEffect(() => {
        getSeriesDetails(id)
        .then((data) => setSeries(data)) // Limiting to 6 posts for display
        .catch((error) => console.error("Failed to fetch posts", error));
    }, []);
    useEffect(() => {
      getSeriesEpisodesDetails(id)
      .then((data) => setEpisodes(data.map(({ id, name, image }) => ({
        id,
        name,
        image: image.medium,
      }))
      )) // Limiting to 6 posts for display
      .catch((error) => console.error("Failed to fetch posts", error));
  }, []);
  
    return (
        <>
    <Container fluid className="p-4">
        <Row>
          <Col md={3} className="d-flex"><ShowCard isView={false} title={series.name} text={series.rating?.average}  image={series?.image?.medium}/></Col>
          <Col>
          <Col><SafeRender content={series.summary}/></Col>
          <Col>URL: {series.url}`</Col>
          <Col>Genres: {series.genres}</Col>
          <Col>Runtime: {series.runtime}</Col>
          <Col>Official Site: {series.officialSite}</Col>
          </Col>
        </Row>
        <Row>
        <ErrorBoundary>
        <Table data={episodes}/>
    </ErrorBoundary>

          
        </Row>
       </Container></>);
  }
  
  export default ShowTvSeriesDetails;
  