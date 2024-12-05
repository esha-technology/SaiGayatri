import { useState } from "react";
import "./style.css";
function SolarCalculatorForm({ onCalculate, onLoading }) {
  const [location, setLocation] = useState("");
  const [averageMonthlyBill, setAverageMonthlyBill] = useState("");
  const [errors, setErrors] = useState({});

  // Real-time validation function
  const validateField = (name, value) => {
    let error = "";

    if (name === "location") {
      if (!value.trim()) {
        error = "Location is required.";
      }
    }

    if (name === "averageMonthlyBill") {
      if (!value.trim()) {
        error = "Average monthly electricity bill is required.";
      } else if (isNaN(value) || parseFloat(value) <= 0) {
        error = "Please enter a valid positive number for your bill.";
      }
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const validateForm = () => {
    const formErrors = {};
    validateField("location", location);
    validateField("averageMonthlyBill", averageMonthlyBill);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    onLoading(true);
    setTimeout(() => {
      const electricityCost = 10; // ₹/unit, assumed fixed electricity cost
      const energyConsumption =
        parseFloat(averageMonthlyBill) / electricityCost; // Calculate energy consumption

      onCalculate({
        location,
        energyConsumption: energyConsumption, // Pass calculated energy consumption
        electricityCost: electricityCost, // Pass fixed electricity cost
        roofArea: 0, // Default roof area
      });
      onLoading(false);
    }, 1000); // Simulate loading delay
  };

  const handleInputChange = (e, setterFunction) => {
    const { name, value } = e.target;
    setterFunction(value);
    validateField(name, value); // Real-time validation
  };

  return (
    <form onSubmit={handleSubmit} className="formInput">
      <div>
        <label className="flex gap-3 mb-2">
          <img src="/Icons/location.svg" alt="location" width={"12px"} />
          Location (City or Region):
        </label>
        <div className="input-with-icon">
          <input
            type="text"
            name="location"
            value={location}
            onChange={(e) => handleInputChange(e, setLocation)}
            placeholder="Enter your city or region"
            required
            className={errors.location ? "error-input" : ""}
          />
        </div>
        {errors.location && <div className="error">{errors.location}</div>}
      </div>

      <div>
        <label className="flex gap-3 mb-2">
          <img src="/Icons/energy.svg" alt="bill" />
          Your Average Monthly Electricity Bill (₹)
        </label>
        <div className="input-with-icon">
          <input
            type="number"
            name="averageMonthlyBill"
            value={averageMonthlyBill}
            onChange={(e) => handleInputChange(e, setAverageMonthlyBill)}
            placeholder="Enter your Monthly Bill"
            required
            className={errors.averageMonthlyBill ? "error-input" : ""}
          />
        </div>
        {errors.averageMonthlyBill && (
          <div className="error">{errors.averageMonthlyBill}</div>
        )}
      </div>

      <button type="submit">Calculate</button>
    </form>
  );
}

function Results({ results, onRoofAreaChange }) {
  if (!results) return null;

  const averagePanelEfficiency = 0.15; // 15% panel efficiency
  const sunlightHoursPerDay = 5; // 5 hours of sunlight per day
  const kWToSqft = 100; // 1 kW = 100 sqft

  // 1. Calculate the recommended solar system size based on energy consumption
  const recommendedSolarSize =
    results.energyConsumption /
    (averagePanelEfficiency * sunlightHoursPerDay * 30); // Monthly

  // 2. Calculate the required roof area for the recommended solar size (1 kW = 100 sq. feet)
  const requiredRoofArea = recommendedSolarSize * kWToSqft;

  // 3. Adjusted solar system size based on available roof area
  let adjustedSolarSize = Math.min(
    recommendedSolarSize,
    results.roofArea / kWToSqft
  );

  // If available roof area exceeds required roof area, increase the adjusted solar system size
  if (results.roofArea > requiredRoofArea) {
    // The additional roof area can contribute more solar capacity
    adjustedSolarSize = results.roofArea / kWToSqft; // Fully utilize the roof area
  }

  // 4. Calculate the current monthly bill and savings with solar
  const currentBill = results.energyConsumption * results.electricityCost;

  // 5. Calculate savings based on roof area (proportional savings)
  let savings = 0;

  // If available roof area is equal to required roof area, show 0 bill with solar
  if (results.roofArea >= requiredRoofArea) {
    savings = currentBill; // Full savings
  } else if (results.roofArea < requiredRoofArea) {
    // Proportional savings based on roof area
    const roofAreaRatio = results.roofArea / requiredRoofArea;
    savings = roofAreaRatio * currentBill;
  }

  // Bill with solar should not go below zero
  const billWithSolar = Math.max(currentBill - savings, 0);

  return (
    <div className="results">
      <h3 className="resultHeading">Solar System Results:</h3>

      <div className="results-container">
        {/* Monthly Bill */}
        <div className="top-section">
          <h4>
            <i className="fas fa-money-bill-wave"></i>Your Monthly Bill
          </h4>
          <p>
            <strong>Current Monthly Bill:</strong> ₹{currentBill.toFixed(2)}
          </p>
          <p>
            <strong>Bill With Solar:</strong> ₹{billWithSolar.toFixed(2)}
          </p>
        </div>

        {/* Solar System Size */}
        <div className="bottom-section">
          <h4>
            <i className="fas fa-solar-panel"></i> Solar System Size
          </h4>
          <p>
            <strong>Recommended Solar System Energy:</strong>{" "}
            {recommendedSolarSize.toFixed(2)} kW
          </p>
          <p>
            <strong>Required Roof Area for Zero Electric Bill:</strong>{" "}
            {requiredRoofArea.toFixed(2)} sq. feet
          </p>
          <p>
            <strong>Adjusted Solar System Energy (Based on Roof Area):</strong>{" "}
            {adjustedSolarSize.toFixed(2)} kW
          </p>
        </div>
      </div>

      {/* Roof Area Modification */}
      <div>
        <label className="bold-label">
          Adjust Available Roof Area (sq. feet):
        </label>
        <div className="roof-area-controls">
          <button
            type="button"
            onClick={() => onRoofAreaChange(results.roofArea - 1)}
          >
            -
          </button>
          <input
            type="number"
            value={results.roofArea}
            onChange={(e) => onRoofAreaChange(parseFloat(e.target.value))}
            required
          />
          <button
            type="button"
            onClick={() => onRoofAreaChange(results.roofArea + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

function SolarCal() {
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const calculateSolarSavings = (data) => {
    setResults({ ...data, roofArea: 0 }); // Initialize with 0 roof area
  };

  const handleRoofAreaChange = (newRoofArea) => {
    setResults((prevResults) => ({
      ...prevResults,
      roofArea: newRoofArea,
    }));
  };

  return (
    <>
      <div className="solarContainer">
        <div className="App">
          {/* <p className="subHeading">
            Estimate your solar savings and required system size!
          </p> */}
          <SolarCalculatorForm
            onCalculate={calculateSolarSavings}
            onLoading={setIsLoading}
          />
          {isLoading && <p>Loading...</p>}
        </div>
        <Results results={results} onRoofAreaChange={handleRoofAreaChange} />
      </div>
    </>
  );
}

export default SolarCal;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
