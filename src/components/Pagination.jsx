import React from 'react'

function Pagination() {
  return (
    <div>
      <nav style={{ marginBottom: '50px', marginTop: '50px',display: 'flex', justifyContent: 'center'  }} aria-label="Page navigation example">
        <ul className="pagination">
            <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
            </a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
            </a>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination
