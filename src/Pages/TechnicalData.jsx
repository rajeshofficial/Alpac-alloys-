const TechnicalData = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Technical Data & Specifications</h1>

        {/* Introduction */}
        <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
          <p className="text-gray-600 text-lg leading-relaxed">
            Our technical specifications ensure consistent quality and performance across all casting processes.
            Use this data to optimize your designs for aluminum casting and achieve the best results.
          </p>
        </div>



        {/* Dimensional Tolerances */}
        <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Dimensional Tolerances</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Sand Casting Tolerances</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-medium">Linear dimensions:</span>
                    <span>±2.0 - 3.0mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Hole diameters:</span>
                    <span>+2.0 / -0.5mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Wall thickness:</span>
                    <span>±1.5 - 2.0mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Angular tolerance:</span>
                    <span>±1°</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Surface finish:</span>
                    <span>Ra 12.5 - 25μm</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Gravity Die Casting Tolerances</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-medium">Linear dimensions:</span>
                    <span>±0.5 - 1.5mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Hole diameters:</span>
                    <span>+1.0 / -0.2mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Wall thickness:</span>
                    <span>±0.5 - 1.0mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Angular tolerance:</span>
                    <span>±0.5°</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Surface finish:</span>
                    <span>Ra 3.2 - 6.3μm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Design Guidelines */}
        <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Design Guidelines & Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Wall Thickness Guidelines</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Minimum Wall Thickness</h4>
                  <ul className="text-gray-600 mt-2 space-y-1">
                    <li>• Sand casting: 3mm minimum</li>
                    <li>• Gravity die casting: 2.5mm minimum</li>
                    <li>• Large castings (&gt;100kg): 5mm minimum</li>
                  </ul>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Recommended Thickness</h4>
                  <ul className="text-gray-600 mt-2 space-y-1">
                    <li>• Structural components: 6-12mm</li>
                    <li>• Housing/enclosures: 4-8mm</li>
                    <li>• Decorative parts: 3-6mm</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Geometric Features</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Fillets & Radii</h4>
                  <ul className="text-gray-600 mt-2 space-y-1">
                    <li>• Internal corners: R3mm minimum</li>
                    <li>• External corners: R1mm minimum</li>
                    <li>• Large sections: R5-10mm recommended</li>
                  </ul>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Draft Angles</h4>
                  <ul className="text-gray-600 mt-2 space-y-1">
                    <li>• Sand casting: 1-3° typical</li>
                    <li>• Gravity die: 0.5-2° typical</li>
                    <li>• Deep features: up to 5°</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Machining Allowances */}
        <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Machining Allowances</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left">Feature Type</th>
                  <th className="border border-gray-300 p-3 text-left">Sand Casting</th>
                  <th className="border border-gray-300 p-3 text-left">Gravity Die Casting</th>
                  <th className="border border-gray-300 p-3 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">External surfaces</td>
                  <td className="border border-gray-300 p-3">2-4mm</td>
                  <td className="border border-gray-300 p-3">1-2mm</td>
                  <td className="border border-gray-300 p-3">Per side</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">Bore holes</td>
                  <td className="border border-gray-300 p-3">3-5mm</td>
                  <td className="border border-gray-300 p-3">1-3mm</td>
                  <td className="border border-gray-300 p-3">On diameter</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Mounting faces</td>
                  <td className="border border-gray-300 p-3">3-6mm</td>
                  <td className="border border-gray-300 p-3">2-3mm</td>
                  <td className="border border-gray-300 p-3">Critical surfaces</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">Thread features</td>
                  <td className="border border-gray-300 p-3">4-6mm</td>
                  <td className="border border-gray-300 p-3">2-4mm</td>
                  <td className="border border-gray-300 p-3">On diameter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>



        

        {/* Heat Treatment Options */}
        <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Heat Treatment Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">T6 Treatment</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Solution heat treated</li>
                <li>• Artificially aged</li>
                <li>• Maximum strength</li>
                <li>• Typical for A356/LM25</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">T4 Treatment</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Solution heat treated</li>
                <li>• Naturally aged</li>
                <li>• Good ductility</li>
                <li>• Easier machining</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Stress Relief</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Reduces residual stress</li>
                <li>• Improves machinability</li>
                <li>• Prevents distortion</li>
                <li>• Required for precision parts</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quality Standards */}
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Quality Standards & Testing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Standards Compliance</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <strong>ISO 9001:2015</strong> - Quality Management Systems
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <strong>BS EN 1706</strong> - Aluminium and aluminium alloys
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <strong>ASTM B26</strong> - Standard specification for aluminum-alloy sand castings
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <strong>AS 1874</strong> - Aluminium alloy castings
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Testing Capabilities</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Dimensional inspection (CMM available)
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Material composition analysis
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Mechanical property testing
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Non-destructive testing (NDT)
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Pressure testing and leak detection
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Alloy Equivalents */}
<div className="bg-white p-8 rounded-lg shadow-sm mb-8 mt-6">
  <h2 className="text-2xl font-bold text-gray-800 mb-6">Alloy Equivalents</h2>
  <div className="overflow-x-auto">
    <table className="w-full border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          <th className="border p-2">UK</th>
          <th className="border p-2">ISO</th>
          <th className="border p-2">Germany</th>
          <th className="border p-2">France</th>
          <th className="border p-2">USA</th>
        </tr>
      </thead>
      <tbody> 
  {[
    ["LM0", "", "", "", ""],
    ["LM6", "AlSi12", "G-AlSi12 / DIN231", "AS13", "A413"],
    ["LM25", "AlSi7Mg", "G-AlSi8Mg", "", "A356.1"],
    ["LM27", "AlSi5Cu3", "", "", ""],
    ["LM13", "AlSi12Cu1(Fe)", "G-AlSi12Cu1(Fe)", "AC2A", "319.0"],
    ["LM16", "", "", "", ""],
    ["LM31", "AlSi5MgCr", "G-AlSi5MgCr", "", ""],
  ].map((row, i) => (
    <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : ""}>
      {row.map((cell, j) => (
        <td key={j} className="border p-2">{cell}</td>
      ))}
    </tr>
  ))}
</tbody>

    </table>
  </div>
</div>


{/* Element Composition */}
<div className="bg-white p-8 rounded-lg shadow-sm mb-8">
  <h2 className="text-2xl font-bold text-gray-800 mb-6">Element Composition (%)</h2>
  <div className="overflow-x-auto">
  <table className="w-full border border-gray-300 text-sm">
  <thead className="bg-gray-100">
    <tr>
      <th className="border p-2">Element</th>
      <th className="border p-2">LM4</th>
      <th className="border p-2">LM6</th>
      <th className="border p-2">LM25</th>
      <th className="border p-2">LM27</th>
      <th className="border p-2">LM0</th>
      <th className="border p-2">LM13</th>
      <th className="border p-2">LM31</th>
    </tr>
  </thead>
  <tbody>
    {[
      ["Copper (Cu)", "2.0 – 4.0", "0.1 max", "0.20 max", "1.5 – 2.5", "0.03", "0.7 – 1.5", "0.25"],
      ["Magnesium (Mg)", "0.2 max", "0.10 max", "0.20 – 0.6", "0.35 max", "0.03", "0.5", "0.5 – 0.75"],
      ["Silicon (Si)", "4.0 – 6.0", "10.0 – 13.0", "6.5 – 7.5", "6.0 – 8.0", "0.30", "10.0 – 13.0", "4.8 – 5.7"],
      ["Iron (Fe)", "0.8 max", "0.6 max", "0.5 max", "0.8 max", "0.40", "1.0 max", "0.1"],
      ["Manganese (Mn)", "0.2 – 0.6", "0.5 max", "0.3 max", "0.2 – 0.6", "0.03", "0.5 max", "0.1"],
      ["Nickel (Ni)", "0.3 max", "0.1 max", "0.1 max", "0.3 max", "0.03", "0.5", "-"],
      ["Zinc (Zn)", "0.5 max", "0.1 max", "0.1 max", "1.0 max", "0.07", "-", "4.8-5.7"],
      ["Lead (Pb)", "0.1 max", "0.1 max", "0.1 max", "0.2 max", "0.03", "-", "0.05"],
      ["Tin (Sn)", "0.1 max", "0.05 max", "0.05 max", "0.1 max", "0.03", "0.1 max", "0.05 max"],
      ["Titanium (Ti)", "0.2 max", "0.2 max", "0.2 max", "0.2 max", "-", "1.5 max", "0.1 max"],
      ["Chromium (Cr)", "-", "-", "-", "-", "-", "-", "0.4 – 0.6"],
      ["Aluminium (Al)", "Remainder", "Remainder", "Remainder", "Remainder", "Remainder", "Remainder", "Remainder"],
    ].map((row, i) => (
      <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : ""}>
        {row.map((cell, j) => (
          <td key={j} className="border p-2">{cell}</td>
        ))}
      </tr>
    ))}
  </tbody>
</table>

  </div>
</div>


{/* Aluminium Alloy LM4 Mechanical Properties */}
<div className="bg-white p-8 rounded-lg shadow-sm mb-8">
  <h2 className="text-2xl font-bold text-gray-800 mb-6">Aluminium Alloy LM4 Mechanical Properties</h2>
  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300 text-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left">Property</th>
          <th className="border border-gray-300 p-3 text-left">Sand Cast </th>
          <th className="border border-gray-300 p-3 text-left">Sand Cast </th>
          <th className="border border-gray-300 p-3 text-left">Gravity Die Cast</th>
          <th className="border border-gray-300 p-3 text-left">Gravity Die Cast</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td className="border border-gray-300 p-3 font-medium">Aluminium Alloy (Heat Treatment)</td>
          <td className="border border-gray-300 p-3">LM4M</td>
          <td className="border border-gray-300 p-3">LM4 TF</td>
          <td className="border border-gray-300 p-3">LM4 M</td>
          <td className="border border-gray-300 p-3">	LM4 TF</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3 font-medium">Tensile Strength (N/mm²)</td>
          <td className="border border-gray-300 p-3">140 - 170</td>
          <td className="border border-gray-300 p-3">230 - 290</td>
          <td className="border border-gray-300 p-3">160 - 220</td>
          <td className="border border-gray-300 p-3">280 - 370</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="border border-gray-300 p-3 font-medium">Elongation (%)</td>
          <td className="border border-gray-300 p-3">2 - 3</td>
          <td className="border border-gray-300 p-3">0 - 2</td>
          <td className="border border-gray-300 p-3">2 - 4</td>
          <td className="border border-gray-300 p-3">1 - 5</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3 font-medium">Brinell Hardness Number</td>
          <td className="border border-gray-300 p-3">65 - 80</td>
          <td className="border border-gray-300 p-3">90 - 120</td>
          <td className="border border-gray-300 p-3">70 - 90</td>
          <td className="border border-gray-300 p-3">90 - 120</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p className="mt-4 text-gray-700">
    LM4 is suitable for general engineering castings: gearboxes, junction boxes, clutch cases, switch gear covers, tool handles, crankcases and where the conditions of use require moderate mechanical properties.
  </p>
</div>

{/* Aluminium Alloys LM6 Mechanical Properties */}
<div className="bg-white p-8 rounded-lg shadow-sm mb-8">
  <h2 className="text-2xl font-bold text-gray-800 mb-6">Aluminium Alloy LM6 Mechanical Properties</h2>
  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300 text-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left">Property</th>
          <th className="border border-gray-300 p-3 text-left">Sand Cast </th>
          <th className="border border-gray-300 p-3 text-left">Gravity Die Cast</th>
        </tr>
      </thead>
      <tbody>

      <tr>
          <td className="border border-gray-300 p-3 font-medium">Aluminium Alloy (Heat Treatment) </td>
          <td className="border border-gray-300 p-3">	LM6 M</td>
          <td className="border border-gray-300 p-3">	LM6 M</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3 font-medium">Tensile Strength (N/mm²)</td>
          <td className="border border-gray-300 p-3">160 - 190</td>
          <td className="border border-gray-300 p-3">160 - 220</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="border border-gray-300 p-3 font-medium">Elongation (%)</td>
          <td className="border border-gray-300 p-3">5 - 10</td>
          <td className="border border-gray-300 p-3">7 - 15</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3 font-medium">Brinell Hardness Number</td>
          <td className="border border-gray-300 p-3">50 - 55</td>
          <td className="border border-gray-300 p-3">55 - 60</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p className="mt-4 text-gray-700">
    LM6 is used in many ‘marine castings’ water cooled manifolds and water jackets, motor vehicle and road transport fittings, intricate and thin section castings and for very large Aluminium castings, where the ease of casting is important. LM6 is very ductile and suitable for castings requiring flexibility without breaking.
  </p>
</div>

{/* Aluminium Alloy LM25 Sand Cast Mechanical Properties */}
<div className="bg-white p-8 rounded-lg shadow-sm mb-8">
  <h2 className="text-2xl font-bold text-gray-800 mb-6">Aluminium Alloy LM25 Sand Cast Mechanical Properties</h2>
  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300 text-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left">Property</th>
          <th className="border border-gray-300 p-3 text-left">Sand Cast</th>
          <th className="border border-gray-300 p-3 text-left">Sand Cast</th>
          <th className="border border-gray-300 p-3 text-left">Sand Cast</th>
          <th className="border border-gray-300 p-3 text-left">Sand Cast</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td className="border border-gray-300 p-3 font-medium">Aluminium Alloy (Heat Treatment)</td>
          <td className="border border-gray-300 p-3">LM25 M</td>
          <td className="border border-gray-300 p-3">LM25 TE</td>
          <td className="border border-gray-300 p-3">LM25 TB7</td>
          <td className="border border-gray-300 p-3">LM25 TF</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3 font-medium">Tensile Strength (N/mm²)</td>
          <td className="border border-gray-300 p-3">130 - 150</td>
          <td className="border border-gray-300 p-3">150 - 180</td>
          <td className="border border-gray-300 p-3">160</td>
          <td className="border border-gray-300 p-3">230 - 280</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="border border-gray-300 p-3 font-medium">Elongation (%)</td>
          <td className="border border-gray-300 p-3">2 - 3</td>
          <td className="border border-gray-300 p-3">1 - 2</td>
          <td className="border border-gray-300 p-3">2.5</td>
          <td className="border border-gray-300 p-3">0 - 2</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3 font-medium">Brinell Hardness Number</td>
          <td className="border border-gray-300 p-3">55 - 65</td>
          <td className="border border-gray-300 p-3">70 - 75</td>
          <td className="border border-gray-300 p-3">65 - 75</td>
          <td className="border border-gray-300 p-3">90 - 110</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

{/* Aluminium Alloy LM25 Gravity Die Cast Mechanical Properties */}
<div className="bg-white p-8 rounded-lg shadow-sm mb-8">
  <h2 className="text-2xl font-bold text-gray-800 mb-6">Aluminium Alloy LM25 Gravity Die Cast Mechanical Properties</h2>
  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300 text-sm">
      <thead>
      <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left">Property</th>
          <th className="border border-gray-300 p-3 text-left">Gravity Die Cast</th>
          <th className="border border-gray-300 p-3 text-left">Gravity Die Cast</th>
          <th className="border border-gray-300 p-3 text-left">Gravity Die Cast</th>
          <th className="border border-gray-300 p-3 text-left">Gravity Die Cast</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td className="border border-gray-300 p-3 font-medium">Aluminium Alloy (Heat Treatment)</td>
          <td className="border border-gray-300 p-3">LM25 M</td>
          <td className="border border-gray-300 p-3">LM25 TE</td>
          <td className="border border-gray-300 p-3">LM25 TB7</td>
          <td className="border border-gray-300 p-3">LM25 TF</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3 font-medium">Tensile Strength (N/mm²)</td>
          <td className="border border-gray-300 p-3">160 - 200</td>
          <td className="border border-gray-300 p-3">190 - 250</td>
          <td className="border border-gray-300 p-3">230</td>
          <td className="border border-gray-300 p-3">280 - 320</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="border border-gray-300 p-3 font-medium">Elongation (%)</td>
          <td className="border border-gray-300 p-3">3 - 6</td>
          <td className="border border-gray-300 p-3">2 - 3</td>
          <td className="border border-gray-300 p-3">5 - 10</td>
          <td className="border border-gray-300 p-3">2 - 5</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3 font-medium">Brinell Hardness Number</td>
          <td className="border border-gray-300 p-3">55 - 65</td>
          <td className="border border-gray-300 p-3">75 - 95</td>
          <td className="border border-gray-300 p-3">65 - 75</td>
          <td className="border border-gray-300 p-3">90 - 110</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p className="mt-4 text-gray-700">
    LM25 can be used in the ‘as cast condition’ or can be heat treated to achieve improved mechanical properties for certain uses. Applications in the food industry and road transport industry where its use on cylinder blocks and heads and other engine parts has been well proven. Castings requiring strength at elevated temperatures are often made in LM25.
  </p>
</div>

{/* Aluminium Alloy LM27  Mechanical Properties */}
<div className="bg-white p-8 rounded-lg shadow-sm mb-8">
  <h2 className="text-2xl font-bold text-gray-800 mb-6">Aluminium Alloy LM27 Gravity Die Cast Mechanical Properties</h2>
  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300 text-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left">Property</th>
          <th className="border border-gray-300 p-3 text-left">Sand Cast</th>
          <th className="border border-gray-300 p-3 text-left">Sand Cast</th>
          <th className="border border-gray-300 p-3 text-left">Gravity Die Cast</th>
          <th className="border border-gray-300 p-3 text-left">Gravity Die Cast</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td className="border border-gray-300 p-3 font-medium">Aluminium Alloy (Heat Treatment)</td>
          <td className="border border-gray-300 p-3">LM27 M</td>
          <td className="border border-gray-300 p-3">LM27 TF</td>
          <td className="border border-gray-300 p-3">LM27 M</td>
          <td className="border border-gray-300 p-3">LM27 TF</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3 font-medium">Tensile Strength (N/mm²)</td>
          <td className="border border-gray-300 p-3">140 -170	</td>
          <td className="border border-gray-300 p-3">250 - 280</td>
          <td className="border border-gray-300 p-3">160 – 200</td>
          <td className="border border-gray-300 p-3">250 - 290</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="border border-gray-300 p-3 font-medium">Elongation (%)</td>
          <td className="border border-gray-300 p-3">1 – 4			</td>
          <td className="border border-gray-300 p-3">0.5 – 2 </td>
          <td className="border border-gray-300 p-3">2 - 4</td>
          <td className="border border-gray-300 p-3">1 – 3</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3 font-medium">Brinell Hardness Number</td>
          <td className="border border-gray-300 p-3">70 - 85</td>
          <td className="border border-gray-300 p-3">110 – 130</td>
          <td className="border border-gray-300 p-3">75 - 90</td>
          <td className="border border-gray-300 p-3">110 – 130</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p className="mt-4 text-gray-700">
  LM27 is a very versatile alloy used for general purpose castings requiring moderate strength and mechanical properties. General engineering, electrical tools, engine and transmission components, household fittings.
  </p>
</div>

{/* Aluminium Alloy LM0 Mechanical Properties */}
<div className="bg-white p-8 rounded-lg shadow-sm mb-8">
  <h2 className="text-2xl font-bold text-gray-800 mb-6">Aluminium Alloy LM0 Mechanical Properties</h2>
  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300 text-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left">Property</th>
          <th className="border border-gray-300 p-3 text-left">	Sand Cast</th>
          <th className="border border-gray-300 p-3 text-left">Gravity Die Cast</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td className="border border-gray-300 p-3 font-medium">Aluminium Alloy</td>
          <td className="border border-gray-300 p-3">LM0</td>
          <td className="border border-gray-300 p-3">LM0</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3 font-medium">Tensile Strength (N/mm²)</td>
          <td className="border border-gray-300 p-3">80</td>
          <td className="border border-gray-300 p-3">80</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="border border-gray-300 p-3 font-medium">Elongation (%)</td>
          <td className="border border-gray-300 p-3">30</td>
          <td className="border border-gray-300 p-3">40</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3 font-medium">Brinell Hardness Number</td>
          <td className="border border-gray-300 p-3">25</td>
          <td className="border border-gray-300 p-3">25</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p className="mt-4 text-gray-700">
  LM0 is pure aluminium and is used predominantly for electrical conduction equipment (cable clamps), cast rotors for electric motors, chemical plant applications and food industry.


  </p>
</div>


{/* Aluminium Alloy LM16 Mechanical Properties */}
<div className="bg-white p-8 rounded-lg shadow-sm mb-8">
  <h2 className="text-2xl font-bold text-gray-800 mb-6">Aluminium Alloy LM16 Mechanical Properties</h2>
  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300 text-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left">Property</th>
          <th className="border border-gray-300 p-3 text-left">Sand Cast</th>
          <th className="border border-gray-300 p-3 text-left">Gravity Die Cast</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td className="border border-gray-300 p-3 font-medium">Aluminium Alloy</td>
          <td className="border border-gray-300 p-3">LM16 TB</td>
          <td className="border border-gray-300 p-3">LM16 TB</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3 font-medium">Tensile Strength (N/mm²)</td>
          <td className="border border-gray-300 p-3">170 - 200 </td>
          <td className="border border-gray-300 p-3"> 230 - 250</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="border border-gray-300 p-3 font-medium">Elongation (%)</td>
          <td className="border border-gray-300 p-3">2 - 3</td>
          <td className="border border-gray-300 p-3">7 - 6</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3 font-medium">Brinell Hardness Number</td>
          <td className="border border-gray-300 p-3">80</td>
          <td className="border border-gray-300 p-3">85</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p className="mt-4 text-gray-700">
  Used where heat treatment of the alloys producing high strength and leak proof castings such as water jackets, cylinder heads, fire hose couplings and valve bodies is needed

  </p>
</div>

        {/* Material Properties */}
        {/* <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Aluminum Alloy Properties</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left">Alloy</th>
                  <th className="border border-gray-300 p-3 text-left">Tensile Strength (MPa)</th>
                  <th className="border border-gray-300 p-3 text-left">Yield Strength (MPa)</th>
                  <th className="border border-gray-300 p-3 text-left">Elongation (%)</th>
                  <th className="border border-gray-300 p-3 text-left">Hardness (HB)</th>
                  <th className="border border-gray-300 p-3 text-left">Applications</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">LM6 (A413)</td>
                  <td className="border border-gray-300 p-3">160-200</td>
                  <td className="border border-gray-300 p-3">80-120</td>
                  <td className="border border-gray-300 p-3">2-6</td>
                  <td className="border border-gray-300 p-3">55-75</td>
                  <td className="border border-gray-300 p-3">General purpose, good fluidity</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">LM25 (A356)</td>
                  <td className="border border-gray-300 p-3">220-280</td>
                  <td className="border border-gray-300 p-3">150-220</td>
                  <td className="border border-gray-300 p-3">3-8</td>
                  <td className="border border-gray-300 p-3">70-90</td>
                  <td className="border border-gray-300 p-3">High strength, aerospace</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">LM4 (A380)</td>
                  <td className="border border-gray-300 p-3">240-310</td>
                  <td className="border border-gray-300 p-3">160-240</td>
                  <td className="border border-gray-300 p-3">2-4</td>
                  <td className="border border-gray-300 p-3">80-100</td>
                  <td className="border border-gray-300 p-3">Die casting, automotive</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">LM20 (A319)</td>
                  <td className="border border-gray-300 p-3">200-260</td>
                  <td className="border border-gray-300 p-3">140-200</td>
                  <td className="border border-gray-300 p-3">1-3</td>
                  <td className="border border-gray-300 p-3">75-95</td>
                  <td className="border border-gray-300 p-3">Engine blocks, cylinder heads</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> */}



      </div>
    </div>
  )
}

export default TechnicalData