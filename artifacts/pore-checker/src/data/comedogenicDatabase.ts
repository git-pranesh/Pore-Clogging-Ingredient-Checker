export type Ingredient = {
  name: string;
  slug: string;
  aliases: string[];
  rating: 0 | 1 | 2 | 3 | 4 | 5;
  whyItClogs: string;
  saferAlternatives?: string[];
  category?: string;
};

export const comedogenicDatabase: Ingredient[] = [
  // ============================================================
  // PLANT OILS
  // ============================================================
  {
    name: "Coconut Oil",
    slug: "coconut-oil",
    aliases: ["cocos nucifera oil", "coconut oil", "virgin coconut oil"],
    rating: 4,
    whyItClogs: "Roughly 50% lauric acid (C12) and 18% myristic acid (C14), both short-chain saturated fatty acids that solidify on the skin and trap sebum and dead corneocytes inside the follicle.",
    saferAlternatives: ["Squalane", "Jojoba Oil", "Hemp Seed Oil", "Argan Oil"],
    category: "oil"
  },
  {
    name: "Wheat Germ Oil",
    slug: "wheat-germ-oil",
    aliases: ["triticum vulgare germ oil", "wheat germ oil"],
    rating: 5,
    whyItClogs: "Extremely high in linoleic and palmitic acids combined with a thick, sticky consistency that resists absorption, consistently rated the most comedogenic plant oil on the Fulton scale.",
    saferAlternatives: ["Sunflower Oil", "Safflower Oil", "Hemp Seed Oil"],
    category: "oil"
  },
  {
    name: "Flaxseed Oil",
    slug: "flaxseed-oil",
    aliases: ["linum usitatissimum seed oil", "flaxseed oil", "flax seed oil"],
    rating: 4,
    whyItClogs: "Rich in alpha-linolenic acid which oxidizes rapidly, generating peroxides that thicken the oil and form an occlusive, pore-trapping film on the skin surface.",
    saferAlternatives: ["Hemp Seed Oil", "Rosehip Oil", "Squalane"],
    category: "oil"
  },
  {
    name: "Linseed Oil",
    slug: "linseed-oil",
    aliases: ["linum usitatissimum seed oil", "linseed oil"],
    rating: 4,
    whyItClogs: "The cosmetic-grade synonym for flaxseed oil, equally prone to oxidation and follicular plugging due to its omega-3 dominant unsaturated profile.",
    saferAlternatives: ["Rosehip Oil", "Hemp Seed Oil", "Squalane"],
    category: "oil"
  },
  {
    name: "Soybean Oil",
    slug: "soybean-oil",
    aliases: ["glycine soja oil", "soybean oil", "soya oil"],
    rating: 3,
    whyItClogs: "Contains roughly 25% oleic acid alongside palmitic acid, a combination known to disturb the skin barrier and increase the chance of follicular plugging in acne-prone users.",
    saferAlternatives: ["Sunflower Oil", "Safflower Oil", "Hemp Seed Oil"],
    category: "oil"
  },
  {
    name: "Peach Kernel Oil",
    slug: "peach-kernel-oil",
    aliases: ["prunus persica kernel oil", "peach kernel oil"],
    rating: 4,
    whyItClogs: "Heavy oleic-acid dominant oil (~60%) that thins the lipid barrier and lingers on the skin surface, making it a frequent trigger of closed comedones.",
    saferAlternatives: ["Rosehip Oil", "Squalane", "Hemp Seed Oil"],
    category: "oil"
  },
  {
    name: "Avocado Oil",
    slug: "avocado-oil",
    aliases: ["persea gratissima oil", "avocado oil"],
    rating: 3,
    whyItClogs: "Approximately 70% oleic acid plus a heavy, slow-spreading texture that can build up in pores, especially when used as a standalone facial oil.",
    saferAlternatives: ["Squalane", "Argan Oil", "Jojoba Oil"],
    category: "oil"
  },
  {
    name: "Olive Oil",
    slug: "olive-oil",
    aliases: ["olea europaea fruit oil", "olive oil"],
    rating: 2,
    whyItClogs: "High oleic acid content (~70%) can disrupt the lipid lamellae of the stratum corneum; mildly comedogenic for very acne-prone users but tolerated by many.",
    saferAlternatives: ["Squalane", "Jojoba Oil"],
    category: "oil"
  },
  {
    name: "Almond Oil",
    slug: "almond-oil",
    aliases: ["prunus amygdalus dulcis oil", "sweet almond oil", "almond oil"],
    rating: 2,
    whyItClogs: "Light but high in oleic acid (~65%); generally well tolerated yet can occasionally aggravate breakouts in oily skin types.",
    saferAlternatives: ["Squalane", "Jojoba Oil"],
    category: "oil"
  },
  {
    name: "Sweet Almond Oil",
    slug: "sweet-almond-oil",
    aliases: ["prunus amygdalus dulcis oil", "sweet almond oil"],
    rating: 2,
    whyItClogs: "Identical to cosmetic almond oil; its oleic-rich profile can soften the barrier and occasionally cause comedones on facial skin.",
    saferAlternatives: ["Squalane", "Jojoba Oil"],
    category: "oil"
  },
  {
    name: "Jojoba Oil",
    slug: "jojoba-oil",
    aliases: ["simmondsia chinensis seed oil", "jojoba oil", "jojoba"],
    rating: 2,
    whyItClogs: "Technically a liquid wax ester chemically similar to human sebum; absorbs well but its waxy nature gives it a low but non-zero comedogenic risk.",
    saferAlternatives: ["Squalane", "Hemp Seed Oil"],
    category: "oil"
  },
  {
    name: "Rosehip Oil",
    slug: "rosehip-oil",
    aliases: ["rosa canina fruit oil", "rosa moschata seed oil", "rosehip oil", "rose hip oil"],
    rating: 1,
    whyItClogs: "Dry-feel oil rich in linoleic acid and trans-retinoic-acid precursors; absorbs quickly with minimal occlusivity, very low clogging risk.",
    category: "oil"
  },
  {
    name: "Argan Oil",
    slug: "argan-oil",
    aliases: ["argania spinosa kernel oil", "argan oil"],
    rating: 0,
    whyItClogs: "Balanced linoleic-to-oleic ratio and high tocopherol content; absorbs cleanly with no documented comedogenic activity.",
    category: "oil"
  },
  {
    name: "Sunflower Oil",
    slug: "sunflower-oil",
    aliases: ["helianthus annuus seed oil", "sunflower oil", "sunflower seed oil"],
    rating: 0,
    whyItClogs: "High-linoleic strains support the skin barrier and have been clinically shown to be non-comedogenic and anti-inflammatory.",
    category: "oil"
  },
  {
    name: "Safflower Oil",
    slug: "safflower-oil",
    aliases: ["carthamus tinctorius seed oil", "safflower oil"],
    rating: 0,
    whyItClogs: "One of the highest-linoleic-acid plant oils available; replenishes barrier lipids without clogging follicles.",
    category: "oil"
  },
  {
    name: "Grapeseed Oil",
    slug: "grapeseed-oil",
    aliases: ["vitis vinifera seed oil", "grapeseed oil", "grape seed oil"],
    rating: 1,
    whyItClogs: "Lightweight, ~70% linoleic acid; minimal occlusivity but slight residue can be an issue for the most acne-prone users.",
    category: "oil"
  },
  {
    name: "Hemp Seed Oil",
    slug: "hemp-seed-oil",
    aliases: ["cannabis sativa seed oil", "hemp seed oil", "hempseed oil"],
    rating: 0,
    whyItClogs: "Ideal 3:1 omega-6/omega-3 ratio dominated by linoleic acid; absorbs readily and is widely recommended for acne-prone skin.",
    category: "oil"
  },
  {
    name: "Sea Buckthorn Oil",
    slug: "sea-buckthorn-oil",
    aliases: ["hippophae rhamnoides oil", "sea buckthorn oil"],
    rating: 1,
    whyItClogs: "High in linoleic acid and antioxidant carotenoids; very low comedogenic risk although the deep orange color can stain skin if undiluted.",
    category: "oil"
  },
  {
    name: "Marula Oil",
    slug: "marula-oil",
    aliases: ["sclerocarya birrea seed oil", "marula oil"],
    rating: 1,
    whyItClogs: "Predominantly oleic acid but extremely lightweight with high oxidative stability, giving it only a marginal pore-clogging risk.",
    category: "oil"
  },
  {
    name: "Camellia Oil",
    slug: "camellia-oil",
    aliases: ["camellia oleifera seed oil", "camellia oil", "tsubaki oil"],
    rating: 1,
    whyItClogs: "Light, oleic-rich oil that absorbs cleanly; minor risk for very sensitive acne-prone skin.",
    category: "oil"
  },
  {
    name: "Evening Primrose Oil",
    slug: "evening-primrose-oil",
    aliases: ["oenothera biennis oil", "evening primrose oil"],
    rating: 2,
    whyItClogs: "Rich in gamma-linolenic acid which benefits the barrier, but the oil is dense and slow-absorbing, occasionally triggering bumps.",
    saferAlternatives: ["Hemp Seed Oil", "Rosehip Oil"],
    category: "oil"
  },
  {
    name: "Borage Seed Oil",
    slug: "borage-seed-oil",
    aliases: ["borago officinalis seed oil", "borage oil", "borage seed oil"],
    rating: 2,
    whyItClogs: "Highest natural source of GLA but heavy texture and oxidation tendency give it moderate clogging potential when used neat.",
    saferAlternatives: ["Hemp Seed Oil", "Squalane"],
    category: "oil"
  },
  {
    name: "Kukui Nut Oil",
    slug: "kukui-nut-oil",
    aliases: ["aleurites moluccana seed oil", "kukui nut oil"],
    rating: 2,
    whyItClogs: "Contains both linoleic and alpha-linolenic acids; light but oxidizes quickly which can lead to follicle irritation.",
    saferAlternatives: ["Hemp Seed Oil", "Rosehip Oil"],
    category: "oil"
  },
  {
    name: "Tamanu Oil",
    slug: "tamanu-oil",
    aliases: ["calophyllum inophyllum seed oil", "tamanu oil"],
    rating: 2,
    whyItClogs: "Thick, dark oil with antibacterial calophyllolide; potentially helpful for healing but its viscosity limits use to spot treatments.",
    saferAlternatives: ["Squalane", "Rosehip Oil"],
    category: "oil"
  },
  {
    name: "Castor Oil",
    slug: "castor-oil",
    aliases: ["ricinus communis seed oil", "castor oil"],
    rating: 1,
    whyItClogs: "Dominantly ricinoleic acid; humectant and surface-occlusive but small molecular size keeps comedogenicity low for most.",
    category: "oil"
  },
  {
    name: "Macadamia Nut Oil",
    slug: "macadamia-nut-oil",
    aliases: ["macadamia ternifolia seed oil", "macadamia nut oil"],
    rating: 2,
    whyItClogs: "Mostly oleic and palmitoleic acids; closely mimics sebum and absorbs well, but oleic content gives moderate risk.",
    saferAlternatives: ["Squalane", "Jojoba Oil"],
    category: "oil"
  },
  {
    name: "Sesame Oil",
    slug: "sesame-oil",
    aliases: ["sesamum indicum seed oil", "sesame oil"],
    rating: 2,
    whyItClogs: "Balanced oleic/linoleic profile but heavier viscosity; can slowly build up in pores when used as a facial massage oil.",
    saferAlternatives: ["Sunflower Oil", "Squalane"],
    category: "oil"
  },
  {
    name: "Apricot Kernel Oil",
    slug: "apricot-kernel-oil",
    aliases: ["prunus armeniaca kernel oil", "apricot kernel oil"],
    rating: 2,
    whyItClogs: "High oleic acid (~60%) gives a silky finish but mild clogging tendency on acne-prone skin.",
    saferAlternatives: ["Squalane", "Jojoba Oil"],
    category: "oil"
  },
  {
    name: "Pumpkin Seed Oil",
    slug: "pumpkin-seed-oil",
    aliases: ["cucurbita pepo seed oil", "pumpkin seed oil"],
    rating: 2,
    whyItClogs: "Roughly equal linoleic and oleic acids; antioxidant-rich but heavy and slow-absorbing.",
    saferAlternatives: ["Hemp Seed Oil", "Rosehip Oil"],
    category: "oil"
  },
  {
    name: "Black Currant Seed Oil",
    slug: "black-currant-seed-oil",
    aliases: ["ribes nigrum seed oil", "black currant seed oil"],
    rating: 1,
    whyItClogs: "Source of GLA and stearidonic acid; light texture with low pore-clogging risk.",
    category: "oil"
  },
  {
    name: "Mineral Oil",
    slug: "mineral-oil",
    aliases: ["paraffinum liquidum", "mineral oil", "white mineral oil"],
    rating: 1,
    whyItClogs: "Cosmetic-grade mineral oil is highly refined and inert with very large molecular size that sits on the surface but does not penetrate follicles.",
    category: "emollient"
  },
  {
    name: "Petrolatum",
    slug: "petrolatum",
    aliases: ["petrolatum", "petroleum jelly", "white petrolatum"],
    rating: 1,
    whyItClogs: "Inert hydrocarbon mixture with molecules too large to enter pores; occlusive but not comedogenic in standard formulations.",
    category: "emollient"
  },
  {
    name: "Squalane",
    slug: "squalane",
    aliases: ["squalane", "olive squalane", "sugarcane squalane"],
    rating: 1,
    whyItClogs: "Saturated, biomimetic hydrocarbon nearly identical to skin's own squalene; absorbs cleanly with minimal pore-clogging potential.",
    category: "emollient"
  },
  {
    name: "Squalene",
    slug: "squalene",
    aliases: ["squalene", "shark squalene"],
    rating: 1,
    whyItClogs: "Unsaturated form; oxidizes more readily than squalane and oxidized squalene has been linked to comedone formation.",
    category: "emollient"
  },

  // ============================================================
  // BUTTERS
  // ============================================================
  {
    name: "Cocoa Butter",
    slug: "cocoa-butter",
    aliases: ["theobroma cacao seed butter", "cocoa butter"],
    rating: 4,
    whyItClogs: "Solid at room temperature with high palmitic and stearic acid content that creates a thick, occlusive film likely to trap sebum.",
    saferAlternatives: ["Shea Butter", "Mango Butter", "Squalane"],
    category: "butter"
  },
  {
    name: "Shea Butter",
    slug: "shea-butter",
    aliases: ["butyrospermum parkii butter", "shea butter"],
    rating: 0,
    whyItClogs: "High in stearic and oleic acids plus unsaponifiables; surprisingly non-comedogenic and supports barrier repair.",
    category: "butter"
  },
  {
    name: "Mango Butter",
    slug: "mango-butter",
    aliases: ["mangifera indica seed butter", "mango butter"],
    rating: 0,
    whyItClogs: "Light, dry-feel butter rich in stearic and oleic acids; does not block pores in standard concentrations.",
    category: "butter"
  },
  {
    name: "Kokum Butter",
    slug: "kokum-butter",
    aliases: ["garcinia indica seed butter", "kokum butter"],
    rating: 1,
    whyItClogs: "Hard, stable butter dominated by stearic acid; minimal comedogenic risk and useful as a structural emollient.",
    category: "butter"
  },
  {
    name: "Mowrah Butter",
    slug: "mowrah-butter",
    aliases: ["madhuca longifolia seed butter", "mowrah butter"],
    rating: 2,
    whyItClogs: "Soft palmitic-rich butter with mild occlusivity; can contribute to clogged pores when layered with other heavy oils.",
    saferAlternatives: ["Shea Butter", "Mango Butter"],
    category: "butter"
  },
  {
    name: "Illipe Butter",
    slug: "illipe-butter",
    aliases: ["shorea stenoptera seed butter", "illipe butter"],
    rating: 1,
    whyItClogs: "Hard butter chemically close to cocoa butter but lower in palmitic acid; limited clogging risk in most formulations.",
    category: "butter"
  },
  {
    name: "Murumuru Butter",
    slug: "murumuru-butter",
    aliases: ["astrocaryum murumuru seed butter", "murumuru butter"],
    rating: 2,
    whyItClogs: "Contains lauric and myristic acids (similar to coconut), giving it moderate comedogenic potential despite a luxurious skin feel.",
    saferAlternatives: ["Shea Butter", "Mango Butter"],
    category: "butter"
  },
  {
    name: "Cupuacu Butter",
    slug: "cupuacu-butter",
    aliases: ["theobroma grandiflorum seed butter", "cupuacu butter", "cupuaçu butter"],
    rating: 1,
    whyItClogs: "Highly humectant butter with phytosterols; large molecular structure keeps it largely on the surface without clogging.",
    category: "butter"
  },
  {
    name: "Tucuma Butter",
    slug: "tucuma-butter",
    aliases: ["astrocaryum tucuma seed butter", "tucuma butter"],
    rating: 2,
    whyItClogs: "Lauric-rich palm-family butter with moderate occlusivity similar to murumuru.",
    saferAlternatives: ["Shea Butter", "Mango Butter"],
    category: "butter"
  },
  {
    name: "Sal Butter",
    slug: "sal-butter",
    aliases: ["shorea robusta seed butter", "sal butter"],
    rating: 1,
    whyItClogs: "Stearic-acid dominant hard butter; structural ingredient with low clogging potential.",
    category: "butter"
  },

  // ============================================================
  // ESTERS
  // ============================================================
  {
    name: "Isopropyl Myristate",
    slug: "isopropyl-myristate",
    aliases: ["isopropyl myristate", "ipm"],
    rating: 5,
    whyItClogs: "Synthetic ester of isopropanol and myristic acid; small molecular size penetrates the follicle quickly and is the textbook comedogenic trigger.",
    saferAlternatives: ["Squalane", "Caprylic/Capric Triglyceride", "Dimethicone"],
    category: "ester"
  },
  {
    name: "Isopropyl Palmitate",
    slug: "isopropyl-palmitate",
    aliases: ["isopropyl palmitate", "ipp"],
    rating: 4,
    whyItClogs: "Lightweight ester with strong follicular penetration; second only to IPM as a clinically demonstrated pore-clogger.",
    saferAlternatives: ["Squalane", "Dimethicone", "Caprylic/Capric Triglyceride"],
    category: "ester"
  },
  {
    name: "Isopropyl Isostearate",
    slug: "isopropyl-isostearate",
    aliases: ["isopropyl isostearate"],
    rating: 5,
    whyItClogs: "Branched-chain isopropyl ester rated highly comedogenic in rabbit-ear assays; rapidly enters follicles and resists clearance.",
    saferAlternatives: ["Squalane", "Dimethicone", "Caprylic/Capric Triglyceride"],
    category: "ester"
  },
  {
    name: "Myristyl Myristate",
    slug: "myristyl-myristate",
    aliases: ["myristyl myristate"],
    rating: 5,
    whyItClogs: "Wax ester combining two myristic-acid units; solidifies in pores and ranks among the highest comedogenic scores reported.",
    saferAlternatives: ["Cetyl Esters", "Squalane", "Caprylic/Capric Triglyceride"],
    category: "ester"
  },
  {
    name: "Myristyl Lactate",
    slug: "myristyl-lactate",
    aliases: ["myristyl lactate"],
    rating: 4,
    whyItClogs: "Light, silky ester used in foundations; strong follicular penetration drives high comedogenic ratings.",
    saferAlternatives: ["Squalane", "Dimethicone"],
    category: "ester"
  },
  {
    name: "Isocetyl Stearate",
    slug: "isocetyl-stearate",
    aliases: ["isocetyl stearate"],
    rating: 4,
    whyItClogs: "Branched-chain ester with high spreading rate that penetrates follicles, frequently flagged in comedogenic ingredient lists.",
    saferAlternatives: ["Squalane", "Dimethicone"],
    category: "ester"
  },
  {
    name: "Octyl Palmitate",
    slug: "octyl-palmitate",
    aliases: ["octyl palmitate", "ethylhexyl palmitate", "2-ethylhexyl palmitate"],
    rating: 4,
    whyItClogs: "Synthetic ester of 2-ethylhexanol and palmitic acid; lightweight feel but penetrates follicles and causes comedones in clinical models.",
    saferAlternatives: ["Squalane", "Dimethicone", "Caprylic/Capric Triglyceride"],
    category: "ester"
  },
  {
    name: "Ethylhexyl Palmitate",
    slug: "ethylhexyl-palmitate",
    aliases: ["ethylhexyl palmitate", "octyl palmitate"],
    rating: 4,
    whyItClogs: "INCI name for octyl palmitate; same comedogenic mechanism via small ester molecules entering follicles.",
    saferAlternatives: ["Squalane", "Dimethicone", "Caprylic/Capric Triglyceride"],
    category: "ester"
  },
  {
    name: "Decyl Oleate",
    slug: "decyl-oleate",
    aliases: ["decyl oleate"],
    rating: 3,
    whyItClogs: "Combines decyl alcohol with oleic acid; spreads easily but lingers in pores, contributing to medium-level clogging.",
    saferAlternatives: ["Squalane", "Caprylic/Capric Triglyceride"],
    category: "ester"
  },
  {
    name: "Butyl Stearate",
    slug: "butyl-stearate",
    aliases: ["butyl stearate"],
    rating: 3,
    whyItClogs: "Lubricant ester used in lipsticks and creams; medium comedogenic rating due to follicular penetration.",
    saferAlternatives: ["Squalane", "Caprylic/Capric Triglyceride"],
    category: "ester"
  },
  {
    name: "Glyceryl Stearate SE",
    slug: "glyceryl-stearate-se",
    aliases: ["glyceryl stearate se", "glyceryl monostearate se"],
    rating: 3,
    whyItClogs: "Self-emulsifying version contains soap (sodium or potassium stearate) which can leave a heavier residue and clog pores.",
    saferAlternatives: ["Glyceryl Stearate", "Cetearyl Olivate"],
    category: "ester"
  },
  {
    name: "Glyceryl Stearate",
    slug: "glyceryl-stearate",
    aliases: ["glyceryl stearate", "glyceryl monostearate"],
    rating: 1,
    whyItClogs: "Standard non-self-emulsifying form is a mild emollient/co-emulsifier with minimal comedogenic risk.",
    category: "ester"
  },
  {
    name: "PPG-2 Myristyl Ether Propionate",
    slug: "ppg-2-myristyl-ether-propionate",
    aliases: ["ppg-2 myristyl ether propionate"],
    rating: 4,
    whyItClogs: "Heavy, glossy ester used in color cosmetics; combines myristyl and propionate moieties known to plug follicles.",
    saferAlternatives: ["Squalane", "Caprylic/Capric Triglyceride"],
    category: "ester"
  },
  {
    name: "Caprylic/Capric Triglyceride",
    slug: "caprylic-capric-triglyceride",
    aliases: ["caprylic/capric triglyceride", "fractionated coconut oil", "mct oil"],
    rating: 1,
    whyItClogs: "Refined medium-chain triglycerides from coconut/palm; light, stable, and generally well tolerated by acne-prone skin.",
    category: "ester"
  },
  {
    name: "Cetyl Esters",
    slug: "cetyl-esters",
    aliases: ["cetyl esters", "synthetic spermaceti"],
    rating: 1,
    whyItClogs: "Wax-like ester blend that thickens lotions; low comedogenic rating and used as a vegan spermaceti substitute.",
    category: "ester"
  },
  {
    name: "Cetearyl Ethylhexanoate",
    slug: "cetearyl-ethylhexanoate",
    aliases: ["cetearyl ethylhexanoate", "cetearyl octanoate"],
    rating: 2,
    whyItClogs: "Light dry-touch emollient; minor follicular penetration but generally low risk.",
    saferAlternatives: ["Squalane", "Dimethicone"],
    category: "ester"
  },
  {
    name: "Coco-Caprylate/Caprate",
    slug: "coco-caprylate-caprate",
    aliases: ["coco-caprylate/caprate", "coco caprylate"],
    rating: 1,
    whyItClogs: "Plant-derived silicone alternative with very low molecular weight; absorbs cleanly with negligible clogging.",
    category: "ester"
  },
  {
    name: "Lanolin",
    slug: "lanolin",
    aliases: ["lanolin", "wool wax", "wool grease"],
    rating: 3,
    whyItClogs: "Waxy sheep-wool secretion containing complex sterol esters that closely mimic skin lipids; high occlusivity makes it moderately comedogenic.",
    saferAlternatives: ["Shea Butter", "Squalane", "Mango Butter"],
    category: "ester"
  },
  {
    name: "Acetylated Lanolin",
    slug: "acetylated-lanolin",
    aliases: ["acetylated lanolin"],
    rating: 4,
    whyItClogs: "Acetylation increases occlusivity and follicular penetration, raising the comedogenic rating well above plain lanolin.",
    saferAlternatives: ["Squalane", "Shea Butter", "Caprylic/Capric Triglyceride"],
    category: "ester"
  },
  {
    name: "Acetylated Lanolin Alcohol",
    slug: "acetylated-lanolin-alcohol",
    aliases: ["acetylated lanolin alcohol"],
    rating: 4,
    whyItClogs: "Esterified lanolin alcohol fraction; heavy and highly occlusive, frequently linked to acne flare-ups in foundations.",
    saferAlternatives: ["Squalane", "Caprylic/Capric Triglyceride"],
    category: "ester"
  },

  // ============================================================
  // FATTY ACIDS
  // ============================================================
  {
    name: "Lauric Acid",
    slug: "lauric-acid",
    aliases: ["lauric acid", "dodecanoic acid"],
    rating: 4,
    whyItClogs: "C12 saturated fatty acid that solidifies near skin temperature and forms occlusive plugs; primary comedogenic component of coconut oil.",
    saferAlternatives: ["Linoleic Acid", "Oleic Acid (low %)", "Squalane"],
    category: "fatty-acid"
  },
  {
    name: "Myristic Acid",
    slug: "myristic-acid",
    aliases: ["myristic acid", "tetradecanoic acid"],
    rating: 5,
    whyItClogs: "C14 saturated fatty acid with very high comedogenic score; forms hard wax plugs in pores when present in concentration.",
    saferAlternatives: ["Stearic Acid (low %)", "Linoleic Acid"],
    category: "fatty-acid"
  },
  {
    name: "Palmitic Acid",
    slug: "palmitic-acid",
    aliases: ["palmitic acid", "hexadecanoic acid"],
    rating: 2,
    whyItClogs: "C16 saturated fatty acid; main fatty acid in cocoa butter and a known but moderate contributor to follicle blockage.",
    saferAlternatives: ["Linoleic Acid"],
    category: "fatty-acid"
  },
  {
    name: "Stearic Acid",
    slug: "stearic-acid",
    aliases: ["stearic acid", "octadecanoic acid"],
    rating: 2,
    whyItClogs: "C18 saturated fatty acid commonly used as an emulsifier; mildly comedogenic at high concentrations.",
    saferAlternatives: ["Cetearyl Alcohol", "Glyceryl Stearate"],
    category: "fatty-acid"
  },
  {
    name: "Oleic Acid",
    slug: "oleic-acid",
    aliases: ["oleic acid", "cis-9-octadecenoic acid"],
    rating: 2,
    whyItClogs: "Monounsaturated C18 fatty acid that disrupts the lipid barrier; can promote comedone formation by altering follicular keratinization.",
    saferAlternatives: ["Linoleic Acid", "Squalane"],
    category: "fatty-acid"
  },
  {
    name: "Linoleic Acid",
    slug: "linoleic-acid",
    aliases: ["linoleic acid", "cis-9,12-octadecadienoic acid"],
    rating: 0,
    whyItClogs: "Essential omega-6 fatty acid that acne-prone skin is often deficient in; supplementing topically helps normalize follicular sebum.",
    category: "fatty-acid"
  },
  {
    name: "Linolenic Acid",
    slug: "linolenic-acid",
    aliases: ["linolenic acid", "alpha-linolenic acid"],
    rating: 0,
    whyItClogs: "Omega-3 fatty acid with anti-inflammatory effects; non-comedogenic but oxidatively unstable.",
    category: "fatty-acid"
  },
  {
    name: "Behenic Acid",
    slug: "behenic-acid",
    aliases: ["behenic acid", "docosanoic acid"],
    rating: 1,
    whyItClogs: "Long-chain C22 saturated fatty acid; large molecular size keeps it on the surface with low pore-clogging potential.",
    category: "fatty-acid"
  },

  // ============================================================
  // FATTY ALCOHOLS
  // ============================================================
  {
    name: "Cetyl Alcohol",
    slug: "cetyl-alcohol",
    aliases: ["cetyl alcohol", "1-hexadecanol"],
    rating: 2,
    whyItClogs: "Long-chain fatty alcohol used to thicken creams; mildly comedogenic only at high concentrations.",
    saferAlternatives: ["Cetearyl Alcohol", "Behenyl Alcohol"],
    category: "fatty-alcohol"
  },
  {
    name: "Cetearyl Alcohol",
    slug: "cetearyl-alcohol",
    aliases: ["cetearyl alcohol", "cetostearyl alcohol"],
    rating: 2,
    whyItClogs: "Blend of cetyl and stearyl alcohols; common emulsion stabilizer with low to moderate clogging risk.",
    saferAlternatives: ["Behenyl Alcohol", "Glyceryl Stearate"],
    category: "fatty-alcohol"
  },
  {
    name: "Stearyl Alcohol",
    slug: "stearyl-alcohol",
    aliases: ["stearyl alcohol", "1-octadecanol"],
    rating: 2,
    whyItClogs: "C18 fatty alcohol; thickener and co-emulsifier with mild comedogenic potential at high levels.",
    saferAlternatives: ["Behenyl Alcohol", "Cetearyl Alcohol"],
    category: "fatty-alcohol"
  },
  {
    name: "Behenyl Alcohol",
    slug: "behenyl-alcohol",
    aliases: ["behenyl alcohol", "docosanol"],
    rating: 1,
    whyItClogs: "C22 fatty alcohol; large molecule keeps it on the skin surface with very low pore-clogging risk.",
    category: "fatty-alcohol"
  },
  {
    name: "Lauryl Alcohol",
    slug: "lauryl-alcohol",
    aliases: ["lauryl alcohol", "1-dodecanol"],
    rating: 3,
    whyItClogs: "Short C12 fatty alcohol; small enough to enter follicles, with notable clogging potential.",
    saferAlternatives: ["Cetearyl Alcohol", "Behenyl Alcohol"],
    category: "fatty-alcohol"
  },
  {
    name: "Myristyl Alcohol",
    slug: "myristyl-alcohol",
    aliases: ["myristyl alcohol", "1-tetradecanol"],
    rating: 3,
    whyItClogs: "C14 fatty alcohol corresponding to myristic acid; similarly comedogenic with strong follicular affinity.",
    saferAlternatives: ["Cetearyl Alcohol", "Behenyl Alcohol"],
    category: "fatty-alcohol"
  },
  {
    name: "Lanolin Alcohol",
    slug: "lanolin-alcohol",
    aliases: ["lanolin alcohol", "wool alcohols"],
    rating: 2,
    whyItClogs: "Sterol-rich fraction of lanolin used for moisturization; mildly occlusive and a potential allergen as well as a low-grade clogger.",
    saferAlternatives: ["Cholesterol", "Squalane"],
    category: "fatty-alcohol"
  },
  {
    name: "Cholesterol",
    slug: "cholesterol",
    aliases: ["cholesterol"],
    rating: 0,
    whyItClogs: "Native barrier lipid component used at low levels; restores ceramide ratio and is non-comedogenic.",
    category: "fatty-alcohol"
  },

  // ============================================================
  // SILICONES
  // ============================================================
  {
    name: "Dimethicone",
    slug: "dimethicone",
    aliases: ["dimethicone", "polydimethylsiloxane", "pdms"],
    rating: 1,
    whyItClogs: "Inert silicone polymer; molecules are too large to penetrate follicles, but heavy buildup over occlusive layers can theoretically trap debris.",
    category: "silicone"
  },
  {
    name: "Cyclomethicone",
    slug: "cyclomethicone",
    aliases: ["cyclomethicone", "cyclopentasiloxane"],
    rating: 1,
    whyItClogs: "Volatile silicone that evaporates after application; leaves no occlusive residue and is essentially non-comedogenic.",
    category: "silicone"
  },
  {
    name: "Cyclopentasiloxane",
    slug: "cyclopentasiloxane",
    aliases: ["cyclopentasiloxane", "d5", "decamethylcyclopentasiloxane"],
    rating: 1,
    whyItClogs: "Five-ring volatile silicone; flashes off the skin within minutes leaving dry feel without clogging.",
    category: "silicone"
  },
  {
    name: "Cyclohexasiloxane",
    slug: "cyclohexasiloxane",
    aliases: ["cyclohexasiloxane", "d6"],
    rating: 1,
    whyItClogs: "Six-ring volatile silicone with slightly slower evaporation; minimal pore-clogging risk.",
    category: "silicone"
  },
  {
    name: "Dimethiconol",
    slug: "dimethiconol",
    aliases: ["dimethiconol"],
    rating: 1,
    whyItClogs: "Hydroxyl-terminated silicone; provides slip and hair-like shine without entering follicles.",
    category: "silicone"
  },
  {
    name: "Phenyl Trimethicone",
    slug: "phenyl-trimethicone",
    aliases: ["phenyl trimethicone"],
    rating: 1,
    whyItClogs: "Glossy silicone used in foundations and serums; large molecular weight prevents follicular penetration.",
    category: "silicone"
  },

  // ============================================================
  // HUMECTANTS
  // ============================================================
  {
    name: "Glycerin",
    slug: "glycerin",
    aliases: ["glycerin", "glycerine", "glycerol"],
    rating: 0,
    whyItClogs: "Water-soluble three-carbon polyol that draws moisture into the stratum corneum; cannot physically clog pores.",
    category: "humectant"
  },
  {
    name: "Hyaluronic Acid",
    slug: "hyaluronic-acid",
    aliases: ["hyaluronic acid", "ha"],
    rating: 0,
    whyItClogs: "Large hydrophilic polysaccharide that holds water at the skin surface; non-occlusive and non-comedogenic.",
    category: "humectant"
  },
  {
    name: "Sodium Hyaluronate",
    slug: "sodium-hyaluronate",
    aliases: ["sodium hyaluronate"],
    rating: 0,
    whyItClogs: "Salt form of hyaluronic acid with smaller molecular weight; purely hydrating with no clogging potential.",
    category: "humectant"
  },
  {
    name: "Sodium PCA",
    slug: "sodium-pca",
    aliases: ["sodium pca", "sodium pyrrolidone carboxylate"],
    rating: 0,
    whyItClogs: "Component of skin's natural moisturizing factor; water-soluble humectant with no occlusivity.",
    category: "humectant"
  },
  {
    name: "Urea",
    slug: "urea",
    aliases: ["urea", "carbamide"],
    rating: 0,
    whyItClogs: "Small humectant and mild keratolytic at higher concentrations; never associated with clogging.",
    category: "humectant"
  },
  {
    name: "Betaine",
    slug: "betaine",
    aliases: ["betaine", "trimethylglycine"],
    rating: 0,
    whyItClogs: "Sugar-beet derived osmolyte humectant; water-soluble and inert toward pores.",
    category: "humectant"
  },
  {
    name: "Propanediol",
    slug: "propanediol",
    aliases: ["propanediol", "1,3-propanediol"],
    rating: 0,
    whyItClogs: "Plant-derived glycol used as a humectant and solvent; non-comedogenic.",
    category: "humectant"
  },
  {
    name: "Butylene Glycol",
    slug: "butylene-glycol",
    aliases: ["butylene glycol", "1,3-butanediol"],
    rating: 0,
    whyItClogs: "Lightweight humectant and solvent; water-soluble and pore-safe.",
    category: "humectant"
  },
  {
    name: "Propylene Glycol",
    slug: "propylene-glycol",
    aliases: ["propylene glycol", "1,2-propanediol"],
    rating: 0,
    whyItClogs: "Common humectant solvent; non-comedogenic though occasionally a sensitizer.",
    category: "humectant"
  },
  {
    name: "Sorbitol",
    slug: "sorbitol",
    aliases: ["sorbitol", "d-glucitol"],
    rating: 0,
    whyItClogs: "Sugar alcohol humectant; water-soluble and non-clogging.",
    category: "humectant"
  },
  {
    name: "Trehalose",
    slug: "trehalose",
    aliases: ["trehalose"],
    rating: 0,
    whyItClogs: "Disaccharide humectant with cell-protective properties; pore-safe.",
    category: "humectant"
  },
  {
    name: "Beta-Glucan",
    slug: "beta-glucan",
    aliases: ["beta-glucan", "beta glucan", "1,3-beta-glucan"],
    rating: 0,
    whyItClogs: "Polysaccharide humectant from oats or yeast; soothing, non-comedogenic.",
    category: "humectant"
  },
  {
    name: "Pentylene Glycol",
    slug: "pentylene-glycol",
    aliases: ["pentylene glycol"],
    rating: 0,
    whyItClogs: "Multifunctional glycol humectant and antimicrobial booster; non-comedogenic.",
    category: "humectant"
  },
  {
    name: "Hexylene Glycol",
    slug: "hexylene-glycol",
    aliases: ["hexylene glycol"],
    rating: 0,
    whyItClogs: "Solvent and humectant glycol; water-soluble and pore-safe.",
    category: "humectant"
  },

  // ============================================================
  // ACTIVES
  // ============================================================
  {
    name: "Niacinamide",
    slug: "niacinamide",
    aliases: ["niacinamide", "nicotinamide", "vitamin b3"],
    rating: 0,
    whyItClogs: "Water-soluble vitamin B3; reduces sebum production and inflammation rather than blocking pores.",
    category: "active"
  },
  {
    name: "Retinol",
    slug: "retinol",
    aliases: ["retinol", "vitamin a"],
    rating: 1,
    whyItClogs: "Vitamin A alcohol; oil-soluble but used in tiny percentages and increases cell turnover, often clearing rather than causing comedones.",
    category: "active"
  },
  {
    name: "Retinaldehyde",
    slug: "retinaldehyde",
    aliases: ["retinaldehyde", "retinal"],
    rating: 1,
    whyItClogs: "More potent retinoid intermediate; non-comedogenic with significant anti-acne activity.",
    category: "active"
  },
  {
    name: "Retinyl Palmitate",
    slug: "retinyl-palmitate",
    aliases: ["retinyl palmitate"],
    rating: 1,
    whyItClogs: "Retinol esterified with palmitic acid; mild retinoid with very low clogging risk despite the fatty acid carrier.",
    category: "active"
  },
  {
    name: "Tretinoin",
    slug: "tretinoin",
    aliases: ["tretinoin", "all-trans retinoic acid", "atra"],
    rating: 0,
    whyItClogs: "Prescription retinoid that normalizes follicular keratinization; actively unblocks pores.",
    category: "active"
  },
  {
    name: "Adapalene",
    slug: "adapalene",
    aliases: ["adapalene"],
    rating: 0,
    whyItClogs: "Third-generation synthetic retinoid; explicitly indicated to clear comedonal acne.",
    category: "active"
  },
  {
    name: "Bakuchiol",
    slug: "bakuchiol",
    aliases: ["bakuchiol"],
    rating: 0,
    whyItClogs: "Plant-derived meroterpene with retinoid-like effects; non-comedogenic and well tolerated.",
    category: "active"
  },
  {
    name: "Salicylic Acid",
    slug: "salicylic-acid",
    aliases: ["salicylic acid", "bha", "2-hydroxybenzoic acid"],
    rating: 0,
    whyItClogs: "Lipid-soluble beta-hydroxy acid that penetrates and clears pores from the inside; the gold-standard anti-comedogenic active.",
    category: "active"
  },
  {
    name: "Lactic Acid",
    slug: "lactic-acid",
    aliases: ["lactic acid", "alpha hydroxy acid"],
    rating: 0,
    whyItClogs: "Water-soluble alpha-hydroxy acid; exfoliates surface dead cells without clogging.",
    category: "active"
  },
  {
    name: "Glycolic Acid",
    slug: "glycolic-acid",
    aliases: ["glycolic acid", "alpha hydroxy acid"],
    rating: 0,
    whyItClogs: "Smallest AHA; loosens corneocyte adhesion and helps clear comedones rather than form them.",
    category: "active"
  },
  {
    name: "Mandelic Acid",
    slug: "mandelic-acid",
    aliases: ["mandelic acid"],
    rating: 0,
    whyItClogs: "Larger AHA from bitter almonds; gentle exfoliation with antibacterial benefits, non-comedogenic.",
    category: "active"
  },
  {
    name: "Azelaic Acid",
    slug: "azelaic-acid",
    aliases: ["azelaic acid"],
    rating: 0,
    whyItClogs: "Dicarboxylic acid that normalizes keratinization and inhibits Cutibacterium acnes; actively clears pores.",
    category: "active"
  },
  {
    name: "Benzoyl Peroxide",
    slug: "benzoyl-peroxide",
    aliases: ["benzoyl peroxide", "bpo"],
    rating: 0,
    whyItClogs: "Oxidizing antimicrobial that kills C. acnes and helps shed pore-blocking cells; non-comedogenic.",
    category: "active"
  },
  {
    name: "Tranexamic Acid",
    slug: "tranexamic-acid",
    aliases: ["tranexamic acid"],
    rating: 0,
    whyItClogs: "Synthetic lysine derivative used for pigmentation; water-soluble and non-comedogenic.",
    category: "active"
  },
  {
    name: "Kojic Acid",
    slug: "kojic-acid",
    aliases: ["kojic acid"],
    rating: 0,
    whyItClogs: "Fungal-derived tyrosinase inhibitor; water-soluble brightening agent with no clogging potential.",
    category: "active"
  },
  {
    name: "Arbutin",
    slug: "arbutin",
    aliases: ["arbutin", "beta-arbutin"],
    rating: 0,
    whyItClogs: "Natural hydroquinone glycoside; water-soluble brightener that does not affect pores.",
    category: "active"
  },
  {
    name: "Alpha Arbutin",
    slug: "alpha-arbutin",
    aliases: ["alpha arbutin"],
    rating: 0,
    whyItClogs: "Synthetic stereoisomer with greater stability; non-comedogenic.",
    category: "active"
  },
  {
    name: "Hydroquinone",
    slug: "hydroquinone",
    aliases: ["hydroquinone"],
    rating: 0,
    whyItClogs: "Aromatic phenol used for pigment; water-soluble and not pore-clogging.",
    category: "active"
  },
  {
    name: "Ferulic Acid",
    slug: "ferulic-acid",
    aliases: ["ferulic acid"],
    rating: 0,
    whyItClogs: "Plant antioxidant used at <1%; non-comedogenic and stabilizes vitamin C formulations.",
    category: "active"
  },
  {
    name: "Resveratrol",
    slug: "resveratrol",
    aliases: ["resveratrol"],
    rating: 0,
    whyItClogs: "Polyphenol antioxidant; non-comedogenic at typical use levels.",
    category: "active"
  },
  {
    name: "Ectoin",
    slug: "ectoin",
    aliases: ["ectoin"],
    rating: 0,
    whyItClogs: "Bacterial-derived osmolyte that stabilizes cell membranes; water-soluble and pore-safe.",
    category: "active"
  },
  {
    name: "Caffeine",
    slug: "caffeine",
    aliases: ["caffeine"],
    rating: 0,
    whyItClogs: "Water-soluble methylxanthine used for vasoconstriction; non-comedogenic.",
    category: "active"
  },
  {
    name: "Peptides",
    slug: "peptides",
    aliases: ["peptides", "palmitoyl pentapeptide", "copper peptide"],
    rating: 0,
    whyItClogs: "Short amino-acid chains used as signaling actives; water-soluble and non-comedogenic.",
    category: "active"
  },
  {
    name: "Allantoin",
    slug: "allantoin",
    aliases: ["allantoin"],
    rating: 0,
    whyItClogs: "Soothing keratolytic from comfrey; non-comedogenic at standard 0.5-2% use.",
    category: "active"
  },
  {
    name: "Panthenol",
    slug: "panthenol",
    aliases: ["panthenol", "provitamin b5", "d-panthenol"],
    rating: 0,
    whyItClogs: "Vitamin B5 precursor; humectant and barrier-supporting, non-comedogenic.",
    category: "active"
  },
  {
    name: "Vitamin C",
    slug: "vitamin-c",
    aliases: ["vitamin c", "ascorbic acid", "l-ascorbic acid"],
    rating: 0,
    whyItClogs: "Water-soluble antioxidant; non-comedogenic in pure form, though some lipid-soluble derivatives may behave differently.",
    category: "vitamin"
  },
  {
    name: "Sodium Ascorbyl Phosphate",
    slug: "sodium-ascorbyl-phosphate",
    aliases: ["sodium ascorbyl phosphate", "sap"],
    rating: 0,
    whyItClogs: "Stable water-soluble vitamin C derivative; non-comedogenic and useful for acne-prone skin.",
    category: "vitamin"
  },
  {
    name: "Magnesium Ascorbyl Phosphate",
    slug: "magnesium-ascorbyl-phosphate",
    aliases: ["magnesium ascorbyl phosphate", "map"],
    rating: 0,
    whyItClogs: "Another stable vitamin C salt; non-comedogenic.",
    category: "vitamin"
  },
  {
    name: "Tetrahexyldecyl Ascorbate",
    slug: "tetrahexyldecyl-ascorbate",
    aliases: ["tetrahexyldecyl ascorbate", "thd ascorbate"],
    rating: 1,
    whyItClogs: "Oil-soluble ascorbic acid ester delivered in lipophilic vehicles; very low clogging risk despite oil base.",
    category: "vitamin"
  },
  {
    name: "Ascorbyl Palmitate",
    slug: "ascorbyl-palmitate",
    aliases: ["ascorbyl palmitate"],
    rating: 2,
    whyItClogs: "Vitamin C ester with palmitic acid; lipid-soluble and slightly comedogenic in heavier formulas.",
    saferAlternatives: ["Sodium Ascorbyl Phosphate", "Vitamin C"],
    category: "vitamin"
  },
  {
    name: "Tocopherol",
    slug: "tocopherol",
    aliases: ["tocopherol", "vitamin e"],
    rating: 2,
    whyItClogs: "Lipid-soluble antioxidant; mildly comedogenic only when present in high concentrations as a stand-alone serum.",
    saferAlternatives: ["Tocopheryl Acetate", "Ferulic Acid"],
    category: "vitamin"
  },
  {
    name: "Tocopheryl Acetate",
    slug: "tocopheryl-acetate",
    aliases: ["tocopheryl acetate", "vitamin e acetate"],
    rating: 0,
    whyItClogs: "Esterified, more stable form of vitamin E; non-comedogenic at typical use levels of 0.1-1%.",
    category: "vitamin"
  },
  {
    name: "Ceramide",
    slug: "ceramides",
    aliases: ["ceramide", "ceramides", "ceramide np", "ceramide ap"],
    rating: 0,
    whyItClogs: "Native barrier sphingolipids used at fractional percentages; restore barrier without clogging.",
    category: "active"
  },

  // ============================================================
  // PRESERVATIVES
  // ============================================================
  {
    name: "Phenoxyethanol",
    slug: "phenoxyethanol",
    aliases: ["phenoxyethanol"],
    rating: 0,
    whyItClogs: "Glycol-ether preservative used at <1%; water-soluble and non-comedogenic.",
    category: "preservative"
  },
  {
    name: "Ethylhexylglycerin",
    slug: "ethylhexylglycerin",
    aliases: ["ethylhexylglycerin"],
    rating: 0,
    whyItClogs: "Glyceryl ether preservative booster; non-comedogenic at use levels.",
    category: "preservative"
  },
  {
    name: "Sodium Benzoate",
    slug: "sodium-benzoate",
    aliases: ["sodium benzoate"],
    rating: 0,
    whyItClogs: "Water-soluble salt preservative; pore-safe.",
    category: "preservative"
  },
  {
    name: "Potassium Sorbate",
    slug: "potassium-sorbate",
    aliases: ["potassium sorbate"],
    rating: 0,
    whyItClogs: "Water-soluble preservative; non-comedogenic.",
    category: "preservative"
  },
  {
    name: "Benzyl Alcohol",
    slug: "benzyl-alcohol",
    aliases: ["benzyl alcohol"],
    rating: 0,
    whyItClogs: "Aromatic alcohol preservative used <1%; non-comedogenic.",
    category: "preservative"
  },
  {
    name: "Methylparaben",
    slug: "methylparaben",
    aliases: ["methylparaben"],
    rating: 0,
    whyItClogs: "Short-chain ester preservative; water-soluble and not associated with comedones.",
    category: "preservative"
  },
  {
    name: "Propylparaben",
    slug: "propylparaben",
    aliases: ["propylparaben"],
    rating: 0,
    whyItClogs: "Slightly more lipophilic paraben; still non-comedogenic at use levels under 0.4%.",
    category: "preservative"
  },
  {
    name: "Caprylyl Glycol",
    slug: "caprylyl-glycol",
    aliases: ["caprylyl glycol", "1,2-octanediol"],
    rating: 0,
    whyItClogs: "Multifunctional preservative-humectant; non-comedogenic.",
    category: "preservative"
  },
  {
    name: "Sorbic Acid",
    slug: "sorbic-acid",
    aliases: ["sorbic acid"],
    rating: 0,
    whyItClogs: "Mild organic acid preservative; pore-safe.",
    category: "preservative"
  },
  {
    name: "Dehydroacetic Acid",
    slug: "dehydroacetic-acid",
    aliases: ["dehydroacetic acid"],
    rating: 0,
    whyItClogs: "Water-soluble preservative often paired with benzyl alcohol; non-comedogenic.",
    category: "preservative"
  },
  {
    name: "Chlorphenesin",
    slug: "chlorphenesin",
    aliases: ["chlorphenesin"],
    rating: 0,
    whyItClogs: "Glycol ether preservative; non-comedogenic.",
    category: "preservative"
  },

  // ============================================================
  // SURFACTANTS
  // ============================================================
  {
    name: "Sodium Lauryl Sulfate",
    slug: "sodium-lauryl-sulfate",
    aliases: ["sodium lauryl sulfate", "sls"],
    rating: 2,
    whyItClogs: "Strong anionic surfactant; rated comedogenic largely through irritation pathway and barrier disruption rather than direct pore plugging.",
    saferAlternatives: ["Sodium Cocoyl Isethionate", "Decyl Glucoside"],
    category: "surfactant"
  },
  {
    name: "Sodium Laureth Sulfate",
    slug: "sodium-laureth-sulfate",
    aliases: ["sodium laureth sulfate", "sles"],
    rating: 1,
    whyItClogs: "Ethoxylated sulfate; milder than SLS but still potentially irritating in high concentrations.",
    category: "surfactant"
  },
  {
    name: "Cocamidopropyl Betaine",
    slug: "cocamidopropyl-betaine",
    aliases: ["cocamidopropyl betaine", "capb"],
    rating: 0,
    whyItClogs: "Amphoteric surfactant from coconut; mild and non-comedogenic.",
    category: "surfactant"
  },
  {
    name: "Decyl Glucoside",
    slug: "decyl-glucoside",
    aliases: ["decyl glucoside"],
    rating: 0,
    whyItClogs: "Plant-derived nonionic surfactant; gentle and pore-safe.",
    category: "surfactant"
  },
  {
    name: "Coco-Glucoside",
    slug: "coco-glucoside",
    aliases: ["coco-glucoside", "coco glucoside"],
    rating: 0,
    whyItClogs: "Alkyl polyglucoside surfactant; non-comedogenic.",
    category: "surfactant"
  },
  {
    name: "Sodium Cocoyl Isethionate",
    slug: "sodium-cocoyl-isethionate",
    aliases: ["sodium cocoyl isethionate", "sci"],
    rating: 1,
    whyItClogs: "Mild syndet bar surfactant from coconut; very low irritation and non-comedogenic in rinse-off use.",
    category: "surfactant"
  },
  {
    name: "Sodium Lauroyl Sarcosinate",
    slug: "sodium-lauroyl-sarcosinate",
    aliases: ["sodium lauroyl sarcosinate"],
    rating: 1,
    whyItClogs: "Amino-acid based surfactant; mild and rinses cleanly without clogging.",
    category: "surfactant"
  },
  {
    name: "PEG-100 Stearate",
    slug: "peg-100-stearate",
    aliases: ["peg-100 stearate"],
    rating: 1,
    whyItClogs: "Ethoxylated emulsifier; water-dispersible and generally pore-safe.",
    category: "surfactant"
  },
  {
    name: "Polysorbate 20",
    slug: "polysorbate-20",
    aliases: ["polysorbate 20"],
    rating: 0,
    whyItClogs: "Nonionic solubilizer; non-comedogenic in use concentrations.",
    category: "surfactant"
  },

  // ============================================================
  // WAXES
  // ============================================================
  {
    name: "Beeswax",
    slug: "beeswax",
    aliases: ["beeswax", "cera alba", "cera flava"],
    rating: 2,
    whyItClogs: "Complex wax of esters and hydrocarbons; mildly occlusive and can contribute to follicular blockage in heavy balms.",
    saferAlternatives: ["Candelilla Wax", "Carnauba Wax"],
    category: "wax"
  },
  {
    name: "Candelilla Wax",
    slug: "candelilla-wax",
    aliases: ["candelilla wax", "euphorbia cerifera wax"],
    rating: 1,
    whyItClogs: "Plant-derived hard wax; structural ingredient with low pore-clogging risk.",
    category: "wax"
  },
  {
    name: "Carnauba Wax",
    slug: "carnauba-wax",
    aliases: ["carnauba wax", "copernicia cerifera wax"],
    rating: 1,
    whyItClogs: "Hardest natural wax; used at low percentages and rarely associated with clogging.",
    category: "wax"
  },
  {
    name: "Ozokerite",
    slug: "ozokerite",
    aliases: ["ozokerite"],
    rating: 1,
    whyItClogs: "Mineral wax used as a structurant; large hydrocarbon molecules do not enter pores.",
    category: "wax"
  },
  {
    name: "Microcrystalline Wax",
    slug: "microcrystalline-wax",
    aliases: ["microcrystalline wax"],
    rating: 1,
    whyItClogs: "Refined petroleum-derived wax; inert and not comedogenic.",
    category: "wax"
  },
  {
    name: "Paraffin Wax",
    slug: "paraffin-wax",
    aliases: ["paraffin wax"],
    rating: 1,
    whyItClogs: "Highly refined hydrocarbon; low pore-clogging risk.",
    category: "wax"
  },

  // ============================================================
  // EXTRACTS
  // ============================================================
  {
    name: "Centella Asiatica",
    slug: "centella-asiatica",
    aliases: ["centella asiatica", "cica", "gotu kola"],
    rating: 0,
    whyItClogs: "Soothing botanical extract rich in triterpenes; non-comedogenic and supports barrier repair.",
    category: "extract"
  },
  {
    name: "Madecassoside",
    slug: "madecassoside",
    aliases: ["madecassoside"],
    rating: 0,
    whyItClogs: "Isolated triterpene from Centella; water-soluble at use levels and non-comedogenic.",
    category: "extract"
  },
  {
    name: "Asiaticoside",
    slug: "asiaticoside",
    aliases: ["asiaticoside"],
    rating: 0,
    whyItClogs: "Centella triterpene saponin; non-comedogenic and wound-healing.",
    category: "extract"
  },
  {
    name: "Green Tea Extract",
    slug: "green-tea-extract",
    aliases: ["green tea extract", "camellia sinensis leaf extract", "egcg"],
    rating: 0,
    whyItClogs: "Polyphenol-rich water extract; antioxidant and sebum-modulating, non-comedogenic.",
    category: "extract"
  },
  {
    name: "Tea Tree Oil",
    slug: "tea-tree-oil",
    aliases: ["tea tree oil", "melaleuca alternifolia leaf oil"],
    rating: 1,
    whyItClogs: "Volatile essential oil containing terpinen-4-ol; primarily antibacterial against C. acnes with negligible occlusivity.",
    category: "extract"
  },
  {
    name: "Calendula Extract",
    slug: "calendula-extract",
    aliases: ["calendula extract", "calendula officinalis flower extract"],
    rating: 1,
    whyItClogs: "Soothing botanical extract; non-comedogenic in water-based formulations, though oil infusions can be slightly heavier.",
    category: "extract"
  },
  {
    name: "Chamomile Extract",
    slug: "chamomile-extract",
    aliases: ["chamomile extract", "chamomilla recutita flower extract", "matricaria"],
    rating: 0,
    whyItClogs: "Bisabolol-containing soothing extract; non-comedogenic.",
    category: "extract"
  },
  {
    name: "Rosemary Extract",
    slug: "rosemary-extract",
    aliases: ["rosemary extract", "rosmarinus officinalis leaf extract"],
    rating: 0,
    whyItClogs: "Antioxidant herbal extract; non-comedogenic at use levels.",
    category: "extract"
  },
  {
    name: "Witch Hazel",
    slug: "witch-hazel",
    aliases: ["witch hazel", "hamamelis virginiana extract"],
    rating: 0,
    whyItClogs: "Astringent water/alcohol extract with tannins; non-comedogenic.",
    category: "extract"
  },
  {
    name: "Licorice Root Extract",
    slug: "licorice-root-extract",
    aliases: ["licorice root extract", "glycyrrhiza glabra root extract"],
    rating: 0,
    whyItClogs: "Brightening anti-inflammatory extract; non-comedogenic.",
    category: "extract"
  },
  {
    name: "Mugwort Extract",
    slug: "mugwort-extract",
    aliases: ["mugwort extract", "artemisia vulgaris extract"],
    rating: 0,
    whyItClogs: "Soothing K-beauty botanical; water-soluble and non-comedogenic.",
    category: "extract"
  },
  {
    name: "Snail Mucin",
    slug: "snail-mucin",
    aliases: ["snail mucin", "snail secretion filtrate"],
    rating: 0,
    whyItClogs: "Glycoprotein-rich filtrate; humectant and reparative, non-comedogenic.",
    category: "extract"
  },
  {
    name: "Propolis Extract",
    slug: "propolis-extract",
    aliases: ["propolis extract", "bee propolis"],
    rating: 1,
    whyItClogs: "Resinous bee-derived extract; antibacterial with very low clogging potential.",
    category: "extract"
  },
  {
    name: "Aloe Vera",
    slug: "aloe-vera",
    aliases: ["aloe vera", "aloe barbadensis leaf juice", "aloe barbadensis leaf extract"],
    rating: 0,
    whyItClogs: "Mucilaginous water extract from succulent leaves; soothing and entirely non-comedogenic.",
    category: "extract"
  },
  {
    name: "Algae Extract",
    slug: "algae-extract",
    aliases: ["algae extract", "marine algae extract"],
    rating: 5,
    whyItClogs: "Highly variable concentrated marine extracts contain heavy lipids and iodine compounds that strongly correlate with comedone formation in studies.",
    saferAlternatives: ["Centella Asiatica", "Green Tea Extract", "Beta-Glucan"],
    category: "extract"
  },
  {
    name: "Carrageenan",
    slug: "carrageenan",
    aliases: ["carrageenan"],
    rating: 4,
    whyItClogs: "Sulfated seaweed polysaccharide thickener; comedogenic in concentrated leave-on formulas.",
    saferAlternatives: ["Xanthan Gum", "Sclerotium Gum"],
    category: "extract"
  },
  {
    name: "Colloidal Oatmeal",
    slug: "colloidal-oatmeal",
    aliases: ["colloidal oatmeal", "avena sativa kernel flour"],
    rating: 0,
    whyItClogs: "Finely milled oats containing avenanthramides; barrier-soothing and non-comedogenic.",
    category: "extract"
  },

  // ============================================================
  // MINERALS
  // ============================================================
  {
    name: "Zinc Oxide",
    slug: "zinc-oxide",
    aliases: ["zinc oxide", "zno"],
    rating: 0,
    whyItClogs: "Inorganic UV filter and mild astringent; non-comedogenic and often used in acne-care formulas.",
    category: "mineral"
  },
  {
    name: "Titanium Dioxide",
    slug: "titanium-dioxide",
    aliases: ["titanium dioxide", "tio2"],
    rating: 0,
    whyItClogs: "Inorganic UV filter; particle-based and non-comedogenic, though heavy formulations around it can cause issues.",
    category: "mineral"
  },
  {
    name: "Iron Oxides",
    slug: "iron-oxides",
    aliases: ["iron oxides", "ci 77491", "ci 77492", "ci 77499"],
    rating: 0,
    whyItClogs: "Inert mineral pigments; non-comedogenic.",
    category: "mineral"
  },
  {
    name: "Mica",
    slug: "mica",
    aliases: ["mica"],
    rating: 0,
    whyItClogs: "Silicate mineral filler/pigment; non-comedogenic but can mechanically irritate when over-used.",
    category: "mineral"
  },
  {
    name: "Kaolin",
    slug: "kaolin",
    aliases: ["kaolin", "china clay"],
    rating: 0,
    whyItClogs: "Absorbent clay; mattifies and absorbs sebum, non-comedogenic.",
    category: "mineral"
  },
  {
    name: "Bentonite",
    slug: "bentonite",
    aliases: ["bentonite"],
    rating: 0,
    whyItClogs: "Smectite clay; absorbent and non-comedogenic.",
    category: "mineral"
  },
  {
    name: "Silica",
    slug: "silica",
    aliases: ["silica"],
    rating: 0,
    whyItClogs: "Inorganic mattifying powder; non-comedogenic.",
    category: "mineral"
  },
  {
    name: "Talc",
    slug: "talc",
    aliases: ["talc"],
    rating: 1,
    whyItClogs: "Hydrated magnesium silicate powder; minor risk in heavy use through mechanical occlusion.",
    category: "mineral"
  },

  // ============================================================
  // ADDITIONAL EMOLLIENTS / MISC
  // ============================================================
  {
    name: "Xanthan Gum",
    slug: "xanthan-gum",
    aliases: ["xanthan gum"],
    rating: 0,
    whyItClogs: "Polysaccharide thickener; non-comedogenic.",
    category: "humectant"
  },
  {
    name: "Sclerotium Gum",
    slug: "sclerotium-gum",
    aliases: ["sclerotium gum"],
    rating: 0,
    whyItClogs: "Fungal polysaccharide thickener; non-comedogenic.",
    category: "humectant"
  },
  {
    name: "Carbomer",
    slug: "carbomer",
    aliases: ["carbomer"],
    rating: 0,
    whyItClogs: "Acrylic-acid polymer thickener; non-comedogenic.",
    category: "humectant"
  },
  {
    name: "Polyglyceryl-3 Diisostearate",
    slug: "polyglyceryl-3-diisostearate",
    aliases: ["polyglyceryl-3 diisostearate"],
    rating: 2,
    whyItClogs: "Polyol ester emulsifier used in W/O systems; mild comedogenic potential due to isostearate moiety.",
    saferAlternatives: ["Polyglyceryl-4 Caprate", "Glyceryl Stearate"],
    category: "ester"
  },
  {
    name: "Lecithin",
    slug: "lecithin",
    aliases: ["lecithin", "soy lecithin"],
    rating: 4,
    whyItClogs: "Phospholipid mixture; promotes penetration of other oils and is rated highly comedogenic in concentrated leave-on use.",
    saferAlternatives: ["Hydrogenated Lecithin", "Sodium Hyaluronate"],
    category: "ester"
  },
  {
    name: "Hydrogenated Lecithin",
    slug: "hydrogenated-lecithin",
    aliases: ["hydrogenated lecithin"],
    rating: 1,
    whyItClogs: "Saturated, more stable form of lecithin; minimal comedogenic risk.",
    category: "ester"
  },
  {
    name: "Sorbitan Oleate",
    slug: "sorbitan-oleate",
    aliases: ["sorbitan oleate"],
    rating: 3,
    whyItClogs: "W/O emulsifier; oleate group contributes to medium clogging risk in heavy creams.",
    saferAlternatives: ["Polysorbate 20", "Glyceryl Stearate"],
    category: "ester"
  },
  {
    name: "PEG-7 Glyceryl Cocoate",
    slug: "peg-7-glyceryl-cocoate",
    aliases: ["peg-7 glyceryl cocoate"],
    rating: 0,
    whyItClogs: "Water-dispersible refatting agent; non-comedogenic.",
    category: "surfactant"
  },
  {
    name: "Dicaprylyl Carbonate",
    slug: "dicaprylyl-carbonate",
    aliases: ["dicaprylyl carbonate"],
    rating: 1,
    whyItClogs: "Dry-touch carbonate ester; light and non-comedogenic in standard use.",
    category: "ester"
  },
  {
    name: "Cetiol Ultimate",
    slug: "cetiol-ultimate",
    aliases: ["cetiol ultimate", "undecane and tridecane"],
    rating: 0,
    whyItClogs: "Volatile hydrocarbon blend; flashes off the skin without clogging.",
    category: "emollient"
  },
  {
    name: "Hydrogenated Polyisobutene",
    slug: "hydrogenated-polyisobutene",
    aliases: ["hydrogenated polyisobutene"],
    rating: 1,
    whyItClogs: "Synthetic hydrocarbon emollient; large molecular weight prevents follicular penetration.",
    category: "emollient"
  },
  {
    name: "Isohexadecane",
    slug: "isohexadecane",
    aliases: ["isohexadecane"],
    rating: 1,
    whyItClogs: "Branched hydrocarbon emollient; lightweight and pore-safe.",
    category: "emollient"
  },
  {
    name: "AHAs (Alpha Hydroxy Acids)",
    slug: "aha",
    aliases: ["aha", "alpha hydroxy acid", "alpha hydroxy acids"],
    rating: 0,
    whyItClogs: "Group of water-soluble exfoliating acids (glycolic, lactic, mandelic, tartaric); they actively dissolve the corneocyte glue holding pore-clogging dead cells together.",
    category: "active"
  },
  {
    name: "BHA (Beta Hydroxy Acid)",
    slug: "bha",
    aliases: ["bha", "beta hydroxy acid", "salicylic acid"],
    rating: 0,
    whyItClogs: "Salicylic acid is the cosmetic BHA; oil-soluble enough to enter sebaceous follicles and dissolve the keratin-and-sebum plugs that form comedones.",
    category: "active"
  },
  {
    name: "C12-15 Alkyl Benzoate",
    slug: "c12-15-alkyl-benzoate",
    aliases: ["c12-15 alkyl benzoate"],
    rating: 1,
    whyItClogs: "Light dry-touch ester; preferred over IPM/IPP and rated as having low clogging risk.",
    category: "ester"
  }
];
