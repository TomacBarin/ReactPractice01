// ProfileCard.jsx – uppdaterad version (välj den här eller behåll din gamla)
function ProfileCard({ 
  name, 
  title, 
  description = "Ingen beskrivning ännu...",   // ← Default här!
  imageUrl = "https://via.placeholder.com/120?text=No+Image" 
}) {
  return (
    <div style={{
      border: "2px solid #61dafb",
      borderRadius: "10px",
      padding: "20px",
      margin: '20px auto',
      width: '320px',
      backgroundColor: '#1e1e2e',
      color: 'white'
    }}>
      <img 
        src={imageUrl} 
        alt={name}
        style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover' }}
      />
      <h2>{name}</h2>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default ProfileCard