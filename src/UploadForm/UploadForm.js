import React, { useState } from "react";

const UploadForm = () => {
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault();
    console.log("Uploading file:", file);
  };

  return (
    <form onSubmit={handleUpload} className="p-4 max-w-md mx-auto border rounded shadow mt-10">
      <h2 className="text-xl font-semibold mb-4">Upload Prescription</h2>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="w-full mb-3"
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Upload
      </button>
    </form>
  );
};

export default UploadForm;
