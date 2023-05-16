import { v4 as uuidv4 } from "uuid";

export default function PaginationLinks({ meta, onPageClick }) {
  function onClick(ev, link) {
    ev.preventDefault();

    if (!link.url) return;
    onPageClick(link);
  }
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 shadow-md mt-4">
      {/* =======for mobile===== */}
      <div className="flex flex-1 justify-between sm:hidden items-center">
        <a
          href="#"
          onClick={(ev) => { onClick(ev, meta.links[0]) }}
          className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50`}
        >
          Previous
        </a>
        <div>
          <p className="text-sm text-gray-700">
            Showing page <span className="font-medium">{meta.current_page}</span> of{' '}
            <span className="font-medium">{meta.last_page}</span>
          </p>
        </div>
        <a
          href="#"
          onClick={(ev) => { onClick(ev, meta.links[meta.links.length - 1]) }}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>

      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{meta.from}</span> to <span className="font-medium">{meta.to}</span> of{' '}
            <span className="font-medium">{meta.total}</span> results
          </p>
        </div>
        <div>
          {meta.total > meta.per_page &&
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">

              {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
              {meta.links && meta.links.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={(ev) => { onClick(ev, link) }}
                  aria-current="page"
                  className={`relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  
                ${index === 0 ? 'rounded-l-md ' : ' '}
                ${index === meta.links.length ? 'rounded-r-md ' : ' '}
                ${link.active ? 'bg-indigo-600 focus-visible:outline-indigo-600 text-white hover:bg-indigo-700' : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-100 '}
                ${!link.url ? 'disabled bg-gray-200 hover:bg-gray-200 cursor-default text-gray-600' : ''}
                `}
                  dangerouslySetInnerHTML={{ __html: link.label }}
                >
                </a>
              ))}

            </nav>
          }
        </div>
      </div>
    </div>
  )
}
