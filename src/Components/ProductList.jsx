import ProductItem from "./ProductItem.jsx";

function ProductList({ products }) {
    if (products.length === 0) {
        return <p style={{ color: 'orange', textAlign: 'center' }}>Inga produkter att visa just nu...</p>;
    }

        return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px',
      margin: '20px 0'
    }}>
      {products.map(product => (
        <ProductItem 
          key={product.id}          // ← VIKTIGT! key måste vara unik
          product={product} 
        />
      ))}
    </div>
  );

}

export default ProductList;