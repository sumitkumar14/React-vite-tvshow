import Button from 'react-bootstrap/Button';
import { useState } from 'react'

function About() {
    const [count, setCount] = useState(0)
    return  <div className="card">
    <Button onClick={() => setCount((count) => count + 1)} variant="primary">count is {count}</Button>
    </div>;
  }
  
  export default About;
  