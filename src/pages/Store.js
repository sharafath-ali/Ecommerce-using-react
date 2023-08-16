import React from "react";
import { createClient } from "@supabase/supabase-js";
import { Row, Col, Container, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";
import Productcard from "../components/Productcard";

function Store() {
  const [products, setProducts] = useState([]);
  const supabase = createClient(
    "https://tohotntbwabfhwloqzcw.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvaG90bnRid2FiZmh3bG9xemN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQzMjU1NzYsImV4cCI6MTk4OTkwMTU3Nn0.68wZ_XsY2hO_4g2v0cRszz7LGpeztpic9xnocuFiFNE"
  );

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await supabase.from("products").select();
      setProducts(data);
    }
    fetchProducts();
    console.log("projucts", products);
  }, []);

  return (
    <>
      <Container style={{ background: "#E8E9E8" }}>
        <h1 style={{ marginTop: "30px", marginBottom: "10px" }}>
          Welcome to our food and grocery store
        </h1>
        <h1
          style={{ marginTop: "10px", marginBottom: "50px", marginLeft: "25%" }}
        >
          - where <strong>Freshness</strong> you can taste,
          <strong>quality</strong> you can trust
        </h1>
        <Row xs={1} md={3} className="g-4">
          {products.map((element) => (
            <Col align="center" className="col" style={{ color: "#181e24" }}>
              <Productcard hh={element.id} products={element} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Store;
