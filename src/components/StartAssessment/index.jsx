import "./index.css";

function StartAssessment() {
  return (
    <section id="start-assessment" className="container py-16">
      <h1 className="text-center text-4xl font-bold mb-4">
        Understand Your Smartphone Habits
      </h1>
      <p className="text-center text-lg max-w-3xl mx-auto mb-12">
        Take our comprehensive assessment to gain insights into your digital behavior and discover personalized strategies for a healthier relationship with technology.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Left: Assessment Form */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold mb-4">
            Smartphone Usage Assessment
          </h3>
          <p className="mb-4 text-gray-500">Step 1 of 4</p>

          <form className="space-y-4">
            <div>
              <label className="block font-medium mb-1">
                What is your occupation?
              </label>
              <select className="w-full p-2 border rounded-md">
                <option>Select your occupation</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">
                How many hours do you spend on your smartphone daily?
              </label>
              <select className="w-full p-2 border rounded-md">
                <option>Select hours</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">
                What is the primary purpose of your smartphone usage?
              </label>
              <select className="w-full p-2 border rounded-md">
                <option>Select purpose</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">
                Which apps do you use the most?
              </label>
              <select className="w-full p-2 border rounded-md">
                <option>Select apps</option>
              </select>
            </div>

            <button
              type="submit"
              className="mt-4 bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700"
            >
              Next
            </button>
          </form>
        </div>

        {/* Right: Why Take This Assessment */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-md">
          <h4 className="text-xl font-semibold mb-3">
            Why Take This Assessment?
          </h4>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Gain insights into your smartphone usage patterns</li>
            <li>Identify potential signs of smartphone addiction</li>
            <li>Receive personalized recommendations</li>
            <li>Develop healthier digital habits</li>
          </ul>
        </div>

      </div>
    </section>

  );
}

export default StartAssessment;
