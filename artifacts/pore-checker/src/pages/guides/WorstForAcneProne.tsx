import GuideTemplate from "./GuideTemplate";

export default function WorstForAcneProne() {
  return (
    <GuideTemplate
      title="The Worst Ingredients for Acne-Prone Skin"
      description="Learn which highly comedogenic ingredients you should avoid if you have acne-prone skin."
      path="/worst-ingredients-for-acne-prone-skin"
      content={
        <>
          <p>
            If you are constantly breaking out despite having a solid skincare routine, your products
            may be working against you. Many seemingly harmless moisturizers, sunscreens, and even
            "natural" oils contain ingredients that have been clinically demonstrated to clog pores in
            acne-prone users. This guide walks through the four families of ingredients that cause
            the bulk of product-induced breakouts, why they cause trouble, and what to look for on
            labels.
          </p>

          <h2>Heavy Plant Oils and Butters</h2>
          <p>
            While natural and food-grade, many plant oils and butters are too heavy for acne-prone
            facial skin. Coconut Oil rates 4 out of 5 on the Fulton comedogenic scale, primarily
            because of its high lauric acid content, which solidifies just below skin temperature and
            binds into the lipid plug at the mouth of a pore. Wheat Germ Oil is the highest-rated
            plant oil at a flat 5 due to its thick polar lipid structure and tendency to oxidize on
            the skin. Cocoa Butter and Mango Butter are saturated, semi-solid butters that sit on the
            surface and trap sebum. Even widely-loved oils such as Avocado, Soybean, and Marula sit
            in the moderate-risk range. Avoid these in the top half of any leave-on product.
          </p>

          <h2>Comedogenic Esters: The Hidden Cloggers</h2>
          <p>
            Esters are formed by reacting a fatty acid with an alcohol, and they are everywhere in
            cosmetics because they give a smooth, silky, "high-end" feel. Unfortunately, several of
            them are also the most reliably comedogenic ingredients available. Isopropyl Myristate,
            Isopropyl Palmitate, Octyl Palmitate, Myristyl Myristate, and Isocetyl Stearate all rate
            4 or 5 on the comedogenic scale. They appear in moisturizers, sunscreens, foundations,
            and cleansing oils. Because they rarely sound alarming on a label, they slip past most
            shoppers and are responsible for a huge percentage of product-induced breakouts. The
            simple rule: scan for "myristate," "palmitate," and "isopropyl" in the inactive list and
            put the product back if any of those names appear in the top ten.
          </p>

          <h2>Lanolin and Its Derivatives</h2>
          <p>
            Lanolin is the waxy substance secreted by sheep to coat their wool. It is an exceptional
            moisturizer for very dry hands, lips, and cracked heels, but its acetylated and ethoxylated
            derivatives are notoriously comedogenic. Acetylated Lanolin, Acetylated Lanolin Alcohol,
            and Ethoxylated Lanolin all rate 4 to 5. Plain Lanolin itself sits at a moderate 2 to 3
            but should still be approached cautiously on the face. Always check lip balms, hand
            creams, and rich body moisturizers for lanolin derivatives if you are prone to perioral
            or cheek breakouts.
          </p>

          <h2>Algae, Carrageenan, and Marine Extracts</h2>
          <p>
            Marine ingredients have soared in popularity in luxury skincare, but Red Algae Extract,
            Carrageenan, and Chondrus Crispus have all been shown to be highly comedogenic in
            acne-prone users, often rating 4 to 5. They are usually included in trace amounts as
            texturizers and gelling agents, but in some serums and masks they appear higher up the
            list. Spirulina and most Chlorella extracts are slightly safer but still warrant caution.
          </p>

          <h2>Fragrance and Essential Oils: A Different Kind of Trouble</h2>
          <p>
            Synthetic fragrance and concentrated essential oils are not technically comedogenic, but
            they trigger irritant and contact dermatitis that mimics and worsens acne. Limonene,
            Linalool, Citronellol, Geraniol, and Eucalyptus Oil are common culprits. If you are not
            sure whether your skin reacts to fragrance, switch to fragrance-free for eight weeks and
            see whether your baseline irritation improves.
          </p>

          <h2>Quick Reference: The Avoid List</h2>
          <p>
            Coconut Oil, Wheat Germ Oil, Cocoa Butter, Acetylated Lanolin, Isopropyl Myristate,
            Isopropyl Palmitate, Octyl Palmitate, Myristyl Myristate, Isocetyl Stearate, Algae
            Extract, and Carrageenan are the eleven names that cause the bulk of product-induced
            acne. Memorize them, scan for them, and check any unfamiliar ingredient against a
            comedogenic database before bringing a new product into your routine.
          </p>
        </>
      }
    />
  );
}
