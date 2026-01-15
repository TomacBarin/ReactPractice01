function Card({ title, children }) {
    return (
        <div style={{
        border: '2px solid #61dafb',
        borderRadius: '12px',
        padding: '20px',
        margin: '20px auto',
        maxWidth: '500px',
        backgroundColor: '#1e1e2e',
        color: 'white',
        boxShadow: '0 4px 12px rgba(0,0,0,0.4)'
        }}>
        {title && <h2 style={{ marginTop: 0, color: '#61dafb' }}>{title}</h2>}
        <div>{children}</div>
        </div>
    );
}

export default Card;