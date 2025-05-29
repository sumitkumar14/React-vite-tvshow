
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getSeriesDetails } from "@/services/apiService";
import { useParams } from "react-router-dom";
import ShowCard from '@/components/ShowCard';
import DOMPurify from "dompurify";




function ShowTvSeriesDetails() {
    const [series, setSeries] = useState([]);
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
  
    return (
        <>
    <Container fluid className="p-4">
        <Row>
          <Col md={3} className="d-flex"><ShowCard title={series.name} text={series.rating?.average}  image={series?.image?.medium}/></Col>
          <Col>
          <Col><SafeRender content={series.summary}/></Col>
          <Col>URL: {series.url}`</Col>
          <Col>Genres: {series.genres}</Col>
          <Col>Runtime: {series.runtime}</Col>
          <Col>Official Site: {series.officialSite}</Col>
          </Col>
        </Row>
       </Container></>);
  }
  
  export default ShowTvSeriesDetails;
  