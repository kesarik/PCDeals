import React from 'react';
import './categorysec.css';

const categories = [
    { name: 'Desktop', image: require('../assets/desktop.jpeg') },
    { name: 'iBall', image: require('../assets/iball.png') },
    { name: 'Pen drives', image: require('../assets/pendrive.jpeg') },
    { name: 'KB Mouse', image: require('../assets/KB_mouse.jpeg') },  
    { name: 'Convertor', image: require('../assets/convertor.jpeg') },
    { name: 'Headphones', image: require('../assets/headphones.jpeg') },
    { name: 'Speakers', image: require('../assets/speaker.jpeg') },
    { name: 'Projectors', image: require('../assets/projector.jpeg') },
    { name: 'Bar Code Scanners', image: require('../assets/barcode_scanner.jpeg') },
    { name: 'SSD', image: require('../assets/ssd.jpeg') },
    { name: 'Processor', image: require('../assets/processor.jpeg') },
    { name: 'Mother Board', image: require('../assets/motherboard.jpeg') },
    { name: 'CCTV', image: require('../assets/cctv.jpeg') },
  ];
  
  const CategorySection = () => {
    return (
      <section className="category-section">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
          </div>
        ))}
      </section>
    );
  };
  
  export default CategorySection;