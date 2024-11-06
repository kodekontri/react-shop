import React from "react";

function ProductListSkelenton() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {/* Loading skeleton for product cards */}
      {[...Array(4)].map((_, index) => (
        <div key={index} className="group relative animate-pulse">
          <div className="aspect-h-1 aspect-w-1 w-full h-[300px] overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80" />

          <div className="mt-4 flex justify-between">
            <div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2 mt-2"></div>
            </div>
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductListSkelenton;
