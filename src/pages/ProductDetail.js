import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Button,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
//useParams 로 현재 접속된 파라미터의 id값을 찾아와서
//그 찾아온 Id에 해당하는 json 인덱스를 찾아온다는 생각.
//그 json을 찾아오기 위해 3004포트에 페이크로 호스팅된 json데이터를
//fetch로 찾아온다.

const ProductDetail = () => {
  //데이터 정상적으로 들어오면 loading=true 줄것임
  const [loading, setLoading] = useState(false);
  const [product, setproduct] = useState();
  const { id } = useParams();

  const getProductDetail = async () => {
    setLoading(true);
    const url = `https://my-json-server.typicode.com/IPYURA/shopping-musinsa/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setLoading(false);
    setproduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  if (loading || product === undefined) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      <Row>
        <Col className="product-detail-img">
          <img src={product?.img} alt={product?.title} />
        </Col>
        <Col>
          <div className="product-info">{product?.title}</div>
          <div className="product-info">{product?.price}</div>
          <div className="choice">
            {product?.choice ? "Conscious choice" : ""}
          </div>
          <Dropdown className="drop-down">
            <Dropdown.Toggle variant="outline-dark">
              사이즈 선택
            </Dropdown.Toggle>
            <DropdownMenu>
              {product?.size.length > 0 &&
                product?.size.map((item, index) => (
                  <Dropdown.Item key={index} href="#/action">
                    {item}
                  </Dropdown.Item>
                ))}
            </DropdownMenu>
          </Dropdown>
          <Button variant="dark" className="add-button">
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

//?.img 인게 포인트이다.
//의미는 "~가 정상적으로 데이터를 갖고오게 된다면..."

export default ProductDetail;
