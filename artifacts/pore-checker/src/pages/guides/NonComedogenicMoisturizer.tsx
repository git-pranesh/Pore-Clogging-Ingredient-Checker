import GuideTemplate from "./GuideTemplate";

export default function NonComedogenicMoisturizer() {
  return (
    <GuideTemplate 
      title="How to Choose a Non-Comedogenic Moisturizer"
      description="A complete guide to finding the right moisturizer for acne-prone skin without clogging your pores."
      path="/non-comedogenic-moisturizer-ingredients"
      content={
        <>
          <p>Choosing a moisturizer when you have acne-prone skin can feel like walking through a minefield. You need hydration to repair your skin barrier, but the wrong heavy cream can trigger a breakout.</p>
          <h2>The Role of Moisturizers</h2>
          <p>Moisturizers typically contain humectants (to draw water in), emollients (to soften), and occlusives (to seal moisture in). Occlusives and heavy emollients are often where the pore-clogging culprits hide.</p>
          <h2>Safe Ingredients to Look For</h2>
          <p>Look for lightweight humectants like Glycerin and Hyaluronic Acid. Squalane is an excellent emollient that rarely clogs pores.</p>
        </>
      }
    />
  );
}