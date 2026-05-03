import GuideTemplate from "./GuideTemplate";

export default function HowToRead() {
  return (
    <GuideTemplate 
      title="How to Read Skincare Ingredient Lists"
      description="Learn the basics of INCI names and how to scan ingredient lists for acne-triggering ingredients."
      path="/how-to-read-skincare-ingredients-list"
      content={
        <>
          <p>Ingredient lists (INCI lists) can look like a foreign language, but learning a few simple rules can empower you to make safer choices for your skin.</p>
          <h2>Order Matters</h2>
          <p>Ingredients are listed in descending order of concentration. The first 5-6 ingredients usually make up the vast majority (80-90%) of the formula.</p>
          <h2>Spotting the Cloggers</h2>
          <p>Look out for common comedogenic ingredients like Isopropyl Myristate or Coconut Oil, especially if they appear high up on the list.</p>
        </>
      }
    />
  );
}