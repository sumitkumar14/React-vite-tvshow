import { useState, useEffect } from "react";
import { Form, FormControl, Button, Container } from "react-bootstrap";
// import { X } from "react-bootstrap-icons"; // Import cross icon


function SearchComponent({ onSearch, onClear }) {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

    useEffect(() => {
        if (debouncedQuery && debouncedQuery.length>=3 ) {
          onSearch(debouncedQuery);
        }
      }, [debouncedQuery, onSearch]);
    
    

  
  const clearSearch = () => {
    setQuery("");
    onClear(query);
  };


  return (
    <Container className="mt-3">
      <Form className="d-flex">
        <FormControl
          type="text"
          placeholder="Search..."
          className="me-2"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (e.target.value === "") {
                onSearch(""); // Ensures API resets search results
              }
      
        } 
}
        />
        {query && (
            <Button className='mx-1' variant="outline-secondary" onClick={clearSearch}>
              {/* <X size={20} /> */}
               Clear
            </Button>
          )}
        {/* <Button variant="primary" onClick={handleSearch}>Search</Button> */}
      </Form>
    </Container>
  );
}

export default SearchComponent;