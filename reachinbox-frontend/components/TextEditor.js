import React from 'react';

export default function TextEditor() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <div className="flex justify-between mb-4">
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg">SAVE</button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded-lg">Variables</button>
      </div>
      <textarea
        className="w-full h-64 p-4 border border-gray-300 rounded-lg"
        placeholder="Write something..."
      />
    </div>
  );
}
