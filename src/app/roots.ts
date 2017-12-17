export interface Root {
    roots: Array<string>;
    meaning: string;
    originLanguage: string;
    examples: Array<string>;
    letter: string;
}

export interface Roots {
    [key: string]: Array<Root>;
}

export const data: Roots = {
    'a': [{
        'roots': ['ab-', 'a-', 'abs-', 'au-'],
        'meaning': 'away from',
        'originLanguage': 'Latin',
        'examples': ['abnormal', 'abrasion', 'absent', 'abstain', 'abstract', 'abstraction', 'aversion', 'avulsion'],
        'letter': 'a'
    }, {
        'roots': ['abac-'],
        'meaning': 'slab',
        'originLanguage': 'Greek',
        'examples': ['abaciscus', 'abacus', 'abax'],
        'letter': 'a'
    }, {
        'roots': ['ac-', 'acm-', 'acr-'],
        'meaning': 'point',
        'originLanguage': 'Greek',
        'examples': ['acidanthera', 'acme', 'acmeism', 'acmesthesia', 'acmic', 'acne', 'paragon'],
        'letter': 'a'
    }, {
        'roots': ['ac-'],
        'meaning': 'cure',
        'originLanguage': 'Greek',
        'examples': ['autacoid', 'panacea'],
        'letter': 'a'
    }, {
        'roots': ['academ-'],
        'meaning': 'Akademos',
        'originLanguage': 'Greek',
        'examples': ['academe', 'academia', 'academic', 'academy'],
        'letter': 'a'
    }, {
        'roots': ['acanth-'],
        'meaning': 'thorn',
        'originLanguage': 'Greek',
        'examples': ['Acanthaster', 'acanthion', 'acanthite', 'Acanthocephala', 'acanthocephaliasis', 'acanthocyte', 'Acanthomintha', 'Acanthosaura', 'Acanthus', 'Metriacanthosaurus', 'neuroacanthocytosis'],
        'letter': 'a'
    }, {
        'roots': ['acar-'],
        'meaning': 'mite',
        'originLanguage': 'Greek',
        'examples': ['acariasis', 'acarid', 'acariphagous', 'acaroid', 'acarology', 'acarophobia', 'acarus'],
        'letter': 'a'
    }, {
        'roots': ['accipitr-'],
        'meaning': 'hawk',
        'originLanguage': 'Latin',
        'examples': ['Accipiter', 'accipitrine'],
        'letter': 'a'
    }, {
        'roots': ['acer-', 'acri-'],
        'meaning': 'bitter, sharp, sour',
        'originLanguage': 'Latin',
        'examples': ['acerbic', 'acrid', 'acrimonious', 'acrimony', 'exacerbate'],
        'letter': 'a'
    }, {
        'roots': ['acet-'],
        'meaning': 'sour, vinegar',
        'originLanguage': 'Latin',
        'examples': ['acetabulum', 'acetate', 'acetic', 'acetone', 'acetum', 'triacetate'],
        'letter': 'a'
    }, {
        'roots': ['acid-'],
        'meaning': 'acidic, sour',
        'originLanguage': 'Latin',
        'examples': ['acidiferous', 'acidity', 'acidosis', 'acidulation', 'acidulous'],
        'letter': 'a'
    }, {
        'roots': ['acr-'],
        'meaning': 'height, summit, tip',
        'originLanguage': 'Greek',
        'examples': ['acrobat', 'acrobatics', 'acrochordon', 'acromegalia', 'acromegaly', 'acromion', 'acronym', 'acrophobia', 'acropolis', 'acrostic', 'acroterion', 'acrotomophilia'],
        'letter': 'a'
    }, {
        'roots': ['actin-'],
        'meaning': 'beam, ray',
        'originLanguage': 'Greek',
        'examples': ['actinic', 'actinism', 'actinium', 'actinocerid', 'actinodrome', 'actinoid', 'actinomere', 'actinometer', 'actinomorphic', 'actinomyces', 'actinophryid', 'actinopod', 'Actinopterygii', 'actinotherapy', 'actinozoa'],
        'letter': 'a'
    }, {
        'roots': ['acu-', 'acut-'],
        'meaning': 'sharp, pointed',
        'originLanguage': 'Latin',
        'examples': ['acerose', 'acupuncture', 'acumen', 'acute', 'acutifoliate'],
        'letter': 'a'
    }, {
        'roots': ['ad-', 'a-', 'ac-', 'af-', 'ag-', 'al-', 'am-', 'an-', 'ap-', 'ar-', 'as-', 'at-'],
        'meaning': 'movement to or toward; in addition to',
        'originLanguage': 'Latin',
        'examples': ['accept', 'accurate', 'adapt', 'affect', 'agglomerate', 'aggregate', 'aggression', 'allege', 'allude', 'ammunition', 'annectent', 'approximate', 'arreption', 'arride', 'arrogant', 'ascend', 'assault', 'assimilate', 'attend', 'attract'],
        'letter': 'a'
    }, {
        'roots': ['aden-'],
        'meaning': 'gland',
        'originLanguage': 'Greek',
        'examples': ['adenocarcinoma', 'adenoid', 'adenoidectomy', 'adenology', 'adenoma', 'adenomyosis', 'adenosis'],
        'letter': 'a'
    }, {
        'roots': ['adip-'],
        'meaning': 'fat',
        'originLanguage': 'Latin',
        'examples': ['adipocellular', 'adipose'],
        'letter': 'a'
    }, {
        'roots': ['aer-'],
        'meaning': 'lift, raise',
        'originLanguage': 'Greek',
        'examples': ['aorta', 'aortic', 'endaortitis', 'meteor', 'meteorology'],
        'letter': 'a'
    }, {
        'roots': ['aer-'],
        'meaning': 'air, atmosphere',
        'originLanguage': 'Greek',
        'examples': ['aerobic', 'aerodynamic', 'aeronautics', 'aeroplane', 'aerorrhachia', 'aerosol', 'aerotitis'],
        'letter': 'a'
    }, {
        'roots': ['aesth-'],
        'meaning': 'feeling, sensation',
        'originLanguage': 'Greek',
        'examples': ['aesthesia', 'aesthesis', 'aesthete', 'aesthetics', 'anaesthetic', 'synesthesia'],
        'letter': 'a'
    }, {
        'roots': ['aether-', 'ether-'],
        'meaning': 'upper pure, bright air',
        'originLanguage': 'Greek',
        'examples': ['ether', 'ethereal', 'etheric', 'hypaethros'],
        'letter': 'a'
    }, {
        'roots': ['aev-', 'ev-'],
        'meaning': 'age',
        'originLanguage': 'Latin',
        'examples': ['age', 'coeval', 'eon', 'eternal', 'longevity', 'medieval', 'primeval'],
        'letter': 'a'
    }, {
        'roots': ['ag-', '-ig-', 'act-'],
        'meaning': 'do, go, move',
        'originLanguage': 'Latin',
        'examples': ['act', 'action', 'actor', 'agenda', 'agent', 'agile', 'agitate', 'ambiguous', 'castigate', 'cogent', 'cogitate', 'cogitation', 'excogitate', 'mitigate', 'navigate'],
        'letter': 'a'
    }, {
        'roots': ['ag-'],
        'meaning': 'lead',
        'originLanguage': 'Greek',
        'examples': ['agony', 'antagonist', 'antagonize', 'demagogue', 'pedagogue', 'pedagogy', 'strategy', 'synagogue'],
        'letter': 'a'
    }, {
        'roots': ['agap-'],
        'meaning': 'love',
        'originLanguage': 'Greek',
        'examples': ['agape'],
        'letter': 'a'
    }, {
        'roots': ['agr-'],
        'meaning': 'field',
        'originLanguage': 'Greek',
        'examples': ['agronomist', 'agronomy'],
        'letter': 'a'
    }, {
        'roots': ['agri-', '-egri-'],
        'meaning': 'field',
        'originLanguage': 'Latin',
        'examples': ['agriculture', 'peregrine'],
        'letter': 'a'
    }, {
        'roots': ['ailur-'],
        'meaning': 'cat',
        'originLanguage': 'Greek',
        'examples': ['Ailuroedus', 'ailuromancy', 'ailurophile', 'ailurophilia', 'ailurophobia'],
        'letter': 'a'
    }, {
        'roots': ['alac-'],
        'meaning': 'cheerful',
        'originLanguage': 'Latin',
        'examples': ['alacrity', 'allegro'],
        'letter': 'a'
    }, {
        'roots': ['alb-'],
        'meaning': 'dull white',
        'originLanguage': 'Latin',
        'examples': ['albedo', 'albino', 'albumen'],
        'letter': 'a'
    }, {
        'roots': ['alcyon-'],
        'meaning': 'kingfisher',
        'originLanguage': 'Greek',
        'examples': ['Halcyon', 'halcyon'],
        'letter': 'a'
    }, {
        'roots': ['ale-'],
        'meaning': 'wheat flour',
        'originLanguage': 'Greek',
        'examples': ['aleuromancy', 'aleurone', 'aleuronic'],
        'letter': 'a'
    }, {
        'roots': ['alg-'],
        'meaning': 'pain',
        'originLanguage': 'Greek',
        'examples': ['analgesic', 'arthralgia', 'neuralgia', 'nostalgia'],
        'letter': 'a'
    }, {
        'roots': ['ali-', 'alter-'],
        'meaning': 'other',
        'originLanguage': 'Latin',
        'examples': ['alias', 'alibi', 'alien', 'alter', 'alternate', 'altruism'],
        'letter': 'a'
    }, {
        'roots': ['all-'],
        'meaning': 'other',
        'originLanguage': 'Greek',
        'examples': ['allegory', 'allogenic', 'allograph', 'allophone', 'parallactic', 'parallax'],
        'letter': 'a'
    }, {
        'roots': ['allel-'],
        'meaning': 'one another',
        'originLanguage': 'Greek',
        'examples': ['allele', 'allelomorph', 'allelotaxis', 'parallel', 'parallelism', 'parallelogon', 'parallelogram'],
        'letter': 'a'
    }, {
        'roots': ['alph-'],
        'meaning': 'A, a',
        'originLanguage': 'Greek',
        'examples': ['Alphabet', 'alphabetic', 'analphabetic', 'panalphabetic', 'polyalphabetic'],
        'letter': 'a'
    }, {
        'roots': ['alphit-'],
        'meaning': 'barley',
        'originLanguage': 'Greek',
        'examples': ['alphitomancy'],
        'letter': 'a'
    }, {
        'roots': ['alt-'],
        'meaning': 'high, deep',
        'originLanguage': 'Latin',
        'examples': ['altimeter', 'altitude'],
        'letter': 'a'
    }, {
        'roots': ['am-', 'amat-'],
        'meaning': 'love, liking',
        'originLanguage': 'Latin',
        'examples': ['amateur', 'amatory', 'amenity', 'amorous', 'enamoured'],
        'letter': 'a'
    }, {
        'roots': ['am-', 'amic-', '-imic-'],
        'meaning': 'friend',
        'originLanguage': 'Latin',
        'examples': ['amiable', 'amicable', 'amity', 'enemy', 'enmity', 'inimical'],
        'letter': 'a'
    }, {
        'roots': ['amath-'],
        'meaning': 'sand',
        'originLanguage': 'Greek',
        'examples': [''],
        'letter': 'a'
    }, {
        'roots': ['ambi-', 'am-', 'amb-', 'ambo-', 'an-'],
        'meaning': 'both, on both sides',
        'originLanguage': 'Latin',
        'examples': ['ambidexterity', 'ambient', 'ambiguous', 'ambit', 'ambition', 'ambivalent', 'amboceptor', 'amputation', 'ancipital', 'andante'],
        'letter': 'a'
    }, {
        'roots': ['ambly-'],
        'meaning': 'dull',
        'originLanguage': 'Greek',
        'examples': ['amblygeustia', 'amblygonite', 'amblyopia', 'Amblypoda'],
        'letter': 'a'
    }, {
        'roots': ['ambul-'],
        'meaning': 'walk',
        'originLanguage': 'Latin',
        'examples': ['ambulance', 'ambulatory', 'preamble'],
        'letter': 'a'
    }, {
        'roots': ['amm-'],
        'meaning': 'sand',
        'originLanguage': 'Greek',
        'examples': ['amathophobia', 'Ammophila'],
        'letter': 'a'
    }, {
        'roots': ['amn-'],
        'meaning': 'lamb',
        'originLanguage': 'Greek',
        'examples': ['amniocentesis', 'amnion', 'amnioscope', 'amniote', 'amniotic', 'anamniote'],
        'letter': 'a'
    }, {
        'roots': ['amph-', 'amphi-'],
        'meaning': 'both, on both sides of, both kinds',
        'originLanguage': 'Greek',
        'examples': ['amphibian', 'amphibious', 'amphibole', 'amphibolic', 'amphimacer', 'Amphipoda', 'amphistyly', 'amphitheatre', 'amphoterism'],
        'letter': 'a'
    }, {
        'roots': ['ampl-'],
        'meaning': 'ample, abundant, bountiful, large',
        'originLanguage': 'Latin',
        'examples': ['ample', 'amplify', 'amplitude'],
        'letter': 'a'
    }, {
        'roots': ['amygdal-'],
        'meaning': 'almond',
        'originLanguage': 'Greek',
        'examples': ['almond', 'amygdala', 'amygdale', 'amygdalin', 'amygdaloid', 'amygdule'],
        'letter': 'a'
    }, {
        'roots': ['an-', 'a-', 'am-', 'ar-'],
        'meaning': 'not, without',
        'originLanguage': 'Greek',
        'examples': ['ambrosia', 'anaerobic', 'anhydrous', 'arrhythmia', 'atheism', 'atypical'],
        'letter': 'a'
    }, {
        'roots': ['ana-', 'am-', 'an-'],
        'meaning': 'again, against, back, up',
        'originLanguage': 'Greek',
        'examples': ['anagram', 'anabaptist', 'anaphylaxis', 'anarrhexis', 'anion', 'anode'],
        'letter': 'a'
    }, {
        'roots': ['andr-'],
        'meaning': 'male, masculine',
        'originLanguage': 'Greek',
        'examples': ['Alexander', 'androcentric', 'androcentrism', 'androgen', 'androgenous', 'androgyne', 'androgynous', 'androgyny', 'android', 'andrology', 'androphobia', 'androspore', 'diandry', 'misandry', 'monandry', 'philander', 'polyandrous', 'polyandry', 'protandry', 'pseudandry', 'synandrous'],
        'letter': 'a'
    }, {
        'roots': ['anem-'],
        'meaning': 'wind',
        'originLanguage': 'Greek',
        'examples': ['anemograph', 'anemometer', 'anemometric', 'anemone', 'anemophilous', 'anemophily', 'anemophobia', 'anemoscope', 'anemotropism'],
        'letter': 'a'
    }, {
        'roots': ['anim-'],
        'meaning': 'breath, life, spirit',
        'originLanguage': 'Latin',
        'examples': ['animal', 'animation'],
        'letter': 'a'
    }, {
        'roots': ['ann-', '-enn-'],
        'meaning': 'year, yearly',
        'originLanguage': 'Latin',
        'examples': ['anniversary', 'annual', 'centennial', 'millennium', 'perennial'],
        'letter': 'a'
    }, {
        'roots': ['ant-', 'anti-'],
        'meaning': 'against, opposed to, preventive',
        'originLanguage': 'Greek',
        'examples': ['antagonist', 'antagonize', 'antibiotic', 'antidote', 'antipodes', 'antirrhinum'],
        'letter': 'a'
    }, {
        'roots': ['ante-', 'anti-'],
        'meaning': 'before, in front of, prior to; old',
        'originLanguage': 'Latin',
        'examples': ['antebellum', 'antediluvian', 'anticipate', 'antiquarian', 'antiquate', 'antique', 'antiquity'],
        'letter': 'a'
    }, {
        'roots': ['anth-'],
        'meaning': 'flower',
        'originLanguage': 'Greek',
        'examples': ['anther', 'anthesis', 'Anthocoridae', 'anthodite', 'anthology', 'anthophobia', 'anthophore', 'Anthozoa', 'chrysanthemum', 'dianthus', 'enanthem', 'enanthema', 'exanthem', 'exanthematic', 'hydranth', 'hypanthium', 'perianth', 'zoanthid'],
        'letter': 'a'
    }, {
        'roots': ['anthrac-'],
        'meaning': 'coal',
        'originLanguage': 'Greek',
        'examples': ['anthracite', 'anthracnose', 'anthracycline', 'anthrax'],
        'letter': 'a'
    }, {
        'roots': ['anthrop-'],
        'meaning': 'human',
        'originLanguage': 'Greek',
        'examples': ['anthropology', 'anthroposophy', 'anthropomorphic', 'misanthrope', 'philanthropy'],
        'letter': 'a'
    }, {
        'roots': ['ap-', 'apo-'],
        'meaning': 'away from, separate, at the farthest point',
        'originLanguage': 'Greek',
        'examples': ['aphelion', 'apocrine', 'apocryphal', 'apogee', 'aporrhinosis', 'apostasy', 'apostate'],
        'letter': 'a'
    }, {
        'roots': ['aper-'],
        'meaning': 'open',
        'originLanguage': 'Latin',
        'examples': ['aperient', 'apéritif', 'aperitive', 'aperture', 'overt', 'overture', 'pert'],
        'letter': 'a'
    }, {
        'roots': ['aphrod-'],
        'meaning': 'Aphrodite',
        'originLanguage': 'Greek',
        'examples': ['aphrodisiac', 'pseudohermaphroditism'],
        'letter': 'a'
    }, {
        'roots': ['api-'],
        'meaning': 'bee',
        'originLanguage': 'Latin',
        'examples': ['apian', 'apiary', 'apicula', 'apium; Petrus Apianus'],
        'letter': 'a'
    }, {
        'roots': ['aqu-'],
        'meaning': 'water',
        'originLanguage': 'Latin',
        'examples': ['acquacotta', 'akvavit', 'aqua vitae', 'aquaculture', 'aquamarine', 'aquarelle', 'aquarium', 'Aquarius', 'aquatic', 'aquatile', 'aqueduct', 'aqueous', 'aquifer', 'aquiferous', 'aquiform', 'gouache', 'semiaquatic'],
        'letter': 'a'
    }, {
        'roots': ['ara-'],
        'meaning': 'plow, till',
        'originLanguage': 'Latin',
        'examples': ['arability', 'arable', 'aration', 'aratory', 'exarate', 'exaration', 'inarable', 'nonarable'],
        'letter': 'a'
    }, {
        'roots': ['arachn-'],
        'meaning': 'spider',
        'originLanguage': 'Greek',
        'examples': ['Arachne', 'arachnid', 'arachnodactyly', 'arachnoid', 'arachnology', 'arachnophobia'],
        'letter': 'a'
    }, {
        'roots': ['arbit-'],
        'meaning': 'judge',
        'originLanguage': 'Latin',
        'examples': ['arbiter', 'arbitrage', 'arbitrary', 'arbitration'],
        'letter': 'a'
    }, {
        'roots': ['arbor-'],
        'meaning': 'tree-like, wooden',
        'originLanguage': 'Latin',
        'examples': ['arbor', 'arboreal', 'aborescent', 'arboreous'],
        'letter': 'a'
    }, {
        'roots': ['arcan-'],
        'meaning': 'box',
        'originLanguage': 'Latin',
        'examples': ['arcane', 'arcanum'],
        'letter': 'a'
    }, {
        'roots': ['arch-', 'arche-', 'archi-'],
        'meaning': 'ruler',
        'originLanguage': 'Greek',
        'examples': ['anarchism', 'anarchist', 'anarchy', 'andrarchy', 'antarchy', 'archangel', 'archetype', 'architect', 'archon', 'autarch', 'autarchism', 'autarchy', 'eparch', 'eparchy', 'exarch', 'gynarchy', 'monarch', 'monarchism', 'monarchist', 'monarchy', 'navarch', 'octarchy', 'oligarchy', 'patriarchy', 'plutarchy', 'polyarchy', 'synarchism', 'synarchy', 'tetrarchy', 'triarchy', 'trierarch'],
        'letter': 'a'
    }, {
        'roots': ['archae-', 'arche-'],
        'meaning': 'ancient',
        'originLanguage': 'Greek',
        'examples': ['Archaea', 'archaeoastronomy', 'archaeology', 'archaic', 'archaism', 'archegonium', 'archeology'],
        'letter': 'a'
    }, {
        'roots': ['arct-'],
        'meaning': 'Relating to the North Pole or the region near it; relating to cold',
        'originLanguage': 'Greek',
        'examples': ['Antarctic', 'arctic', 'Arctic Ocean', 'palearctic'],
        'letter': 'a'
    }, {
        'roots': ['ard-'],
        'meaning': 'heat, glow, passion',
        'originLanguage': 'Latin',
        'examples': ['ardent', 'ardor', 'arson'],
        'letter': 'a'
    }, {
        'roots': ['ardu-'],
        'meaning': 'difficult',
        'originLanguage': 'Latin',
        'examples': ['arduous'],
        'letter': 'a'
    }, {
        'roots': ['aret-'],
        'meaning': 'virtue',
        'originLanguage': 'Greek',
        'examples': ['aretaic', 'arete'],
        'letter': 'a'
    }, {
        'roots': ['argent-'],
        'meaning': 'silver',
        'originLanguage': 'Latin',
        'examples': ['argent', 'Argentina'],
        'letter': 'a'
    }, {
        'roots': ['arid-'],
        'meaning': 'be dry',
        'originLanguage': 'Latin',
        'examples': ['arid'],
        'letter': 'a'
    }, {
        'roots': ['arist-'],
        'meaning': 'excellence',
        'originLanguage': 'Greek',
        'examples': ['aristocracy', 'aristocrat'],
        'letter': 'a'
    }, {
        'roots': ['arithm-'],
        'meaning': 'count, number',
        'originLanguage': 'Greek',
        'examples': ['antilogarithm', 'arithmetic', 'arithmomania', 'logarithm', 'logarithmic'],
        'letter': 'a'
    }, {
        'roots': ['arsen-'],
        'meaning': 'male',
        'originLanguage': 'Greek',
        'examples': ['arsenopyrite'],
        'letter': 'a'
    }, {
        'roots': ['art-'],
        'meaning': 'art, skill',
        'originLanguage': 'Latin',
        'examples': ['artifact', 'artifice', 'artificial', 'artificiality', 'artisan'],
        'letter': 'a'
    }, {
        'roots': ['arthr-'],
        'meaning': 'joint',
        'originLanguage': 'Greek',
        'examples': ['anarthria', 'arthritic', 'arthritis', 'arthrogryposis', 'arthropathy', 'arthroplasty', 'arthropod', 'arthroscope', 'arthroscopic', 'arthroscopy', 'arthrosis', 'dysarthria', 'osteoarthritis', 'spondyloarthropathy'],
        'letter': 'a'
    }, {
        'roots': ['arti-'],
        'meaning': 'even',
        'originLanguage': 'Greek',
        'examples': ['artiodactyl', 'artiodactylous'],
        'letter': 'a'
    }, {
        'roots': ['asc-'],
        'meaning': 'bag',
        'originLanguage': 'Greek',
        'examples': ['ascidium', 'ascites', 'ascitic', 'ascocarp', 'ascoma', 'ascomycete', 'Ascomycota', 'ascospore', 'ascus'],
        'letter': 'a'
    }, {
        'roots': ['asin-'],
        'meaning': 'ass',
        'originLanguage': 'Latin',
        'examples': ['asinine', 'ass', 'easel'],
        'letter': 'a'
    }, {
        'roots': ['asper-'],
        'meaning': 'rough',
        'originLanguage': 'Latin',
        'examples': ['asperity', 'exasperate'],
        'letter': 'a'
    }, {
        'roots': ['aspr-'],
        'meaning': 'white',
        'originLanguage': 'Greek',
        'examples': ['diaper'],
        'letter': 'a'
    }, {
        'roots': ['aster-', 'astr-'],
        'meaning': 'star, star-shaped',
        'originLanguage': 'Greek',
        'examples': ['aster', 'asterisk', 'asteroid', 'astrology', 'astronomy', 'astronaut', 'diasterism geaster', 'monaster'],
        'letter': 'a'
    }, {
        'roots': ['asthen-'],
        'meaning': 'weak',
        'originLanguage': 'Greek',
        'examples': ['asthenopia', 'asthenosphere', 'asthenozoospermia'],
        'letter': 'a'
    }, {
        'roots': ['ather-'],
        'meaning': 'gruel',
        'originLanguage': 'Greek',
        'examples': ['atherogenic', 'atheroma', 'atherosclerosis'],
        'letter': 'a'
    }, {
        'roots': ['athl-'],
        'meaning': 'prize',
        'originLanguage': 'Greek',
        'examples': ['athlete', 'athletic', 'decathlon', 'pentathlon', 'triathlon'],
        'letter': 'a'
    }, {
        'roots': ['-athroid-'],
        'meaning': 'gathered or lumped together',
        'originLanguage': 'Greek',
        'examples': ['epiathroid', 'hypoathroid'],
        'letter': 'a'
    }, {
        'roots': ['audac-'],
        'meaning': 'daring',
        'originLanguage': 'Latin',
        'examples': ['audacious', 'audacity'],
        'letter': 'a'
    }, {
        'roots': ['aud-'],
        'meaning': 'hearing, listening, sound',
        'originLanguage': 'Latin',
        'examples': ['audible', 'audio', 'audiology', 'audit', 'audition', 'auditorium', 'auditory'],
        'letter': 'a'
    }, {
        'roots': ['aug-', 'auct-'],
        'meaning': 'grow, increase',
        'originLanguage': 'Latin',
        'examples': ['auction', 'augend', 'augment', 'augmentation', 'augur', 'augury', 'august', 'author', 'auxiliary', 'inauguration'],
        'letter': 'a'
    }, {
        'roots': ['aul-'],
        'meaning': 'flute, tube',
        'originLanguage': 'Greek',
        'examples': ['aulete', 'aulos', 'hydraulic', 'hydraulus'],
        'letter': 'a'
    }, {
        'roots': ['aur-'],
        'meaning': 'relating to gold, or gold-colored',
        'originLanguage': 'Latin',
        'examples': ['aureate', 'aureole'],
        'letter': 'a'
    }, {
        'roots': ['auri-', 'aus-'],
        'meaning': 'relating to the ear',
        'originLanguage': 'Latin',
        'examples': ['aural', 'auricle', 'aurinasal', 'auscultate', 'auscultation'],
        'letter': 'a'
    }, {
        'roots': ['aut-', 'auto-'],
        'meaning': 'self; directed from within',
        'originLanguage': 'Greek',
        'examples': ['autarchism', 'autarchy', 'autarky', 'authentic', 'autism', 'autistic', 'autocracy', 'autograph', 'automatic', 'automaton', 'autonomy'],
        'letter': 'a'
    }, {
        'roots': ['aux-'],
        'meaning': 'increase',
        'originLanguage': 'Greek',
        'examples': ['auxanogram', 'auxanography', 'auxanology', 'auxanometer', 'auxesis', 'auxetic', 'auxin', 'auxochrome', 'auxology', 'auxotroph', 'auxotrophy'],
        'letter': 'a'
    }, {
        'roots': ['av-'],
        'meaning': 'desire',
        'originLanguage': 'Latin',
        'examples': ['avarice', 'avaricious', 'avarous', 'ave', 'avid', 'avidity'],
        'letter': 'a'
    }, {
        'roots': ['avi-', 'au-'],
        'meaning': 'bird',
        'originLanguage': 'Latin',
        'examples': ['auspice', 'auspicious', 'avian', 'aviary', 'aviation', 'aviator'],
        'letter': 'a'
    }, {
        'roots': ['axi-'],
        'meaning': 'merit, worth',
        'originLanguage': 'Greek',
        'examples': ['axiogenesis', 'axiology', 'axiom', 'axiomatic'],
        'letter': 'a'
    }, {
        'roots': ['axi-'],
        'meaning': 'axis',
        'originLanguage': 'Latin',
        'examples': ['axis', 'axisymmetry'],
        'letter': 'a'
    }, {
        'roots': ['axon-'],
        'meaning': 'axis, axle',
        'originLanguage': 'Greek',
        'examples': ['axon', 'axonography', 'axonometric', 'axonotmesis'],
        'letter': 'a'
    }],
    'b': [{
        'roots': ['ba-'],
        'meaning': '',
        'originLanguage': 'Greek',
        'examples': ['acrobat', 'acrobatic', 'adiabatic', 'aerobatic', 'anabasis', 'anabatic', 'antiparabema', 'base', 'basic', 'basidiocarp', 'basidioma', 'basidiomycete', 'basidiospore', 'basidium', 'basion', 'basionym', 'basis', 'basophilic', 'bema', 'catabasis', 'catabatic', 'diabase', 'diabatic', 'diabetes', 'diabetic', 'dibasic', 'hyperbaton', 'hypobasis', 'katabasis', 'katabatic', 'monobasic', 'polybasic', 'stereobate', 'stylobate', 'tribasic'],
        'letter': 'b'
    }, {
        'roots': ['bac-'],
        'meaning': 'rod-shaped',
        'originLanguage': 'Latin',
        'examples': ['baculiform', 'baculum', 'bacteria'],
        'letter': 'b'
    }, {
        'roots': ['bal-', 'bel-', 'bol-'],
        'meaning': 'throw',
        'originLanguage': 'Greek',
        'examples': ['ametabolic', 'ametabolism', 'amphibole', 'amphibolic', 'amphibolite', 'amphibolous', 'amphiboly', 'anabolic', 'anabolism', 'astrobleme', 'ball', 'ballism', 'ballista', 'ballistic', 'ballistospore', 'belomancy', 'belonephobia', 'bolide', 'bolometer', 'catabolic', 'catabolism', 'devil', 'diabolic', 'emblem', 'emblematic', 'embolic', 'embolism', 'embolismic', 'embolize', 'embolon', 'embolus', 'emboly', 'hemiballismus', 'holometabolism', 'hyperbola', 'hyperbole', 'hyperbolic', 'hyperboloid', 'metabolic', 'metabolism', 'metabolite', 'metabolize', 'palaver', 'parable', 'parabola', 'parabolic', 'paraboloid', 'parle', 'parley', 'parol', 'parole', 'problem', 'problematic', 'symbol', 'symbolic', 'symbolism', 'symbolist', 'symbolize', 'symbology', 'taurobolium', 'thromboembolism'],
        'letter': 'b'
    }, {
        'roots': ['bapt-'],
        'meaning': 'dip',
        'originLanguage': 'Greek',
        'examples': ['abaptiston', 'Anabaptist', 'baptism', 'baptize'],
        'letter': 'b'
    }, {
        'roots': ['bar-'],
        'meaning': 'weight, pressure',
        'originLanguage': 'Greek',
        'examples': ['abarognosis', 'antibaryon', 'baresthesia', 'bariatric', 'baritone', 'barognosis', 'barogram', 'barograph', 'barometer', 'barometric', 'barophobia', 'barostat', 'barycentre', 'barycentric', 'baryogenesis', 'baryon', 'barysphere', 'baryton', 'barytone', 'hyperbaric', 'hypobaric', 'isobar', 'isobaric'],
        'letter': 'b'
    }, {
        'roots': ['bas-'],
        'meaning': 'step',
        'originLanguage': 'Greek',
        'examples': [''],
        'letter': 'b'
    }, {
        'roots': ['bath-'],
        'meaning': 'deep, depth',
        'originLanguage': 'Greek',
        'examples': ['batholith', 'bathophobia', 'bathos', 'bathymetry', 'bathyscaphe', 'bathysphere', 'isobathic'],
        'letter': 'b'
    }, {
        'roots': ['be-', 'beat-'],
        'meaning': 'bless',
        'originLanguage': 'Latin',
        'examples': ['beatification'],
        'letter': 'b'
    }, {
        'roots': ['bell-', 'belli-'],
        'meaning': 'war',
        'originLanguage': 'Latin',
        'examples': ['antebellum', 'bellicose', 'belligerent', 'rebellion'],
        'letter': 'b'
    }, {
        'roots': ['ben-'],
        'meaning': 'good, well',
        'originLanguage': 'Latin',
        'examples': ['beneficence', 'benefit', 'benevolent', 'benign', 'benignant', 'benignity'],
        'letter': 'b'
    }, {
        'roots': ['bi-', 'bin-', 'bis-'],
        'meaning': 'two',
        'originLanguage': 'Latin',
        'examples': ['bicycle', 'biennial', 'bifocal', 'bisexual', 'bigamy', 'binary', 'binoculars', 'biscotti'],
        'letter': 'b'
    }, {
        'roots': ['bib-'],
        'meaning': 'drink',
        'originLanguage': 'Latin',
        'examples': ['bib', 'beer', 'beverage', 'imbibe'],
        'letter': 'b'
    }, {
        'roots': ['bibl-'],
        'meaning': 'book',
        'originLanguage': 'Greek',
        'examples': ['bible', 'biblioclasm', 'biblioclast', 'bibliogony', 'bibliographic', 'bibliography', 'biblioklept', 'bibliomancy', 'bibliomania', 'bibliophile', 'bibliophilia', 'bibliophobe', 'bibliophobia', 'bibliotaph'],
        'letter': 'b'
    }, {
        'roots': ['bio-', 'bi-'],
        'meaning': 'life',
        'originLanguage': 'Greek',
        'examples': ['abiogenesis', 'abiotic', 'aerobiology', 'anhydrobiosis', 'anoxybiosis', 'antibiotic', 'astrobiology', 'autobiography', 'biocentrism', 'biochron', 'biocoenosis', 'biogenesis', 'biographic', 'biography', 'biologism', 'biologist', 'biology', 'biome', 'biometric', 'biomorph', 'biomorphism', 'biophilia', 'biophysicist', 'biophysics', 'biopoiesis', 'biopolymer', 'biopsy', 'biorhythm', 'biosemiotic', 'biosphere', 'biostasis', 'biosynthesis', 'biota', 'biotic', 'biotin', 'biotope', 'biotype', 'biozone', 'chemobiosis', 'cryobiosis', 'cryptobiosis', 'endosymbiont', 'endosymbiosis', 'enterobiasis', 'macrobiotic', 'microbiology', 'osmobiosis', 'probiotic', 'symbiogenesis', 'symbiology', 'symbiont', 'symbiosis', 'symbiotic'],
        'letter': 'b'
    }, {
        'roots': ['blast-'],
        'meaning': 'germ, embryo, bud, cell with nucleus',
        'originLanguage': 'Greek',
        'examples': ['blastema', 'blastochyle', 'blastocoel', 'blastocoele', 'blastocyst', 'blastoderm', 'blastoma', 'blastula', 'cytotrophoblast', 'diploblasty', 'ectoblast', 'endoblast', 'entoblast', 'fibroblast', 'osteoblast', 'sideroblast'],
        'letter': 'b'
    }, {
        'roots': ['blenn-'],
        'meaning': 'slime',
        'originLanguage': 'Greek',
        'examples': ['blennadenitis', 'blennophobia', 'blennosperma', 'blennorrhagia'],
        'letter': 'b'
    }, {
        'roots': ['bol-'],
        'meaning': 'throw',
        'originLanguage': 'Greek',
        'examples': [''],
        'letter': 'b'
    }, {
        'roots': ['bol-'],
        'meaning': 'clod, lump',
        'originLanguage': 'Greek',
        'examples': ['bole', 'bolus', 'embolism'],
        'letter': 'b'
    }, {
        'roots': ['bomb-'],
        'meaning': 'boom',
        'originLanguage': 'Greek',
        'examples': ['bomb', 'bound'],
        'letter': 'b'
    }, {
        'roots': ['bon-'],
        'meaning': 'good',
        'originLanguage': 'Latin',
        'examples': ['bonify', 'bonitary'],
        'letter': 'b'
    }, {
        'roots': ['bore-'],
        'meaning': 'north',
        'originLanguage': 'Latin from Greek',
        'examples': ['borealis'],
        'letter': 'b'
    }, {
        'roots': ['botan-'],
        'meaning': 'plant',
        'originLanguage': 'Greek',
        'examples': ['botanic', 'botanist', 'botanology', 'botany'],
        'letter': 'b'
    }, {
        'roots': ['bov-', 'bu-'],
        'meaning': 'cow, ox',
        'originLanguage': 'Latin',
        'examples': ['beef', 'boor', 'bovine', 'bucinator muscle'],
        'letter': 'b'
    }, {
        'roots': ['brachi-', 'brachio-'],
        'meaning': 'arm',
        'originLanguage': 'Latin',
        'examples': ['brachiferous', 'brachial artery', 'brachiocubital'],
        'letter': 'b'
    }, {
        'roots': ['brachi-', 'brachio-', 'brachion-', 'brachioni-'],
        'meaning': 'arm',
        'originLanguage': 'Greek',
        'examples': ['brachialgia', 'brachionerysipelas', 'brachionigraph', 'brachiorrhachidian', 'brachiosaurus'],
        'letter': 'b'
    }, {
        'roots': ['brachy-'],
        'meaning': 'short',
        'originLanguage': 'Greek',
        'examples': ['amphibrach', 'brachistochrone', 'brachycephaly', 'brachydactyly', 'brachyury', 'dibrach', 'tribrach'],
        'letter': 'b'
    }, {
        'roots': ['brady-', 'bradys-'],
        'meaning': 'slow',
        'originLanguage': 'Greek',
        'examples': ['bradycardia', 'bradysuria', 'bradytelic'],
        'letter': 'b'
    }, {
        'roots': ['branchi-'],
        'meaning': 'gill',
        'originLanguage': 'Greek',
        'examples': ['branchiopneustic', 'branchiopod', 'nudibranch'],
        'letter': 'b'
    }, {
        'roots': ['brev-'],
        'meaning': 'brief, short (time)',
        'originLanguage': 'Latin',
        'examples': ['abbreviate', 'brevextensor', 'brevicaudate', 'brevity', 'brief'],
        'letter': 'b'
    }, {
        'roots': ['bromat-', 'bromato-', 'broma-', 'bromo-'],
        'meaning': 'food',
        'originLanguage': 'Greek',
        'examples': ['bromatium', 'bromateccrisis', 'bromatherapy', 'bromatology', 'bromography'],
        'letter': 'b'
    }, {
        'roots': ['brom-'],
        'meaning': 'oats',
        'originLanguage': 'Greek',
        'examples': ['brome', 'Bromus', 'Bromus ramosus'],
        'letter': 'b'
    }, {
        'roots': ['brom-'],
        'meaning': 'stench',
        'originLanguage': 'Greek',
        'examples': ['bromate', 'bromide', 'bromine', 'bromoderma', 'organobromine'],
        'letter': 'b'
    }, {
        'roots': ['bronch-'],
        'meaning': 'windpipe',
        'originLanguage': 'Greek',
        'examples': ['bronchia', 'bronchiole', 'bronchion', 'bronchitis', 'bronchomalacia', 'bronchopneumonia', 'bronchus', 'tracheobronchomalacia'],
        'letter': 'b'
    }, {
        'roots': ['bront-'],
        'meaning': 'thunder',
        'originLanguage': 'Greek',
        'examples': ['brontology', 'brontophobia', 'Brontosaurus'],
        'letter': 'b'
    }, {
        'roots': ['brot-'],
        'meaning': 'mortal',
        'originLanguage': 'Greek',
        'examples': ['ambrosia', 'ambrotype'],
        'letter': 'b'
    }, {
        'roots': ['bucc-'],
        'meaning': 'cheek, mouth, cavity',
        'originLanguage': 'Latin',
        'examples': ['buccal', 'buccilingual', 'buccolingual'],
        'letter': 'b'
    }, {
        'roots': ['bulb-'],
        'meaning': 'bulbous',
        'originLanguage': 'Latin',
        'examples': ['bulbiform', 'bulbiparous', 'bulboartrial', 'bulborrhexis', 'bulbous', 'bulbule'],
        'letter': 'b'
    }, {
        'roots': ['bull-'],
        'meaning': 'bubble, flask',
        'originLanguage': 'Latin',
        'examples': ['bullectomy', 'bulliferous', 'ebullient', 'ebullism'],
        'letter': 'b'
    }, {
        'roots': ['burs-'],
        'meaning': 'pouch, purse',
        'originLanguage': 'Latin',
        'examples': ['bursa', 'bursalogy', 'bursar', 'bursary', 'bursectomy', 'bursiform', 'disburse'],
        'letter': 'b'
    }, {
        'roots': ['butyr-'],
        'meaning': 'butter',
        'originLanguage': 'Greek',
        'examples': ['butyric'],
        'letter': 'b'
    }, {
        'roots': ['byss-'],
        'meaning': 'bottom',
        'originLanguage': 'Greek',
        'examples': ['abyss', 'abyssopelagic', 'hypabyssal'],
        'letter': 'b'
    }, {'roots': ['byss-'], 'meaning': 'flax', 'originLanguage': 'Greek', 'examples': ['byssus'], 'letter': 'b'}],
    'c': [{
        'roots': ['cac-', 'kak-'],
        'meaning': 'bad',
        'originLanguage': 'Greek',
        'examples': ['cachexia', 'cacistocracy', 'cacodemon', 'cacoepy', 'cacography', 'cacophonous', 'cacophony', 'cacorrhacitis', 'kakistocracy', 'kakistocrat'],
        'letter': 'c'
    }, {
        'roots': ['cad-', '-cid-', 'cas-'],
        'meaning': 'fall',
        'originLanguage': 'Latin',
        'examples': ['accidence', 'accident', 'accidental', 'cadaver', 'cadaverine', 'cadaverous', 'cadence', 'cadency', 'cadent', 'cadential', 'cadenza', 'caducity', 'caducous', 'cascade', 'case', 'casual', 'casualty', 'casuistry', 'chance', 'cheat', 'chute', 'coincide', 'coincidence', 'coincident', 'coincidental', 'decadence', 'decadent', 'decay', 'decidua', 'decidual', 'deciduate', 'deciduation', 'deciduous', 'demicadence', 'escheat', 'escheatable', 'escheatage', 'escheatment', 'escheator', 'incidence', 'incident', 'incidental', 'nonaccidental', 'nondeciduous', 'nonincidental', 'parachute', 'postaccident', 'procidentia', 'recidivous', 'semelincident'],
        'letter': 'c'
    }, {
        'roots': ['caed-', '-cid-', 'caes-', '-cis-'],
        'meaning': 'cut, kill',
        'originLanguage': 'Latin',
        'examples': ['caespitose', 'caesura', 'cement', 'cementation', 'cementitious', 'cementum', 'cespitose', 'chisel', 'circumcise', 'circumcision', 'concise', 'concision', 'decidability', 'decidable', 'decide', 'decision', 'decisive', 'deciso', 'excide', 'excise', 'excision', 'excisional', 'germicide', 'homicide', 'imprecise', 'imprecision', 'incise', 'incision', 'incisive', 'incisor', 'incisory', 'incisure', 'indecision', 'indecisive', 'occision', 'précis', 'precise', 'precision', 'scissors', 'semidecidable', 'succise', 'succision'],
        'letter': 'c'
    }, {
        'roots': ['cal-', 'call-'],
        'meaning': 'beautiful',
        'originLanguage': 'Greek',
        'examples': ['calisthenics', 'calligraphy', 'Callista', 'Callisto', 'calophyllous', 'kaleidoscope'],
        'letter': 'c'
    }, {
        'roots': ['cal-'],
        'meaning': 'call',
        'originLanguage': 'Latin',
        'examples': ['calendar', 'claim', 'class', 'conciliate', 'conciliatory', 'council', 'intercalate', 'nomenclature'],
        'letter': 'c'
    }, {
        'roots': ['cal-'],
        'meaning': 'heat',
        'originLanguage': 'Latin',
        'examples': ['caldarium', 'caldera', 'calefacient', 'calefaction', 'calefactive', 'calefactory', 'calenture', 'calescent', 'calid', 'calor', 'calore', 'caloric', 'calorie', 'calorifacient', 'calorific', 'calorigenic', 'calorimeter', 'caudle', 'cauldron', 'chafe', 'chafery', 'chalder', 'chaldron', 'chaud-froid', 'chauffer', 'chauffeur', 'chauffeuse', 'decalescence', 'decalescent', 'nonchalance', 'nonchalant', 'recalescence', 'scald'],
        'letter': 'c'
    }, {
        'roots': ['calc-'],
        'meaning': 'stone',
        'originLanguage': 'Latin and Greek',
        'examples': ['calcite', 'calcitrant', 'calcium', 'calculate', 'calculus', 'chalicothere', 'chalk', 'recalcitrant'],
        'letter': 'c'
    }, {
        'roots': ['calv-', 'calum-'],
        'meaning': 'trick, lie, deceive',
        'originLanguage': 'Latin',
        'examples': ['calumnious', 'calumny', 'cavil', 'challenge'],
        'letter': 'c'
    }, {
        'roots': ['calyp-'],
        'meaning': 'cover',
        'originLanguage': 'Greek',
        'examples': ['apocalypse', 'apocalyptic', 'apocalypticism', 'calyce', 'calyptra', 'Calyptrogyne', 'calyx', 'epicalyx', 'eucalypt', 'eucalyptus'],
        'letter': 'c'
    }, {
        'roots': ['camer-'],
        'meaning': 'vault',
        'originLanguage': 'Latin',
        'examples': ['antechamber', 'bicameral', 'camaraderie', 'camber', 'camera', 'chamber', 'chamberlain', 'comrade', 'concamerate', 'concameration', 'multicamera', 'tricameral', 'unicameral'],
        'letter': 'c'
    }, {
        'roots': ['camisi-'],
        'meaning': 'shirt',
        'originLanguage': 'Latin',
        'examples': ['camisade', 'camisado', 'Camisard', 'camisole', 'chemise'],
        'letter': 'c'
    }, {
        'roots': ['camp-'],
        'meaning': 'field',
        'originLanguage': 'Latin',
        'examples': ['camp', 'campaign', 'campesino', 'campestral', 'campicolous', 'campimetry', 'campo', 'campsite', 'campus', 'champertous', 'champerty', 'champignon', 'champion', 'decamp', 'decampment', 'encamp', 'encampment'],
        'letter': 'c'
    }, {
        'roots': ['can-'],
        'meaning': 'dog',
        'originLanguage': 'Latin',
        'examples': ['canaille', 'canary', 'canicular', 'canicule', 'canid', 'canine', 'Canis', 'Canis Major', 'postcanine'],
        'letter': 'c'
    }, {
        'roots': ['can-'],
        'meaning': 'reed, rod',
        'originLanguage': 'Greek',
        'examples': ['cane', 'canister', 'canon', 'canonic'],
        'letter': 'c'
    }, {
        'roots': ['can-', '-cin-', 'cant-', '-cent-'],
        'meaning': 'sing',
        'originLanguage': 'Latin',
        'examples': ['accent', 'accentual', 'accentuate', 'accentuation', 'canción', 'canorous', 'cant', 'cantabile', 'cantata', 'cantation', 'cantatory', 'cantatrice', 'canticle', 'canticum', 'cantiga', 'cantilena', 'cantillate', 'cantillation', 'cantion', 'canto', 'cantor', 'cantus', 'canzona', 'canzone', 'Carmen', 'chanson', 'chansonnier', 'chant', 'chanteur', 'chanteuse', 'chanticleer', 'charm', 'concent', 'descant', 'discant', 'discantus', 'disenchant', 'disenchantment', 'disencharm', 'disincentive', 'enchant', 'enchantment', 'enchantress', 'incantation', 'incantational', 'incentive', 'plainchant', 'precentor', 'recant', 'recantation', 'succentor', 'vaticinate', 'vaticination', 'vaticinator'],
        'letter': 'c'
    }, {
        'roots': ['cand-', 'cend-'],
        'meaning': 'glowing, iridescent',
        'originLanguage': 'Latin',
        'examples': ['candela', 'candid', 'candle', 'candor', 'incandescent', 'incendiary', 'incense'],
        'letter': 'c'
    }, {
        'roots': ['cap-', '-cip-', 'capt-', '-cept-'],
        'meaning': 'hold, take',
        'originLanguage': 'Latin',
        'examples': ['capable', 'capacious', 'captive', 'caption', 'captivate', 'capture', 'conception', 'except', 'forceps', 'incipient', 'intercept', 'recipient'],
        'letter': 'c'
    }, {
        'roots': ['capit-', '-cipit-'],
        'meaning': 'head',
        'originLanguage': 'Latin',
        'examples': ['achievable', 'achieve', 'achievement', 'ancipital', 'ancipitous', 'biceps', 'bicipital', 'cabotage', 'cad', 'caddie', 'cadet', 'cape', 'capital', 'capitular', 'capitulate', 'capitulation', 'captain', 'chapter', 'chaptrel', 'chattel', 'chef', 'chief', 'chieftain', 'co-captain', 'co-captaincy', 'decapitate', 'decapitation', 'occipital', 'occiput', 'precipitation', 'precipitous', 'quadriceps', 'recap', 'recapitulate', 'sincipital', 'sinciput', 'sous-chef', 'subcaptain', 'triceps', 'tricipital', 'unicipital', 'vice-captain', 'vice-captaincy'],
        'letter': 'c'
    }, {
        'roots': ['capn-'],
        'meaning': 'smoke',
        'originLanguage': 'Greek',
        'examples': ['capnogram', 'capnograph', 'capnography', 'capnolagnia', 'capnomancy', 'capnometer', 'capnometry', 'capnomor', 'capnophile', 'hypercapnia', 'hypocapnia'],
        'letter': 'c'
    }, {
        'roots': ['capr-'],
        'meaning': 'goat',
        'originLanguage': 'Latin',
        'examples': ['cab', 'caper', 'caprice', 'Capricorn', 'caprine'],
        'letter': 'c'
    }, {
        'roots': ['caps-'],
        'meaning': 'box, case',
        'originLanguage': 'Latin',
        'examples': ['capsule'],
        'letter': 'c'
    }, {
        'roots': ['carbon-'],
        'meaning': 'coal',
        'originLanguage': 'Latin',
        'examples': ['bicarbonate', 'carbon', 'carbonara', 'carbonate', 'carbonation', 'Carboniferous', 'carbuncle', 'radiocarbon'],
        'letter': 'c'
    }, {
        'roots': ['carcer-'],
        'meaning': 'jail',
        'originLanguage': 'Latin',
        'examples': ['chancel', 'chancellery', 'chancellor', 'chancery', 'incarcerate', 'incarceration', 'subchancel'],
        'letter': 'c'
    }, {
        'roots': ['carcin-'],
        'meaning': 'cancer (disease)',
        'originLanguage': 'Latin from Greek',
        'examples': ['carcinogenic', 'carcinoma'],
        'letter': 'c'
    }, {
        'roots': ['cardi-'],
        'meaning': 'heart',
        'originLanguage': 'Greek',
        'examples': ['cardiac', 'cardialgia', 'cardiograph', 'cardioid', 'cardiologist', 'cardiology', 'cardiomegaly', 'cardiomyopathy', 'cardioplegia', 'cardioplegic', 'cardiospasm', 'electrocardiogram', 'electrocardiography', 'endocardium', 'epicardium', 'hemicardia', 'myocardium', 'neurocardiology', 'pericardium'],
        'letter': 'c'
    }, {
        'roots': ['cardin-'],
        'meaning': 'hinge',
        'originLanguage': 'Latin',
        'examples': ['cardinal', 'cardinality', 'kern'],
        'letter': 'c'
    }, {
        'roots': ['carn-'],
        'meaning': 'flesh',
        'originLanguage': 'Latin',
        'examples': ['carnage', 'carnal', 'carnality', 'carnary', 'carnate', 'carnation', 'carneous', 'carnival', 'carnivore', 'carnose', 'carnosity', 'carrion', 'caruncle', 'carunculate', 'charcuterie', 'charnel', 'discarnate', 'incarnadine', 'incarnate', 'incarnation', 'reincarnate', 'reincarnation'],
        'letter': 'c'
    }, {
        'roots': ['carp-'],
        'meaning': 'fruit',
        'originLanguage': 'Greek',
        'examples': ['acarpous', 'acrocarpous', 'amphicarpous', 'angiocarpous', 'anisocarpic', 'Carpo', 'carpogonium', 'carpology', 'carpophagous', 'carpophore', 'carpospore', 'cystocarp', 'dipterocarp', 'endocarp', 'epicarp', 'exocarp', 'Karpos', 'mericarp', 'mesocarp', 'monocarpic', 'pericarp', 'polycarpic', 'procarp', 'pseudocarp'],
        'letter': 'c'
    }, {
        'roots': ['carp-'],
        'meaning': 'wrist',
        'originLanguage': 'Greek',
        'examples': ['carpal', 'carpal tunnel syndrome', 'carpus', 'metacarpus'],
        'letter': 'c'
    }, {
        'roots': ['cast-'],
        'meaning': 'pure, cut',
        'originLanguage': 'Latin',
        'examples': ['caste', 'castigate', 'castrate', 'chaste', 'chastity', 'incest'],
        'letter': 'c'
    }, {
        'roots': ['cata-', 'cat-'],
        'meaning': 'down, against, back',
        'originLanguage': 'Greek',
        'examples': ['catabolic', 'catacomb', 'catalyst', 'catarrhine', 'catastrophe', 'catatonia', 'cathode', 'cation'],
        'letter': 'c'
    }, {
        'roots': ['caten-'],
        'meaning': 'chain',
        'originLanguage': 'Latin',
        'examples': ['catenary', 'concatenation'],
        'letter': 'c'
    }, {
        'roots': ['cathar-'],
        'meaning': 'pure',
        'originLanguage': 'Greek',
        'examples': ['catharsis', 'cathartic'],
        'letter': 'c'
    }, {
        'roots': ['caud-'],
        'meaning': 'tail',
        'originLanguage': 'Latin',
        'examples': ['caudal', 'coda'],
        'letter': 'c'
    }, {
        'roots': ['caus-', '-cus-'],
        'meaning': 'cause or motive',
        'originLanguage': 'Latin',
        'examples': ['accuse', 'because', 'causal', 'causative', 'cause', 'excuse'],
        'letter': 'c'
    }, {
        'roots': ['caust-', 'caut-'],
        'meaning': 'burn',
        'originLanguage': 'Greek',
        'examples': ['calm', 'catacaustic', 'causalgia', 'causalgic', 'caustic', 'cauter', 'cauterize', 'cautery', 'diacaustic', 'encaustic', 'holocaust', 'hypocaust'],
        'letter': 'c'
    }, {
        'roots': ['cav-'],
        'meaning': 'hollow',
        'originLanguage': 'Latin',
        'examples': ['cave', 'cavity', 'excavation'],
        'letter': 'c'
    }, {
        'roots': ['ced-', 'cess-'],
        'meaning': 'move, yield, go, surrender',
        'originLanguage': 'Latin',
        'examples': ['accede', 'cede', 'concede', 'precede', 'procedure', 'proceed', 'procession', 'recede', 'secede', 'succeed', 'success'],
        'letter': 'c'
    }, {
        'roots': ['cel-'],
        'meaning': 'hide',
        'originLanguage': 'Latin',
        'examples': ['ceiling', 'clandestine', 'conceal', 'occult'],
        'letter': 'c'
    }, {
        'roots': ['celer-'],
        'meaning': 'quick',
        'originLanguage': 'Latin',
        'examples': ['acceleration', 'celerity'],
        'letter': 'c'
    }, {
        'roots': ['cen-', 'caen-'],
        'meaning': 'new',
        'originLanguage': 'Greek',
        'examples': ['caenogastropod', 'caenogenesis', 'Cenozoic'],
        'letter': 'c'
    }, {
        'roots': ['cen-'],
        'meaning': 'empty',
        'originLanguage': 'Greek',
        'examples': ['cenotaph', 'kenosis'],
        'letter': 'c'
    }, {
        'roots': ['cen-', 'coen-'],
        'meaning': 'common',
        'originLanguage': 'Greek',
        'examples': ['cenobite', 'coenesthesia', 'coenocyte', 'epicene', 'epicœne', 'koinonos', 'koinophilia'],
        'letter': 'c'
    }, {
        'roots': ['cens-'],
        'meaning': 'to assess',
        'originLanguage': 'Latin',
        'examples': ['censure', 'census'],
        'letter': 'c'
    }, {
        'roots': ['cent-'],
        'meaning': 'hundred',
        'originLanguage': 'Latin',
        'examples': ['cent', 'centennial', 'centurion', 'percent'],
        'letter': 'c'
    }, {
        'roots': ['centen-'],
        'meaning': 'hundred each',
        'originLanguage': 'Latin',
        'examples': ['centenarian', 'centenary'],
        'letter': 'c'
    }, {
        'roots': ['centesim-'],
        'meaning': 'hundredth',
        'originLanguage': 'Latin',
        'examples': ['centesimal', 'centesimation'],
        'letter': 'c'
    }, {
        'roots': ['centr-'],
        'meaning': 'center',
        'originLanguage': 'Greek',
        'examples': ['acentric', 'acrocentric', 'barycenter', 'centesis', 'centre', 'centric', 'centrism', 'centrist', 'centroid', 'centromere', 'centromeric', 'centrosphere', 'centrosymmetric', 'centrosymmetry', 'centrum', 'eccentric', 'enterocentesis', 'epicentre', 'holocentric', 'metacentric', 'monocentric', 'neocentromere', 'orthocenter', 'orthocentric', 'paracentesis', 'telocentric'],
        'letter': 'c'
    }, {
        'roots': ['centri-'],
        'meaning': 'center',
        'originLanguage': 'Latin',
        'examples': ['central', 'center', 'concentrate', 'concentric', 'centrifugal', 'centripetal'],
        'letter': 'c'
    }, {
        'roots': ['cephal-'],
        'meaning': 'head',
        'originLanguage': 'Greek',
        'examples': ['acephalic', 'acephaly', 'anencephaly', 'autocephaly', 'brachiocephalic', 'brachycephalic', 'cephalic', 'cephalomancy', 'cephalometry', 'cephalon', 'cephalopagus', 'cephalopod', 'diencephalon', 'dolichocephalic', 'encephalitis', 'encephalogram', 'encephalopathy', 'holoprosencephaly', 'hydrocephalus', 'macrocephaly', 'mesaticephalic', 'mesencephalic', 'mesocephalic', 'metencephalon', 'microcephaly', 'myelencephalon', 'neencephalon', 'paleencephalon', 'prosencephalon', 'rhombencephalon', 'rhombencephalosynapsis', 'syncephalus', 'telencephalon'],
        'letter': 'c'
    }, {
        'roots': ['ceram-'],
        'meaning': 'clay',
        'originLanguage': 'Greek',
        'examples': ['ceramic'],
        'letter': 'c'
    }, {
        'roots': ['cerat-'],
        'meaning': 'horn',
        'originLanguage': 'Greek',
        'examples': ['keratin', 'triceratops'],
        'letter': 'c'
    }, {
        'roots': ['cern-', 'cer-'],
        'meaning': 'sift',
        'originLanguage': 'Latin',
        'examples': ['ascertain', 'certain', 'concern', 'concert', 'decree', 'discern', 'excrement', 'secern', 'secret'],
        'letter': 'c'
    }, {
        'roots': ['cervic-'],
        'meaning': 'relating to the neck, relating to the cervix',
        'originLanguage': 'Latin',
        'examples': ['cervix', 'cervical'],
        'letter': 'c'
    }, {
        'roots': ['ceter-'],
        'meaning': 'other',
        'originLanguage': 'Latin',
        'examples': ['et cetera'],
        'letter': 'c'
    }, {
        'roots': ['chaet-'],
        'meaning': 'hair, bristle, or seta',
        'originLanguage': 'Greek',
        'examples': ['chaetophobia', 'chaetophorous', 'Chaetomium', 'Chaetomorpha', 'Oligochaeta', 'Polychaeta', 'polychaete', 'spirochaete', 'spirochete'],
        'letter': 'c'
    }, {
        'roots': ['chir-'],
        'meaning': 'of the hand or hands',
        'originLanguage': 'Greek',
        'examples': ['chiral', 'chiropractic', 'chiroptera', 'chirurgy', 'enchiridion', 'Haplocheirus'],
        'letter': 'c'
    }, {
        'roots': ['chelon-'],
        'meaning': 'relating to a turtle',
        'originLanguage': 'Greek',
        'examples': ['Archelon', 'chelonia'],
        'letter': 'c'
    }, {
        'roots': ['chlor-'],
        'meaning': 'green',
        'originLanguage': 'Greek',
        'examples': ['chloranthy', 'chlorine', 'chlorophobia', 'chlorophyll', 'chloroplast', 'pyrochlore'],
        'letter': 'c'
    }, {
        'roots': ['chondr-'],
        'meaning': 'cartilage',
        'originLanguage': 'Greek',
        'examples': ['hypochondriasis', 'osteochondritis'],
        'letter': 'c'
    }, {
        'roots': ['chore-'],
        'meaning': 'relating to dance',
        'originLanguage': 'Greek',
        'examples': ['chorea', 'choree', 'choreia', 'choreography', 'chorus', 'hemichorea'],
        'letter': 'c'
    }, {
        'roots': ['chord-'],
        'meaning': 'cord',
        'originLanguage': 'Latin and Greek',
        'examples': ['chordata', 'cord', 'hexachord', 'monochord', 'polychord', 'tetrachord'],
        'letter': 'c'
    }, {
        'roots': ['chres-'],
        'meaning': 'use',
        'originLanguage': 'Greek',
        'examples': ['chresard', 'chresonym', 'chrestomathic', 'chrestomathy', 'heterochresonym', 'heterochresonymy', 'orthochresonym', 'orthochresonymy'],
        'letter': 'c'
    }, {
        'roots': ['chro-', 'chrom-'],
        'meaning': 'color',
        'originLanguage': 'Greek',
        'examples': ['achromat', 'achromatic', 'achromatism', 'achromatopsia', 'achromatopsic', 'amphichroic', 'apochromat', 'auxochrome', 'chroma', 'chromatic', 'chromatid', 'chromatophore', 'chrome', 'chromium', 'chromogen', 'chromolithography', 'chromophobia', 'chromophore', 'chromosome', 'dichroic', 'dichroism', 'dichromatic', 'heliochrome', 'heterochromatic', 'heterochromatin', 'microchromosome', 'monochromatic', 'monochrome', 'photochromism', 'pleochroism', 'polychromatic', 'polychrome', 'trichroism', 'trichromatic', 'trichromic'],
        'letter': 'c'
    }, {
        'roots': ['chron-'],
        'meaning': 'time',
        'originLanguage': 'Greek',
        'examples': ['anachronism', 'asynchronous', 'biochronology', 'chronaxie', 'chronic', 'chronicle', 'chronogram', 'chronograph', 'chronology', 'chronometer', 'chronometry', 'chronophobia', 'chronophotography', 'chronostasis', 'geochronology', 'heterochrony', 'hydrochronometer', 'isochron', 'protochronism', 'synchronic', 'synchronism', 'synchronize', 'synchronous', 'tautochrone'],
        'letter': 'c'
    }, {
        'roots': ['chrys-'],
        'meaning': 'gold',
        'originLanguage': 'Greek',
        'examples': ['chrysalis', 'chryselephantine', 'chrysolite', 'chrysophobia'],
        'letter': 'c'
    }, {
        'roots': ['cili-'],
        'meaning': 'eyelash',
        'originLanguage': 'Latin',
        'examples': ['cilia', 'supercilious'],
        'letter': 'c'
    }, {
        'roots': ['ciner-'],
        'meaning': 'ash',
        'originLanguage': 'Latin',
        'examples': ['incineration'],
        'letter': 'c'
    }, {
        'roots': ['cing-', 'cinct-'],
        'meaning': 'gird',
        'originLanguage': 'Latin',
        'examples': ['succinct'],
        'letter': 'c'
    }, {
        'roots': ['circ-'],
        'meaning': 'circle, ring',
        'originLanguage': 'Latin',
        'examples': ['circle', 'circular', 'circulate', 'circus'],
        'letter': 'c'
    }, {
        'roots': ['circum-'],
        'meaning': 'around',
        'originLanguage': 'Latin',
        'examples': ['circumcise', 'circumference', 'circumlocution', 'circumnavigate', 'circumscribe'],
        'letter': 'c'
    }, {
        'roots': ['cirr-'],
        'meaning': 'orange',
        'originLanguage': 'Greek',
        'examples': ['cirrhosis'],
        'letter': 'c'
    }, {
        'roots': ['cirr-'],
        'meaning': 'curl, tentacle',
        'originLanguage': 'Latin',
        'examples': ['cirrus'],
        'letter': 'c'
    }, {
        'roots': ['cit-'],
        'meaning': 'call, start',
        'originLanguage': 'Latin',
        'examples': ['citation', 'cite', 'excite', 'incite', 'solicit', 'solicitous'],
        'letter': 'c'
    }, {
        'roots': ['civ-'],
        'meaning': 'citizen',
        'originLanguage': 'Latin',
        'examples': ['civic', 'civil', 'civilian', 'civility', 'civilization'],
        'letter': 'c'
    }, {
        'roots': ['clad-'],
        'meaning': 'branch',
        'originLanguage': 'Greek',
        'examples': ['clade', 'cladistics', 'cladogenesis', 'cladogram', 'heterocladic'],
        'letter': 'c'
    }, {
        'roots': ['clam-'],
        'meaning': 'cry out',
        'originLanguage': 'Latin',
        'examples': ['acclaim', 'claim', 'clamor', 'exclamation', 'proclamation', 'reclamation'],
        'letter': 'c'
    }, {
        'roots': ['clar-'],
        'meaning': 'clear',
        'originLanguage': 'Latin',
        'examples': ['clarity', 'clear', 'declaration'],
        'letter': 'c'
    }, {
        'roots': ['clast-'],
        'meaning': 'broken',
        'originLanguage': 'Greek',
        'examples': ['anorthoclase', 'antanaclasis', 'clastic', 'iconoclast', 'orthoclase', 'osteoclast', 'plagioclase', 'pyroclastic', 'synclastic'],
        'letter': 'c'
    }, {
        'roots': ['claud-', '-clud-', 'claus-', '-clus-'],
        'meaning': 'close, shut',
        'originLanguage': 'Latin',
        'examples': ['clause', 'claustrophobia', 'conclude', 'exclude', 'exclusive', 'include', 'occlusion', 'occult', 'recluse', 'seclude'],
        'letter': 'c'
    }, {
        'roots': ['clav-'],
        'meaning': 'key',
        'originLanguage': 'Greek',
        'examples': ['clavichord', 'clavicle', 'conclave'],
        'letter': 'c'
    }, {
        'roots': ['cleist-'],
        'meaning': 'closed',
        'originLanguage': 'Greek',
        'examples': ['cleistogamy', 'cleistothecium', 'enterocleisis', 'kleisma'],
        'letter': 'c'
    }, {
        'roots': ['cleithr-'],
        'meaning': 'bar, key',
        'originLanguage': 'Greek',
        'examples': ['Clathrus', 'cleithrophobia', 'cleithrum'],
        'letter': 'c'
    }, {
        'roots': ['cle-'],
        'meaning': 'call',
        'originLanguage': 'Greek',
        'examples': ['ecclesia', 'Ecclesiastes', 'ecclesiastic', 'ecclesiology', 'ecclesiophobia', 'epiclesis', 'paraclete'],
        'letter': 'c'
    }, {
        'roots': ['clement-'],
        'meaning': 'mild',
        'originLanguage': 'Latin',
        'examples': ['clemency', 'inclement'],
        'letter': 'c'
    }, {
        'roots': ['clin-'],
        'meaning': 'bed',
        'originLanguage': 'Greek',
        'examples': ['clinic'],
        'letter': 'c'
    }, {
        'roots': ['clin-'],
        'meaning': 'lean, recline',
        'originLanguage': 'Latin',
        'examples': ['decline', 'declination', 'incline', 'inclination', 'recline'],
        'letter': 'c'
    }, {
        'roots': ['cochl-'],
        'meaning': 'snail, spiral shell',
        'originLanguage': 'Greek',
        'examples': ['cochlea'],
        'letter': 'c'
    }, {
        'roots': ['coel-'],
        'meaning': 'hollow',
        'originLanguage': 'Greek',
        'examples': ['blastocoel', 'coelom', 'coelomate', 'coelomic', 'enterocoely', 'pseudocoelomate', 'sarcocele', 'schizocoelomate', 'schizocoely', 'spongocoel'],
        'letter': 'c'
    }, {
        'roots': ['col-'],
        'meaning': 'strain',
        'originLanguage': 'Latin',
        'examples': ['colander', 'coulee', 'coulis', 'coulisse', 'couloir', 'cullender', 'cullis', 'percolate', 'percolation', 'percolator', 'piña colada', 'portcullis'],
        'letter': 'c'
    }, {
        'roots': ['col-', 'cult-'],
        'meaning': 'cultivate, till, inhabit',
        'originLanguage': 'Latin',
        'examples': ['acculturate', 'acculturation', 'agriculture', 'apiculture', 'bicultural', 'colonial', 'colony', 'countercultural', 'counterculture', 'cult', 'cultivable', 'cultivate', 'cultivation', 'cultivator', 'cultural', 'culturati', 'culture', 'deculturate', 'deculturation', 'incult', 'inculturation', 'inquiline', 'inquilinity', 'inquilinous', 'intercultural', 'multicultural', 'postcolonial', 'precolonial', 'subcultural', 'subculture'],
        'letter': 'c'
    }, {
        'roots': ['coll-'],
        'meaning': 'hill',
        'originLanguage': 'Latin',
        'examples': ['colliculus'],
        'letter': 'c'
    }, {
        'roots': ['coll-'],
        'meaning': 'neck',
        'originLanguage': 'Latin',
        'examples': ['accolade', 'col', 'collar', 'decollate', 'decollation', 'décolletage', 'encollar'],
        'letter': 'c'
    }, {
        'roots': ['color-'],
        'meaning': 'color',
        'originLanguage': 'Latin',
        'examples': ['bicolor', 'Colorado', 'coloration', 'coloratura', 'concolorous', 'decolor', 'discolor', 'discoloration', 'encolor', 'multicolor', 'quadricolor', 'recolor', 'tricolor', 'unicolor', 'versicolor'],
        'letter': 'c'
    }, {
        'roots': ['com-'],
        'meaning': 'friendly, kind',
        'originLanguage': 'Latin',
        'examples': ['comity'],
        'letter': 'c'
    }, {
        'roots': ['con-', 'co-', 'col-', 'com-', 'cor-'],
        'meaning': 'with, together',
        'originLanguage': 'Latin',
        'examples': ['coagulate', 'collide', 'compress', 'connect', 'connote', 'contain', 'corrode', 'quondam'],
        'letter': 'c'
    }, {
        'roots': ['con-'],
        'meaning': 'cone',
        'originLanguage': 'Greek',
        'examples': ['conic', 'conical', 'conicoid', 'conodont', 'conoid', 'conoscope', 'orthocone', 'orthoconic', 'polyconic'],
        'letter': 'c'
    }, {
        'roots': ['condi-'],
        'meaning': 'season',
        'originLanguage': 'Latin',
        'examples': ['condiment'],
        'letter': 'c'
    }, {
        'roots': ['contra-'],
        'meaning': 'against',
        'originLanguage': 'Latin',
        'examples': ['contraband', 'contraception', 'contradict', 'contraindicate', 'contrast', 'contravene'],
        'letter': 'c'
    }, {
        'roots': ['copi-'],
        'meaning': 'plenty',
        'originLanguage': 'Latin',
        'examples': ['copious', 'copy', 'cornucopia'],
        'letter': 'c'
    }, {
        'roots': ['copr-'],
        'meaning': 'dung',
        'originLanguage': 'Greek',
        'examples': ['copremia', 'coprographia', 'coprolagnia', 'coprolalia', 'coprolite', 'coprolith', 'coprology', 'coprophagia', 'coprophagy', 'coprophilia', 'copropraxia', 'encopresis', 'encopretic'],
        'letter': 'c'
    }, {
        'roots': ['copul-'],
        'meaning': 'bond',
        'originLanguage': 'Latin',
        'examples': ['copula', 'copulation', 'couple'],
        'letter': 'c'
    }, {
        'roots': ['cor-', 'cord-'],
        'meaning': 'heart',
        'originLanguage': 'Latin',
        'examples': ['accord', 'accordance', 'accordant', 'accordatura', 'concord', 'concordance', 'concordant', 'concordat', 'corcle', 'cordate', 'cordial', 'cordiality', 'cordiform', 'core', 'courage', 'courageous', 'discord', 'discordance', 'discordant', 'discourage', 'discouragement', 'encourage', 'encouragement', 'misericord', 'nonaccordant', 'obcordate', 'record', 'scordatura'],
        'letter': 'c'
    }, {
        'roots': ['corac-'],
        'meaning': 'raven',
        'originLanguage': 'Greek',
        'examples': ['coracoid'],
        'letter': 'c'
    }, {
        'roots': ['cori-'],
        'meaning': 'hide, leather',
        'originLanguage': 'Latin',
        'examples': ['coriaceous', 'corious', 'corium', 'cuirass', 'cuirassier', 'cuirie', 'excoriate', 'excoriation'],
        'letter': 'c'
    }, {
        'roots': ['corn-'],
        'meaning': 'horn',
        'originLanguage': 'Latin',
        'examples': ['bicorn', 'bicorne', 'Capricorn', 'cornea', 'corneal', 'corneous', 'corner', 'cornicle', 'corniculate', 'corniferous', 'cornification', 'corniform', 'cornucopia', 'quadricorn', 'quadricornous', 'tricorn', 'tricorne', 'tricornigerous', 'tricornute', 'unicorn', 'unicornous'],
        'letter': 'c'
    }, {
        'roots': ['coron-'],
        'meaning': 'crown',
        'originLanguage': 'Latin',
        'examples': ['corona', 'coronation', 'coronavirus', 'coroner', 'coronet', 'coroniform', 'Coronilla', 'crown', 'incoronate'],
        'letter': 'c'
    }, {
        'roots': ['corpor-'],
        'meaning': 'body',
        'originLanguage': 'Latin',
        'examples': ['accorporate', 'bicorporal', 'concorporate', 'concorporation', 'corporal', 'corporality', 'corporate', 'corporation', 'corporative', 'corporature', 'corporeal', 'corporeality', 'corporeity', 'corps', 'corpse', 'corpulence', 'corpulent', 'corpus', 'corpuscle', 'corpuscular', 'disincorporate', 'disincorporation', 'extracorporeal', 'incorporal', 'incorporality', 'incorporate', 'incorporation', 'incorporeal', 'incorporeality', 'incorporeity', 'tricorporal'],
        'letter': 'c'
    }, {
        'roots': ['cortic-'],
        'meaning': 'bark',
        'originLanguage': 'Latin',
        'examples': ['cortical', 'corticate', 'corticiform', 'corticifugal', 'corticipetal', 'decorticate', 'decortication', 'decorticator'],
        'letter': 'c'
    }, {
        'roots': ['cosm-'],
        'meaning': 'universe',
        'originLanguage': 'Greek',
        'examples': ['cosmic', 'cosmogeny', 'cosmogony', 'cosmology', 'cosmonaut', 'cosmopolitan', 'cosmopolite', 'cosmos', 'microcosm'],
        'letter': 'c'
    }, {
        'roots': ['cosmet-'],
        'meaning': 'the art of dress and ornament',
        'originLanguage': 'Greek',
        'examples': ['cosmesis', 'cosmetics', 'cosmetologist', 'cosmetology'],
        'letter': 'c'
    }, {
        'roots': ['cost-'],
        'meaning': 'rib',
        'originLanguage': 'Latin',
        'examples': ['accost', 'bicostate', 'coast', 'coastal', 'costa', 'costal', 'costate', 'curvicostate', 'entrecôte', 'infracostal', 'intercostal', 'intracoastal', 'multicostate', 'quadricostate', 'supracostal', 'tricostate', 'unicostate'],
        'letter': 'c'
    }, {
        'roots': ['cotyl-'],
        'meaning': 'cup',
        'originLanguage': 'Greek',
        'examples': ['cotyledon', 'dicotyledon', 'dicotyledonous', 'eudicotyledon', 'monocotyledon', 'monocotyledonous', 'tricotyledonous'],
        'letter': 'c'
    }, {
        'roots': ['-cracy', '-crat'],
        'meaning': 'government, rule, authority',
        'originLanguage': 'Greek',
        'examples': ['acrasia', 'akrasia', 'akratic', 'anocracy', 'aristocracy', 'autocracy', 'autocrat', 'autocratic', 'bureaucracy', 'democracy', 'democratic', 'pancratium', 'plutocracy', 'technocracy', 'technocrat', 'theocracy'],
        'letter': 'c'
    }, {
        'roots': ['crani-'],
        'meaning': 'skull',
        'originLanguage': 'Greek',
        'examples': ['craniologist', 'craniometry', 'craniosynostosis', 'cranium', 'hemicrania', 'megrim', 'migraine'],
        'letter': 'c'
    }, {
        'roots': ['crass-'],
        'meaning': 'thick',
        'originLanguage': 'Latin',
        'examples': ['crass', 'crassitude', 'crassulaceous'],
        'letter': 'c'
    }, {
        'roots': ['crea-'],
        'meaning': 'make',
        'originLanguage': 'Latin',
        'examples': ['creation', 'creative', 'creator', 'creature', 'creole', 'procreation', 'recreation'],
        'letter': 'c'
    }, {
        'roots': ['cred-'],
        'meaning': 'believe, trust',
        'originLanguage': 'Latin',
        'examples': ['accreditation', 'credence', 'credentials', 'credibility', 'credible', 'credit', 'creditor', 'credo', 'credulity', 'credulous', 'creed', 'discredit', 'incredible', 'incredulous', 'miscreant', 'recreant'],
        'letter': 'c'
    }, {
        'roots': ['crepid-'],
        'meaning': 'boot, shoe',
        'originLanguage': 'Greek',
        'examples': ['crepidoma'],
        'letter': 'c'
    }, {
        'roots': ['cresc-'],
        'meaning': 'grow, rise',
        'originLanguage': 'Latin',
        'examples': ['accresce', 'accrescence', 'accrescent', 'accrete', 'accretion', 'accrue', 'concrete', 'crescendo', 'crescent', 'crew', 'decrease', 'increase', 'recruit', 'recruitment', 'surcrew'],
        'letter': 'c'
    }, {
        'roots': ['cribr-'],
        'meaning': 'sieve',
        'originLanguage': 'Latin',
        'examples': ['cribble', 'cribellate', 'cribellum', 'cribrate', 'cribriform', 'garble'],
        'letter': 'c'
    }, {
        'roots': ['cric-'],
        'meaning': 'ring',
        'originLanguage': 'Greek',
        'examples': ['cricoid', 'cricoidectomy', 'Cricosaurus', 'cricothyroid', 'cricothyrotomy', 'cricotomy'],
        'letter': 'c'
    }, {
        'roots': ['crisp-'],
        'meaning': 'curled',
        'originLanguage': 'Latin',
        'examples': ['crape', 'crepe', 'crêpe', 'crisp', 'crispate', 'crispation'],
        'letter': 'c'
    }, {
        'roots': ['crist-'],
        'meaning': 'crest',
        'originLanguage': 'Latin',
        'examples': ['crease', 'crest', 'cristate'],
        'letter': 'c'
    }, {
        'roots': ['crit-', 'crisi-'],
        'meaning': 'judge, separate',
        'originLanguage': 'Greek',
        'examples': ['apocrine', 'crisis', 'criterion', 'critic', 'critical', 'criticaster', 'criticise', 'criticism', 'critique', 'diacritic', 'eccrine', 'eccrinology', 'eccrisis', 'eccritic', 'endocrine', 'endocrinology', 'exocrine', 'heterocrine', 'holocrine', 'hypercriticism', 'hypocrisy', 'hypocrite', 'kritarchy', 'Kritosaurus', 'merocrine', 'syncrisis'],
        'letter': 'c'
    }, {
        'roots': ['cross-'],
        'meaning': 'fringe, tassel',
        'originLanguage': 'Greek',
        'examples': ['crossopterygii'],
        'letter': 'c'
    }, {
        'roots': ['cruc-'],
        'meaning': 'cross',
        'originLanguage': 'Latin',
        'examples': ['cross', 'crucial', 'cruciate', 'crucifer', 'cruciferous', 'crucifix', 'crucifixion', 'cruciform', 'crucify', 'crucigerous', 'cruise', 'crusade', 'cruzeiro', 'discruciate', 'excruciate', 'intercross', 'recross'],
        'letter': 'c'
    }, {
        'roots': ['crur-'],
        'meaning': 'leg, shank',
        'originLanguage': 'Latin',
        'examples': ['bicrural', 'crural', 'crus', 'equicrural'],
        'letter': 'c'
    }, {
        'roots': ['-cry'],
        'meaning': 'wail, shriek',
        'originLanguage': 'Latin',
        'examples': ['cry', 'decry', 'descry'],
        'letter': 'c'
    }, {
        'roots': ['crypt-'],
        'meaning': 'hide, hidden',
        'originLanguage': 'Greek',
        'examples': ['apocrypha', 'apocryphal', 'archaeocryptography', 'crypt', 'cryptanalysis', 'crypteia', 'cryptic', 'cryptobiosis', 'cryptobiotic', 'cryptochrome', 'cryptogam', 'cryptogenic', 'cryptography', 'cryptology', 'cryptomonad', 'cryptophyte', 'cryptosystem', 'grot', 'grotesque', 'grotto'],
        'letter': 'c'
    }, {
        'roots': ['cten-'],
        'meaning': 'comb',
        'originLanguage': 'Greek',
        'examples': ['ctenidium', 'ctenoid', 'ctenophore'],
        'letter': 'c'
    }, {
        'roots': ['cub-'],
        'meaning': 'cube',
        'originLanguage': 'Greek',
        'examples': ['cubic', 'cuboctahedron', 'cuboid', 'hemicube', 'hypercube'],
        'letter': 'c'
    }, {
        'roots': ['cub-'],
        'meaning': 'lie',
        'originLanguage': 'Latin',
        'examples': ['incubation', 'succuba'],
        'letter': 'c'
    }, {
        'roots': ['culin-'],
        'meaning': 'kitchen',
        'originLanguage': 'Latin',
        'examples': ['culinarian', 'culinary', 'kiln'],
        'letter': 'c'
    }, {
        'roots': ['culp-'],
        'meaning': 'blame, fault',
        'originLanguage': 'Latin',
        'examples': ['culpability', 'culpable', 'culprit', 'exculpate', 'exculpatory', 'inculpable', 'inculpate', 'inculpatory', 'mea culpa'],
        'letter': 'c'
    }, {
        'roots': ['cune-'],
        'meaning': 'wedge',
        'originLanguage': 'Latin',
        'examples': ['coign', 'coigne', 'coin', 'cuneate', 'cuneiform', 'cuneus', 'encoignure', 'obcuneate', 'precuneus', 'quoin', 'sconcheon', 'scuncheon'],
        'letter': 'c'
    }, {
        'roots': ['cur-'],
        'meaning': 'care for',
        'originLanguage': 'Latin',
        'examples': ['accuracy', 'accurate', 'assecure', 'assurance', 'assure', 'curability', 'curable', 'curacy', 'curate', 'curative', 'curator', 'cure', 'curettage', 'curette', 'curio', 'curiosity', 'curious', 'ensure', 'inaccuracy', 'inaccurate', 'incurable', 'insecure', 'insecurity', 'insurability', 'insurable', 'insurance', 'insure', 'manicure', 'pedicure', 'pococurante', 'proctor', 'proctour', 'proctorage', 'proctorial', 'procurable', 'procuracy', 'procuration', 'procurator', 'procure', 'procurement', 'proxy', 'reassurance', 'reassure', 'reinsurance', 'reinsure', 'scour', 'scourage', 'secure', 'security', 'sinecural', 'sinecure', 'sure', 'surety'],
        'letter': 'c'
    }, {
        'roots': ['curr-', 'curs-'],
        'meaning': 'run, course',
        'originLanguage': 'Latin',
        'examples': ['concur', 'concurrent', 'corridor', 'courier', 'course', 'currency', 'current', 'cursive', 'cursor', 'cursory', 'discourse', 'excursion', 'incur', 'occur', 'recur', 'recursion', 'recursive', 'succor'],
        'letter': 'c'
    }, {
        'roots': ['curv-'],
        'meaning': 'bent',
        'originLanguage': 'Latin',
        'examples': ['cavort', 'curb', 'curvaceous', 'curvate', 'curvation', 'curvature', 'curve', 'curviform', 'curvilinear', 'curvity', 'incurvate', 'incurvature', 'incurve', 'recurvate', 'recurve', 'recurvous'],
        'letter': 'c'
    }, {
        'roots': ['cuspid-'],
        'meaning': 'lance, point',
        'originLanguage': 'Latin',
        'examples': ['bicuspid', 'bicuspidate', 'cusp', 'quadricuspid', 'tricuspid'],
        'letter': 'c'
    }, {
        'roots': ['cut-'],
        'meaning': 'hide, skin',
        'originLanguage': 'Latin',
        'examples': ['cutaneous', 'cuticle', 'cuticolor', 'cuticular', 'cutin', 'cutis', 'cutisector', 'intracutaneous', 'subcutaneous'],
        'letter': 'c'
    }, {
        'roots': ['cyan-'],
        'meaning': 'blue',
        'originLanguage': 'Greek',
        'examples': ['cyanic', 'cyanide', 'cyanogen', 'cyanophobia', 'cyanophore', 'cyanosis', 'cyanotic', 'isocyanic'],
        'letter': 'c'
    }, {
        'roots': ['cycl-'],
        'meaning': 'circle',
        'originLanguage': 'Greek',
        'examples': ['acyclic', 'anticyclone', 'anticyclonic', 'bicycle', 'cycle', 'cyclic', 'cyclide', 'cycloid', 'cyclone', 'cyclops', 'cyclosis', 'cyclotomic', 'dicyclic', 'eccyclema', 'epicycle', 'epicycloid', 'hemicycle', 'hemicyclium', 'heterocyclic', 'homocyclic', 'hypercycle', 'hypocycloid', 'isocyclic', 'mesocyclone', 'monocyclic', 'polycyclic', 'pseudocyclosis', 'tetracyclic', 'tricycle', 'tricyclic', 'unicycle'],
        'letter': 'c'
    }, {
        'roots': ['cylind-'],
        'meaning': 'roll',
        'originLanguage': 'Greek',
        'examples': ['cylinder', 'cylindric', 'cylindroid', 'cylindroma', 'pseudocylindric'],
        'letter': 'c'
    }, {
        'roots': ['cyn-'],
        'meaning': 'dog',
        'originLanguage': 'Greek',
        'examples': ['cynic', 'cynicism', 'cynodont', 'cynology', 'cynophagy', 'cynophilia', 'cynophobia', 'Cynosaurus', 'cynosure', 'eucynodont'],
        'letter': 'c'
    }, {
        'roots': ['cyst-'],
        'meaning': 'capsule',
        'originLanguage': 'Greek',
        'examples': ['cysteine', 'cystic', 'cysticercus', 'cystine', 'cystolith', 'cystoma', 'oocyst', 'polycystic'],
        'letter': 'c'
    }, {
        'roots': ['cyt-'],
        'meaning': 'cell',
        'originLanguage': 'Greek',
        'examples': ['astrocyte', 'cnidocyte', 'cytapheresis', 'cytaster', 'cytokine', 'cytokinesis', 'cytokinin', 'cytology', 'cytoplasm', 'cytostasis', 'cytostatic', 'exocytosis', 'gonocyte', 'hypercytosis', 'leukocyte', 'leukocytosis', 'monocyte', 'monocytopoiesis', 'pancytopenia', 'phagocytosis', 'polycythaemia', 'polycythemia', 'syncytium'],
        'letter': 'c'
    }],
    'd': [{
        'roots': ['da-', 'dida-'],
        'meaning': 'learn',
        'originLanguage': 'Greek',
        'examples': ['autodidact', 'Didache', 'didact', 'didactic', 'didacticism'],
        'letter': 'd'
    }, {
        'roots': ['dacry-'],
        'meaning': 'tear',
        'originLanguage': 'Greek',
        'examples': ['dacryoadenitis'],
        'letter': 'd'
    }, {
        'roots': ['dactyl-'],
        'meaning': 'digit, finger, toe',
        'originLanguage': 'Greek',
        'examples': ['anisodactyly', 'antidactylus', 'arachnodactyly', 'artiodactyl', 'brachydactyly', 'clinodactyly', 'dactyl', 'dactylic', 'dactylology', 'dactylomancy', 'dactylomegaly', 'dactylus', 'dactyly', 'date', 'didactyly', 'ectrodactyly', 'heterodactylous', 'heterodactyly', 'leptodactylous', 'monodactyly', 'oligodactyly', 'pamprodactyly', 'pentadactyl', 'pentadactylous', 'pentadactyly', 'perissodactyl', 'polydactyly', 'pterodactyl', 'schizodactyly', 'syndactylous', 'syndactyly', 'tetradactylous', 'tetradactyly', 'tridactyly', 'zygodactyly'],
        'letter': 'd'
    }, {
        'roots': ['dam-'],
        'meaning': 'tame',
        'originLanguage': 'Greek',
        'examples': ['adamant', 'adamantine', 'adamantinoma', 'Damian'],
        'letter': 'd'
    }, {
        'roots': ['damn-', '-demn-'],
        'meaning': 'to inflict loss upon',
        'originLanguage': 'Latin',
        'examples': ['condemn', 'condemnation', 'damage', 'damnation', 'indemnify', 'indemnity'],
        'letter': 'd'
    }, {
        'roots': ['de-'],
        'meaning': 'bind',
        'originLanguage': 'Greek',
        'examples': ['arthrodesis', 'asyndeton', 'desmid', 'desmitis', 'desmoid', 'desmoplasia', 'desmosome', 'diadem', 'plasmodesma', 'polysyndeton', 'syndesis', 'syndesmosis', 'syndetic', 'syndeton'],
        'letter': 'd'
    }, {
        'roots': ['de-'],
        'meaning': 'down, away from, removing',
        'originLanguage': 'Latin',
        'examples': ['decay', 'decide', 'declare', 'decline', 'decompose', 'dedicate', 'deduce', 'defend', 'deletion', 'delineate', 'delude', 'demarcate', 'dementia', 'depress', 'derogatory', 'desecrate', 'descend', 'destroy', 'detract'],
        'letter': 'd'
    }, {
        'roots': ['deb-'],
        'meaning': 'owe',
        'originLanguage': 'Latin',
        'examples': ['debit', 'debt'],
        'letter': 'd'
    }, {
        'roots': ['dec-'],
        'meaning': 'ten',
        'originLanguage': 'Greek',
        'examples': ['decad', 'decade', 'decagon', 'decagram', 'decahedron', 'Decalogue', 'decamer', 'decamerous', 'decameter', 'decapod', 'decathlon'],
        'letter': 'd'
    }, {
        'roots': ['decim-'],
        'meaning': 'tenth part',
        'originLanguage': 'Latin',
        'examples': ['decimal', 'decimate', 'decimation', 'decimator', 'decuman', 'dime'],
        'letter': 'd'
    }, {
        'roots': ['decor-'],
        'meaning': 'ornament',
        'originLanguage': 'Latin',
        'examples': ['decor', 'décor', 'decorament', 'decorate', 'decoration', 'decorative', 'decorator', 'decorous', 'decorum', 'redecorate'],
        'letter': 'd'
    }, {
        'roots': ['del-'],
        'meaning': 'delete',
        'originLanguage': 'Latin',
        'examples': ['delete', 'deletion', 'indelible'],
        'letter': 'd'
    }, {
        'roots': ['delt-'],
        'meaning': 'D, d',
        'originLanguage': 'Greek',
        'examples': ['delta', 'deltoid'],
        'letter': 'd'
    }, {
        'roots': ['dem-', 'dom-'],
        'meaning': 'build',
        'originLanguage': 'Greek',
        'examples': ['apodeme', 'monodomy', 'opisthodomos', 'polydomy'],
        'letter': 'd'
    }, {
        'roots': ['dem-'],
        'meaning': 'people',
        'originLanguage': 'Greek',
        'examples': ['Damocles', 'demagogue', 'deme', 'democracy', 'demographic', 'demography', 'demonym', 'demophobia', 'demotic', 'ecdemic', 'endemic', 'epidemic', 'epidemiology', 'pandemic'],
        'letter': 'd'
    }, {
        'roots': ['den-'],
        'meaning': 'ten each',
        'originLanguage': 'Latin',
        'examples': ['denar', 'denarian', 'denarius', 'denary', 'denier', 'dinar', 'dinero', 'dinheiro'],
        'letter': 'd'
    }, {
        'roots': ['dendr-'],
        'meaning': 'tree',
        'originLanguage': 'Greek',
        'examples': ['dendric', 'dendrite', 'dendrochronology', 'dendrogram', 'dendromancy', 'Epidendrum', 'rhododendron'],
        'letter': 'd'
    }, {
        'roots': ['dens-'],
        'meaning': 'thick',
        'originLanguage': 'Latin',
        'examples': ['condensable', 'condensate', 'condensation', 'condensational', 'condensative', 'condense', 'dense', 'density', 'nondense', 'superdense'],
        'letter': 'd'
    }, {
        'roots': ['dent-'],
        'meaning': 'tooth',
        'originLanguage': 'Latin',
        'examples': ['bident', 'bidental', 'dandelion', 'dental', 'dentary', 'dentate', 'dentation', 'dentelle', 'denticity', 'denticle', 'denticulate', 'dentiferous', 'dentiform', 'dentifrice', 'dentigerous', 'dentil', 'dentin', 'dentinal', 'dentine', 'dentition', 'denture', 'indent', 'indentation', 'indenture', 'interdental', 'interdentil', 'intradental', 'multidentate', 'quadridentate', 'trident', 'tridentate'],
        'letter': 'd'
    }, {
        'roots': ['der-'],
        'meaning': 'skin',
        'originLanguage': 'Greek',
        'examples': ['Dermaptera', 'dermatology', 'dermis', 'ectoderm', 'endoderm', 'epidermis', 'hypodermic', 'mesoderm', 'scleroderma', 'taxidermy', 'xeroderma'],
        'letter': 'd'
    }, {
        'roots': ['despot-'],
        'meaning': 'master',
        'originLanguage': 'Greek',
        'examples': ['despot', 'despotic', 'despotism'],
        'letter': 'd'
    }, {
        'roots': ['deuter-'],
        'meaning': 'second',
        'originLanguage': 'Greek',
        'examples': ['deuteragonist', 'deuteranomaly', 'deuteranopia', 'deuteride', 'deuterium', 'deuterogamist', 'deuterogamy', 'Deuteromycota', 'deuteron', 'Deuteronomy', 'deuterostome'],
        'letter': 'd'
    }, {
        'roots': ['dexi-'],
        'meaning': 'right',
        'originLanguage': 'Greek',
        'examples': ['Dexiarchia'],
        'letter': 'd'
    }, {
        'roots': ['dexter-'],
        'meaning': 'right',
        'originLanguage': 'Latin',
        'examples': ['ambidexterity', 'ambidextrous', 'dexterity', 'dexterous', 'dextral', 'dextrality', 'dextrin', 'dextrorse', 'dextrose'],
        'letter': 'd'
    }, {
        'roots': ['di-'],
        'meaning': 'two',
        'originLanguage': 'Greek',
        'examples': ['diatomic', 'dicot', 'digamy', 'diode', 'dipole'],
        'letter': 'd'
    }, {
        'roots': ['dia-'],
        'meaning': 'apart, through',
        'originLanguage': 'Greek',
        'examples': ['deacon', 'diagram', 'dialysis', 'diameter'],
        'letter': 'd'
    }, {
        'roots': ['diacosi-'],
        'meaning': 'two hundred',
        'originLanguage': 'Greek',
        'examples': ['diacosigon', 'diacosipentecontaheptagon'],
        'letter': 'd'
    }, {
        'roots': ['dic-', 'dict-'],
        'meaning': 'say, speak, proclaim',
        'originLanguage': 'Latin',
        'examples': ['benediction', 'condition', 'contradict', 'dictate', 'dictation', 'dictator', 'diction', 'dictionary', 'dictum', 'edict', 'indictment', 'interdiction', 'malediction', 'predict', 'prediction', 'valediction', 'verdict'],
        'letter': 'd'
    }, {
        'roots': ['dida-'],
        'meaning': 'teach',
        'originLanguage': 'Greek',
        'examples': ['autodidact', 'Didache', 'didact', 'didactic'],
        'letter': 'd'
    }, {
        'roots': ['digit-'],
        'meaning': 'finger',
        'originLanguage': 'Latin',
        'examples': ['bidigitate', 'digit', 'digital', 'digitate', 'digitiform', 'digitigrade', 'multidigit', 'multidigitate'],
        'letter': 'd'
    }, {
        'roots': ['din-'],
        'meaning': 'terrible, fearfully great',
        'originLanguage': 'Greek',
        'examples': ['dinosaur'],
        'letter': 'd'
    }, {
        'roots': ['dipl-'],
        'meaning': 'twofold',
        'originLanguage': 'Greek',
        'examples': ['diploblasty', 'diploid', 'diploidy', 'diploma', 'diplomacy', 'diplomat', 'diplomatic', 'diplomatics', 'diplonema', 'diplophase', 'diplopia', 'diplosis', 'diplotene', 'haplodiploid', 'haplodiploidy'],
        'letter': 'd'
    }, {
        'roots': ['do-'],
        'meaning': 'give',
        'originLanguage': 'Greek',
        'examples': ['anecdote', 'antidoron', 'antidote', 'apodosis', 'dose'],
        'letter': 'd'
    }, {
        'roots': ['doc-', 'doct-'],
        'meaning': 'teach',
        'originLanguage': 'Latin',
        'examples': ['docile', 'doctor', 'doctrine', 'document', 'indoctrinate', 'indoctrination'],
        'letter': 'd'
    }, {
        'roots': ['dodec-'],
        'meaning': 'twelve',
        'originLanguage': 'Greek',
        'examples': ['dodecagon', 'dodecahedron', 'Dodecanese', 'dodecaphony', 'dodecastyle', 'dodecasyllabic', 'hemidodecahedron'],
        'letter': 'd'
    }, {
        'roots': ['dog-', 'dox-'],
        'meaning': 'opinion, tenet',
        'originLanguage': 'Greek',
        'examples': ['dogma', 'dogmatic', 'dogmatism', 'doxology', 'heterodox', 'orthodox', 'paradox'],
        'letter': 'd'
    }, {
        'roots': ['dol-'],
        'meaning': 'pain',
        'originLanguage': 'Latin',
        'examples': ['condolence', 'dol', 'doleful', 'dolorous', 'indolence'],
        'letter': 'd'
    }, {
        'roots': ['dom-'],
        'meaning': 'house',
        'originLanguage': 'Latin',
        'examples': ['dame', 'domal', 'dome', 'domestic', 'domesticate', 'domestication', 'domesticity', 'domestique', 'domicile', 'domiciliary', 'major-domo', 'semidome'],
        'letter': 'd'
    }, {
        'roots': ['domin-'],
        'meaning': 'master',
        'originLanguage': 'Latin',
        'examples': ['beldam', 'beldame', 'belladonna', 'codomain', 'codominance', 'codominant', 'condominium', 'dam', 'dame', 'damsel', 'danger', 'demesne', 'demoiselle', 'domain', 'dominance', 'dominant', 'dominate', 'domination', 'dominative', 'dominator', 'dominatrix', 'domine', 'domineer', 'dominicide', 'dominion', 'dominium', 'domino', 'duenna', 'dungeon', 'madam', 'madame', 'mademoiselle', 'madonna', 'predominance', 'predominant', 'predominate', 'quasidominance', 'semidominance', 'subdominant', 'superdominant'],
        'letter': 'd'
    }, {
        'roots': ['domit-'],
        'meaning': 'tame',
        'originLanguage': 'Latin',
        'examples': ['daunt', 'domitable', 'indomitable'],
        'letter': 'd'
    }, {
        'roots': ['don-'],
        'meaning': 'give',
        'originLanguage': 'Latin',
        'examples': ['condonation', 'condone', 'donate', 'donation', 'donative', 'donator', 'donatory', 'donor', 'pardon', 'pardonable'],
        'letter': 'd'
    }, {
        'roots': ['dorm-'],
        'meaning': 'sleep',
        'originLanguage': 'Latin',
        'examples': ['dormant', 'dormitory'],
        'letter': 'd'
    }, {
        'roots': ['dors-'],
        'meaning': 'back',
        'originLanguage': 'Latin',
        'examples': ['disendorse', 'dorsal', 'dorsiferous', 'dorsiflexion', 'dorsiflexor', 'dorsigrade', 'dorsiventral', 'dorsum', 'dossier', 'endorse', 'endorsee', 'endorsement', 'indorse', 'indorsement', 'reredos'],
        'letter': 'd'
    }, {
        'roots': ['dra-'],
        'meaning': 'do',
        'originLanguage': 'Greek',
        'examples': ['dramatic', 'dramaturgy', 'drastic', 'melodramatic', 'monodrama'],
        'letter': 'd'
    }, {
        'roots': ['drach-'],
        'meaning': 'grasp',
        'originLanguage': 'Greek',
        'examples': ['didrachm', 'drachm', 'drachma', 'dram', 'tetradrachm'],
        'letter': 'd'
    }, {
        'roots': ['dram-', 'drom-'],
        'meaning': 'run',
        'originLanguage': 'Greek',
        'examples': ['aerodrome', 'anadromous', 'antidromic', 'catadromous', 'diadromous', 'dromaeosaurid', 'heterodromous', 'hippodrome', 'loxodrome', 'monodromy', 'palindrome', 'syndrome'],
        'letter': 'd'
    }, {
        'roots': ['dros-'],
        'meaning': 'dew',
        'originLanguage': 'Greek',
        'examples': ['drosometer', 'Drosophila'],
        'letter': 'd'
    }, {
        'roots': ['dry-'],
        'meaning': 'tree',
        'originLanguage': 'Greek',
        'examples': ['dryad', 'dryadic', 'hamadryad'],
        'letter': 'd'
    }, {
        'roots': ['du-'],
        'meaning': 'two',
        'originLanguage': 'Latin',
        'examples': ['deuce', 'doubt', 'dual', 'duality', 'duet', 'duo', 'duplex', 'duplicity', 'duumvirate', 'duumviri', 'nonduality'],
        'letter': 'd'
    }, {
        'roots': ['dub-'],
        'meaning': 'doubtful',
        'originLanguage': 'Latin',
        'examples': ['doubt', 'dubiety', 'dubious'],
        'letter': 'd'
    }, {
        'roots': ['duc-', 'duct-'],
        'meaning': 'lead',
        'originLanguage': 'Latin',
        'examples': ['abduce', 'abduct', 'adduce', 'adduct', 'conduce', 'deduce', 'induce', 'introduce', 'produce', 'reduce', 'seduce', 'traduce'],
        'letter': 'd'
    }, {
        'roots': ['dulc-'],
        'meaning': 'sweet',
        'originLanguage': 'Latin',
        'examples': ['billet-doux', 'dolce', 'dolcetto', 'douce', 'doux', 'dulcet', 'dulcian', 'dulcify', 'dulcimer', 'edulcorant', 'edulcorate', 'subdulcid'],
        'letter': 'd'
    }, {
        'roots': ['dur-'],
        'meaning': 'hard',
        'originLanguage': 'Latin',
        'examples': ['dour', 'dura', 'durability', 'durable', 'durain', 'dural', 'duramen', 'durance', 'durancy', 'duration', 'durative', 'dure', 'duress', 'durity', 'durous', 'durum', 'endurable', 'endurance', 'endurant', 'endure', 'indurate', 'induration', 'nondurable', 'obduracy', 'obdurate', 'obduration', 'perdurable', 'perdurance', 'perdure', 'subdural'],
        'letter': 'd'
    }, {
        'roots': ['dy-'],
        'meaning': 'two',
        'originLanguage': 'Greek',
        'examples': ['dyad', 'dyadic'],
        'letter': 'd'
    }, {
        'roots': ['dyna-'],
        'meaning': 'power',
        'originLanguage': 'Greek',
        'examples': ['aerodynamic', 'aerodynamics', 'antidynastic', 'autodyne', 'didynamous', 'dynamic', 'dynamism', 'dynamite', 'dynamo', 'dynast', 'dynastic', 'dynasty', 'heterodyne', 'metadynamics'],
        'letter': 'd'
    }, {
        'roots': ['dys-'],
        'meaning': 'badly, ill',
        'originLanguage': 'Greek',
        'examples': ['dysentery', 'dysphagia', 'dysphasia', 'dysplasia', 'dystrophy'],
        'letter': 'd'
    }],
    'e': [{
        'roots': ['ec-'],
        'meaning': 'out',
        'originLanguage': 'Greek',
        'examples': ['eccentric', 'ecstasy', 'ecstatic'],
        'letter': 'e'
    }, {
        'roots': ['ecclesi-'],
        'meaning': 'assembly, congregation',
        'originLanguage': 'Greek',
        'examples': ['Ecclesiastes', 'ecclesiastical'],
        'letter': 'e'
    }, {
        'roots': ['eco-'],
        'meaning': 'house',
        'originLanguage': 'Greek',
        'examples': ['ecology', 'economics', 'economy', 'ecumenism'],
        'letter': 'e'
    }, {
        'roots': ['ecto-'],
        'meaning': 'outside',
        'originLanguage': 'Greek',
        'examples': ['ectoderm', 'ectoparasite', 'ectotherm'],
        'letter': 'e'
    }, {
        'roots': ['ed-', 'es-'],
        'meaning': 'eat',
        'originLanguage': 'Latin',
        'examples': ['comedo', 'comestible', 'edacity', 'edibility', 'edible', 'escarole', 'esculent', 'esurience', 'esurient', 'inedia', 'inedible', 'inescate', 'inescation', 'obese', 'obesity'],
        'letter': 'e'
    }, {
        'roots': ['eg-'],
        'meaning': 'goat',
        'originLanguage': 'Greek',
        'examples': ['egophony'],
        'letter': 'e'
    }, {
        'roots': ['ego-'],
        'meaning': 'self, I (first person)',
        'originLanguage': 'Latin, Greek',
        'examples': ['egocentric', 'egoism', 'egoistic', 'egomania', 'egomaniac'],
        'letter': 'e'
    }, {
        'roots': ['eiren-'],
        'meaning': 'peace',
        'originLanguage': 'Greek',
        'examples': ['eirenic', 'irenic', 'irenology'],
        'letter': 'e'
    }, {
        'roots': ['electr-'],
        'meaning': 'amber',
        'originLanguage': 'Greek',
        'examples': ['electric', 'electricity', 'electrolysis', 'electrolyte', 'electromagnetic', 'electron', 'electronic', 'polyelectrolyte'],
        'letter': 'e'
    }, {
        'roots': ['elem-', 'alm-'],
        'meaning': 'pity',
        'originLanguage': 'Greek',
        'examples': ['almoner', 'alms', 'eleemosynary'],
        'letter': 'e'
    }, {
        'roots': ['em-', 'empt-'],
        'meaning': 'buy',
        'originLanguage': 'Latin',
        'examples': ['adeem', 'adempt', 'ademption', 'exemption', 'preempt', 'redeem'],
        'letter': 'e'
    }, {
        'roots': ['eme-'],
        'meaning': 'vomit',
        'originLanguage': 'Greek',
        'examples': ['antiemetic', 'emesis', 'emetic', 'emetine', 'emetophobia', 'haematemesis'],
        'letter': 'e'
    }, {
        'roots': ['emul-'],
        'meaning': 'striving to equal, rivaling',
        'originLanguage': 'Latin',
        'examples': ['emulator'],
        'letter': 'e'
    }, {
        'roots': ['en-', 'el-', 'em-'],
        'meaning': 'in',
        'originLanguage': 'Greek',
        'examples': ['emphasis', 'enclitic', 'enthusiasm'],
        'letter': 'e'
    }, {
        'roots': ['enanti-'],
        'meaning': 'opposite',
        'originLanguage': 'Greek',
        'examples': ['enantiomer', 'enantiomerism', 'enantiomorph', 'enantiornithine'],
        'letter': 'e'
    }, {
        'roots': ['encephal-'],
        'meaning': 'brain',
        'originLanguage': 'Greek',
        'examples': ['encephalopathy'],
        'letter': 'e'
    }, {
        'roots': ['endo-'],
        'meaning': 'inside, within',
        'originLanguage': 'Greek',
        'examples': ['endocardial', 'endocerid', 'endocrine', 'endocytosis', 'endogamy', 'endogenous', 'endoscopy', 'endoskeleton', 'endosperm', 'endospore'],
        'letter': 'e'
    }, {
        'roots': ['engy-'],
        'meaning': 'narrow',
        'originLanguage': 'Greek',
        'examples': ['Engystomops', 'hypengyophobia'],
        'letter': 'e'
    }, {
        'roots': ['ennea-'],
        'meaning': 'nine',
        'originLanguage': 'Greek',
        'examples': ['ennead', 'enneadic', 'enneagon', 'enneagram', 'enneahedron', 'enneamer', 'enneastyle', 'enneasyllabic', 'enneode'],
        'letter': 'e'
    }, {
        'roots': ['ens-'],
        'meaning': 'sword',
        'originLanguage': 'Latin',
        'examples': ['ensiferous', 'ensiform'],
        'letter': 'e'
    }, {
        'roots': ['eo-', 'eos-'],
        'meaning': 'dawn, east',
        'originLanguage': 'Greek',
        'examples': ['Eocene', 'eohippus', 'Eosentomon', 'eosin', 'eosinophil', 'eosinophilic', 'eozoic'],
        'letter': 'e'
    }, {
        'roots': ['ep-', 'epi-'],
        'meaning': 'upon',
        'originLanguage': 'Greek',
        'examples': ['ephedra', 'ephemeral', 'ephemeris', 'epicenter', 'epidemic', 'epilog', 'epiphany', 'episteme', 'epistemic', 'epistemology', 'epitaph', 'epitaphios', 'epithet', 'epitome', 'epoch', 'eponymous'],
        'letter': 'e'
    }, {
        'roots': ['equ-', '-iqu-'],
        'meaning': 'even, equal, level',
        'originLanguage': 'Latin',
        'examples': ['equal', 'equanimity', 'equate', 'Equator', 'equilibrium', 'equinox', 'equipoise', 'equity', 'equivalence', 'equivocal', 'equivocate', 'iniquity'],
        'letter': 'e'
    }, {
        'roots': ['equ-'],
        'meaning': 'horse',
        'originLanguage': 'Latin',
        'examples': ['equestrian'],
        'letter': 'e'
    }, {
        'roots': ['ere-'],
        'meaning': 'row',
        'originLanguage': 'Greek',
        'examples': ['trierarch'],
        'letter': 'e'
    }, {
        'roots': ['erg-', 'org-', 'urg-'],
        'meaning': 'work',
        'originLanguage': 'Greek',
        'examples': ['allergic', 'allergy', 'argon', 'demiurge', 'dramaturgy', 'endoergic', 'energetic', 'energy', 'erg', 'ergate', 'ergatocracy', 'ergodic', 'ergometer', 'ergonomics', 'ergophobia', 'exoergic', 'gamergate', 'georgic', 'heterorganic', 'homorganic', 'liturgy', 'metallurgy', 'microorganism', 'organ', 'organic', 'organism', 'organist', 'organize', 'organogenesis', 'organoid', 'organoleptic', 'orgiastic', 'orgy', 'parergon', 'surgeon', 'synergism', 'synergy', 'theurgic', 'theurgist', 'theurgy', 'zymurgy'],
        'letter': 'e'
    }, {
        'roots': ['erot-'],
        'meaning': '(sexual) love',
        'originLanguage': 'Greek',
        'examples': ['erogenous', 'erotic', 'erotomania', 'erotophilia', 'erotophobia'],
        'letter': 'e'
    }, {
        'roots': ['err-'],
        'meaning': 'stray',
        'originLanguage': 'Latin',
        'examples': ['aberrance', 'aberrancy', 'aberrant', 'aberration', 'err', 'errant', 'erratic', 'erratum', 'erroneous', 'error', 'inerrant'],
        'letter': 'e'
    }, {
        'roots': ['erythr-'],
        'meaning': 'red',
        'originLanguage': 'Greek',
        'examples': ['erythema', 'Erythraean', 'erythraemia', 'erythroblastopenia', 'erythrocyte', 'erythrocytosis', 'erythromelalgia', 'erythrophobia', 'erythrophore', 'erythroprosopalgia'],
        'letter': 'e'
    }, {
        'roots': ['eso-'],
        'meaning': 'within',
        'originLanguage': 'Greek',
        'examples': ['esophoria', 'esoteric', 'esotericism', 'esotropia'],
        'letter': 'e'
    }, {
        'roots': ['eth-'],
        'meaning': 'custom, habit',
        'originLanguage': 'Greek',
        'examples': ['ethic', 'ethics', 'ethology', 'ethos'],
        'letter': 'e'
    }, {
        'roots': ['ethm-'],
        'meaning': 'sieve, sift',
        'originLanguage': 'Greek',
        'examples': ['ethmoid'],
        'letter': 'e'
    }, {
        'roots': ['ethn-'],
        'meaning': 'people, race, tribe, nation',
        'originLanguage': 'Greek',
        'examples': ['ethnarch', 'ethnarchy', 'ethnic', 'ethnoarchaeology', 'ethnography', 'ethnomusicology', 'polyethnic'],
        'letter': 'e'
    }, {
        'roots': ['etym-'],
        'meaning': 'true',
        'originLanguage': 'Greek',
        'examples': ['etymologic', 'etymologicon', 'etymologist', 'etymologize', 'etymology', 'etymon'],
        'letter': 'e'
    }, {
        'roots': ['eu-'],
        'meaning': 'well, good',
        'originLanguage': 'Greek',
        'examples': ['aneuploidy', 'eudaemon', 'eudemon', 'eukaryote', 'euphony', 'euphoria', 'euphoric', 'euploid', 'euthanasia'],
        'letter': 'e'
    }, {
        'roots': ['eur-'],
        'meaning': 'wide',
        'originLanguage': 'Greek',
        'examples': ['aneurysm', 'Europe', 'eurypterid', 'microaneurysm'],
        'letter': 'e'
    }, {
        'roots': ['ex-', 'e-', 'ef-'],
        'meaning': 'from, out',
        'originLanguage': 'Latin',
        'examples': ['exclude', 'exist', 'exit', 'extend', 'extrude'],
        'letter': 'e'
    }, {
        'roots': ['exo-'],
        'meaning': 'outside',
        'originLanguage': 'Greek',
        'examples': ['exogamy', 'exoplanet', 'exoskeleton', 'exosome', 'exosphere', 'exoteric', 'exothermic', 'exotic', 'exoticism', 'exotropia'],
        'letter': 'e'
    }, {
        'roots': ['extra-'],
        'meaning': 'outer',
        'originLanguage': 'Latin',
        'examples': ['estrange', 'estrangement', 'exterior', 'extra', 'extraneous', 'extraordinary', 'strange'],
        'letter': 'e'
    }, {
        'roots': ['extrem-'],
        'meaning': 'outermost, utmost',
        'originLanguage': 'Latin',
        'examples': ['extreme', 'extremity', 'extremophile'],
        'letter': 'e'
    }],
    'f': [{
        'roots': ['fa-', 'fat-'],
        'meaning': 'say, speak',
        'originLanguage': 'Latin',
        'examples': ['affable', 'bifarious', 'confess', 'defamation', 'fable', 'fame', 'fascinate', 'fate', 'ineffability', 'infamy', 'infancy', 'infant', 'infantry', 'nefarious', 'preface', 'profess'],
        'letter': 'f'
    }, {
        'roots': ['fab-'],
        'meaning': 'bean',
        'originLanguage': 'Latin',
        'examples': ['faba bean'],
        'letter': 'f'
    }, {
        'roots': ['fac-', 'fact-', '-fect-', '-fic-'],
        'meaning': 'do, make',
        'originLanguage': 'Latin',
        'examples': ['affair', 'affect', 'affectation', 'amplify', 'artifact', 'artifice', 'benefactor', 'benefice', 'benefit', 'confection', 'counterfeit', 'defeat', 'defect', 'disaffect', 'edifice', 'effect', 'effectible', 'effection', 'effective', 'effectivity', 'effector', 'effectual', 'effectuality', 'effectuate', 'effectuation', 'efficacious', 'efficacity', 'efficacy', 'efficiency', 'efficient', 'enface', 'enfacement', 'facade/façade', 'face', 'facet', 'facette', 'facial', 'faciend', 'facient', 'facile', 'facilitate', 'facilitation', 'facilitative', 'facilitator', 'facilitatory', 'facility', 'facinorous', 'facsimile', 'fact', 'faction', 'factional', 'factionary', 'factious', 'factitious', 'factor', 'factorable', 'factorial', 'factory', 'factotum', 'factual', 'fake', 'fashion', 'feasible', 'feat', 'feature', 'feckless', 'fiat', 'forfeit', 'infect', 'inofficious', 'interoffice', 'laissez-faire', 'malefaction', 'manufacture', 'modify', 'nonofficial', 'office', 'official', 'officiant', 'officiary', 'officiate', 'officious', 'olfaction', 'omnificence', 'omnificent', 'parfait', 'perfect', 'perfecta', 'perfectibility', 'perfectible', 'perfection', 'perfective', 'perfector', 'pluperfect', 'prefect', 'prefectural', 'prefecture', 'prequalification', 'proficiency', 'proficient', 'profit', 'profitability', 'profitable', 'profiteer', 'profiterole', 'prolific', 'qualification', 'quasiperfect', 'rarefy', 'refactorable', 'refashion', 'refect', 'refection', 'refectory', 'reinfect', 'remanufacture', 'resurface', 'reunification', 'sacrifice', 'scientific', 'semelfactive', 'suboffice', 'subprefect', 'suffice', 'sufficiency', 'sufficient', 'superficial', 'superficiality', 'surface', 'surfeit', 'surficial', 'transfection', 'trifacial', 'trifecta', 'uniface', 'unifacial', 'unifactorial', 'unification'],
        'letter': 'f'
    }, {
        'roots': ['falc-'],
        'meaning': 'sickle',
        'originLanguage': 'Latin',
        'examples': ['defalcation', 'falcate', 'falciform', 'falchion', 'falcon'],
        'letter': 'f'
    }, {
        'roots': ['fall-', 'fallac-', 'fals-'],
        'meaning': 'false, deceive',
        'originLanguage': 'Latin',
        'examples': ['default', 'fail', 'fallacious', 'fallacy', 'fallible', 'false', 'falsetto', 'falsify', 'falsity', 'fault'],
        'letter': 'f'
    }, {
        'roots': ['famili-'],
        'meaning': 'a close attendant',
        'originLanguage': 'Latin',
        'examples': ['familiarity', 'family'],
        'letter': 'f'
    }, {
        'roots': ['fasc-'],
        'meaning': 'bundle',
        'originLanguage': 'Latin',
        'examples': ['fasciculation', 'fascism'],
        'letter': 'f'
    }, {
        'roots': ['fatu-'],
        'meaning': 'foolish, useless',
        'originLanguage': 'Latin',
        'examples': ['fatuous', 'infatuation'],
        'letter': 'f'
    }, {
        'roots': ['feder-'],
        'meaning': 'treaty, agreement, contract, league, pact',
        'originLanguage': 'Latin',
        'examples': ['confederacy', 'confederation', 'federal', 'federate', 'federation'],
        'letter': 'f'
    }, {
        'roots': ['fel-'],
        'meaning': 'cat',
        'originLanguage': 'Latin',
        'examples': ['Felinae', 'feline'],
        'letter': 'f'
    }, {
        'roots': ['felic-'],
        'meaning': 'happy, merry',
        'originLanguage': 'Latin',
        'examples': ['felicity'],
        'letter': 'f'
    }, {
        'roots': ['fell-'],
        'meaning': 'suck',
        'originLanguage': 'Latin',
        'examples': ['fellation'],
        'letter': 'f'
    }, {
        'roots': ['femin-'],
        'meaning': 'women, female',
        'originLanguage': 'Latin',
        'examples': ['femininity'],
        'letter': 'f'
    }, {
        'roots': ['femor-'],
        'meaning': 'thigh',
        'originLanguage': 'Latin',
        'examples': ['femoral', 'femur'],
        'letter': 'f'
    }, {
        'roots': ['fend-', 'fens-'],
        'meaning': 'strike',
        'originLanguage': 'Latin',
        'examples': ['defend', 'fend', 'offend', 'offense'],
        'letter': 'f'
    }, {
        'roots': ['fenestr-'],
        'meaning': 'window',
        'originLanguage': 'Latin',
        'examples': ['defenestration'],
        'letter': 'f'
    }, {
        'roots': ['fer-'],
        'meaning': 'to bear, carry',
        'originLanguage': 'Latin',
        'examples': ['aquifer', 'circumference', 'confer', 'conifer', 'defer', 'differ', 'ferry', 'fertile', 'infer', 'Lucifer', 'offer', 'prefer', 'refer', 'suffer', 'transfer', 'vociferous'],
        'letter': 'f'
    }, {
        'roots': ['ferv-'],
        'meaning': 'boil, glow',
        'originLanguage': 'Latin',
        'examples': ['ferment', 'fervent', 'fervid', 'fervor', 'perfervid'],
        'letter': 'f'
    }, {
        'roots': ['feroc-'],
        'meaning': 'fierce',
        'originLanguage': 'Latin',
        'examples': ['ferocity'],
        'letter': 'f'
    }, {
        'roots': ['ferr-'],
        'meaning': 'iron',
        'originLanguage': 'Latin',
        'examples': ['ferrous'],
        'letter': 'f'
    }, {
        'roots': ['fet-'],
        'meaning': 'stink',
        'originLanguage': 'Latin',
        'examples': ['fetid', 'fetor'],
        'letter': 'f'
    }, {
        'roots': ['fic-'],
        'meaning': 'fig',
        'originLanguage': 'Latin',
        'examples': ['Ficus', 'fig'],
        'letter': 'f'
    }, {
        'roots': ['fid-', 'fis-'],
        'meaning': 'faith, trust',
        'originLanguage': 'Latin',
        'examples': ['confidante', 'confidence', 'confident', 'diffident', 'faith', 'fealty', 'fidelity', 'fiduciary', 'infidel', 'perfidious', 'perfidy'],
        'letter': 'f'
    }, {
        'roots': ['fig-', 'fing-', 'fict-'],
        'meaning': 'to form, shape',
        'originLanguage': 'Latin',
        'examples': ['configure', 'disfigure', 'effigy', 'feign', 'fiction', 'fictitious', 'figment', 'figurine', 'nonfiction', 'transfigure'],
        'letter': 'f'
    }, {
        'roots': ['fil-'],
        'meaning': 'thread',
        'originLanguage': 'Latin',
        'examples': ['defile', 'filament', 'file', 'filigree', 'fillet', 'profile'],
        'letter': 'f'
    }, {
        'roots': ['fili-'],
        'meaning': 'son',
        'originLanguage': 'Latin',
        'examples': ['affiliation'],
        'letter': 'f'
    }, {
        'roots': ['fin-'],
        'meaning': 'end',
        'originLanguage': 'Latin',
        'examples': ['affinity', 'confine', 'define', 'final', 'finale', 'finance', 'fine', 'finish', 'finite', 'infinite', 'refine'],
        'letter': 'f'
    }, {
        'roots': ['find-', 'fiss-'],
        'meaning': 'cleave, split',
        'originLanguage': 'Latin',
        'examples': ['fission', 'fissure'],
        'letter': 'f'
    }, {
        'roots': ['firm-'],
        'meaning': 'firm, strong',
        'originLanguage': 'Latin',
        'examples': ['affirm', 'confirm', 'confirmation', 'firm', 'firmament', 'infirm'],
        'letter': 'f'
    }, {
        'roots': ['fistul-'],
        'meaning': 'hollow, tube',
        'originLanguage': 'Latin',
        'examples': ['fistula'],
        'letter': 'f'
    }, {
        'roots': ['fix-'],
        'meaning': 'attach',
        'originLanguage': 'Latin',
        'examples': ['affix', 'fix', 'fixation', 'fixture', 'prefix', 'suffix', 'transfix'],
        'letter': 'f'
    }, {
        'roots': ['fl-', 'fla-'],
        'meaning': 'blow',
        'originLanguage': 'Latin',
        'examples': ['afflatus', 'conflate', 'deflate', 'flatulence', 'flatus', 'flavor', 'flute', 'inflate', 'insufflation', 'soufflé', 'sufflate'],
        'letter': 'f'
    }, {
        'roots': ['flacc-'],
        'meaning': 'flabby',
        'originLanguage': 'Latin',
        'examples': ['flaccid'],
        'letter': 'f'
    }, {
        'roots': ['flav-'],
        'meaning': 'yellow',
        'originLanguage': 'Latin',
        'examples': ['flavonoid'],
        'letter': 'f'
    }, {
        'roots': ['flect-', 'flex-'],
        'meaning': 'bend',
        'originLanguage': 'Latin',
        'examples': ['circumflex', 'deflect', 'flex', 'flexible', 'flexile', 'flexion', 'flexor', 'genuflection', 'inflect', 'inflection', 'reflect', 'reflection', 'reflex'],
        'letter': 'f'
    }, {
        'roots': ['flig-', 'flict-'],
        'meaning': 'strike',
        'originLanguage': 'Latin',
        'examples': ['afflict', 'conflict', 'inflict', 'profligacy', 'profligate'],
        'letter': 'f'
    }, {
        'roots': ['flor-'],
        'meaning': 'flower',
        'originLanguage': 'Latin',
        'examples': ['floral', 'florid'],
        'letter': 'f'
    }, {
        'roots': ['flu-', 'fluv-', 'flux-'],
        'meaning': 'flow',
        'originLanguage': 'Latin',
        'examples': ['affluent', 'confluence', 'effluent', 'fluctuate', 'fluctuation', 'fluency', 'fluent', 'fluid', 'fluidity', 'flush', 'fluvial', 'flux', 'influence', 'influx', 'superfluous'],
        'letter': 'f'
    }, {
        'roots': ['foc-'],
        'meaning': 'hearth',
        'originLanguage': 'Latin',
        'examples': ['bifocal', 'focal', 'focus'],
        'letter': 'f'
    }, {
        'roots': ['fod-', 'foss-'],
        'meaning': 'dig',
        'originLanguage': 'Latin',
        'examples': ['fossil'],
        'letter': 'f'
    }, {
        'roots': ['foen-'],
        'meaning': 'hay',
        'originLanguage': 'Latin',
        'examples': ['Foeniculum'],
        'letter': 'f'
    }, {
        'roots': ['foli-'],
        'meaning': 'leaf',
        'originLanguage': 'Latin',
        'examples': ['defoliant'],
        'letter': 'f'
    }, {
        'roots': ['font-'],
        'meaning': 'spring',
        'originLanguage': 'Latin',
        'examples': ['font', 'fontal', 'fontanelle'],
        'letter': 'f'
    }, {
        'roots': ['for-'],
        'meaning': 'bore, drill',
        'originLanguage': 'Latin',
        'examples': ['foralite', 'foramen', 'foraminifer', 'perforation'],
        'letter': 'f'
    }, {
        'roots': ['form-'],
        'meaning': 'shape',
        'originLanguage': 'Latin',
        'examples': ['conform', 'deform', 'form', 'formal', 'formation', 'formula', 'formulate', 'inform', 'perform', 'reform', 'uniform'],
        'letter': 'f'
    }, {
        'roots': ['formic-'],
        'meaning': 'ant',
        'originLanguage': 'Latin',
        'examples': ['formaldehyde', 'formic acid'],
        'letter': 'f'
    }, {
        'roots': ['fornic-'],
        'meaning': 'vault',
        'originLanguage': 'Latin',
        'examples': ['fornication'],
        'letter': 'f'
    }, {
        'roots': ['fort-'],
        'meaning': 'strong',
        'originLanguage': 'Latin',
        'examples': ['force', 'fort', 'forte', 'fortify', 'fortitude', 'fortress'],
        'letter': 'f'
    }, {
        'roots': ['fove-'],
        'meaning': 'shallow round depression',
        'originLanguage': 'Latin',
        'examples': ['fovea'],
        'letter': 'f'
    }, {
        'roots': ['frag-', 'frang-', '-fring-', 'fract-'],
        'meaning': 'break',
        'originLanguage': 'Latin',
        'examples': ['defray', 'diffract', 'fractal', 'fraction', 'fractious', 'fracture', 'fragile', 'fragment', 'frangible', 'fray', 'infraction', 'infringe', 'refract', 'refractory', 'refrain'],
        'letter': 'f'
    }, {
        'roots': ['frater-', 'fratr-'],
        'meaning': 'brother',
        'originLanguage': 'Latin',
        'examples': ['fraternal', 'fraternity'],
        'letter': 'f'
    }, {
        'roots': ['fric-', 'frict-'],
        'meaning': 'rub',
        'originLanguage': 'Latin',
        'examples': ['dentifrice', 'friction'],
        'letter': 'f'
    }, {
        'roots': ['frig-'],
        'meaning': 'cold',
        'originLanguage': 'Latin',
        'examples': ['frigid', 'frigorific'],
        'letter': 'f'
    }, {
        'roots': ['front-'],
        'meaning': 'forehead',
        'originLanguage': 'Latin',
        'examples': ['confront', 'frontage', 'frontal'],
        'letter': 'f'
    }, {
        'roots': ['fruct-', 'frug-'],
        'meaning': 'fruit',
        'originLanguage': 'Latin',
        'examples': ['fructose', 'frugivorous'],
        'letter': 'f'
    }, {
        'roots': ['fug-', 'fugit-'],
        'meaning': 'flee',
        'originLanguage': 'Latin',
        'examples': ['centrifuge', 'fugacious', 'fugitive', 'refuge'],
        'letter': 'f'
    }, {
        'roots': ['fum-'],
        'meaning': 'smoke',
        'originLanguage': 'Latin',
        'examples': ['fume', 'fumigation'],
        'letter': 'f'
    }, {
        'roots': ['fund-'],
        'meaning': 'bottom',
        'originLanguage': 'Latin',
        'examples': ['found', 'founder', 'foundation', 'fund', 'fundament', 'fundamental', 'fundamentalism', 'profound', 'profundity'],
        'letter': 'f'
    }, {
        'roots': ['fund-', 'fus-'],
        'meaning': 'pour',
        'originLanguage': 'Latin',
        'examples': ['confound', 'diffusion', 'effusion', 'effusive', 'found', 'fusion', 'infusion', 'perfusion', 'profuse', 'profusion', 'refund', 'suffusion', 'transfusion'],
        'letter': 'f'
    }, {
        'roots': ['fulmin-'],
        'meaning': 'flash',
        'originLanguage': 'Latin',
        'examples': ['fulminant', 'fulminate', 'fulmination'],
        'letter': 'f'
    }, {
        'roots': ['fung-', 'funct-'],
        'meaning': 'do',
        'originLanguage': 'Latin',
        'examples': ['function', 'fungibility'],
        'letter': 'f'
    }, {
        'roots': ['fur-', 'furt-'],
        'meaning': 'thief, steal',
        'originLanguage': 'Latin',
        'examples': ['ferret', 'furtive'],
        'letter': 'f'
    }, {
        'roots': ['furc-'],
        'meaning': 'fork',
        'originLanguage': 'Latin',
        'examples': ['bifurcation'],
        'letter': 'f'
    }, {
        'roots': ['fusc-'],
        'meaning': 'dark',
        'originLanguage': 'Latin',
        'examples': ['fuscous', 'obfuscate', 'obfuscation'],
        'letter': 'f'
    }],
    'g': [{
        'roots': ['galact-'],
        'meaning': 'milk',
        'originLanguage': 'Greek',
        'examples': ['galactagogue', 'galactic', 'galactorrhea', 'lactose', 'polygala', 'polygalactia'],
        'letter': 'g'
    }, {
        'roots': ['gam-'],
        'meaning': 'marriage, wedding',
        'originLanguage': 'Greek',
        'examples': ['agamic', 'agamogenesis', 'agamospermy', 'agamy', 'allogamy', 'anisogamete', 'anisogamy', 'apogamy', 'autogamy', 'cleistogamous', 'cleistogamy', 'cryptogam', 'deuterogamist', 'deuterogamy', 'digamous', 'digamy', 'endogamous', 'endogamy', 'exogamous', 'exogamy', 'gamete', 'gametic', 'gametocyte', 'gametogenesis', 'gametophyte', 'geitonogamy', 'heterogametic', 'heterogamous', 'heterogamy', 'homogametic', 'karyogamy', 'misogamy', 'monogamous', 'monogamy', 'oogamy', 'planogamete', 'plasmogamy', 'polygamist', 'polygamy'],
        'letter': 'g'
    }, {
        'roots': ['gamb-'],
        'meaning': 'leg',
        'originLanguage': 'Latin',
        'examples': ['gam', 'gambit', 'gambol', 'gammon'],
        'letter': 'g'
    }, {
        'roots': ['gamm-'],
        'meaning': 'G, g',
        'originLanguage': 'Greek',
        'examples': ['gamma'],
        'letter': 'g'
    }, {
        'roots': ['gar-'],
        'meaning': 'chatter',
        'originLanguage': 'Latin',
        'examples': ['gargantuan', 'gargle', 'gargoyle', 'garrulous', 'jargon'],
        'letter': 'g'
    }, {
        'roots': ['gargal-'],
        'meaning': 'tickle',
        'originLanguage': 'Greek',
        'examples': ['gargalesis', 'gargalesthesia', 'hypergargalesthesia'],
        'letter': 'g'
    }, {
        'roots': ['gargar-'],
        'meaning': 'gargle',
        'originLanguage': 'Greek',
        'examples': ['gargarize'],
        'letter': 'g'
    }, {
        'roots': ['gastr-'],
        'meaning': 'stomach',
        'originLanguage': 'Greek',
        'examples': ['epigastric', 'epigastrium', 'gasteroid', 'gastric', 'gastrin', 'gastritis', 'gastroenterologist', 'gastroenterology', 'gastrolith', 'gastronomic', 'gastronomy', 'gastroparesis', 'gastropod', 'gastroptosis', 'gastroschisis', 'gastrotrich', 'mesogastric', 'Myxogastria'],
        'letter': 'g'
    }, {
        'roots': ['ge-', 'geo-'],
        'meaning': 'earth',
        'originLanguage': 'Greek',
        'examples': ['apogee', 'biogeography', 'epigeous', 'Gaia', 'geocentric', 'geocentrism', 'geode', 'geodesy', 'geodetic', 'geography', 'geoid', 'geology', 'geomancy', 'geometry', 'geomorphology', 'geophysicist', 'geophysics', 'georgic', 'Georgics', 'geosphere', 'geostatic', 'geostrophic', 'geosynchronous', 'geosyncline', 'hypogeous', 'hypogeum', 'Pangea', 'perigee'],
        'letter': 'g'
    }, {
        'roots': ['geiton-'],
        'meaning': 'neighbor',
        'originLanguage': 'Greek',
        'examples': ['geitonogamy'],
        'letter': 'g'
    }, {
        'roots': ['gel-'],
        'meaning': 'icy cold',
        'originLanguage': 'Latin',
        'examples': ['congeal', 'congelation', 'gel', 'gelati', 'gelatin', 'gelatinous', 'gelation', 'gelato', 'gelée', 'gelid', 'gelifluction', 'gelignite', 'jellification', 'jelly'],
        'letter': 'g'
    }, {
        'roots': ['gen-', 'gon-'],
        'meaning': 'birth, beget, race, kind',
        'originLanguage': 'Greek',
        'examples': ['allergen', 'anagenesis', 'antigen', 'autogenesis', 'autogenous', 'biogenesis', 'dysgenic', 'endogen', 'endogenous', 'epigene', 'epigenesis', 'epigenetics', 'epigone', 'erogenous', 'Eugene', 'eugenic', 'eugenics', 'exogenous', 'gametogenesis', 'gene', 'genealogy', 'genesis', 'genetic', 'genocide', 'genotype', 'gonad', 'heterogeneous', 'homogenesis', 'homogenetic', 'homogeneous', 'hydrogen', 'hypogene', 'hypogenesis', 'hypogenic', 'hypogenous', 'monogenic', 'oogenesis', 'paragenesis', 'pathogen', 'polygenous', 'progenesis', 'pseudogene', 'spermatogenesis'],
        'letter': 'g'
    }, {
        'roots': ['gen-'],
        'meaning': 'beget',
        'originLanguage': 'Latin',
        'examples': ['congenial', 'engender', 'gender', 'generate', 'generation', 'genial', 'genius', 'genital', 'genitive', 'genteel', 'gentle', 'genuine', 'genus', 'indigenous', 'ingenious', 'ingenuous', 'primogenitor', 'progeny'],
        'letter': 'g'
    }, {
        'roots': ['gephyr-'],
        'meaning': 'bridge',
        'originLanguage': 'Greek',
        'examples': ['gephyrophobia'],
        'letter': 'g'
    }, {
        'roots': ['ger-'],
        'meaning': 'old',
        'originLanguage': 'Greek',
        'examples': ['erigeron', 'gerascophobia', 'geriatric', 'geriatrics', 'gerontocracy', 'gerontology', 'gerontophile', 'gerontophilia', 'gerontophobia', 'gerontoplast', 'gerousia', 'progeria', 'progeroid'],
        'letter': 'g'
    }, {
        'roots': ['ger-', 'gest-'],
        'meaning': 'bear, carry',
        'originLanguage': 'Latin',
        'examples': ['agger', 'congest', 'digest', 'gerundive', 'gestation', 'register', 'suggest', 'vicegerent'],
        'letter': 'g'
    }, {
        'roots': ['geran-'],
        'meaning': 'crane',
        'originLanguage': 'Greek',
        'examples': ['Geranium'],
        'letter': 'g'
    }, {
        'roots': ['germ-'],
        'meaning': 'sprout',
        'originLanguage': 'Latin',
        'examples': ['germ', 'German', 'germane', 'germicide', 'germinal', 'germinate', 'germination', 'nongermane', 'regerminate'],
        'letter': 'g'
    }, {
        'roots': ['geu-'],
        'meaning': 'taste',
        'originLanguage': 'Greek',
        'examples': ['ageusia', 'dysgeusia', 'hypergeusia', 'hypogeusia', 'parageusia'],
        'letter': 'g'
    }, {
        'roots': ['glabr-'],
        'meaning': 'hairless',
        'originLanguage': 'Latin',
        'examples': ['glabella', 'glabellar', 'glabrate', 'glabrescent', 'glabrous'],
        'letter': 'g'
    }, {
        'roots': ['glaci-'],
        'meaning': 'ice',
        'originLanguage': 'Latin',
        'examples': ['glacé', 'glacial', 'glaciation', 'glacier', 'glacious', 'glacis', 'glance'],
        'letter': 'g'
    }, {
        'roots': ['gladi-'],
        'meaning': 'sword',
        'originLanguage': 'Latin',
        'examples': ['gladiator', 'gladiolus'],
        'letter': 'g'
    }, {
        'roots': ['glauc-'],
        'meaning': 'gray',
        'originLanguage': 'Greek',
        'examples': ['glaucophane', 'Glaucopsyche'],
        'letter': 'g'
    }, {
        'roots': ['glia-'],
        'meaning': 'glue',
        'originLanguage': 'Greek',
        'examples': ['glial', 'glioblastoma', 'glioma', 'gliosis', 'microglia', 'neuroglia'],
        'letter': 'g'
    }, {
        'roots': ['glob-'],
        'meaning': 'sphere',
        'originLanguage': 'Latin',
        'examples': ['global', 'globate', 'globe', 'globose', 'globosity', 'globular', 'globule', 'globulin', 'inglobate'],
        'letter': 'g'
    }, {
        'roots': ['glori-'],
        'meaning': 'glory',
        'originLanguage': 'Latin',
        'examples': ['gloriation', 'glorification', 'glorify', 'gloriole', 'glorious', 'glory', 'inglorious', 'vainglorious', 'vainglory'],
        'letter': 'g'
    }, {
        'roots': ['gloss-', 'glot-'],
        'meaning': 'tongue',
        'originLanguage': 'Greek',
        'examples': ['aglossia', 'anthropoglot', 'aryepiglottic', 'diglossia', 'epiglottis', 'gloss', 'glossary', 'glossophobia', 'glottis', 'heterogloss', 'heteroglossia', 'idioglossia', 'isogloss', 'monoglot', 'monoglottism', 'polyglot', 'polyglottism'],
        'letter': 'g'
    }, {
        'roots': ['glut-'],
        'meaning': 'rump',
        'originLanguage': 'Greek',
        'examples': ['gluteus'],
        'letter': 'g'
    }, {
        'roots': ['glutin-'],
        'meaning': 'glue',
        'originLanguage': 'Latin',
        'examples': ['agglutinant', 'agglutinate', 'agglutination', 'agglutinative', 'glue', 'glutelin', 'gluten', 'glutinosity', 'glutinous', 'nonagglutinative'],
        'letter': 'g'
    }, {
        'roots': ['glyc-'],
        'meaning': 'sweet',
        'originLanguage': 'Greek',
        'examples': ['glycogen', 'glycogenesis', 'glycogenolysis', 'glycolipid', 'glycophyte', 'glycoprotein', 'glycoside', 'glycosidic', 'hypoglycaemia'],
        'letter': 'g'
    }, {
        'roots': ['glyph-'],
        'meaning': 'carve',
        'originLanguage': 'Greek',
        'examples': ['aglyphous', 'anaglyph', 'ditriglyph', 'ditriglyphic', 'glyph', 'glyptic', 'Glyptodon', 'glyptograph', 'hieroglyph', 'hieroglyphic', 'monotriglyph', 'opisthoglyphous', 'petroglyph', 'proteroglyphous', 'solenoglyphous'],
        'letter': 'g'
    }, {
        'roots': ['gnath-'],
        'meaning': 'jaw',
        'originLanguage': 'Greek',
        'examples': ['Agnatha', 'agnathous', 'chilognath', 'compsognathus', 'endognathion', 'epignathous', 'exognathion', 'gnathic', 'gnathophyma', 'hypognathous', 'hystricognath', 'mesognathion', 'mesognathous', 'prognathism'],
        'letter': 'g'
    }, {
        'roots': ['gno-'],
        'meaning': 'know',
        'originLanguage': 'Greek',
        'examples': ['agnosia', 'agnostic', 'agnosticism', 'anagnorisis', 'diagnosis', 'dysanagnosia', 'gnomic', 'gnomon', 'gnomonic', 'gnosia', 'gnosis', 'Gnostic', 'gnosticism', 'pathognomonic', 'physiognomy', 'prognosis', 'telegnosis'],
        'letter': 'g'
    }, {
        'roots': ['gnosc-', '-gnit-'],
        'meaning': 'know',
        'originLanguage': 'Latin',
        'examples': ['acquaint', 'acquaintance', 'agnition', 'agnize', 'cognition', 'cognitional', 'cognitive', 'cognitivity', 'cognizable', 'cognizance', 'cognizant', 'cognize', 'cognoscence', 'cognoscenti', 'cognoscible', 'cognovit', 'connoisseur', 'ennoble', 'ennoblement', 'ignoble', 'ignorant', 'ignoscible', 'incognito', 'nobiliary', 'nobilitate', 'nobilitation', 'nobility', 'noble', 'note', 'notice', 'noticeable', 'notion', 'notional', 'notionality', 'notoriety', 'notorious', 'precognition', 'quaint', 'reacquaint', 'recognition', 'recognize', 'reconnaissance', 'reconnoiter', 'reconnoitre'],
        'letter': 'g'
    }, {
        'roots': ['gon-'],
        'meaning': 'corner, angle, knee',
        'originLanguage': 'Greek',
        'examples': ['goniometer', 'gonion', 'gonioscope', 'gonitis', 'gonyaulax', 'gonycampsis', 'hexagon', 'pentagon', 'polygon', 'trigon', 'trigonometry'],
        'letter': 'g'
    }, {
        'roots': ['grad-', 'gred-', 'gress-'],
        'meaning': 'walk, step, go',
        'originLanguage': 'Latin',
        'examples': ['aggradation', 'aggression', 'antegrade', 'anterograde', 'centigrade', 'degrade', 'degree', 'egress', 'gradation', 'grade', 'gradient', 'gradine', 'gradual', 'graduality', 'graduate', 'graduation', 'gree', 'ingress', 'multigrade', 'nongraduate', 'postgraduate', 'progradation', 'prograde', 'progress', 'regress', 'retrogradation', 'retrograde', 'saltigrade', 'tardigrade', 'transgress'],
        'letter': 'g'
    }, {
        'roots': ['gramm-'],
        'meaning': 'letter, writing',
        'originLanguage': 'Greek',
        'examples': ['anagram', 'anagrammatic', 'diagram', 'diagrammatic', 'engram', 'epigram', 'epigrammatic', 'grammar', 'grammatic', 'grammaticist', 'hologram', 'lipogram', 'monogram', 'pangrammatic', 'pentagram', 'program', 'programmatic', 'telegram', 'telegramme', 'tetragram', 'tetragrammaton', 'trigram'],
        'letter': 'g'
    }, {
        'roots': ['gran-'],
        'meaning': 'grain',
        'originLanguage': 'Latin',
        'examples': ['degranulation', 'engrain', 'filigree', 'garner', 'garnet', 'grain', 'granary', 'grange', 'granger', 'granite', 'granivore', 'granivorous', 'granivory', 'granola', 'granular', 'granularity', 'granulate', 'granulation', 'granule', 'grenade', 'grogram', 'grosgrain', 'ingrain', 'multigrain', 'pomegranate'],
        'letter': 'g'
    }, {
        'roots': ['grand-'],
        'meaning': 'grand',
        'originLanguage': 'Latin',
        'examples': ['aggrandisement', 'grandee', 'grandeur', 'grandific', 'grandiloquent', 'grandiloquous', 'grandiose', 'grandiosity', 'grandioso', 'grandity'],
        'letter': 'g'
    }, {
        'roots': ['graph-'],
        'meaning': 'draw, write',
        'originLanguage': 'Greek',
        'examples': ['allograft', 'anepigraphic', 'autograft', 'autograph', 'digraph', 'epigraphic', 'epigraphy', 'graft', 'graph', 'grapheme', 'graphemics', 'graphene', 'graphic', 'graphite', 'graphology', 'graphomania', 'heterograph', 'hexagraph', 'holography', 'homograph', 'isograft', 'logographic', 'micrograph', 'monograph', 'orthography', 'paragraph', 'photograph', 'photographic', 'photomicrograph', 'polygraph', 'pseudepigraphy', 'syngraft', 'telegraph', 'telegraphy', 'tetragraph', 'trigraph'],
        'letter': 'g'
    }, {
        'roots': ['grat-'],
        'meaning': 'thank, please',
        'originLanguage': 'Latin',
        'examples': ['aggrace', 'agree', 'agreeable', 'agreeance', 'agreement', 'congratulant', 'congratulate', 'congratulatory', 'congree', 'disagree', 'disagreeable', 'disagreement', 'disgrace', 'grace', 'graciosity', 'gracioso', 'gracious', 'gratification', 'gratify', 'gratis', 'gratitude', 'gratuitous', 'gratuity', 'gratulant', 'gratulate', 'gratulation', 'gratulatory', 'grazioso', 'gree', 'ingrate', 'ingratiate', 'ingratiation', 'ingratitude', 'maugre', 'noncongratulatory', 'nongratuitous'],
        'letter': 'g'
    }, {
        'roots': ['grav-'],
        'meaning': 'heavy',
        'originLanguage': 'Latin',
        'examples': ['aggravate', 'aggravation', 'aggravative', 'aggravator', 'aggrieve', 'aggrievement', 'degravation', 'gravamen', 'grave', 'gravid', 'gravida', 'gravidity', 'gravitas', 'gravitate', 'gravitation', 'gravitational', 'gravity', 'grief', 'grieve', 'grievance', 'grievant', 'grievous', 'ingravescence', 'ingravescent', 'multigravida', 'multigravidity', 'nongravitational', 'nulligravida', 'primigravida', 'reaggravate', 'supergravity'],
        'letter': 'g'
    }, {
        'roots': ['greg-'],
        'meaning': 'flock, herd',
        'originLanguage': 'Latin',
        'examples': ['aggregate', 'aggregation', 'aggregator', 'congregant', 'congregate', 'congregation', 'congregational', 'desegregate', 'desegregation', 'disaggregate', 'disgregate', 'disgregation', 'egregious', 'gregarian', 'gregarine', 'gregarious', 'intercongregational', 'segregate', 'segregation'],
        'letter': 'g'
    }, {
        'roots': ['gryp-'],
        'meaning': 'hooked',
        'originLanguage': 'Greek',
        'examples': ['arthrogryposis', 'Grypoceras', 'Gryposaurus'],
        'letter': 'g'
    }, {
        'roots': ['gubern-'],
        'meaning': 'govern, pilot',
        'originLanguage': 'Latin',
        'examples': ['gubernatorial'],
        'letter': 'g'
    }, {
        'roots': ['gust-'],
        'meaning': 'taste',
        'originLanguage': 'Latin',
        'examples': ['disgust', 'gustatory', 'gusto', 'gustoso'],
        'letter': 'g'
    }, {
        'roots': ['gutt-'],
        'meaning': 'drop',
        'originLanguage': 'Latin',
        'examples': ['gout', 'gutta', 'guttate', 'guttifer', 'guttiform'],
        'letter': 'g'
    }, {
        'roots': ['guttur-'],
        'meaning': 'throat',
        'originLanguage': 'Latin',
        'examples': ['goitre', 'guttural'],
        'letter': 'g'
    }, {
        'roots': ['gymn-'],
        'meaning': 'nude',
        'originLanguage': 'Greek',
        'examples': ['gymnasium', 'gymnast', 'gymnastics', 'gymnophobia', 'gymnoplast', 'gymnosophist', 'gymnosperm', 'gymnospore'],
        'letter': 'g'
    }, {
        'roots': ['gyn-', 'gynaec-'],
        'meaning': 'woman',
        'originLanguage': 'Greek',
        'examples': ['acrogynous', 'androgyne', 'androgynous', 'androgyny', 'epigyne', 'epigynous', 'epigynum', 'gymnogynous', 'gynaeceum', 'gynaecocracy', 'gynarchy', 'gyne', 'gynecocracy', 'gynecology', 'gynecomastia', 'gynodioecious', 'gynoecium', 'gynoid', 'gynophobia', 'heterogynous', 'hypogynous', 'misogynist', 'monogyny', 'oligogyny', 'philogyny', 'polygynist', 'polygyny'],
        'letter': 'g'
    }, {
        'roots': ['gyr-'],
        'meaning': 'ring',
        'originLanguage': 'Greek',
        'examples': ['agyria', 'autogyro', 'gyre', 'gyrectomy', 'gyrencephalic', 'gyrodyne', 'gyroid', 'gyromagnetic', 'gyromancy', 'gyroscope', 'gyrosphere', 'gyrostat', 'gyrostatic gyrotropic', 'gyrus', 'microgyrus', 'micropolygyria', 'pachygyria', 'polygyria', 'polymicrogyria', 'ulegyria'],
        'letter': 'g'
    }, {
        'roots': ['gyrin-'],
        'meaning': 'tadpole',
        'originLanguage': 'Greek',
        'examples': ['Gyrinophilus'],
        'letter': 'g'
    }],
    'h': [{
        'roots': ['hab-', '-hib-', 'habit-', '-hibit-'],
        'meaning': 'have',
        'originLanguage': 'Latin',
        'examples': ['ability', 'able', 'debenture', 'debile', 'debilitate', 'debility', 'debit', 'debitor', 'debt', 'debtor', 'devoir', 'disability', 'disable', 'disenable', 'disinhibit', 'disinhibition', 'due', 'duty', 'enable', 'enablement', 'endeavor', 'exhibit', 'exhibition', 'exhibitor', 'habeas corpus', 'habendum', 'habenula', 'habile', 'habilitate', 'hability', 'habit', 'habitable', 'habitance', 'habitant', 'habitat', 'habitation', 'habitator', 'habitual', 'habituate', 'habituation', 'habitude', 'habitudinal', 'inability', 'indubitable', 'inhabile', 'inhabit', 'inhabitable', 'inhabitant', 'inhabitation', 'inhibit', 'inhibition', 'inhibitory', 'nonhabitual', 'prebend', 'prebendary', 'prohibit', 'prohibition', 'prohibitive', 'prohibitory', 'provender', 'rehabilitant', 'rehabilitate', 'rehabilitation', 'rehabilitative', 'rehabilitator'],
        'letter': 'h'
    }, {
        'roots': ['hadr-'],
        'meaning': 'thick',
        'originLanguage': 'Greek',
        'examples': ['Hadrocodium', 'Hadromys', 'hadron', 'Hadropithecus', 'hadrosaur', 'hadrosaurid'],
        'letter': 'h'
    }, {
        'roots': ['haem-', 'hem-'],
        'meaning': 'blood',
        'originLanguage': 'Greek',
        'examples': ['anaemia', 'anemia', 'haematemesis', 'haematopoiesis', 'haematuria', 'haemochromatosis', 'haemophilia', 'haemophobia', 'haemoptysis', 'haemorrhage', 'haemorrhoid', 'haemosiderosis', 'haemostatic', 'hematocrit', 'hematogenesis', 'hematoma', 'hematophagous', 'hematophagy', 'hematopoiesis', 'hematopoietic', 'hematuria', 'hemocoel', 'hemocyte', 'hemoglobin', 'hemoglobinuria', 'hemophagy', 'hemophilia', 'hemophiliac', 'hemoptysis', 'hemorrhage', 'hemorrhagic', 'hemorrhea', 'hemorrhoid', 'hemorrhoidectomy', 'hemosiderin', 'hemosiderosis', 'hemostat', 'hemotherapy', 'hyperaemia', 'hyperemia', 'hyphaema', 'hyphema', 'methemoglobin', 'methemoglobinemia', 'microhematuria', 'microhemorrhage', 'polycythaemia'],
        'letter': 'h'
    }, {
        'roots': ['haere-'],
        'meaning': 'choose, take',
        'originLanguage': 'Greek',
        'examples': ['aphaeresis', 'diaeresis', 'heresiarch', 'heresy', 'heretic', 'plasmapheresis', 'synaeresis', 'syneresis'],
        'letter': 'h'
    }, {
        'roots': ['hal-'],
        'meaning': 'salt',
        'originLanguage': 'Greek',
        'examples': ['halide', 'halieutic', 'halite', 'halochromic', 'halochromism', 'halogen', 'halomancy', 'halophile', 'halophyte', 'oxohalide', 'thermohaline'],
        'letter': 'h'
    }, {
        'roots': ['hal-', '-hel-'],
        'meaning': 'breathe',
        'originLanguage': 'Latin',
        'examples': ['anhelation', 'anhele', 'anhelous', 'exhalable', 'exhalant', 'exhalation', 'exhale', 'halitus', 'inhalable', 'inhalant', 'inhalation', 'inhale'],
        'letter': 'h'
    }, {
        'roots': ['hapl-'],
        'meaning': 'simple, single',
        'originLanguage': 'Greek',
        'examples': ['haplochromine', 'haplodiploid', 'haplodiploidy', 'haplography', 'haploid', 'haplology', 'haplont', 'haplontic', 'haplophase', 'haplopia', 'haplosis', 'haplotype'],
        'letter': 'h'
    }, {
        'roots': ['haur-', 'haust-'],
        'meaning': 'draw',
        'originLanguage': 'Latin',
        'examples': ['exhaust', 'exhaustible', 'exhaustion', 'exhaustive', 'hauriant', 'haurient', 'haustellate', 'haustellum', 'haustorium', 'haustrum', 'inexhaustible', 'nonexhaustive'],
        'letter': 'h'
    }, {
        'roots': ['heb-'],
        'meaning': 'youth',
        'originLanguage': 'Greek',
        'examples': ['ephebeum', 'ephebia', 'ephebiatrics', 'ephebic', 'ephebiphobia', 'ephebophilia', 'ephebos', 'hebephilia', 'hebephobia', 'hebephrenia', 'hebetic', 'hebiatrics', 'hebophile', 'hebophilia'],
        'letter': 'h'
    }, {
        'roots': ['hed-'],
        'meaning': 'sit',
        'originLanguage': 'Greek',
        'examples': ['cathedra', 'chair', 'dodecahedron', 'dodecahemidodecahedron', 'endohedric', 'ephedra', 'exedra', 'hemipolyhedron', 'hexahedron', 'octahedron', 'pentahedroid', 'pentahedron', 'polyhedron', 'pyritohedron', 'rhombohedron', 'sanhedrin', 'synedrion', 'tetrahedroid', 'trapezohedron', 'trisoctahedron'],
        'letter': 'h'
    }, {
        'roots': ['hed-'],
        'meaning': 'pleasant, sweet',
        'originLanguage': 'Greek',
        'examples': ['anhedonia', 'anhedonic', 'hedonics', 'hedonism', 'hedonist', 'hedonistic', 'hedonology', 'hyphedonia'],
        'letter': 'h'
    }, {
        'roots': ['heg-'],
        'meaning': 'lead',
        'originLanguage': 'Greek',
        'examples': ['diegesis', 'diegetic', 'eisegesis', 'exegesis', 'exegete', 'exegetic', 'hegemon', 'hegemonic', 'hegemony', 'hegumen', 'hypodiegetic', 'metadiegetic', 'protohegumen'],
        'letter': 'h'
    }, {
        'roots': ['heli-'],
        'meaning': 'sun',
        'originLanguage': 'Greek',
        'examples': ['aphelion', 'heliocentric', 'heliocentrism', 'heliodor', 'heliograph', 'heliolatry', 'heliomania', 'heliometer', 'heliopause', 'Heliophila', 'heliophobia', 'heliophyte', 'Helios', 'helioscope', 'heliosphere', 'heliostat', 'heliotherapy', 'heliotrope', 'heliotropic', 'heliotropism', 'helium', 'parhelion', 'perihelion'],
        'letter': 'h'
    }, {
        'roots': ['helic-'],
        'meaning': 'something twisted or spiral',
        'originLanguage': 'Greek',
        'examples': ['anthelix', 'antihelix', 'helicine', 'helicograph', 'helicoid', 'helicopter', 'helicospore', 'helix'],
        'letter': 'h'
    }, {
        'roots': ['Hell-'],
        'meaning': 'Greece, Hellas',
        'originLanguage': 'Greek',
        'examples': ['Helladic', 'Hellenic', 'Hellenism', 'Hellenistic'],
        'letter': 'h'
    }, {
        'roots': ['helminth-'],
        'meaning': 'worm',
        'originLanguage': 'Greek',
        'examples': ['anthelmintic', 'antihelminthic', 'helminth', 'helminthic', 'helminthoid'],
        'letter': 'h'
    }, {
        'roots': ['helot-'],
        'meaning': 'enslaved',
        'originLanguage': 'Greek',
        'examples': ['Helot', 'helotism', 'helotry'],
        'letter': 'h'
    }, {
        'roots': ['hem-'],
        'meaning': 'blood',
        'originLanguage': 'Greek',
        'examples': [''],
        'letter': 'h'
    }, {
        'roots': ['hemer-'],
        'meaning': 'day',
        'originLanguage': 'Greek',
        'examples': ['Decameron', 'ephemeral', 'ephemeris', 'ephemeron', 'ephemerous', 'hemeralopia'],
        'letter': 'h'
    }, {
        'roots': ['hemer-'],
        'meaning': 'tame',
        'originLanguage': 'Greek',
        'examples': ['hemeroby', 'hemerochora', 'hemerophile'],
        'letter': 'h'
    }, {
        'roots': ['hemi-'],
        'meaning': 'half',
        'originLanguage': 'Greek',
        'examples': ['anhemitonic', 'hemiballismus', 'hemicryptophyte', 'hemicube', 'hemicycle', 'hemidesmosome', 'hemimelia', 'hemimetabolic', 'hemimetabolism', 'hemimetaboly', 'hemiparesis', 'hemiplegia', 'hemipolyhedron', 'hemisphere', 'hemitonic'],
        'letter': 'h'
    }, {
        'roots': ['hemo-'],
        'meaning': 'blood',
        'originLanguage': 'Greek',
        'examples': [''],
        'letter': 'h'
    }, {
        'roots': ['hen-'],
        'meaning': 'one',
        'originLanguage': 'Greek',
        'examples': ['enosis', 'enotikon', 'henad', 'hendiadys', 'henotheism', 'hyphen'],
        'letter': 'h'
    }, {
        'roots': ['hendec-'],
        'meaning': 'eleven',
        'originLanguage': 'Greek',
        'examples': ['hendecagon', 'hendecagram', 'hendecagrammic', 'hendecane', 'hendecasyllabic', 'hendecasyllable'],
        'letter': 'h'
    }, {
        'roots': ['hepat-'],
        'meaning': 'liver',
        'originLanguage': 'Greek',
        'examples': ['heparin', 'hepatic', 'hepatitis', 'hepatocyte', 'hepatology', 'hepatomancy', 'hepatoscopy', 'hepatotoxic', 'hepatotoxin', 'hepatotropic'],
        'letter': 'h'
    }, {
        'roots': ['hept-'],
        'meaning': 'seven',
        'originLanguage': 'Greek',
        'examples': ['heptachord', 'heptagon', 'heptagram', 'heptagraph', 'heptahedron', 'heptamer', 'heptameric', 'heptameter', 'Heptateuch', 'heptathlete', 'heptathlon', 'heptatonic', 'heptode'],
        'letter': 'h'
    }, {
        'roots': ['her-', 'heir-'],
        'meaning': 'heir',
        'originLanguage': 'Latin',
        'examples': ['heir', 'heiress', 'hereditary', 'heredity', 'heritage', 'inherit'],
        'letter': 'h'
    }, {
        'roots': ['here-', 'hes-'],
        'meaning': 'cling, stick',
        'originLanguage': 'Latin',
        'examples': ['adhere', 'adherence', 'adherend', 'adherent', 'adhesion', 'adhesive', 'cohere', 'coherence', 'coherent', 'cohesion', 'cohesive', 'decoherence', 'hesitancy', 'hesitant', 'hesitate', 'hesitation', 'hesitator', 'incoherent', 'inhere', 'inherency', 'inherent', 'inhesion', 'nonadherence', 'nonadherent', 'nonadhesive'],
        'letter': 'h'
    }, {
        'roots': ['herald-'],
        'meaning': 'messenger, envoy',
        'originLanguage': 'Latin',
        'examples': ['herald', 'heraldic', 'heraldry'],
        'letter': 'h'
    }, {
        'roots': ['herb-'],
        'meaning': 'grass',
        'originLanguage': 'Latin',
        'examples': ['herbal', 'herbicide', 'herbivore'],
        'letter': 'h'
    }, {
        'roots': ['heres-', 'heret-'],
        'meaning': 'choose, take',
        'originLanguage': 'Greek',
        'examples': ['heresy', 'heretic', 'heretical'],
        'letter': 'h'
    }, {
        'roots': ['herm-'],
        'meaning': 'Hermes',
        'originLanguage': 'Greek',
        'examples': ['herm', 'hermaphrodite', 'hermeneutic', 'hermeneutics', 'hermetic'],
        'letter': 'h'
    }, {
        'roots': ['hero-'],
        'meaning': 'hero',
        'originLanguage': 'Greek',
        'examples': ['antihero', 'hero', 'heroic', 'heroine', 'heroism'],
        'letter': 'h'
    }, {
        'roots': ['herp-'],
        'meaning': 'creep',
        'originLanguage': 'Greek',
        'examples': ['herpes', 'herpetology'],
        'letter': 'h'
    }, {
        'roots': ['heter-'],
        'meaning': 'different, other',
        'originLanguage': 'Greek',
        'examples': ['heterochromatin', 'heterodox', 'heterodoxy', 'heterogeneity', 'heterogeneous', 'heterophobia', 'heterosexual', 'heterosis', 'heterotic'],
        'letter': 'h'
    }, {
        'roots': ['heur-'],
        'meaning': 'find',
        'originLanguage': 'Greek',
        'examples': ['eureka', 'heuristic', 'metaheuristic'],
        'letter': 'h'
    }, {
        'roots': ['hex-'],
        'meaning': 'six',
        'originLanguage': 'Greek',
        'examples': ['hexachord', 'hexad', 'hexadic', 'hexagon', 'hexagram', 'hexahedron', 'hexamer', 'hexamerous', 'hexameter', 'hexapod', 'hexastyle', 'hexasyllabic', 'Hexateuch', 'hexatonic', 'hexode', 'tetrahemihexahedron'],
        'letter': 'h'
    }, {
        'roots': ['hi-'],
        'meaning': 'gape',
        'originLanguage': 'Latin',
        'examples': ['dehisce', 'dehiscence', 'dehiscent', 'hiatal', 'hiatus', 'indehiscence', 'indehiscent', 'inhiation'],
        'letter': 'h'
    }, {
        'roots': ['hibern-'],
        'meaning': 'wintry',
        'originLanguage': 'Latin',
        'examples': ['hibernacle', 'hibernaculum', 'hibernal', 'hibernate', 'hibernation', 'hibernator'],
        'letter': 'h'
    }, {
        'roots': ['hidrot-'],
        'meaning': 'sweat',
        'originLanguage': 'Greek',
        'examples': ['anhidrosis', 'dyshidrosis', 'dyshidrotic', 'hematidrosis', 'hidrocystoma', 'hidropoiesis', 'hidroschesis', 'hidrosis', 'hidrotic', 'hyperhidrosis', 'hypohidrosis'],
        'letter': 'h'
    }, {
        'roots': ['hiem-'],
        'meaning': 'winter',
        'originLanguage': 'Latin',
        'examples': ['hiemal'],
        'letter': 'h'
    }, {
        'roots': ['hier-'],
        'meaning': 'holy, sacred',
        'originLanguage': 'Greek',
        'examples': ['hierarch', 'hierarchy', 'hieratic', 'hierocracy', 'hierodeacon', 'hieroglyph', 'hieroglyphic', 'hierogram', 'hierolatry', 'hieromonk', 'hierurgy'],
        'letter': 'h'
    }, {
        'roots': ['hipp-'],
        'meaning': 'horse',
        'originLanguage': 'Greek',
        'examples': ['ephippium', 'hippeis', 'hippocampus', 'hippodrome', 'hippology', 'Hippolyte', 'hippomancy', 'hippophagy', 'hippophile', 'hippophobia', 'hippopotamus', 'parahippocampus'],
        'letter': 'h'
    }, {
        'roots': ['hirsut-'],
        'meaning': 'hairy',
        'originLanguage': 'Latin',
        'examples': ['hirsute', 'hirsutulous'],
        'letter': 'h'
    }, {
        'roots': ['hispid-'],
        'meaning': 'bristly',
        'originLanguage': 'Latin',
        'examples': ['hispidity', 'hispidulous'],
        'letter': 'h'
    }, {
        'roots': ['histri-'],
        'meaning': 'actor',
        'originLanguage': 'Latin',
        'examples': ['histrionic'],
        'letter': 'h'
    }, {
        'roots': ['hod-'],
        'meaning': 'way',
        'originLanguage': 'Greek',
        'examples': ['anode', 'cathode', 'diode', 'electrode', 'episode', 'ergodic', 'exodos', 'exodus', 'heptode', 'herpolhode', 'hodometer', 'hydathode', 'method', 'methodic', 'Methodism', 'Methodist', 'methodology', 'octode', 'parodos', 'pentode', 'period', 'periodic', 'synod', 'tetrode', 'triode'],
        'letter': 'h'
    }, {
        'roots': ['hol-'],
        'meaning': 'whole',
        'originLanguage': 'Greek',
        'examples': ['catholic', 'holiatry', 'holism', 'holistic', 'holography', 'holomorphic', 'holonomy'],
        'letter': 'h'
    }, {
        'roots': ['hom-'],
        'meaning': 'same',
        'originLanguage': 'Greek',
        'examples': ['homiletic', 'homily', 'homogeneous', 'homograph', 'homologous', 'homology', 'homonym', 'homophobia', 'homophone', 'homosexual', 'homozygous'],
        'letter': 'h'
    }, {
        'roots': ['homal-'],
        'meaning': 'even, flat',
        'originLanguage': 'Greek',
        'examples': ['anomalous', 'anomaly'],
        'letter': 'h'
    }, {
        'roots': ['home-'],
        'meaning': 'like',
        'originLanguage': 'Greek',
        'examples': ['homeostasis'],
        'letter': 'h'
    }, {
        'roots': ['homin-'],
        'meaning': 'human',
        'originLanguage': 'Latin',
        'examples': ['ad hominem', 'bonhomie', 'homage', 'hombre', 'homicide', 'hominid', 'homuncular', 'homunculus', 'human', 'humane', 'humanitarian', 'humanity', 'inhuman', 'inhumane', 'inhumanity', 'Nemo', 'nonhuman', 'omber', 'ombre', 'prehuman', 'subhuman', 'superhuman', 'transhuman'],
        'letter': 'h'
    }, {
        'roots': ['homoe-', 'home-'],
        'meaning': 'like, similar',
        'originLanguage': 'Greek',
        'examples': ['homeopathy', 'homeostasis', 'homeothermy', 'homoeopathy', 'homoiotherm', 'homoiothermic'],
        'letter': 'h'
    }, {
        'roots': ['honor-'],
        'meaning': 'esteem',
        'originLanguage': 'Latin',
        'examples': ['dishonor', 'dishonorable', 'honorable', 'honorand', 'honorarium', 'honorary', 'honoree', 'honorific'],
        'letter': 'h'
    }, {
        'roots': ['hor-'],
        'meaning': 'boundary',
        'originLanguage': 'Greek',
        'examples': ['aorist', 'aphorism', 'aphorismus', 'aphorize', 'diorite', 'horizon', 'horopter', 'horotelic'],
        'letter': 'h'
    }, {
        'roots': ['hor-'],
        'meaning': 'hour',
        'originLanguage': 'Greek',
        'examples': ['horologist', 'horology', 'horometry', 'horoscope'],
        'letter': 'h'
    }, {
        'roots': ['horm-'],
        'meaning': 'that which excites',
        'originLanguage': 'Greek',
        'examples': ['horme', 'hormephobia', 'hormesis', 'hormetic', 'hormic', 'hormone'],
        'letter': 'h'
    }, {
        'roots': ['hort-'],
        'meaning': 'garden',
        'originLanguage': 'Latin',
        'examples': ['antecourt', 'cohort', 'cortege', 'court', 'courteous', 'courtesan', 'courtesy', 'courtier', 'curtain', 'curtilage', 'Curtis', 'discourteous', 'discourtesy', 'frontcourt', 'horticultural', 'horticulture'],
        'letter': 'h'
    }, {
        'roots': ['hospit-'],
        'meaning': 'host',
        'originLanguage': 'Latin',
        'examples': ['co-host', 'hospice', 'hospitable', 'hospital', 'hospitality', 'host', 'hostal', 'hostel', 'hosteler', 'hostler', 'hotel', 'hotelier', 'inhospitable', 'inhospitality'],
        'letter': 'h'
    }, {
        'roots': ['host-'],
        'meaning': 'enemy',
        'originLanguage': 'Latin',
        'examples': ['host', 'hostile', 'hostility'],
        'letter': 'h'
    }, {
        'roots': ['hum-'],
        'meaning': 'ground',
        'originLanguage': 'Latin',
        'examples': ['disinhume', 'exhumation', 'exhume', 'humate', 'humation', 'humble', 'humic', 'humicolous', 'humiliate', 'humiliation', 'humility', 'humus', 'inhumation', 'inhume'],
        'letter': 'h'
    }, {
        'roots': ['hyal-'],
        'meaning': 'glass',
        'originLanguage': 'Greek',
        'examples': ['hyaline', 'hyaloid'],
        'letter': 'h'
    }, {
        'roots': ['hybr-'],
        'meaning': 'wantonness',
        'originLanguage': 'Greek',
        'examples': ['hubris', 'hubristic', 'hybris', 'hybristic'],
        'letter': 'h'
    }, {
        'roots': ['hydn-'],
        'meaning': 'truffle',
        'originLanguage': 'Greek',
        'examples': ['hydnoid', 'Hydnum'],
        'letter': 'h'
    }, {
        'roots': ['hydr-'],
        'meaning': 'water',
        'originLanguage': 'Greek',
        'examples': ['clepsydra', 'dehydrate', 'hydathode', 'hydatid', 'hydatidosis', 'hydra', 'hydrant', 'hydrate', 'hydraulic', 'hydraulics', 'hydrochloric', 'hydrodynamics', 'hydroelectric', 'hydrogen', 'hydrologist', 'hydrology', 'hydrolysis', 'hydromancy', 'hydrophile', 'hydrophilic', 'hydrophily', 'hydrophobia', 'hydrophobic', 'hydroponic', 'hydrosphere', 'hydrostat', 'hydrostatic', 'hydrothermic', 'hydrous', 'hydrozoa', 'polyhydric'],
        'letter': 'h'
    }, {
        'roots': ['hygie-'],
        'meaning': 'healthy',
        'originLanguage': 'Greek',
        'examples': ['Hygieia', 'hygiene', 'hygienic', 'hygienics', 'hygienist'],
        'letter': 'h'
    }, {
        'roots': ['hygr-'],
        'meaning': 'wet',
        'originLanguage': 'Greek',
        'examples': ['hygric', 'hygroma', 'hygrometer'],
        'letter': 'h'
    }, {
        'roots': ['hymen-'],
        'meaning': 'skin or membrane',
        'originLanguage': 'Greek',
        'examples': ['hymen', 'hymenium', 'hymenomycete', 'hymenophore', 'hymenoplasty', 'Hymenoptera', 'hymenorrhaphy', 'hymenotomy'],
        'letter': 'h'
    }, {
        'roots': ['hyo-'],
        'meaning': 'U-shaped',
        'originLanguage': 'Greek',
        'examples': ['hyoid', 'hyostyly'],
        'letter': 'h'
    }, {
        'roots': ['hyp-, hypo-'],
        'meaning': 'under',
        'originLanguage': 'Greek',
        'examples': ['hyphen', 'hypoallergenic', 'hypodermic', 'hypogene', 'hypothermia', 'hypotonic', 'hypoxemia', 'hypoxia'],
        'letter': 'h'
    }, {
        'roots': ['hyper-'],
        'meaning': 'above, over',
        'originLanguage': 'Greek',
        'examples': ['hyper', 'hyperbaric', 'hyperbola', 'hyperbole', 'Hyperion', 'hyperlink', 'hyperoxia', 'hyperpyrexia', 'hyperthermia', 'hypertonic'],
        'letter': 'h'
    }, {
        'roots': ['hyph-'],
        'meaning': 'weave',
        'originLanguage': 'Greek',
        'examples': ['hypha', 'hyphomycete', 'hyphopodium'],
        'letter': 'h'
    }, {
        'roots': ['hypn-'],
        'meaning': 'sleep',
        'originLanguage': 'Greek',
        'examples': ['hypnagogia', 'hypnagogic', 'hypnolepsy', 'hypnophobia', 'hypnopompia', 'hypnopompic', 'hypnosis', 'hypnotherapy', 'hypnotic', 'hypnotist', 'hypnotize'],
        'letter': 'h'
    }, {
        'roots': ['hyps-'],
        'meaning': 'height',
        'originLanguage': 'Greek',
        'examples': ['hypsography', 'hypsometer', 'hypsophobia'],
        'letter': 'h'
    }, {
        'roots': ['hys-'],
        'meaning': 'hog',
        'originLanguage': 'Greek',
        'examples': ['hyena', 'hyenoid'],
        'letter': 'h'
    }, {
        'roots': ['hyster-'],
        'meaning': 'womb',
        'originLanguage': 'Greek',
        'examples': ['hysteralgia', 'hysteratresia', 'hysterectomy', 'hysteria', 'hysteric', 'hysterosalpingography'],
        'letter': 'h'
    }, {
        'roots': ['hyster-'],
        'meaning': 'later',
        'originLanguage': 'Greek',
        'examples': ['hysteresis', 'hysteretic', 'hysteron proteron'],
        'letter': 'h'
    }],
    'i': [{
        'roots': ['i-'],
        'meaning': 'go',
        'originLanguage': 'Greek',
        'examples': ['anion', 'anionic', 'cation', 'cationic', 'ion', 'ionic', 'ionize', 'polyanion', 'polycation'],
        'letter': 'i'
    }, {
        'roots': ['iatr-'],
        'meaning': 'heal',
        'originLanguage': 'Greek',
        'examples': ['iatrogenic', 'physiatry', 'podiatrist', 'podiatry', 'psychiatrist', 'psychiatry'],
        'letter': 'i'
    }, {
        'roots': ['ichthy-[54]'],
        'meaning': 'fish',
        'originLanguage': 'Greek',
        'examples': ['ichthyology', 'Ichthyophaga', 'ichthyophobia', 'ichthyoplankton', 'ichthyosis'],
        'letter': 'i'
    }, {
        'roots': ['icos-'],
        'meaning': 'twenty',
        'originLanguage': 'Greek',
        'examples': ['hemi-icosahedron', 'icosagon', 'icosahedron'],
        'letter': 'i'
    }, {
        'roots': ['icter-'],
        'meaning': 'jaundice',
        'originLanguage': 'Greek',
        'examples': ['icteric', 'icterogenic', 'icterohemorrhagic', 'icterohepatitis', 'icteroid', 'icterus'],
        'letter': 'i'
    }, {
        'roots': ['id-'],
        'meaning': 'shape, form, picture',
        'originLanguage': 'Greek',
        'examples': ['eidetic', 'eidolon', 'eidos', 'idol', 'idolater', 'idolatry', 'idyll', 'idyllic', 'idyllist', 'pareidolia'],
        'letter': 'i'
    }, {
        'roots': ['ide-'],
        'meaning': 'idea, thought',
        'originLanguage': 'Greek',
        'examples': ['ideogram', 'ideologue', 'ideology'],
        'letter': 'i'
    }, {
        'roots': ['idi-'],
        'meaning': 'own, peculiarity',
        'originLanguage': 'Greek',
        'examples': ['idiolect', 'idiom', 'idiopathic', 'idiopathy', 'idiophone', 'idiosyncrasy', 'idiosyncratic', 'idiot', 'idiotic'],
        'letter': 'i'
    }, {
        'roots': ['ign-'],
        'meaning': 'fire',
        'originLanguage': 'Latin',
        'examples': ['igneous', 'ignite', 'ignition'],
        'letter': 'i'
    }, {
        'roots': ['imagin-'],
        'meaning': 'copy',
        'originLanguage': 'Latin',
        'examples': ['image', 'imagine'],
        'letter': 'i'
    }, {
        'roots': ['imbr-'],
        'meaning': 'heavy rain',
        'originLanguage': 'Latin',
        'examples': ['ignimbrite', 'imbrex', 'imbricate', 'imbrication', 'imbriferous'],
        'letter': 'i'
    }, {
        'roots': ['in-'],
        'meaning': 'sinew',
        'originLanguage': 'Greek',
        'examples': ['inion', 'inotrope', 'inotropic'],
        'letter': 'i'
    }, {
        'roots': ['in-', 'il-', 'im-'],
        'meaning': 'in, on',
        'originLanguage': 'Latin',
        'examples': ['illuminate', 'import', 'incur', 'intend', 'invite'],
        'letter': 'i'
    }, {
        'roots': ['in-', 'il-', 'im-', 'ir-'],
        'meaning': 'not, un- (negation)',
        'originLanguage': 'Latin',
        'examples': ['illicit', 'impossible', 'inimical', 'insane', 'irrational'],
        'letter': 'i'
    }, {
        'roots': ['inan-'],
        'meaning': 'empty, vain',
        'originLanguage': 'Latin',
        'examples': ['inane', 'inanition', 'inanity'],
        'letter': 'i'
    }, {
        'roots': ['infra-'],
        'meaning': 'below, under',
        'originLanguage': 'Latin',
        'examples': ['infrared', 'infrastructure'],
        'letter': 'i'
    }, {
        'roots': ['insul-'],
        'meaning': 'island',
        'originLanguage': 'Latin',
        'examples': ['insular', 'insulation'],
        'letter': 'i'
    }, {
        'roots': ['inter-'],
        'meaning': 'among, between',
        'originLanguage': 'Latin',
        'examples': ['intercollegiate', 'intermission', 'intersection'],
        'letter': 'i'
    }, {
        'roots': ['intra-'],
        'meaning': 'within',
        'originLanguage': 'Latin',
        'examples': ['intramural', 'intravenous'],
        'letter': 'i'
    }, {
        'roots': ['irasc-', 'irat-'],
        'meaning': 'be angry',
        'originLanguage': 'Latin',
        'examples': ['irascible', 'irate', 'ire'],
        'letter': 'i'
    }, {
        'roots': ['irid-'],
        'meaning': 'rainbow',
        'originLanguage': 'Latin',
        'examples': ['iridescent'],
        'letter': 'i'
    }, {
        'roots': ['is-, iso-'],
        'meaning': 'equal, same',
        'originLanguage': 'Greek',
        'examples': ['isogloss', 'isograph', 'isometric', 'isomorphic', 'isosceles', 'isotonic', 'isotropic'],
        'letter': 'i'
    }, {
        'roots': ['ischi-'],
        'meaning': 'hip joint',
        'originLanguage': 'Greek',
        'examples': ['ischiadic', 'ischium', 'sciatic', 'sciatica'],
        'letter': 'i'
    }, {
        'roots': ['iter-'],
        'meaning': 'again',
        'originLanguage': 'Latin',
        'examples': ['iteration'],
        'letter': 'i'
    }, {
        'roots': ['itiner-'],
        'meaning': 'journey',
        'originLanguage': 'Latin',
        'examples': ['itinerary'],
        'letter': 'i'
    }],
    'j': [{
        'roots': ['jac-'],
        'meaning': 'lie',
        'originLanguage': 'Latin',
        'examples': ['adjacency', 'adjacent', 'circumjacency', 'circumjacent', 'ease', 'easy', 'interjacent', 'interjoist', 'joist', 'nonadjacent', 'subjacent', 'superjacent'],
        'letter': 'j'
    }, {
        'roots': ['jac-', '-ject-'],
        'meaning': 'cast, throw',
        'originLanguage': 'Latin',
        'examples': ['abject', 'adjectival', 'adjective', 'conjectural', 'conjecture', 'deject', 'dejection', 'disject', 'disjection', 'ejaculate', 'ejaculation', 'ejaculatory', 'eject', 'ejecta', 'ejection', 'ejective', 'ejectment', 'ejector', 'inject', 'injection', 'injective', 'injector', 'interject', 'interjection', 'interjectional', 'interjector', 'interjectory', 'introject', 'introjection', 'introjective', 'jactation', 'jactitation', 'jaculate', 'jaculation', 'jaculator', 'jaculatory', 'jaculiferous', 'jet', 'jetsam', 'jettison', 'nonobjective', 'object', 'objectification', 'objection', 'objectionable', 'objective', 'objectivity', 'objector', 'parget', 'project', 'projectile', 'projection', 'projective', 'projector', 'reject', 'rejectamenta', 'rejection', 'subject', 'subjection', 'subjective', 'subjectivity', 'subjicible', 'surjection', 'surjective', 'traject', 'trajectile', 'trajection', 'trajectory', 'trijet'],
        'letter': 'j'
    }, {
        'roots': ['janu-'],
        'meaning': 'door',
        'originLanguage': 'Latin',
        'examples': ['janitor', 'January'],
        'letter': 'j'
    }, {
        'roots': ['joc-'],
        'meaning': 'jest',
        'originLanguage': 'Latin',
        'examples': ['jewel', 'jewelry', 'jocose', 'jocosity', 'jocular', 'jocularity', 'joke', 'jongleur', 'juggle'],
        'letter': 'j'
    }, {
        'roots': ['judic-'],
        'meaning': 'judge',
        'originLanguage': 'Latin',
        'examples': ['adjudicate', 'adjudication', 'adjudicative', 'adjudicator', 'adjudicatory', 'extrajudicial', 'injudicious', 'judge', 'judgement', 'judgment', 'judgmental', 'judicable', 'judicative', 'judicator', 'judicatory', 'judicature', 'judicial', 'judiciary', 'judicious', 'nonjudgmental', 'nonjudicial', 'prejudge', 'prejudgment', 'prejudice', 'prejudicial', 'quasijudicial'],
        'letter': 'j'
    }, {
        'roots': ['jug-'],
        'meaning': 'yoke',
        'originLanguage': 'Latin',
        'examples': ['conjugal', 'subjugate'],
        'letter': 'j'
    }, {
        'roots': ['jung-', 'junct-'],
        'meaning': 'join',
        'originLanguage': 'Latin',
        'examples': ['adjoin', 'adjoint', 'adjunct', 'adjunction', 'adjunctive', 'conjoin', 'conjoint', 'conjunct', 'conjunction', 'conjunctive', 'disjoin', 'disjoint', 'disjunct', 'disjunction', 'disjunctive', 'enjoin', 'enjoinder', 'enjoinment', 'injunction', 'injunctive', 'join', 'junction', 'juncture', 'junta', 'junto', 'nondisjunction', 'nonjoinder', 'rejoin', 'rejoinder', 'sejoin', 'sejungible', 'subjoin', 'subjoinder', 'subjunctive', 'surrejoinder'],
        'letter': 'j'
    }, {
        'roots': ['junior-'],
        'meaning': 'younger',
        'originLanguage': 'Latin',
        'examples': ['junior', 'juniority'],
        'letter': 'j'
    }, {
        'roots': ['jus-', 'jur-'],
        'meaning': 'law, justice',
        'originLanguage': 'Latin',
        'examples': ['abjure', 'jurisprudence', 'jury', 'just', 'justice', 'objurgate', 'perjury'],
        'letter': 'j'
    }, {
        'roots': ['juv-', 'jut-'],
        'meaning': 'help',
        'originLanguage': 'Latin',
        'examples': ['adjument', 'adjutant', 'adjutor', 'adjutory', 'adjutrix', 'coadjutant', 'coadjutor', 'injucundity', 'jocund', 'jocundity'],
        'letter': 'j'
    }, {
        'roots': ['juven-'],
        'meaning': 'young, youth',
        'originLanguage': 'Latin',
        'examples': ['juvenile', 'rejuvenate'],
        'letter': 'j'
    }, {
        'roots': ['juxta-'],
        'meaning': 'beside, near',
        'originLanguage': 'Latin',
        'examples': ['juxtaposition'],
        'letter': 'j'
    }],
    'k': [{
        'roots': ['kilo-'],
        'meaning': 'thousand',
        'originLanguage': 'Greek',
        'examples': ['kilobyte', 'kilogram', 'kilometer'],
        'letter': 'k'
    }, {
        'roots': ['kine-', 'cine-'],
        'meaning': 'movement, motion',
        'originLanguage': 'Greek',
        'examples': ['akinesia', 'akinesis', 'akinete', 'akinetic', 'cinema', 'cinematic', 'diakinesis', 'dyskinesia', 'dyskinetic', 'hyperkinesia', 'hyperkinesis', 'hyperkinetic', 'hypokinesia', 'hypokinesis', 'hypokinetic', 'kinematics', 'kinescope', 'kinesiologist', 'kinesiology', 'kinesis', 'kinesthetic', 'kinetic', 'kineticism', 'kinetics', 'kinetochore', 'kinetophobia', 'photokinesis', 'telekinesis'],
        'letter': 'k'
    }, {
        'roots': ['klept-'],
        'meaning': 'steal',
        'originLanguage': 'Greek',
        'examples': ['kleptocracy', 'kleptomania', 'kleptophobia', 'kleptoplasty'],
        'letter': 'k'
    }, {'roots': ['kudo-'], 'meaning': 'glory', 'originLanguage': 'Greek', 'examples': ['kudos'], 'letter': 'k'}],
    'l': [{
        'roots': ['lab-', 'lep-'],
        'meaning': 'grasp, seize, take',
        'originLanguage': 'Greek',
        'examples': ['analemma', 'analemmatic', 'analeptic', 'catalepsy', 'cataleptic', 'dilemma', 'dilemmatic', 'epilepsy', 'epileptic', 'hypnolepsy', 'hysteroepilepsy', 'metalepsis', 'narcolepsy', 'nympholepsy', 'octosyllabic', 'procatalepsis', 'prolepsis', 'proleptic', 'proslepsis', 'syllabic', 'syllabism', 'syllable', 'syllabogram', 'syllepsis', 'trisyllabic', 'trisyllable'],
        'letter': 'l'
    }, {
        'roots': ['lab-', 'laps-'],
        'meaning': 'slide, slip',
        'originLanguage': 'Latin',
        'examples': ['collapse', 'collapsible', 'elapse', 'labile', 'lapse', 'prolapse', 'relapse'],
        'letter': 'l'
    }, {
        'roots': ['labi-'],
        'meaning': 'lip',
        'originLanguage': 'Latin',
        'examples': ['bilabial', 'bilabiate', 'infralabial', 'labial', 'labiate', 'labium', 'sublabial', 'supralabial'],
        'letter': 'l'
    }, {
        'roots': ['labor-'],
        'meaning': 'work',
        'originLanguage': 'Latin',
        'examples': ['collaborate', 'collaboration', 'collaborative', 'collaborator', 'elaborate', 'elaboration', 'elaborative', 'elaborator', 'labor', 'laboratory', 'laborious'],
        'letter': 'l'
    }, {
        'roots': ['lacer-'],
        'meaning': 'tear',
        'originLanguage': 'Latin',
        'examples': ['laceration'],
        'letter': 'l'
    }, {
        'roots': ['lacrim-'],
        'meaning': 'cry, tears',
        'originLanguage': 'Latin',
        'examples': ['lachrymal', 'lachrymose', 'lachrymosity', 'lacrimal', 'lacrimation', 'lacrimator', 'lacrimatory', 'lacrimous'],
        'letter': 'l'
    }, {
        'roots': ['lact-'],
        'meaning': 'milk',
        'originLanguage': 'Latin',
        'examples': ['ablactate', 'ablactation', 'lactary', 'lactase', 'lactate', 'lactation', 'lactational', 'lacteal', 'lacteous', 'lactescent', 'lactic', 'lactose', 'laitance', 'latte'],
        'letter': 'l'
    }, {
        'roots': ['lamin-'],
        'meaning': 'layer, slice',
        'originLanguage': 'Latin',
        'examples': ['bilamellate', 'bilaminar', 'lame', 'lamé', 'lamella', 'lamellar', 'lamellate', 'laminate', 'lamination', 'laminose', 'laminous', 'multilaminar', 'omelet', 'omelette', 'trilaminar', 'unilaminar'],
        'letter': 'l'
    }, {
        'roots': ['lamp-'],
        'meaning': 'shine, torch',
        'originLanguage': 'Greek',
        'examples': ['lamp', 'lamprid', 'Lampris'],
        'letter': 'l'
    }, {
        'roots': ['lapid-'],
        'meaning': 'stone',
        'originLanguage': 'Latin',
        'examples': ['dilapidate', 'dilapidation', 'lapidarian', 'lapidary', 'lapidate', 'lapidation', 'lapidator', 'lapideous', 'lapidescence', 'lapidescent', 'lapidicolous', 'lapidification', 'lapillation', 'lapilli'],
        'letter': 'l'
    }, {
        'roots': ['larg-'],
        'meaning': 'large',
        'originLanguage': 'Latin',
        'examples': ['allargando', 'enlarge', 'enlargement', 'largamente', 'largando', 'large', 'largess', 'largesse', 'largition', 'largo'],
        'letter': 'l'
    }, {
        'roots': ['larv-'],
        'meaning': 'ghost, mask',
        'originLanguage': 'Latin',
        'examples': ['larva', 'larvae', 'larval'],
        'letter': 'l'
    }, {
        'roots': ['lat-'],
        'meaning': 'broad, wide',
        'originLanguage': 'Latin',
        'examples': ['laticlave', 'latifoliate', 'latifundium', 'latitude', 'latitudinal', 'latitudinarian', 'latitudinous'],
        'letter': 'l'
    }, {
        'roots': ['later-'],
        'meaning': 'side',
        'originLanguage': 'Latin',
        'examples': ['ambilateral', 'ambilaterality', 'bilateral', 'bilaterality', 'collateral', 'contralateral', 'equilateral', 'extralateral', 'inequilateral', 'ipsilateral', 'lateral', 'laterality', 'matrilateral', 'multilateral', 'nonlateral', 'patrilateral', 'plurilateral', 'quadrilateral', 'semilatus', 'septilateral', 'trilateral', 'unilateral'],
        'letter': 'l'
    }, {
        'roots': ['laud-', 'laus-'],
        'meaning': 'praise',
        'originLanguage': 'Latin',
        'examples': ['laud', 'laudable', 'laudanum', 'laudation', 'Lauds', 'summa cum laude'],
        'letter': 'l'
    }, {
        'roots': ['lav-'],
        'meaning': 'wash',
        'originLanguage': 'Latin',
        'examples': ['launder', 'laundry', 'lava', 'lavation', 'lavatory', 'lave', 'lavender', 'lavish', 'lotion'],
        'letter': 'l'
    }, {
        'roots': ['lax-'],
        'meaning': 'not tense, slack',
        'originLanguage': 'Latin',
        'examples': ['delay', 'disrelish', 'laches', 'lax', 'laxation', 'laxative', 'laxity', 'leasable', 'lease', 'relax', 'relaxant', 'relaxation', 'relay', 'release', 'relish', 'sublease'],
        'letter': 'l'
    }, {
        'roots': ['lecith-'],
        'meaning': 'egg yolk',
        'originLanguage': 'Greek',
        'examples': ['lecithin'],
        'letter': 'l'
    }, {
        'roots': ['led-', 'les-', '-lid-', '-lis-'],
        'meaning': 'hurt, strike',
        'originLanguage': 'Latin',
        'examples': ['allision', 'collide', 'collision', 'elide', 'elidible', 'elision', 'illesive', 'lesion'],
        'letter': 'l'
    }, {
        'roots': ['leg-'],
        'meaning': 'say',
        'originLanguage': 'Greek',
        'examples': ['alexia', 'alexithymia', 'apologetic', 'apologia', 'apology', 'dialect', 'dialectic', 'dialectologist', 'dialectology', 'dialog', 'dialogue', 'dyslexia', 'dyslexic', 'dyslogia', 'dyslogism', 'ethnolect', 'legomenon', 'lexeme', 'lexicography', 'lexicology', 'lexicon', 'lexigram', 'lexis', 'logic', 'logion', 'logos', 'prolegomenon'],
        'letter': 'l'
    }, {
        'roots': ['leg-', 'lect-'],
        'meaning': 'choose, gather, read',
        'originLanguage': 'Latin',
        'examples': ['coil', 'colleague', 'collect', 'collectible', 'collection', 'collective', 'collector', 'college', 'collegial', 'collegiality', 'collegian', 'collegiate', 'collegium', 'counterintelligence', 'cull', 'deselect', 'diligence', 'diligent', 'elect', 'electability', 'electable', 'electee', 'election', 'elective', 'elector', 'electoral', 'electorate', 'eligibility', 'eligible', 'elite', 'illegibility', 'illegible', 'ineligibility', 'ineligible', 'intellect', 'intellection', 'intellectual', 'intellectuality', 'intelligence', 'intelligent', 'intelligentsia', 'intercollegiate', 'lectern', 'lectin', 'lection', 'lectionary', 'lector', 'lectorate', 'lecture', 'legend', 'legendary', 'legendry', 'legibility', 'legible', 'legion', 'legionary', 'legionnaire', 'legume', 'leguminous', 'lesson', 'neglect', 'negligee', 'negligence', 'negligent', 'negligible', 'nonelective', 'nonelite', 'nonnegligible', 'nonselective', 'postelection', 'predilect', 'predilection', 'preelection', 'prelect', 'prelection', 'prelector', 'preselect', 'recollect', 'recollection', 'reelect', 'reelection', 'religion', 'reselect', 'sacrilege', 'select', 'selectance', 'selectee', 'selection', 'selective', 'selectivity', 'selector', 'superselection', 'uniselector'],
        'letter': 'l'
    }, {
        'roots': ['leg-'],
        'meaning': 'law',
        'originLanguage': 'Latin',
        'examples': ['allege', 'disloyal', 'disloyalty', 'extralegal', 'illegal', 'legal', 'legality', 'legific', 'legislate', 'legislation', 'legislative', 'legislator', 'legislature', 'legitim', 'legitimacy', 'legitimate', 'loyal', 'loyalty', 'nonlegal', 'privilege'],
        'letter': 'l'
    }, {
        'roots': ['leg-'],
        'meaning': 'send',
        'originLanguage': 'Latin',
        'examples': ['allegation', 'delegable', 'delegacy', 'delegate', 'delegatee', 'delegation', 'delegator', 'delegatory', 'league', 'legacy', 'legatary', 'legate', 'legatee', 'legatine', 'legation', 'legato', 'nondelegate', 'relegate', 'relegation', 'superdelegate'],
        'letter': 'l'
    }, {
        'roots': ['lei-'],
        'meaning': 'smooth',
        'originLanguage': 'Greek',
        'examples': ['leiomyoma'],
        'letter': 'l'
    }, {
        'roots': ['lekan-'],
        'meaning': 'dish, pot',
        'originLanguage': 'Greek',
        'examples': ['lekane'],
        'letter': 'l'
    }, {
        'roots': ['leni-'],
        'meaning': 'gentle',
        'originLanguage': 'Latin',
        'examples': ['leniency', 'lenient', 'leniment', 'lenis', 'lenition', 'lenitive', 'lenitude', 'lenity'],
        'letter': 'l'
    }, {
        'roots': ['leon-'],
        'meaning': 'lion',
        'originLanguage': 'Latin',
        'examples': ['dandelion', 'Leo', 'leonine', 'Leopold'],
        'letter': 'l'
    }, {
        'roots': ['lep-'],
        'meaning': 'flake, peel, scale',
        'originLanguage': 'Greek',
        'examples': ['antilepton', 'lepidolite', 'Lepidoptera', 'Lepidorhombus', 'lepidote', 'lepidotrichia', 'leprosy', 'leptocyte', 'leptogenesis', 'lepton', 'leptophyllous'],
        'letter': 'l'
    }, {
        'roots': ['leuc-', 'leuk-'],
        'meaning': 'white',
        'originLanguage': 'Greek',
        'examples': ['aleukemia', 'aleukocytosis', 'leucism', 'leucocyte', 'leucopenia', 'leucoplast', 'leukemia', 'leukocytopenia', 'leukopenia', 'leucophore'],
        'letter': 'l'
    }, {
        'roots': ['lev-'],
        'meaning': 'lift, light, raise',
        'originLanguage': 'Latin',
        'examples': ['alleviate', 'alleviation', 'bas-relief', 'counter-relief', 'deleverage', 'elevate', 'elevation', 'elevator', 'leaven', 'legerity', 'levade', 'Levant', 'levee', 'lever', 'leverage', 'leviable', 'levitate', 'levitation', 'levity', 'levy', 'relevé', 'relief', 'relieve', 'sublevation', 'superelevation'],
        'letter': 'l'
    }, {
        'roots': ['liber-'],
        'meaning': 'free',
        'originLanguage': 'Latin',
        'examples': ['deliver', 'deliverance', 'illiberal', 'illiberality', 'liberal', 'liberality', 'liberalize', 'liberate', 'liberation', 'liberator', 'libertarian', 'liberticide', 'libertinage', 'libertine', 'liberty', 'ultraliberal'],
        'letter': 'l'
    }, {
        'roots': ['libr-'],
        'meaning': 'book',
        'originLanguage': 'Latin',
        'examples': ['interlibrary', 'libel', 'libellant', 'libellee', 'libellous', 'librarian', 'library', 'libretto'],
        'letter': 'l'
    }, {
        'roots': ['lig-'],
        'meaning': 'bind',
        'originLanguage': 'Latin',
        'examples': ['ligament', 'ligature'],
        'letter': 'l'
    }, {
        'roots': ['limac-'],
        'meaning': 'slug',
        'originLanguage': 'Latin',
        'examples': ['limacine', 'limacoid', 'limacon', 'Limax'],
        'letter': 'l'
    }, {
        'roots': ['limpa-'],
        'meaning': 'clear, water',
        'originLanguage': 'Latin',
        'examples': ['limpid', 'limpidity', 'lymph'],
        'letter': 'l'
    }, {
        'roots': ['line-'],
        'meaning': 'line',
        'originLanguage': 'Latin',
        'examples': ['align', 'alignment', 'ambilineal', 'ambilineality', 'bilinear', 'collinear', 'collinearity', 'collineation', 'curvilinear', 'curvilinearity', 'delineate', 'delineation', 'delineavit', 'line', 'linea', 'lineage', 'lineal', 'lineament', 'linear', 'linearity', 'lineate', 'lineation', 'matrilineal', 'multicollinearity', 'multilinear', 'nonalignment', 'noncollinear', 'nonlineal', 'nonlinear', 'nonlinearity', 'quasilinear', 'realign', 'realignment', 'rectilinear', 'rectilinearity', 'sesquilinear', 'sublineage', 'sublinear', 'supralinear', 'trilinear', 'unilinear'],
        'letter': 'l'
    }, {
        'roots': ['line-'],
        'meaning': 'smear, smudge',
        'originLanguage': 'Latin',
        'examples': ['delete', 'deletion', 'indelible', 'liniment'],
        'letter': 'l'
    }, {
        'roots': ['lingu-'],
        'meaning': 'language, tongue',
        'originLanguage': 'Latin',
        'examples': ['bilingual', 'bilinguality', 'bilinguous', 'collingual', 'elinguation', 'interlanguage', 'language', 'ligula', 'ligular', 'ligule', 'lingua franca', 'lingual', 'linguiform', 'linguine', 'multilingual', 'prelingual', 'quadrilingual', 'sublingual', 'trilingual'],
        'letter': 'l'
    }, {
        'roots': ['linqu-', 'lict-'],
        'meaning': 'leave',
        'originLanguage': 'Latin',
        'examples': ['relict', 'relinquish'],
        'letter': 'l'
    }, {
        'roots': ['lip-'],
        'meaning': 'fat',
        'originLanguage': 'Greek',
        'examples': ['lipolysis', 'lipophile', 'lipophilic', 'lipopolysaccharide', 'lipoprotein', 'synaloepha'],
        'letter': 'l'
    }, {
        'roots': ['liqu-'],
        'meaning': 'flow',
        'originLanguage': 'Latin',
        'examples': ['deliquesce', 'liquefy', 'liqueur', 'liquid', 'liquor', 'prolix'],
        'letter': 'l'
    }, {
        'roots': ['lit-'],
        'meaning': 'prayer, supplication',
        'originLanguage': 'Greek',
        'examples': ['litany'],
        'letter': 'l'
    }, {
        'roots': ['liter-'],
        'meaning': 'letter',
        'originLanguage': 'Latin',
        'examples': ['alliteration', 'alliterative', 'biliteral', 'biliterate', 'illiteracy', 'illiterate', 'literacy', 'literal', 'literary', 'literate', 'literati', 'literatim', 'literation', 'literator', 'literature', 'multiliteral', 'nonliteral', 'nonliterary', 'nonliterate', 'obliterate', 'obliteration', 'preliterate', 'quadriliteral', 'transliteracy', 'transliterate', 'transliteration', 'triliteral', 'uniliteral'],
        'letter': 'l'
    }, {
        'roots': ['lith-'],
        'meaning': 'stone',
        'originLanguage': 'Greek',
        'examples': ['aerolithology', 'endolith', 'endolithic', 'epilithic', 'lithagogue', 'lithic', 'lithography', 'lithology', 'lithophile', 'lithophone', 'lithophyte', 'lithosphere', 'lithotomy', 'megalith', 'Mesolithic', 'microlite', 'monolith', 'monolithic', 'Neolithic', 'Paleolithic', 'photolithography', 'phytolith'],
        'letter': 'l'
    }, {
        'roots': ['loc-'],
        'meaning': 'place',
        'originLanguage': 'Latin',
        'examples': ['accouchement', 'allocate', 'bilocation', 'bilocular', 'cislocative', 'collocation', 'couch', 'couchant', 'dislocate', 'dislocation', 'interlocal', 'lieu', 'local', 'locale', 'locality', 'locate', 'location', 'locative', 'locator', 'locomotion', 'loculament', 'locular', 'locule', 'loculose', 'loculus', 'locus', 'milieu', 'multilocal', 'multilocation', 'multilocular', 'nonlocal', 'relocate', 'relocation', 'translocate', 'translocation', 'translocative', 'trilocular', 'unilocular'],
        'letter': 'l'
    }, {
        'roots': ['log-', '-logy'],
        'meaning': 'word, reason, speech, thought',
        'originLanguage': 'Greek',
        'examples': ['analogy', 'anthology', 'apology', 'biology', 'dialogue doxology', 'ecology', 'epilogue', 'etymology', 'eulogy', 'geology', 'ideologue', 'logarithm', 'logic', 'logogram', 'logophile', 'meteorology', 'monologue', 'morphological', 'neologism', 'neurology', 'philology', 'prologue', 'psychology', 'tautology', 'terminology', 'theology', 'toxicology', 'trilogy', 'zoology'],
        'letter': 'l'
    }, {
        'roots': ['long-'],
        'meaning': 'long',
        'originLanguage': 'Latin',
        'examples': ['allonge', 'elongate', 'elongation', 'longa', 'longanimity', 'longe', 'longeron', 'longinquity', 'longitude', 'longitudinal', 'longum', 'lunge', 'lungo', 'oblong', 'prolong', 'prolongation', 'purloin'],
        'letter': 'l'
    }, {
        'roots': ['loqu-', 'locut-'],
        'meaning': 'speak',
        'originLanguage': 'Latin',
        'examples': ['allocution', 'circumlocution', 'colloquial', 'colloquy', 'elocution', 'eloquent', 'eloquence', 'grandiloquent', 'interlocution', 'loquacious', 'loquacity', 'magniloquent', 'obloquy', 'soliloquy'],
        'letter': 'l'
    }, {
        'roots': ['luc-'],
        'meaning': 'bright, light',
        'originLanguage': 'Latin',
        'examples': ['elucidate', 'elucidation', 'elucubrate', 'elucubration', 'lucent', 'lucid', 'lucidity', 'Lucifer (bearer of light)', 'luciferase', 'luciferin', 'luciferous', 'lucifugal', 'lucubrate', 'lucubration', 'luculent', 'noctilucent', 'pellucid', 'pellucidity', 'relucent', 'semipellucid', 'translucency', 'translucent', 'translucid', 'translucidus'],
        'letter': 'l'
    }, {
        'roots': ['lud-', 'lus-'],
        'meaning': 'play',
        'originLanguage': 'Latin',
        'examples': ['allude', 'collude', 'delude', 'elude', 'elusive', 'elusory', 'illude', 'illusion', 'ludicrous', 'lusory', 'prelude'],
        'letter': 'l'
    }, {
        'roots': ['lumin-'],
        'meaning': 'light',
        'originLanguage': 'Latin',
        'examples': ['dislimn', 'enlumine', 'illuminable', 'illuminance', 'illuminant', 'illuminate', 'illuminati', 'illumination', 'illumine', 'intraluminal', 'limn', 'lumen', 'luminaire', 'luminal', 'luminance', 'luminant', 'luminaria', 'luminary', 'lumine', 'luminescence', 'luminescent', 'luminiferous', 'luminosity', 'luminous', 'relumine', 'subluminal', 'subluminous', 'superluminal', 'transluminal'],
        'letter': 'l'
    }, {
        'roots': ['lu-', 'luv-', 'lut-'],
        'meaning': 'wash',
        'originLanguage': 'Latin',
        'examples': ['abluent', 'ablution', 'alluvium', 'colluvium', 'deluge', 'depollute', 'diluent', 'dilute', 'dilution', 'dilutive', 'diluvial', 'diluvian', 'diluvium', 'elute', 'elution', 'eluvial', 'elluviation', 'eluvium', 'illuviation', 'illuvium', 'lutaceous', 'lutite', 'pollution'],
        'letter': 'l'
    }, {
        'roots': ['lun-'],
        'meaning': 'moon',
        'originLanguage': 'Latin',
        'examples': ['circumlunar', 'cislunar', 'demilune', 'luna', 'lunar', 'lunate', 'lunatic', 'lunation', 'lune', 'lunette', 'luniform', 'lunisolar', 'mezzaluna', 'mezzelune', 'plenilunary', 'semilunar', 'sublunar', 'sublunary', 'superlunary', 'translunar'],
        'letter': 'l'
    }, {
        'roots': ['lut-'],
        'meaning': 'yellow, golden',
        'originLanguage': 'Latin',
        'examples': ['corpus luteum', 'luteal', 'lutein', 'luteinizing hormone', 'luteous'],
        'letter': 'l'
    }, {
        'roots': ['ly-', 'lysi-', 'lyt-'],
        'meaning': 'dissolving',
        'originLanguage': 'Greek',
        'examples': ['analyse', 'analysis', 'analytic', 'aparalytic', 'autolysis', 'catalyse', 'catalysis', 'catalyst', 'catalytic', 'cytolysis', 'dialysis', 'electrolysis', 'electrolyte', 'electrolytic', 'Hippolyte', 'hydrolysis', 'hydrolyte', 'hydrolytic', 'lysigeny', 'lysine', 'lysis', 'lysosome', 'lytic', 'meta-analysis', 'palsy', 'paralyse', 'paralysis', 'paralytic', 'plasmolysis', 'proteolysis'],
        'letter': 'l'
    }],
    'm': [{
        'roots': ['macer-'],
        'meaning': 'lean',
        'originLanguage': 'Latin',
        'examples': ['emaciate', 'macerate', 'meager'],
        'letter': 'm'
    }, {
        'roots': ['macr-'],
        'meaning': 'long',
        'originLanguage': 'Greek',
        'examples': ['amphimacer', 'macrobiotic', 'macrocosm', 'macroeconomics', 'macron', 'macrophage'],
        'letter': 'm'
    }, {
        'roots': ['magn-'],
        'meaning': 'great, large',
        'originLanguage': 'Latin',
        'examples': ['magnanimity', 'magnanimous', 'magnate', 'magnificent', 'magnify', 'magnitude', 'magnum'],
        'letter': 'm'
    }, {
        'roots': ['magnet-'],
        'meaning': '',
        'originLanguage': 'Greek',
        'examples': ['bioelectromagnetism', 'biomagnetism', 'diamagnetic', 'diamagnetism', 'electromagnet', 'geomagnetic', 'magnesium', 'magnet', 'magnetic', 'magnetism', 'magnetite', 'magnetize', 'magnetobiology', 'magnetologist', 'magnetometer', 'magnetosome', 'manganese', 'paramagnetic', 'paramagnetism'],
        'letter': 'm'
    }, {
        'roots': ['maj-'],
        'meaning': 'greater',
        'originLanguage': 'Latin',
        'examples': ['majesty', 'major', 'majority', 'majuscule', 'mayor', 'semimajor', 'supermajority'],
        'letter': 'm'
    }, {
        'roots': ['mal-'],
        'meaning': 'bad, wretched',
        'originLanguage': 'Latin',
        'examples': ['dismal', 'grand mal', 'malady', 'malaise', 'malediction', 'malefaction', 'malevolent', 'malfeasance', 'malfunction', 'malice', 'malicious', 'malignancy', 'malnourished', 'malodorous', 'premalignant'],
        'letter': 'm'
    }, {
        'roots': ['mamm-'],
        'meaning': 'breast',
        'originLanguage': 'Latin',
        'examples': ['mammal', 'mammary'],
        'letter': 'm'
    }, {
        'roots': ['man-', 'mant-'],
        'meaning': 'crazy',
        'originLanguage': 'Greek',
        'examples': ['hypermania', 'hypomania', 'kleptomania', 'mania', 'maniac', 'manic', 'megalomania', 'monomania', 'pyromania', 'pyromaniac'],
        'letter': 'm'
    }, {
        'roots': ['man-'],
        'meaning': 'flow',
        'originLanguage': 'Latin',
        'examples': ['emanant', 'emanate', 'emanation', 'immanant', 'immanation'],
        'letter': 'm'
    }, {
        'roots': ['man-'],
        'meaning': 'stay',
        'originLanguage': 'Latin',
        'examples': ['immanence', 'immanent', 'impermanence', 'impermanent', 'maisonette', 'manor', 'manorial', 'manse', 'mansion', 'ménage', 'menagerie', 'menial', 'meiny', 'messuage', 'nonpermanence', 'nonpermanent', 'permanence', 'permanent', 'quasipermanent', 'remain', 'remainder', 'remanence', 'remanent', 'remnant', 'semipermanent'],
        'letter': 'm'
    }, {
        'roots': ['man-', 'manu-'],
        'meaning': 'hand',
        'originLanguage': 'Latin',
        'examples': ['adminicle', 'amanuensis', 'Bimana', 'bimanous', 'bimanual', 'emancipate', 'mainour', 'maintain', 'manacle', 'manage', 'manageable', 'management', 'managerial', 'mandamus', 'mandate', 'manège', 'maneuver', 'manicure', 'manifer', 'manifest', 'manifestation', 'manifesto', 'maniform', 'maniple', 'manipulation', 'manipulative', 'maniraptoran', 'maniraptoriform', 'manner', 'mansuetude', 'manual', 'manuary', 'manubrial', 'manubrium', 'manuduction', 'manufacture', 'manumission', 'manumit', 'manuport', 'manure', 'manus', 'manuscript', 'mortmain', 'Quadrumana', 'quadrumanous'],
        'letter': 'm'
    }, {
        'roots': ['mand-', '-mend-'],
        'meaning': 'order, commit',
        'originLanguage': 'Latin',
        'examples': ['command', 'commandant', 'commandment', 'commend', 'commendable', 'commendam', 'commendation', 'commendatory', 'counterdemand', 'countermand', 'demand', 'demandant', 'encomienda', 'mandamus', 'mandatary', 'mandate', 'mandator', 'mandatory', 'recommend', 'recommendation', 'remand', 'remandment'],
        'letter': 'm'
    }, {
        'roots': ['mar-'],
        'meaning': 'sea',
        'originLanguage': 'Latin',
        'examples': ['maar', 'mariculture', 'marina', 'marinade', 'marinara', 'marinate', 'marination', 'marine', 'mariner', 'maritime', 'submarine', 'ultramarine'],
        'letter': 'm'
    }, {
        'roots': ['mas-'],
        'meaning': 'male, man',
        'originLanguage': 'Latin',
        'examples': ['emasculate', 'emasculation', 'emasculator', 'masculate', 'masculine', 'masculinity'],
        'letter': 'm'
    }, {
        'roots': ['mater-', 'matr-'],
        'meaning': 'mother',
        'originLanguage': 'Latin',
        'examples': ['maternal', 'maternity', 'matrimony', 'matrix', 'matron'],
        'letter': 'm'
    }, {
        'roots': ['maxim-'],
        'meaning': 'greatest',
        'originLanguage': 'Latin',
        'examples': ['maxim', 'maximal', 'maximum', 'submaximal'],
        'letter': 'm'
    }, {
        'roots': ['mechan-'],
        'meaning': 'machine or instrument',
        'originLanguage': 'Greek',
        'examples': ['machine', 'mechane', 'mechanics', 'mechanism', 'mechanize', 'mechanobiology', 'mechanophilia', 'mechanophobia'],
        'letter': 'm'
    }, {
        'roots': ['medi-', '-midi-'],
        'meaning': 'middle',
        'originLanguage': 'Latin',
        'examples': ['dimidiation', 'immediate', 'intermediary', 'mean', 'media', 'median', 'mediate', 'mediation', 'medieval', 'mediocre', 'Mediterranean', 'medium', 'moiety', 'multimedia', 'postmeridian', 'submediant'],
        'letter': 'm'
    }, {
        'roots': ['meg-', 'megal-'],
        'meaning': 'great, large',
        'originLanguage': 'Greek',
        'examples': ['acromegaly', 'Megacles', 'megacycle', 'megalomania', 'megalopolis', 'megaphone'],
        'letter': 'm'
    }, {
        'roots': ['mei-'],
        'meaning': 'less',
        'originLanguage': 'Greek',
        'examples': ['ameiosis', 'ameiotic', 'meiobenthos', 'meiosis', 'meiotic'],
        'letter': 'm'
    }, {
        'roots': ['melan-'],
        'meaning': 'black, dark',
        'originLanguage': 'Greek',
        'examples': ['amelanism', 'aphaeomelanism', 'eumelanin', 'hypermelanic', 'melancholic', 'melancholy', 'Melanesia', 'melanin', 'melanism', 'melanoblastoma', 'melanocyte', 'melanoma', 'melanophobia', 'melanophore', 'melanosis', 'melatonin', 'neuromelanin', 'pheomelanin'],
        'letter': 'm'
    }, {
        'roots': ['melior-'],
        'meaning': 'better',
        'originLanguage': 'Latin',
        'examples': ['ameliorate', 'amelioration', 'meliorism'],
        'letter': 'm'
    }, {
        'roots': ['meliss-'],
        'meaning': 'bee',
        'originLanguage': 'Greek',
        'examples': ['melissophobia'],
        'letter': 'm'
    }, {
        'roots': ['mell-'],
        'meaning': 'honey',
        'originLanguage': 'Latin',
        'examples': ['melliferous', 'mellific', 'mellifluence', 'mellifluent', 'mellifluous', 'melliloquent', 'mellivorous'],
        'letter': 'm'
    }, {
        'roots': ['memor-'],
        'meaning': 'remember',
        'originLanguage': 'Latin',
        'examples': ['commemorate', 'immemorial', 'memoir', 'memorabilia', 'memorable', 'memorandum', 'memorial', 'memory', 'remembrance'],
        'letter': 'm'
    }, {
        'roots': ['men-'],
        'meaning': 'month',
        'originLanguage': 'Greek',
        'examples': ['menopause', 'menorrhea'],
        'letter': 'm'
    }, {
        'roots': ['mening-'],
        'meaning': 'membrane',
        'originLanguage': 'Greek',
        'examples': ['leptomeninges', 'meninges', 'meningioma', 'meningitis', 'meninx'],
        'letter': 'm'
    }, {
        'roots': ['mend-'],
        'meaning': 'defect, fault',
        'originLanguage': 'Latin',
        'examples': ['amend', 'amendment', 'emend', 'mendacious', 'mendacity'],
        'letter': 'm'
    }, {
        'roots': ['menstru-'],
        'meaning': 'monthly',
        'originLanguage': 'Latin',
        'examples': ['menstrual', 'menstruation'],
        'letter': 'm'
    }, {
        'roots': ['mensur-'],
        'meaning': 'measure',
        'originLanguage': 'Latin',
        'examples': ['commensurable', 'commensurate', 'dimension', 'immense', 'incommensurable', 'incommensurate', 'measure'],
        'letter': 'm'
    }, {
        'roots': ['ment-'],
        'meaning': 'mind',
        'originLanguage': 'Latin',
        'examples': ['comment', 'dement', 'dementia', 'memento', 'mental', 'mentality', 'mention', 'reminisce', 'reminiscence'],
        'letter': 'm'
    }, {
        'roots': ['mer-'],
        'meaning': 'part',
        'originLanguage': 'Greek',
        'examples': ['antimere', 'antimeria', 'biopolymer', 'decamer', 'decamerous', 'dimer', 'dimeric', 'dimerism', 'dimerous', 'enantiomer', 'enneamer', 'heptamer', 'heterodimer', 'heterotetramer', 'hexamer', 'homodimer', 'homotetramer', 'isomer', 'isomeric', 'isomerism', 'mereology', 'merisis', 'merism', 'meristem', 'meristematic', 'meristic', 'meromorphic', 'metamere', 'metamerism', 'Moirai', 'monomer', 'monomeric', 'octamer', 'oligomer', 'oligomeric', 'pentamer', 'pentamerous', 'photopolymer', 'phytomer', 'polymer', 'tautomerism', 'telomer', 'telomere', 'tetramer', 'tetrameric', 'trimer', 'trimerize'],
        'letter': 'm'
    }, {
        'roots': ['merc-'],
        'meaning': 'reward, wages, hire',
        'originLanguage': 'Latin',
        'examples': ['amercement', 'commerce', 'commercial', 'market', 'mercantile', 'mercenary', 'mercery', 'merchandise', 'merchant', 'mercy', 'noncommercial'],
        'letter': 'm'
    }, {
        'roots': ['merge-', 'mers-'],
        'meaning': 'dip, plunge',
        'originLanguage': 'Latin',
        'examples': ['demerge', 'demersal', 'demerse', 'demersion', 'emerge', 'emergence', 'emergency', 'emergent', 'emersion', 'immerge', 'immergence', 'immerse', 'immersible', 'immersion', 'immersive', 'merge', 'reemerge', 'reemergence', 'reimmerse', 'submerge', 'submergence', 'submerse', 'submersible', 'submersion'],
        'letter': 'm'
    }, {
        'roots': ['mes-'],
        'meaning': 'middle',
        'originLanguage': 'Greek',
        'examples': ['Mesolithic', 'mesophile', 'mesophilic', 'mesoscopic', 'mesosphere', 'mesozoic'],
        'letter': 'm'
    }, {
        'roots': ['met-', 'meta-'],
        'meaning': 'above, among, beyond',
        'originLanguage': 'Greek',
        'examples': ['metabolism', 'metalogic', 'metamorphic', 'metamorphosis', 'metaphase', 'metaphor', 'metaphysics', 'metastatic', 'meteor', 'method'],
        'letter': 'm'
    }, {
        'roots': ['metall-'],
        'meaning': 'mine',
        'originLanguage': 'Greek',
        'examples': ['dimetallic', 'electrometallurgy', 'hydrometallurgy', 'metallic', 'metalloid', 'metallophobia', 'metallophone', 'metallurgist', 'metallurgy', 'organometallic', 'polymetal', 'polymetallic', 'pyrometallurgy', 'tetrametallic', 'trimetallic'],
        'letter': 'm'
    }, {
        'roots': ['meter-', 'metr-'],
        'meaning': 'measure',
        'originLanguage': 'Greek',
        'examples': ['anemometer', 'anemometric', 'antisymmetric', 'antisymmetry', 'asymmetric', 'asymmetry', 'axonometric', 'barometer', 'barometric', 'bathometer', 'diameter', 'diametric', 'dysmetria', 'graphometer', 'hexameter', 'hygrometer', 'hygrometry', 'isodiametric', 'isometric', 'isoperimetric', 'meter', 'metre', 'metric', 'metrology', 'metronome', 'monosymmetric', 'parameter', 'parameterize', 'parametric', 'parametrize', 'pentameter', 'perimeter', 'polymeter', 'symmetric', 'symmetry', 'telemeter', 'telemetric', 'telemetry', 'tetrameter', 'thermometer', 'trimeter', 'trimetric'],
        'letter': 'm'
    }, {
        'roots': ['metr-'],
        'meaning': 'mother',
        'originLanguage': 'Greek',
        'examples': ['haplometrosis', 'metrocyte', 'metropolis', 'pleometrosis'],
        'letter': 'm'
    }, {
        'roots': ['mic-'],
        'meaning': 'grain',
        'originLanguage': 'Latin',
        'examples': ['mica', 'micelle'],
        'letter': 'm'
    }, {
        'roots': ['micr-'],
        'meaning': 'small',
        'originLanguage': 'Greek',
        'examples': ['microbe', 'microcosm', 'microeconomics', 'micrometer', 'microphone', 'microscope', 'microscopic'],
        'letter': 'm'
    }, {
        'roots': ['migr-'],
        'meaning': 'wander',
        'originLanguage': 'Latin',
        'examples': ['countermigration', 'emigrant', 'emigrate', 'emigration', 'émigré', 'immigrant', 'immigrate', 'immigration', 'migrant', 'migrate', 'migration', 'migrational', 'migratory', 'nonmigratory', 'remigrant', 'remigrate', 'remigration', 'transmigrant', 'transmigrate', 'transmigration', 'transmigratory'],
        'letter': 'm'
    }, {
        'roots': ['milit-'],
        'meaning': 'soldier',
        'originLanguage': 'Latin',
        'examples': ['militant', 'military', 'militia'],
        'letter': 'm'
    }, {
        'roots': ['mill-'],
        'meaning': 'thousand',
        'originLanguage': 'Latin',
        'examples': ['mile', 'millennium', 'million'],
        'letter': 'm'
    }, {
        'roots': ['millen-'],
        'meaning': 'thousand each',
        'originLanguage': 'Latin',
        'examples': ['millenarian', 'millenary'],
        'letter': 'm'
    }, {
        'roots': ['mim-'],
        'meaning': 'repeat',
        'originLanguage': 'Greek',
        'examples': ['mime', 'mimeograph', 'mimesis', 'mimetic', 'mimic', 'necromimesis', 'pantomime', 'phenomime', 'psychomime', 'psychomimetic'],
        'letter': 'm'
    }, {
        'roots': ['min-'],
        'meaning': 'jut',
        'originLanguage': 'Latin',
        'examples': ['eminence', 'eminent', 'imminence', 'imminent', 'preeminence', 'preeminent', 'prominence', 'prominent', 'promontory', 'supereminence', 'supereminent'],
        'letter': 'm'
    }, {
        'roots': ['min-'],
        'meaning': 'less, smaller',
        'originLanguage': 'Latin',
        'examples': ['administer', 'administration', 'administrative', 'administrator', 'administratrix', 'maladminister', 'maladministration', 'minestrone', 'minister', 'ministerial', 'ministerialis', 'ministerium', 'ministrant', 'ministrate', 'ministration', 'ministrative', 'ministry', 'minor', 'minority', 'minstrel', 'minstrelsy', 'minus', 'minuscule', 'quasiminuscule', 'semiminor'],
        'letter': 'm'
    }, {
        'roots': ['mina-'],
        'meaning': 'lead',
        'originLanguage': 'Latin',
        'examples': ['amenable', 'demeanor', 'menace', 'promenade'],
        'letter': 'm'
    }, {
        'roots': ['minth-'],
        'meaning': 'mint',
        'originLanguage': 'Greek',
        'examples': ['Acanthomintha', 'Mentha', 'menthol', 'mint', 'Minthostachys'],
        'letter': 'm'
    }, {
        'roots': ['mir-'],
        'meaning': 'wonder, amazement',
        'originLanguage': 'Latin',
        'examples': ['admirability', 'admirable', 'admiration', 'admirative', 'admire', 'marvel', 'marvelous', 'miracle', 'miraculous', 'mirage', 'Miranda', 'mirative', 'mirativity', 'mirror'],
        'letter': 'm'
    }, {
        'roots': ['mis-'],
        'meaning': 'hate',
        'originLanguage': 'Greek',
        'examples': ['misandrist', 'misandry', 'misanthrope', 'misanthropy', 'misocainea', 'misogamist', 'misogamy', 'misogynist', 'misogyny', 'misoneism', 'misopaedia', 'misophonia', 'misotheism'],
        'letter': 'm'
    }, {
        'roots': ['misc-', 'mixt-'],
        'meaning': 'mix',
        'originLanguage': 'Latin',
        'examples': ['admix', 'admixtion', 'admixture', 'commix', 'commixture', 'immiscibility', 'immiscible', 'immix', 'immixture', 'intermix', 'intermixture', 'maslin', 'meddle', 'mestizo', 'Métis', 'miscellanea', 'miscellaneous', 'miscellany', 'miscibility', 'miscible', 'mix', 'mixture', 'permiscible', 'permix', 'permixtion', 'postmix', 'premix', 'promiscuity', 'promiscuous', 'remix'],
        'letter': 'm'
    }, {
        'roots': ['miser-'],
        'meaning': 'unhappy, wretched',
        'originLanguage': 'Latin',
        'examples': ['commiserate', 'commiseration', 'immiserate', 'immiseration', 'miser', 'miserable', 'misericord', 'misery'],
        'letter': 'm'
    }, {
        'roots': ['mit-', 'miss-'],
        'meaning': 'send',
        'originLanguage': 'Latin',
        'examples': ['admissibility', 'admissible', 'admission', 'admissive', 'admit', 'admittatur', 'admittee', 'commissar', 'commissariat', 'commissary', 'commission', 'commissive', 'commissural', 'commissure', 'commit', 'commitment', 'committal', 'committee', 'compromis', 'compromise', 'compromissary', 'decommission', 'decommit', 'decommitment', 'demise', 'demiss', 'demit', 'dimissory', 'dimit', 'dismiss', 'dismissal', 'dismissive', 'emissary', 'emission', 'emissitious', 'emissive', 'emissivity', 'emit', 'emittent', 'entremet', 'fideicommissary', 'fideicommissum', 'impermissible', 'inadmissibility', 'inadmissible', 'intermission', 'intermittent', 'intromissible', 'intromission', 'intromissive', 'intromit', 'intromittent', 'manumission', 'manumit', 'mess', 'message', 'messenger', 'missile', 'mission', 'missionary', 'missive', 'mittimus', 'noncommittal', 'omissible', 'omission', 'omissive', 'omit', 'permissible', 'permission', 'permissive', 'permissory', 'permit', 'permittee', 'premise', 'premiss', 'premit', 'pretermission', 'pretermit', 'promise', 'promisee', 'promissive', 'promissory', 'readmission', 'readmit', 'recommit', 'remise', 'remiss', 'remissible', 'remission', 'remissive', 'remissory', 'remit', 'remittal', 'remittance', 'remittee', 'remittence', 'remittent', 'remittitur resubmit', 'retransmission', 'retransmit', 'subcommittee', 'submission', 'submissive', 'submit', 'surmise', 'transmissibility', 'transmissible', 'transmission', 'transmissive', 'transmit', 'transmittal'],
        'letter': 'm'
    }, {
        'roots': ['mit-'],
        'meaning': 'thread',
        'originLanguage': 'Greek',
        'examples': ['mitochondrion', 'mitosis', 'mitospore'],
        'letter': 'm'
    }, {
        'roots': ['mn-'],
        'meaning': '',
        'originLanguage': 'Greek',
        'examples': ['mina', 'mna'],
        'letter': 'm'
    }, {
        'roots': ['mne-'],
        'meaning': 'memory',
        'originLanguage': 'Greek',
        'examples': ['amnesia', 'amnesty', 'anamnesis', 'anamnestic', 'dysmnesia', 'Mneme', 'mneme', 'mnemonic'],
        'letter': 'm'
    }, {
        'roots': ['mod-'],
        'meaning': 'measure, change',
        'originLanguage': 'Latin',
        'examples': ['accommodate', 'accommodation', 'accommodative', 'accommodator', 'bimodal', 'bimodality', 'bimodular', 'bimodule', 'commode', 'commodification', 'commodious', 'commodity', 'decommodification', 'demodulate', 'demodulation', 'demodulator', 'immodest', 'immodesty', 'intermodal', 'intermodulation', 'modal', 'modality', 'mode', 'model', 'moderate', 'moderation', 'moderato', 'moderator', 'modern', 'modernity', 'modest', 'modesty', 'modicum', 'modification', 'modify', 'modiolus', 'modular', 'modularity', 'modulate', 'modulation', 'modulator', 'module', 'modulo', 'modulus', 'multimodal', 'multimodality', 'postmodern', 'postmodernity', 'Quasimodo', 'remodel', 'remodulate', 'supermodel', 'trimodal', 'trimodality', 'ultramodern', 'ultramodernity', 'unimodal', 'unimodality', 'unimodular', 'unimodularity'],
        'letter': 'm'
    }, {
        'roots': ['mol-'],
        'meaning': 'grind',
        'originLanguage': 'Latin',
        'examples': ['molar'],
        'letter': 'm'
    }, {
        'roots': ['moll-'],
        'meaning': 'soft',
        'originLanguage': 'Latin',
        'examples': ['emollience', 'emollient', 'moil', 'mollescence', 'mollescent', 'mollient', 'mollification', 'mollify', 'mollitude', 'mollusc', 'molluscicide', 'molluscivore', 'mollusk'],
        'letter': 'm'
    }, {
        'roots': ['mon-'],
        'meaning': 'alone, only',
        'originLanguage': 'Greek',
        'examples': ['monachism', 'monad', 'monadic', 'monarchy', 'monastery', 'monastic', 'monasticism', 'monatomic', 'monism', 'monist', 'monk', 'monoid', 'monolith', 'monometer', 'monopod', 'monopoly', 'monopsony', 'monotone'],
        'letter': 'm'
    }, {
        'roots': ['mon-'],
        'meaning': 'warn',
        'originLanguage': 'Latin',
        'examples': ['admonish', 'admonishment', 'admonition', 'admonitor', 'admonitory', 'monition', 'monitor', 'monitory', 'monument', 'monumental', 'premonition', 'premonitory', 'resummon', 'summon'],
        'letter': 'm'
    }, {
        'roots': ['monil-'],
        'meaning': 'string of beads',
        'originLanguage': 'Latin',
        'examples': ['monilifer', 'moniliform', 'Moniliformida'],
        'letter': 'm'
    }, {
        'roots': ['monstra-'],
        'meaning': 'show',
        'originLanguage': 'Latin',
        'examples': ['counterdemonstration', 'counterdemonstrator', 'demonstrable', 'demonstrant', 'demonstrate', 'demonstration', 'demonstrative', 'demonstrator', 'demonstratory', 'indemonstrable', 'monster', 'monstrance', 'monstration', 'monstrosity', 'monstrous', 'muster', 'premonstrant', 'premonstrate', 'Premonstratensian', 'premonstration', 'premonstrator', 'remonstrance', 'remonstrant', 'remonstrate', 'remonstration', 'remonstrative'],
        'letter': 'm'
    }, {
        'roots': ['mont-'],
        'meaning': 'mountain',
        'originLanguage': 'Latin',
        'examples': ['amount', 'Belmont', 'cismontane', 'dismount', 'insurmountable', 'intermontane', 'montage', 'montan', 'Montana', 'montane', 'montant', 'monticello', 'monticule', 'montiform', 'montigenous', 'mount', 'mountaineer', 'mountainous', 'nonremontant', 'paramount', 'piedmont', 'remontancy', 'remontant', 'remontoire', 'remount', 'submontane', 'surmount', 'surmountable', 'tantamount', 'tramontana', 'tramontane', 'transmontane', 'ultramontane', 'Vermont'],
        'letter': 'm'
    }, {
        'roots': ['mor-'],
        'meaning': 'foolish, dull',
        'originLanguage': 'Greek',
        'examples': ['moron', 'moronic', 'oxymoron', 'oxymoronic', 'sophomore', 'sophomoric'],
        'letter': 'm'
    }, {
        'roots': ['mor-'],
        'meaning': 'pause, delay',
        'originLanguage': 'Latin',
        'examples': ['demur', 'demure', 'demurrable', 'demurrage', 'demurral', 'demurrer', 'mora', 'moratorium', 'remora', 'remorate'],
        'letter': 'm'
    }, {
        'roots': ['mor-'],
        'meaning': 'custom, disposition',
        'originLanguage': 'Latin',
        'examples': ['immoral', 'immorality', 'moral', 'morale', 'morality', 'mores', 'morigerous', 'morose', 'morosity'],
        'letter': 'm'
    }, {
        'roots': ['mord-'],
        'meaning': 'bite',
        'originLanguage': 'Latin',
        'examples': ['mordacious', 'mordacity', 'mordancy', 'mordant', 'mordent', 'mordente', 'mordicancy', 'mordicant', 'mordication', 'mordicative', 'morsel', 'morsitation', 'premorse', 'remorse'],
        'letter': 'm'
    }, {
        'roots': ['morph-'],
        'meaning': 'form, shape',
        'originLanguage': 'Greek',
        'examples': ['allomorph', 'amorphous', 'anamorph', 'anamorphic', 'anamorphism', 'anamorphosis', 'anthropomorphism', 'apomorphy', 'autapomorphy', 'automorphism', 'catamorphism', 'dimorphic', 'dimorphism', 'dysmorphic', 'dysmorphophobia', 'ectomorph', 'ectomorphic', 'enantiomorph', 'enantiomorphic', 'endomorph', 'endomorphic', 'epimorphism', 'geomorphology', 'hemimorphic', 'holomorph', 'holomorphic', 'holomorphism', 'homeomorphic', 'homeomorphism', 'homomorphic', 'homomorphism', 'hylomorphism', 'hypermorphosis', 'isomorphic', 'isomorphism', 'mesomorph', 'mesomorphic', 'metamorphic', 'metamorphism', 'metamorphosis', 'monomorphic', 'monomorphism', 'morpheme', 'Morpheus', 'morphine', 'morphology', 'morphosyntactic', 'morphosyntax', 'paramorph', 'peramorphism', 'peramorphosis', 'perimorph', 'plesiomorphy', 'polymorphic', 'polymorphism', 'pseudomorph', 'synapomorphy', 'teleomorph', 'teleomorphic', 'theriomorphic', 'trimorphic', 'trimorphism', 'zoomorph', 'zoomorphism'],
        'letter': 'm'
    }, {
        'roots': ['mort-'],
        'meaning': 'death',
        'originLanguage': 'Latin',
        'examples': ['antemortem', 'immortal', 'immortality', 'mortal', 'mortality', 'mortician', 'mortiferous', 'mortification', 'mortuary'],
        'letter': 'm'
    }, {
        'roots': ['mov-', 'mot-', 'mut-'],
        'meaning': 'move, motion',
        'originLanguage': 'Latin',
        'examples': ['admove', 'amotion', 'amove', 'bimotor', 'cocommutator', 'commotion', 'commove', 'commutable', 'commutation', 'commutative', 'commutativity', 'commutator', 'commute', 'countermotion', 'countermove', 'countermovement', 'demote', 'demotion', 'emotion', 'emotional', 'emotive', 'emotivity', 'emove', 'equimomental', 'immobile', 'immutable', 'immutation', 'immute', 'incommutable', 'locomotion', 'locomotive', 'mobile', 'mobility', 'molt', 'moment', 'momental', 'momentaneous', 'momentary', 'momentous', 'momentum', 'motation', 'motif', 'motile', 'motility', 'motion', 'motional', 'motivate', 'motivation', 'motivational', 'motivator', 'motive', 'motor', 'moult', 'movant', 'move', 'movement', 'movent', 'mutability', 'mutable', 'mutate', 'mutation', 'mutineer', 'mutinous', 'mutiny', 'mutual', 'mutuality', 'noncommutative', 'noncommutativity', 'nonmotile', 'nonmotility', 'nonmutual', 'pari-mutuel', 'permutable', 'permutate', 'permutation', 'permutational', 'permute', 'promote', 'promotion', 'promotional', 'promotive', 'promotor', 'promove', 'remote', 'remotion', 'removal', 'remove', 'subpermutation', 'transmove', 'transmutable', 'transmutate', 'transmutation', 'transmute', 'transmutual', 'trimotor'],
        'letter': 'm'
    }, {
        'roots': ['mulg-', 'muls-'],
        'meaning': 'milk',
        'originLanguage': 'Latin',
        'examples': ['emulsion'],
        'letter': 'm'
    }, {
        'roots': ['multi-'],
        'meaning': 'many, much',
        'originLanguage': 'Latin',
        'examples': ['multilingual', 'multiple', 'multiplex', 'multiplication', 'multiplicity', 'multiply', 'multitude', 'multitudinous'],
        'letter': 'm'
    }, {
        'roots': ['mund-'],
        'meaning': 'world',
        'originLanguage': 'Latin',
        'examples': ['anima mundi', 'antemundane', 'demimondaine', 'demimonde', 'extramundane', 'intramundane', 'map', 'mondain', 'mondaine', 'mondial', 'mondo', 'mundane', 'mundanity', 'ultramundane'],
        'letter': 'm'
    }, {
        'roots': ['mur-'],
        'meaning': 'wall',
        'originLanguage': 'Latin',
        'examples': ['antemural', 'immuration', 'immure', 'immurement', 'intramural', 'murage', 'mural'],
        'letter': 'm'
    }, {
        'roots': ['mus-'],
        'meaning': 'mouse',
        'originLanguage': 'Greek',
        'examples': ['musophobia'],
        'letter': 'm'
    }, {
        'roots': ['mus-'],
        'meaning': 'thief',
        'originLanguage': 'Latin',
        'examples': ['mouse'],
        'letter': 'm'
    }, {
        'roots': ['musc-'],
        'meaning': 'fly',
        'originLanguage': 'Latin',
        'examples': ['Musca', 'muscarine', 'Muscicapa', 'Muscicapidae', 'Muscidae', 'musciform', 'mosquito'],
        'letter': 'm'
    }, {
        'roots': ['mut-'],
        'meaning': 'change',
        'originLanguage': 'Latin',
        'examples': ['immutable', 'mutation', 'permutation', 'transmute'],
        'letter': 'm'
    }, {
        'roots': ['my-'],
        'meaning': 'mouse',
        'originLanguage': 'Greek',
        'examples': ['amyotrophic', 'electromyogram', 'electromyograph', 'electromyography', 'endomysium', 'epimysium', 'murine', 'musophobia', 'myoelectric', 'myomancy', 'myomorphous', 'myomorphy', 'myopathy', 'myositis', 'myotome', 'Nectomys', 'Oryzomys', 'perimysium', 'Sigmodontomys'],
        'letter': 'm'
    }, {
        'roots': ['my-'],
        'meaning': 'shut (the eyes)',
        'originLanguage': 'Greek',
        'examples': ['miosis', 'myopia', 'myopic', 'myosis', 'mystery'],
        'letter': 'm'
    }, {
        'roots': ['mycet-'],
        'meaning': 'fungus',
        'originLanguage': 'Greek',
        'examples': ['ascomycete', 'basidiomycete', 'mycology', 'Mycoplasma', 'zygomycete', 'zygomycosis'],
        'letter': 'm'
    }, {
        'roots': ['mydr-'],
        'meaning': 'dilate',
        'originLanguage': 'Greek',
        'examples': ['mydriasis'],
        'letter': 'm'
    }, {
        'roots': ['myel-'],
        'meaning': 'marrow',
        'originLanguage': 'Greek',
        'examples': ['amyelia', 'myeloblast', 'myelocyte', 'myelogenous', 'myeloid', 'myelopoiesis', 'poliomyelitis'],
        'letter': 'm'
    }, {
        'roots': ['myl-'],
        'meaning': 'mill',
        'originLanguage': 'Greek',
        'examples': ['amyloid', 'amyloidosis', 'amylolysis', 'amylopectin', 'amylophagia', 'amyloplast', 'amylose', 'amylum'],
        'letter': 'm'
    }, {
        'roots': ['myri-'],
        'meaning': 'countless, ten thousand',
        'originLanguage': 'Greek',
        'examples': ['myriad', 'myriagon', 'myriagram', 'myriapod', 'myriapodology'],
        'letter': 'm'
    }, {
        'roots': ['myrmec-'],
        'meaning': 'ant',
        'originLanguage': 'Greek',
        'examples': ['myrmecochory', 'myrmecoid', 'myrmecology', 'myrmecophobia', 'Myrmidons', 'myrmomancy'],
        'letter': 'm'
    }, {
        'roots': ['mys-'],
        'meaning': 'uncleanness',
        'originLanguage': 'Greek',
        'examples': ['mysophilia', 'mysophobia'],
        'letter': 'm'
    }, {
        'roots': ['myth-'],
        'meaning': 'story',
        'originLanguage': 'Greek',
        'examples': ['mythic', 'mythology', 'mythomania', 'mythopoeia', 'mythos'],
        'letter': 'm'
    }, {
        'roots': ['myx-'],
        'meaning': 'slime',
        'originLanguage': 'Greek',
        'examples': ['match', 'myxedema', 'myxoedema', 'Myxini', 'myxogastrid'],
        'letter': 'm'
    }, {'roots': ['myz-'], 'meaning': 'suck', 'originLanguage': 'Greek', 'examples': ['Myzopoda'], 'letter': 'm'}],
    'n': [{
        'roots': ['nap-'],
        'meaning': 'turnip',
        'originLanguage': 'Latin',
        'examples': ['napiform', 'neep'],
        'letter': 'n'
    }, {
        'roots': ['nar-'],
        'meaning': 'nostril',
        'originLanguage': 'Latin',
        'examples': ['internarial', 'nares', 'narial', 'naris', 'prenarial'],
        'letter': 'n'
    }, {
        'roots': ['narc-'],
        'meaning': 'numb',
        'originLanguage': 'Greek',
        'examples': ['narcolepsy', 'narcosis', 'narcotic'],
        'letter': 'n'
    }, {
        'roots': ['narr-'],
        'meaning': 'tell',
        'originLanguage': 'Latin',
        'examples': ['counternarrative', 'inenarrable', 'narration', 'narrative', 'narrator'],
        'letter': 'n'
    }, {
        'roots': ['nas-'],
        'meaning': 'nose',
        'originLanguage': 'Latin',
        'examples': ['intranasal', 'nasal', 'nasalance', 'nasalis', 'nasality', 'nasolabial', 'nonnasal'],
        'letter': 'n'
    }, {
        'roots': ['nasc-', 'nat-'],
        'meaning': 'born',
        'originLanguage': 'Latin',
        'examples': ['adnascent', 'adnate', 'adnation', 'agnate', 'agnatic', 'agnation', 'binational', 'cognate', 'cognatic', 'cognation', 'connascence', 'connascent', 'connate', 'connation', 'connatural', 'denature', 'enascent', 'enate', 'enatic', 'enation', 'impregnate', 'innate', 'international', 'multinational', 'nada', 'naïf', 'naissant', 'naïve', 'nascency', 'nascent', 'natal', 'natality', 'nation', 'national', 'nationality', 'native', 'nativity', 'natural', 'naturality', 'nature', 'née', 'nonnative', 'postnatal', 'pregnancy', 'pregnant', 'prenatal', 'preternatural', 'renaissance', 'renaissant', 'renascence', 'renascent', 'renature', 'subnational', 'supernatural', 'supranational', 'transnational', 'transnationality'],
        'letter': 'n'
    }, {
        'roots': ['naut-'],
        'meaning': 'ship',
        'originLanguage': 'Greek',
        'examples': ['aeronautic', 'Argonaut', 'astronaut', 'cosmonaut', 'nausea', 'nautical', 'nautilus'],
        'letter': 'n'
    }, {
        'roots': ['nav-'],
        'meaning': 'ship',
        'originLanguage': 'Latin',
        'examples': ['antenave', 'naval', 'nave', 'navicular', 'navigable', 'navigate', 'navy', 'nonnavigable'],
        'letter': 'n'
    }, {
        'roots': ['ne-'],
        'meaning': 'spin, thread',
        'originLanguage': 'Greek',
        'examples': ['axoneme', 'diplonema', 'leptonema', 'nematocyst', 'nematocyte', 'nematode', 'nematology', 'pachynema', 'synnema', 'treponema', 'zygonema'],
        'letter': 'n'
    }, {
        'roots': ['ne-', 'neo-'],
        'meaning': 'new',
        'originLanguage': 'Greek',
        'examples': ['Neolithic', 'neologism', 'neon', 'neonate', 'neophyte'],
        'letter': 'n'
    }, {
        'roots': ['neb-', 'nub-'],
        'meaning': 'cloud',
        'originLanguage': 'Latin',
        'examples': ['nebula', 'nebular', 'nebulosity', 'nebulous', 'nuance', 'nubilous', 'obnubilate'],
        'letter': 'n'
    }, {
        'roots': ['necr-'],
        'meaning': 'dead',
        'originLanguage': 'Greek',
        'examples': ['necromancy', 'Necronomicon', 'necrophilia', 'necrophobia', 'necropolis', 'necropsy', 'necrosis', 'necrospermia', 'necrotic', 'necrotize', 'necrotomy'],
        'letter': 'n'
    }, {
        'roots': ['nect-'],
        'meaning': 'swimming',
        'originLanguage': 'Greek',
        'examples': ['nectopod', 'nekton'],
        'letter': 'n'
    }, {
        'roots': ['nect-', 'nex-'],
        'meaning': 'join, tie',
        'originLanguage': 'Latin',
        'examples': ['adnexum', 'annectent', 'annex', 'annexation', 'annexion', 'connect', 'connexion', 'deannexation', 'disconnect', 'interconnect', 'nexus', 'reconnect'],
        'letter': 'n'
    }, {
        'roots': ['neg-'],
        'meaning': 'say no',
        'originLanguage': 'Latin',
        'examples': ['negative', 'renegade', 'renege'],
        'letter': 'n'
    }, {
        'roots': ['nem-', 'nom-'],
        'meaning': 'arrangement, law',
        'originLanguage': 'Greek',
        'examples': ['anomie', 'anomy', 'antinome', 'antinomic', 'antinomy', 'archnemesis', 'autonomy', 'isonomy', 'metronomic', 'nemesis', 'nomad', 'nomadic', 'nomadism', 'nomadize', 'nomarch', 'nomarchy', 'nome', 'nomology', 'nomothetic', 'Numidia', 'numismatics'],
        'letter': 'n'
    }, {
        'roots': ['nemat-'],
        'meaning': 'hair',
        'originLanguage': 'Greek',
        'examples': ['nematocyst', 'nematocyte', 'nematode', 'nematology'],
        'letter': 'n'
    }, {
        'roots': ['nemor-'],
        'meaning': 'grove, woods',
        'originLanguage': 'Latin',
        'examples': ['nemoral', 'nemorous'],
        'letter': 'n'
    }, {
        'roots': ['nephr-'],
        'meaning': 'kidney',
        'originLanguage': 'Greek',
        'examples': ['mesonephric', 'mesonephros', 'metanephridium', 'metanephros', 'nephridiopore', 'nephridium', 'nephrite', 'nephritis', 'nephrogenesis', 'nephrolith', 'nephrolithiasis', 'nephrologist', 'nephrology', 'nephron', 'nephroptosis', 'nephrostome', 'pronephros', 'protonephridium'],
        'letter': 'n'
    }, {
        'roots': ['nerv-'],
        'meaning': 'sinew, nerve',
        'originLanguage': 'Latin',
        'examples': ['enervate', 'enervation', 'enervative', 'innervate', 'innervation', 'nerval', 'nervate', 'nerve', 'nervose', 'nervosity', 'nervous', 'reinnervation', 'trinervate'],
        'letter': 'n'
    }, {
        'roots': ['nes-'],
        'meaning': 'island',
        'originLanguage': 'Greek',
        'examples': ['Chersonesus', 'Indonesia', 'Micronesia', 'Peloponnese', 'Polynesia'],
        'letter': 'n'
    }, {
        'roots': ['neur-'],
        'meaning': 'nerve, sinew',
        'originLanguage': 'Greek',
        'examples': ['aponeurosis', 'endoneurium', 'epineurium', 'neural', 'neurapraxia', 'neurasthenia', 'neuritis', 'neuroblast', 'neuroblastoma', 'neurocranium', 'neurocyte', 'neuroendocrine', 'neuroendocrinology', 'neurologic', 'neurologist', 'neurology', 'neuromorphology', 'neuron', 'neurone', 'neuropathic', 'neuropathology', 'neuropathy', 'neuroplastic', 'neurosis', 'neurosurgeon', 'neurosurgery', 'neurotic', 'neuroticism', 'perineurium', 'polyneuropathy'],
        'letter': 'n'
    }, {
        'roots': ['nict-'],
        'meaning': 'beckon, wink',
        'originLanguage': 'Latin',
        'examples': ['nictate', 'nictation', 'nictitate', 'nictitation'],
        'letter': 'n'
    }, {
        'roots': ['nigr-'],
        'meaning': 'black',
        'originLanguage': 'Latin',
        'examples': ['denigrate', 'denigration', 'denigrative', 'denigrator', 'negrita', 'nigrities', 'negrito', 'negritude', 'nigrescence', 'nigrescent', 'nigrine', 'nigritude'],
        'letter': 'n'
    }, {
        'roots': ['nihil-'],
        'meaning': 'nothing',
        'originLanguage': 'Latin',
        'examples': ['annihilate', 'annihilation', 'annihilator', 'nihil', 'nil'],
        'letter': 'n'
    }, {
        'roots': ['niv-'],
        'meaning': 'snow',
        'originLanguage': 'Latin',
        'examples': ['Nevada', 'névé', 'nival', 'nivation', 'niveus', 'subnival', 'subnivean'],
        'letter': 'n'
    }, {
        'roots': ['noc-'],
        'meaning': 'hurt, harm',
        'originLanguage': 'Latin',
        'examples': ['innocence', 'innocent', 'innocuity', 'innocuous', 'innoxious', 'nocebo', 'nocent', 'nociception', 'nociceptive', 'nocifensor', 'nocument', 'nocuous', 'noxious', 'nuisance', 'obnoxious'],
        'letter': 'n'
    }, {
        'roots': ['noct-'],
        'meaning': 'night',
        'originLanguage': 'Latin',
        'examples': ['equinoctial', 'equinox', 'noctambulous', 'noctiluca', 'noctilucent', 'noctule', 'nocturn', 'nocturnal', 'nocturnality', 'nocturne', 'notturno', 'seminocturnal', 'trinoctial'],
        'letter': 'n'
    }, {
        'roots': ['nod-'],
        'meaning': 'knot',
        'originLanguage': 'Latin',
        'examples': ['acnode', 'binodal', 'crunode', 'denouement', 'extranodal', 'internodal', 'internode', 'intranodal', 'multinodal', 'nodal', 'node', 'nodose', 'nodosity', 'nodular', 'nodulation', 'nodule', 'nodulose', 'nodulus', 'nodus', 'supernode', 'tacnode', 'trinodal', 'uninodal'],
        'letter': 'n'
    }, {
        'roots': ['nom-'],
        'meaning': 'arrangement, law, order',
        'originLanguage': 'Greek',
        'examples': ['agronomy', 'antinomy', 'astronomy', 'autonomous', 'autonomy', 'bionomics', 'economics', 'economy', 'gastronomy', 'metronome', 'numismatic', 'polynomial', 'taxonomy'],
        'letter': 'n'
    }, {
        'roots': ['nomad-'],
        'meaning': 'those who let pasture herds',
        'originLanguage': 'Greek',
        'examples': ['nomad', 'nomadic', 'nomadism', 'nomadize'],
        'letter': 'n'
    }, {
        'roots': ['nomen-', 'nomin-'],
        'meaning': 'name',
        'originLanguage': 'Latin',
        'examples': ['agnomen', 'agnominal', 'agnomination', 'binomen', 'binominal', 'denomination', 'denominational', 'denominative', 'denominator', 'ignominious', 'ignominy', 'innominate', 'innomine', 'interdenominational', 'multidenominational', 'multinominal', 'nomenclator', 'nomenclature', 'nominal', 'nominate', 'nomination', 'nominative', 'nominator', 'nominee', 'nondenominational', 'noun', 'postnominal', 'praenomen', 'prenominal', 'pronominal', 'pronoun', 'redenomination', 'renominate', 'renown', 'surnominal', 'trinomen', 'trinominal'],
        'letter': 'n'
    }, {
        'roots': ['non-'],
        'meaning': 'not',
        'originLanguage': 'Latin',
        'examples': ['none', 'nonexistent', 'non-fiction', 'noninvasive'],
        'letter': 'n'
    }, {
        'roots': ['non-'],
        'meaning': 'ninth',
        'originLanguage': 'Latin',
        'examples': ['nonary', 'None', 'nonet', 'noon'],
        'letter': 'n'
    }, {
        'roots': ['nonagen-'],
        'meaning': 'ninety each',
        'originLanguage': 'Latin',
        'examples': ['nonagenarian', 'nonagenary'],
        'letter': 'n'
    }, {
        'roots': ['nonagesim-'],
        'meaning': 'ninetieth',
        'originLanguage': 'Latin',
        'examples': ['nonagesimal'],
        'letter': 'n'
    }, {
        'roots': ['norm-'],
        'meaning': 'carpenter\'s square',
        'originLanguage': 'Latin',
        'examples': ['abnormal', 'abnormality', 'binormal', 'circumnormal', 'denormal', 'enormity', 'enormous', 'nonnormal', 'nonnormative', 'norm', 'normable', 'normal', 'normality', 'normative', 'quasinorm', 'seminorm', 'seminormable', 'seminormal', 'subnormal'],
        'letter': 'n'
    }, {
        'roots': ['not-'],
        'meaning': 'south',
        'originLanguage': 'Greek',
        'examples': ['Notogaea', 'Notomys', 'Nototherium'],
        'letter': 'n'
    }, {
        'roots': ['not-'],
        'meaning': 'back',
        'originLanguage': 'Greek',
        'examples': ['notochord'],
        'letter': 'n'
    }, {
        'roots': ['not-'],
        'meaning': 'letter, mark, note',
        'originLanguage': 'Latin',
        'examples': ['annotate', 'annotation', 'annotator', 'connotation', 'connotational', 'connotative', 'connote', 'denotation', 'denotational', 'denotative', 'denotatum', 'denote', 'nondenotative', 'nonnotable', 'nonnotational', 'notability', 'notable', 'notarial', 'notariat', 'notary', 'notate', 'notation', 'notational'],
        'letter': 'n'
    }, {
        'roots': ['noth-'],
        'meaning': 'spurious',
        'originLanguage': 'Greek',
        'examples': ['nothogenus'],
        'letter': 'n'
    }, {
        'roots': ['nov-'],
        'meaning': 'nine',
        'originLanguage': 'Latin',
        'examples': ['November', 'novennial'],
        'letter': 'n'
    }, {
        'roots': ['nov-'],
        'meaning': 'new',
        'originLanguage': 'Latin',
        'examples': ['innovate', 'innovation', 'innovational', 'innovative', 'innovator', 'innovatory', 'nova', 'novation', 'novel', 'novella', 'novelty', 'novice', 'novitiate', 'renovatable', 'renovate', 'renovation', 'renovative', 'renovator', 'supernova'],
        'letter': 'n'
    }, {
        'roots': ['noven-'],
        'meaning': 'nine each',
        'originLanguage': 'Latin',
        'examples': ['Novena', 'novenary'],
        'letter': 'n'
    }, {
        'roots': ['novendec-'],
        'meaning': 'nineteen',
        'originLanguage': 'Latin',
        'examples': ['novemdecillion'],
        'letter': 'n'
    }, {
        'roots': ['nox-'],
        'meaning': 'harm',
        'originLanguage': 'Latin',
        'examples': ['noxious', 'obnoxious'],
        'letter': 'n'
    }, {
        'roots': ['nu-'],
        'meaning': 'nod',
        'originLanguage': 'Latin',
        'examples': ['circumnutate', 'circumnutation', 'counternutation', 'innuendo', 'innuent', 'numen', 'numinous', 'nutant', 'nutation'],
        'letter': 'n'
    }, {
        'roots': ['nub-', 'nupt-'],
        'meaning': 'to marry, to wed',
        'originLanguage': 'Latin',
        'examples': ['connubial', 'connubiality', 'nubile', 'nuptial', 'postnuptial', 'prenuptial'],
        'letter': 'n'
    }, {
        'roots': ['nuc-'],
        'meaning': 'nut',
        'originLanguage': 'Latin',
        'examples': ['enucleate', 'enucleation', 'extranuclear', 'internuclear', 'intranuclear', 'multinucleate', 'nougat', 'nucament', 'nucellar', 'nucellus', 'nucifer', 'nuciferine', 'nuciferous', 'nuciform', 'Nucifraga', 'nucivorous', 'nuclear', 'nucleate', 'nucleation', 'nucleolar', 'nucleolate', 'nucleolus', 'nucleus', 'pronuclear', 'pronucleus', 'supranuclear'],
        'letter': 'n'
    }, {
        'roots': ['nuch-'],
        'meaning': 'back of neck',
        'originLanguage': 'Latin',
        'examples': ['nuchal cord'],
        'letter': 'n'
    }, {
        'roots': ['nud-'],
        'meaning': 'naked',
        'originLanguage': 'Latin',
        'examples': ['denudation', 'denude', 'nonnude', 'nude', 'nudist', 'nudity', 'seminude', 'seminudity'],
        'letter': 'n'
    }, {
        'roots': ['null-'],
        'meaning': 'none',
        'originLanguage': 'Latin',
        'examples': ['nullify'],
        'letter': 'n'
    }, {
        'roots': ['numer-'],
        'meaning': 'number',
        'originLanguage': 'Latin',
        'examples': ['denumerable', 'enumerable', 'enumerate', 'enumeration', 'enumerative', 'enumerator', 'equinumerant', 'equinumerous', 'innumerable', 'innumeracy', 'innumerate', 'innumerous', 'nonenumerative', 'numerable', 'numeracy', 'numéraire', 'numeral', 'numerary', 'numerate', 'numeration', 'numerative', 'numerator', 'numerical', 'numero', 'numerosity', 'numerous', 'renumerate', 'supernumerary'],
        'letter': 'n'
    }, {
        'roots': ['nunci-'],
        'meaning': 'announce',
        'originLanguage': 'Latin',
        'examples': ['announce', 'announcement', 'annunciation', 'denounce', 'denouncement', 'denunciation', 'enounce', 'enouncement', 'enunciable', 'enunciate', 'enunciation', 'enunciative', 'internuncial', 'internuncio', 'nunciature', 'nuncio', 'obnounce', 'pronounce', 'pronouncement', 'pronunciation', 'pronuntiatio', 'renounce', 'renouncement', 'renunciation'],
        'letter': 'n'
    }, {
        'roots': ['nutri-'],
        'meaning': 'nourish',
        'originLanguage': 'Latin',
        'examples': ['innutrition', 'malnourish', 'malnourishment', 'malnutrition', 'nonnutritional', 'nourish', 'nourishment', 'nurse', 'nurturance', 'nurture', 'nutrient', 'nutriment', 'nutrition', 'nutritional', 'nutritious'],
        'letter': 'n'
    }, {
        'roots': ['nyct-'],
        'meaning': 'night',
        'originLanguage': 'Greek',
        'examples': ['nyctalgia', 'nyctanthous', 'nyctinasty', 'nyctophilia', 'nyctophobia'],
        'letter': 'n'
    }, {
        'roots': ['nyst-'],
        'meaning': 'nod',
        'originLanguage': 'Greek',
        'examples': ['electronystagmography', 'nystagmic', 'nystagmus'],
        'letter': 'n'
    }],
    'o': [{
        'roots': ['ob-', 'o-', 'oc-', 'of-', 'og-', 'op-', 'os-'],
        'meaning': 'against',
        'originLanguage': 'Latin',
        'examples': ['obduracy', 'obdurate', 'obduration', 'obfuscate', 'oblique', 'obliquity', 'obstinate', 'obstreperous', 'occur', 'offend', 'omit', 'oppose', 'ostensible', 'ostentatious'],
        'letter': 'o'
    }, {
        'roots': ['obel-'],
        'meaning': 'spit, nail',
        'originLanguage': 'Greek',
        'examples': ['metobelus', 'obelisk', 'obelism', 'obelus'],
        'letter': 'o'
    }, {
        'roots': ['obol-'],
        'meaning': '',
        'originLanguage': 'Greek',
        'examples': ['obol', 'obolus'],
        'letter': 'o'
    }, {
        'roots': ['ocean-'],
        'meaning': '',
        'originLanguage': 'Greek',
        'examples': ['Oceania', 'oceanic'],
        'letter': 'o'
    }, {
        'roots': ['ochl-'],
        'meaning': 'crowd, mob',
        'originLanguage': 'Greek',
        'examples': ['enochlophobia', 'ochlocracy', 'ochlophobia'],
        'letter': 'o'
    }, {
        'roots': ['oct-'],
        'meaning': 'eight',
        'originLanguage': 'Greek',
        'examples': ['hemi-octahedron', 'octad', 'octadic', 'octagon', 'octahedron', 'octameter', 'octode'],
        'letter': 'o'
    }, {
        'roots': ['oct-'],
        'meaning': 'eight',
        'originLanguage': 'Latin',
        'examples': ['octangular', 'octennial', 'octovir'],
        'letter': 'o'
    }, {
        'roots': ['octav-'],
        'meaning': 'eighth',
        'originLanguage': 'Latin',
        'examples': ['octaval'],
        'letter': 'o'
    }, {
        'roots': ['octogen-'],
        'meaning': 'eighty each',
        'originLanguage': 'Latin',
        'examples': ['octogenarian', 'octogenary'],
        'letter': 'o'
    }, {
        'roots': ['octogesim-'],
        'meaning': 'eightieth',
        'originLanguage': 'Latin',
        'examples': ['octogesimal'],
        'letter': 'o'
    }, {
        'roots': ['octon-'],
        'meaning': 'eight each',
        'originLanguage': 'Latin',
        'examples': ['octonary'],
        'letter': 'o'
    }, {
        'roots': ['ocul-'],
        'meaning': 'eye',
        'originLanguage': 'Latin',
        'examples': ['ocular', 'oculus', 'ullage'],
        'letter': 'o'
    }, {
        'roots': ['od-'],
        'meaning': 'path, way',
        'originLanguage': 'Greek',
        'examples': ['anode', 'diode', 'odometer', 'parodos', 'pentode', 'tetrode', 'triode'],
        'letter': 'o'
    }, {
        'roots': ['odi-'],
        'meaning': 'hate',
        'originLanguage': 'Latin',
        'examples': ['odious'],
        'letter': 'o'
    }, {
        'roots': ['odont-'],
        'meaning': 'tooth',
        'originLanguage': 'Greek',
        'examples': ['anodontia', 'conodont', 'cynodont', 'dicynodont', 'dysodontiasis', 'macrodontia', 'mastodon', 'odontoid', 'odontology', 'odontophore', 'orthodontics', 'orthodontist', 'pedodontics', 'periodontal', 'smilodon', 'Thrinaxodon', 'Zanclodon'],
        'letter': 'o'
    }, {
        'roots': ['odor-'],
        'meaning': 'fragrant',
        'originLanguage': 'Latin',
        'examples': ['malodorous', 'odoriferous', 'odorous'],
        'letter': 'o'
    }, {
        'roots': ['odyn-'],
        'meaning': 'pain',
        'originLanguage': 'Greek',
        'examples': ['allodynia', 'anodyne', 'glossodynia', 'mastodynia', 'pleurodynia'],
        'letter': 'o'
    }, {
        'roots': ['oec-'],
        'meaning': 'house',
        'originLanguage': 'Greek',
        'examples': ['andromonecy', 'archdiocese', 'dioecious', 'dioecy', 'ecesis', 'ecology', 'economize', 'gynomonoecy', 'heteroecious', 'monoecy', 'oecology', 'oeconomus', 'oikology', 'oikophobia', 'palaeoecology', 'paleoecology', 'parish', 'paroecious', 'perioeci', 'trioecious'],
        'letter': 'o'
    }, {
        'roots': ['oed-', 'ed-'],
        'meaning': 'swell, swollen',
        'originLanguage': 'Greek',
        'examples': ['angioedema', 'edema', 'edematous', 'oedema', 'oedematous'],
        'letter': 'o'
    }, {
        'roots': ['oen-'],
        'meaning': 'wine',
        'originLanguage': 'Greek',
        'examples': ['enology', 'oenochoe', 'oenologist', 'oenology', 'oenophile', 'oenophilia', 'oinochoe'],
        'letter': 'o'
    }, {
        'roots': ['oesophag-'],
        'meaning': 'gullet',
        'originLanguage': 'Greek',
        'examples': ['oesophagectomy', 'oesophagitis', 'oesophagus'],
        'letter': 'o'
    }, {
        'roots': ['oestr-'],
        'meaning': 'gadfly, sting',
        'originLanguage': 'Greek',
        'examples': ['anestrous', 'anestrus', 'anoestrus', 'estrogen', 'estrogenic', 'estrus', 'oestrone', 'oestrus'],
        'letter': 'o'
    }, {
        'roots': ['ogdo-'],
        'meaning': 'eighth',
        'originLanguage': 'Greek',
        'examples': ['ogdoad'],
        'letter': 'o'
    }, {
        'roots': ['-oid'],
        'meaning': 'like',
        'originLanguage': 'Greek',
        'examples': ['asteroid', 'mucoid', 'organoid'],
        'letter': 'o'
    }, {
        'roots': ['ole-'],
        'meaning': 'oil',
        'originLanguage': 'Latin',
        'examples': ['oleosity'],
        'letter': 'o'
    }, {
        'roots': ['olecran-'],
        'meaning': 'skull of elbow',
        'originLanguage': 'Latin from Greek',
        'examples': ['olecranon'],
        'letter': 'o'
    }, {
        'roots': ['olig-'],
        'meaning': 'few',
        'originLanguage': 'Greek',
        'examples': ['oligarchy', 'Oligocene', 'oligopoly', 'oligosaccharide', 'oligotrohic'],
        'letter': 'o'
    }, {
        'roots': ['oliv-'],
        'meaning': 'olive',
        'originLanguage': 'Latin',
        'examples': ['olivaceous', 'olivary', 'olivette'],
        'letter': 'o'
    }, {
        'roots': ['om-'],
        'meaning': 'raw',
        'originLanguage': 'Greek',
        'examples': ['omophagia', 'Omophagus'],
        'letter': 'o'
    }, {
        'roots': ['om-'],
        'meaning': 'shoulder',
        'originLanguage': 'Greek',
        'examples': ['acromion', 'omohyoid', 'omophorion'],
        'letter': 'o'
    }, {
        'roots': ['-oma'],
        'meaning': 'morbid growth, tumor',
        'originLanguage': 'Greek',
        'examples': ['melanoma'],
        'letter': 'o'
    }, {
        'roots': ['omas-'],
        'meaning': 'paunch',
        'originLanguage': 'Latin',
        'examples': ['abomasum', 'omasum'],
        'letter': 'o'
    }, {
        'roots': ['ombr-'],
        'meaning': 'rain',
        'originLanguage': 'Greek',
        'examples': ['ombrogenous', 'ombrology', 'ombrometer', 'Ombrophila', 'ombrophilous', 'ombrophobe', 'ombrotrophic'],
        'letter': 'o'
    }, {
        'roots': ['oment-'],
        'meaning': 'fat skin',
        'originLanguage': 'Latin',
        'examples': ['omental'],
        'letter': 'o'
    }, {
        'roots': ['omin-'],
        'meaning': 'creepy',
        'originLanguage': 'Latin',
        'examples': ['abominable', 'ominous'],
        'letter': 'o'
    }, {
        'roots': ['ommat-'],
        'meaning': 'eye',
        'originLanguage': 'Greek',
        'examples': ['ommatidium', 'ommatophore'],
        'letter': 'o'
    }, {
        'roots': ['omni-'],
        'meaning': 'all',
        'originLanguage': 'Latin',
        'examples': ['omnipotence', 'omnipresent', 'omniscient', 'omnivore'],
        'letter': 'o'
    }, {
        'roots': ['omphal-'],
        'meaning': 'navel',
        'originLanguage': 'Greek',
        'examples': ['omphalectomy', 'omphalic', 'omphalopagus', 'omphalophobia', 'paromphalocele'],
        'letter': 'o'
    }, {
        'roots': ['on-'],
        'meaning': 'ass',
        'originLanguage': 'Greek',
        'examples': ['Oniscidea', 'Oniscomorpha'],
        'letter': 'o'
    }, {
        'roots': ['onc-'],
        'meaning': 'barb, hook',
        'originLanguage': 'Greek',
        'examples': ['Oncinocalyx', 'Oncorhynchus'],
        'letter': 'o'
    }, {
        'roots': ['onc-'],
        'meaning': 'bulk',
        'originLanguage': 'Greek',
        'examples': ['oncocyte', 'oncocytoma', 'oncogenesis', 'oncologist', 'oncology'],
        'letter': 'o'
    }, {
        'roots': ['oneir-'],
        'meaning': 'dream',
        'originLanguage': 'Greek',
        'examples': ['oneiric', 'oneirism', 'oneirocritic', 'Oneirocritica', 'Oneirodidae', 'oneirogen', 'oneirogenic', 'Oneiroi', 'oneiroid', 'oneirology', 'oneiromancy', 'oneironaut', 'oneironautics', 'oneirophobia', 'oneirophrenia', 'oneiroscopy'],
        'letter': 'o'
    }, {
        'roots': ['oner-'],
        'meaning': 'burden, load',
        'originLanguage': 'Latin',
        'examples': ['exonerate', 'exoneration', 'onerous', 'onus'],
        'letter': 'o'
    }, {
        'roots': ['oni-'],
        'meaning': 'price',
        'originLanguage': 'Greek',
        'examples': ['oniochalasia', 'oniomania', 'oniomaniac'],
        'letter': 'o'
    }, {
        'roots': ['onomat-'],
        'meaning': 'name',
        'originLanguage': 'Greek',
        'examples': ['antonomasia', 'onomasiology', 'onomastic', 'onomasticon', 'onomastics', 'onomasty', 'onomatology', 'onomatophore', 'onomatopoeia'],
        'letter': 'o'
    }, {
        'roots': ['ont-'],
        'meaning': 'being, existence',
        'originLanguage': 'Greek',
        'examples': ['dysontogenesis', 'homoiousia', 'homoousia', 'monoousious', 'ontogenesis', 'ontogenetic', 'ontogeny', 'ontology', 'ousia', 'parousia'],
        'letter': 'o'
    }, {
        'roots': ['onych-'],
        'meaning': 'claw',
        'originLanguage': 'Greek',
        'examples': ['hapalonychia', 'Mesonychia', 'mesonychid', 'onychectomy', 'onycholysis', 'onychomancy', 'onychomycosis', 'onychophagia', 'onychophagy', 'onychorrhexis', 'onyx', 'paronychia', 'sardonyx'],
        'letter': 'o'
    }, {
        'roots': ['onym-'],
        'meaning': 'name',
        'originLanguage': 'Greek',
        'examples': ['anonymous', 'antonym', 'allonym', 'cryptonym', 'eponym', 'eponymous', 'eponymy', 'euonym', 'homonym', 'hyperonym', 'hyponym', 'hyponymy', 'meronym', 'meronymy', 'metonym', 'metonymy', 'metronymic', 'paronym', 'paronymous', 'pseudonym', 'pseudonymous', 'synonym', 'synonymous', 'synonymy', 'tautonym', 'tautonymous', 'tautonymy', 'xenonym'],
        'letter': 'o'
    }, {
        'roots': ['oo-'],
        'meaning': 'egg',
        'originLanguage': 'Greek',
        'examples': ['bottarga', 'dioon', 'epoophoron', 'oidioid', 'oidium', 'ooblast', 'oocyst', 'oocyte', 'oocytogenesis', 'oogamete', 'oogamous', 'oogamy', 'oogenesis', 'oogonium', 'ooid', 'oolite', 'oolith', 'oology', 'oophagy', 'oophorectomy', 'oophoron', 'ootheca', 'ootid', 'ootidogenesis', 'paroophoron'],
        'letter': 'o'
    }, {
        'roots': ['op-'],
        'meaning': 'hole',
        'originLanguage': 'Greek',
        'examples': ['metope', 'opaion'],
        'letter': 'o'
    }, {
        'roots': ['opac-'],
        'meaning': 'shady',
        'originLanguage': 'Latin',
        'examples': ['opacity', 'opacus', 'opaque'],
        'letter': 'o'
    }, {
        'roots': ['oper-'],
        'meaning': 'work',
        'originLanguage': 'Latin',
        'examples': ['cooperate', 'inoperable', 'opera', 'operate', 'opus'],
        'letter': 'o'
    }, {
        'roots': ['oper-'],
        'meaning': 'cover',
        'originLanguage': 'Latin',
        'examples': ['codiscovery', 'cover', 'covert', 'coverture', 'curch', 'curfew', 'discover', 'discoverable', 'discovert', 'discoverture', 'discovery', 'interoperculum', 'kerchief', 'nondiscoverable', 'opercular', 'operculiform', 'operculum', 're-cover', 'rediscover', 'subcover'],
        'letter': 'o'
    }, {
        'roots': ['ophi-'],
        'meaning': 'snake',
        'originLanguage': 'Greek',
        'examples': ['Brachyurophis', 'ophicephalous', 'Ophicephalus', 'Ophiceras', 'Ophiclinus', 'ophidiophobia', 'ophiolite', 'ophiologist', 'ophiology', 'ophiophagous', 'Ophiophagus', 'ophiophagy', 'ophiophobia', 'Ophisaurus', 'Ophisops', 'ophitic'],
        'letter': 'o'
    }, {
        'roots': ['ophthalm-'],
        'meaning': 'eye',
        'originLanguage': 'Greek',
        'examples': ['exophthalmic', 'exophthalmos', 'microphthalmia', 'ophthalmia', 'ophthalmic', 'ophthalmologic', 'ophthalmologist', 'ophthalmology', 'ophthalmoparesis', 'ophthalmoplegia', 'parophthalmia', 'xerophthalmia'],
        'letter': 'o'
    }, {
        'roots': ['opisth-'],
        'meaning': 'behind',
        'originLanguage': 'Greek',
        'examples': ['anopisthograph', 'opisthion', 'opisthobranch', 'opisthodomos', 'opisthoglyphous', 'opisthognathous', 'opisthograph', 'opisthokont', 'opisthosoma', 'opsimath', 'opsimathy'],
        'letter': 'o'
    }, {
        'roots': ['ops-', 'opt-'],
        'meaning': 'eye',
        'originLanguage': 'Greek',
        'examples': ['amblyopia', 'anopia', 'autopsy', 'biopsy', 'catadioptrics', 'catoptrics', 'catoptromancy', 'catoptrophobia', 'cyclops', 'diopter/dioptre', 'dioptrics', 'diplopia', 'eisoptrophobia', 'emmetropia', 'hemianopsia', 'myopia', 'opsoclonus', 'optic', 'optokinetic', 'panopticon', 'pleoptics', 'synopsis', 'synoptic', 'tritanopia'],
        'letter': 'o'
    }, {
        'roots': ['opsi-'],
        'meaning': 'late',
        'originLanguage': 'Greek',
        'examples': ['opsimath'],
        'letter': 'o'
    }, {
        'roots': ['opson-'],
        'meaning': 'cook, prepare for eating',
        'originLanguage': 'Greek',
        'examples': ['opsonin', 'opsonoid'],
        'letter': 'o'
    }, {
        'roots': ['opt-'],
        'meaning': 'choose',
        'originLanguage': 'Latin',
        'examples': ['adopt', 'adoptee', 'adoption', 'adoptive', 'co-option', 'coopt', 'cooptation', 'nonoptional', 'opt', 'optation', 'optative', 'option', 'optional', 'optionality'],
        'letter': 'o'
    }, {
        'roots': ['optim-'],
        'meaning': 'best',
        'originLanguage': 'Latin',
        'examples': ['optimal', 'optimum'],
        'letter': 'o'
    }, {
        'roots': ['or-'],
        'meaning': 'mountain',
        'originLanguage': 'Greek',
        'examples': ['Oread', 'orogenesis', 'orogenic', 'orogeny', 'orographic', 'orography'],
        'letter': 'o'
    }, {
        'roots': ['or-'],
        'meaning': 'mouth',
        'originLanguage': 'Latin',
        'examples': ['adosculation', 'inosculate', 'inosculation', 'interosculate', 'intraoral', 'oral', 'orifice', 'osculant', 'osculum', 'peroral'],
        'letter': 'o'
    }, {
        'roots': ['ora-'],
        'meaning': 'pray, plead',
        'originLanguage': 'Latin',
        'examples': ['adore', 'adoration', 'exorable', 'inexorable', 'oracle', 'orate', 'oration', 'orator', 'oratorio', 'oratory', 'orison', 'perorate', 'peroration', 'perorator'],
        'letter': 'o'
    }, {
        'roots': ['orb-'],
        'meaning': 'circle',
        'originLanguage': 'Latin',
        'examples': ['orbit'],
        'letter': 'o'
    }, {
        'roots': ['orch-'],
        'meaning': 'testicle',
        'originLanguage': 'Greek',
        'examples': ['anorchia', 'cryptorchidism', 'monorchism', 'orchid', 'orchiectomy', 'orchiopexy', 'Orchis', 'polyorchidism'],
        'letter': 'o'
    }, {
        'roots': ['orches-'],
        'meaning': 'dance',
        'originLanguage': 'Greek',
        'examples': ['orchestra'],
        'letter': 'o'
    }, {
        'roots': ['ordin-'],
        'meaning': 'order',
        'originLanguage': 'Latin',
        'examples': ['coordinal', 'coordinate', 'coordination', 'coordinator', 'disorder', 'extraordinaire', 'extraordinary', 'grandorder', 'incoordinate', 'incoordination', 'infraorder', 'inordinate', 'inordination', 'insubordinate', 'insubordination', 'magnorder', 'mirorder', 'ordain', 'ordainment', 'order', 'ordinal', 'ordinance', 'ordinand', 'ordinariate', 'ordinary', 'ordinate', 'ordination', 'ordinative', 'ordnance', 'ornery', 'parvorder', 'preordain', 'preorder', 'preordination', 'quasiorder', 'reordain', 'reorder', 'reordination', 'suborder', 'subordinary', 'subordinate', 'subordination', 'superordain', 'superorder', 'superordinate', 'superordination'],
        'letter': 'o'
    }, {
        'roots': ['oreg-'],
        'meaning': 'reach',
        'originLanguage': 'Greek',
        'examples': ['anorectic', 'anorexia', 'dysorexia', 'orectic', 'orexin', 'parorexia'],
        'letter': 'o'
    }, {
        'roots': ['org-'],
        'meaning': 'work',
        'originLanguage': 'Greek',
        'examples': ['orgasm'],
        'letter': 'o'
    }, {
        'roots': ['organ-'],
        'meaning': 'organ, instrument, tool',
        'originLanguage': 'Greek',
        'examples': ['organic', 'organism', 'organogenesis'],
        'letter': 'o'
    }, {
        'roots': ['ori-', 'ort-'],
        'meaning': 'rise',
        'originLanguage': 'Latin',
        'examples': ['aboriginal', 'abort', 'abortifacient', 'abortion', 'abortive', 'disorient', 'disorientation', 'orient', 'oriental', 'Orientalia', 'orientate', 'orientation', 'orientational', 'orientative', 'origin', 'original', 'originality', 'originate', 'origination', 'originator', 'reorient', 'reorientation'],
        'letter': 'o'
    }, {
        'roots': ['orn-'],
        'meaning': 'decorate',
        'originLanguage': 'Latin',
        'examples': ['adorn', 'adornment', 'ornament', 'ornamental', 'ornamentation', 'ornate', 'ornative', 'ornature', 'suborn', 'subornation'],
        'letter': 'o'
    }, {
        'roots': ['ornith-'],
        'meaning': 'bird',
        'originLanguage': 'Greek',
        'examples': ['Avernus', 'ornithology', 'ornithomancy', 'ornithorhynchus', 'ornithosis'],
        'letter': 'o'
    }, {
        'roots': ['orphan-'],
        'meaning': '',
        'originLanguage': 'Greek',
        'examples': ['orphan'],
        'letter': 'o'
    }, {
        'roots': ['orth-'],
        'meaning': 'straight',
        'originLanguage': 'Greek',
        'examples': ['orthocenter', 'orthocentric', 'orthodontia', 'orthodontic', 'orthodontist', 'orthodox', 'orthodoxy', 'orthographic', 'ortholog', 'orthologous', 'orthonym', 'orthopedic', 'orthoscope', 'orthosis', 'orthostat', 'orthostyle', 'orthotic'],
        'letter': 'o'
    }, {
        'roots': ['oryz-'],
        'meaning': 'rice',
        'originLanguage': 'Greek',
        'examples': ['Oryza', 'Oryzomys', 'rice', 'risotto'],
        'letter': 'o'
    }, {
        'roots': ['oscill-'],
        'meaning': 'swing',
        'originLanguage': 'Latin',
        'examples': ['oscillate', 'oscillation', 'oscillator', 'oscillatory'],
        'letter': 'o'
    }, {
        'roots': ['osm-'],
        'meaning': 'odor',
        'originLanguage': 'Greek',
        'examples': ['anosmia', 'anosmic', 'cacosmia', 'coprosmia', 'dysosmia', 'dysosmic', 'euosmia', 'hyperosmia', 'hyperosmic', 'hyposmia', 'hyposmic', 'osmium', 'osmolagnia', 'osmophobia', 'osphresiolagnia', 'parosmia', 'phantosmia', 'troposmia'],
        'letter': 'o'
    }, {
        'roots': ['osm-'],
        'meaning': 'push, thrust',
        'originLanguage': 'Greek',
        'examples': ['osmometry', 'osmosis', 'osmostat', 'osmotic'],
        'letter': 'o'
    }, {
        'roots': ['oss-'],
        'meaning': 'bone',
        'originLanguage': 'Latin',
        'examples': ['exossation', 'interosseous', 'ossature', 'osselet', 'osseocartilaginous', 'osseointegration', 'osseous', 'ossicle', 'ossicular', 'ossiferous', 'ossification', 'ossifrage', 'ossify', 'ossuary'],
        'letter': 'o'
    }, {
        'roots': ['oste-'],
        'meaning': 'bone',
        'originLanguage': 'Greek',
        'examples': ['dysostosis', 'endosteum', 'exostosis', 'hyperostosis', 'monostotic', 'Osteichthyes', 'osteoarthritis', 'osteoblast', 'osteochondritis', 'osteochondrosis', 'osteoclast', 'osteogenic', 'osteogenesis', 'osteoid', 'osteology', 'osteolysis', 'osteoma', 'osteomalacia', 'osteonecrosis', 'osteopathy', 'osteopenia', 'osteoporosis', 'osteosarcoma', 'osteosis', 'osteothrombosis', 'osteotome', 'osteotomy', 'periosteum', 'synostosis'],
        'letter': 'o'
    }, {
        'roots': ['osti-'],
        'meaning': 'entrance',
        'originLanguage': 'Latin',
        'examples': ['ostiary', 'ostiolar', 'ostiole', 'ostium'],
        'letter': 'o'
    }, {
        'roots': ['ostrac-'],
        'meaning': 'shell',
        'originLanguage': 'Greek',
        'examples': ['Entomostraca', 'Leptostraca', 'Malacostraca', 'ostracism', 'ostracize', 'ostracod', 'ostracoderm', 'ostracon', 'periostracum'],
        'letter': 'o'
    }, {
        'roots': ['ostre-'],
        'meaning': 'oyster',
        'originLanguage': 'Greek',
        'examples': ['ostreophagist', 'oyster'],
        'letter': 'o'
    }, {
        'roots': ['ot-'],
        'meaning': 'ear',
        'originLanguage': 'Greek',
        'examples': ['anotia', 'Aotus', 'microtia', 'Myosotis', 'otalgia', 'otic', 'otitis', 'otocephaly', 'otocleisis', 'otoconium', 'otocyst', 'otodynia', 'otolith', 'otology', 'otopathy', 'otophyma', 'otoplasty', 'otorhinology', 'otorrhea', 'otosclerosis', 'otoscope', 'otoscopy', 'ototomy', 'parotic', 'parotid', 'periotic', 'synotia'],
        'letter': 'o'
    }, {
        'roots': ['ov-'],
        'meaning': 'egg',
        'originLanguage': 'Latin',
        'examples': ['obovate', 'oval', 'ovarian', 'ovariole', 'ovary', 'ovate', 'ovicapsule', 'ovicidal', 'ovicide', 'oviduct', 'oviferous', 'oviform', 'oviposition', 'ovipositor', 'ovolo', 'ovular', 'ovulation', 'ovulatory', 'ovule', 'ovum', 'pluriovulate'],
        'letter': 'o'
    }, {
        'roots': ['ovi-'],
        'meaning': 'sheep',
        'originLanguage': 'Latin',
        'examples': ['ovile', 'ovine'],
        'letter': 'o'
    }, {
        'roots': ['oxy-'],
        'meaning': 'sharp, pointed',
        'originLanguage': 'Greek',
        'examples': ['anoxia', 'anoxic', 'dioxide', 'hypoxia', 'monoxide', 'oxide', 'oxyanion', 'oxygen', 'oxyhalide', 'oxymoron', 'oxyntic', 'oxytone', 'paroxysm', 'pentoxide', 'polyoxide', 'tetraoxygen', 'tetroxide', 'trioxide'],
        'letter': 'o'
    }, {
        'roots': ['oz-'],
        'meaning': 'smell',
        'originLanguage': 'Greek',
        'examples': ['ozocerite', 'ozone', 'ozopore'],
        'letter': 'o'
    }],
    'p': [{
        'roots': ['pac-'],
        'meaning': 'peace',
        'originLanguage': 'Latin',
        'examples': ['appease', 'Pacific', 'pacifism', 'pacifist', 'pacify'],
        'letter': 'p'
    }, {
        'roots': ['pach-'],
        'meaning': 'thick',
        'originLanguage': 'Greek',
        'examples': ['pachydermata', 'pachyglossia', 'pachynsis', 'Pachypodium'],
        'letter': 'p'
    }, {
        'roots': ['pact-'],
        'meaning': 'fasten',
        'originLanguage': 'Latin',
        'examples': ['compact', 'impact', 'impaction', 'impinge', 'pact', 'page', 'propagate'],
        'letter': 'p'
    }, {
        'roots': ['pae-'],
        'meaning': 'strike',
        'originLanguage': 'Greek',
        'examples': ['anapaest', 'anapaestic', 'anapest', 'anapestic'],
        'letter': 'p'
    }, {
        'roots': ['paed-', 'ped-'],
        'meaning': 'child',
        'originLanguage': 'Greek',
        'examples': ['orthopedic', 'paediatric', 'paedogenesis', 'paedomorphism', 'page', 'pedagogue', 'pedagogy', 'pedant', 'pedantic', 'pediatric', 'pedodontics', 'pedophilia'],
        'letter': 'p'
    }, {
        'roots': ['pagin-'],
        'meaning': 'page',
        'originLanguage': 'Latin',
        'examples': ['pagination'],
        'letter': 'p'
    }, {
        'roots': ['pal-'],
        'meaning': 'stake',
        'originLanguage': 'Latin',
        'examples': ['impale', 'impalement', 'pale', 'palisade', 'pole', 'travail', 'travel'],
        'letter': 'p'
    }, {
        'roots': ['palae-', 'pale-'],
        'meaning': 'ancient, old',
        'originLanguage': 'Greek',
        'examples': ['Paleo Diet', 'paleobiology', 'paleobotanic', 'Paleocene', 'Paleogene', 'Paleolithic', 'paleology', 'paleomagnetism', 'paleontology', 'paleopolyploidy', 'paleopsychology', 'Paleozoic'],
        'letter': 'p'
    }, {
        'roots': ['palin-', 'palim-'],
        'meaning': 'back',
        'originLanguage': 'Greek',
        'examples': ['palimpsest', 'palindrome', 'palingenesis', 'palinspastic'],
        'letter': 'p'
    }, {
        'roots': ['pall-'],
        'meaning': 'be pale',
        'originLanguage': 'Latin',
        'examples': ['pallid', 'pallor'],
        'letter': 'p'
    }, {
        'roots': ['palli-'],
        'meaning': 'cloak',
        'originLanguage': 'Latin',
        'examples': ['pall', 'palliate', 'palliative', 'pallium'],
        'letter': 'p'
    }, {
        'roots': ['palm-'],
        'meaning': 'palm',
        'originLanguage': 'Latin',
        'examples': ['palmate'],
        'letter': 'p'
    }, {
        'roots': ['palp-'],
        'meaning': 'touch',
        'originLanguage': 'Latin',
        'examples': ['palp', 'palpable', 'palpate', 'palpation', 'palpitant', 'palpitation'],
        'letter': 'p'
    }, {
        'roots': ['palustr-'],
        'meaning': 'in marshes',
        'originLanguage': 'Latin',
        'examples': ['palustral'],
        'letter': 'p'
    }, {
        'roots': ['pan-'],
        'meaning': 'Pan',
        'originLanguage': 'Greek',
        'examples': ['panic'],
        'letter': 'p'
    }, {
        'roots': ['pan-', 'pam-'],
        'meaning': 'all',
        'originLanguage': 'Greek',
        'examples': ['diapason', 'panacea', 'pandemic', 'pandemonium', 'panoply', 'panoptic', 'pantology', 'parrhesia'],
        'letter': 'p'
    }, {
        'roots': ['pan-'],
        'meaning': 'bread',
        'originLanguage': 'Latin',
        'examples': ['accompaniment', 'accompany', 'appanage', 'companion', 'company', 'empanada', 'impanate', 'impanation', 'panelle', 'panetela', 'panetella', 'panettone', 'panivorous', 'pannier', 'pantry'],
        'letter': 'p'
    }, {
        'roots': ['pand-', 'pans-'],
        'meaning': 'spread',
        'originLanguage': 'Latin',
        'examples': ['compass', 'dispand', 'dispansion', 'encompass', 'encompassment', 'expand', 'expanse', 'expansion', 'expansive', 'expansivity', 'impassable', 'impasse', 'pace', 'pandiculate', 'pandiculation', 'passus', 'repand', 'spawn', 'subrepand'],
        'letter': 'p'
    }, {
        'roots': ['par-', 'para-'],
        'meaning': 'beside, near',
        'originLanguage': 'Greek',
        'examples': ['parable', 'parabola', 'parallel', 'parallelepiped', 'parameter', 'parapagus'],
        'letter': 'p'
    }, {
        'roots': ['par-'],
        'meaning': 'equal',
        'originLanguage': 'Latin',
        'examples': ['compare', 'disparage', 'par', 'parity', 'peer', 'subpar'],
        'letter': 'p'
    }, {
        'roots': ['par-'],
        'meaning': 'order, prepare, provide, procure',
        'originLanguage': 'Latin',
        'examples': ['apparat', 'apparatus', 'co-emperor', 'comprador', 'disparate', 'disrepair', 'dissever', 'disseverance', 'emperor', 'empery', 'empire', 'empress', 'imperant', 'imperative', 'imperator', 'imperious', 'inseparable', 'irreparable', 'parade', 'pare', 'parison', 'parry', 'parure', 'preparation', 'preparative', 'preparatory', 'prepare', 'repair', 'reparable', 'reparation', 'reparative', 'separability', 'separable', 'separate', 'separation', 'separative', 'separator', 'separatory', 'separatrix', 'sever', 'severability', 'severable', 'several', 'severance', 'vituperate'],
        'letter': 'p'
    }, {
        'roots': ['par-', 'para-'],
        'meaning': 'beside, near',
        'originLanguage': 'Greek',
        'examples': ['parable', 'paradox', 'parallel', 'parameter', 'parody'],
        'letter': 'p'
    }, {
        'roots': ['parc-', 'pars-'],
        'meaning': 'spare, save',
        'originLanguage': 'Latin',
        'examples': ['parcity', 'parsimonious', 'parsimony'],
        'letter': 'p'
    }, {
        'roots': ['pariet-'],
        'meaning': 'wall',
        'originLanguage': 'Latin',
        'examples': ['parietal'],
        'letter': 'p'
    }, {
        'roots': ['part-'],
        'meaning': 'part',
        'originLanguage': 'Latin',
        'examples': ['apart', 'bipartite', 'compartment', 'depart', 'impartial', 'parcel', 'part', 'partial', 'participate', 'particle', 'partisan', 'partition'],
        'letter': 'p'
    }, {
        'roots': ['parthen-'],
        'meaning': 'virgin',
        'originLanguage': 'Greek',
        'examples': ['parthenocarpy', 'parthenogenesis', 'Parthenon', 'Parthenope'],
        'letter': 'p'
    }, {
        'roots': ['parv-'],
        'meaning': 'little',
        'originLanguage': 'Latin',
        'examples': ['parvovirus'],
        'letter': 'p'
    }, {
        'roots': ['pasc-', 'past-'],
        'meaning': 'feed',
        'originLanguage': 'Latin',
        'examples': ['antepast', 'antipasto', 'pabulum', 'pastel', 'pastern', 'pastiglia', 'pastille', 'pastor', 'pastorage', 'pastoral', 'pastorale', 'pastorate', 'pastorium', 'pasturable', 'pasturage', 'pastural', 'pasture', 'repast', 'repasture'],
        'letter': 'p'
    }, {
        'roots': ['pass-'],
        'meaning': 'sprinkle',
        'originLanguage': 'Greek',
        'examples': ['paste'],
        'letter': 'p'
    }, {
        'roots': ['pass-'],
        'meaning': 'pace, step',
        'originLanguage': 'Latin',
        'examples': [''],
        'letter': 'p'
    }, {
        'roots': ['passer-'],
        'meaning': 'sparrow',
        'originLanguage': 'Latin',
        'examples': ['passeriform', 'passerine'],
        'letter': 'p'
    }, {
        'roots': ['pat-'],
        'meaning': 'path',
        'originLanguage': 'Greek',
        'examples': ['peripatetic', 'peripateticism'],
        'letter': 'p'
    }, {
        'roots': ['pat-'],
        'meaning': 'be open',
        'originLanguage': 'Latin',
        'examples': ['impatent', 'patefaction', 'patella', 'patellar', 'patelliform', 'paten', 'patency', 'patent', 'patera', 'patin'],
        'letter': 'p'
    }, {
        'roots': ['path-'],
        'meaning': 'feeling, disease',
        'originLanguage': 'Greek',
        'examples': ['allopath', 'allopathy', 'antipathy', 'apathetic', 'apathy', 'empathy', 'etiopathogenesis', 'homeopathic', 'homeopathy', 'idiopathic', 'pathetic', 'pathoclisis', 'pathogen', 'pathogenesis', 'pathogenic', 'pathologist', 'pathology', 'pathos', 'psychopath', 'psychopathic', 'psychopathy', 'sympathectomy', 'sympathetic', 'sympathy'],
        'letter': 'p'
    }, {
        'roots': ['pater-', 'patr-'],
        'meaning': 'father',
        'originLanguage': 'Greek',
        'examples': ['allopatric', 'allopatry', 'eupatrides', 'patriarch', 'patriarchy', 'patriot', 'patriotic', 'patriotism', 'patrology', 'patronym', 'patronymic', 'sympatric', 'sympatry'],
        'letter': 'p'
    }, {
        'roots': ['pater-', 'patr-'],
        'meaning': 'father',
        'originLanguage': 'Latin',
        'examples': ['compadre', 'compaternity', 'compère', 'impetrate', 'impetration', 'impetrative', 'impetrator', 'Jupiter', 'padre', 'padrone', 'paterfamilias', 'paternal', 'paternity', 'paternoster', 'patriate', 'patriation', 'Patricia', 'patrician', 'patriciate', 'patricidal', 'patricide', 'Patrick', 'patriclinous', 'patricliny', 'patrifocal', 'patrilateral', 'patrilineage', 'patrilineal', 'patrilineality', 'patrilinear', 'patrilocal', 'patrilocality', 'patrimonial', 'patrimony', 'patron', 'patronage', 'patronal', 'patronate', 'patroness', 'patroon', 'patter', 'pattern', 'père', 'perpetrable', 'perpetrate', 'perpetration', 'perpetrator', 'repatriate', 'repatriation'],
        'letter': 'p'
    }, {
        'roots': ['pati-', 'pass-'],
        'meaning': 'suffer, feel, endure, permit',
        'originLanguage': 'Latin',
        'examples': ['compassion', 'compassionate', 'compatibility', 'compatible', 'dispassion', 'dispassionate', 'impassible', 'impassion', 'impassive', 'impassivity', 'impatible', 'impatience', 'impatient', 'incompatibility', 'incompatible', 'interpatient', 'noncompatible', 'nonpassible', 'passibility', 'passible', 'passion', 'passional', 'passionary', 'passionate', 'passive', 'passivity', 'patible', 'patience', 'patient', 'patientive', 'perpession'],
        'letter': 'p'
    }, {
        'roots': ['pauc-'],
        'meaning': 'few',
        'originLanguage': 'Latin',
        'examples': ['paucal', 'pauciloquent', 'paucity'],
        'letter': 'p'
    }, {
        'roots': ['pav-'],
        'meaning': 'beat',
        'originLanguage': 'Latin',
        'examples': ['pavage', 'pave', 'pavement', 'pavior'],
        'letter': 'p'
    }, {
        'roots': ['pecc-'],
        'meaning': 'sin',
        'originLanguage': 'Latin',
        'examples': ['impeccable', 'peccadillo', 'peccant', 'peccavi'],
        'letter': 'p'
    }, {
        'roots': ['pect-'],
        'meaning': 'fixed',
        'originLanguage': 'Greek',
        'examples': ['pectic', 'pectin'],
        'letter': 'p'
    }, {
        'roots': ['pector-'],
        'meaning': 'chest',
        'originLanguage': 'Latin',
        'examples': ['pectoral'],
        'letter': 'p'
    }, {
        'roots': ['pecu-'],
        'meaning': 'property',
        'originLanguage': 'Latin',
        'examples': ['peculiar', 'pecuniary', 'pecunious'],
        'letter': 'p'
    }, {
        'roots': ['ped-'],
        'meaning': 'foot',
        'originLanguage': 'Latin',
        'examples': ['biped', 'bipedal', 'centipedal', 'centipede', 'decempedal', 'expediency', 'expedient', 'expeditate', 'expedite', 'expedition', 'expeditionary', 'expeditious', 'impeach', 'impeachable', 'impeachment', 'impede', 'impediment', 'impedition', 'impeditive', 'inexpedient', 'interpetiolar', 'intrapetiolar', 'millipede', 'multiped', 'multipede', 'octopede', 'oppidum', 'pawn', 'pedal', 'pedate', 'pedatifid', 'pedestal', 'pedestrian', 'pedicel', 'pedicle', 'pedicure', 'pediform', 'pedigerous', 'pedigree', 'peduncle', 'pedunculate', 'peon', 'peonage', 'petiolar', 'petiolate', 'petiole', 'petiolular', 'petiolulate', 'petiolule', 'piedfort', 'piedmont', 'pioneer', 'quadruped', 'quadrupedal', 'repedation', 'revamp', 'semiped', 'semipedal', 'sesquipedal', 'stapes', 'stapedius', 'subpetiolate', 'suppedaneum', 'tripedal', 'trivet', 'vamp', 'velocipede'],
        'letter': 'p'
    }, {
        'roots': ['peg-', 'pect-'],
        'meaning': 'fix',
        'originLanguage': 'Greek',
        'examples': ['hysteropexy', 'pagophobia', 'parapagus', 'pectic', 'pectin', 'rheopectic', 'rheopecty', 'rheopexy'],
        'letter': 'p'
    }, {
        'roots': ['pejor-'],
        'meaning': 'worse',
        'originLanguage': 'Latin',
        'examples': ['pejorative'],
        'letter': 'p'
    }, {
        'roots': ['pel-'],
        'meaning': 'clay, mud',
        'originLanguage': 'Greek',
        'examples': ['pelite', 'pelitic'],
        'letter': 'p'
    }, {
        'roots': ['pelag-'],
        'meaning': 'sea',
        'originLanguage': 'Greek',
        'examples': ['abyssopelagic', 'allopelagic', 'archipelago', 'bathypelagic', 'epipelagic', 'hadopelagic', 'mesopelagic', 'pelagic'],
        'letter': 'p'
    }, {
        'roots': ['pelarg-'],
        'meaning': 'stork',
        'originLanguage': 'Greek',
        'examples': ['pelargonic', 'Pelargonium'],
        'letter': 'p'
    }, {
        'roots': ['pell-', 'puls-'],
        'meaning': 'drive, push',
        'originLanguage': 'Latin',
        'examples': ['appulse', 'compel', 'compulsory', 'dispel', 'expel', 'expulsion', 'impel', 'impulse', 'propel', 'propellent', 'propulsion', 'propulsive', 'propulsor', 'pulsate', 'pulse', 'push', 'repel', 'repellent', 'repulsive'],
        'letter': 'p'
    }, {
        'roots': ['pemp-', 'pomp-'],
        'meaning': 'send',
        'originLanguage': 'Greek',
        'examples': ['apopemptic', 'hypnopompic', 'pomp', 'psychopomp'],
        'letter': 'p'
    }, {
        'roots': ['pen-'],
        'meaning': 'almost',
        'originLanguage': 'Latin',
        'examples': ['peninsula', 'penultimate', 'penumbra'],
        'letter': 'p'
    }, {
        'roots': ['pen-', 'poen-', 'puni-'],
        'meaning': 'punish',
        'originLanguage': 'Latin',
        'examples': ['impune', 'impunity', 'pain', 'penal', 'penalize', 'penalty', 'penance', 'penitence', 'penitent', 'penitentiary', 'pine', 'punish', 'punitive', 'repent', 'subpoena'],
        'letter': 'p'
    }, {
        'roots': ['pend-', 'pens-'],
        'meaning': 'hang',
        'originLanguage': 'Latin',
        'examples': ['append', 'penchant', 'pendant', 'pending', 'pendulum', 'pensive', 'prepense', 'suspend', 'suspense'],
        'letter': 'p'
    }, {
        'roots': ['penia-'],
        'meaning': 'deficiency',
        'originLanguage': 'Greek',
        'examples': ['leukopenia'],
        'letter': 'p'
    }, {
        'roots': ['penn-', 'pinn-'],
        'meaning': 'feather',
        'originLanguage': 'Latin',
        'examples': ['pennate', 'pinnacle', 'pinnate', 'pinnule'],
        'letter': 'p'
    }, {
        'roots': ['pent-'],
        'meaning': 'five',
        'originLanguage': 'Greek',
        'examples': ['diapente', 'pentachoric', 'pentad', 'pentagon', 'pentagram', 'pentalpha', 'pentapolis', 'pentatonic', 'pentatope', 'pentode'],
        'letter': 'p'
    }, {
        'roots': ['pentacosi-'],
        'meaning': 'five hundred',
        'originLanguage': 'Greek',
        'examples': ['pentacosiomedimni'],
        'letter': 'p'
    }, {
        'roots': ['pentecont-'],
        'meaning': 'fifty',
        'originLanguage': 'Greek',
        'examples': ['pentecontad', 'pentecontagon'],
        'letter': 'p'
    }, {
        'roots': ['pentecost-'],
        'meaning': 'fiftieth',
        'originLanguage': 'Greek',
        'examples': ['Pentecost', 'pentecostalism'],
        'letter': 'p'
    }, {
        'roots': ['peper-'],
        'meaning': 'pepper',
        'originLanguage': 'Greek',
        'examples': ['paprika', 'pepper'],
        'letter': 'p'
    }, {
        'roots': ['pepon-'],
        'meaning': 'ripe',
        'originLanguage': 'Greek',
        'examples': ['pumpkin'],
        'letter': 'p'
    }, {
        'roots': ['pept-'],
        'meaning': 'digest',
        'originLanguage': 'Greek',
        'examples': ['dipeptide', 'dyspepsia', 'dyspeptic', 'eupepsia', 'eupeptic', 'monopeptide', 'oligopeptide', 'pentapeptide', 'pepsin', 'peptic', 'peptide', 'peptone', 'polypeptide', 'tetrapeptide', 'tripeptide'],
        'letter': 'p'
    }, {
        'roots': ['per-'],
        'meaning': 'wallet',
        'originLanguage': 'Greek',
        'examples': ['peridium'],
        'letter': 'p'
    }, {
        'roots': ['per-', 'pel-'],
        'meaning': 'thoroughly, through',
        'originLanguage': 'Latin',
        'examples': ['pellucid', 'perfection', 'permeate', 'pernicious', 'persistence', 'peruse', 'pervade'],
        'letter': 'p'
    }, {
        'roots': ['peran-'],
        'meaning': 'across, beyond',
        'originLanguage': 'Greek',
        'examples': ['Perates'],
        'letter': 'p'
    }, {
        'roots': ['perdic-'],
        'meaning': 'partridge',
        'originLanguage': 'Greek',
        'examples': ['Melanoperdix', 'partridge'],
        'letter': 'p'
    }, {
        'roots': ['peri-'],
        'meaning': 'around',
        'originLanguage': 'Greek',
        'examples': ['Pericles', 'pericope', 'perigee', 'perihelion', 'perimeter', 'period', 'periphery', 'periscope'],
        'letter': 'p'
    }, {
        'roots': ['persic-'],
        'meaning': 'peach',
        'originLanguage': 'Greek',
        'examples': [''],
        'letter': 'p'
    }, {
        'roots': ['pessim-'],
        'meaning': 'worst',
        'originLanguage': 'Latin',
        'examples': ['pessimal'],
        'letter': 'p'
    }, {
        'roots': ['pet-'],
        'meaning': 'strive toward',
        'originLanguage': 'Latin',
        'examples': ['appetite', 'compete', 'competition', 'impetus', 'petition', 'petulant', 'propitiate', 'repeat', 'repetition'],
        'letter': 'p'
    }, {
        'roots': ['petr-'],
        'meaning': 'rock',
        'originLanguage': 'Greek',
        'examples': ['epipetric', 'petroglyph', 'petrographic', 'petrography', 'petrology', 'petrosomatoglyph'],
        'letter': 'p'
    }, {
        'roots': ['phae-', 'phe-'],
        'meaning': 'dark',
        'originLanguage': 'Greek',
        'examples': ['phaeohyphomycosis', 'phaeomelanin', 'pheochrome', 'pheochromocytoma'],
        'letter': 'p'
    }, {
        'roots': ['phag-'],
        'meaning': 'eat',
        'originLanguage': 'Greek',
        'examples': ['autophagosome', 'autophagy', 'bacteriophage', 'dysphagia', 'esophagitis', 'geophagia', 'hematophagy', 'macrophage', 'odynophagia', 'phagocyte', 'phagocytosis', 'phagolysosome', 'phagophilia', 'phagophobia', 'phagosome', 'phagy', 'polyphagia', 'pseudodysphagia', 'sarcophagus'],
        'letter': 'p'
    }, {
        'roots': ['phalang-'],
        'meaning': 'close formation of troops, finger bones',
        'originLanguage': 'Greek',
        'examples': ['aphalangia', 'phalanges', 'phalanx'],
        'letter': 'p'
    }, {
        'roots': ['phalar-'],
        'meaning': 'having a patch of white',
        'originLanguage': 'Greek',
        'examples': ['phalarope'],
        'letter': 'p'
    }, {
        'roots': ['pharmac-'],
        'meaning': 'drug, medicine',
        'originLanguage': 'Greek',
        'examples': ['alexipharmic', 'pharmaceutics', 'pharmacodynamics', 'pharmacogenetics', 'pharmacogenomic', 'pharmacokinetics', 'pharmacology', 'pharmacophobia', 'pharmacy'],
        'letter': 'p'
    }, {
        'roots': ['phan-', 'phen-'],
        'meaning': 'to show, visible',
        'originLanguage': 'Greek',
        'examples': ['diaphanous', 'emphasis', 'epiphany', 'fantasy', 'phanerozoic', 'phantasm', 'phantom', 'phase', 'phene', 'phenetic', 'phenology', 'phenomenon', 'phenotype', 'photic', 'prophase', 'sycophant', 'telophase', 'theophany', 'tryptophan'],
        'letter': 'p'
    }, {
        'roots': ['pheb-', 'phob-'],
        'meaning': 'fear',
        'originLanguage': 'Greek',
        'examples': ['autophobia', 'hydrophobia', 'panphobia', 'phobophobia'],
        'letter': 'p'
    }, {
        'roots': ['pher-', 'phor-'],
        'meaning': 'bear, carry',
        'originLanguage': 'Greek',
        'examples': ['adiaphora', 'adiaphorism', 'anaphor', 'metaphor', 'pheromone', 'phoresis', 'phoresy', 'phosphor', 'prosphora', 'pyrophoric'],
        'letter': 'p'
    }, {
        'roots': ['pheug-', 'phyg-'],
        'meaning': 'flee',
        'originLanguage': 'Greek',
        'examples': ['apophyge', 'hypophyge'],
        'letter': 'p'
    }, {
        'roots': ['phil-, -phile'],
        'meaning': 'love, friendship',
        'originLanguage': 'Greek',
        'examples': ['bibliophile', 'heterophil', 'hydrophile', 'paraphilia', 'philanthropy', 'philharmonic', 'philophobia', 'philosophy', 'philter', 'philtre', 'philtrum'],
        'letter': 'p'
    }, {
        'roots': ['phim-'],
        'meaning': 'muzzle',
        'originLanguage': 'Greek',
        'examples': ['paraphimosis', 'phimosis', 'phimotic'],
        'letter': 'p'
    }, {
        'roots': ['phleb-'],
        'meaning': 'vein',
        'originLanguage': 'Greek',
        'examples': ['phlebitis', 'phlebography', 'phlebosclerosis', 'phlebotomist', 'phlebotomize', 'phlebotomy', 'thrombophlebitis'],
        'letter': 'p'
    }, {
        'roots': ['phleg-', 'phlog-'],
        'meaning': 'burn, heat, inflammation',
        'originLanguage': 'Greek',
        'examples': ['phlegm', 'phlegmasia', 'phlegmatic', 'phlegmon', 'phlegmonous', 'phlogistic', 'phlogiston', 'Phlox'],
        'letter': 'p'
    }, {
        'roots': ['phloe-'],
        'meaning': 'tree bark',
        'originLanguage': 'Greek',
        'examples': ['hypophloeodic', 'phlobaphene', 'phloem', 'phloeophagy'],
        'letter': 'p'
    }, {
        'roots': ['phob-'],
        'meaning': 'fear',
        'originLanguage': 'Greek',
        'examples': ['acrophobia', 'arachnophobia', 'claustrophobia', 'ergophobia', 'homophobia', 'hydrophobia', 'zeusophobia'],
        'letter': 'p'
    }, {
        'roots': ['phon-'],
        'meaning': 'sound',
        'originLanguage': 'Greek',
        'examples': ['acrophonic', 'acrophony', 'allophone', 'antiphon', 'antiphony', 'aphonia', 'aphonic', 'apophony', 'archiphoneme', 'cacophony', 'diaphony', 'diplophonia', 'dysphonia', 'euphonic', 'euphonious', 'euphonize', 'euphony', 'heterophonic', 'heterophony', 'homophone', 'homophonous', 'homophony', 'hypophonesis', 'ideophone', 'idiophone', 'isophone', 'logophonetic', 'megaphone', 'microphone', 'misophonia', 'monophonic', 'monophony', 'morphophonology', 'phonaesthesia', 'phonaesthetics', 'phone', 'phonemic', 'phonesthemic', 'phonetic', 'phonetics', 'phonics', 'phonogram', 'phonograph', 'phonology', 'phonophobia', 'phonosemantics', 'phonotactics', 'polyphonic', 'polyphony', 'stereophonic', 'symphonic', 'symphony', 'telephonic', 'telephony'],
        'letter': 'p'
    }, {
        'roots': ['phos-', 'phot-'],
        'meaning': 'light',
        'originLanguage': 'Greek',
        'examples': ['cataphote', 'phosphor', 'phosphorus', 'photic', 'photo', 'photoelectric', 'photogenic', 'photograph', 'photosynthesis', 'phototaxis', 'phototherapy', 'phototroph', 'telephoto'],
        'letter': 'p'
    }, {
        'roots': ['phrag-'],
        'meaning': 'fence',
        'originLanguage': 'Greek',
        'examples': ['diaphragm'],
        'letter': 'p'
    }, {
        'roots': ['phren-', 'phron-'],
        'meaning': 'mind',
        'originLanguage': 'Greek',
        'examples': ['euneirophrenia', 'euphrasy', 'Euphrosyne', 'frantic', 'frenetic', 'frenzy', 'oneirophrenia', 'phrenetic', '-phrenia', 'phrenic', 'phrenitis', 'phrenology', 'phronema', 'phronesis', 'phronetic', 'schizophrenia', 'sophrosyne'],
        'letter': 'p'
    }, {
        'roots': ['phryn-'],
        'meaning': 'toad, toad-like',
        'originLanguage': 'Greek',
        'examples': ['Phrynobatrachus'],
        'letter': 'p'
    }, {
        'roots': ['phtheg-'],
        'meaning': 'utter',
        'originLanguage': 'Greek',
        'examples': ['apophthegm', 'apophthegmatic', 'diphthong', 'diphthongize', 'monophthong', 'monophthongize'],
        'letter': 'p'
    }, {
        'roots': ['phyc-'],
        'meaning': 'seaweed',
        'originLanguage': 'Greek',
        'examples': ['phycology', 'Phycomyces', 'schizophyceous'],
        'letter': 'p'
    }, {
        'roots': ['phyl-'],
        'meaning': 'tribe',
        'originLanguage': 'Greek',
        'examples': ['phylogenetics', 'phylum'],
        'letter': 'p'
    }, {
        'roots': ['phyll-'],
        'meaning': 'leaf',
        'originLanguage': 'Greek',
        'examples': ['chlorophyll', 'phyllotaxis'],
        'letter': 'p'
    }, {
        'roots': ['phys-'],
        'meaning': 'bladder',
        'originLanguage': 'Greek',
        'examples': ['physogastric', 'physostomous', 'Triplophysa'],
        'letter': 'p'
    }, {
        'roots': ['physi-'],
        'meaning': 'nature',
        'originLanguage': 'Greek',
        'examples': ['physics', 'physician'],
        'letter': 'p'
    }, {
        'roots': ['physalid-'],
        'meaning': 'bladder',
        'originLanguage': 'Greek',
        'examples': ['physalis'],
        'letter': 'p'
    }, {
        'roots': ['phyt-'],
        'meaning': 'plant',
        'originLanguage': 'Greek',
        'examples': ['archaeophyte', 'autophyte', 'bryophyte', 'dermatophyte', 'neophyte', 'phytoplankton'],
        'letter': 'p'
    }, {
        'roots': ['pi-'],
        'meaning': 'kind, devout, pity',
        'originLanguage': 'Latin',
        'examples': ['expiate', 'impious', 'piety', 'pious', 'pity'],
        'letter': 'p'
    }, {
        'roots': ['pic-'],
        'meaning': 'pitch',
        'originLanguage': 'Latin',
        'examples': ['piceous'],
        'letter': 'p'
    }, {
        'roots': ['piez-'],
        'meaning': 'squeeze',
        'originLanguage': 'Greek',
        'examples': ['isopiestic', 'piezochromism', 'piezoelectric', 'piezometer'],
        'letter': 'p'
    }, {
        'roots': ['pil-'],
        'meaning': 'hair',
        'originLanguage': 'Latin',
        'examples': ['depilatory', 'epilator'],
        'letter': 'p'
    }, {
        'roots': ['pil-'],
        'meaning': 'pillar, ball',
        'originLanguage': 'Latin',
        'examples': ['pile', 'pill', 'pillar', 'pillory'],
        'letter': 'p'
    }, {
        'roots': ['pin-'],
        'meaning': 'drink',
        'originLanguage': 'Greek',
        'examples': ['pinocytosis'],
        'letter': 'p'
    }, {
        'roots': ['pin-'],
        'meaning': 'pine',
        'originLanguage': 'Latin',
        'examples': ['pineal gland'],
        'letter': 'p'
    }, {
        'roots': ['ping-', 'pict-'],
        'meaning': 'paint',
        'originLanguage': 'Latin',
        'examples': ['depiction', 'picture', 'pigment'],
        'letter': 'p'
    }, {
        'roots': ['pingu-'],
        'meaning': 'fat',
        'originLanguage': 'Latin',
        'examples': ['Pinguicula', 'pinguitude'],
        'letter': 'p'
    }, {
        'roots': ['pir-'],
        'meaning': 'try',
        'originLanguage': 'Greek',
        'examples': ['antipiracy', 'apeirogon', 'apeirohedron', 'piracy', 'pirate', 'piratic'],
        'letter': 'p'
    }, {
        'roots': ['pir-'],
        'meaning': 'pear',
        'originLanguage': 'Latin',
        'examples': ['piriformis muscle'],
        'letter': 'p'
    }, {
        'roots': ['pisc-'],
        'meaning': 'fish',
        'originLanguage': 'Latin',
        'examples': ['Pisces', 'piscivore'],
        'letter': 'p'
    }, {
        'roots': ['pis-'],
        'meaning': 'pea',
        'originLanguage': 'Greek',
        'examples': ['pisoid', 'pisolite'],
        'letter': 'p'
    }, {
        'roots': ['pithec-'],
        'meaning': 'ape, monkey',
        'originLanguage': 'Greek',
        'examples': ['australopithecine', 'Australopithecus', 'caenopithecine'],
        'letter': 'p'
    }, {
        'roots': ['plac-'],
        'meaning': 'plain, plate, tablet',
        'originLanguage': 'Greek',
        'examples': ['Aplacophora', 'placenta', 'placode'],
        'letter': 'p'
    }, {
        'roots': ['plac-'],
        'meaning': 'calm',
        'originLanguage': 'Latin',
        'examples': ['implacable', 'placable', 'placate', 'please', 'supple'],
        'letter': 'p'
    }, {
        'roots': ['plac-', 'plea-'],
        'meaning': 'please',
        'originLanguage': 'Latin',
        'examples': ['complacent', 'complaisant', 'displease', 'placebo', 'placid', 'plea', 'please', 'pleasure'],
        'letter': 'p'
    }, {
        'roots': ['plag-'],
        'meaning': 'oblique',
        'originLanguage': 'Greek',
        'examples': ['plage', 'plagiocephaly', 'plagioclase', 'plagiotropic', 'playa'],
        'letter': 'p'
    }, {
        'roots': ['plan-'],
        'meaning': 'wander',
        'originLanguage': 'Greek',
        'examples': ['aplanetic', 'aplanogamete', 'aplanospore', 'exoplanet', 'planet', 'planetoid', 'planoblast', 'planogamete', 'planospore', 'protoplanet'],
        'letter': 'p'
    }, {
        'roots': ['plan-'],
        'meaning': 'flat',
        'originLanguage': 'Latin',
        'examples': ['applanate', 'applanation', 'aquaplane', 'complanar', 'complanate', 'coplanar', 'coplanarity', 'deplanate', 'deplane', 'emplane', 'esplanade', 'explain', 'explanation', 'explanatory', 'peneplain', 'pianissimo', 'piano', 'pianoforte', 'plain', 'plaintext', 'plan', 'planar', 'planarian', 'planary', 'planate', 'planation', 'plane', 'planification', 'planiform', 'planish', 'planula', 'planular', 'planulate'],
        'letter': 'p'
    }, {
        'roots': ['plang-', 'planct-'],
        'meaning': 'strike, beat; lament, mourn',
        'originLanguage': 'Latin',
        'examples': ['plangent'],
        'letter': 'p'
    }, {
        'roots': ['plas-'],
        'meaning': 'mould',
        'originLanguage': 'Greek',
        'examples': ['plasma', 'plastic', 'plastique', 'plastochron', 'plastromancy', 'plastron', 'prosoplasia', 'protoplasm', 'pseudoplastic', 'symplast'],
        'letter': 'p'
    }, {
        'roots': ['plat-'],
        'meaning': 'flat, broad',
        'originLanguage': 'Greek',
        'examples': ['piazza', 'place', 'plaice', 'plateau', 'platitude', 'platyhelminth', 'platypus', 'Platyrrhini', 'platysma', 'Platyzoa', 'plaza'],
        'letter': 'p'
    }, {
        'roots': ['plaud-', '-plod-', 'plaus-', '-plos-'],
        'meaning': 'approve, clap',
        'originLanguage': 'Latin',
        'examples': ['applaud', 'applause', 'explode', 'explosion', 'implode', 'plaudits', 'plausible'],
        'letter': 'p'
    }, {
        'roots': ['ple-'],
        'meaning': 'fill, full',
        'originLanguage': 'Greek',
        'examples': ['pleroma', 'plethodontid', 'plethora', 'plethoric', 'plethysm', 'plethysmograph', 'plethysmometry'],
        'letter': 'p'
    }, {
        'roots': ['ple-'],
        'meaning': 'sail, swim',
        'originLanguage': 'Greek',
        'examples': ['pleon', 'pleopod', 'pleuston'],
        'letter': 'p'
    }, {
        'roots': ['ple-', 'plet-'],
        'meaning': 'fill',
        'originLanguage': 'Latin',
        'examples': ['complement', 'complete', 'deplete', 'implement', 'replete', 'suppletion', 'supply'],
        'letter': 'p'
    }, {
        'roots': ['pleb-'],
        'meaning': 'people',
        'originLanguage': 'Latin',
        'examples': ['plebeian', 'plebs'],
        'letter': 'p'
    }, {
        'roots': ['plec-', 'ploc-'],
        'meaning': 'plait, interweave',
        'originLanguage': 'Greek',
        'examples': ['plectics', 'plexogenic', 'ploce', 'symplectic', 'symplectomorphism', 'symploce'],
        'letter': 'p'
    }, {
        'roots': ['plect-', 'plex-'],
        'meaning': 'plait',
        'originLanguage': 'Latin',
        'examples': ['perplex'],
        'letter': 'p'
    }, {
        'roots': ['pleg-'],
        'meaning': 'strike',
        'originLanguage': 'Greek',
        'examples': ['apoplectic', 'apoplexy', 'cataplectic', 'cataplexy', 'hemiplegia', 'monoplegia', 'paraplegia', 'plectrum', 'pleximeter', 'tetraplegia'],
        'letter': 'p'
    }, {
        'roots': ['plen-'],
        'meaning': 'full',
        'originLanguage': 'Latin',
        'examples': ['plenary', 'plenitude', 'plenty', 'replenish'],
        'letter': 'p'
    }, {
        'roots': ['plesi-'],
        'meaning': 'near',
        'originLanguage': 'Greek',
        'examples': ['plesiosaur'],
        'letter': 'p'
    }, {
        'roots': ['pleur-'],
        'meaning': 'rib, side',
        'originLanguage': 'Greek',
        'examples': ['metapleural', 'pleura', 'pleurisy', 'pleuritis', 'pleurodynia', 'pleuron'],
        'letter': 'p'
    }, {
        'roots': ['plic-'],
        'meaning': 'fold',
        'originLanguage': 'Latin',
        'examples': ['appliance', 'applicability', 'applicable', 'applicant', 'applicate', 'application', 'applicative', 'applicator', 'applicatory', 'appliqué', 'apply', 'centuplicate', 'centuplication', 'complicacy', 'complicant', 'complicate', 'complication', 'complice', 'complicity', 'conduplicate', 'conduplication', 'duplication', 'explicate', 'explicit', 'implicate', 'implicit', 'imply', 'plait', 'pleat', 'pliable', 'pliant', 'plight', 'ply', 'replica', 'replicate', 'replication', 'replicative', 'replicator', 'reply', 'splay', 'subduplicate', 'supplicant', 'supplicate', 'supplication', 'triplicate', 'triplicity'],
        'letter': 'p'
    }, {
        'roots': ['plinth-'],
        'meaning': 'brick',
        'originLanguage': 'Greek',
        'examples': ['plinth', 'Plinthograptis'],
        'letter': 'p'
    }, {
        'roots': ['plor-'],
        'meaning': 'cry out, complain',
        'originLanguage': 'Latin',
        'examples': ['deplorable', 'deploration', 'deplore', 'exploration', 'exploratory', 'explore', 'imploration', 'imploratory', 'implore'],
        'letter': 'p'
    }, {
        'roots': ['plu-'],
        'meaning': 'rain',
        'originLanguage': 'Latin',
        'examples': ['pluvial'],
        'letter': 'p'
    }, {
        'roots': ['plum-'],
        'meaning': 'feather',
        'originLanguage': 'Latin',
        'examples': ['plumage', 'plumate'],
        'letter': 'p'
    }, {
        'roots': ['plumb-'],
        'meaning': 'lead',
        'originLanguage': 'Latin',
        'examples': ['plumber'],
        'letter': 'p'
    }, {
        'roots': ['plur-', 'plus-'],
        'meaning': 'more',
        'originLanguage': 'Latin',
        'examples': ['double', 'plural', 'pluralist', 'plus', 'quadruple', 'surplus', 'triple'],
        'letter': 'p'
    }, {
        'roots': ['plurim-'],
        'meaning': 'most',
        'originLanguage': 'Latin',
        'examples': ['plurimal'],
        'letter': 'p'
    }, {
        'roots': ['plut-'],
        'meaning': 'wealth',
        'originLanguage': 'Greek',
        'examples': ['ploutonion', 'plutarchy', 'plutocracy', 'plutocrat', 'plutolatry', 'plutomania', 'plutonomics', 'Plutus'],
        'letter': 'p'
    }, {
        'roots': ['pne-'],
        'meaning': 'blow, breathe, lung',
        'originLanguage': 'Greek',
        'examples': ['anapnograph', 'anapnoic', 'apnea', 'apnoea', 'dyspnoea', 'pleuropneumonia', 'pneumatic', 'pneumatology', 'pneumonia', 'pneumonic', 'pneumotaxic'],
        'letter': 'p'
    }, {
        'roots': ['pnig-', 'pnict-'],
        'meaning': 'choke',
        'originLanguage': 'Greek',
        'examples': ['pnictide', 'pnictogen'],
        'letter': 'p'
    }, {
        'roots': ['po-', 'pin-'],
        'meaning': 'drink',
        'originLanguage': 'Greek',
        'examples': ['pinocytosis', 'pinosome', 'symposium'],
        'letter': 'p'
    }, {
        'roots': ['pod-'],
        'meaning': 'foot',
        'originLanguage': 'Greek',
        'examples': ['amphipod', 'antipode', 'decapod', 'podiatry', 'podium', 'podomancy', 'podomere', 'podopaediatric', 'polyp', 'polyposis', 'sympodium', 'tetrapod', 'tripod'],
        'letter': 'p'
    }, {
        'roots': ['pogon-'],
        'meaning': 'beard',
        'originLanguage': 'Greek',
        'examples': ['pogonia', 'pogoniasis', 'pogonology', 'pogonophobia', 'pogonotrophy', 'Triplopogon'],
        'letter': 'p'
    }, {
        'roots': ['poie-', 'poe-'],
        'meaning': 'make',
        'originLanguage': 'Greek',
        'examples': ['allopoiesis', 'autopoiesis', 'onomatopoeia', 'piyyut', 'poem', 'poesy', 'poet', 'poetaster', 'poetic', 'poiesis'],
        'letter': 'p'
    }, {
        'roots': ['pol-'],
        'meaning': 'pole',
        'originLanguage': 'Greek',
        'examples': ['dipole', 'polar'],
        'letter': 'p'
    }, {
        'roots': ['pole-'],
        'meaning': 'sell',
        'originLanguage': 'Greek',
        'examples': ['duopoly', 'monopolist', 'monopolize', 'monopoly', 'oligopolist', 'oligopoly'],
        'letter': 'p'
    }, {
        'roots': ['polem-'],
        'meaning': 'war',
        'originLanguage': 'Greek',
        'examples': ['polemarch', 'polemic', 'polemology'],
        'letter': 'p'
    }, {
        'roots': ['poli-'],
        'meaning': 'city',
        'originLanguage': 'Greek',
        'examples': ['acropolis', 'biopolitics', 'cosmopolis', 'cosmopolitan', 'Decapolis', 'ecumenopolis', 'eperopolis', 'geopolitics', 'heptapolis', 'hexapolis', 'megalopolis', 'metropolis', 'pentapolis', 'police', 'policy', 'polis', 'politeia', 'politics', 'polity', 'propolis', 'tetrapolis', 'Tripoli'],
        'letter': 'p'
    }, {
        'roots': ['poli-'],
        'meaning': 'gray, grey',
        'originLanguage': 'Greek',
        'examples': ['poliomyelitis', 'poliosis'],
        'letter': 'p'
    }, {
        'roots': ['poll-'],
        'meaning': 'many',
        'originLanguage': 'Greek',
        'examples': [''],
        'letter': 'p'
    }, {
        'roots': ['pollic-'],
        'meaning': 'thumb',
        'originLanguage': 'Latin',
        'examples': ['pollicate'],
        'letter': 'p'
    }, {
        'roots': ['pollin-'],
        'meaning': 'fine flour',
        'originLanguage': 'Latin',
        'examples': ['pollination'],
        'letter': 'p'
    }, {
        'roots': ['poly-'],
        'meaning': 'many',
        'originLanguage': 'Greek',
        'examples': ['hoi polloi', 'pollakanth', 'polyadic', 'polyandry', 'polygamy', 'polygon', 'polyphase', 'polysaccharide', 'polytheistic'],
        'letter': 'p'
    }, {
        'roots': ['pomph-'],
        'meaning': 'blister',
        'originLanguage': 'Greek',
        'examples': ['podopompholyx', 'pompholyx'],
        'letter': 'p'
    }, {
        'roots': ['pon-', 'posit-'],
        'meaning': 'put',
        'originLanguage': 'Latin',
        'examples': ['apposite', 'apropos', 'component', 'depose', 'deposit', 'exponent', 'expose', 'expound', 'impose', 'impound', 'opponent', 'position', 'positive', 'postpone', 'posture', 'propone', 'proponent', 'proposition', 'propound', 'repose'],
        'letter': 'p'
    }, {
        'roots': ['ponder-'],
        'meaning': 'weight',
        'originLanguage': 'Latin',
        'examples': ['ponder', 'preponderance'],
        'letter': 'p'
    }, {
        'roots': ['pont-'],
        'meaning': 'bridge',
        'originLanguage': 'Latin',
        'examples': ['pontoon'],
        'letter': 'p'
    }, {
        'roots': ['popul-'],
        'meaning': 'people',
        'originLanguage': 'Latin',
        'examples': ['population', 'popular', 'populous'],
        'letter': 'p'
    }, {
        'roots': ['por-'],
        'meaning': 'passage',
        'originLanguage': 'Greek',
        'examples': ['aporetic', 'aporia', 'emporium', 'gonopore', 'ozopore', 'polypore', 'pore', 'porism', 'porismatic'],
        'letter': 'p'
    }, {
        'roots': ['porc-'],
        'meaning': 'pig',
        'originLanguage': 'Latin',
        'examples': ['porcine', 'pork'],
        'letter': 'p'
    }, {
        'roots': ['porn-'],
        'meaning': 'prostitute',
        'originLanguage': 'Greek',
        'examples': ['pornographic', 'pornography'],
        'letter': 'p'
    }, {
        'roots': ['porphyr-'],
        'meaning': 'purple',
        'originLanguage': 'Greek',
        'examples': ['porphyrin', 'porphyritic', 'porphyrophobia', 'porphyry'],
        'letter': 'p'
    }, {
        'roots': ['port-'],
        'meaning': 'carry',
        'originLanguage': 'Latin',
        'examples': ['comportment', 'deport', 'export', 'import', 'port', 'portable', 'portage', 'portal', 'porter', 'portfolio', 'purport', 'rapport', 'report', 'support', 'transport'],
        'letter': 'p'
    }, {
        'roots': ['portion-'],
        'meaning': 'part, share',
        'originLanguage': 'Latin',
        'examples': ['portion', 'proportion'],
        'letter': 'p'
    }, {
        'roots': ['post-'],
        'meaning': 'after, behind',
        'originLanguage': 'Latin',
        'examples': ['posterior', 'posterity', 'postscript'],
        'letter': 'p'
    }, {
        'roots': ['pot-'],
        'meaning': 'power',
        'originLanguage': 'Latin',
        'examples': ['despot', 'impotent', 'possess', 'potent', 'potentate', 'potential', 'power'],
        'letter': 'p'
    }, {
        'roots': ['pot-'],
        'meaning': 'drink',
        'originLanguage': 'Latin',
        'examples': ['potable', 'potion'],
        'letter': 'p'
    }, {
        'roots': ['potam-'],
        'meaning': 'river',
        'originLanguage': 'Greek',
        'examples': ['autopotamic', 'hippopotamus', 'Mesopotamia', 'potamic', 'potamodromous', 'potamology', 'potamophobia', 'potamoplankton'],
        'letter': 'p'
    }, {
        'roots': ['prag-'],
        'meaning': 'do',
        'originLanguage': 'Greek',
        'examples': ['apraxia', 'dyspraxia', 'parapraxis', 'practic', 'practice', 'pragma', 'pragmatic', 'pragmatism', 'pragmatist', 'praxis'],
        'letter': 'p'
    }, {
        'roots': ['pras-'],
        'meaning': 'leek',
        'originLanguage': 'Greek',
        'examples': ['chrysoprase', 'prasinous'],
        'letter': 'p'
    }, {
        'roots': ['prat-'],
        'meaning': 'meadow',
        'originLanguage': 'Latin',
        'examples': [''],
        'letter': 'p'
    }, {
        'roots': ['prav-'],
        'meaning': 'crooked',
        'originLanguage': 'Latin',
        'examples': ['depravity'],
        'letter': 'p'
    }, {
        'roots': ['pre-'],
        'meaning': 'before',
        'originLanguage': 'Latin',
        'examples': ['previous'],
        'letter': 'p'
    }, {
        'roots': ['prec-'],
        'meaning': 'pray',
        'originLanguage': 'Latin',
        'examples': ['deprecation', 'imprecation', 'pray', 'prayer', 'precarious'],
        'letter': 'p'
    }, {
        'roots': ['pred-'],
        'meaning': 'prey',
        'originLanguage': 'Latin',
        'examples': ['depredate', 'predation', 'predator', 'predatory', 'prey'],
        'letter': 'p'
    }, {
        'roots': ['prehend-', 'prend-', 'prehens-'],
        'meaning': 'grasp',
        'originLanguage': 'Latin',
        'examples': ['apprehend', 'comprehend', 'comprehensive', 'enterprise', 'prehensility', 'prehension', 'prey', 'prison', 'prize', 'reprehend', 'surprise'],
        'letter': 'p'
    }, {
        'roots': ['prem-', '-prim-', 'press-'],
        'meaning': 'press',
        'originLanguage': 'Latin',
        'examples': ['compress', 'compression', 'compressor', 'depress', 'depression', 'depressive', 'espresso', 'express', 'expression', 'expressive', 'impress', 'impression', 'impressive', 'imprimatur', 'imprint', 'oppress', 'oppression', 'oppressive', 'oppressor', 'press', 'pressure', 'print', 'repress', 'repression', 'repressive', 'reprimand', 'suppress', 'suppression', 'suppressor'],
        'letter': 'p'
    }, {
        'roots': ['presby-'],
        'meaning': 'old',
        'originLanguage': 'Greek',
        'examples': ['archpriest', 'presbyter', 'Presbyterianism', 'presbyterium', 'presbytery', 'priest', 'protopresbyter'],
        'letter': 'p'
    }, {
        'roots': ['preter-'],
        'meaning': 'past',
        'originLanguage': 'Latin',
        'examples': ['preterite', 'pretermission'],
        'letter': 'p'
    }, {
        'roots': ['preti-'],
        'meaning': 'price',
        'originLanguage': 'Latin',
        'examples': [''],
        'letter': 'p'
    }, {
        'roots': ['pri-'],
        'meaning': 'saw',
        'originLanguage': 'Greek',
        'examples': ['prion'],
        'letter': 'p'
    }, {
        'roots': ['priap-'],
        'meaning': '',
        'originLanguage': 'Greek',
        'examples': ['priapism', 'Priapus'],
        'letter': 'p'
    }, {
        'roots': ['prim-'],
        'meaning': 'first',
        'originLanguage': 'Latin',
        'examples': ['coprime', 'nonprime', 'prima facie', 'primacy', 'primal', 'primality', 'primary', 'primate', 'prime', 'primer', 'primeval', 'primine', 'primitive', 'primogeniture', 'primordial', 'primrose', 'Primula', 'semiprime', 'subprimal', 'subprime'],
        'letter': 'p'
    }, {
        'roots': ['prior-'],
        'meaning': 'former',
        'originLanguage': 'Latin',
        'examples': ['prior', 'priority', 'priory', 'pristine', 'repristinate', 'subprior'],
        'letter': 'p'
    }, {
        'roots': ['prism-'],
        'meaning': 'to saw, something sawed',
        'originLanguage': 'Greek',
        'examples': ['antiprism', 'prism', 'prismatic', 'prismatoid'],
        'letter': 'p'
    }, {
        'roots': ['priv-'],
        'meaning': 'own',
        'originLanguage': 'Latin',
        'examples': ['deprivation', 'deprive', 'privacy', 'private', 'privateer', 'privation', 'privative', 'privilege', 'privity', 'privy', 'semiprivate'],
        'letter': 'p'
    }, {
        'roots': ['pro-'],
        'meaning': 'before, in front of',
        'originLanguage': 'Greek',
        'examples': ['prologue', 'prostate', 'prow'],
        'letter': 'p'
    }, {
        'roots': ['pro-'],
        'meaning': 'for, forward',
        'originLanguage': 'Latin',
        'examples': ['procrastinate', 'propel', 'propulsion'],
        'letter': 'p'
    }, {
        'roots': ['prob-'],
        'meaning': 'worthy, good',
        'originLanguage': 'Latin',
        'examples': ['approbation', 'approve', 'disapprobation', 'opprobrium', 'probable', 'probation', 'probe', 'probity', 'proof', 'prove', 'reprobate', 'reprove'],
        'letter': 'p'
    }, {
        'roots': ['proct-'],
        'meaning': 'anus',
        'originLanguage': 'Greek',
        'examples': ['Ectoprocta', 'Entoprocta', 'epiproct', 'hypoproct', 'paraproct', 'periproct', 'proctalgia', 'proctology'],
        'letter': 'p'
    }, {
        'roots': ['prodig-'],
        'meaning': 'waste',
        'originLanguage': 'Latin',
        'examples': ['prodigal', 'prodigality'],
        'letter': 'p'
    }, {
        'roots': ['prodig-'],
        'meaning': 'prodigy',
        'originLanguage': 'Latin',
        'examples': ['prodigious', 'prodigy'],
        'letter': 'p'
    }, {
        'roots': ['propri-'],
        'meaning': 'property; one\'s own',
        'originLanguage': 'Latin',
        'examples': ['appropriate', 'proper', 'property', 'proprietary', 'proprietor', 'propriety'],
        'letter': 'p'
    }, {
        'roots': ['pros-'],
        'meaning': 'forth, forward',
        'originLanguage': 'Greek',
        'examples': ['prosenchyma', 'prosophobia', 'prosthesis', 'prosthion'],
        'letter': 'p'
    }, {
        'roots': ['prosop-'],
        'meaning': 'face',
        'originLanguage': 'Greek',
        'examples': ['aprosopia', 'diprosopus', 'prosopography', 'prosopopoeia', 'prosopospasm'],
        'letter': 'p'
    }, {
        'roots': ['prot-'],
        'meaning': 'first',
        'originLanguage': 'Greek',
        'examples': ['amphiprotic', 'antiproton', 'protagonist', 'protanomaly', 'protanopia', 'protein', 'protist', 'protocol', 'proton', 'protoplasm', 'prototype', 'Protozoa'],
        'letter': 'p'
    }, {
        'roots': ['proter-'],
        'meaning': 'former',
        'originLanguage': 'Greek',
        'examples': ['Proterozoic'],
        'letter': 'p'
    }, {
        'roots': ['proxim-'],
        'meaning': 'nearest',
        'originLanguage': 'Latin',
        'examples': ['approximate', 'proximity'],
        'letter': 'p'
    }, {
        'roots': ['prun-'],
        'meaning': 'plum',
        'originLanguage': 'Latin',
        'examples': ['prune'],
        'letter': 'p'
    }, {
        'roots': ['psa-'],
        'meaning': 'rub',
        'originLanguage': 'Greek',
        'examples': ['palimpsest'],
        'letter': 'p'
    }, {
        'roots': ['psall-'],
        'meaning': 'pluck',
        'originLanguage': 'Greek',
        'examples': ['psalm', 'psalmodicon', 'psalmody', 'psalter', 'psaltery', 'psaltikon'],
        'letter': 'p'
    }, {
        'roots': ['psamath-'],
        'meaning': 'sand',
        'originLanguage': 'Greek',
        'examples': [''],
        'letter': 'p'
    }, {
        'roots': ['psamm-'],
        'meaning': 'sand',
        'originLanguage': 'Greek',
        'examples': ['psammite', 'psammitic', 'psammoma', 'psammophile', 'Psammophis', 'psammophyte', 'psammosere', 'psammous'],
        'letter': 'p'
    }, {
        'roots': ['pseph-'],
        'meaning': 'pebble',
        'originLanguage': 'Greek',
        'examples': ['isopsephy', 'psephite', 'psephitic', 'psephocracy', 'psephology'],
        'letter': 'p'
    }, {
        'roots': ['pseud-'],
        'meaning': 'false',
        'originLanguage': 'Greek',
        'examples': ['pseudonym'],
        'letter': 'p'
    }, {
        'roots': ['pseud-'],
        'meaning': 'false',
        'originLanguage': 'Greek',
        'examples': ['pseudonym'],
        'letter': 'p'
    }, {
        'roots': ['psil-'],
        'meaning': 'bare',
        'originLanguage': 'Greek',
        'examples': ['epsilon', 'psilanthropism', 'psilanthropy', 'psilocybin', 'psilosis', 'psilotic', 'upsilon'],
        'letter': 'p'
    }, {
        'roots': ['psithyr-'],
        'meaning': 'whisper',
        'originLanguage': 'Greek',
        'examples': ['Psithyrisma'],
        'letter': 'p'
    }, {
        'roots': ['psittac-'],
        'meaning': 'parrot',
        'originLanguage': 'Greek',
        'examples': ['psittacine', 'psittacism', 'psittacosis'],
        'letter': 'p'
    }, {
        'roots': ['psoph-'],
        'meaning': 'noise',
        'originLanguage': 'Greek',
        'examples': ['Psophiidae', 'Psophocichla', 'psophometer', 'psophometric'],
        'letter': 'p'
    }, {
        'roots': ['psor-'],
        'meaning': 'itch',
        'originLanguage': 'Greek',
        'examples': ['psora', 'psoriasis', 'psoric', 'psorosis'],
        'letter': 'p'
    }, {
        'roots': ['psych-'],
        'meaning': 'mind',
        'originLanguage': 'Greek',
        'examples': ['hylopsychism', 'panpsychism', 'psyche', 'psychiatry', 'psychic', 'psychoanalysis', 'psychologist', 'psychology', 'psychopathic', 'psychopathy', 'psychopomp', 'psychosis', 'psychotherapy', 'psychotic', 'psychoticism'],
        'letter': 'p'
    }, {
        'roots': ['psychr-'],
        'meaning': 'cold',
        'originLanguage': 'Greek',
        'examples': ['psychroalgia', 'psychrometer', 'psychrophile', 'psychrophilic', 'psychrophily'],
        'letter': 'p'
    }, {
        'roots': ['pter-'],
        'meaning': 'wing',
        'originLanguage': 'Greek',
        'examples': ['apterous', 'apterygote', 'archaeopteryx', 'brachypterous', 'brachyptery', 'Chiroptera', 'chiropterologist', 'Endopterygota', 'exopterygote', 'helicopter', 'hemipterous', 'heteropterous', 'homopterous', 'Neoptera', 'peripteros', 'pterodactyl', 'pteron', 'pteropod', 'pterosaur', 'pterostigma', 'pterygote', 'tetrapterous'],
        'letter': 'p'
    }, {
        'roots': ['pterid-'],
        'meaning': 'fern',
        'originLanguage': 'Greek',
        'examples': ['pteridology', 'pteridophyte', 'pteridosperm'],
        'letter': 'p'
    }, {
        'roots': ['pto-'],
        'meaning': 'fall',
        'originLanguage': 'Greek',
        'examples': ['anaptotic', 'asymptomatic', 'apoptosis', 'peripeteia', 'peripety', 'polyptoton', 'proptosis', 'proptotic', 'ptomaine', 'ptosis', 'ptotic', 'symptom', 'symptomatic', 'symptosis'],
        'letter': 'p'
    }, {
        'roots': ['ptoch-'],
        'meaning': 'poor',
        'originLanguage': 'Greek',
        'examples': ['ptochocracy', 'ptochology'],
        'letter': 'p'
    }, {
        'roots': ['pty-'],
        'meaning': 'spit',
        'originLanguage': 'Greek',
        'examples': ['hemoptysis', 'ptyalin', 'pyoptysis'],
        'letter': 'p'
    }, {
        'roots': ['ptych-'],
        'meaning': 'fold, layer',
        'originLanguage': 'Greek',
        'examples': ['anaptyctic', 'anaptyxis', 'diptych', 'heptaptych', 'hexaptych', 'octaptych', 'pentaptych', 'polyptych', 'tetraptych', 'triptych'],
        'letter': 'p'
    }, {
        'roots': ['pub-'],
        'meaning': 'sexually mature',
        'originLanguage': 'Latin',
        'examples': ['pubescent', 'pubic'],
        'letter': 'p'
    }, {
        'roots': ['public-'],
        'meaning': 'public',
        'originLanguage': 'Latin',
        'examples': ['publication', 'publicity'],
        'letter': 'p'
    }, {
        'roots': ['pude-'],
        'meaning': 'shame',
        'originLanguage': 'Latin',
        'examples': ['impudent', 'pudendum', 'repudiate'],
        'letter': 'p'
    }, {
        'roots': ['pug-', 'pugn-'],
        'meaning': 'fight',
        'originLanguage': 'Latin',
        'examples': ['impugn', 'pugilism', 'pugnacious', 'repugnant'],
        'letter': 'p'
    }, {
        'roots': ['pulchr-'],
        'meaning': 'beautiful',
        'originLanguage': 'Latin',
        'examples': ['pulchritude'],
        'letter': 'p'
    }, {
        'roots': ['pulmon-'],
        'meaning': 'lung',
        'originLanguage': 'Latin',
        'examples': ['pulmonary'],
        'letter': 'p'
    }, {
        'roots': ['pulver-'],
        'meaning': 'dust',
        'originLanguage': 'Latin',
        'examples': ['pulverize'],
        'letter': 'p'
    }, {
        'roots': ['pung-', 'punct-'],
        'meaning': 'prick',
        'originLanguage': 'Latin',
        'examples': ['acupuncture', 'expunge', 'poignant', 'point', 'punch', 'punctual', 'punctuation', 'puncture', 'pungent'],
        'letter': 'p'
    }, {
        'roots': ['pup-'],
        'meaning': 'doll',
        'originLanguage': 'Latin',
        'examples': ['pupa', 'pupate', 'puppet'],
        'letter': 'p'
    }, {
        'roots': ['pur-'],
        'meaning': 'pure',
        'originLanguage': 'Latin',
        'examples': ['impurity', 'pure', 'puree', 'purge', 'purify', 'purity'],
        'letter': 'p'
    }, {
        'roots': ['purg-'],
        'meaning': 'cleanse',
        'originLanguage': 'Latin',
        'examples': ['expurgate', 'purgatory', 'purge'],
        'letter': 'p'
    }, {
        'roots': ['purpur-'],
        'meaning': 'purple',
        'originLanguage': 'Latin',
        'examples': ['purpurate', 'purpureal'],
        'letter': 'p'
    }, {
        'roots': ['put-'],
        'meaning': 'prune, reckon',
        'originLanguage': 'Latin',
        'examples': ['amputation', 'compute', 'dispute', 'impute', 'putative', 'reputation'],
        'letter': 'p'
    }, {
        'roots': ['py-'],
        'meaning': 'pus',
        'originLanguage': 'Greek',
        'examples': ['empyema', 'pyemia', 'pyemesis', 'pyesis', 'pyocyst', 'pyogenesis', 'pyorrhea', 'pyorrhoea', 'pyosis', 'pyoureter'],
        'letter': 'p'
    }, {
        'roots': ['pyel-'],
        'meaning': 'trough',
        'originLanguage': 'Greek',
        'examples': ['pyelectasis', 'pyelitis', 'pyelogram', 'pyelography', 'pyelonephritis', 'pyeloscopy'],
        'letter': 'p'
    }, {
        'roots': ['pyg-'],
        'meaning': 'rump',
        'originLanguage': 'Greek',
        'examples': ['callipygian', 'pygopagus', 'pygostyle', 'steatopygia'],
        'letter': 'p'
    }, {
        'roots': ['pyl-'],
        'meaning': 'gate',
        'originLanguage': 'Greek',
        'examples': ['apopyle', 'micropyle', 'propylaea', 'prosopyle', 'pylon', 'pyloric', 'pylorus', 'tetrapylon', 'Thermopylae'],
        'letter': 'p'
    }, {
        'roots': ['pyr-'],
        'meaning': 'fire',
        'originLanguage': 'Greek',
        'examples': ['antipyretic', 'Empyreuma', 'pyre', 'pyrite', 'pyroclastic', 'pyrolysis', 'pyromancy', 'pyromania', 'pyromaniac', 'pyrometric', 'pyrophobia', 'pyrophoric', 'pyrosis', 'pyrosome', 'pyrotechnic'],
        'letter': 'p'
    }, {
        'roots': ['pyramid-'],
        'meaning': '',
        'originLanguage': 'Greek',
        'examples': ['dipyramid', 'pyramid', 'pyramidion'],
        'letter': 'p'
    }, {
        'roots': ['pyrrh-'],
        'meaning': 'flame-colored',
        'originLanguage': 'Greek',
        'examples': ['pyrrhic'],
        'letter': 'p'
    }],
    'q': [{
        'roots': ['quadr-'],
        'meaning': 'four',
        'originLanguage': 'Latin',
        'examples': ['quadrangle', 'quadrennial', 'quadriceps', 'quadrifarious', 'quadrifid', 'quadrifolium', 'quadrifrons', 'quadrilateral', 'quadrilingual', 'quadriliteral', 'quadrillion', 'quadrimester', 'quadrinational', 'quadrinodal', 'quadrinomial', 'quadrinominal', 'quadripara', 'quadrireme', 'quadrisection', 'quadrivalent', 'quadrivium', 'quadruped', 'quadruple', 'quadruplet', 'quadruplex', 'quadruplicate', 'quatrain', 'quatre', 'quatrefoil'],
        'letter': 'q'
    }, {
        'roots': ['quadragen-'],
        'meaning': 'forty each',
        'originLanguage': 'Latin',
        'examples': ['quadragenarian', 'quadragenary'],
        'letter': 'q'
    }, {
        'roots': ['quadragesim-'],
        'meaning': 'fortieth',
        'originLanguage': 'Latin',
        'examples': ['Quadragesima', 'quadragesimal'],
        'letter': 'q'
    }, {
        'roots': ['quart-'],
        'meaning': 'fourth',
        'originLanguage': 'Latin',
        'examples': ['inquartation', 'interquartile', 'quadroon', 'quart', 'quartal', 'quartan', 'quartary', 'quarte', 'quarter', 'quartermaster', 'quartet', 'quartic', 'quartile', 'quartine', 'quarto', 'semiquartile'],
        'letter': 'q'
    }, {
        'roots': ['quasi-'],
        'meaning': 'as if',
        'originLanguage': 'Latin',
        'examples': ['quasar'],
        'letter': 'q'
    }, {
        'roots': ['quatern-'],
        'meaning': 'four each',
        'originLanguage': 'Latin',
        'examples': ['biquaternion', 'quatern', 'quaternary', 'quaternate', 'quaternion', 'quaternity', 'quire'],
        'letter': 'q'
    }, {
        'roots': ['quati-', '-cuti-', 'quass-', '-cuss-'],
        'meaning': 'shake',
        'originLanguage': 'Latin',
        'examples': ['cassate', 'cassation', 'concussion', 'concussive', 'conquassate', 'decussation', 'discuss', 'discussion', 'discussive', 'discutient', 'excuss', 'excussio', 'excussion', 'fracas', 'percuss', 'percussion', 'percussive', 'percussor', 'quash', 'quassation', 'recussion', 'repercussion', 'rescue', 'squash', 'squassation', 'subconcussive', 'succuss', 'succussation', 'succussion', 'succussive'],
        'letter': 'q'
    }, {
        'roots': ['quer-', '-quir-', 'quesit-', '-quisit-'],
        'meaning': 'search, seek',
        'originLanguage': 'Latin',
        'examples': ['acquest', 'acquire', 'acquiree', 'acquirement', 'acquisite', 'acquisition', 'acquisitive', 'acquisitory', 'conquer', 'conquest', 'corequisite', 'disquisition', 'exquire', 'exquisite', 'inquest', 'inquire', 'inquiry', 'inquisition', 'inquisitive', 'inquisitor', 'inquisitorial', 'inquisitory', 'perquisite', 'perquisition', 'prerequisite', 'quaere', 'quaestor', 'query', 'quest', 'question', 'questionable', 'questionary', 'questionnaire', 'questor', 'reconquer', 'reconquest', 'request', 'require', 'requirement', 'requisite', 'requisition', 'requisitive', 'requisitor', 'requisitory'],
        'letter': 'q'
    }, {
        'roots': ['qui-'],
        'meaning': 'rest',
        'originLanguage': 'Latin',
        'examples': ['acquiesce', 'acquiescence', 'acquiescent', 'acquit', 'acquittal', 'acquittance', 'inquietude', 'quiescence', 'quiescent', 'quiet', 'quietude', 'quietus', 'quit', 'requiem', 'requiescat'],
        'letter': 'q'
    }, {
        'roots': ['quin-'],
        'meaning': 'five each',
        'originLanguage': 'Latin',
        'examples': ['biquinary', 'quinarius', 'quinary', 'quinate'],
        'letter': 'q'
    }, {
        'roots': ['quindecim-'],
        'meaning': 'fifteenth',
        'originLanguage': 'Latin',
        'examples': ['quindecimal'],
        'letter': 'q'
    }, {
        'roots': ['quinden-'],
        'meaning': 'fifteen each',
        'originLanguage': 'Latin',
        'examples': ['quindenary'],
        'letter': 'q'
    }, {
        'roots': ['quinque-'],
        'meaning': 'five',
        'originLanguage': 'Latin',
        'examples': ['cinquain', 'cinque', 'quinquefoil', 'quinquennial', 'quinquennium', 'quinquepartite', 'quinquevalent'],
        'letter': 'q'
    }, {
        'roots': ['quint-'],
        'meaning': 'fifth',
        'originLanguage': 'Latin',
        'examples': ['biquintile', 'quint', 'quinta', 'quintal', 'quintan', 'quintant', 'quintary', 'quinte', 'quintessence', 'quintessential', 'quintic', 'quintile', 'quintipara', 'quintus', 'semiquintile'],
        'letter': 'q'
    }, {
        'roots': ['quot-'],
        'meaning': 'how many, how great',
        'originLanguage': 'Latin',
        'examples': ['quota', 'quotient', 'subquotient'],
        'letter': 'q'
    }],
    'r': [{
        'roots': ['rad-', 'ras-'],
        'meaning': 'scrape, shave',
        'originLanguage': 'Latin',
        'examples': ['abrade', 'abrasion', 'abrasive', 'corrade', 'corrasion', 'erase', 'erasure', 'nonabrasive', 'radula', 'radular', 'raduliform', 'rase', 'rash', 'rasorial', 'raster', 'rasure', 'subradular'],
        'letter': 'r'
    }, {
        'roots': ['radi-'],
        'meaning': 'beam, spoke',
        'originLanguage': 'Latin',
        'examples': ['radiance', 'radiation'],
        'letter': 'r'
    }, {
        'roots': ['radic-'],
        'meaning': 'root',
        'originLanguage': 'Latin',
        'examples': ['eradicate', 'radical'],
        'letter': 'r'
    }, {
        'roots': ['ram-'],
        'meaning': 'branch',
        'originLanguage': 'Latin',
        'examples': ['ramification', 'ramose'],
        'letter': 'r'
    }, {
        'roots': ['ran-'],
        'meaning': 'frog',
        'originLanguage': 'Latin',
        'examples': ['Rana'],
        'letter': 'r'
    }, {
        'roots': ['ranc-'],
        'meaning': 'rancidness, grudge, bitterness',
        'originLanguage': 'Latin',
        'examples': ['rancid', 'rancor'],
        'letter': 'r'
    }, {
        'roots': ['rap-'],
        'meaning': 'rob, seize',
        'originLanguage': 'Latin',
        'examples': ['arreption', 'arreptitious', 'enrapt', 'enrapture', 'rapacious', 'rapacity', 'rape', 'rapid', 'rapidity', 'rapine', 'rapt', 'raptio', 'raptor', 'raptorial', 'rapture', 'rapturous', 'raptus', 'ravenous', 'ravine', 'ravish', 'subreption', 'subreptitious', 'surreptitious'],
        'letter': 'r'
    }, {
        'roots': ['rap-'],
        'meaning': 'turnip',
        'originLanguage': 'Latin',
        'examples': ['rapeseed'],
        'letter': 'r'
    }, {
        'roots': ['raph-'],
        'meaning': 'sew, seam',
        'originLanguage': 'Greek',
        'examples': ['raphae', 'raphe'],
        'letter': 'r'
    }, {
        'roots': ['rar-'],
        'meaning': 'rare',
        'originLanguage': 'Latin',
        'examples': ['rarity'],
        'letter': 'r'
    }, {
        'roots': ['rauc-'],
        'meaning': 'harsh, hoarse',
        'originLanguage': 'Latin',
        'examples': ['raucous'],
        'letter': 'r'
    }, {
        'roots': ['re-', 'red-'],
        'meaning': 'again, back',
        'originLanguage': 'Latin',
        'examples': ['recede', 'redact'],
        'letter': 'r'
    }, {
        'roots': ['rect-', 'reg-', '-rig-'],
        'meaning': 'straight, direct',
        'originLanguage': 'Latin',
        'examples': ['correct', 'direct', 'dirigible', 'erect', 'erection', 'ergo', 'rectangle', 'rectify', 'rectitude', 'rectum', 'regent', 'regime', 'regimen', 'regiment', 'region', 'surge'],
        'letter': 'r'
    }, {
        'roots': ['reg-', 'rex-'],
        'meaning': 'king',
        'originLanguage': 'Latin',
        'examples': ['regal', 'regency', 'regicide', 'Regis', 'regulation', 'reign', 'rex', 'royal'],
        'letter': 'r'
    }, {
        'roots': ['regul-'],
        'meaning': 'rule',
        'originLanguage': 'Latin',
        'examples': ['regular', 'regulate', 'regulation', 'rule'],
        'letter': 'r'
    }, {
        'roots': ['rem-'],
        'meaning': 'oar',
        'originLanguage': 'Latin',
        'examples': ['bireme', 'trireme'],
        'letter': 'r'
    }, {
        'roots': ['ren-'],
        'meaning': 'kidney',
        'originLanguage': 'Latin',
        'examples': ['renal'],
        'letter': 'r'
    }, {
        'roots': ['rep-', 'rept-'],
        'meaning': 'crawl, creep',
        'originLanguage': 'Latin',
        'examples': ['reptile'],
        'letter': 'r'
    }, {
        'roots': ['resid-'],
        'meaning': 'left behind',
        'originLanguage': 'Latin',
        'examples': ['reside', 'residence', 'resident', 'residual', 'residue'],
        'letter': 'r'
    }, {
        'roots': ['ret-'],
        'meaning': 'net',
        'originLanguage': 'Latin',
        'examples': ['reticle', 'retina'],
        'letter': 'r'
    }, {
        'roots': ['retro-'],
        'meaning': 'backward, behind',
        'originLanguage': 'Latin',
        'examples': ['retrograde', 'retrospective', 'retrovirus'],
        'letter': 'r'
    }, {
        'roots': ['rhabd-'],
        'meaning': 'rod',
        'originLanguage': 'Greek',
        'examples': ['rhabdoid', 'rhabdom', 'rhabdomancy', 'rhabdomyolysis', 'rhabdomyosarcoma'],
        'letter': 'r'
    }, {
        'roots': ['rhach-', 'rach-'],
        'meaning': 'spine',
        'originLanguage': 'Greek',
        'examples': ['rachipagus', 'rachis', 'rachischisis', 'rhachiodont', 'rhachis'],
        'letter': 'r'
    }, {
        'roots': ['rhag-', 'rheg-'],
        'meaning': 'rend, tear',
        'originLanguage': 'Greek',
        'examples': ['bronchorrhagia', 'hemorrhage', 'menorrhagia', 'regma', 'rhagades', 'rhegma', 'rhegmatogenous', 'rhexis'],
        'letter': 'r'
    }, {
        'roots': ['rhe-'],
        'meaning': 'flow',
        'originLanguage': 'Greek',
        'examples': ['antiarrhythmic', 'arrhythmia', 'arrhythmic', 'diarrhoea', 'dysrhythmia', 'endorheic', 'eurhythmia', 'eurhythmic', 'eurhythmy', 'gonorrhoea', 'hemorrhea', 'logorrhea', 'polyrhythm', 'rheology', 'rheometer', 'rheostat', 'rheum', 'rheumatic', 'rheumatism', 'rheumatoid', 'rheumatology', 'rhythm', 'rhythmic', 'rhyton'],
        'letter': 'r'
    }, {
        'roots': ['rhetin-'],
        'meaning': 'resin',
        'originLanguage': 'Greek',
        'examples': ['retinite'],
        'letter': 'r'
    }, {
        'roots': ['rhig-'],
        'meaning': 'chill',
        'originLanguage': 'Greek',
        'examples': ['rhigosaurus'],
        'letter': 'r'
    }, {
        'roots': ['rhin-'],
        'meaning': 'nose, snout',
        'originLanguage': 'Greek',
        'examples': ['catarrhine', 'haplorhine', 'platyrrhine', 'rhinoceros', 'rhinophyma', 'rhinoplasty', 'strepsirrhine'],
        'letter': 'r'
    }, {
        'roots': ['rhiz-'],
        'meaning': 'root',
        'originLanguage': 'Greek',
        'examples': ['ectomycorrhiza', 'rhizoid', 'rhizomatous', 'rhizome', 'rhizomorph', 'rhizomorphous', 'rhizophagous', 'rhizophagy', 'Rhizopogon', 'Rhizopus', 'rhizosphere'],
        'letter': 'r'
    }, {
        'roots': ['rho-'],
        'meaning': 'R, r',
        'originLanguage': 'Greek',
        'examples': ['rho', 'rhotacism', 'rhotacize', 'rhotic'],
        'letter': 'r'
    }, {
        'roots': ['rhod-'],
        'meaning': 'rose',
        'originLanguage': 'Greek',
        'examples': ['rhododendron', 'rhodophyte', 'rhodopsin'],
        'letter': 'r'
    }, {
        'roots': ['rhomb-'],
        'meaning': 'spinning top',
        'originLanguage': 'Greek',
        'examples': ['orthorhombic', 'rhomb', 'rhombic', 'rhomboid', 'rhombus', 'rhumb'],
        'letter': 'r'
    }, {
        'roots': ['rhynch-'],
        'meaning': 'snout',
        'originLanguage': 'Greek',
        'examples': ['Oncorhynchus', 'Rhynchobatus', 'rhynchophore'],
        'letter': 'r'
    }, {
        'roots': ['rid-', 'ris-'],
        'meaning': 'laugh',
        'originLanguage': 'Latin',
        'examples': ['deride', 'derision', 'ridicule', 'ridiculous', 'risible'],
        'letter': 'r'
    }, {
        'roots': ['robor-'],
        'meaning': 'oak, strength',
        'originLanguage': 'Latin',
        'examples': ['corroborant', 'corroborate', 'corroboration', 'corroborative', 'corroborator', 'robust'],
        'letter': 'r'
    }, {
        'roots': ['rod-', 'ros-'],
        'meaning': 'gnaw',
        'originLanguage': 'Latin',
        'examples': ['corrode', 'erosion', 'rodent'],
        'letter': 'r'
    }, {
        'roots': ['rog-'],
        'meaning': 'ask',
        'originLanguage': 'Latin',
        'examples': ['abrogate', 'arrogant', 'arrogate', 'derogate', 'derogation', 'derogatory', 'interrogation', 'prerogative', 'prorogue', 'rogation', 'rogue', 'surrogate'],
        'letter': 'r'
    }, {
        'roots': ['rostr-'],
        'meaning': 'beak, prow',
        'originLanguage': 'Latin',
        'examples': ['brevirostrate', 'curvirostral', 'lamellirostral', 'rostellate', 'rostelliform', 'rostellum', 'rostral', 'rostrate', 'rostriform', 'rostrulum', 'rostrum'],
        'letter': 'r'
    }, {
        'roots': ['rot-'],
        'meaning': 'wheel',
        'originLanguage': 'Latin',
        'examples': ['arrondissement', 'circumrotation', 'contrarotation', 'control', 'controller', 'decontrol', 'enroll', 'enrollee', 'enrollment', 'irrotational', 'multirole', 'multiroll', 'redondilla', 'reenroll', 'rodeo', 'role', 'roll', 'rondeau', 'rondel', 'rondelle', 'rondo', 'rotary', 'rotate', 'rotation', 'rotational', 'rotator', 'rotatory', 'rotavirus', 'rotelle', 'rotifer', 'Rotifera', 'rotiferous', 'rotiform', 'rotula', 'rotund', 'rotunda', 'rotundifolious', 'rotundity', 'roulette', 'round', 'roundel', 'roundelay', 'roundlet', 'rowel', 'semiround'],
        'letter': 'r'
    }, {
        'roots': ['ruber-', 'rubr-'],
        'meaning': 'red',
        'originLanguage': 'Latin',
        'examples': ['erubescence', 'erubescent', 'rubella', 'Rubio', 'rubious', 'rubric', 'rubricate', 'rubrication', 'rubricator', 'ruby'],
        'letter': 'r'
    }, {
        'roots': ['rudi-'],
        'meaning': 'unskilled, rough, unlearned',
        'originLanguage': 'Latin',
        'examples': ['erudite', 'erudition', 'rude', 'rudiment', 'rudimentary', 'rudity'],
        'letter': 'r'
    }, {
        'roots': ['rug-'],
        'meaning': 'wrinkle',
        'originLanguage': 'Latin',
        'examples': ['corrugant', 'corrugate', 'corrugation', 'erugate', 'rugose'],
        'letter': 'r'
    }, {
        'roots': ['rumin-'],
        'meaning': 'throat',
        'originLanguage': 'Latin',
        'examples': ['rumen', 'rumenic acid', 'ruminal', 'ruminant', 'ruminate', 'rumination', 'ruminator'],
        'letter': 'r'
    }, {
        'roots': ['rump-', 'rupt-'],
        'meaning': 'break',
        'originLanguage': 'Latin',
        'examples': ['abrupt', 'corruptible', 'disrupt', 'erupt', 'eruption', 'interrupt', 'rupture'],
        'letter': 'r'
    }, {
        'roots': ['rur-'],
        'meaning': 'countryside, farm',
        'originLanguage': 'Latin',
        'examples': ['nonrural', 'roister', 'roisterous', 'rural', 'rustic', 'rusticate', 'rustication', 'rusticity'],
        'letter': 'r'
    }],
    's': [{
        'roots': ['sacc-'],
        'meaning': 'bag',
        'originLanguage': 'Greek',
        'examples': ['sack'],
        'letter': 's'
    }, {
        'roots': ['sacchar-'],
        'meaning': 'sugar',
        'originLanguage': 'Greek',
        'examples': ['disaccharide', 'heteropolysaccharide', 'homopolysaccharide', 'lipooligosaccharide', 'lipopolysaccharide', 'monosaccharide', 'oligosaccharide', 'pentasaccharide', 'polysaccharide', 'saccharin', 'trisaccharide'],
        'letter': 's'
    }, {
        'roots': ['sacr-', '-secr-'],
        'meaning': 'sacred',
        'originLanguage': 'Latin',
        'examples': ['consecrate', 'desecrate', 'sacrament', 'sacred', 'sacrosanct'],
        'letter': 's'
    }, {
        'roots': ['sagac-'],
        'meaning': 'wise',
        'originLanguage': 'Latin',
        'examples': ['sagacious', 'sagacity'],
        'letter': 's'
    }, {
        'roots': ['sagitt-'],
        'meaning': 'arrow',
        'originLanguage': 'Latin',
        'examples': ['sagittal plane', 'Sagittaria'],
        'letter': 's'
    }, {
        'roots': ['sal-'],
        'meaning': 'salt',
        'originLanguage': 'Latin',
        'examples': ['salinity'],
        'letter': 's'
    }, {
        'roots': ['sali-', '-sili-', 'salt-'],
        'meaning': 'jump',
        'originLanguage': 'Latin',
        'examples': ['assail', 'assailable', 'assailant', 'assailment', 'assault', 'assaultive', 'consilience', 'desultory', 'dissilience', 'dissilient', 'exult', 'exultant', 'exultation', 'insult', 'insultation', 'irresilient', 'resile', 'resilement', 'resilience', 'resiliency', 'resilient', 'result', 'resultant', 'salacious', 'salacity', 'salience', 'salient', 'sally', 'saltando', 'saltant', 'saltation', 'saltatorial', 'saltatory', 'saltigrade', 'saltire', 'salto', 'saltus', 'sault', 'sauté', 'sauteuse', 'sautille', 'sautoir', 'somersault', 'soubresaut', 'subsultory', 'transilience', 'transilient'],
        'letter': 's'
    }, {
        'roots': ['salic-'],
        'meaning': 'willow',
        'originLanguage': 'Latin',
        'examples': ['salicin'],
        'letter': 's'
    }, {
        'roots': ['salping-'],
        'meaning': 'trumpet',
        'originLanguage': 'Greek',
        'examples': ['endosalpingiosis', 'hysterosalpingography', 'salpiglossis', 'salpinx'],
        'letter': 's'
    }, {
        'roots': ['salu-'],
        'meaning': 'health, welfare',
        'originLanguage': 'Latin',
        'examples': ['salubrious', 'salubrity', 'salutary', 'salute'],
        'letter': 's'
    }, {
        'roots': ['salv-'],
        'meaning': 'save',
        'originLanguage': 'Latin',
        'examples': ['salvage', 'salvation', 'salve'],
        'letter': 's'
    }, {
        'roots': ['san-'],
        'meaning': 'healthy',
        'originLanguage': 'Latin',
        'examples': ['insane', 'insanity', 'sanatorium', 'sane', 'sanitarian', 'sanitarium', 'sanitary', 'sanitation', 'sanity'],
        'letter': 's'
    }, {
        'roots': ['sanc-'],
        'meaning': 'holy',
        'originLanguage': 'Latin',
        'examples': ['sacrosanct', 'saint', 'sanctify', 'sanction', 'sanctuary'],
        'letter': 's'
    }, {
        'roots': ['sanguin-'],
        'meaning': 'blood',
        'originLanguage': 'Latin',
        'examples': ['consanguinity', 'sanguinary', 'sanguine'],
        'letter': 's'
    }, {
        'roots': ['sapi-', '-sipi-'],
        'meaning': 'taste, wise',
        'originLanguage': 'Latin',
        'examples': ['insipid', 'insipience', 'sapient'],
        'letter': 's'
    }, {
        'roots': ['sapon-'],
        'meaning': 'soap',
        'originLanguage': 'Latin',
        'examples': ['saponification'],
        'letter': 's'
    }, {
        'roots': ['sapphir-'],
        'meaning': 'a precious stone',
        'originLanguage': 'Greek from Hebrew',
        'examples': ['sapphire', 'sapphirine'],
        'letter': 's'
    }, {
        'roots': ['sapr-'],
        'meaning': 'rotten',
        'originLanguage': 'Greek',
        'examples': ['sapraemia', 'saprogenic', 'saprophagous', 'saprophyte', 'saprotrophic'],
        'letter': 's'
    }, {
        'roots': ['sarc-'],
        'meaning': 'flesh',
        'originLanguage': 'Greek',
        'examples': ['perisarc', 'sarcasm', 'sarcastic', 'sarcocele', 'sarcoid', 'sarcoidosis', 'sarcoma', 'sarcophagus', 'Sarcopterygii', 'sarcosine', 'sarcosinemia', 'sarcosome'],
        'letter': 's'
    }, {
        'roots': ['sarc-'],
        'meaning': 'tailor',
        'originLanguage': 'Latin',
        'examples': ['consarcination', 'sartor', 'sartorial', 'sartorius'],
        'letter': 's'
    }, {
        'roots': ['sati-'],
        'meaning': 'enough',
        'originLanguage': 'Latin',
        'examples': ['asset', 'sate', 'satiate', 'satiety', 'satisfy', 'saturate'],
        'letter': 's'
    }, {
        'roots': ['saur-'],
        'meaning': 'lizard, reptile',
        'originLanguage': 'Greek',
        'examples': ['dinosaur', 'Saurischia', 'sauropod'],
        'letter': 's'
    }, {
        'roots': ['sax-'],
        'meaning': 'rock',
        'originLanguage': 'Latin',
        'examples': ['saxatile', 'saxicavous', 'saxicoline', 'saxifrage', 'saxifragous'],
        'letter': 's'
    }, {
        'roots': ['scab-'],
        'meaning': 'scratch',
        'originLanguage': 'Latin',
        'examples': ['scabies'],
        'letter': 's'
    }, {
        'roots': ['scal-'],
        'meaning': 'ladder, stairs',
        'originLanguage': 'Latin',
        'examples': ['scalar', 'scale'],
        'letter': 's'
    }, {
        'roots': ['scalen-'],
        'meaning': 'uneven',
        'originLanguage': 'Greek',
        'examples': ['scalene', 'scalene muscles', 'scalene triangle', 'scalenohedron'],
        'letter': 's'
    }, {
        'roots': ['scand-', '-scend-', 'scans-', '-scens-'],
        'meaning': 'climb',
        'originLanguage': 'Latin',
        'examples': ['ascend', 'ascendency', 'ascendent', 'ascension', 'ascent', 'condescend', 'condescendence', 'condescension', 'descend', 'descendent', 'descension', 'descent', 'scansion', 'transcend', 'transcendence', 'transcendent', 'transcendental'],
        'letter': 's'
    }, {
        'roots': ['scandal-'],
        'meaning': 'snare',
        'originLanguage': 'Greek',
        'examples': ['scandal', 'scandalize'],
        'letter': 's'
    }, {
        'roots': ['scap-'],
        'meaning': 'shaft',
        'originLanguage': 'Greek',
        'examples': ['scape', 'scapus'],
        'letter': 's'
    }, {
        'roots': ['scaph-'],
        'meaning': 'anything hollow, bowl, ship',
        'originLanguage': 'Greek',
        'examples': ['Scaphirhynchus', 'scaphoid bone', 'scaphopod'],
        'letter': 's'
    }, {
        'roots': ['scat-'],
        'meaning': 'dung',
        'originLanguage': 'Greek',
        'examples': ['scatemia', 'scatology', 'scatoma', 'scatomancy', 'scatophagy', 'scatoscopy'],
        'letter': 's'
    }, {
        'roots': ['sced-'],
        'meaning': 'scatter',
        'originLanguage': 'Greek',
        'examples': ['heteroscedastic', 'homoscedastic'],
        'letter': 's'
    }, {
        'roots': ['scel-'],
        'meaning': 'leg, thigh',
        'originLanguage': 'Greek',
        'examples': ['isosceles', 'triskele', 'triskelion'],
        'letter': 's'
    }, {
        'roots': ['scen-'],
        'meaning': 'booth, tent',
        'originLanguage': 'Greek',
        'examples': ['parascenium', 'proscenium', 'scene', 'scenic', 'scenography'],
        'letter': 's'
    }, {
        'roots': ['scept-', 'scop-'],
        'meaning': 'look at, examine, view, observe',
        'originLanguage': 'Greek',
        'examples': ['Abroscopus', 'diascopic', 'diascopy', 'endoscope', 'endoscopic', 'endoscopy', 'epidiascope', 'episcope', 'episcopic', 'gastroscopy', 'kaleidoscope', 'macroscopic', 'microscope', 'microscopic', 'panendoscopy', 'periscope', 'periscopic', 'scope', 'scopophobia', 'skeptic', 'stereoscopic', 'stereoscopy', 'stethoscope', 'telescope', 'telescopic', 'Telescopium'],
        'letter': 's'
    }, {
        'roots': ['schem-'],
        'meaning': 'plan',
        'originLanguage': 'Greek',
        'examples': ['schema', 'schematic', 'schematism', 'schematize', 'scheme'],
        'letter': 's'
    }, {
        'roots': ['schid-'],
        'meaning': 'split',
        'originLanguage': 'Greek',
        'examples': ['diaschisis', 'diaschisma', 'schisis', 'schism', 'schisma', 'schismatic', 'schizocarp', 'schizogamy', 'schizogony', 'schizoid', 'schizophrenia', 'schizotrichia'],
        'letter': 's'
    }, {
        'roots': ['sci-'],
        'meaning': 'shade, shadow',
        'originLanguage': 'Greek',
        'examples': ['sciamachy', 'sciaphobia'],
        'letter': 's'
    }, {
        'roots': ['sci-'],
        'meaning': 'know',
        'originLanguage': 'Latin',
        'examples': ['conscience', 'conscious', 'conscientious', 'omniscious', 'omniscient', 'prescient', 'science', 'scienter'],
        'letter': 's'
    }, {
        'roots': ['scind-', 'sciss-'],
        'meaning': 'split',
        'originLanguage': 'Latin',
        'examples': ['rescind', 'scissors'],
        'letter': 's'
    }, {
        'roots': ['scler-'],
        'meaning': 'hard',
        'originLanguage': 'Greek',
        'examples': ['sclera', 'sclerectomy', 'scleredema', 'sclereid', 'sclerema', 'sclerenchyma', 'sclerite', 'scleritis', 'scleroderma', 'sclerophyll', 'sclerophyllous', 'sclerosis', 'sclerotic', 'sclerotium', 'sclerotize'],
        'letter': 's'
    }, {
        'roots': ['scolec-'],
        'meaning': 'worm',
        'originLanguage': 'Greek',
        'examples': ['scolex'],
        'letter': 's'
    }, {
        'roots': ['scoli-'],
        'meaning': 'crooked',
        'originLanguage': 'Greek',
        'examples': ['scoliokyphosis', 'scoliosis'],
        'letter': 's'
    }, {
        'roots': ['scombr-'],
        'meaning': 'mackerel',
        'originLanguage': 'Greek',
        'examples': ['scombrid', 'scombroid'],
        'letter': 's'
    }, {
        'roots': ['scop-'],
        'meaning': '',
        'originLanguage': 'Greek',
        'examples': [''],
        'letter': 's'
    }, {
        'roots': ['scot-'],
        'meaning': 'darkness',
        'originLanguage': 'Greek',
        'examples': ['scotoma', 'scotophobia', 'scotophobotaxis'],
        'letter': 's'
    }, {
        'roots': ['scrib-', 'script-'],
        'meaning': 'write',
        'originLanguage': 'Latin',
        'examples': ['describe', 'inscribe', 'manuscript', 'prescribe', 'scribble', 'scribe', 'script', 'scripture', 'subscribe'],
        'letter': 's'
    }, {
        'roots': ['scrupl-'],
        'meaning': 'uneasiness',
        'originLanguage': 'Latin',
        'examples': ['scruple', 'scrupulous', 'unscrupulous'],
        'letter': 's'
    }, {
        'roots': ['sculp-'],
        'meaning': 'carve',
        'originLanguage': 'Latin',
        'examples': ['insculp', 'resculpt', 'sculp', 'sculpsit', 'sculpt', 'sculptile', 'sculptor', 'sculptress', 'sculptural', 'sculpture'],
        'letter': 's'
    }, {
        'roots': ['scut-'],
        'meaning': 'shield',
        'originLanguage': 'Latin',
        'examples': ['scute'],
        'letter': 's'
    }, {
        'roots': ['scyph-'],
        'meaning': 'cup',
        'originLanguage': 'Greek',
        'examples': ['scyphoid', 'Scyphozoa', 'scyphus'],
        'letter': 's'
    }, {
        'roots': ['se-', 'sed-'],
        'meaning': 'apart',
        'originLanguage': 'Latin',
        'examples': ['secede', 'sedition', 'seditious', 'seduce'],
        'letter': 's'
    }, {
        'roots': ['seb-'],
        'meaning': 'tallow',
        'originLanguage': 'Latin',
        'examples': ['sebaceous', 'sebum'],
        'letter': 's'
    }, {
        'roots': ['sec-', 'sect-', 'seg-'],
        'meaning': 'cut',
        'originLanguage': 'Latin',
        'examples': ['secant', 'section', 'segment'],
        'letter': 's'
    }, {
        'roots': ['sed-'],
        'meaning': 'settle, calm',
        'originLanguage': 'Latin',
        'examples': ['sedative'],
        'letter': 's'
    }, {
        'roots': ['sed-', '-sid-', 'sess-'],
        'meaning': 'sit',
        'originLanguage': 'Latin',
        'examples': ['assiduous', 'insidious', 'obsession', 'possess', 'preside', 'president', 'reside', 'resident', 'sedentary', 'sediment', 'sedimentary', 'sedulity', 'sedulous', 'session', 'subside', 'supersede'],
        'letter': 's'
    }, {
        'roots': ['sedec-'],
        'meaning': 'sixteen',
        'originLanguage': 'Latin',
        'examples': ['sedecimal'],
        'letter': 's'
    }, {
        'roots': ['seget-'],
        'meaning': 'in cornfields',
        'originLanguage': 'Latin',
        'examples': [''],
        'letter': 's'
    }, {
        'roots': ['sei-'],
        'meaning': 'shake',
        'originLanguage': 'Greek',
        'examples': ['aseismic', 'microseism', 'microseismic', 'paleoseismology', 'seism', 'seismic', 'seismogram', 'seismograph', 'seismology', 'seismometer', 'seismonasty', 'sistrum', 'teleseism', 'teleseismic'],
        'letter': 's'
    }, {
        'roots': ['selen-'],
        'meaning': 'moon',
        'originLanguage': 'Greek',
        'examples': ['paraselene', 'selaphobia', 'Selene', 'selenium', 'selenocentric', 'selenography', 'selenology'],
        'letter': 's'
    }, {
        'roots': ['sell-'],
        'meaning': 'saddle, seat',
        'originLanguage': 'Latin',
        'examples': ['sella turcica'],
        'letter': 's'
    }, {
        'roots': ['sema-'],
        'meaning': 'sign',
        'originLanguage': 'Greek',
        'examples': ['aposematic', 'asemasia', 'asemia', 'asemic', 'pentaseme', 'polyseme', 'polysemic', 'polysemous', 'polysemy', 'semantics', 'semaphore', 'semasiology', 'sematic', 'seme', 'sememe', 'semiotic', 'tetraseme', 'triseme'],
        'letter': 's'
    }, {
        'roots': ['semi-'],
        'meaning': 'half',
        'originLanguage': 'Latin',
        'examples': ['semiannual', 'semicolon', 'semiconductor', 'semiconscious', 'semifinal', 'seminatural'],
        'letter': 's'
    }, {
        'roots': ['semin-'],
        'meaning': 'seed',
        'originLanguage': 'Latin',
        'examples': ['insemination'],
        'letter': 's'
    }, {
        'roots': ['sen-'],
        'meaning': 'old man',
        'originLanguage': 'Latin',
        'examples': ['senator', 'senescent', 'senile', 'senility', 'senior'],
        'letter': 's'
    }, {
        'roots': ['sen-'],
        'meaning': 'six each',
        'originLanguage': 'Latin',
        'examples': ['senary'],
        'letter': 's'
    }, {
        'roots': ['senti-', 'sens-'],
        'meaning': 'feel',
        'originLanguage': 'Latin',
        'examples': ['assent', 'consensus', 'consent', 'dissent', 'resent', 'scent', 'sensation', 'sense', 'sensible', 'sensitive', 'sensory', 'sentence', 'sentient', 'sentience', 'sentiment'],
        'letter': 's'
    }, {
        'roots': ['sep-'],
        'meaning': 'rot',
        'originLanguage': 'Greek',
        'examples': ['antisepsis', 'antiseptic', 'asepsis', 'aseptic', 'sepia', 'sepsis', 'septic'],
        'letter': 's'
    }, {
        'roots': ['sept-'],
        'meaning': 'fence, partition, enclosure',
        'originLanguage': 'Latin',
        'examples': ['transept'],
        'letter': 's'
    }, {
        'roots': ['sept-'],
        'meaning': 'seven',
        'originLanguage': 'Latin',
        'examples': ['septennial'],
        'letter': 's'
    }, {
        'roots': ['septen-'],
        'meaning': 'seven each',
        'originLanguage': 'Latin',
        'examples': ['septenary'],
        'letter': 's'
    }, {
        'roots': ['septim-'],
        'meaning': 'seventh',
        'originLanguage': 'Latin',
        'examples': ['septimal', 'septime'],
        'letter': 's'
    }, {
        'roots': ['septuagen-'],
        'meaning': 'seventy each',
        'originLanguage': 'Latin',
        'examples': ['septuagenary'],
        'letter': 's'
    }, {
        'roots': ['septuagesim-'],
        'meaning': 'seventieth',
        'originLanguage': 'Latin',
        'examples': ['septuagesima', 'septuagesimal'],
        'letter': 's'
    }, {
        'roots': ['septuagint-'],
        'meaning': 'seventy',
        'originLanguage': 'Latin',
        'examples': ['Septuagint'],
        'letter': 's'
    }, {
        'roots': ['sequ-', 'secut-'],
        'meaning': 'follow',
        'originLanguage': 'Latin',
        'examples': ['consecutive', 'consequence', 'ensue', 'non sequitur', 'obsequious', 'prosecute', 'pursue', 'second', 'sequel', 'sequence', 'subsequent'],
        'letter': 's'
    }, {
        'roots': ['ser-'],
        'meaning': 'silk',
        'originLanguage': 'Greek',
        'examples': ['sericin', 'serigraph'],
        'letter': 's'
    }, {
        'roots': ['ser-'],
        'meaning': 'sow',
        'originLanguage': 'Latin',
        'examples': ['disseminate', 'dissemination', 'insemination', 'postseason', 'preseason', 'sation', 'sative', 'season', 'seasonable', 'seasonal', 'semen', 'semenuria', 'seminal', 'seminar', 'seminarian', 'seminary', 'semination', 'seminiferous'],
        'letter': 's'
    }, {
        'roots': ['ser-'],
        'meaning': 'attach, join',
        'originLanguage': 'Latin',
        'examples': ['assert', 'assertion', 'assertive', 'curviserial', 'desert', 'desertion', 'desertrix', 'dissert', 'dissertation', 'dissertator', 'exert', 'exertion', 'insert', 'insertion', 'multiseriate', 'reassert', 'reassertion', 'rectiserial', 'semidesert', 'serial', 'seriate', 'seriatim', 'series', 'sermon', 'uniseriate'],
        'letter': 's'
    }, {
        'roots': ['ser-'],
        'meaning': 'whey',
        'originLanguage': 'Latin',
        'examples': ['serac', 'serosa', 'serous', 'subserous'],
        'letter': 's'
    }, {
        'roots': ['ser-'],
        'meaning': 'late',
        'originLanguage': 'Latin',
        'examples': ['serein', 'serotine', 'serotinous', 'serotiny', 'soiree'],
        'letter': 's'
    }, {
        'roots': ['serp-'],
        'meaning': 'crawl, creep',
        'originLanguage': 'Latin',
        'examples': ['serpent'],
        'letter': 's'
    }, {
        'roots': ['serr-'],
        'meaning': 'saw, saw-toothed',
        'originLanguage': 'Latin',
        'examples': ['biserrate', 'serrate', 'serration', 'serrature', 'serriform', 'serrulate', 'sierra', 'sierran'],
        'letter': 's'
    }, {
        'roots': ['serv-'],
        'meaning': 'save, protect, serve',
        'originLanguage': 'Latin',
        'examples': ['conserve', 'deserve', 'observe', 'preserve', 'reserve', 'servant', 'service', 'servile', 'servitude', 'subservient'],
        'letter': 's'
    }, {
        'roots': ['sesqui-'],
        'meaning': 'one and a half',
        'originLanguage': 'Latin',
        'examples': ['sesquialteral', 'sesquicentennial', 'sesquipedal', 'sesquiplicate', 'sesquitertian'],
        'letter': 's'
    }, {
        'roots': ['set-'],
        'meaning': 'bristle, hair',
        'originLanguage': 'Latin',
        'examples': ['seta', 'setose'],
        'letter': 's'
    }, {
        'roots': ['sever-'],
        'meaning': 'stern, strict, serious',
        'originLanguage': 'Latin',
        'examples': ['asseverate', 'asseveration', 'perseverance', 'perseverant', 'perseverate', 'perseveration', 'perseverative', 'persevere', 'severe', 'severity'],
        'letter': 's'
    }, {
        'roots': ['sex-', 'se-'],
        'meaning': 'six',
        'originLanguage': 'Latin',
        'examples': ['semester', 'sexangle', 'sexangular', 'sexavalent', 'sexennial', 'sexennium', 'sexireme', 'sexivalent', 'sexpartite', 'sexradiate', 'sextain'],
        'letter': 's'
    }, {
        'roots': ['sexagen-'],
        'meaning': 'sixty each',
        'originLanguage': 'Latin',
        'examples': ['sexagenarian', 'sexagenary'],
        'letter': 's'
    }, {
        'roots': ['sexagesim-'],
        'meaning': 'sixtieth',
        'originLanguage': 'Latin',
        'examples': ['Sexagesima', 'sexagesimal'],
        'letter': 's'
    }, {
        'roots': ['sext-'],
        'meaning': 'sixth',
        'originLanguage': 'Latin',
        'examples': ['bissextile', 'bissextus', 'semisextile', 'sestet', 'sestina', 'Sext', 'sextain', 'sextan', 'sextans', 'sextant', 'sextary', 'sextic', 'sextile', 'sextillion', 'siesta', 'sixte'],
        'letter': 's'
    }, {
        'roots': ['sibil-'],
        'meaning': 'hiss',
        'originLanguage': 'Latin',
        'examples': ['sibilance'],
        'letter': 's'
    }, {
        'roots': ['sicc-'],
        'meaning': 'dry',
        'originLanguage': 'Latin',
        'examples': ['desiccate', 'desiccation', 'sec', 'siccative'],
        'letter': 's'
    }, {
        'roots': ['sicy-'],
        'meaning': 'cucumber',
        'originLanguage': 'Greek',
        'examples': ['Sicyos'],
        'letter': 's'
    }, {
        'roots': ['sider-'],
        'meaning': 'iron',
        'originLanguage': 'Greek',
        'examples': ['siderodromophobia', 'siderophile'],
        'letter': 's'
    }, {
        'roots': ['sider-'],
        'meaning': 'star',
        'originLanguage': 'Latin',
        'examples': ['sidereal'],
        'letter': 's'
    }, {
        'roots': ['sigm-'],
        'meaning': 'S, s',
        'originLanguage': 'Greek',
        'examples': ['sigma', 'sigmatism', 'sigmatropic', 'sigmoid', 'sigmoidoscopy'],
        'letter': 's'
    }, {
        'roots': ['sign-'],
        'meaning': 'sign',
        'originLanguage': 'Latin',
        'examples': ['design', 'designate', 'insignia', 'signal', 'signature', 'significant'],
        'letter': 's'
    }, {
        'roots': ['sil-'],
        'meaning': 'quiet or still',
        'originLanguage': 'Latin',
        'examples': ['silence'],
        'letter': 's'
    }, {
        'roots': ['silv-'],
        'meaning': 'forest',
        'originLanguage': 'Latin',
        'examples': ['silviculture'],
        'letter': 's'
    }, {
        'roots': ['simi-'],
        'meaning': 'ape, monkey',
        'originLanguage': 'Latin',
        'examples': ['simian'],
        'letter': 's'
    }, {
        'roots': ['simil-', 'simul-'],
        'meaning': 'likeness, imitating',
        'originLanguage': 'Latin',
        'examples': ['assimilate', 'dissimilate', 'dissemble', 'ensemble', 'resemble', 'semblance', 'similar', 'similarity', 'simile', 'similitude', 'simulacrum', 'simular', 'simulate', 'simulation', 'simulator', 'simultaneous', 'verisimilar', 'verisimilitude'],
        'letter': 's'
    }, {
        'roots': ['sinap-'],
        'meaning': 'mustard',
        'originLanguage': 'Greek',
        'examples': ['sinapine', 'sinapism'],
        'letter': 's'
    }, {
        'roots': ['singul-'],
        'meaning': 'one each',
        'originLanguage': 'Latin',
        'examples': ['singular'],
        'letter': 's'
    }, {
        'roots': ['sinistr-'],
        'meaning': 'left',
        'originLanguage': 'Latin',
        'examples': ['sinistral'],
        'letter': 's'
    }, {
        'roots': ['sinu-'],
        'meaning': '(to draw) a line',
        'originLanguage': 'Latin',
        'examples': ['insinuate'],
        'letter': 's'
    }, {
        'roots': ['sinus-'],
        'meaning': 'hollow, bay',
        'originLanguage': 'Latin',
        'examples': ['sinusoidal'],
        'letter': 's'
    }, {
        'roots': ['siop-'],
        'meaning': 'silence',
        'originLanguage': 'Greek',
        'examples': ['aposiopesis', 'aposiopetic'],
        'letter': 's'
    }, {
        'roots': ['siph-'],
        'meaning': 'tube',
        'originLanguage': 'Greek',
        'examples': ['siphon', 'siphonoglyph'],
        'letter': 's'
    }, {
        'roots': ['sist-'],
        'meaning': 'cause to stand',
        'originLanguage': 'Latin',
        'examples': ['assist', 'consist', 'desist', 'exist', 'insist', 'persist', 'resist', 'solstice', 'subsist'],
        'letter': 's'
    }, {
        'roots': ['sit-'],
        'meaning': 'food, grain, wheat',
        'originLanguage': 'Greek',
        'examples': ['ectoparasite', 'endoparasite', 'endoparasitoid', 'epiparasite', 'hyperparasitism', 'kleptoparasitism', 'mesoparasite', 'parasite', 'parasitic', 'parasitism', 'parasitoid', 'sitology', 'syssitia'],
        'letter': 's'
    }, {
        'roots': ['siz-'],
        'meaning': 'hiss',
        'originLanguage': 'Greek',
        'examples': [''],
        'letter': 's'
    }, {
        'roots': ['smaragd-'],
        'meaning': 'emerald',
        'originLanguage': 'Greek',
        'examples': ['smaragdine'],
        'letter': 's'
    }, {
        'roots': ['smil-'],
        'meaning': 'carving knife',
        'originLanguage': 'Greek',
        'examples': ['smilodon'],
        'letter': 's'
    }, {
        'roots': ['soci-'],
        'meaning': 'group',
        'originLanguage': 'Latin',
        'examples': ['associate', 'association', 'associative', 'consociate', 'consociation', 'consociational', 'disassociate', 'disassociation', 'dissociable', 'dissocial', 'dissociate', 'dissociation', 'dissociative', 'interassociation', 'nonassociative', 'sociability', 'sociable', 'social', 'sociality', 'societal', 'society'],
        'letter': 's'
    }, {
        'roots': ['sol-'],
        'meaning': 'sun',
        'originLanguage': 'Latin',
        'examples': ['circumsolar', 'extrasolar', 'insolate', 'insolation', 'solar', 'solarium', 'soliform', 'soliscence', 'solstice', 'subsolar'],
        'letter': 's'
    }, {
        'roots': ['sol-'],
        'meaning': 'comfort, soothe',
        'originLanguage': 'Latin',
        'examples': ['consolation', 'console', 'solace'],
        'letter': 's'
    }, {
        'roots': ['sol-'],
        'meaning': 'alone, only',
        'originLanguage': 'Latin',
        'examples': ['desolate', 'desolation', 'desolatory', 'saudade', 'sole', 'soliloquy', 'solitaire', 'solitary', 'solitude', 'solitudinarian', 'solitudinous', 'solivagous', 'solo', 'sullen'],
        'letter': 's'
    }, {
        'roots': ['sole-'],
        'meaning': 'accustomed',
        'originLanguage': 'Latin',
        'examples': ['insolence', 'insolent', 'obsolescence', 'obsolescent', 'obsolete'],
        'letter': 's'
    }, {
        'roots': ['solen-'],
        'meaning': 'channel, pipe',
        'originLanguage': 'Greek',
        'examples': ['solenocyte', 'solenodon', 'solenogaster', 'solenoid', 'Solenopsis'],
        'letter': 's'
    }, {
        'roots': ['solv-', 'solut-'],
        'meaning': 'loosen, set free',
        'originLanguage': 'Latin',
        'examples': ['absolute', 'absolve', 'dissolute', 'dissolve', 'resolute', 'resolve', 'soluble', 'solute', 'solution', 'solve', 'solvent'],
        'letter': 's'
    }, {
        'roots': ['soma-'],
        'meaning': 'body',
        'originLanguage': 'Greek',
        'examples': ['allosome', 'asomatous', 'autosome', 'centrosome', 'chromosome', 'decasomy', 'disomic', 'disomy', 'episome', 'gonosome', 'heptasomy', 'heterochromosome', 'heterodisomic', 'heterodisomy', 'hexasomy', 'isodisomic', 'isodisomy', 'macrosomia', 'metasomatic', 'metasomatism', 'microsome', 'microsomia', 'monosome', 'monosomic', 'monosomy', 'pentasomic', 'pentasomy', 'plasmosome', 'polysomic', 'polysomy', 'pyrosome', 'somatic', 'somatomancy', 'somatoparaphrenia', 'somatopleure', 'somatotype', 'somite', 'tetrasomic', 'tetrasomy', 'trisomic', 'trisomy'],
        'letter': 's'
    }, {
        'roots': ['somn-'],
        'meaning': 'sleep',
        'originLanguage': 'Latin',
        'examples': ['insomnia', 'somnambulist', 'somnifacient', 'somniferous', 'somnific', 'somniloquy', 'somnolent'],
        'letter': 's'
    }, {
        'roots': ['somni-'],
        'meaning': 'dream',
        'originLanguage': 'Latin',
        'examples': ['somnial'],
        'letter': 's'
    }, {
        'roots': ['son-'],
        'meaning': 'sound',
        'originLanguage': 'Latin',
        'examples': ['absonant', 'ambisonic', 'assonance', 'assonant', 'assonate', 'consonance', 'consonant', 'consonous', 'dissonance', 'dissonant', 'inconsonance', 'inconsonant', 'infrasonic', 'infrasound', 'magnisonant', 'resonance', 'resonant', 'resonate', 'resound', 'sonance', 'sonant', 'sonata', 'sondage', 'sonnet', 'sonorant', 'sonority', 'soun', 'sound', 'subsonic', 'supersonic', 'triconsonantal', 'ultrasonic', 'ultrasound'],
        'letter': 's'
    }, {
        'roots': ['soph-'],
        'meaning': 'wise',
        'originLanguage': 'Greek',
        'examples': ['antisophism', 'pansophism', 'pansophist', 'pansophy', 'philosophize', 'philosophy', 'sophism', 'sophist', 'sophistry', 'sophisticate', 'Sophocles', 'sophomania', 'sophomaniac', 'sophomore', 'sophomoric'],
        'letter': 's'
    }, {
        'roots': ['sopor-'],
        'meaning': 'deep sleep',
        'originLanguage': 'Latin',
        'examples': ['sopor', 'soporific'],
        'letter': 's'
    }, {
        'roots': ['sorb-', 'sorpt-'],
        'meaning': 'suck',
        'originLanguage': 'Latin',
        'examples': ['absorb', 'absorbency', 'absorbent', 'absorption', 'absorptive', 'absorptivity', 'adsorb', 'adsorbent', 'adsorption', 'exsorption', 'insorption', 'malabsorption', 'resorb', 'resorption', 'resorptive', 'sorbent', 'sorbile', 'sorbition', 'sorption'],
        'letter': 's'
    }, {
        'roots': ['sord-'],
        'meaning': 'dirt',
        'originLanguage': 'Latin',
        'examples': ['sordes', 'sordid'],
        'letter': 's'
    }, {
        'roots': ['soror-'],
        'meaning': 'sister',
        'originLanguage': 'Latin',
        'examples': ['cousin', 'sororal', 'sororate', 'sororicide', 'sorority'],
        'letter': 's'
    }, {
        'roots': ['spa-'],
        'meaning': 'draw, pull',
        'originLanguage': 'Greek',
        'examples': ['antispasmodic', 'palinspastic', 'perispomenon', 'properispomenon', 'spadix', 'spasm', 'spasmatic', 'spasmodic', 'spasmogenic', 'spasmolytic', 'spastic'],
        'letter': 's'
    }, {
        'roots': ['spad-'],
        'meaning': 'eunuch',
        'originLanguage': 'Greek',
        'examples': ['epispadias', 'hypospadias'],
        'letter': 's'
    }, {
        'roots': ['sparg-', '-sperg-', 'spars-', '-spers-'],
        'meaning': 'scatter, sprinkle',
        'originLanguage': 'Latin',
        'examples': ['asperse', 'aspersion', 'aspersive', 'dispersal', 'disperse', 'dispersion', 'dispersive', 'insperse', 'inspersion', 'interspersal', 'intersperse', 'interspersion', 'nonaspersion', 'nondispersive', 'nonsparse', 'sparge', 'spargefaction', 'sparse', 'sparsity'],
        'letter': 's'
    }, {
        'roots': ['spath-'],
        'meaning': 'blade',
        'originLanguage': 'Greek',
        'examples': ['spade', 'spatha', 'spathe', 'spay'],
        'letter': 's'
    }, {
        'roots': ['spati-'],
        'meaning': 'space',
        'originLanguage': 'Latin',
        'examples': ['interspace', 'interspatial', 'space', 'spatial', 'spatiate', 'subspace'],
        'letter': 's'
    }, {
        'roots': ['spec-', '-spic-', 'spect-'],
        'meaning': 'look',
        'originLanguage': 'Latin',
        'examples': ['aspect', 'aspectual', 'auspicate', 'auspice', 'auspicious', 'biaspectual', 'bispecific', 'bispecificity', 'circumspect', 'circumspection', 'circumspective', 'conspecific', 'conspecificity', 'conspectus', 'conspicuous', 'despection', 'despicable', 'despiciency', 'despise', 'despite', 'disrespect', 'disrespectable', 'especial', 'expect', 'expectancy', 'expectant', 'expectation', 'inauspicious', 'incircumspect', 'inconspicuous', 'infraspecific', 'inspect', 'inspection', 'inspector', 'inspeximus', 'interspecies', 'interspecific', 'intraspecies', 'intraspecific', 'introspection', 'introspective', 'irrespective', 'multispecific', 'multispecificity', 'multispectral', 'nonspecific', 'perspective', 'perspicacious', 'perspicuity', 'perspicuous', 'prospect', 'prospective', 'prospector', 'prospectus', 'prospicience', 'prospicient', 'reinspect', 'respect', 'respectability', 'respectable', 'respectant', 'respective', 'respite', 'retrospection', 'retrospective', 'special', 'speciality', 'speciation', 'specie', 'species', 'specific', 'specification', 'specificity', 'specimen', 'speciosity', 'specious', 'spectacle', 'spectacular', 'spectacularity', 'spectant', 'spectation', 'spectator', 'spectatorial', 'spectral', 'spectre', 'spectrum', 'specular', 'speculate', 'speculation', 'speculative', 'speculator', 'speculatory', 'speculum', 'spice', 'spite', 'subspeciality', 'subspecies', 'suspect', 'suspicion', 'suspicious', 'transpicuous', 'trispecific', 'unispecific', 'unispecificity'],
        'letter': 's'
    }, {
        'roots': ['speir-', 'spor-'],
        'meaning': 'sow',
        'originLanguage': 'Greek',
        'examples': ['aplanospore', 'archesporium', 'carpospore', 'chlamydospore', 'diaspora', 'diaspore', 'endospore', 'esparto', 'eusporangium', 'exospore', 'heterosporous', 'heterospory', 'homosporous', 'isosporous', 'leptosporangium', 'megasporangium', 'megaspore', 'microsporangium', 'microspore', 'mitospore', 'sporadic', 'sporangiospore', 'sporangium', 'spore', 'sporocarp', 'sporophyte', 'teliospore', 'tetraspore', 'tetrasporophytic', 'zygospore'],
        'letter': 's'
    }, {
        'roots': ['spele-'],
        'meaning': 'cavern',
        'originLanguage': 'Greek',
        'examples': ['speleogen', 'speleogenesis', 'speleology', 'Speleomantes', 'speleomorphology', 'speleoseismite', 'speleothem', 'speleotherapy'],
        'letter': 's'
    }, {
        'roots': ['spelyng-'],
        'meaning': 'cave',
        'originLanguage': 'Greek',
        'examples': ['spelunk'],
        'letter': 's'
    }, {
        'roots': ['spend-', 'spond-'],
        'meaning': '',
        'originLanguage': 'Greek',
        'examples': ['spondaic', 'Sponde', 'spondee'],
        'letter': 's'
    }, {
        'roots': ['sper-'],
        'meaning': 'hope',
        'originLanguage': 'Latin',
        'examples': ['despair', 'desperado', 'desperate', 'desperation', 'esperance', 'prosper', 'prosperity', 'prosperous'],
        'letter': 's'
    }, {
        'roots': ['sperm-'],
        'meaning': 'seed',
        'originLanguage': 'Greek',
        'examples': ['angiosperm', 'endosperm', 'gymnosperm', 'perisperm', 'sperm', 'spermatid', 'spermatocyte', 'spermatogenesis', 'spermatogonium', 'spermatozoon', 'stenospermocarpy'],
        'letter': 's'
    }, {
        'roots': ['sphal-'],
        'meaning': 'cause to fall',
        'originLanguage': 'Greek',
        'examples': ['sphalerite', 'sphaleron'],
        'letter': 's'
    }, {
        'roots': ['sphen-'],
        'meaning': 'wedge',
        'originLanguage': 'Greek',
        'examples': ['sphenic', 'Sphenodon', 'sphenoid'],
        'letter': 's'
    }, {
        'roots': ['spher-'],
        'meaning': 'ball',
        'originLanguage': 'Greek',
        'examples': ['aspheric', 'hemisphere', 'hypersphere', 'mesosphere', 'pseudosphere', 'sphere', 'spherics', 'spheroid', 'spherometer', 'spherulite', 'stratosphere', 'trimetasphere'],
        'letter': 's'
    }, {
        'roots': ['sphing-', 'sphinct-'],
        'meaning': 'strangle',
        'originLanguage': 'Greek',
        'examples': ['sphincter'],
        'letter': 's'
    }, {
        'roots': ['sphondyl-'],
        'meaning': 'vertebra',
        'originLanguage': 'Greek',
        'examples': ['spondylitis', 'spondylolisthesis', 'spondylolysis', 'spondylosis', 'Temnospondyli'],
        'letter': 's'
    }, {
        'roots': ['sphrag-'],
        'meaning': 'seal',
        'originLanguage': 'Greek',
        'examples': ['sphragistic'],
        'letter': 's'
    }, {
        'roots': ['sphyg-'],
        'meaning': 'pulse',
        'originLanguage': 'Greek',
        'examples': ['asphyxia', 'sphygmic', 'sphygmochronograph', 'sphygmograph', 'sphygmomanometer', 'sphygmus'],
        'letter': 's'
    }, {
        'roots': ['spic-'],
        'meaning': 'spike',
        'originLanguage': 'Latin',
        'examples': ['spica', 'spicate', 'spicose', 'spicosity', 'spicular', 'spiculate', 'spicule', 'spiculiform'],
        'letter': 's'
    }, {
        'roots': ['spin-'],
        'meaning': 'thorn',
        'originLanguage': 'Latin',
        'examples': ['infraspinate', 'infraspinatus', 'interspinal', 'spinal', 'spine', 'spinel', 'spinescent', 'spiniferous', 'spiniform', 'spinose', 'spinous'],
        'letter': 's'
    }, {
        'roots': ['spir-'],
        'meaning': 'breathe',
        'originLanguage': 'Latin',
        'examples': ['aspire', 'conspire', 'expire', 'inspire', 'perspire', 'respiration', 'spirit'],
        'letter': 's'
    }, {
        'roots': ['splen-'],
        'meaning': 'spleen',
        'originLanguage': 'Greek',
        'examples': ['asplenia', 'hypersplenism', 'hyposplenia', 'polysplenia', 'splenectomy', 'splenic', 'splenitis', 'splenoid', 'splenomegaly'],
        'letter': 's'
    }, {
        'roots': ['spond-', 'spons-'],
        'meaning': 'a surety, guarantee; give assurance, promise solemnly',
        'originLanguage': 'Latin',
        'examples': ['correspond', 'correspondence', 'correspondent', 'corresponsive', 'cosponsor', 'despond', 'despondency', 'despondent', 'desponsage', 'desponsate', 'desponsation', 'disespouse', 'espousage', 'espousal', 'espouse', 'interspousal', 'irresponsibility', 'irresponsible', 'irresponsive', 'nonresponsive', 'respond', 'respondee', 'respondence', 'respondent', 'response', 'responsibility', 'responsible', 'responsion', 'responsive', 'responsivity', 'riposte', 'sponsal', 'sponsion', 'sponsional', 'sponsor', 'spousal', 'spouse'],
        'letter': 's'
    }, {
        'roots': ['spondyl-'],
        'meaning': 'vertebra',
        'originLanguage': 'Greek',
        'examples': ['platyspondyly', 'spondylid', 'spondylolisthesis', 'spondylolysis', 'spondylopyosis', 'spondyloschisis', 'spondylosis', 'spondylosyndesis', 'Spondylus'],
        'letter': 's'
    }, {
        'roots': ['spu-', 'sput-'],
        'meaning': 'spew, spit',
        'originLanguage': 'Latin',
        'examples': ['exspuition', 'sputum'],
        'letter': 's'
    }, {
        'roots': ['squal-'],
        'meaning': 'scaly, dirty, filthy',
        'originLanguage': 'Latin',
        'examples': ['squalid', 'squalidity', 'squalor'],
        'letter': 's'
    }, {
        'roots': ['squam-'],
        'meaning': 'scale',
        'originLanguage': 'Latin',
        'examples': ['squamous'],
        'letter': 's'
    }, {
        'roots': ['squarros-'],
        'meaning': 'spreading at tips',
        'originLanguage': 'Latin',
        'examples': ['squarrose'],
        'letter': 's'
    }, {
        'roots': ['st-'],
        'meaning': 'cause to stand',
        'originLanguage': 'Greek',
        'examples': ['acrostatic', 'actinostele', 'anastasis', 'antistatic', 'apostasy', 'apostate', 'astasia', 'astasis', 'astatic', 'astatine', 'catastasis', 'chronostasis', 'diastase', 'diastasis', 'diastatic', 'diasystem', 'ecstasy', 'ecstatic', 'epistasis', 'episteme', 'epistemic', 'epistemology', 'eustasis', 'eustatic', 'eustele', 'haplostele', 'homeostasis', 'homeostatic', 'hydrostatic', 'hypostasis', 'hypostasize', 'hypostatic', 'hypostatize', 'mesostatic', 'metastasis', 'metastasize', 'metastatic', 'metasystem', 'orthostates', 'orthostatic', 'protostele', 'stasimon', 'stasis', 'stater', 'static', 'statoblast', 'statocyst', 'statolith', 'stela', 'stele', 'systasis', 'system', 'systematic', 'systematize', 'systematology', 'systemic', 'teleutostatic'],
        'letter': 's'
    }, {
        'roots': ['st-'],
        'meaning': 'stand',
        'originLanguage': 'Latin',
        'examples': ['antestature', 'arrest', 'arrestant', 'arrestee', 'bistability', 'bistable', 'bistate', 'circumstance', 'circumstantial', 'consist', 'constable', 'constabulary', 'constancy', 'constant', 'constitute', 'consubstantiation', 'contrast', 'distance', 'distant', 'equidistance', 'equidistant', 'establish', 'estate', 'extant', 'inconstancy', 'inconstant', 'instability', 'instance', 'instant', 'obstacle', 'presto', 'stable', 'stamen', 'stamina', 'stance', 'stanchion', 'stanza', 'state', 'station', 'stationary', 'statistic', 'statue', 'status', 'staunch', 'stay', 'substance', 'substantial', 'substantiality', 'substantiate', 'substantiation', 'substantive', 'substate', 'substation', 'substitute', 'superstation', 'superstition', 'superstitious', 'transubstantiate', 'transubstantiation', 'tristate'],
        'letter': 's'
    }, {
        'roots': ['stagn-'],
        'meaning': 'pool of standing water',
        'originLanguage': 'Latin',
        'examples': ['stagnant'],
        'letter': 's'
    }, {
        'roots': ['stala-'],
        'meaning': 'dripping, trickling',
        'originLanguage': 'Greek',
        'examples': ['stalactite', 'stalagmite'],
        'letter': 's'
    }, {
        'roots': ['stann-'],
        'meaning': 'tin',
        'originLanguage': 'Latin',
        'examples': ['stannous'],
        'letter': 's'
    }, {
        'roots': ['staphyl-'],
        'meaning': 'bunch of grapes',
        'originLanguage': 'Greek',
        'examples': ['staphyledema', 'staphylion', 'staphylococcus', 'staphyloderma', 'staphyloplasty'],
        'letter': 's'
    }, {
        'roots': ['statu-', '-stitu-'],
        'meaning': 'stand',
        'originLanguage': 'Latin',
        'examples': ['institution', 'statute'],
        'letter': 's'
    }, {
        'roots': ['steat-'],
        'meaning': 'fat, tallow',
        'originLanguage': 'Greek',
        'examples': ['stearic acid', 'steatolysis', 'steatolytic', 'steatosis'],
        'letter': 's'
    }, {
        'roots': ['steg-'],
        'meaning': 'cover',
        'originLanguage': 'Greek',
        'examples': ['steganography', 'steganopod', 'Stegosaurus'],
        'letter': 's'
    }, {
        'roots': ['stell-', 'stol-'],
        'meaning': 'send',
        'originLanguage': 'Greek',
        'examples': ['apostle', 'centrostaltic', 'diastole', 'epistle', 'epistolic', 'epistolize', 'epistolography', 'eusystole', 'hypodiastole', 'peristalsis', 'peristaltic', 'peristole', 'stole', 'systaltic', 'systole'],
        'letter': 's'
    }, {
        'roots': ['stell-'],
        'meaning': 'star',
        'originLanguage': 'Latin',
        'examples': ['constellation', 'stellar'],
        'letter': 's'
    }, {
        'roots': ['sten-'],
        'meaning': 'stand',
        'originLanguage': 'Greek',
        'examples': ['apostasy', 'apostate'],
        'letter': 's'
    }, {
        'roots': ['sten-'],
        'meaning': 'narrow',
        'originLanguage': 'Greek',
        'examples': ['stenography', 'stenosis'],
        'letter': 's'
    }, {
        'roots': ['stere-'],
        'meaning': 'solid',
        'originLanguage': 'Greek',
        'examples': ['allosteric', 'stereochemistry', 'stereochromy', 'stereographic', 'stereography', 'stereoisomer', 'stereometry', 'stereophonic', 'stereopsis', 'stereoscope', 'stereoscopy', 'stereotaxis', 'stereotomy', 'stereotype', 'stereotypic', 'steric'],
        'letter': 's'
    }, {
        'roots': ['stern-'],
        'meaning': 'breastbone',
        'originLanguage': 'Greek',
        'examples': ['metasternum', 'prosternum', 'sternum'],
        'letter': 's'
    }, {
        'roots': ['stern-', 'strat-'],
        'meaning': 'spread, strew',
        'originLanguage': 'Latin',
        'examples': ['consternation', 'prostrate', 'stratify', 'stratum', 'stratus', 'street'],
        'letter': 's'
    }, {
        'roots': ['steth-'],
        'meaning': 'chest',
        'originLanguage': 'Greek',
        'examples': ['stethoscope'],
        'letter': 's'
    }, {
        'roots': ['sthen-'],
        'meaning': 'strength',
        'originLanguage': 'Greek',
        'examples': ['asthenia', 'asthenosphere', 'callisthenics', 'hyposthenia', 'sthène', 'sthenia'],
        'letter': 's'
    }, {
        'roots': ['stich-'],
        'meaning': 'line, row',
        'originLanguage': 'Greek',
        'examples': ['acrostic', 'cadastre', 'distich', 'distichous', 'haplostichous', 'hemistich', 'heptastich', 'monostich', 'monostichous', 'orthostichy', 'pentastich', 'polystichia', 'polystichous', 'stich', 'stichic', 'stichomancy', 'stichometry', 'stichomythia', 'telestich'],
        'letter': 's'
    }, {
        'roots': ['stich-'],
        'meaning': 'tunic',
        'originLanguage': 'Greek',
        'examples': ['sticharion'],
        'letter': 's'
    }, {
        'roots': ['stig-'],
        'meaning': 'mark, puncture',
        'originLanguage': 'Greek',
        'examples': ['anastigmat', 'anastigmatic', 'astigmatic', 'astigmatism', 'stigma', 'stigmatic'],
        'letter': 's'
    }, {
        'roots': ['still-'],
        'meaning': 'drip',
        'originLanguage': 'Latin',
        'examples': ['distillation', 'instill'],
        'letter': 's'
    }, {
        'roots': ['stimul-'],
        'meaning': 'goad, rouse, excite',
        'originLanguage': 'Latin',
        'examples': ['stimulate'],
        'letter': 's'
    }, {
        'roots': ['stin-'],
        'meaning': 'stand',
        'originLanguage': 'Latin',
        'examples': ['destination', 'obstinate'],
        'letter': 's'
    }, {
        'roots': ['stingu-', 'stinct-'],
        'meaning': 'apart',
        'originLanguage': 'Latin',
        'examples': ['distinction', 'distinguish'],
        'letter': 's'
    }, {
        'roots': ['stoch-'],
        'meaning': 'aim',
        'originLanguage': 'Greek',
        'examples': ['stochastic'],
        'letter': 's'
    }, {
        'roots': ['stom-'],
        'meaning': 'mouth',
        'originLanguage': 'Greek',
        'examples': ['anastomosis', 'anastomotic', 'deuterostome', 'monostomous', 'ozostomia', 'pentastomid', 'protostome', 'stoma', 'stomach', 'stomatalgia', 'stomatic', 'stomatoplasty', '-stome'],
        'letter': 's'
    }, {
        'roots': ['stor-'],
        'meaning': 'spread, strew',
        'originLanguage': 'Greek',
        'examples': ['biostrome', 'stroma'],
        'letter': 's'
    }, {
        'roots': ['strat-'],
        'meaning': 'army',
        'originLanguage': 'Greek',
        'examples': ['stratagem', 'strategic', 'strategist', 'strategus', 'strategy', 'stratocracy', 'stratography', 'stratonic'],
        'letter': 's'
    }, {
        'roots': ['streper-'],
        'meaning': 'noise',
        'originLanguage': 'Latin',
        'examples': ['obstreperous'],
        'letter': 's'
    }, {
        'roots': ['streph-', 'stroph-', 'strob-', 'stromb-'],
        'meaning': 'turn',
        'originLanguage': 'Greek',
        'examples': ['anastrophe', 'antistrophe', 'apostrophe', 'boustrophedon', 'catastrophe', 'catastrophic', 'catastrophism', 'epistrophe', 'monostrophe', 'monostrophic', 'strophe', 'strophic'],
        'letter': 's'
    }, {
        'roots': ['strept-'],
        'meaning': 'twisted',
        'originLanguage': 'Greek',
        'examples': ['Strepsiptera', 'strepsirrhine', 'streptococcus'],
        'letter': 's'
    }, {
        'roots': ['strig-'],
        'meaning': 'compress',
        'originLanguage': 'Latin',
        'examples': ['strigogyps'],
        'letter': 's'
    }, {
        'roots': ['strigos-'],
        'meaning': 'having stiff bristles',
        'originLanguage': 'Latin',
        'examples': ['strigose'],
        'letter': 's'
    }, {
        'roots': ['string-', 'strict-'],
        'meaning': 'tight, upright, stiff',
        'originLanguage': 'Latin',
        'examples': ['astringent', 'constrain', 'constrict', 'constringe', 'restrict', 'strain', 'strict', 'stringent'],
        'letter': 's'
    }, {
        'roots': ['stroph-'],
        'meaning': 'turn',
        'originLanguage': 'Greek',
        'examples': [''],
        'letter': 's'
    }, {
        'roots': ['stru-', 'struct-'],
        'meaning': 'to make up, build',
        'originLanguage': 'Latin',
        'examples': ['construct', 'construction', 'construe', 'destroy', 'destruct', 'instruct', 'obstruct', 'structure'],
        'letter': 's'
    }, {
        'roots': ['stud-'],
        'meaning': 'dedication',
        'originLanguage': 'Latin',
        'examples': ['étude', 'student'],
        'letter': 's'
    }, {
        'roots': ['stup-'],
        'meaning': 'wonder',
        'originLanguage': 'Latin',
        'examples': ['stupid', 'stupor'],
        'letter': 's'
    }, {
        'roots': ['styg-'],
        'meaning': 'Styx',
        'originLanguage': 'Greek',
        'examples': ['Stygian', 'stygiophobia'],
        'letter': 's'
    }, {
        'roots': ['styl-'],
        'meaning': 'column, pillar',
        'originLanguage': 'Greek',
        'examples': ['amphiprostyle', 'amphistyly', 'anastylosis', 'araeostyle', 'araeosystyle', 'blastostyle', 'diastyle', 'epistyle', 'eustyle', 'hexastyle', 'hyostyly', 'hypostyle', 'monostylous', 'octastyle', 'orthostyle', 'peristyle', 'prostyle', 'pycnostyle', 'stylite', 'Stylites', 'stylobate', 'styloid', 'stylus', 'systyle'],
        'letter': 's'
    }, {
        'roots': ['su-', 'sut-'],
        'meaning': 'sew',
        'originLanguage': 'Latin',
        'examples': ['couture', 'suture'],
        'letter': 's'
    }, {
        'roots': ['suad-', 'suas-'],
        'meaning': 'urge',
        'originLanguage': 'Latin',
        'examples': ['persuasion'],
        'letter': 's'
    }, {
        'roots': ['suav-'],
        'meaning': 'sweet',
        'originLanguage': 'Latin',
        'examples': ['assuage', 'suave', 'suavity'],
        'letter': 's'
    }, {
        'roots': ['sub-', 'su-', 'suf-', 'sug-', 'sup-', 'sus-'],
        'meaning': 'below',
        'originLanguage': 'Latin',
        'examples': ['submarine', 'submerge', 'suffix', 'suggest', 'support'],
        'letter': 's'
    }, {
        'roots': ['subter-'],
        'meaning': 'under',
        'originLanguage': 'Latin',
        'examples': ['subterfuge'],
        'letter': 's'
    }, {
        'roots': ['sucr-'],
        'meaning': 'sugar',
        'originLanguage': 'Latin',
        'examples': ['sucrose'],
        'letter': 's'
    }, {
        'roots': ['sud-'],
        'meaning': 'sweat',
        'originLanguage': 'Latin',
        'examples': ['exudate', 'exude', 'sudarium', 'sudoriferous', 'transudate'],
        'letter': 's'
    }, {
        'roots': ['sui-'],
        'meaning': 'self',
        'originLanguage': 'Latin',
        'examples': ['sui generis', 'suicide'],
        'letter': 's'
    }, {
        'roots': ['sulc-'],
        'meaning': 'furrow',
        'originLanguage': 'Latin',
        'examples': ['sulcus'],
        'letter': 's'
    }, {
        'roots': ['sum-'],
        'meaning': 'sum',
        'originLanguage': 'Latin',
        'examples': ['consummate', 'consummation', 'sum', 'summa cum laude', 'summary', 'summation'],
        'letter': 's'
    }, {
        'roots': ['sum-', 'sumpt-'],
        'meaning': 'take',
        'originLanguage': 'Latin',
        'examples': ['assume', 'assumption', 'consume', 'consumption', 'presumption', 'subsume'],
        'letter': 's'
    }, {
        'roots': ['super-'],
        'meaning': 'above, over',
        'originLanguage': 'Latin',
        'examples': ['insuperable', 'soprano', 'sovereign', 'summit', 'superable', 'superb', 'supercilious', 'supercomputer', 'superficial', 'superfluous', 'superimpose', 'superior', 'superlative', 'supermarket', 'supernal', 'supernatural', 'supernova', 'superposition', 'superpower', 'superscript', 'supersede', 'supersonic', 'superstition', 'supervene', 'supervise', 'supreme', 'supremum', 'surname', 'surplus', 'surround', 'survive'],
        'letter': 's'
    }, {
        'roots': ['supin-'],
        'meaning': 'lying back',
        'originLanguage': 'Latin',
        'examples': ['supination', 'supine'],
        'letter': 's'
    }, {
        'roots': ['supra-'],
        'meaning': 'above, over',
        'originLanguage': 'Latin',
        'examples': ['supranationalism'],
        'letter': 's'
    }, {
        'roots': ['surd-'],
        'meaning': 'deaf',
        'originLanguage': 'Latin',
        'examples': ['absurdity'],
        'letter': 's'
    }, {
        'roots': ['surg-'],
        'meaning': 'rise',
        'originLanguage': 'Latin',
        'examples': ['insurgent', 'insurrection', 'resurgent', 'resurrection'],
        'letter': 's'
    }, {
        'roots': ['sybar-'],
        'meaning': 'Sybaris',
        'originLanguage': 'Greek',
        'examples': ['Sybarite', 'sybaritic', 'sybaritism'],
        'letter': 's'
    }, {
        'roots': ['syc-'],
        'meaning': 'fig',
        'originLanguage': 'Greek',
        'examples': ['sycomancy', 'sycophant'],
        'letter': 's'
    }, {
        'roots': ['syn-', 'sy-', 'syg-', 'syl-', 'sym-', 'sys-'],
        'meaning': 'with',
        'originLanguage': 'Greek',
        'examples': ['syllogism', 'symbol', 'symmetry', 'sympathy', 'synonym', 'synchronous', 'synonym', 'system'],
        'letter': 's'
    }, {
        'roots': ['syring-'],
        'meaning': 'pipe',
        'originLanguage': 'Greek',
        'examples': ['syringe', 'Syringodea', 'Syringoderma', 'Syringogaster', 'syringoma', 'syringomyelia', 'syrinx'],
        'letter': 's'
    }],
    't': [{
        'roots': ['tac-', '-tic-'],
        'meaning': 'be silent',
        'originLanguage': 'Latin',
        'examples': ['reticent', 'reticence', 'tacit', 'taciturn'],
        'letter': 't'
    }, {
        'roots': ['tach-'],
        'meaning': 'swift',
        'originLanguage': 'Greek',
        'examples': ['tachometer', 'tachycardia', 'tachyrhythmia', 'tachytelic'],
        'letter': 't'
    }, {
        'roots': ['taeni-'],
        'meaning': 'ribbon',
        'originLanguage': 'Greek',
        'examples': ['diplotene', 'leptotene', 'pachytene', 'taenia', 'taenidia', 'taenidium', 'taeniodont', 'Taeniolabis', 'zygotene'],
        'letter': 't'
    }, {
        'roots': ['tag-'],
        'meaning': 'arrange, order',
        'originLanguage': 'Greek',
        'examples': ['ataxia', 'chemotaxis', 'epitaxis', 'eutaxy', 'hypotaxis', 'magnetotaxis', 'metasyntactic', 'parataxis', 'phonotactic', 'phonotactics', 'phototaxis', 'rheotaxis', 'syntactic', 'syntagma', 'syntagmatic', 'syntax', 'tactic', 'tagma', 'taxis', 'taxonomy', 'thermotaxis'],
        'letter': 't'
    }, {
        'roots': ['tal-'],
        'meaning': 'ankle',
        'originLanguage': 'Latin',
        'examples': ['talus'],
        'letter': 't'
    }, {
        'roots': ['tang-', '-ting-', 'tact-', 'tag-'],
        'meaning': 'touch',
        'originLanguage': 'Latin',
        'examples': ['attain', 'contact', 'contagious', 'contingent', 'contingency', 'contiguous', 'intact', 'tactile', 'tangent', 'tangible'],
        'letter': 't'
    }, {
        'roots': ['tapet-'],
        'meaning': 'carpet',
        'originLanguage': 'Latin',
        'examples': ['tapestry', 'tapetum', 'tapis'],
        'letter': 't'
    }, {
        'roots': ['tarac-'],
        'meaning': 'stir',
        'originLanguage': 'Greek',
        'examples': ['ataractic', 'ataraxia'],
        'letter': 't'
    }, {
        'roots': ['tard-'],
        'meaning': 'slow',
        'originLanguage': 'Latin',
        'examples': ['retard', 'tardigrade', 'tardy'],
        'letter': 't'
    }, {
        'roots': ['tars-'],
        'meaning': 'ankle',
        'originLanguage': 'Greek',
        'examples': ['metatarsus', 'tarsal', 'tarsoclasis', 'tarsometatarsus', 'tarsus'],
        'letter': 't'
    }, {
        'roots': ['taur-'],
        'meaning': 'bull',
        'originLanguage': 'Greek',
        'examples': ['Minotaur', 'taurobolium', 'taurocholic', 'tauromachy'],
        'letter': 't'
    }, {
        'roots': ['taur-'],
        'meaning': 'bull',
        'originLanguage': 'Latin',
        'examples': ['Taurus'],
        'letter': 't'
    }, {
        'roots': ['tec-'],
        'meaning': 'melt',
        'originLanguage': 'Greek',
        'examples': ['eutectic', 'eutectoid'],
        'letter': 't'
    }, {
        'roots': ['tec-', 'toc-'],
        'meaning': 'childbirth',
        'originLanguage': 'Greek',
        'examples': ['ditokous', 'dystocia', 'embiotocid', 'monotocous', 'teknonymous', 'teknonymy', 'tokophobia'],
        'letter': 't'
    }, {
        'roots': ['techn-'],
        'meaning': 'art, skill',
        'originLanguage': 'Greek',
        'examples': ['architect', 'polytechnic', 'techne', 'technique', 'technocracy', 'technocrat', 'technogaianism', 'technology', 'technophilia', 'technophobia', 'tectonic'],
        'letter': 't'
    }, {
        'roots': ['tecn-'],
        'meaning': 'child',
        'originLanguage': 'Greek',
        'examples': ['teknonymous', 'teknonymy'],
        'letter': 't'
    }, {
        'roots': ['teg-', 'tect-'],
        'meaning': 'cover',
        'originLanguage': 'Latin',
        'examples': ['contection', 'detect', 'detectible', 'detection', 'detective', 'detector', 'integument', 'integumentary', 'obtect', 'pretectal', 'pretectum', 'protect', 'protection', 'protective', 'protector', 'protectorate', 'protectory', 'protectress', 'protectrix', 'protégé', 'protégée', 'tectrix', 'tectum', 'tegmen', 'tegmental', 'tegula', 'tegular', 'tegument', 'tile', 'tog', 'toga', 'togate', 'togavirus', 'toggery'],
        'letter': 't'
    }, {
        'roots': ['tele-'],
        'meaning': 'far, end',
        'originLanguage': 'Greek',
        'examples': ['telegram', 'telegraph', 'telemetry', 'telepathy', 'telephone', 'telescope', 'television'],
        'letter': 't'
    }, {
        'roots': ['tele-'],
        'meaning': 'complete',
        'originLanguage': 'Greek',
        'examples': ['atelectasis', 'ateleiosis', 'atelophobia', 'teleology', 'telesis', 'toll'],
        'letter': 't'
    }, {
        'roots': ['tem-', 'tom-'],
        'meaning': 'cut',
        'originLanguage': 'Greek',
        'examples': ['acrotomophilia', 'anatomy', 'apotemnophilia', 'atom', 'atomic', 'autotomy', 'diatom', 'dichotomous', 'dichotomy', 'ectomy', 'entomology', 'entomomancy', 'entomophagous', 'entomophilous', 'epitome', 'monatomic', 'pentatomic', 'polyatomic', 'polytomy', 'Temnospondyli', 'tmesis', 'tome', 'tomogram', 'tomography', 'trichotomous', 'trichotomy'],
        'letter': 't'
    }, {
        'roots': ['temn-', 'tempt-'],
        'meaning': ' –',
        'originLanguage': 'Latin',
        'examples': ['contemn', 'contemnible', 'contempt', 'contemptible', 'contumacious', 'contumacy', 'contumelious', 'contumely'],
        'letter': 't'
    }, {
        'roots': ['tempor-'],
        'meaning': 'time',
        'originLanguage': 'Latin',
        'examples': ['contemporaneous', 'contemporary', 'extemporaneous', 'tempo', 'temporal', 'temporary'],
        'letter': 't'
    }, {
        'roots': ['ten-', 'ton-'],
        'meaning': 'stretch',
        'originLanguage': 'Greek',
        'examples': ['anhemitonic', 'atelectasis', 'atonic', 'atritonic', 'barytone', 'catatonia', 'catatoniac', 'catatonic', 'decatonic', 'diatonic', 'ditone', 'dodecatonic', 'dystonia', 'ectasia', 'enneatonic', 'entasia', 'entasis', 'epitasis', 'hemitonia', 'hemitonic', 'heptatonic', 'hexatonic', 'hyperisotonic', 'hypertonia', 'hypertonic', 'hypotenuse', 'hypotonia', 'hypotonic', 'isotonic', 'microtone', 'monotone', 'monotonic', 'monotonous', 'monotony', 'neoteny', 'octatonic', 'oxytone', 'paroxytone', 'pentatonic', 'peritoneum', 'polytonic', 'proparoxytone', 'protasis', 'pyelectasis', 'syntonic', 'tetanolysin', 'tetanospasmin', 'tetanus', 'tetany', 'tetratonic', 'tone', 'tonic', 'tonoplast', 'tritonic', 'tune'],
        'letter': 't'
    }, {
        'roots': ['ten-', '-tin-', 'tent-'],
        'meaning': 'hold, keep',
        'originLanguage': 'Latin',
        'examples': ['abstain', 'abstention', 'abstinence', 'abstinent', 'appertain', 'appertinent', 'appurtenance', 'appurtenant', 'contain', 'containment', 'content', 'contentive', 'contentment', 'continence', 'continent', 'continental', 'continual', 'continuance', 'continuant', 'continuation', 'continuative', 'continue', 'continuity', 'continuous', 'continuum', 'contratenor', 'countenance', 'detain', 'detainder', 'detainee', 'detainer', 'detainment', 'detention', 'detinue', 'discontent', 'discontentment', 'discontinuance', 'discontinuation', 'discontinue', 'discontinuity', 'discontinuous', 'entertain', 'entertainment', 'equicontinuity', 'equicontinuous', 'impertinence', 'impertinent', 'incontinence', 'incontinent', 'intenible', 'intercontinental', 'irretentive', 'lieutenant', 'maintain', 'maintenance', 'malcontent', 'obtain', 'obtainment', 'obtention', 'pertain', 'pertinacious', 'pertinacity', 'pertinence', 'pertinent', 'purtenance', 'reobtain', 'retain', 'retainer', 'retainment', 'retention', 'retentive', 'retinue', 'se-tenant', 'sustenance', 'sustentacular', 'sustentaculum', 'sustentation', 'sustention', 'tenable', 'tenace', 'tenacious', 'tenacity', 'tenancy', 'tenant', 'tenet', 'tenor', 'tenure', 'tenurial', 'tenuto', 'transcontinental'],
        'letter': 't'
    }, {
        'roots': ['tend-', 'tens-'],
        'meaning': 'stretch, strain',
        'originLanguage': 'Latin',
        'examples': ['ambitendency', 'attempt', 'attend', 'attendee', 'attent', 'attention', 'attentive', 'coextend', 'coextension', 'coextensive', 'contend', 'contention', 'contentious', 'detent', 'détente', 'distend', 'distension', 'distent', 'distention', 'entendre', 'entente', 'extend', 'extensible', 'extension', 'extensional', 'extensionality', 'extensive', 'extensivity', 'extensor', 'extent', 'inattention', 'inattentive', 'inextensible', 'intend', 'intense', 'intensification', 'intension', 'intensional', 'intensity', 'intensive', 'intent', 'obtend', 'obtension', 'ostensible', 'ostension', 'ostensive', 'ostensory', 'ostent', 'ostentation', 'ostentatious', 'portend', 'portension', 'portent', 'portentous', 'pretend', 'pretense', 'pretension', 'subtend', 'subtense', 'superintend', 'superintendency', 'superintendent', 'tempt', 'temptation', 'tend', 'tendency', 'tendential', 'tendentious', 'tender', 'tense', 'tensible', 'tensile', 'tensility', 'tension', 'tensure', 'tent', 'tentacle', 'tentacular', 'tentage', 'tentation', 'tentative', 'tentiginous', 'tentorium'],
        'letter': 't'
    }, {
        'roots': ['tenu-'],
        'meaning': 'slender, thin',
        'originLanguage': 'Latin',
        'examples': ['attenuate', 'extenuate', 'tenuous'],
        'letter': 't'
    }, {
        'roots': ['tep-'],
        'meaning': 'be warm',
        'originLanguage': 'Latin',
        'examples': ['subtepid', 'tepefaction', 'tepid', 'tepidarium', 'tepidity', 'tepor'],
        'letter': 't'
    }, {
        'roots': ['ter-', 'trit-'],
        'meaning': 'rub, wear',
        'originLanguage': 'Latin',
        'examples': ['attrition', 'contrite', 'contrition', 'detriment', 'detrimental', 'detrital', 'detrition', 'detritivore', 'detritivorous', 'detritus', 'retriment', 'tribulation', 'trite', 'triturate', 'trituration', 'triture'],
        'letter': 't'
    }, {
        'roots': ['tere-'],
        'meaning': 'guard',
        'originLanguage': 'Greek',
        'examples': ['synteresis'],
        'letter': 't'
    }, {
        'roots': ['teret-'],
        'meaning': 'rounded',
        'originLanguage': 'Latin',
        'examples': ['subterete', 'teretial'],
        'letter': 't'
    }, {
        'roots': ['terg-', 'ters-'],
        'meaning': 'wipe',
        'originLanguage': 'Latin',
        'examples': ['absterge', 'abstergent', 'abstersion', 'abstersive', 'deterge', 'detergency', 'detergent', 'terse'],
        'letter': 't'
    }, {
        'roots': ['termin-'],
        'meaning': 'boundary, limit, end',
        'originLanguage': 'Latin',
        'examples': ['determine', 'interminable', 'terminal', 'termination'],
        'letter': 't'
    }, {
        'roots': ['tern-'],
        'meaning': 'three each',
        'originLanguage': 'Latin',
        'examples': ['ternary', 'ternion'],
        'letter': 't'
    }, {
        'roots': ['terr-'],
        'meaning': 'earth',
        'originLanguage': 'Latin',
        'examples': ['inter', 'subterranean', 'terrace', 'terracotta', 'terrain', 'terrarium', 'terrestrial', 'territory'],
        'letter': 't'
    }, {
        'roots': ['terti-'],
        'meaning': 'third',
        'originLanguage': 'Latin',
        'examples': ['tertian', 'tertiary'],
        'letter': 't'
    }, {
        'roots': ['test-'],
        'meaning': 'witness',
        'originLanguage': 'Latin',
        'examples': ['attest', 'contest', 'detest', 'protest', 'testament', 'testify', 'testimony'],
        'letter': 't'
    }, {
        'roots': ['tetart-'],
        'meaning': 'fourth',
        'originLanguage': 'Greek',
        'examples': ['tetartanopsia', 'tetartohedric'],
        'letter': 't'
    }, {
        'roots': ['tetr-'],
        'meaning': 'four',
        'originLanguage': 'Greek',
        'examples': ['diatessaron', 'tetragon', 'tetrahedron', 'tetralogy', 'tetrameter', 'tetraphobia', 'tetrapod', 'tetrode'],
        'letter': 't'
    }, {
        'roots': ['teuch-'],
        'meaning': 'make',
        'originLanguage': 'Greek',
        'examples': ['Heptateuch', 'octateuch', 'Pentateuch'],
        'letter': 't'
    }, {
        'roots': ['tex-', 'text-'],
        'meaning': 'weave',
        'originLanguage': 'Latin',
        'examples': ['context', 'subtle', 'pretext', 'text', 'textile', 'texture'],
        'letter': 't'
    }, {
        'roots': ['thalam-'],
        'meaning': 'chamber, bed',
        'originLanguage': 'Greek',
        'examples': ['epithalamion', 'hypothalamus', 'prothalamion', 'thalamotomy', 'thalamus'],
        'letter': 't'
    }, {
        'roots': ['thalass-'],
        'meaning': 'sea',
        'originLanguage': 'Greek',
        'examples': ['Panthalassa', 'thalassemia', 'thalassic', 'thalassophobia'],
        'letter': 't'
    }, {
        'roots': ['than-'],
        'meaning': 'death',
        'originLanguage': 'Greek',
        'examples': ['euthanasia', 'thanatocoenosis', 'thanatoid', 'thanatology', 'thanatophobia', 'thanatophoric', 'thanatopsis'],
        'letter': 't'
    }, {
        'roots': ['thaumat-'],
        'meaning': 'miracle',
        'originLanguage': 'Greek',
        'examples': ['thaumatology', 'thaumaturge'],
        'letter': 't'
    }, {
        'roots': ['the-', 'thus-'],
        'meaning': 'god',
        'originLanguage': 'Greek',
        'examples': ['atheism', 'atheistic', 'ditheism', 'enthusiasm', 'monotheism', 'Pantheon', 'polytheism', 'Thea', 'theobromine', 'theocracy', 'theodicy', 'Theodore', 'theogony', 'theology', 'theophobia', 'Timothy', 'tritheism'],
        'letter': 't'
    }, {
        'roots': ['the-'],
        'meaning': 'put',
        'originLanguage': 'Greek',
        'examples': ['anathema', 'anathematic', 'antithesis', 'antithetic', 'apothecium', 'athematic', 'Bibliotheca', 'bodega', 'boutique', 'deem', 'doom', 'enthesis', 'enthetic', 'epenthesis', 'epenthetic', 'epitheca', 'epithet', 'hypothec', 'hypothesis', 'monothematic', 'nomothetic', 'oligosynthetic', 'parenthesis', 'parenthetic', 'polysynthetic', 'prosthesis', 'prosthetic', 'prothesis', 'prothetic', 'pseudothecium', 'synthesis', 'synthetic', 'theca', 'thecium', 'thematic', 'theme', 'Themis', 'thesaurus', 'thesis', 'treasure'],
        'letter': 't'
    }, {
        'roots': ['thea-'],
        'meaning': 'view',
        'originLanguage': 'Greek',
        'examples': ['amphitheatre', 'metatheatre', 'theatre', 'theatric'],
        'letter': 't'
    }, {
        'roots': ['thel-'],
        'meaning': 'nipple',
        'originLanguage': 'Greek',
        'examples': ['athelia', 'endothelium', 'epithelium', 'mesothelioma', 'mesothelium', 'thelium', 'thelial'],
        'letter': 't'
    }, {
        'roots': ['theori-'],
        'meaning': 'speculation',
        'originLanguage': 'Greek',
        'examples': ['theorem', 'theoretic', 'theorist', 'theorize', 'theory'],
        'letter': 't'
    }, {
        'roots': ['ther-'],
        'meaning': 'beast, animal',
        'originLanguage': 'Greek',
        'examples': ['therianthropy', 'theroid', 'theropod', 'theropsid'],
        'letter': 't'
    }, {
        'roots': ['therap-'],
        'meaning': 'serve',
        'originLanguage': 'Greek',
        'examples': ['therapeutic', 'therapist', 'therapy'],
        'letter': 't'
    }, {
        'roots': ['therm-'],
        'meaning': 'heat, warm',
        'originLanguage': 'Greek',
        'examples': ['thermal', 'athermancy', 'diathermancy', 'ectotherm', 'endotherm', 'endothermic', 'exothermic', 'geothermic', 'homeothermy', 'hyperthermia', 'hypothermia', 'isotherm', 'poikilotherm', 'thermobaric', 'thermochromism', 'thermodynamic', 'thermolysis', 'thermometer', 'thermophilic', 'thermophobia', 'thermoplastic', 'thermoplegia', 'thermos', 'thermosphere', 'thermostat', 'thermostatic'],
        'letter': 't'
    }, {
        'roots': ['thig-'],
        'meaning': 'touch',
        'originLanguage': 'Greek',
        'examples': ['antithixotropic', 'thigmonasty', 'thigmotaxis', 'thixotropic', 'thixotropy'],
        'letter': 't'
    }, {
        'roots': ['thorac-'],
        'meaning': 'chest',
        'originLanguage': 'Greek',
        'examples': ['hemothorax', 'pneumothorax', 'thoracic', 'thorax'],
        'letter': 't'
    }, {
        'roots': ['thym-'],
        'meaning': 'mood',
        'originLanguage': 'Greek',
        'examples': ['dysthymia'],
        'letter': 't'
    }, {
        'roots': ['thyr-'],
        'meaning': 'door',
        'originLanguage': 'Greek',
        'examples': ['thyratron'],
        'letter': 't'
    }, {
        'roots': ['thyre-'],
        'meaning': 'large shield',
        'originLanguage': 'Greek',
        'examples': ['Thyreophora', 'thyroid', 'thyrotropin', 'thyroxine'],
        'letter': 't'
    }, {
        'roots': ['tim-'],
        'meaning': 'be afraid',
        'originLanguage': 'Latin',
        'examples': ['timid', 'timorous'],
        'letter': 't'
    }, {
        'roots': ['ting-', 'tinct-'],
        'meaning': 'dye, moisten',
        'originLanguage': 'Latin',
        'examples': ['aquatint', 'distain', 'mezzotint', 'tinct', 'tinctorial', 'tincture', 'tinge', 'tingent', 'tint'],
        'letter': 't'
    }, {
        'roots': ['tom-'],
        'meaning': 'cut',
        'originLanguage': 'Greek',
        'examples': ['anatomy', 'appendectomy', 'atom', 'dichotomy', 'ectomy', 'embolectomy', 'tome', 'tonsillectomy', 'vasectomy'],
        'letter': 't'
    }, {
        'roots': ['ton-'],
        'meaning': 'stretch',
        'originLanguage': 'Greek',
        'examples': ['isotonic', 'monotone', 'tone'],
        'letter': 't'
    }, {
        'roots': ['top-'],
        'meaning': 'place, location',
        'originLanguage': 'Greek',
        'examples': ['atopic', 'atopy', 'dystopia', 'ectopia', 'ectopic', 'entopic', 'epitope', 'eutopia', 'isotope', 'nomotopic', 'polytope', 'topiary', 'topic', 'topography', 'topology', 'toponomastics', 'toponym', 'toponymy', 'topos', 'utopia', 'zonotope'],
        'letter': 't'
    }, {
        'roots': ['torn-'],
        'meaning': 'turn, rotate',
        'originLanguage': 'Latin from Greek',
        'examples': ['tornado', 'tournament', 'turn'],
        'letter': 't'
    }, {
        'roots': ['torpe-'],
        'meaning': 'be numb',
        'originLanguage': 'Latin',
        'examples': ['torpent', 'torpid', 'torpor'],
        'letter': 't'
    }, {
        'roots': ['torqu-', 'tort-'],
        'meaning': 'twist',
        'originLanguage': 'Latin',
        'examples': ['contort', 'distort', 'extort', 'extortion', 'retort', 'torque', 'torsion', 'tortuous', 'torture'],
        'letter': 't'
    }, {
        'roots': ['tot-'],
        'meaning': 'all, whole',
        'originLanguage': 'Latin',
        'examples': ['subtotal', 'total', 'totality'],
        'letter': 't'
    }, {
        'roots': ['tox-'],
        'meaning': 'arrow, bow, poison',
        'originLanguage': 'Greek',
        'examples': ['anatoxin', 'antitoxin', 'autotoxin', 'exotoxin', 'intoxicate', 'neurotoxin', 'psychotoxic', 'toxic', 'toxin', 'toxoid', 'toxology', 'toxoplasmosis'],
        'letter': 't'
    }, {
        'roots': ['trab-'],
        'meaning': 'beam',
        'originLanguage': 'Latin',
        'examples': ['trabeculae'],
        'letter': 't'
    }, {
        'roots': ['trach-'],
        'meaning': 'rough',
        'originLanguage': 'Greek',
        'examples': ['trachea', 'tracheids', 'tracheitis', 'tracheophyte', 'tracheostomy', 'tracheotomy', 'trachoma'],
        'letter': 't'
    }, {
        'roots': ['trag-'],
        'meaning': 'he-goat',
        'originLanguage': 'Greek',
        'examples': ['tragedy', 'tragic', 'tragus'],
        'letter': 't'
    }, {
        'roots': ['trah-', 'tract-'],
        'meaning': 'draw, pull',
        'originLanguage': 'Latin',
        'examples': ['abstract', 'attract', 'contract', 'detract', 'retract', 'subtract', 'subtrahend', 'tractable', 'traction', 'tractor'],
        'letter': 't'
    }, {
        'roots': ['trans-', 'tra-', 'tran-'],
        'meaning': 'across',
        'originLanguage': 'Latin',
        'examples': ['intransigent', 'tradition', 'transact', 'transcend', 'transient', 'transitory', 'transparent', 'transport'],
        'letter': 't'
    }, {
        'roots': ['trapez-'],
        'meaning': 'four-legged, table',
        'originLanguage': 'Greek',
        'examples': ['trapeze', 'trapezium', 'trapezius', 'trapezohedron', 'trapezoid'],
        'letter': 't'
    }, {
        'roots': ['traum-'],
        'meaning': 'wound',
        'originLanguage': 'Greek',
        'examples': ['trauma', 'traumatic', 'traumatize', 'traumatophobia'],
        'letter': 't'
    }, {
        'roots': ['trecent-'],
        'meaning': 'three hundred',
        'originLanguage': 'Latin',
        'examples': ['trecentennial', 'trecentillion'],
        'letter': 't'
    }, {
        'roots': ['trech-', 'troch-'],
        'meaning': 'run, wheel',
        'originLanguage': 'Greek',
        'examples': ['ditrochee', 'epitrochoid', 'hypotrochoid', 'trochaic', 'trochanter', 'trochee', 'trochelminth', 'trochlea', 'trochophore', 'trochoid'],
        'letter': 't'
    }, {
        'roots': ['tredec-'],
        'meaning': 'thirteen',
        'originLanguage': 'Latin',
        'examples': ['tredecimal'],
        'letter': 't'
    }, {
        'roots': ['treiskaidek-'],
        'meaning': 'thirteen',
        'originLanguage': 'Greek',
        'examples': ['triskaidekaphobia'],
        'letter': 't'
    }, {
        'roots': ['trem-'],
        'meaning': 'tremble',
        'originLanguage': 'Latin',
        'examples': ['tremor'],
        'letter': 't'
    }, {
        'roots': ['trema-'],
        'meaning': 'hole',
        'originLanguage': 'Greek',
        'examples': ['monotrematous', 'monotreme', 'trema', 'tréma', 'trematode'],
        'letter': 't'
    }, {
        'roots': ['trep-', 'trop-'],
        'meaning': 'turn',
        'originLanguage': 'Greek',
        'examples': ['allotrope', 'anisotropy', 'Atropos', 'ectropion', 'entropic', 'entropion', 'entropy', 'heliotropism', 'isentropic', 'isotrope', 'isotropic', 'isotropy', 'pleiotropic', 'pleiotropy', 'polytrope', 'protrepsis', 'protreptic', 'psychotropic', 'treponeme', 'treponematosis', 'treponemiasis', 'trope', 'tropic', 'tropism', 'tropopause', 'troposphere', 'trove'],
        'letter': 't'
    }, {
        'roots': ['treph-', 'troph-'],
        'meaning': 'feed, grow',
        'originLanguage': 'Greek',
        'examples': ['amyotrophic', 'atrophy', 'autotroph', 'auxotrophy', 'chemolithoautotroph', 'dystrophy', 'hemidystrophy', 'heterotroph', 'hypertrophy', 'lithoautotroph', 'lithotroph', 'mixotroph', 'organotroph', 'phagotrophy', 'photoheterotroph', 'phototroph', 'phototrophic', 'phototrophy', 'pogonotrophy', 'poliodystrophy', 'prototrophy', 'trophectoderm', 'trophic', 'trophobiosis', 'trophobiotic', 'trophoblast', 'trophoblastic', 'trophozoite'],
        'letter': 't'
    }, {
        'roots': ['trepid-'],
        'meaning': 'tremble',
        'originLanguage': 'Latin',
        'examples': ['intrepid', 'trepid', 'trepidation'],
        'letter': 't'
    }, {
        'roots': ['tri-'],
        'meaning': 'three',
        'originLanguage': 'Greek',
        'examples': ['atritonic', 'triad', 'triadic', 'Triassic', 'tricycle', 'trigon', 'triode', 'tripod', 'trisyllabic', 'tritonic'],
        'letter': 't'
    }, {
        'roots': ['tri-'],
        'meaning': 'three',
        'originLanguage': 'Latin',
        'examples': ['triangle', 'triumvirate', 'trivia'],
        'letter': 't'
    }, {
        'roots': ['trib-', 'tript-'],
        'meaning': 'rub',
        'originLanguage': 'Greek',
        'examples': ['diatribe', 'tribochromism', 'tribology', 'trypsin', 'tryptic'],
        'letter': 't'
    }, {
        'roots': ['tribu-'],
        'meaning': 'pay',
        'originLanguage': 'Latin',
        'examples': ['attribute', 'contribute', 'retribution', 'tribe', 'tribulation', 'tribunal', 'tribune', 'tributary', 'tribute'],
        'letter': 't'
    }, {
        'roots': ['tricen-'],
        'meaning': 'thirty each',
        'originLanguage': 'Latin',
        'examples': ['tricenary'],
        'letter': 't'
    }, {
        'roots': ['tricesim-', 'trigesim-'],
        'meaning': 'thirtieth',
        'originLanguage': 'Latin',
        'examples': ['trigesimal'],
        'letter': 't'
    }, {
        'roots': ['trich-'],
        'meaning': 'hair',
        'originLanguage': 'Greek',
        'examples': ['peritrichous', 'trichopathophobia', 'Trichoptera'],
        'letter': 't'
    }, {
        'roots': ['trin-'],
        'meaning': 'three each',
        'originLanguage': 'Latin',
        'examples': ['trinary', 'trine', 'trinity'],
        'letter': 't'
    }, {
        'roots': ['trit-'],
        'meaning': 'third',
        'originLanguage': 'Greek',
        'examples': ['tritagonist', 'tritanomaly', 'tritanopia', 'trite', 'tritium'],
        'letter': 't'
    }, {
        'roots': ['tritic-'],
        'meaning': 'wheat',
        'originLanguage': 'Latin',
        'examples': ['triticale'],
        'letter': 't'
    }, {
        'roots': ['troch-'],
        'meaning': 'wheel',
        'originLanguage': 'Greek',
        'examples': ['trochlea'],
        'letter': 't'
    }, {
        'roots': ['trop-'],
        'meaning': 'turn',
        'originLanguage': 'Greek',
        'examples': ['contrive', 'heliotropism', 'isotrope', 'psychotropic', 'retrieve', 'trope', 'tropic', 'tropism', 'troposphere', 'troubadour', 'trove'],
        'letter': 't'
    }, {
        'roots': ['troph-'],
        'meaning': 'feed, grow',
        'originLanguage': 'Greek',
        'examples': ['dystrophy', 'pogonotrophy', 'trophic'],
        'letter': 't'
    }, {
        'roots': ['truc-'],
        'meaning': 'fierce',
        'originLanguage': 'Latin',
        'examples': ['truculent'],
        'letter': 't'
    }, {
        'roots': ['trud-', 'trus-'],
        'meaning': 'thrust',
        'originLanguage': 'Latin',
        'examples': ['abstrude', 'abstruse', 'abstrusion', 'abstrusity', 'detrude', 'detrusion', 'detrusor', 'extrude', 'extrusible', 'extrusion', 'extrusive', 'inobtrusive', 'intrude', 'intrusion', 'intrusive', 'nonintrusive', 'obtrude', 'obtrusion', 'obtrusive', 'protrude', 'protrudent', 'protrusile', 'protrusion', 'protrusive', 'retrude', 'retruse', 'retrusion', 'retrusive'],
        'letter': 't'
    }, {
        'roots': ['trunc-'],
        'meaning': 'cut off',
        'originLanguage': 'Latin',
        'examples': ['trench', 'trenchant', 'truncate', 'truncheon', 'trunk'],
        'letter': 't'
    }, {
        'roots': ['tryp-'],
        'meaning': 'bore',
        'originLanguage': 'Greek',
        'examples': ['trepan', 'trypanophobia', 'trypanosome'],
        'letter': 't'
    }, {
        'roots': ['tum-'],
        'meaning': 'be swollen',
        'originLanguage': 'Latin',
        'examples': ['detumescence', 'detumescent', 'intumescence', 'tumefacient', 'tumefaction', 'tumesce', 'tumescence', 'tumescent', 'tumid', 'tumidity', 'tumor', 'tumorous', 'tumular', 'tumulose', 'tumulous', 'tumult', 'tumultuary', 'tumultuous', 'tumulus'],
        'letter': 't'
    }, {
        'roots': ['turb-'],
        'meaning': 'disturb',
        'originLanguage': 'Latin',
        'examples': ['disturb', 'disturbance', 'nonperturbative', 'perturb', 'perturbance', 'perturbation', 'perturbative', 'trouble', 'troublous', 'turbid', 'turbidity', 'turbinate', 'turbine', 'turbulence', 'turbulent'],
        'letter': 't'
    }, {
        'roots': ['tuss-'],
        'meaning': 'cough',
        'originLanguage': 'Latin',
        'examples': ['pertussis', 'tussive'],
        'letter': 't'
    }, {
        'roots': ['tymb-'],
        'meaning': 'mound',
        'originLanguage': 'Greek',
        'examples': ['entomb', 'tomb'],
        'letter': 't'
    }, {
        'roots': ['tympan-'],
        'meaning': 'drum',
        'originLanguage': 'Greek',
        'examples': ['timbre', 'timpanist', 'tympani', 'tympanum'],
        'letter': 't'
    }, {
        'roots': ['typ-'],
        'meaning': 'stamp, model',
        'originLanguage': 'Greek',
        'examples': ['allotype', 'archetype', 'ecotype', 'ectype', 'epitype', 'ergatotype', 'heterotype', 'heterotypic', 'holotype', 'homeotypic', 'homotype', 'homotypic', 'isosyntype', 'isotype', 'lectotype', 'logotype', 'monotypic', 'neotype', 'paralectotype', 'paratype', 'phenotype', 'prototype', 'schizotypic', 'syntype', 'type', 'typography', 'typology'],
        'letter': 't'
    }, {
        'roots': ['typh-'],
        'meaning': 'smoke',
        'originLanguage': 'Greek',
        'examples': ['typhoid', 'typhous', 'typhus'],
        'letter': 't'
    }, {
        'roots': ['tyrann-'],
        'meaning': 'terrible, tyrant',
        'originLanguage': 'Greek',
        'examples': ['tyrannize', 'tyrannosaurus', 'tyranny', 'tyrant'],
        'letter': 't'
    }],
    'u': [{
        'roots': ['uber-'],
        'meaning': 'fruitful, udder',
        'originLanguage': 'Latin',
        'examples': ['exuberance', 'exuberant', 'exuberate', 'uberous', 'uberty'],
        'letter': 'u'
    }, {
        'roots': ['uligin-'],
        'meaning': 'in marshes',
        'originLanguage': 'Latin',
        'examples': ['uliginous'],
        'letter': 'u'
    }, {
        'roots': ['ul-'],
        'meaning': 'gums',
        'originLanguage': 'Greek',
        'examples': ['ulorrhea'],
        'letter': 'u'
    }, {
        'roots': ['ul-'],
        'meaning': 'woolly',
        'originLanguage': 'Greek',
        'examples': ['Ulotrichi'],
        'letter': 'u'
    }, {
        'roots': ['ultim-'],
        'meaning': 'farthest',
        'originLanguage': 'Latin',
        'examples': ['ultimate', 'ultimatum'],
        'letter': 'u'
    }, {
        'roots': ['ultra-'],
        'meaning': 'beyond',
        'originLanguage': 'Latin',
        'examples': ['ultrasonic'],
        'letter': 'u'
    }, {
        'roots': ['umbilic-'],
        'meaning': 'navel',
        'originLanguage': 'Latin',
        'examples': ['umbilical', 'umbilicate', 'umbilication'],
        'letter': 'u'
    }, {
        'roots': ['umbr-'],
        'meaning': 'shade, shadow',
        'originLanguage': 'Latin',
        'examples': ['adumbral', 'adumbrant', 'adumbrate', 'adumbration', 'adumbrative', 'antumbra', 'inumbrate', 'obumbrant', 'obumbrate', 'obumbration', 'penumbra', 'penumbral', 'somber', 'sombrero', 'subumbellate', 'umbel', 'umbellate', 'umbelliferous', 'umbelliform', 'umbellulate', 'umbellule', 'umber', 'umbra', 'umbraculum', 'umbrage', 'umbrageous', 'umbral', 'umbrella', 'umbriferous', 'umbrose'],
        'letter': 'u'
    }, {
        'roots': ['un-'],
        'meaning': 'one',
        'originLanguage': 'Latin',
        'examples': ['adunation', 'biunique', 'coadunate', 'coadunation', 'disunite', 'disunity', 'malunion', 'nonuniform', 'nonuniformity', 'nonunion', 'nonunique', 'nonunity', 'onion', 'reunification', 'reunion', 'reunite', 'triune', 'unanimous', 'unary', 'unate', 'unicorn', 'unific', 'unification', 'uniform', 'uniformity', 'unify', 'union', 'unique', 'unite', 'unity', 'universal', 'universe', 'university'],
        'letter': 'u'
    }, {
        'roots': ['unc-'],
        'meaning': 'hook',
        'originLanguage': 'Latin',
        'examples': ['adunc', 'aduncity', 'aduncous', 'unciform', 'Uncinaria', 'uncinate', 'Uncinia'],
        'letter': 'u'
    }, {
        'roots': ['unci-'],
        'meaning': 'ounce, twelfth',
        'originLanguage': 'Latin',
        'examples': ['inch', 'ounce', 'quincuncial', 'semiuncial', 'uncial'],
        'letter': 'u'
    }, {
        'roots': ['und-'],
        'meaning': 'wave',
        'originLanguage': 'Latin',
        'examples': ['abound', 'abundance', 'abundant', 'inundant', 'inundate', 'inundation', 'redound', 'redundancy', 'redundant', 'superabound', 'superabundance', 'superabundant', 'surround', 'undine', 'undulant', 'undulate', 'undulation', 'undulatory', 'undulatus', 'undulose'],
        'letter': 'u'
    }, {
        'roots': ['undecim-'],
        'meaning': 'eleventh',
        'originLanguage': 'Latin',
        'examples': ['undecimal'],
        'letter': 'u'
    }, {
        'roots': ['unden-'],
        'meaning': 'eleven each',
        'originLanguage': 'Latin',
        'examples': ['undenary'],
        'letter': 'u'
    }, {
        'roots': ['ungu-'],
        'meaning': 'claw, hoof, nail',
        'originLanguage': 'Latin',
        'examples': ['ungual', 'unguiferous', 'unguiform', 'ungular', 'ungulate', 'unguligrade'],
        'letter': 'u'
    }, {
        'roots': ['ur-'],
        'meaning': 'tail',
        'originLanguage': 'Greek',
        'examples': ['anthurium', 'Anura', 'brachyurous', 'colure', 'cynosure', 'Diplura', 'Protura', 'uroborus', 'urochord', 'uroid', 'uropod'],
        'letter': 'u'
    }, {
        'roots': ['ur-'],
        'meaning': 'urine',
        'originLanguage': 'Greek',
        'examples': ['antidiuretic', 'cystinuria', 'diuresis', 'diuretic', 'dysuria', 'enuresis', 'homocystinuria', 'lithuresis', 'polyurea', 'polyuria', 'strangury', 'uraemia/uremia', 'urea', 'uremic', 'uresiesthesia', 'uresis', 'ureter', 'ureteroscopy', 'urethra', 'urology'],
        'letter': 'u'
    }, {
        'roots': ['uran-'],
        'meaning': 'heaven, sky',
        'originLanguage': 'Greek',
        'examples': ['uraninite', 'uranium', 'uranography', 'uranology', 'uranometry', 'uranophobia', 'Uranus'],
        'letter': 'u'
    }, {
        'roots': ['urb-'],
        'meaning': 'city',
        'originLanguage': 'Latin',
        'examples': ['conurbation', 'exurb', 'exurban', 'interurban', 'inurbane', 'inurbanity', 'nonurban', 'suburb', 'suburban', 'suburbanite', 'urban', 'urbane', 'urbanity'],
        'letter': 'u'
    }, {
        'roots': ['urg-'],
        'meaning': 'work',
        'originLanguage': 'Greek',
        'examples': [''],
        'letter': 'u'
    }, {
        'roots': ['urg-'],
        'meaning': 'work',
        'originLanguage': 'Latin',
        'examples': ['urgency', 'urgent'],
        'letter': 'u'
    }, {
        'roots': ['urs-'],
        'meaning': 'bear',
        'originLanguage': 'Latin',
        'examples': ['Ursa Major', 'ursine', 'Ursus'],
        'letter': 'u'
    }, {
        'roots': ['ut-', 'us-'],
        'meaning': 'use',
        'originLanguage': 'Latin',
        'examples': ['abuse', 'disuse', 'use', 'usual', 'utilitarian', 'utility'],
        'letter': 'u'
    }, {
        'roots': ['uv-'],
        'meaning': 'grape',
        'originLanguage': 'Latin',
        'examples': ['uvea'],
        'letter': 'u'
    }, {'roots': ['uxor-'], 'meaning': 'wife', 'originLanguage': 'Latin', 'examples': ['uxoricide'], 'letter': 'u'}],
    'v': [{
        'roots': ['vac-'],
        'meaning': 'empty',
        'originLanguage': 'Latin',
        'examples': ['evacuate', 'vacancy', 'vacant', 'vacate', 'vacation', 'vacuous', 'vacuum'],
        'letter': 'v'
    }, {
        'roots': ['vacc-'],
        'meaning': 'cow',
        'originLanguage': 'Latin',
        'examples': ['vaccary', 'vaccination', 'vaccine'],
        'letter': 'v'
    }, {
        'roots': ['vacil-'],
        'meaning': 'waver',
        'originLanguage': 'Latin',
        'examples': ['vacillate', 'vacillation'],
        'letter': 'v'
    }, {
        'roots': ['vad-', 'vas-'],
        'meaning': 'go',
        'originLanguage': 'Latin',
        'examples': ['evade', 'pervasive'],
        'letter': 'v'
    }, {
        'roots': ['vag-'],
        'meaning': 'wander',
        'originLanguage': 'Latin',
        'examples': ['vagabond', 'vague'],
        'letter': 'v'
    }, {
        'roots': ['val-'],
        'meaning': 'strength, worth',
        'originLanguage': 'Latin',
        'examples': ['ambivalence', 'avail', 'equivalent', 'evaluate', 'prevail', 'valence', 'valiant', 'valid', 'valor', 'value'],
        'letter': 'v'
    }, {
        'roots': ['van-'],
        'meaning': 'empty, vain, idle',
        'originLanguage': 'Latin',
        'examples': ['evanescent', 'vain', 'vanish', 'vanity'],
        'letter': 'v'
    }, {
        'roots': ['vap-'],
        'meaning': 'lack (of)',
        'originLanguage': 'Latin',
        'examples': ['evaporate', 'evaporation', 'evaporative', 'evaporator', 'evaporite', 'nonevaporative', 'vapid', 'vapidity', 'vapor', 'vaporescence', 'vaporescent', 'vaporific', 'vaporous'],
        'letter': 'v'
    }, {
        'roots': ['vari-'],
        'meaning': 'vary',
        'originLanguage': 'Latin',
        'examples': ['bivariate', 'covariate', 'covariation', 'intervarietal', 'invariable', 'invariance', 'invariant', 'variable', 'variance', 'variant', 'variate', 'variation', 'variegate', 'varietal', 'variety', 'variola', 'variolation', 'variorum', 'various', 'vary'],
        'letter': 'v'
    }, {
        'roots': ['varic-'],
        'meaning': 'straddle',
        'originLanguage': 'Latin',
        'examples': ['prevaricate'],
        'letter': 'v'
    }, {
        'roots': ['veh-', 'vect-'],
        'meaning': 'carry',
        'originLanguage': 'Latin',
        'examples': ['invective', 'inveigh', 'vector', 'vehement', 'vehicle'],
        'letter': 'v'
    }, {
        'roots': ['vel-'],
        'meaning': 'veil',
        'originLanguage': 'Latin',
        'examples': ['revelation', 'velate'],
        'letter': 'v'
    }, {
        'roots': ['vell-', 'vuls-'],
        'meaning': 'pull',
        'originLanguage': 'Latin',
        'examples': ['convulsion'],
        'letter': 'v'
    }, {
        'roots': ['veloc-'],
        'meaning': 'quick',
        'originLanguage': 'Latin',
        'examples': ['velocity'],
        'letter': 'v'
    }, {
        'roots': ['ven-'],
        'meaning': 'vein',
        'originLanguage': 'Latin',
        'examples': ['intravenous', 'venosity', 'venule'],
        'letter': 'v'
    }, {
        'roots': ['ven-'],
        'meaning': 'hunt',
        'originLanguage': 'Latin',
        'examples': ['venison'],
        'letter': 'v'
    }, {
        'roots': ['ven-', 'vent-'],
        'meaning': 'come',
        'originLanguage': 'Latin',
        'examples': ['advent', 'adventure', 'avenue', 'circumvent', 'contravene', 'convene', 'convenient', 'convention', 'event', 'intervene', 'intervention', 'invent', 'prevent', 'revenue', 'souvenir', 'supervene', 'venue', 'venture'],
        'letter': 'v'
    }, {
        'roots': ['vend-'],
        'meaning': 'sell',
        'originLanguage': 'Latin',
        'examples': ['vend', 'vendor'],
        'letter': 'v'
    }, {
        'roots': ['vener-'],
        'meaning': 'respectful',
        'originLanguage': 'Latin',
        'examples': ['venerable', 'veneration', 'venereal'],
        'letter': 'v'
    }, {
        'roots': ['vent-'],
        'meaning': 'wind',
        'originLanguage': 'Latin',
        'examples': ['ventilation', 'ventilator'],
        'letter': 'v'
    }, {
        'roots': ['ventr-'],
        'meaning': 'belly',
        'originLanguage': 'Latin',
        'examples': ['ventral'],
        'letter': 'v'
    }, {
        'roots': ['ver-'],
        'meaning': 'true',
        'originLanguage': 'Latin',
        'examples': ['aver', 'veracious', 'verdict', 'verify', 'verisimilar', 'verisimilitude', 'verity', 'very'],
        'letter': 'v'
    }, {
        'roots': ['verb-'],
        'meaning': 'word',
        'originLanguage': 'Latin',
        'examples': ['verbal', 'verbatim', 'verbosity'],
        'letter': 'v'
    }, {
        'roots': ['verber-'],
        'meaning': 'whip',
        'originLanguage': 'Latin',
        'examples': ['reverberation'],
        'letter': 'v'
    }, {
        'roots': ['verm-'],
        'meaning': 'worm',
        'originLanguage': 'Latin',
        'examples': ['vermiform', 'vermin'],
        'letter': 'v'
    }, {
        'roots': ['vern-'],
        'meaning': 'spring',
        'originLanguage': 'Latin',
        'examples': ['vernal'],
        'letter': 'v'
    }, {
        'roots': ['vers-', 'vert-'],
        'meaning': 'turn',
        'originLanguage': 'Latin',
        'examples': ['adverse', 'adversity', 'advertise', 'anniversary', 'avert', 'controversy', 'controvert', 'conversant', 'conversation', 'converse', 'convert', 'diversify', 'divert', 'extrovert', 'introvert', 'inverse', 'invert', 'perverse', 'pervert', 'reverse', 'revert', 'subvert', 'tergiversate', 'transverse', 'universe', 'versatile', 'verse', 'version', 'versus', 'vertebra', 'vertex', 'vertical', 'vertigo'],
        'letter': 'v'
    }, {
        'roots': ['vesic-'],
        'meaning': 'bladder',
        'originLanguage': 'Latin',
        'examples': ['vesical'],
        'letter': 'v'
    }, {
        'roots': ['vesper-'],
        'meaning': 'evening, western',
        'originLanguage': 'Latin',
        'examples': ['vesperal'],
        'letter': 'v'
    }, {
        'roots': ['vest-'],
        'meaning': 'clothing, garment',
        'originLanguage': 'Latin',
        'examples': ['divest', 'invest', 'investiture', 'transvestite', 'travesty', 'vest', 'vestment'],
        'letter': 'v'
    }, {
        'roots': ['vestig-'],
        'meaning': 'track',
        'originLanguage': 'Latin',
        'examples': ['investigate', 'vestigial'],
        'letter': 'v'
    }, {
        'roots': ['vet-'],
        'meaning': 'forbid',
        'originLanguage': 'Latin',
        'examples': ['veto'],
        'letter': 'v'
    }, {
        'roots': ['veter-'],
        'meaning': 'old',
        'originLanguage': 'Latin',
        'examples': ['inveterate', 'veteran'],
        'letter': 'v'
    }, {
        'roots': ['vi-'],
        'meaning': 'way',
        'originLanguage': 'Latin',
        'examples': ['deviate', 'obviate', 'obvious', 'via'],
        'letter': 'v'
    }, {
        'roots': ['vic-'],
        'meaning': 'change',
        'originLanguage': 'Latin',
        'examples': ['vicar', 'vicarious', 'vice versa', 'vicissitude'],
        'letter': 'v'
    }, {
        'roots': ['vicen-', 'vigen-'],
        'meaning': 'twenty each',
        'originLanguage': 'Latin',
        'examples': ['vicenary'],
        'letter': 'v'
    }, {
        'roots': ['vicesim-', 'vigesim-'],
        'meaning': 'twentieth',
        'originLanguage': 'Latin',
        'examples': ['vicesimary', 'vicesimation', 'vigesimal'],
        'letter': 'v'
    }, {
        'roots': ['vid-', 'vis-'],
        'meaning': 'see',
        'originLanguage': 'Latin',
        'examples': ['advice', 'advisable', 'advise', 'advisement', 'advisor', 'advisory', 'clairvoyance', 'clairvoyant', 'counterview', 'enviable', 'envious', 'envisage', 'envisagement', 'envision', 'envy', 'evidence', 'evident', 'evidential', 'evidentiality', 'evidentiary', 'improvidence', 'improvident', 'improvisation', 'improvisational', 'improvise', 'imprudence', 'imprudent', 'inadvisable', 'inevident', 'interview', 'interviewee', 'invidious', 'invisibility', 'invisible', 'nonevidentiary', 'nonsupervisory', 'nonvisual', 'preview', 'previse', 'provide', 'providence', 'provident', 'provision', 'provisional', 'provisionality', 'proviso', 'provisory', 'prudence', 'prudent', 'prudential', 'purvey', 'purveyance', 'purveyor', 'purview', 'review', 'reviewal', 'revisal', 'revise', 'revision', 'revisionary', 'revisit', 'supervise', 'supervision', 'supervisor', 'supervisory', 'survey', 'surveyor', 'surview', 'survise', 'videlicet', 'video', 'view', 'vis-à-vis', 'visa', 'visage', 'visibility', 'visible', 'vision', 'visionary', 'visit', 'visitation', 'visor', 'vista', 'visual', 'visuality', 'voilà', 'voyeur'],
        'letter': 'v'
    }, {
        'roots': ['vigil-'],
        'meaning': 'watchful',
        'originLanguage': 'Latin',
        'examples': ['invigilate', 'reveille', 'surveillance', 'vigil', 'vigilance', 'vigilant', 'vigilante'],
        'letter': 'v'
    }, {
        'roots': ['vil-'],
        'meaning': 'cheap',
        'originLanguage': 'Latin',
        'examples': ['revile', 'vile', 'vilify'],
        'letter': 'v'
    }, {
        'roots': ['vill-'],
        'meaning': 'country house',
        'originLanguage': 'Latin',
        'examples': ['villa', 'village', 'villain'],
        'letter': 'v'
    }, {
        'roots': ['vill-'],
        'meaning': 'shaggy hair',
        'originLanguage': 'Latin',
        'examples': ['intervillous', 'velour', 'velvet', 'villiform', 'villose', 'villosity', 'villous', 'villus'],
        'letter': 'v'
    }, {
        'roots': ['vin-'],
        'meaning': 'wine',
        'originLanguage': 'Latin',
        'examples': ['vigneron', 'vignette', 'vinaceous', 'vinaigrette', 'vine', 'vineal', 'vinegar', 'viniculture', 'vinosity', 'vinous'],
        'letter': 'v'
    }, {
        'roots': ['vinc-', 'vict-'],
        'meaning': 'conquer',
        'originLanguage': 'Latin',
        'examples': ['convict', 'conviction', 'convince', 'evict', 'evince', 'invincible', 'province', 'vanquish', 'vanquishment', 'victor', 'victorious', 'victory'],
        'letter': 'v'
    }, {
        'roots': ['vir-'],
        'meaning': 'man',
        'originLanguage': 'Latin',
        'examples': ['decemvir', 'decemvirate', 'duumvirate', 'quadrumvirate', 'septemvir', 'septemvirate', 'triumvir', 'triumvirate', 'vigintivirate', 'virago', 'virile', 'virilescence', 'virility', 'virilocal', 'virilocality', 'virtual', 'virtuality', 'virtue', 'virtuosity', 'virtuoso', 'virtuous'],
        'letter': 'v'
    }, {
        'roots': ['vir-'],
        'meaning': 'green',
        'originLanguage': 'Latin',
        'examples': ['verdure', 'virid', 'viridescent', 'viridian', 'viridity'],
        'letter': 'v'
    }, {
        'roots': ['vir-'],
        'meaning': 'poison, venom',
        'originLanguage': 'Latin',
        'examples': ['retroviral', 'retrovirus', 'rotavirus', 'togavirus', 'viral', 'virality', 'viricidal', 'viricide', 'virucidal', 'virucide', 'virulence', 'virulent', 'virus'],
        'letter': 'v'
    }, {
        'roots': ['virg-'],
        'meaning': 'rod, twig',
        'originLanguage': 'Latin',
        'examples': ['virga', 'virgate', 'virgula', 'virgularian', 'virgulate', 'virgule'],
        'letter': 'v'
    }, {
        'roots': ['virgin-'],
        'meaning': 'maiden',
        'originLanguage': 'Latin',
        'examples': ['virgin', 'virginal', 'virginity', 'Virgoan'],
        'letter': 'v'
    }, {
        'roots': ['visc-'],
        'meaning': 'thick',
        'originLanguage': 'Latin',
        'examples': ['viscosity'],
        'letter': 'v'
    }, {
        'roots': ['viscer-'],
        'meaning': 'internal organ',
        'originLanguage': 'Latin',
        'examples': ['eviscerate', 'visceral'],
        'letter': 'v'
    }, {
        'roots': ['vit-'],
        'meaning': 'life',
        'originLanguage': 'Latin',
        'examples': ['vital', 'vitality', 'vitamin'],
        'letter': 'v'
    }, {
        'roots': ['vitell-'],
        'meaning': 'yolk',
        'originLanguage': 'Latin',
        'examples': ['vitellogenesis'],
        'letter': 'v'
    }, {
        'roots': ['viti-'],
        'meaning': 'fault',
        'originLanguage': 'Latin',
        'examples': ['vice', 'vitiate', 'vituperate'],
        'letter': 'v'
    }, {
        'roots': ['vitr-'],
        'meaning': 'glass',
        'originLanguage': 'Latin',
        'examples': ['vitreous', 'vitriol'],
        'letter': 'v'
    }, {
        'roots': ['viv-'],
        'meaning': 'live',
        'originLanguage': 'Latin',
        'examples': ['convivial', 'revive', 'survive', 'viable', 'victual', 'vivacious', 'vivacity', 'vivid', 'vivisection'],
        'letter': 'v'
    }, {
        'roots': ['voc-'],
        'meaning': 'call, voice',
        'originLanguage': 'Latin',
        'examples': ['advocacy', 'advocate', 'advocation', 'advocator', 'advocatory', 'advoke', 'advowson', 'avocation', 'avouch', 'avow', 'avowal', 'avowry', 'convocate', 'convocation', 'convocator', 'convoke', 'disavow', 'disavowal', 'equivocal', 'equivocate', 'equivocation', 'evocable', 'evocation', 'evocative', 'evocator', 'evoke', 'invocable', 'invocate', 'invocation', 'invocative', 'invocator', 'invoke', 'prevocational', 'provocate', 'provocateur', 'provocation', 'provocative', 'provocator', 'provoke', 'reavow', 'reinvoke', 'revocable', 'revocation', 'revoke', 'vocabulary', 'vocal', 'vocation', 'vocational', 'vocative', 'vociferous', 'voice', 'vouch', 'vouchee', 'voucher', 'vouchsafe'],
        'letter': 'v'
    }, {
        'roots': ['vol-'],
        'meaning': 'fly',
        'originLanguage': 'Latin',
        'examples': ['avolation', 'circumvolant', 'circumvolation', 'nonvolatile', 'volatile', 'volatility', 'volitant', 'volitation'],
        'letter': 'v'
    }, {
        'roots': ['vol-'],
        'meaning': 'will',
        'originLanguage': 'Latin',
        'examples': ['benevolence', 'benevolent', 'involuntary', 'malevolence', 'malevolent', 'omnibenevolence', 'velleity', 'volitient', 'volition', 'volitional', 'volitive', 'voluntary', 'Voluntaryism', 'volunteer', 'voluptuary', 'voluptuous'],
        'letter': 'v'
    }, {
        'roots': ['volv-', 'volut-'],
        'meaning': 'roll',
        'originLanguage': 'Latin',
        'examples': ['advolution', 'archivolt', 'circumvolute', 'circumvolution', 'circumvolve', 'coevolution', 'coevolutionary', 'coevolve', 'convolute', 'convolution', 'devolve', 'evolve', 'involve', 'revolve', 'valve', 'vault', 'volte', 'voluble', 'volume', 'voluminous', 'volva', 'Volvox', 'volvulus', 'voussoir', 'vulva'],
        'letter': 'v'
    }, {
        'roots': ['vom-'],
        'meaning': 'discharge',
        'originLanguage': 'Latin',
        'examples': ['vomit', 'vomition', 'vomitory', 'vomitus'],
        'letter': 'v'
    }, {
        'roots': ['vor-', 'vorac-'],
        'meaning': 'swallow',
        'originLanguage': 'Latin',
        'examples': ['carnivore', 'carnivorous', 'devoration', 'devoré', 'devour', 'herbivore', 'herbivorous', 'locavore', 'omnivore', 'omnivorous', 'voracious', 'voracity', 'voraginous'],
        'letter': 'v'
    }, {
        'roots': ['vov-', 'vot-'],
        'meaning': 'vow',
        'originLanguage': 'Latin',
        'examples': ['devote', 'devotee', 'devotion', 'devotional', 'devout', 'devove', 'devow', 'votary', 'vote', 'votive', 'vow'],
        'letter': 'v'
    }, {
        'roots': ['vulg-'],
        'meaning': 'crowd',
        'originLanguage': 'Latin',
        'examples': ['divulge', 'vulgarity', 'vulgate'],
        'letter': 'v'
    }, {
        'roots': ['vulner-'],
        'meaning': 'wound',
        'originLanguage': 'Latin',
        'examples': ['vulnerable'],
        'letter': 'v'
    }, {'roots': ['vulp-'], 'meaning': 'fox', 'originLanguage': 'Latin', 'examples': ['vulpine'], 'letter': 'v'}],
    'x': [{
        'roots': ['xanth-'],
        'meaning': 'yellow',
        'originLanguage': 'Greek',
        'examples': ['axanthism', 'heteroxanthine', 'xanthan', 'xanthelasma', 'xanthic', 'xanthine', 'Xanthippe', 'xanthium', 'xanthochromia', 'xanthochromism', 'xanthogenic', 'Xanthoidea', 'xanthoma', 'xanthomatosis', 'xanthophobia', 'xanthophore', 'xanthophyll', 'xanthopsia', 'xanthopterin', 'xanthosis', 'xanthous'],
        'letter': 'x'
    }, {
        'roots': ['xe-'],
        'meaning': 'scrape, shave',
        'originLanguage': 'Greek',
        'examples': ['arthroxesis'],
        'letter': 'x'
    }, {
        'roots': ['xei-', 'xi-'],
        'meaning': 'ks',
        'originLanguage': 'Greek',
        'examples': ['xi'],
        'letter': 'x'
    }, {
        'roots': ['xen-'],
        'meaning': 'foreign',
        'originLanguage': 'Greek',
        'examples': ['axenic', 'Xenarthra', 'xenia', 'xenic', 'xenobiotic', 'xenoblast', 'xenogamy', 'xenograft', 'xenolith', 'xenology', 'xenon', 'xenophobia'],
        'letter': 'x'
    }, {
        'roots': ['xer-'],
        'meaning': 'dry',
        'originLanguage': 'Greek',
        'examples': ['elixir', 'xerasia', 'xerochilia', 'xeroderma', 'xerography', 'xeromorph', 'xerophagy', 'xerophile', 'xerophthalmia', 'xerophyte', 'xerosis'],
        'letter': 'x'
    }, {
        'roots': ['xiph-'],
        'meaning': 'sword',
        'originLanguage': 'Greek',
        'examples': ['xiphisternum', 'xiphoid', 'xiphopagus', 'xiphophyllous'],
        'letter': 'x'
    }, {
        'roots': ['xyl-'],
        'meaning': 'wood',
        'originLanguage': 'Greek',
        'examples': ['metaxylem', 'protoxylem', 'xylem', 'xylene', 'xylitol', 'xylocarp', 'Xylocarpus', 'xyloid', 'xylophagous', 'xylophobia', 'xylophone', 'xylostroma'],
        'letter': 'x'
    }],
    'z': [{
        'roots': ['ze-'],
        'meaning': 'boil',
        'originLanguage': 'Greek',
        'examples': ['eczema', 'eczematous'],
        'letter': 'z'
    }, {
        'roots': ['zel-'],
        'meaning': 'jealousy, zeal',
        'originLanguage': 'Greek',
        'examples': ['zeal', 'zealot', 'zealous'],
        'letter': 'z'
    }, {
        'roots': ['zephyr-'],
        'meaning': 'west wind',
        'originLanguage': 'Greek',
        'examples': ['zephyr'],
        'letter': 'z'
    }, {
        'roots': ['zet-'],
        'meaning': 'Z, z',
        'originLanguage': 'Greek',
        'examples': ['zed', 'zeta'],
        'letter': 'z'
    }, {
        'roots': ['zete-'],
        'meaning': 'seek',
        'originLanguage': 'Greek',
        'examples': ['zetetic'],
        'letter': 'z'
    }, {
        'roots': ['zizyph-'],
        'meaning': 'jujube',
        'originLanguage': 'Greek',
        'examples': ['Ziziphus'],
        'letter': 'z'
    }, {
        'roots': ['zo-'],
        'meaning': 'animal, living being',
        'originLanguage': 'Greek',
        'examples': ['anthrozoology', 'azoic', 'azotemia', 'cryptozoology', 'ectozoon', 'entozoon', 'epizoon', 'Eumetazoa', 'Mesozoic', 'Metazoa', 'protozoa', 'zoanthropy', 'zodiac', 'zoic', 'zoo', 'zoochore', 'zoogamete', 'zoogeography', 'zooid/zoöid', 'zoologic', 'zoology', 'zoomorphism', 'zoon', 'zoonosis', 'zoophagy', 'zoopoetics', 'zoospore', 'zootoxin', 'zooxanthella'],
        'letter': 'z'
    }, {
        'roots': ['zon-'],
        'meaning': 'belt, girdle',
        'originLanguage': 'Greek',
        'examples': ['phylozone', 'zonal', 'zone', 'zonohedron', 'zonotope', 'zoster'],
        'letter': 'z'
    }, {
        'roots': ['zyg-'],
        'meaning': 'yoke',
        'originLanguage': 'Greek',
        'examples': ['azygous', 'diazeugma', 'dizygotic', 'heterozygote', 'heterozygous', 'hyperzeuxis', 'hypozeugma', 'hypozeuxis', 'mesozeugma', 'monozygotic', 'prozeugma', 'synezeugmenon', 'zeugitae', 'zeugma', 'zygoma', 'zygomorphic', 'zygomorphism', 'zygomycosis', 'zygomycota', 'zygon', 'Zygoptera', 'zygote'],
        'letter': 'z'
    }, {
        'roots': ['zym-'],
        'meaning': 'ferment',
        'originLanguage': 'Greek',
        'examples': ['alloenzyme', 'azyme', 'azymite', 'enzyme', 'lysozyme', 'microzyme', 'zymase', 'zyme', 'zymogen', 'zymology', 'zymolysis', 'zymosis', 'zymotic', 'zymurgy'],
        'letter': 'z'
    }]
}
