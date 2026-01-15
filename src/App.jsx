import './App.css';
import ProfileCard from './Components/ProfileCard';
import ProductList from './Components/ProductList';
import Card from './Components/Card';
import Navigation from './Components/Navigation';

function App() {
  const products = [
    { id: 1, name: 'Gaming Laptop', price: 14995, category: 'Elektronik', inStock: true },
    { id: 2, name: 'React-bok (begagnad)', price: 199, category: 'Böcker', inStock: false },
    { id: 3, name: 'Kaffekopp med React-logo', price: 79, category: 'Merch', inStock: true },
    { id: 4, name: 'Extra batteri', price: 149, category: 'Tillbehör', inStock: false },
    { id: 5, name: 'Vantar', price: 499, category: 'Tillbehör', inStock: true },
    { id: 6, name: 'Röd cykel', price: 129, category: 'Tillbehör', inStock: false }
  ];

  const navLinks = [
    { label: 'Hem', url: '/' },
    { label: 'Produkter', url: '/produkter' },
    { label: 'Profil', url: '/profil' },
    { label: 'Kontakt', url: '/kontakt' }
  ];

  return (
    <div className="App">
      {/* Navigation högst upp */}
      <Navigation links={navLinks} activeUrl="/" />

      {/* Huvudinnehåll */}
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        display: 'flex',
        flexDirection: 'row',
        gap: '40px',
        flexWrap: 'wrap'  // Gör responsiv på mindre skärmar
      }}>
        {/* Vänster/huvudsektion */}
        <section style={{ flex: '3', minWidth: '300px' }}>
          <h1 style={{ color: 'hotpink', textAlign: 'center' }}>React-tjosan!</h1>

          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <p>Detta är en cykelvante:</p>
            <img 
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/... (din base64-bild här)" 
              alt="Smug cat" 
              style={{ maxWidth: '400px', borderRadius: '12px' }}
            />
          </div>

          <h2 style={{ color: '#61dafb', textAlign: 'center' }}>Teamet</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
            <ProfileCard 
              name="Tomac Barin" 
              title="Fullstack-tjosan!" 
              description="Min katt heter Mittens." 
              imageUrl="https://via.placeholder.com/120?text=Tomac" 
            />
            <ProfileCard 
              name="Anna K" 
              title="Frontend-tjosan!" 
              description="Min mitt heter Kattens." 
            />
            <ProfileCard 
              name="Harald Hansson" 
              title="Fängelsedirektör" 
              description="Den första gång jag såg dig." 
            />
            <ProfileCard 
              name="Hasse Alfresson" 
              title="Biljettförsäljare på Skansen" 
              description="...det var en sommardag." 
            />
          </div>

          <h2 style={{ color: '#61dafb', textAlign: 'center', margin: '60px 0 30px' }}>
            Produkter i lager
          </h2>
          <ProductList products={products} />
        </section>

        {/* Höger sidopanel */}
        <aside style={{ flex: '1', minWidth: '300px' }}>
          <h2 style={{ color: '#61dafb', textAlign: 'center' }}>Sidopanel</h2>
          
          <Card title="Välkommen till Göteborg!">
            <p>Det här är vecka 1</p>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem, ipsum.</li>
            </ul>
          </Card>

          <Card title="Nästa steg">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti impedit iure vitae fugiat nihil tempora?</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>

          {/* <WarningCard title="Kom ihåg">
            <p>Committa och pusha ofta!</p>
            <p>Github är din vän 💪</p>
          </WarningCard> */}
        </aside>
      </main>
    </div>
  );
}

export default App;