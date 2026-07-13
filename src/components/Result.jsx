function Result({ translatedText }) {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-2">
        Translation
      </h3>

      <div className="border rounded-lg p-4 bg-gray-50 min-h-[100px]">
        {translatedText || "Result will appear here..."}
      </div>
    </div>
  );
}

export default Result;