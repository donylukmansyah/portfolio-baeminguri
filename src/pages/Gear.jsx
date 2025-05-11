import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Gear() {
  const [category, setCategory] = useState('All');

  const gear = [
    { name: 'Sony A7III', type: 'Video' },
    { name: 'Rode NT1', type: 'Audio' },
    { name: 'Logitech MX Master 3', type: 'Computer' },
    // Tambahkan item lainnya
  ];

  const filteredGear = category === 'All' ? gear : gear.filter(item => item.type === category);

  return (
    <div className="max-w-3xl mx-auto px-4">
      <Navbar />
      <div className="text-center mt-10">
        <img src="/your-photo.jpg" alt="Profile" className="rounded-full w-32 mx-auto" />
        <h1 className="text-3xl font-bold mt-4">Your Name</h1>
        <p className="text-gray-500 mb-4">A list of gear I use for creating content.</p>

        <div className="flex justify-center gap-2 mb-6">
          {['All', 'Video', 'Audio', 'Computer'].map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full ${category === cat ? 'bg-black text-white' : 'bg-gray-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <ul className="text-left">
          {filteredGear.map((item, index) => (
            <li key={index} className="mb-2">• {item.name}</li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}
