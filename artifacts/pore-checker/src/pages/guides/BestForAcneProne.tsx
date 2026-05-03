import GuideTemplate from "./GuideTemplate";

export default function BestForAcneProne() {
  return (
    <GuideTemplate 
      title="The Best Ingredients for Acne-Prone Skin"
      description="A guide to the most effective, science-backed ingredients for treating and preventing acne breakouts."
      path="/best-ingredients-for-acne-prone-skin"
      content={
        <>
          <p>When you're fighting breakouts, what you put on your skin is just as important as what you avoid. The best ingredients for acne-prone skin fall into three categories: exfoliants, anti-inflammatories, and barrier repair.</p>
          <h2>Chemical Exfoliants (BHA & AHA)</h2>
          <p>Salicylic Acid (BHA) is oil-soluble, meaning it can penetrate the pore and dissolve the mixture of sebum and dead skin cells that causes blockages. AHAs like Lactic Acid and Glycolic Acid work on the surface to remove dead skin.</p>
          <h2>Anti-Inflammatories & Sebum Regulators</h2>
          <p>Niacinamide is a superstar ingredient that reduces inflammation and helps normalize oil production. Centella Asiatica (Cica) and Green Tea Extract are excellent soothing agents that reduce redness.</p>
          <h2>Barrier Repair</h2>
          <p>Acne treatments can be harsh, compromising your skin barrier. Ceramides, Hyaluronic Acid, and Panthenol are crucial for keeping your skin hydrated and resilient without clogging pores. Squalane is an excellent non-comedogenic emollient for locking in moisture.</p>
        </>
      }
    />
  );
}