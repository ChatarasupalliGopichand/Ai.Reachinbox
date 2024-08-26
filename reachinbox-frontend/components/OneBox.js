import { useEffect, useState } from 'react';
import axios from 'axios';

export default function OneBox() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get('/api/onebox/list')
      .then(response => setItems(response.data))
      .catch(error => console.error('Error fetching data:', error));

    // Add keyboard shortcut event listeners
    const handleKeyDown = (event) => {
      if (event.key === 'd') {
        // Delete the selected item
        console.log('Delete item');
      } else if (event.key === 'r') {
        // Open the reply box
        console.log('Reply to item');
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">OneBox</h2>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.id} className="p-4 bg-gray-100 rounded-lg shadow">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
