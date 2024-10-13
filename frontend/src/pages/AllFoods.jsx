import React, { useState, useMemo } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

import { Container, Row, Col } from "reactstrap";

import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";

import "../styles/all-foods.css";
import "../styles/pagination.css";

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [pageNumber, setPageNumber] = useState(0);

  // Corrected search and sort logic
  const searchedProduct = useMemo(() => {
    let filteredProducts = products.filter((item) => {
      // If searchTerm is empty, return all products
      if (searchTerm.trim() === "") return true;

      // Otherwise, return products with titles containing searchTerm
      return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    // Sorting logic based on sortOption
    switch (sortOption) {
      case "ascending":
        filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "descending":
        filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "high-price":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "low-price":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      default:
        // Default sorting (could be based on ID or any default logic)
        filteredProducts.sort((a, b) => a.id - b.id);
        break;
    }

    return filteredProducts;
  }, [searchTerm, sortOption]);

  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage);

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    setPageNumber(0); // Reset to the first page when sort option changes
  };

  return (
    <Helmet title="All-Foods">
      <CommonSection title="All Foods" />

      <section>
        <Container>
          <Row>
            {/* Search Bar */}
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between">
                <input type="text"
                  placeholder="I'm looking for...."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}>
                  </input>
                 
                <span onClick={() => console.log("Searching for: ", searchTerm)}>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>

            {/* Sort Dropdown */}
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="sorting__widget text-end">
                <select
                  className="w-50"
                  value={sortOption}
                  onChange={handleSortChange} // Handle sort changes
                >
                  <option value="default">Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>

            {/* Display Product Cards */}
            {displayPage.length === 0 ? (
              <Col>
                <h5>No products found.</h5>
              </Col>
            ) : (
              displayPage.map((item) => (
                <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                  <ProductCard item={item} />
                </Col>
              ))
            )}

            {/* Pagination */}
            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName="paginationBttns"
                activeClassName="active"
                disabledClassName="disabled"
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
