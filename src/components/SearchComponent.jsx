import { useState } from "react";
import { Form, FormControl, Button, Container } from "react-bootstrap";
import { X } from "react-bootstrap-icons"; // Import cross icon


function SearchComponent({ onSearch, onClear }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };
  
  const clearSearch = () => {
    setQuery("");
    onClear(query); // Clears the search field
  };


  return (
    <Container className="mt-3">
      <Form className="d-flex">
        <FormControl
          type="text"
          placeholder="Search..."
          className="me-2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
            <Button variant="outline-secondary" onClick={clearSearch}>
              <X size={20} />
            </Button>
          )}
        <Button variant="primary" onClick={handleSearch}>Search</Button>
      </Form>
    </Container>
  );
}

export default SearchComponent;