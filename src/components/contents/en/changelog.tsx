export default function Changelog() {
  return (
    <main className="flex-grow flex justify-center bg-gray-50 py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 border-b-4 border-red-600 pb-4">
          Changelog
        </h1>

        <div className="space-y-10">
          {/* 2025 Updates */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-600">2025</h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">v0.2.0</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                    May 1, 2025
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-800">New Features</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Added Weapons API</li>
                      <li>Added Armor API</li>
                      <li>Added Skills API</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Improvements</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Improved monster API response time by up to 30%</li>
                      <li>Enhanced documentation details</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Bug Fixes</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Fixed errors occurring with specific monster IDs</li>
                      <li>Fixed filtering issues</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">v0.1.1</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                    February 15, 2025
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-800">Improvements</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Added more monster data (over 100 species total)</li>
                      <li>Implemented API response caching</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Bug Fixes</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Fixed rate limiting issues</li>
                      <li>Fixed search filter problems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2024 Updates */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-600">2024</h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">v0.1.0</h3>
                  <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                    December 1, 2024
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Initial Release
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Released Monster data API</li>
                      <li>Implemented basic search functionality</li>
                      <li>Launched official documentation site</li>
                      <li>Basic API authentication</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Note */}
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 text-sm text-gray-700">
            <p className="font-medium mb-1">Note:</p>
            <p>
              This page records major version updates and changes to the Monster
              Hunter API.
            </p>
            <p>
              For detailed change history, please visit our{" "}
              <a
                href="https://github.com/o-ga09/MH-API"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>{" "}
              repository.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
