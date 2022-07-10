import React, { useContext } from 'react'
import { UsersContext } from '../../context/UsersContext';

export const Pagination = () => {
  const {pagination,setPagination,users} = useContext(UsersContext);

  return (
    <div className="gestor__content-pagination">
        <span className="gestor__pagination">
          {pagination} de {users.total_pages}
        </span>
        {users.total_pages === pagination ? (
          <button
            onClick={() => setPagination(pagination - 1)}
            className="gestor__btn-pag"
          >
            Previous
          </button>
        ) : (
          <button
            onClick={() => setPagination(pagination + 1)}
            className="gestor__btn-pag"
          >
            Next
          </button>
        )}
      </div>
  )
}
