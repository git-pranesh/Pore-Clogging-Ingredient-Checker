import GuideTemplate from "./GuideTemplate";

export default function HowToRead() {
  return (
    <GuideTemplate
      title="How to Read Skincare Ingredient Lists"
      description="Learn the basics of INCI names and how to scan ingredient lists for acne-triggering ingredients."
      path="/how-to-read-skincare-ingredients-list"
      content={
        <>
          <p>
            Ingredient lists on skincare and cosmetics packaging can look like a foreign language, but
            once you understand the rules behind them, you can scan a label in under sixty seconds and
            decide whether a product is worth trying. This guide walks through the international INCI
            naming system, how concentration is implied by ingredient order, the specific patterns that
            signal pore-clogging risk, and the quick checks acne-prone shoppers should run before they
            buy anything new.
          </p>

          <h2>What INCI Means and Why It Matters</h2>
          <p>
            INCI stands for International Nomenclature of Cosmetic Ingredients. It is a standardized
            naming system used in most major markets, including the United States, the European Union,
            the United Kingdom, Canada, Japan, and China, so the same ingredient appears with the same
            name on a serum from Seoul or a moisturizer from Los Angeles. Plant-derived ingredients are
            usually written with their Latin botanical name in parentheses, for example "Cocos
            Nucifera (Coconut) Oil," while synthetic compounds are listed with their chemical name like
            "Isopropyl Myristate." Knowing the INCI form lets you cross-check anything against a
            comedogenic database and avoid being fooled by friendly marketing names.
          </p>

          <h2>Order Reveals Concentration</h2>
          <p>
            Ingredients are listed in descending order of weight in the formula until each ingredient
            falls below 1%, after which they may be listed in any order. The first five to seven
            ingredients usually account for 80 to 95 percent of the product. That is where the active
            structural ingredients live: water, humectants, oils, butters, emulsifiers, and silicones.
            If a high-risk ingredient like Coconut Oil or Cocoa Butter sits in those top slots, the
            product is genuinely high-risk for acne-prone skin. If the same ingredient appears near the
            bottom, after fragrance and preservatives, it is almost certainly below 0.5% and far less
            likely to cause trouble.
          </p>

          <h2>Spotting the Cloggers Quickly</h2>
          <p>
            A few patterns flag pore-clogging risk in seconds. Watch for the words "Myristate,"
            "Palmitate," "Laurate," and "Stearate" attached to short alcohols like Isopropyl, Octyl, or
            Cetyl. These are the high-comedogenic esters used to give products a silky slip. Watch for
            heavy plant butters such as Cocoa, Shea, and Mango when they appear in the first half of
            the list. Watch for Coconut Oil, Wheat Germ Oil, and Acetylated Lanolin anywhere in the
            top ten ingredients. Anything that ends in "-stearate" or "-palmitate" deserves a second
            look on a label aimed at acne-prone skin.
          </p>

          <h2>Green Flags Worth Looking For</h2>
          <p>
            On the friendly side, Glycerin, Niacinamide, Hyaluronic Acid, Panthenol, Squalane, and
            Centella Asiatica are reliably non-comedogenic and actively supportive of acne-prone skin.
            Mineral UV filters like Zinc Oxide and Titanium Dioxide rate zero on the comedogenic
            scale. Lightweight silicones such as Dimethicone are also rated zero and form a breathable
            occlusive layer rather than a heavy plug.
          </p>

          <h2>A Sixty-Second Check You Can Run in Store</h2>
          <p>
            Flip the package over, scan the first ten ingredients, and look for any name on a known
            high-comedogenic list. If you find one in the top half, put the product back. If you find
            one in the bottom half, paste the full list into a checker like ours to see the full
            picture. Above all, give a new product four to six weeks before drawing conclusions, as
            comedones can take a full skin renewal cycle to surface.
          </p>
        </>
      }
    />
  );
}
