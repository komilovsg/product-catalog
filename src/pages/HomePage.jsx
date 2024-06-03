import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import Filter from '../components/Filter';
import Pagination from '../components/Pagination';

const HomePage = () => {
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const handleFilter = (text) => {
    setSearchText(text);
    setCurrentPage(1); // Сброс на первую страницу при новой фильтрации
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='container mx-auto mt-11'>
      <Filter onFilter={handleFilter} />
      <ProductList
        searchText={searchText}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange} // Передаем handlePageChange
      />
    </div>
  );
};

export default HomePage;
