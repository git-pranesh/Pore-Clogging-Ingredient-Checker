import GuideTemplate from "./GuideTemplate";

export default function NonComedogenicSunscreen() {
  return (
    <GuideTemplate
      title="Non-Comedogenic Sunscreens for Acne-Prone Skin"
      description="Finding a sunscreen that won't break you out. Learn which UV filters and bases to avoid."
      path="/non-comedogenic-sunscreen-ingredients"
      content={
        <>
          <p>
            Sunscreen is the most important step in any skincare routine, especially if you are using
            acne treatments like tretinoin, adapalene, or chemical exfoliants that make your skin
            measurably more sensitive to sunlight. Yet finding a sunscreen that does not cause new
            breakouts is one of the most frequent struggles for acne-prone shoppers. The reason is
            rarely the UV filter itself; it is almost always the carrier base used to dissolve and
            stabilize the filter on your skin.
          </p>

          <h2>Physical Filters: Zinc Oxide and Titanium Dioxide</h2>
          <p>
            Physical (mineral) filters sit on top of the skin and reflect or scatter UV radiation.
            Both Zinc Oxide and Titanium Dioxide rate zero on the comedogenic scale and have mild
            anti-inflammatory properties that can actually soothe active breakouts. Zinc Oxide also
            offers excellent broad-spectrum protection against UVA, the longer-wavelength rays
            responsible for premature aging and post-inflammatory hyperpigmentation. The trade-off is
            cosmetic: high-percentage mineral sunscreens can leave a white cast, especially on deeper
            skin tones, although newer micronized and tinted formulas have closed much of that gap.
          </p>

          <h2>Chemical Filters: Not the Real Villain</h2>
          <p>
            Chemical filters such as Avobenzone, Octinoxate, Octisalate, Homosalate, and the newer
            Tinosorb and Uvinul filters are themselves not comedogenic. They are organic molecules
            that absorb UV light and convert it to a tiny amount of heat. The problem is that most
            chemical filters are oily, fat-soluble compounds that need a carrier oil or ester to
            dissolve evenly into a finished product. Formulators frequently reach for highly
            comedogenic carriers like Isopropyl Myristate, Isopropyl Palmitate, Octyl Palmitate, and
            Myristyl Myristate to do that job, and those ingredients are the actual cause of the
            breakouts users experience after switching sunscreens.
          </p>

          <h2>Reading a Sunscreen Label Quickly</h2>
          <p>
            Flip the bottle over and look at the inactive ingredients. Skip past the active filter
            section, which is regulated separately, and scan for any name with "myristate,"
            "palmitate," "stearate," or "laurate" attached to short alcohols. If you find them in the
            top half of the inactive list, the product is high risk regardless of how the front of
            the package is marketed. Look instead for sunscreens whose inactive bases lead with water,
            glycerin, dimethicone, cyclopentasiloxane, butyloctyl salicylate, or polyester polymers,
            all of which are non-comedogenic carriers that hold filters cleanly without seeding
            comedones.
          </p>

          <h2>Texture Cues That Help</h2>
          <p>
            Lightweight gel and fluid sunscreens almost always use silicone or aqueous bases that
            behave well on acne-prone skin. Heavy creams labeled as "moisturizing," "hydrating," or
            "for dry skin" are far more likely to use the comedogenic ester carriers above. Sport and
            "very water resistant" sunscreens also rely on heavier waxes and esters and should be
            scrutinized carefully. Tinted mineral sunscreens with iron oxides are an excellent
            choice for skin tones that struggle with white cast and offer the bonus of protection
            against visible blue light, which can drive hyperpigmentation in acne-prone skin.
          </p>

          <h2>Pairing Sunscreen with the Rest of Your Routine</h2>
          <p>
            Apply sunscreen as the final step of your morning routine, after your moisturizer and
            niacinamide serum. Use roughly two finger lengths for the face and neck. Reapply every
            two hours during prolonged sun exposure. If you find that even a non-comedogenic
            sunscreen breaks you out, consider a wider stick or powder reapplication option that uses
            a silicone or mineral-on-silica base.
          </p>
        </>
      }
    />
  );
}
