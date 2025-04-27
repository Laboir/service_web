import React from "react";

async function ProductID({ params }) {
  const productId = await params.id;

  return <div>This is page of {productId}</div>;
}

export default ProductID;
