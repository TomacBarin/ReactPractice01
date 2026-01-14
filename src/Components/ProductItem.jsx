function ProductItem({ product }) {
    return (
        <div style={{
            border: '1px solid #61dafb',
            borderRadius: '8px',
            padding: '15px',
            margin: '10px',
            width: '280px',
            backgroundColor: '#1e1e2e',
            color: 'white',
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
        }}>
            <h3>{product.name}</h3>
            <p><strong>Pris:</strong> {product.price}</p>
            <p><strong>Kategori:</strong> {product.category} </p>

            {/* Villkorlig rendering – exempel */}
            {product.price < 300 && (
                <span style={{ color: 'lime', fontWeight: 'bold' }}>Specialerbjudande!</span>
            )}

            {!product.inStock && (
                <span style={{ color: 'red', fontWeight: 'bold' }}>Slut i lager!</span>
            )}
        </div>
    )
}

export default ProductItem;