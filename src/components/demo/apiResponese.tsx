export default function ApiResponse() {
  return (
    <div className="bg-gray-900 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
      <pre>
        {`• abilities: [] 2 items
    • 0: {} 3 keys
      • ability: {} 2 keys
        name: "limber"
        url: "https://mh-api.com/v1/v2/ability/7/"
      is_hidden: false
      slot: 1
    • 1: {} 3 keys
      • ability: {} 2 keys
        name: "imposter"
        url: "https://mh-api.com/v1/v2/ability/150/"
      is_hidden: true
      slot: 3
    base_experience: 101
  • cries: {} 2 keys
    latest: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/132.ogg"`}
      </pre>
    </div>
  );
}
