export default function Changelog() {
  return (
    <main className="flex-grow flex justify-center bg-gray-50 py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 border-b-4 border-red-600 pb-4">
          Changelog
        </h1>

        <div className="space-y-10">
          {/* 2024 Updates */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-600">2024</h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">v1.2.1</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                    June 4, 2024
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-800">New Features</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Added BGM search functionality</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">v1.2.0</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                    April 14, 2024
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-800">Beta Release</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Implemented monster search (multiple results)</li>
                      <li>Implemented monster search (single result)</li>
                      <li>Added monster popularity ranking search</li>
                      <li>Added DB health check functionality</li>
                      <li>
                        Code refactoring and directory structure optimization
                      </li>
                      <li>API specification organization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2023 Updates */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-600">2023</h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">v1.1.7</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                    November 11, 2023
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-800">Fixes</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Fixed issues with Terraform apply</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">v1.1.6</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                    November 11, 2023
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-800">Fixes</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Fixed API response issues</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">v1.1.3</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                    November 6, 2023
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-800">New Features</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Implemented Auth0 authentication</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Improvements</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Organized and improved API definitions</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">v1.1.2</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                    November 5, 2023
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-800">Improvements</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Infrastructure managed with Terraform</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">v1.1.1</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                    October 14, 2023
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-800">Improvements</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Implemented log/slog</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Fixes</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Fixed billing issues with Secret Manager</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">v1.1.0</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                    June 8, 2023
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-800">Release</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Published source code</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">v1.0.0</h3>
                  <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                    May 27, 2023
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Initial Release
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>First release of Monster Hunter API</li>
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
