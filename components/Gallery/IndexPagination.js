import React from 'react';
import { useRouter } from "next/router";
import { Pagination } from 'semantic-ui-react';

function IndexPagination({ indexPage, setIndexPage, totalPages }) {
  const router = useRouter();

  function handlePageChange(event, data) {
    setIndexPage(data.activePage);
  }

  return (
    <Pagination
      className="pagination"
      defaultActivePage={1}
      ellipsisItem={null}
      firstItem={null}
      lastItem={null}
      siblingRange={2}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  );
}


export default IndexPagination;
