function Navigation({ links, activeUrl }) {
  return (
    <nav style={{
      backgroundColor: '#282c34',
      padding: '15px',
      marginBottom: '30px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.5)'
    }}>
      <ul style={{
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        margin: 0,
        padding: 0
      }}>
        {links.map(link => (
          <li key={link.url}>
            <a
              href={link.url}  // ← Vanlig <a> eftersom ingen riktig routing än
              style={{
                color: link.url === activeUrl ? '#61dafb' : 'white',
                textDecoration: link.url === activeUrl ? 'underline' : 'none',
                fontWeight: link.url === activeUrl ? 'bold' : 'normal',
                fontSize: '1.1rem',
                transition: 'color 0.3s'
              }}
              onClick={(e) => {
                // Förhindra page reload i demo (tar bort senare med router)
                e.preventDefault();
                alert(`Navigerar till: ${link.label} (${link.url})`);
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;