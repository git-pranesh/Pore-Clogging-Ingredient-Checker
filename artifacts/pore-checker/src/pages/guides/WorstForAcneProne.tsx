import GuideTemplate from "./GuideTemplate";

export default function WorstForAcneProne() {
  return (
    <GuideTemplate 
      title="The Worst Ingredients for Acne-Prone Skin"
      description="Learn which highly comedogenic ingredients you should avoid if you have acne-prone skin."
      path="/worst-ingredients-for-acne-prone-skin"
      content={
        <>
          <p>If you're constantly breaking out despite having a solid skincare routine, your products might be working against you. Many seemingly harmless moisturizers and sunscreens contain hidden comedogenic ingredients.</p>
          <h2>Heavy Plant Oils & Butters</h2>
          <p>While natural, many plant oils are too heavy for acne-prone skin. Coconut Oil, Wheat Germ Oil, and Cocoa Butter have large molecular sizes that prevent them from absorbing properly, trapping debris in your pores.</p>
          <h2>Comedogenic Esters</h2>
          <p>Esters are used to give products a smooth, silky feel. However, ingredients like Isopropyl Myristate, Isopropyl Palmitate, and Myristyl Myristate are notorious for causing severe, deep clogs and should be strictly avoided by anyone prone to acne.</p>
          <h2>Lanolin and Its Derivatives</h2>
          <p>Lanolin is a waxy substance secreted by sheep. While it's an incredible moisturizer for dry skin, derivatives like Acetylated Lanolin are highly comedogenic. Always check your lip balms and heavy creams for this ingredient.</p>
        </>
      }
    />
  );
}