import React, { useState, useEffect } from "react";
import { 
  Leaf, ShoppingCart, Download, Sprout, ShieldAlert, Cpu, Database, 
  Sparkles, Layers, RefreshCw, Eye, ArrowRight, TrendingUp, CheckCircle, Play, Laptop
} from "lucide-react";
import { Project } from "../types";
import { PROJECTS } from "../data";

export default function ProjectShowcase() {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  
  // States of AI Crop disease simulator
  const [selectedLeaf, setSelectedLeaf] = useState("rice");
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [humidity, setHumidity] = useState(78); // Slider
  const [temperature, setTemperature] = useState(28); // Slider
  const [scanResult, setScanResult] = useState<any>(null);

  // States of Agro Marketplace simulator
  const [cart, setCart] = useState<{ id: string; name: string; farmerPrice: number; middlemanPrice: number; qty: number }[]>([]);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  // States of YT Downloader tool
  const [videoUrl, setVideoUrl] = useState("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  const [resolution, setResolution] = useState("1080p");
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadStep, setDownloadStep] = useState("");
  const [downloadPercent, setDownloadPercent] = useState(0);
  const [downloadLogs, setDownloadLogs] = useState<string[]>([]);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const currentProject = PROJECTS[activeProjectIdx];

  // AI Crop model database simulator
  const leafData: Record<string, any> = {
    rice: {
      name: "Rice (Paddy) Leaf",
      image: "🌾",
      baseDisease: "Rice Blast (Magnaporthe oryzae)",
      baseConfidence: 94.6,
      healthyChance: 5.4,
      remediation: "Apply Tricyclazole fungicide (1.5g per Liter), ensure clean field drainage channels, and use resistant cultivars.",
      riskFactor: "Fungal spores proliferate rapidly in high relative humidity. Minimize standing water depth during humid intervals."
    },
    tomato: {
      name: "Tomato Leaf",
      image: "🍅",
      baseDisease: "Tomato Early Blight (Alternaria solani)",
      baseConfidence: 91.2,
      healthyChance: 8.8,
      remediation: "Prune lower infected foliage to improve airflow, apply copper-based fungicides, and implement drip irrigation to avoid wet leaves.",
      riskFactor: "Warm temperatures and moisture on leaves catalyze Alternaria germination."
    },
    potato: {
      name: "Potato Leaf",
      image: "🥔",
      baseDisease: "Potato Late Blight (Phytophthora infestans)",
      baseConfidence: 97.4,
      healthyChance: 2.6,
      remediation: "Destroy crop debris promptly after harvest. Apply preventative metalaxyl spray. Plant early maturing blight-resistant tubers.",
      riskFactor: "Cool, damp weather below 20°C with persistent wetness creates critical infection pressure."
    },
    cotton: {
      name: "Cotton Leaf",
      image: "🌱",
      baseDisease: "Healthy Cotton Crop - No Infection Detected",
      baseConfidence: 99.1,
      healthyChance: 99.1,
      remediation: "Excellent condition. Maintain current crop rotation schedule and monitor for early bollworm cycles.",
      riskFactor: "Risk remains extremely low under current parameters."
    }
  };

  // Run CNN disease classification simulation
  const handleLeafScan = () => {
    setIsScanning(true);
    setScanProgress(0);
    setScanResult(null);
    const steps = [
      "Loading high-resolution RGB image tensors...",
      "Normalizing voxel shapes & applying OpenCV bilateral filters...",
      "Feeding forward through Conv2D Feature Extraction blocks...",
      "Activating Spatial Dropout & MaxPool Layers...",
      "Softmax Dense Classification yielding disease bounds..."
    ];
    
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      setScanProgress((prev) => prev + 20);
      if (currentStep >= 5) {
        clearInterval(interval);
        setTimeout(() => {
          setIsScanning(false);
          const leafObj = leafData[selectedLeaf];
          
          // Influence details based on humidity controller!
          let riskLevel: "Low" | "Moderate" | "Severe" = "Low";
          if (humidity > 80 && temperature > 22) {
            riskLevel = "Severe";
          } else if (humidity > 60 || temperature > 20) {
            riskLevel = "Moderate";
          }

          setScanResult({
            ...leafObj,
            riskLevel,
            analyzedHumidity: humidity,
            analyzedTemp: temperature,
            confidence: selectedLeaf === "cotton" ? 99.1 : Math.min(99.9, leafObj.baseConfidence + (humidity > 80 ? 2 : -1.5))
          });
        }, 300);
      }
    }, 450);
  };

  // Farmer's market direct terminal catalog
  const agroProducts = [
    { id: "1", name: "Sona Masuri Brown Rice (10kg Bag)", farmerPrice: 420, retailPrice: 650, icon: "🌾" },
    { id: "2", name: "Sun-Dried Guntur Red Chillies (1kg)", farmerPrice: 210, retailPrice: 380, icon: "🌶️" },
    { id: "3", name: "Organic Farm-Fresh Turmeric (500g)", farmerPrice: 110, retailPrice: 195, icon: "🍂" },
  ];

  const addToCart = (product: typeof agroProducts[0]) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      } else {
        return [...prev, { 
          id: product.id, 
          name: product.name, 
          farmerPrice: product.farmerPrice, 
          middlemanPrice: product.retailPrice, 
          qty: 1 
        }];
      }
    });
  };

  const getSavings = () => {
    const totalMiddleman = cart.reduce((sum, item) => sum + item.middlemanPrice * item.qty, 0);
    const totalFarmer = cart.reduce((sum, item) => sum + item.farmerPrice * item.qty, 0);
    return {
      totalMiddleman,
      totalFarmer,
      saved: totalMiddleman - totalFarmer,
      percentage: totalMiddleman > 0 ? Math.round(((totalMiddleman - totalFarmer) / totalMiddleman) * 100) : 0
    };
  };

  const executeCheckout = () => {
    setCheckoutSuccess(true);
    setTimeout(() => {
      setCheckoutSuccess(false);
      setCart([]);
    }, 4000);
  };

  // YouTube Downloader simulated runner
  const executeDownload = () => {
    if (!videoUrl) return;
    setIsDownloading(true);
    setDownloadPercent(0);
    setDownloadComplete(false);
    setDownloadLogs([]);

    const logList = [
      `[INFO] Initializing pytube core engine stream resolver...`,
      `[INFO] Handshaking with YouTube client endpoints v3...`,
      `[SUCCESS] Video found: "Moku's Engineering Journey - Web Demo Video"`,
      `[STREAM] Resolving progressive index metadata table...`,
      `[CYPHER] Dynamic cipher decryption sequence successful.`,
      `[yt-dlp] Downloading stream chunk 1/4 (Target: ${resolution} H264)`,
      `[yt-dlp] Merging audio AAC stream chunk into video master container...`,
      `[SUCCESS] File multiplexed successfully to MOKU_VIDEO_${resolution}.mp4.`
    ];

    let stepIdx = 0;
    const interval = setInterval(() => {
      if (stepIdx < logList.length) {
        setDownloadLogs((prev) => [...prev, logList[stepIdx]]);
        setDownloadPercent((prev) => Math.min(100, prev + 12.5));
        stepIdx++;
      } else {
        clearInterval(interval);
        setDownloadComplete(true);
        setIsDownloading(false);
      }
    }, 500);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6" id="project-cabinet-outer">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-100 pb-5 mb-6 gap-4">
        <div>
          <h3 className="font-display font-semibold text-gray-900 text-lg">Interactive Showcase Cabin</h3>
          <p className="text-xs text-gray-500">Live web testing benches simulating actual functional architectures</p>
        </div>
        
        {/* Project Selector Tab Pills */}
        <div className="flex bg-gray-50 p-1.5 rounded-xl border border-gray-200/50">
          {PROJECTS.map((pj, i) => (
            <button
              key={pj.id}
              onClick={() => setActiveProjectIdx(i)}
              className={`py-2 px-3.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                activeProjectIdx === i
                  ? "bg-white text-gray-900 font-semibold shadow-xs border border-gray-200"
                  : "text-gray-500 hover:text-gray-800"
              }`}
              id={`project-tab-${pj.id}`}
            >
              {pj.category === "ai" ? "🌾 Crop AI" : pj.category === "web" ? "🛒 AgroMarket" : "📹 Downloader"}
            </button>
          ))}
        </div>
      </div>

      {/* Grid: Details on Left, Interactive Simulation sandbox on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Tech card details */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          <div>
            <span className="text-[10px] font-bold font-mono text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-full uppercase tracking-widest inline-block mb-3">
              {currentProject.category.toUpperCase()} PROJECT DETAILS
            </span>
            <h4 className="font-display font-bold text-gray-900 text-xl leading-tight">
              {currentProject.title}
            </h4>
            <p className="text-xs text-gray-600 mt-2.5 leading-relaxed">
              {currentProject.overview}
            </p>
          </div>

          <div>
            <h5 className="text-xs font-semibold text-gray-800 uppercase tracking-wider font-display mb-2">
              Core Technical Features
            </h5>
            <ul className="flex flex-col gap-1.5">
              {currentProject.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold text-gray-800 uppercase tracking-wider font-display mb-2">
              Core Tech Stack
            </h5>
            <div className="flex flex-wrap gap-1.5">
              {currentProject.techStack.map((tech) => (
                <span 
                  key={tech} 
                  className="text-[11px] font-mono bg-gray-50 text-gray-700 px-2.5 py-1 rounded-md border border-gray-200/60 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Live Simulator Frame */}
        <div className="lg:col-span-7 bg-gray-50 rounded-xl border border-gray-200/70 p-4 md:p-5 relative">
          <div className="absolute top-3 right-3 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
            <span className="text-[9px] font-bold font-mono text-gray-400 tracking-wider">SANDBOX IMMERSIVE MODE</span>
          </div>

          {/* 1. Crop disease detector simulation */}
          {currentProject.id === "crop-disease" && (
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-2 mb-1">
                <Leaf className="w-5 h-5 text-emerald-600" />
                <h4 className="font-display font-semibold text-xs text-gray-800 uppercase tracking-wider">
                  CNN Agricultural Diagnosis Lab
                </h4>
              </div>

              {/* Crop selectors */}
              <div>
                <span className="text-[10px] text-gray-500 font-bold block mb-1.5 uppercase">Select Crop Specimen</span>
                <div className="grid grid-cols-4 gap-2">
                  {Object.keys(leafData).map((k) => (
                    <button
                      key={k}
                      onClick={() => { setSelectedLeaf(k); setScanResult(null); }}
                      className={`p-2 rounded-lg border text-center transition-all flex flex-col items-center gap-1 cursor-pointer ${
                        selectedLeaf === k
                          ? "bg-white border-emerald-500 shadow-sm text-emerald-800 font-semibold"
                          : "bg-white/50 border-gray-200 text-gray-500 hover:bg-white"
                      }`}
                      id={`specimen-select-${k}`}
                    >
                      <span className="text-xl leading-none">{leafData[k].image}</span>
                      <span className="text-[10px] truncate w-full">{leafData[k].name.split(" ")[0]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Slide Environmental Adjustments */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-3 rounded-lg border border-gray-200/60">
                <div>
                  <div className="flex justify-between text-[11px] text-gray-600 font-medium mb-1">
                    <span>Relative Humidity</span>
                    <span className="font-mono text-emerald-600 font-bold">{humidity}%</span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="100"
                    value={humidity}
                    onChange={(e) => { setHumidity(Number(e.target.value)); setScanResult(null); }}
                    className="w-full accent-emerald-600 h-1 bg-gray-100 rounded-lg appearance-none cursor-pointer"
                    id="humidity-slider"
                  />
                  <span className="text-[9px] text-gray-400">Higher humidity increases fungal risk</span>
                </div>
                <div>
                  <div className="flex justify-between text-[11px] text-gray-600 font-medium mb-1">
                    <span>Average Temperature</span>
                    <span className="font-mono text-amber-600 font-bold">{temperature}°C</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="45"
                    value={temperature}
                    onChange={(e) => { setTemperature(Number(e.target.value)); setScanResult(null); }}
                    className="w-full accent-amber-500 h-1 bg-gray-100 rounded-lg appearance-none cursor-pointer"
                    id="temp-slider"
                  />
                  <span className="text-[9px] text-gray-400">Warm temperatures speed incubation</span>
                </div>
              </div>

              {/* Action Button & Loader */}
              <div className="flex flex-col gap-2 mt-1">
                <button
                  onClick={handleLeafScan}
                  disabled={isScanning}
                  className="w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs flex items-center justify-center gap-2 cursor-pointer shadow-sm transition-colors"
                  id="scan-leaf-btn"
                >
                  <Cpu className="w-4 h-4" />
                  <span>{isScanning ? "Processing Leaf Neural Tensors..." : "Run CNN Health Analysis"}</span>
                </button>

                {isScanning && (
                  <div className="bg-white p-3 rounded-lg border border-gray-200 mt-1">
                    <div className="flex justify-between text-[10px] font-mono text-gray-500 mb-1">
                      <span>{scanProgress < 25 ? "Analyzing pixels..." : scanProgress < 75 ? "Calculating convolutions..." : "Softmax dense mapping..."}</span>
                      <span>{scanProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-emerald-600 h-full transition-all duration-300" 
                        style={{ width: `${scanProgress}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Dynamic Scan Result Card */}
              {scanResult && !isScanning && (
                <div className="bg-white p-4 rounded-xl border border-gray-200/80 flex flex-col gap-3 shadow-2xs">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[9px] font-bold font-mono text-gray-400 block tracking-wide uppercase">AI CLASSIFICATION RESULTS</span>
                      <h4 className="font-display font-semibold text-gray-900 text-xs mt-0.5">
                        {scanResult.baseDisease}
                      </h4>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                      scanResult.riskLevel === "Severe" 
                        ? "bg-red-50 text-red-700 border-red-100" 
                        : scanResult.riskLevel === "Moderate"
                        ? "bg-amber-50 text-amber-700 border-amber-100"
                        : "bg-emerald-50 text-emerald-700 border-emerald-100"
                    }`}>
                      {scanResult.riskLevel} Risk
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 bg-gray-50 p-2.5 rounded-lg border border-gray-100 text-center">
                    <div>
                      <span className="text-[9px] text-gray-400 block font-semibold uppercase">Confidence</span>
                      <span className="text-sm font-bold font-mono text-emerald-700">{scanResult.confidence}%</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-gray-400 block font-semibold uppercase">Weather Factor</span>
                      <span className="text-xs font-semibold text-gray-700">Hum: {scanResult.analyzedHumidity}% | Temp: {scanResult.analyzedTemp}°C</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[9px] text-emerald-800 font-bold flex items-center gap-1">
                      <Sprout className="w-3 h-3 text-emerald-600" /> Agronomic Remediation Steps:
                    </span>
                    <p className="text-[11px] text-gray-650 mt-1 leading-relaxed">
                      {scanResult.remediation}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 2. Agro culture platform market terminal */}
          {currentProject.id === "agro-marketing" && (
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-2 mb-1">
                <ShoppingCart className="w-5 h-5 text-indigo-600" />
                <h4 className="font-display font-semibold text-xs text-gray-800 uppercase tracking-wider">
                  AgroDirect Fair-Trade Terminal
                </h4>
              </div>

              {/* Product list */}
              <div className="flex flex-col gap-2">
                {agroProducts.map((p) => (
                  <div key={p.id} className="bg-white p-3 rounded-xl border border-gray-200/70 flex items-center justify-between hover:border-indigo-300 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl leading-none bg-indigo-50/50 p-2 rounded-lg">{p.icon}</span>
                      <div>
                        <h5 className="text-xs font-semibold text-gray-800">{p.name}</h5>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-xs text-emerald-600 font-bold font-mono">₹{p.farmerPrice}</span>
                          <span className="text-[10px] text-gray-400 line-through">Retail: ₹{p.retailPrice}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => addToCart(p)}
                      className="px-3 py-1.5 text-[11px] font-semibold rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-all border border-indigo-100 cursor-pointer"
                      id={`add-cart-${p.id}`}
                    >
                      + Add Block
                    </button>
                  </div>
                ))}
              </div>

              {/* Cart details and farmer benefits */}
              {cart.length > 0 && (
                <div className="bg-white p-4 rounded-xl border border-indigo-100 flex flex-col gap-3 mt-1">
                  <div className="flex justify-between items-center text-[10px] font-bold text-indigo-800 uppercase tracking-wider pb-1 border-b border-indigo-50">
                    <span>Produce Selected</span>
                    <span>Direct Order</span>
                  </div>

                  <div className="max-h-24 overflow-y-auto flex flex-col gap-1.5 pr-1">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between text-xs text-gray-700">
                        <span className="truncate">{item.qty}x {item.name.replace(/ Bag|\(.+/, "")}</span>
                        <span className="font-mono font-medium text-gray-800">₹{item.farmerPrice * item.qty}</span>
                      </div>
                    ))}
                  </div>

                  {/* Math Savings Summary */}
                  {(() => {
                    const mathVal = getSavings();
                    return (
                      <div className="bg-emerald-50/70 border border-emerald-100 rounded-lg p-2.5 flex items-center justify-between mt-1">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-emerald-600" />
                          <div>
                            <span className="text-[10px] text-emerald-800 font-bold block leading-none">MIDDLEMAN BYPASS SAVINGS</span>
                            <span className="text-xs text-emerald-700 mt-1 block">You save ₹{mathVal.saved}!</span>
                          </div>
                        </div>
                        <span className="text-xs font-bold font-mono text-emerald-700 bg-emerald-15 bg-opacity-10 px-2 py-0.5 rounded-full border border-emerald-200">
                          {mathVal.percentage}% Cheaper
                        </span>
                      </div>
                    );
                  })()}

                  <button
                    onClick={executeCheckout}
                    disabled={checkoutSuccess}
                    className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs rounded-lg cursor-pointer transition-colors"
                    id="checkout-cart-btn"
                  >
                    Simulate Direct Farmer Order Placement
                  </button>
                </div>
              )}

              {checkoutSuccess && (
                <div className="p-3 bg-emerald-50 border border-emerald-150 rounded-xl flex items-center gap-2.5 text-xs text-emerald-800 mt-1 animate-bounce">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <div>
                    <span className="font-bold block">Order Dispatched to Farmer!</span>
                    <span className="text-[11px] text-emerald-600">SMS alert dispatched and cargo transit registered successfully.</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 3. YouTube downloader simulation */}
          {currentProject.id === "yt-downloader" && (
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-2 mb-1">
                <Download className="w-5 h-5 text-gray-800" />
                <h4 className="font-display font-semibold text-xs text-gray-800 uppercase tracking-wider">
                  pytube & yt-dlp Sandbox Console
                </h4>
              </div>

              {/* URL & resolution input */}
              <div className="flex flex-col gap-2.5">
                <div>
                  <label className="block text-[10px] text-gray-500 font-bold mb-1 uppercase">Video URL</label>
                  <input
                    type="text"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    className="w-full text-xs py-2 px-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-gray-500/20 font-mono text-gray-700"
                    id="downloader-video-url"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "1080p", label: "1080p Full HD" },
                    { id: "720p", label: "720p HD" },
                    { id: "mp3", label: "320kbps MP3" },
                  ].map((res) => (
                    <button
                      key={res.id}
                      onClick={() => setResolution(res.id)}
                      className={`py-2 px-1 text-xs rounded-lg border text-center transition-all font-medium cursor-pointer ${
                        resolution === res.id
                          ? "bg-white border-gray-900 text-gray-900 font-semibold shadow-2xs"
                          : "bg-white/50 border-gray-200 text-gray-505 hover:bg-white"
                      }`}
                      id={`downloader-res-${res.id}`}
                    >
                      {res.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Start download action */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={executeDownload}
                  disabled={isDownloading}
                  className="w-full py-2.5 bg-gray-900 hover:bg-black text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 cursor-pointer shadow-sm transition-colors"
                  id="downloader-start-btn"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>{isDownloading ? "Multiplexing Stream Blocks..." : "Compile & Fetch Download streams"}</span>
                </button>

                {isDownloading && (
                  <div className="mt-1">
                    <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-gray-800 h-full transition-all duration-300"
                        style={{ width: `${downloadPercent}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Log outputs stream */}
              {downloadLogs.length > 0 && (
                <div className="bg-gray-900 p-3 rounded-lg border border-gray-800 font-mono text-[10px] text-emerald-400 flex flex-col gap-1 max-h-36 overflow-y-auto shadow-inner leading-relaxed">
                  {downloadLogs.map((log, idx) => (
                    <div key={idx} className="flex gap-2">
                      <span className="text-gray-500">{(idx + 1).toString().padStart(2, "0")}</span>
                      <span>{log}</span>
                    </div>
                  ))}
                </div>
              )}

              {downloadComplete && (
                <div className="p-3 bg-emerald-50 border border-emerald-150 rounded-xl flex items-center gap-2 text-xs text-emerald-800 mt-1">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <span className="font-bold block">Download Complete (Simulated)</span>
                    <span className="text-[11px] text-emerald-600 block">Triggered browser sandbox chunk transfer of 24.3 MB.</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
