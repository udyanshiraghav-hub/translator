function LanguageSelector({ language, setLanguage }) {
  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="w-full border rounded-lg p-3 mt-4"
    >
      <option value="hi">Hindi</option>
      <option value="fr">French</option>
      <option value="es">Spanish</option>
      <option value="de">German</option>
      <option value="ja">Japanese</option>
    </select>
  );
}

export default LanguageSelector;