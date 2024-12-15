import { useState } from "react";

export default function Popup() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setShowPopup(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Open Pop-Up
      </button>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm">
            <h2 className="text-lg font-bold mb-4">This is a Pop-Up!</h2>
            <p className="mb-4">You can add any content here.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
