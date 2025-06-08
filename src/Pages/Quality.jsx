const Quality = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Quality Assurance & Control</h1>

        {/* Introduction */}
        <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            At Alpac Alloys, quality is not just a commitment—it's the foundation of everything we do.
            Our comprehensive quality management system ensures that every casting meets the highest
            standards of precision, reliability, and performance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-red-600 mb-2">99.5%</div>
              <div className="text-gray-600">First-Pass Quality Rate</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-red-600 mb-2">Zero</div>
              <div className="text-gray-600">Customer Recalls</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-gray-600">Parts Inspected</div>
            </div>
          </div>
        </div>

        {/* Certifications & Standards */}
        <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Certifications & Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">ISO</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">ISO 9001:2015</h3>
              <p className="text-gray-600 text-sm">Quality Management Systems</p>
              <div className="mt-3 text-xs text-gray-500">Certified Since: 1995</div>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">AS</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">AS9100D</h3>
              <p className="text-gray-600 text-sm">Aerospace Quality Management</p>
              <div className="mt-3 text-xs text-gray-500">Certified Since: 2010</div>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">TS</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">IATF 16949</h3>
              <p className="text-gray-600 text-sm">Automotive Quality Systems</p>
              <div className="mt-3 text-xs text-gray-500">Certified Since: 2008</div>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">SC</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">SC21</h3>
              <p className="text-gray-600 text-sm">Supply Chain Assessment</p>
              <div className="mt-3 text-xs text-gray-500">Bronze Level</div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Industry Standards Compliance</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">✓</span>
                  <span><strong>BS EN 1706:2020</strong> - Aluminium and aluminium alloys castings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">✓</span>
                  <span><strong>ASTM B26/B26M</strong> - Aluminum-alloy sand castings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">✓</span>
                  <span><strong>ASTM B108</strong> - Aluminum-alloy permanent mold castings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">✓</span>
                  <span><strong>MIL-STD-2175</strong> - Military castings specifications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">✓</span>
                  <span><strong>AMS 4218</strong> - Aerospace material specifications</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Regulatory Compliance</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span><strong>REACH Regulation</strong> - Chemical safety compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span><strong>RoHS Directive</strong> - Restriction of hazardous substances</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span><strong>WEEE Directive</strong> - Waste electrical equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span><strong>UKCA Marking</strong> - UK conformity assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span><strong>CE Marking</strong> - European conformity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quality Control Process */}
        <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Quality Control Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📋</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">1. Incoming Inspection</h3>
              <p className="text-gray-600 text-sm">Raw materials tested for chemistry, mechanical properties, and surface quality</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚙️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">2. Process Control</h3>
              <p className="text-gray-600 text-sm">Real-time monitoring of melt temperature, pouring rate, and cooling cycles</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">3. In-Process Testing</h3>
              <p className="text-gray-600 text-sm">Dimensional checks, visual inspection, and non-destructive testing during production</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">4. Final Inspection</h3>
              <p className="text-gray-600 text-sm">Complete dimensional verification, surface finish assessment, and documentation</p>
            </div>
          </div>
        </div>

        {/* Testing & Inspection Capabilities */}
        <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Testing & Inspection Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Dimensional Inspection</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Coordinate Measuring Machine (CMM)</h4>
                  <ul className="text-gray-600 mt-2 space-y-1 text-sm">
                    <li>• Mitutoyo CRYSTA-Apex S574 (500x700x400mm)</li>
                    <li>• Accuracy: ±(1.7+3L/1000)μm</li>
                    <li>• 3D geometric dimensioning & tolerancing</li>
                    <li>• First article inspection reports</li>
                  </ul>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Optical Measurement</h4>
                  <ul className="text-gray-600 mt-2 space-y-1 text-sm">
                    <li>• Vision measuring systems</li>
                    <li>• Surface roughness testers</li>
                    <li>• Digital calipers and micrometers</li>
                    <li>• Height gauges and depth meters</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Material Testing</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Chemical Analysis</h4>
                  <ul className="text-gray-600 mt-2 space-y-1 text-sm">
                    <li>• Optical emission spectrometry (OES)</li>
                    <li>• X-ray fluorescence (XRF) analysis</li>
                    <li>• Certified material test certificates</li>
                    <li>• Traceability documentation</li>
                  </ul>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Mechanical Testing</h4>
                  <ul className="text-gray-600 mt-2 space-y-1 text-sm">
                    <li>• Tensile strength testing</li>
                    <li>• Hardness testing (Brinell, Rockwell)</li>
                    <li>• Impact testing (Charpy, Izod)</li>
                    <li>• Fatigue and creep testing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Non-Destructive Testing */}
        <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Non-Destructive Testing (NDT)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Radiographic Testing (RT)</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• X-ray inspection systems</li>
                <li>• Digital radiography capabilities</li>
                <li>• Internal defect detection</li>
                <li>• Porosity and inclusion analysis</li>
                <li>• ASTM E155 compliant</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Liquid Penetrant Testing (PT)</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Surface crack detection</li>
                <li>• Fluorescent and visible dye systems</li>
                <li>• ASTM E1417 procedures</li>
                <li>• Critical surface inspection</li>
                <li>• Automated cleaning systems</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Pressure Testing</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Hydrostatic pressure testing</li>
                <li>• Pneumatic leak detection</li>
                <li>• Helium leak testing</li>
                <li>• Custom test fixtures</li>
                <li>• Automated test systems</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Statistical Process Control */}
        <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Statistical Process Control (SPC)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Data Collection & Analysis</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">📊</span>
                  <span>Real-time data collection from all inspection points</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">📈</span>
                  <span>Control charts for process monitoring and trending</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">🎯</span>
                  <span>Capability studies (Cp, Cpk) for process validation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">⚡</span>
                  <span>Immediate alerts for out-of-control conditions</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Continuous Improvement</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">🔄</span>
                  <span>Monthly process capability reviews</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">📋</span>
                  <span>Corrective and preventive action (CAPA) system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">👥</span>
                  <span>Cross-functional quality improvement teams</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">🏆</span>
                  <span>Six Sigma methodology implementation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quality Documentation */}
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Quality Documentation & Traceability</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Inspection Reports</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• First Article Inspection (FAI)</li>
                <li>• Dimensional inspection reports</li>
                <li>• Material test certificates</li>
                <li>• Non-conformance reports</li>
                <li>• Certificate of compliance</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Process Documentation</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Process control plans</li>
                <li>• Work instructions</li>
                <li>• Inspection procedures</li>
                <li>• Equipment calibration records</li>
                <li>• Training records</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Traceability System</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Full material traceability</li>
                <li>• Batch tracking and control</li>
                <li>• Process parameter logging</li>
                <li>• Digital quality records</li>
                <li>• 15-year record retention</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Quality Commitment</h3>
            <p className="text-gray-600 text-center italic">
              "Our commitment to quality goes beyond compliance. We continuously invest in people,
              processes, and technology to deliver castings that exceed our customers' expectations
              and contribute to their success."
            </p>
            <div className="text-center mt-4">
              <span className="text-gray-800 font-medium">- Quality Management Team, Alpac Alloys Ltd</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quality
