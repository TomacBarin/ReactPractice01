import './App.css';
import ProfileCard from './Components/ProfileCard.jsx';
import ProductList from './Components/ProductList.jsx';
import Card from './Components/Card.jsx';
import Navigation from './Components/Navigation.jsx';

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
    { label: "Hem", url: "/" },
    { label: "Produkter", url: "/produkter" },
    { label: "Profil", url: "/profil" },
    { label: "Kontakt", url: "/kontakt" },
  ];

  return (
    <div className="App">

      <Navigation 
        links={navLinks} 
        activeUrl="/"   // ← Byt till "/produkter", "/profil" etc för att testa aktiv stil
      />

      <h1 style={{ color: 'hotpink' }}>React-tjosan!</h1>
      
      <p>Detta är en cykelvante:</p>
      <img 
        src="data:image/jpeg;base64,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...(truncated 4677 characters)...IkXeARFxz6DH3010UabLqBgjgkkeFeJCnl2/u9TS/wCyNaeeGC2jiA4GP3jf0/Iexphp895Cux5Y0kJw8apnA7CsombLHZXsslukmmwIGEhj2z+Tgdxj27VmvTtd6ZNBfYliGQGAA28Dn/Pegvt1pbqzXEjSHG7Yo6D/ADFIPiC41LUhtjU2tnnIVRljx3NUqidj74fvza28SWjrBAhGcLuDDuD6VYpLu4+xEzWUc82R5YyNpH+7n9K5xo1pqumRA7vFi3ElX6fTNXXT9ZtyytPE0cmzoCcH1FarNdEmoRpcPEJtIEsEi4Z1HQ+mPSgrK30eB2W2+12UobHkRlz/AFp3HKt1AY4nlUHlZA2en6VNbRxnCyztKQdwU4z9xpXAKkSxHbGzLdyYK+XxU5/OkUdnfCV3lKXEfXGNrY/z3p6bjeSIW3IBjwpOv96hFxGx2jMeOq4OB93UfdRxszliL0mgY7GV0x3A6fUUSIQ3/icMO3aiGtreQr4u6Mk4Dryp+8VKLUwoDIqsCOHHeqpJEW2yCO29Rz3qQoq9RXrOF+R8f8uKgkmdTyv5ZphGcPJgs0Xwgk9wOsuAUQ+3Zj7nj61NGDGhvLrxJbi48kC9Xb1bJ6dhn+lQ20DKPFkQFD8idm9SfQD86cyCKCTcV3ziMLljwo9T7ZOAByelckezrkDw20ccSC9wxbIS3jGA3qFH+0dz0J6mvZrtVxygyMhF+QKP1UfcvsaDnu1MkyLy7DMjMR5QOmf/AMjge56L2nErNxIUzk5Pmlb1P+cU7kkKotjL/WXbf4DmNOj3DZ3N7L3x9PyraC5MhEyZRQdqufmb2UdvrS0xRjzXRV3x5UXov1/pU8Je3xK5DzyDEYPSJfp7/lz1pLKJDg3clswKOPE69eB/Ufr9KP0q+jmDJdTcsOXJwKqDzOkp3Bj3+aiLa6jIAk4I6AGhm0HFenRrdrEIqLJGxPA559v503fTo51Ubl4Ofl61ziGaMOCWbPbBp9pt7IuA0smfQmm+deg+F+F9tNPi2+FIFIxwM8GiDp9lbEpKsaxt/C351UDqt1FxAXzQV5c6hcyK1xK7Ht7erb54A+GZcrm+soVWPTthcsCSnSoUgEYD+IQQSVPcVXrJ5PEzKpPv6048R2IGcgCoz5rZaPDSCJJUmHBCyj/7e/1ocXa52y5JU/Rh9D/Kgb6RoPPyPTBoMXX2k7lG1hwQK7ePuJw8nUiypcFF3xNlT+B9vaiIb4qP3J2HujHg0jtN45yR6/SjlZGXcOGHX3qlE7GDNDcHAPgyHsen9qFkjljOHyvuDwaGM+5NjdR0PeirSZwmGYH29KGgHIrI+K6K4BUDdj1x0H04rfXC0XiFGIZpsFu/IPP17VlZXKzrEMjbYkUYAYBm9zmtFJ6g4OO1ZWVNlETWaiVwrjgsBUshP2x88gE4H04FZWUGPEMjjSRMMooS8to1l8oI4rKyk9HZvakh+vQcVZ9OlbYpOCR61lZQkGBZoJMxbiq5x6VHHMznJC/hWVlKhg2NRJ8wH3UXEAF4rKylkMgPWUBtc0n0oYbd3rKyvT4Pyjy+b9sbSysgIXpivEkYBTmsrKsySC7dtz5YA5pvDEjDlRWVlKE//9k=" 
        alt="Smug cat" 
      />

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
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

      <h2 style={{ color: '#61dafb', textAlign: 'center', marginTop: '40px' }}>Produkter i lager</h2>
      <ProductList products={products} />

      {/* Här lägger vi till Card-exemplen – efter produktlistan */}
      <h2 style={{ color: '#61dafb', textAlign: 'center', margin: '60px 0 20px' }}>
        Komponentkomposition – Card-exempel
      </h2>

      <Card title="Användarprofil">
        <p>Exempeltext...</p>
        <p>P-tagg med exempeltext.</p>
        <img 
          src="https://via.placeholder.com/300x100?text=Profilbild" 
          alt="Profil" 
          style={{ width: '100%', borderRadius: '8px', marginTop: '10px' }} 
        />
      </Card>

      <Card title="Viktig info">
        <ul>
          <li>Ipsum tjosum.</li>
          <li>Keys och så</li>
          <li>haom.</li>
        </ul>
      </Card>

      <Card>
        {/* Utan title – bara children */}
        <p>Det här kortet har ingen titel</p>
      </Card>
      <Card>
        {/* Utan title – bara children */}
        <p>Inte det här heller</p>
      </Card>
    </div>
  );
}

export default App;