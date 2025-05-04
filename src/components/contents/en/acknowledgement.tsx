// filepath: /Users/taichi/OSS/mh-api-landingpage/src/components/contents/en/acknowledgement.tsx
export default function Acknowledgement() {
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          Acknowledgements
        </h2>

        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 space-y-6 text-sm sm:text-base border border-gray-100">
          <p className="leading-relaxed">
            This project exists thanks to
            <strong className="text-blue-600">
              {" "}
              open source contributors{" "}
            </strong>
            and <strong className="text-blue-600">MH-API users</strong>. We
            express our gratitude to many people.
          </p>

          <hr className="border-gray-200" />

          <p className="leading-relaxed">
            This project uses
            <strong className="text-blue-600"> Monster Hunter Series™ </strong>
            which is a trademark and registered trademark of Capcom Co., Ltd.
            The Monster Hunter Series™ is the intellectual property of Capcom
            Co., Ltd. We express our gratitude to Capcom.
          </p>

          <p className="italic text-gray-600 bg-gray-50 p-4 rounded-md border-l-4 border-gray-300 text-sm">
            This project is unofficial and not affiliated with Capcom Co., Ltd.
          </p>
        </div>
      </div>
    </section>
  );
}
