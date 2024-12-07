export default function FeaturesSection() {
    return (
      <section className="bg-[#EBEBEB] py-12 px-4 md:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold font-an text-center mb-3">Why Choose NewsZai?</h2>
       
       <p className="text-center text-[28px] mb-3 pb-8">commitment to timely news, diverse coverage, and state-of-the-art 
       video news integration.</p>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-2xl transition-all duration-300 ease-in-out">
            <div className="w-12 h-12 bg-black rounded-lg mb-4"></div>
            <h3 className="text-xl font-bold mb-3">Trusted, Real-Time Updates</h3>
            <p className="text-gray-600">
              Stay informed with reliable, up-to-the-minute news covering local events and national stories. NewsZai ensures you're always in the know.
            </p>
          </div>
  
          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-2xl transition-all duration-300 ease-in-out">
            <div className="w-12 h-12 bg-black rounded-lg mb-4"></div>
            <h3 className="text-xl font-bold mb-3">Seamless Video and Text News</h3>
            <p className="text-gray-600">
              From live video updates to in-depth articles, explore news in multiple formats for a rich and engaging experience.
            </p>
          </div>
  
          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-2xl transition-all duration-300 ease-in-out">
            <div className="w-12 h-12 bg-black rounded-lg mb-4"></div>
            <h3 className="text-xl font-bold mb-3">Local and National Editions</h3>
            <p className="text-gray-600">
              Get tailored news for your region or dive into national headlines. NewsZai delivers the latest stories that matter most to you.
            </p>
          </div>
  
          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-2xl transition-all duration-300 ease-in-out">
            <div className="w-12 h-12 bg-black rounded-lg mb-4"></div>
            <h3 className="text-xl font-bold mb-3">User-Friendly Interface</h3>
            <p className="text-gray-600">
              Intuitive design and simple navigation make it easy to find what you're looking for, with fast access to the latest updates
            </p>
          </div>
        </div>
      </section>
    )
  }
  
  