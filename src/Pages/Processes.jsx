const Processes = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Aluminium Casting Processes</h1>

        {/* Introduction */}
        <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            At Alpac Alloys, we specialize in two primary aluminium casting processes, each offering unique
            advantages for different applications and production requirements.
          </p>
        </div>

        {/* Sand Casting */}
        <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Sand Casting</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Process Overview</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Sand casting is a versatile and cost-effective process ideal for prototypes and
                low to medium volume production. We create moulds using specially formulated sand
                mixtures that can accommodate complex geometries and large castings.
              </p>
              <h4 className="font-semibold text-gray-800 mb-2">Key Benefits:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Low tooling costs for prototypes and short runs
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Complex geometries and internal features possible
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Large castings up to 500kg
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Quick turnaround for design changes
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Specifications</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Weight Range:</strong><br />
                    0.5kg - 500kg
                  </div>
                  <div>
                    <strong>Tolerance:</strong><br />
                    ±2-3mm typical
                  </div>
                  <div>
                    <strong>Surface Finish:</strong><br />
                    Ra 12.5-25 μm
                  </div>
                  <div>
                    <strong>Lead Time:</strong><br />
                    2-4 weeks
                  </div>
                </div>
              </div>
              <h4 className="font-semibold text-gray-800 mt-6 mb-2">Ideal Applications:</h4>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>• Prototypes and development parts</li>
                <li>• Large structural components</li>
                <li>• Complex internal passages</li>
                <li>• One-off or low volume parts</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Gravity Die Casting */}
        <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Gravity Die Casting</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Process Overview</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Gravity die casting uses permanent steel moulds to produce high-quality castings
                with excellent surface finish and dimensional accuracy. This process is ideal for
                medium to high volume production runs.
              </p>
              <h4 className="font-semibold text-gray-800 mb-2">Key Benefits:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Superior surface finish and dimensional accuracy
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Consistent part quality and repeatability
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Reduced machining requirements
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Cost-effective for volume production
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Specifications</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Weight Range:</strong><br />
                    0.1kg - 50kg
                  </div>
                  <div>
                    <strong>Tolerance:</strong><br />
                    ±0.5-1.5mm typical
                  </div>
                  <div>
                    <strong>Surface Finish:</strong><br />
                    Ra 3.2-6.3 μm
                  </div>
                  <div>
                    <strong>Lead Time:</strong><br />
                    4-8 weeks (tooling)
                  </div>
                </div>
              </div>
              <h4 className="font-semibold text-gray-800 mt-6 mb-2">Ideal Applications:</h4>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>• High volume production parts</li>
                <li>• Precision components</li>
                <li>• Parts requiring minimal machining</li>
                <li>• Automotive and aerospace components</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Process Comparison */}
        <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Process Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left">Criteria</th>
                  <th className="border border-gray-300 p-3 text-left">Sand Casting</th>
                  <th className="border border-gray-300 p-3 text-left">Gravity Die Casting</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Tooling Cost</td>
                  <td className="border border-gray-300 p-3">Low</td>
                  <td className="border border-gray-300 p-3">Medium-High</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">Part Cost (Volume)</td>
                  <td className="border border-gray-300 p-3">Higher per part</td>
                  <td className="border border-gray-300 p-3">Lower per part</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Surface Finish</td>
                  <td className="border border-gray-300 p-3">Good</td>
                  <td className="border border-gray-300 p-3">Excellent</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">Dimensional Accuracy</td>
                  <td className="border border-gray-300 p-3">±2-3mm</td>
                  <td className="border border-gray-300 p-3">±0.5-1.5mm</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Complexity</td>
                  <td className="border border-gray-300 p-3">High</td>
                  <td className="border border-gray-300 p-3">Medium</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">Volume Suitability</td>
                  <td className="border border-gray-300 p-3">1-1000 parts</td>
                  <td className="border border-gray-300 p-3">500+ parts</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Design Guidelines */}
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Design Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">General Design Rules</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <strong>Wall Thickness:</strong> Maintain uniform thickness where possible (3-25mm typical)
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <strong>Draft Angles:</strong> Include 1-3° draft for easy pattern removal
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <strong>Fillets:</strong> Use generous radii (R3mm minimum) at all corners
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <strong>Undercuts:</strong> Minimize or eliminate where possible
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">CAD File Requirements</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <strong>Formats:</strong> STEP, IGES, DWG, native CAD files
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <strong>Detail:</strong> Include all critical dimensions and tolerances
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <strong>Material:</strong> Specify aluminium alloy requirements
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <strong>Finishing:</strong> Note any special surface treatments needed
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Processes
