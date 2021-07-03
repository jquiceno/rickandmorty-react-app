import React, { useEffect, useState, useRef } from 'react'
import { getCharacter } from 'rickmortyapi' // getCharacter()
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import { NavMenu, CharterCart } from '../../components'

function Charters () {
  const [charters, setCharter] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const containerRef = useRef(null)
  
  const getCharters = async ({ page = 1 } = {}) => {
    const { results } = await getCharacter({
      page
    })

    setCharter(charters.concat(results))
  }

  const handlePagination = (page) => {
    if (page < 1) return
    setCurrentPage(page)
  }

  useEffect(() => {
    getCharters({
      page: currentPage
    })
  }, [currentPage])

  return (
    <>
      <NavMenu />
      <Container ref={containerRef} fluid>
        <Row>
          {
            charters.length && charters.map((charter, index) => {
              return <Col key={index} ><CharterCart charter={charter} /></Col>
            })
          }
        </Row>
      </Container>
      <Container style={{padding: '20px', textAlign: 'center'}}>
        <Row>
          <Col>
            <Pagination style={{justifyContent: 'center'}} >
              <Pagination.Item onClick={() => handlePagination(currentPage+1)} > Load more </Pagination.Item>
            </Pagination>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Charters