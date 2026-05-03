import GuideTemplate from "./GuideTemplate";

export default function NonComedogenicSunscreen() {
  return (
    <GuideTemplate 
      title="Non-Comedogenic Sunscreens for Acne-Prone Skin"
      description="Finding a sunscreen that won't break you out. Learn which UV filters and bases to avoid."
      path="/non-comedogenic-sunscreen-ingredients"
      content={
        <>
          <p>Sunscreen is the most important step in any skincare routine, especially if you're using acne treatments that make your skin sun-sensitive. But finding a sunscreen that doesn't cause new breakouts is notoriously difficult.</p>
          <h2>Physical vs. Chemical Filters</h2>
          <p>Physical (mineral) filters like Zinc Oxide and Titanium Dioxide are naturally non-comedogenic and even have mild anti-inflammatory properties that can soothe active breakouts. Chemical filters aren't inherently pore-clogging, but the bases they require often are.</p>
          <h2>The Problem with Sunscreen Bases</h2>
          <p>To dissolve chemical UV filters and make them water-resistant, formulators often use heavy esters like Isopropyl Myristate or Myristyl Myristate. These are highly comedogenic and are the real reason many chemical sunscreens cause breakouts.</p>
          <h2>Ingredients to Look For</h2>
          <p>Look for lightweight formulas labeled "oil-free" or "fluid." Niacinamide is a great addition to sunscreens for acne-prone skin as it helps regulate sebum production throughout the day.</p>
        </>
      }
    />
  );
}