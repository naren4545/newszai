import { useState } from "react";

export default function NewsEditor() {
  const [text, setText] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="w-full max-w-xl mx-auto border border-gray-300 rounded-md shadow-lg p-4 bg-white">
      <textarea
        value={text}
        name="content"
        onChange={handleInputChange}
        placeholder="Add the main body of the news article. Ensure accuracy and readability for your audience..."
        rows={10}
        className="w-full resize-none p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
      />
      <div className="flex items-center justify-between mt-3">
        <div className="flex space-x-2">
          <button type="button" className="p-2 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200">
            <b>B</b>
          </button>
          <button  type="button" className="p-2 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200">
            <i>I</i>
          </button>
          <button   type="button" className="p-2 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200">
            <u>U</u>
          </button>
          <button  type="button" className="p-2 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200">
            🔗
          </button>
          <button  type="button" className="p-2 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200">
            ↔
          </button>
        </div>
        <p
          className={`text-sm ${
            text.length < 800 || text.length > 1200 ? "text-red-500" : "text-green-500"
          }`}
        >
          {`Characters: ${text.length} (Required: 800–1200)`}
        </p>
      </div>
    </div>
  );
}
