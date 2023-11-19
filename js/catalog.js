const catalogData = {
  qualities: [
    {
      key: "Accès à Council Island (niveau 1)",
      description:
        "Vous avez un accès illimité à Council Island grâce à l’un de vos contacts. Puisqu’il vous autorise à entrer à distance, les agents de sécurité ne prêtent pas attention à vous, que vous veniez dormir, vous cacher ou travailler sur l’île. Vous pouvez entrer librement à Council Island grâce à un de vos contacts et n’êtes l’objet d’aucune attention de la part des agents de sécurité.",
      type: "positive",
      karmaCost: "5",
      book: "seattleEmeraude",
      page: "67",
    },
    {
      key: "Accès à Council Island (niveau 2)",
      description:
        "Vous avez un accès illimité à Council Island grâce à l’un de vos contacts. Puisqu’il vous autorise à entrer à distance, les agents de sécurité ne prêtent pas attention à vous, que vous veniez dormir, vous cacher ou travailler sur l’île. Vous pouvez entrer librement à Council Island grâce à un de vos contacts et n’êtes l’objet d’aucune attention de la part des agents de sécurité. Vous avez également la possibilité de faire appel à ce contact pour acheter des « pass invités » à un tarif de 250 nuyens le pass par jour. Ils donnent accès à l’île, mais une fois sur place, vos invités et vous pourrez faire l’objet d’une certaine méfiance, ce pour quoi votre contact préviendra tout le monde qu’il faut se fondre dans la masse.",
      type: "positive",
      karmaCost: "12",
      book: "seattleEmeraude",
      page: "67",
    },
    {
      key: "Accès à Event Horizon",
      description:
        "Vous avez forgé des liens avec les meilleurs trafiquants du marché noir de l’Underground. Vous êtes prévenu dès qu’un objet est disponible et vous pouvez vérifier ce que les vendeurs proposent sur le serveur. Vous connaissez également l’emplacement d’Event Horizon dans les profondeurs. Il vous faut au moins une demi-heure pour l’atteindre depuis la surface, mais une fois là-bas, vous trouverez forcément quelqu’un pour vous vendre presque tout ce qu’il vous faut (à la discrétion du maître de jeu). Réduit immédiatement tous les indices de disponibilité de 2 (minimum 1).",
      type: "positive",
      karmaCost: "15",
      book: "seattleEmeraude",
      page: "199",
    },
    {
      key: "Accoutumance aux augmentations",
      description:
        "Votre corps s’est particulièrement bien adapté à vos augmentations, ce qui vous permet de réduire le coût en Essence de celles à venir. Pour chaque niveau de ce trait, vous générez 0,1 point d’Essence réservé à l’achat d’augmentations supplémentaires. Concrètement le «vide d’Essence» ainsi créée n’augmente pas votre score mais est ponctionné en priorité à chaque fois que vous vous faites installer une nouvelle augmentation.",
      type: "positive",
      karmaCost: "2",
      book: "compagnon",
      page: "128",
    },
    {
      key: "Accro au combat",
      description:
        "Vous êtes toujours prêt pour une bonne bagarre et vous avez du mal à vous refréner, même s’il sera plus sage d’éviter le combat. Quand quelqu’un tente de vous pousser à recourir à la violence, il bénéficie d’une remise d’Atout de 1 sur ses tests d’Influence ou d’Escroquerie contre vous. Vous ne pouvez pas gagner ou dépenser d’Atout sur l’action Jauger les intentions, mis à part en combat. À moins d’avoir subi au moins 6 cases de dommages (éventuellement réparties sur des moniteurs de condition différents), vous ne pouvez pas fuir un affrontement sans subir de pénalité. En cas de fuite, vous ne pouvez plus gagner ou dépenser d’Atout ; cet effet prend fin dès que vous entrez à nouveau dans un combat ou au début de la prochaine séance.",
      type: "negative",
      karmaCost: "6",
      book: "compagnon",
      page: "131",
    },
    {
      key: "Addiction",
      description:
        "Certaines habitudes ont la vie dure. Cela peut être aussi simple qu’une bouffée de cigarette pour vous détendre les nerfs ou aussi perturbant que ce besoin de quelque chose de mieux que la vie ; quoi qu’il en soit, vous y êtes accro. Tant que vous êtes en manque, vous ne pouvez d’aucune manière gagner ou dépenser de l’Atout. Le temps de sevrage (le temps qui s’écoule avant d’être en manque et d’avoir besoin d’une dose) est basé sur votre niveau d’addiction comme indiqué sur la synthanol Temps de sevrage. Quand vous êtes en manque, vous subissez un malus de -2 dés à tous vos tests ; augmentez ce malus de 1 point à chaque fois que s’écoule une autre période égale au temps de sevrage sans avoir consommé.",
      type: "negative",
      karmaCost: "2",
      book: "ldb",
      page: "76",
    },
    {
      key: "Adepte des transports en commun (Aérien)",
      description:
        "Vous avez tellement utilisé ce moyen de vous déplacer que vous en connaissez les rouages et les caractéristiques sur le bout des doigts. À tel point que vous avez désormais quelques atouts dans votre manche. Au moment d’acquérir ce trait, choisissez un type de transport en commun (aérien, train, métro, tram, etc.). Une fois par jour, au prix d’un test d’Escroquerie + Charisme (4) réussi, gagnez l’un des avantages suivants: • Augmentez la classe dans laquelle vous voyagez sans coût supplémentaire. • Bénéficiez d’avantages réservés à la classe affaires pendant 12 heures (par exemple : tickets pour des repas et boissons gratuits, salon VIP, chambre d’hôtel offerte). • Embarquez sans problème un objet personnel interdit ou illégal à bord du véhicule de transport. Vous pouvez le récupérer une fois à destination. L’objet en question ne peut pas être plus grand qu’un drone de petite taille. Dépensez 1 point d’Atout pour que cet objet soit accessible à bord du véhicule.",
      type: "positive",
      karmaCost: "6",
      book: "tombeauOuvert",
      page: "166",
    },
    {
      key: "Adepte des transports en commun (Bus)",
      description:
        "Vous avez tellement utilisé ce moyen de vous déplacer que vous en connaissez les rouages et les caractéristiques sur le bout des doigts. À tel point que vous avez désormais quelques atouts dans votre manche. Au moment d’acquérir ce trait, choisissez un type de transport en commun (aérien, train, métro, tram, etc.). Une fois par jour, au prix d’un test d’Escroquerie + Charisme (4) réussi, gagnez l’un des avantages suivants: • Augmentez la classe dans laquelle vous voyagez sans coût supplémentaire. • Bénéficiez d’avantages réservés à la classe affaires pendant 12 heures (par exemple : tickets pour des repas et boissons gratuits, salon VIP, chambre d’hôtel offerte). • Embarquez sans problème un objet personnel interdit ou illégal à bord du véhicule de transport. Vous pouvez le récupérer une fois à destination. L’objet en question ne peut pas être plus grand qu’un drone de petite taille. Dépensez 1 point d’Atout pour que cet objet soit accessible à bord du véhicule.",
      type: "positive",
      karmaCost: "6",
      book: "tombeauOuvert",
      page: "166",
    },
    {
      key: "Adepte des transports en commun (Métro)",
      description:
        "Vous avez tellement utilisé ce moyen de vous déplacer que vous en connaissez les rouages et les caractéristiques sur le bout des doigts. À tel point que vous avez désormais quelques atouts dans votre manche. Au moment d’acquérir ce trait, choisissez un type de transport en commun (aérien, train, métro, tram, etc.). Une fois par jour, au prix d’un test d’Escroquerie + Charisme (4) réussi, gagnez l’un des avantages suivants: • Augmentez la classe dans laquelle vous voyagez sans coût supplémentaire. • Bénéficiez d’avantages réservés à la classe affaires pendant 12 heures (par exemple : tickets pour des repas et boissons gratuits, salon VIP, chambre d’hôtel offerte). • Embarquez sans problème un objet personnel interdit ou illégal à bord du véhicule de transport. Vous pouvez le récupérer une fois à destination. L’objet en question ne peut pas être plus grand qu’un drone de petite taille. Dépensez 1 point d’Atout pour que cet objet soit accessible à bord du véhicule.",
      type: "positive",
      karmaCost: "6",
      book: "tombeauOuvert",
      page: "166",
    },
    {
      key: "Adepte des transports en commun (Train)",
      description:
        "Vous avez tellement utilisé ce moyen de vous déplacer que vous en connaissez les rouages et les caractéristiques sur le bout des doigts. À tel point que vous avez désormais quelques atouts dans votre manche. Au moment d’acquérir ce trait, choisissez un type de transport en commun (aérien, train, métro, tram, etc.). Une fois par jour, au prix d’un test d’Escroquerie + Charisme (4) réussi, gagnez l’un des avantages suivants: • Augmentez la classe dans laquelle vous voyagez sans coût supplémentaire. • Bénéficiez d’avantages réservés à la classe affaires pendant 12 heures (par exemple : tickets pour des repas et boissons gratuits, salon VIP, chambre d’hôtel offerte). • Embarquez sans problème un objet personnel interdit ou illégal à bord du véhicule de transport. Vous pouvez le récupérer une fois à destination. L’objet en question ne peut pas être plus grand qu’un drone de petite taille. Dépensez 1 point d’Atout pour que cet objet soit accessible à bord du véhicule.",
      type: "positive",
      karmaCost: "6",
      book: "tombeauOuvert",
      page: "166",
    },
    {
      key: "Adepte des transports en commun (Tram)",
      description:
        "Vous avez tellement utilisé ce moyen de vous déplacer que vous en connaissez les rouages et les caractéristiques sur le bout des doigts. À tel point que vous avez désormais quelques atouts dans votre manche. Au moment d’acquérir ce trait, choisissez un type de transport en commun (aérien, train, métro, tram, etc.). Une fois par jour, au prix d’un test d’Escroquerie + Charisme (4) réussi, gagnez l’un des avantages suivants: • Augmentez la classe dans laquelle vous voyagez sans coût supplémentaire. • Bénéficiez d’avantages réservés à la classe affaires pendant 12 heures (par exemple : tickets pour des repas et boissons gratuits, salon VIP, chambre d’hôtel offerte). • Embarquez sans problème un objet personnel interdit ou illégal à bord du véhicule de transport. Vous pouvez le récupérer une fois à destination. L’objet en question ne peut pas être plus grand qu’un drone de petite taille. Dépensez 1 point d’Atout pour que cet objet soit accessible à bord du véhicule.",
      type: "positive",
      karmaCost: "6",
      book: "tombeauOuvert",
      page: "166",
    },
    {
      key: "Affinité avec les esprits (Aînés)",
      description:
        "Vous avez gagné le respect d’un groupe précis d’esprits/sprites. Grâce à vos actions et à des faveurs, vous avez une bonne réputation ce qui les pousse à vous traiter avec considération. Choisissez un type d’esprits ou de sprites quand vous optez pour ce trait.Vous bénéficiez d’une remise d’Atout de 1 lors de vos tests de Conjuration ou de Technomancie pour le type d’esprits/sprites que vous avez choisi. Ce trait peut être choisi plusieurs fois en optant pour un autre type d’esprits/sprites à chaque fois.",
      type: "positive",
      karmaCost: "14",
      book: "ldb",
      page: "73",
    },
    {
      key: "Affinité avec les esprits (Air)",
      description:
        "Vous avez gagné le respect d’un groupe précis d’esprits/sprites. Grâce à vos actions et à des faveurs, vous avez une bonne réputation ce qui les pousse à vous traiter avec considération. Choisissez un type d’esprits ou de sprites quand vous optez pour ce trait.Vous bénéficiez d’une remise d’Atout de 1 lors de vos tests de Conjuration ou de Technomancie pour le type d’esprits/sprites que vous avez choisi. Ce trait peut être choisi plusieurs fois en optant pour un autre type d’esprits/sprites à chaque fois.",
      type: "positive",
      karmaCost: "14",
      book: "ldb",
      page: "73",
    },
    {
      key: "Affinité avec les esprits (Bêtes)",
      description:
        "Vous avez gagné le respect d’un groupe précis d’esprits/sprites. Grâce à vos actions et à des faveurs, vous avez une bonne réputation ce qui les pousse à vous traiter avec considération. Choisissez un type d’esprits ou de sprites quand vous optez pour ce trait.Vous bénéficiez d’une remise d’Atout de 1 lors de vos tests de Conjuration ou de Technomancie pour le type d’esprits/sprites que vous avez choisi. Ce trait peut être choisi plusieurs fois en optant pour un autre type d’esprits/sprites à chaque fois.",
      type: "positive",
      karmaCost: "14",
      book: "ldb",
      page: "73",
    },
    {
      key: "Affinité avec les esprits (Eau)",
      description:
        "Vous avez gagné le respect d’un groupe précis d’esprits/sprites. Grâce à vos actions et à des faveurs, vous avez une bonne réputation ce qui les pousse à vous traiter avec considération. Choisissez un type d’esprits ou de sprites quand vous optez pour ce trait.Vous bénéficiez d’une remise d’Atout de 1 lors de vos tests de Conjuration ou de Technomancie pour le type d’esprits/sprites que vous avez choisi. Ce trait peut être choisi plusieurs fois en optant pour un autre type d’esprits/sprites à chaque fois.",
      type: "positive",
      karmaCost: "14",
      book: "ldb",
      page: "73",
    },
    {
      key: "Affinité avec les esprits (Feu)",
      description:
        "Vous avez gagné le respect d’un groupe précis d’esprits/sprites. Grâce à vos actions et à des faveurs, vous avez une bonne réputation ce qui les pousse à vous traiter avec considération. Choisissez un type d’esprits ou de sprites quand vous optez pour ce trait.Vous bénéficiez d’une remise d’Atout de 1 lors de vos tests de Conjuration ou de Technomancie pour le type d’esprits/sprites que vous avez choisi. Ce trait peut être choisi plusieurs fois en optant pour un autre type d’esprits/sprites à chaque fois.",
      type: "positive",
      karmaCost: "14",
      book: "ldb",
      page: "73",
    },
    {
      key: "Affinité avec les esprits (Terre)",
      description:
        "Vous avez gagné le respect d’un groupe précis d’esprits/sprites. Grâce à vos actions et à des faveurs, vous avez une bonne réputation ce qui les pousse à vous traiter avec considération. Choisissez un type d’esprits ou de sprites quand vous optez pour ce trait.Vous bénéficiez d’une remise d’Atout de 1 lors de vos tests de Conjuration ou de Technomancie pour le type d’esprits/sprites que vous avez choisi. Ce trait peut être choisi plusieurs fois en optant pour un autre type d’esprits/sprites à chaque fois.",
      type: "positive",
      karmaCost: "14",
      book: "ldb",
      page: "73",
    },
    {
      key: "Affinité avec les sprites (Coursier)",
      description:
        "Vous avez gagné le respect d’un groupe précis d’esprits/sprites. Grâce à vos actions et à des faveurs, vous avez une bonne réputation ce qui les pousse à vous traiter avec considération. Choisissez un type d’esprits ou de sprites quand vous optez pour ce trait.Vous bénéficiez d’une remise d’Atout de 1 lors de vos tests de Conjuration ou de Technomancie pour le type d’esprits/sprites que vous avez choisi. Ce trait peut être choisi plusieurs fois en optant pour un autre type d’esprits/sprites à chaque fois.",
      type: "positive",
      karmaCost: "14",
      book: "ldb",
      page: "73",
    },
    {
      key: "Affinité avec les sprites (Cracker)",
      description:
        "Vous avez gagné le respect d’un groupe précis d’esprits/sprites. Grâce à vos actions et à des faveurs, vous avez une bonne réputation ce qui les pousse à vous traiter avec considération. Choisissez un type d’esprits ou de sprites quand vous optez pour ce trait.Vous bénéficiez d’une remise d’Atout de 1 lors de vos tests de Conjuration ou de Technomancie pour le type d’esprits/sprites que vous avez choisi. Ce trait peut être choisi plusieurs fois en optant pour un autre type d’esprits/sprites à chaque fois.",
      type: "positive",
      karmaCost: "14",
      book: "ldb",
      page: "73",
    },
    {
      key: "Affinité avec les sprites (Données)",
      description:
        "Vous avez gagné le respect d’un groupe précis d’esprits/sprites. Grâce à vos actions et à des faveurs, vous avez une bonne réputation ce qui les pousse à vous traiter avec considération. Choisissez un type d’esprits ou de sprites quand vous optez pour ce trait.Vous bénéficiez d’une remise d’Atout de 1 lors de vos tests de Conjuration ou de Technomancie pour le type d’esprits/sprites que vous avez choisi. Ce trait peut être choisi plusieurs fois en optant pour un autre type d’esprits/sprites à chaque fois.",
      type: "positive",
      karmaCost: "14",
      book: "ldb",
      page: "73",
    },
    {
      key: "Affinité avec les sprites (Erreur)",
      description:
        "Vous avez gagné le respect d’un groupe précis d’esprits/sprites. Grâce à vos actions et à des faveurs, vous avez une bonne réputation ce qui les pousse à vous traiter avec considération. Choisissez un type d’esprits ou de sprites quand vous optez pour ce trait.Vous bénéficiez d’une remise d’Atout de 1 lors de vos tests de Conjuration ou de Technomancie pour le type d’esprits/sprites que vous avez choisi. Ce trait peut être choisi plusieurs fois en optant pour un autre type d’esprits/sprites à chaque fois.",
      type: "positive",
      karmaCost: "14",
      book: "ldb",
      page: "73",
    },
    {
      key: "Affinité avec les sprites (Machine)",
      description:
        "Vous avez gagné le respect d’un groupe précis d’esprits/sprites. Grâce à vos actions et à des faveurs, vous avez une bonne réputation ce qui les pousse à vous traiter avec considération. Choisissez un type d’esprits ou de sprites quand vous optez pour ce trait.Vous bénéficiez d’une remise d’Atout de 1 lors de vos tests de Conjuration ou de Technomancie pour le type d’esprits/sprites que vous avez choisi. Ce trait peut être choisi plusieurs fois en optant pour un autre type d’esprits/sprites à chaque fois.",
      type: "positive",
      karmaCost: "14",
      book: "ldb",
      page: "73",
    },
    {
      key: "Aimant à emmerdes",
      description:
        "Il y a toujours quelqu’un pour remarquer quand vous faites quelque chose de mal sur la route. Et ce ne sont jamais les bonnes personnes. Quand vous conduisez de manière dangereuse ou chaotique (à la discrétion du maître de jeu), lancez deux dés. Si vous obtenez 2 succès, la police locale vous repère.",
      type: "negative",
      karmaCost: "8",
      book: "tombeauOuvert",
      page: "170",
    },
    {
      key: "Allergie aux stim patchs",
      description:
        "Pas de chance, les stim patchs provoquent une réaction allergique chez vous. Tant que vous êtes sous l’effet d’un stim patch, vous subissez l’état Désorienté.",
      type: "negative",
      karmaCost: "10",
      book: "compagnon",
      page: "131",
    },
    {
      key: "Allergie extrême (allergène commun)",
      description:
        "Il peut s’agir d’une allergie aux pollens qui fait couler votre nez et vous fait éternuer ou d’une puissante réaction anaphylactique à l’une de ces rares cacahuètes naturelles. Quoi qu’il en soit, vous subissez une certaine gêne à cause d’une substance du Sixième Monde. Vous ne pouvez pas gagner ou dépenser de l’Atout tant que vous êtes soumis à votre allergène. Pour chaque niveau de sévérité, vous subissez également les effets secondaires indiqués. Vous subissez un malus de -6 à votre réserve de dés pour toutes vos actions et subissez 1 case de dommages physiques auxquels vous ne pouvez pas résister par 30 secondes d’exposition à l’allergène.",
      type: "negative",
      karmaCost: "20",
      book: "ldb",
      page: "76",
    },
    {
      key: "Allergie extrême (allergène peu commun)",
      description:
        "Il peut s’agir d’une allergie aux pollens qui fait couler votre nez et vous fait éternuer ou d’une puissante réaction anaphylactique à l’une de ces rares cacahuètes naturelles. Quoi qu’il en soit, vous subissez une certaine gêne à cause d’une substance du Sixième Monde. Vous ne pouvez pas gagner ou dépenser de l’Atout tant que vous êtes soumis à votre allergène. Pour chaque niveau de sévérité, vous subissez également les effets secondaires indiqués. Vous subissez un malus de -6 à votre réserve de dés pour toutes vos actions et subissez 1 case de dommages physiques auxquels vous ne pouvez pas résister par 30 secondes d’exposition à l’allergène.",
      type: "negative",
      karmaCost: "14",
      book: "ldb",
      page: "76",
    },
    {
      key: "Allergie extrême (allergène rare)",
      description:
        "Il peut s’agir d’une allergie aux pollens qui fait couler votre nez et vous fait éternuer ou d’une puissante réaction anaphylactique à l’une de ces rares cacahuètes naturelles. Quoi qu’il en soit, vous subissez une certaine gêne à cause d’une substance du Sixième Monde. Vous ne pouvez pas gagner ou dépenser de l’Atout tant que vous êtes soumis à votre allergène. Pour chaque niveau de sévérité, vous subissez également les effets secondaires indiqués. Vous subissez un malus de -6 à votre réserve de dés pour toutes vos actions et subissez 1 case de dommages physiques auxquels vous ne pouvez pas résister par 30 secondes d’exposition à l’allergène.",
      type: "negative",
      karmaCost: "11",
      book: "ldb",
      page: "76",
    },
    {
      key: "Allergie extrême (allergène saisonnier)",
      description:
        "Il peut s’agir d’une allergie aux pollens qui fait couler votre nez et vous fait éternuer ou d’une puissante réaction anaphylactique à l’une de ces rares cacahuètes naturelles. Quoi qu’il en soit, vous subissez une certaine gêne à cause d’une substance du Sixième Monde. Vous ne pouvez pas gagner ou dépenser de l’Atout tant que vous êtes soumis à votre allergène. Pour chaque niveau de sévérité, vous subissez également les effets secondaires indiqués. Vous subissez un malus de -6 à votre réserve de dés pour toutes vos actions et subissez 1 case de dommages physiques auxquels vous ne pouvez pas résister par 30 secondes d’exposition à l’allergène.",
      type: "negative",
      karmaCost: "17",
      book: "ldb",
      page: "76",
    },
    {
      key: "Allergie faible (allergène commun)",
      description:
        "Il peut s’agir d’une allergie aux pollens qui fait couler votre nez et vous fait éternuer ou d’une puissante réaction anaphylactique à l’une de ces rares cacahuètes naturelles. Quoi qu’il en soit, vous subissez une certaine gêne à cause d’une substance du Sixième Monde. Vous ne pouvez pas gagner ou dépenser de l’Atout tant que vous êtes soumis à votre allergène. Pour chaque niveau de sévérité, vous subissez également les effets secondaires indiqués. Vous subissez un malus de -2 à votre réserve de dés pour tout test avec un attribut physique tant que l’allergène vous affecte.",
      type: "negative",
      karmaCost: "11",
      book: "ldb",
      page: "76",
    },
    {
      key: "Allergie faible (allergène peu commun)",
      description:
        "Il peut s’agir d’une allergie aux pollens qui fait couler votre nez et vous fait éternuer ou d’une puissante réaction anaphylactique à l’une de ces rares cacahuètes naturelles. Quoi qu’il en soit, vous subissez une certaine gêne à cause d’une substance du Sixième Monde. Vous ne pouvez pas gagner ou dépenser de l’Atout tant que vous êtes soumis à votre allergène. Pour chaque niveau de sévérité, vous subissez également les effets secondaires indiqués. Vous subissez un malus de -2 à votre réserve de dés pour tout test avec un attribut physique tant que l’allergène vous affecte.",
      type: "negative",
      karmaCost: "5",
      book: "ldb",
      page: "76",
    },
    {
      key: "Allergie faible (allergène rare)",
      description:
        "Il peut s’agir d’une allergie aux pollens qui fait couler votre nez et vous fait éternuer ou d’une puissante réaction anaphylactique à l’une de ces rares cacahuètes naturelles. Quoi qu’il en soit, vous subissez une certaine gêne à cause d’une substance du Sixième Monde. Vous ne pouvez pas gagner ou dépenser de l’Atout tant que vous êtes soumis à votre allergène. Pour chaque niveau de sévérité, vous subissez également les effets secondaires indiqués. Vous subissez un malus de -2 à votre réserve de dés pour tout test avec un attribut physique tant que l’allergène vous affecte.",
      type: "negative",
      karmaCost: "2",
      book: "ldb",
      page: "76",
    },
    {
      key: "Allergie faible (allergène saisonnier)",
      description:
        "Il peut s’agir d’une allergie aux pollens qui fait couler votre nez et vous fait éternuer ou d’une puissante réaction anaphylactique à l’une de ces rares cacahuètes naturelles. Quoi qu’il en soit, vous subissez une certaine gêne à cause d’une substance du Sixième Monde. Vous ne pouvez pas gagner ou dépenser de l’Atout tant que vous êtes soumis à votre allergène. Pour chaque niveau de sévérité, vous subissez également les effets secondaires indiqués. Vous subissez un malus de -2 à votre réserve de dés pour tout test avec un attribut physique tant que l’allergène vous affecte.",
      type: "negative",
      karmaCost: "8",
      book: "ldb",
      page: "76",
    },
    {
      key: "Allergie grave (allergène commun)",
      description:
        "Il peut s’agir d’une allergie aux pollens qui fait couler votre nez et vous fait éternuer ou d’une puissante réaction anaphylactique à l’une de ces rares cacahuètes naturelles. Quoi qu’il en soit, vous subissez une certaine gêne à cause d’une substance du Sixième Monde. Vous ne pouvez pas gagner ou dépenser de l’Atout tant que vous êtes soumis à votre allergène. Pour chaque niveau de sévérité, vous subissez également les effets secondaires indiqués. Vous subissez un malus de -4 à votre réserve de dés pour tout test avec un attribut physique tant que l’allergène vous affecte. Vous subissez également 1 case de dommages physiques auxquels vous ne pouvez pas résister par minute d’exposition à l’allergène.",
      type: "negative",
      karmaCost: "17",
      book: "ldb",
      page: "76",
    },
    {
      key: "Allergie grave (allergène peu commun)",
      description:
        "Il peut s’agir d’une allergie aux pollens qui fait couler votre nez et vous fait éternuer ou d’une puissante réaction anaphylactique à l’une de ces rares cacahuètes naturelles. Quoi qu’il en soit, vous subissez une certaine gêne à cause d’une substance du Sixième Monde. Vous ne pouvez pas gagner ou dépenser de l’Atout tant que vous êtes soumis à votre allergène. Pour chaque niveau de sévérité, vous subissez également les effets secondaires indiqués. Vous subissez un malus de -4 à votre réserve de dés pour tout test avec un attribut physique tant que l’allergène vous affecte. Vous subissez également 1 case de dommages physiques auxquels vous ne pouvez pas résister par minute d’exposition à l’allergène.",
      type: "negative",
      karmaCost: "11",
      book: "ldb",
      page: "76",
    },
    {
      key: "Allergie grave (allergène rare)",
      description:
        "Il peut s’agir d’une allergie aux pollens qui fait couler votre nez et vous fait éternuer ou d’une puissante réaction anaphylactique à l’une de ces rares cacahuètes naturelles. Quoi qu’il en soit, vous subissez une certaine gêne à cause d’une substance du Sixième Monde. Vous ne pouvez pas gagner ou dépenser de l’Atout tant que vous êtes soumis à votre allergène. Pour chaque niveau de sévérité, vous subissez également les effets secondaires indiqués. Vous subissez un malus de -4 à votre réserve de dés pour tout test avec un attribut physique tant que l’allergène vous affecte. Vous subissez également 1 case de dommages physiques auxquels vous ne pouvez pas résister par minute d’exposition à l’allergène.",
      type: "negative",
      karmaCost: "8",
      book: "ldb",
      page: "76",
    },
    {
      key: "Allergie grave (allergène saisonnier)",
      description:
        "Il peut s’agir d’une allergie aux pollens qui fait couler votre nez et vous fait éternuer ou d’une puissante réaction anaphylactique à l’une de ces rares cacahuètes naturelles. Quoi qu’il en soit, vous subissez une certaine gêne à cause d’une substance du Sixième Monde. Vous ne pouvez pas gagner ou dépenser de l’Atout tant que vous êtes soumis à votre allergène. Pour chaque niveau de sévérité, vous subissez également les effets secondaires indiqués. Vous subissez un malus de -4 à votre réserve de dés pour tout test avec un attribut physique tant que l’allergène vous affecte. Vous subissez également 1 case de dommages physiques auxquels vous ne pouvez pas résister par minute d’exposition à l’allergène.",
      type: "negative",
      karmaCost: "14",
      book: "ldb",
      page: "76",
    },
    {
      key: "Allergie modérée (allergène commun)",
      description:
        "Il peut s’agir d’une allergie aux pollens qui fait couler votre nez et vous fait éternuer ou d’une puissante réaction anaphylactique à l’une de ces rares cacahuètes naturelles. Quoi qu’il en soit, vous subissez une certaine gêne à cause d’une substance du Sixième Monde. Vous ne pouvez pas gagner ou dépenser de l’Atout tant que vous êtes soumis à votre allergène. Pour chaque niveau de sévérité, vous subissez également les effets secondaires indiqués. Vous subissez un malus de -4 à votre réserve de dés pour tout test avec un attribut physique tant que l’allergène vous affecte.",
      type: "negative",
      karmaCost: "14",
      book: "ldb",
      page: "76",
    },
    {
      key: "Allergie modérée (allergène peu commun)",
      description:
        "Il peut s’agir d’une allergie aux pollens qui fait couler votre nez et vous fait éternuer ou d’une puissante réaction anaphylactique à l’une de ces rares cacahuètes naturelles. Quoi qu’il en soit, vous subissez une certaine gêne à cause d’une substance du Sixième Monde. Vous ne pouvez pas gagner ou dépenser de l’Atout tant que vous êtes soumis à votre allergène. Pour chaque niveau de sévérité, vous subissez également les effets secondaires indiqués. Vous subissez un malus de -4 à votre réserve de dés pour tout test avec un attribut physique tant que l’allergène vous affecte.",
      type: "negative",
      karmaCost: "8",
      book: "ldb",
      page: "76",
    },
    {
      key: "Allergie modérée (allergène rare)",
      description:
        "Il peut s’agir d’une allergie aux pollens qui fait couler votre nez et vous fait éternuer ou d’une puissante réaction anaphylactique à l’une de ces rares cacahuètes naturelles. Quoi qu’il en soit, vous subissez une certaine gêne à cause d’une substance du Sixième Monde. Vous ne pouvez pas gagner ou dépenser de l’Atout tant que vous êtes soumis à votre allergène. Pour chaque niveau de sévérité, vous subissez également les effets secondaires indiqués. Vous subissez un malus de -4 à votre réserve de dés pour tout test avec un attribut physique tant que l’allergène vous affecte.",
      type: "negative",
      karmaCost: "5",
      book: "ldb",
      page: "76",
    },
    {
      key: "Allergie modérée (allergène saisonnier)",
      description:
        "Il peut s’agir d’une allergie aux pollens qui fait couler votre nez et vous fait éternuer ou d’une puissante réaction anaphylactique à l’une de ces rares cacahuètes naturelles. Quoi qu’il en soit, vous subissez une certaine gêne à cause d’une substance du Sixième Monde. Vous ne pouvez pas gagner ou dépenser de l’Atout tant que vous êtes soumis à votre allergène. Pour chaque niveau de sévérité, vous subissez également les effets secondaires indiqués. Vous subissez un malus de -4 à votre réserve de dés pour tout test avec un attribut physique tant que l’allergène vous affecte.",
      type: "negative",
      karmaCost: "11",
      book: "ldb",
      page: "76",
    },
    {
      key: "Allié des syndicats",
      description:
        "Les syndicats d’Everett ont connu une recrudescence massive. Vous en êtes membre, vous avez forgé des liens avec un adhérent ou vous êtes simplement un habitué de leurs points de rencontre. De ce fait, vous obtenez souvent des informations sur ce qui se passe dans le district d’Everett en avant-première. Choisissez l’un des syndicats décrits dans le chapitre dédié à Everett de Seattle : Cité d'émeraude. Vous obtenez une remise d’Atout de 1 pour tous vos tests sociaux avec des personnes appartenant à ce syndicat.",
      type: "positive",
      karmaCost: "3",
      book: "seattleEmeraude",
      page: "92",
    },
    {
      key: "Allonge",
      description:
        "Que vous ayez de longs bras, de longues jambes ou une grâce physique exceptionnelle, vous pouvez plus facilement que les autres atteindre des adversaires distants avec des armes de mêlée ou à mains nues. Quand vous utilisez une arme de mêlée ou attaquez à mains nues, la portée proche est de 5 mètres au lieu de 3.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "73",
    },
    {
      key: "Ambidextre",
      description:
        "Vous utilisez aussi bien votre côté droit que votre côté gauche. Que vous utilisiez un pistolet, que vous lanciez une grenade ou que vous tapiez dans une balle, vous pouvez vous servir de vos deux mains ou de vos deux pieds avec la même efficacité. Aucune pénalité pour utiliser une arme avec votre main non directrice (voir p. 115).",
      type: "positive",
      karmaCost: "4",
      book: "ldb",
      page: "73",
    },
    {
      key: "Amis haut-placés",
      description:
        "Faire partie de la vie de Bellevue implique de connaître des gens. Il s’agit peut-être de vos voisins, de vos amis, ou juste de ce type plein aux as avec qui vous avez pris l’ascenseur une fois. Quoi qu’il en soit, vous tenir côte à côte avec la bonne personne peut vous rendre plus remarquable. Grâce à vos relations, les coûts de vos styles de vie sont réduits de dix pour cent. Vous obtenez également un point d’Atout supplémentaire lors de tous vos tests sociaux pour entrer dans un lieu public de Bellevue, comme un bar, une discothèque, etc.",
      type: "positive",
      karmaCost: "3",
      book: "seattleEmeraude",
      page: "55",
    },
    {
      key: "Apparence humaine",
      description:
        "Il existe des orks de petite taille, des nains de grande taille et des elfes à l’apparence ingrate. Que cela soit dû à la génétique ou à des modifications, vous ne ressemblez pas à votre métatype de naissance ; vous avez une apparence humaine. On ne voit quasiment pas vos oreilles légèrement pointues, vos défenses sont à peine plus grosses que des dents, vos pommettes sont plus arrondies, vos jambes plus longues et ainsi de suite. Vous pouvez passer pour un humain, ce qui peut être utile face à des humains, mais problématique face à des non-humains. Au premier regard, vous avez une apparence humaine ce qui vous octroie une remise d’Atout de 1 lors de vos tests de Déguisement pour masquer votre métatype et passer pour un humain. Les humains et les trolls ne peuvent pas choisir ce trait.",
      type: "positive",
      karmaCost: "6",
      book: "ldb",
      page: "73",
    },
    {
      key: "Aptitude (Armes à feu)",
      description:
        "Les meilleurs vous respectent. Vous avez le potentiel naturel d’être encore meilleur que les meilleurs dans une compétence spécifique. Votre rang maximum pour la compétence sélectionnée est de 10 au lieu de 9 et votre rang de départ maximum est de 7 au lieu de 6.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "73",
    },
    {
      key: "Aptitude (Armes exotiques)",
      description:
        "Les meilleurs vous respectent. Vous avez le potentiel naturel d’être encore meilleur que les meilleurs dans une compétence spécifique. Votre rang maximum pour la compétence sélectionnée est de 10 au lieu de 9 et votre rang de départ maximum est de 7 au lieu de 6.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "73",
    },
    {
      key: "Aptitude (Astral)",
      description:
        "Les meilleurs vous respectent. Vous avez le potentiel naturel d’être encore meilleur que les meilleurs dans une compétence spécifique. Votre rang maximum pour la compétence sélectionnée est de 10 au lieu de 9 et votre rang de départ maximum est de 7 au lieu de 6.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "73",
    },
    {
      key: "Aptitude (Athlétisme)",
      description:
        "Les meilleurs vous respectent. Vous avez le potentiel naturel d’être encore meilleur que les meilleurs dans une compétence spécifique. Votre rang maximum pour la compétence sélectionnée est de 10 au lieu de 9 et votre rang de départ maximum est de 7 au lieu de 6.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "73",
    },
    {
      key: "Aptitude (Biotech)",
      description:
        "Les meilleurs vous respectent. Vous avez le potentiel naturel d’être encore meilleur que les meilleurs dans une compétence spécifique. Votre rang maximum pour la compétence sélectionnée est de 10 au lieu de 9 et votre rang de départ maximum est de 7 au lieu de 6.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "73",
    },
    {
      key: "Aptitude (Combat rapproché)",
      description:
        "Les meilleurs vous respectent. Vous avez le potentiel naturel d’être encore meilleur que les meilleurs dans une compétence spécifique. Votre rang maximum pour la compétence sélectionnée est de 10 au lieu de 9 et votre rang de départ maximum est de 7 au lieu de 6.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "73",
    },
    {
      key: "Aptitude (Conjuration)",
      description:
        "Les meilleurs vous respectent. Vous avez le potentiel naturel d’être encore meilleur que les meilleurs dans une compétence spécifique. Votre rang maximum pour la compétence sélectionnée est de 10 au lieu de 9 et votre rang de départ maximum est de 7 au lieu de 6.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "73",
    },
    {
      key: "Aptitude (Électronique)",
      description:
        "Les meilleurs vous respectent. Vous avez le potentiel naturel d’être encore meilleur que les meilleurs dans une compétence spécifique. Votre rang maximum pour la compétence sélectionnée est de 10 au lieu de 9 et votre rang de départ maximum est de 7 au lieu de 6.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "73",
    },
    {
      key: "Aptitude (Enchantement)",
      description:
        "Les meilleurs vous respectent. Vous avez le potentiel naturel d’être encore meilleur que les meilleurs dans une compétence spécifique. Votre rang maximum pour la compétence sélectionnée est de 10 au lieu de 9 et votre rang de départ maximum est de 7 au lieu de 6.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "73",
    },
    {
      key: "Aptitude (Escroquerie)",
      description:
        "Les meilleurs vous respectent. Vous avez le potentiel naturel d’être encore meilleur que les meilleurs dans une compétence spécifique. Votre rang maximum pour la compétence sélectionnée est de 10 au lieu de 9 et votre rang de départ maximum est de 7 au lieu de 6.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "73",
    },
    {
      key: "Aptitude (Furtivité)",
      description:
        "Les meilleurs vous respectent. Vous avez le potentiel naturel d’être encore meilleur que les meilleurs dans une compétence spécifique. Votre rang maximum pour la compétence sélectionnée est de 10 au lieu de 9 et votre rang de départ maximum est de 7 au lieu de 6.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "73",
    },
    {
      key: "Aptitude (Influence)",
      description:
        "Les meilleurs vous respectent. Vous avez le potentiel naturel d’être encore meilleur que les meilleurs dans une compétence spécifique. Votre rang maximum pour la compétence sélectionnée est de 10 au lieu de 9 et votre rang de départ maximum est de 7 au lieu de 6.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "73",
    },
    {
      key: "Aptitude (Ingénierie)",
      description:
        "Les meilleurs vous respectent. Vous avez le potentiel naturel d’être encore meilleur que les meilleurs dans une compétence spécifique. Votre rang maximum pour la compétence sélectionnée est de 10 au lieu de 9 et votre rang de départ maximum est de 7 au lieu de 6.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "73",
    },
    {
      key: "Aptitude (Perception)",
      description:
        "Les meilleurs vous respectent. Vous avez le potentiel naturel d’être encore meilleur que les meilleurs dans une compétence spécifique. Votre rang maximum pour la compétence sélectionnée est de 10 au lieu de 9 et votre rang de départ maximum est de 7 au lieu de 6.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "73",
    },
    {
      key: "Aptitude (Pilotage)",
      description:
        "Les meilleurs vous respectent. Vous avez le potentiel naturel d’être encore meilleur que les meilleurs dans une compétence spécifique. Votre rang maximum pour la compétence sélectionnée est de 10 au lieu de 9 et votre rang de départ maximum est de 7 au lieu de 6.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "73",
    },
    {
      key: "Aptitude (Piratage)",
      description:
        "Les meilleurs vous respectent. Vous avez le potentiel naturel d’être encore meilleur que les meilleurs dans une compétence spécifique. Votre rang maximum pour la compétence sélectionnée est de 10 au lieu de 9 et votre rang de départ maximum est de 7 au lieu de 6.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "73",
    },
    {
      key: "Aptitude (Plein air)",
      description:
        "Les meilleurs vous respectent. Vous avez le potentiel naturel d’être encore meilleur que les meilleurs dans une compétence spécifique. Votre rang maximum pour la compétence sélectionnée est de 10 au lieu de 9 et votre rang de départ maximum est de 7 au lieu de 6.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "73",
    },
    {
      key: "Aptitude (Sorcellerie)",
      description:
        "Les meilleurs vous respectent. Vous avez le potentiel naturel d’être encore meilleur que les meilleurs dans une compétence spécifique. Votre rang maximum pour la compétence sélectionnée est de 10 au lieu de 9 et votre rang de départ maximum est de 7 au lieu de 6.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "73",
    },
    {
      key: "Aptitude (Technomancie)",
      description:
        "Les meilleurs vous respectent. Vous avez le potentiel naturel d’être encore meilleur que les meilleurs dans une compétence spécifique. Votre rang maximum pour la compétence sélectionnée est de 10 au lieu de 9 et votre rang de départ maximum est de 7 au lieu de 6.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "73",
    },
    {
      key: "Arrêt de Mort d’Aztechnology",
      description:
        "À un moment ou un autre, vous avez fait quelque chose de suffisamment grave pour qu’Aztechnology vous traque activement. Vos données biométriques sont surveillées et guettées avec la plus haute priorité. Si un agent ou un employé d’Aztechnology (ou affilié) découvre votre véritable identité, elle fera en sorte que vous soyez capturé… ou éliminé. En plus de la description ci-dessus, tout personnage affilié à Aztechnology qui tente de vous identifier par biométrie gagne un bonus de +2 à la réserve de dés pour tous les tests associés, ainsi qu’un point d’Atout. À moins que votre déguisement ne soit convaincant ou que vous réussissiez à dissimuler votre identité, vous ne pouvez pas gagner d’Atout lors des tests sociaux impliquant des individus affiliés à Aztechnology.",
      type: "negative",
      karmaCost: "10",
      book: "jeuxPouvoir",
      page: "51",
    },
    {
      key: "Asocial",
      description:
        "À un moment donné de votre vie, le filtre entre vos pensées et votre bouche a disparu. Vous vous considérez comme étant brutalement honnête, mais les autres ont tendance à vous considérer comme quelqu’un de grossier et d’agressif. Vous ne pouvez pas dépenser de l’Atout sur vos tests utilisant le Charisme.",
      type: "negative",
      karmaCost: "6",
      book: "ldb",
      page: "77",
    },
    {
      key: "Attribut exceptionnel (Agilité)",
      description:
        "Que vous débordiez d’énergie ou que vous soyez capable d’encaisser l’attaque d’un troll, de tenir l’alcool, d’éviter des coups, de vendre du charbon à Newcastle ou de faire passer un chat pour un empoté, vous êtes naturellement supérieur. Choisissez un attribut physique ou mental. Votre maximum dans cet attribut (mais pas votre rang actuel) est augmenté de 1. Ce trait ne peut être sélectionné qu’une seule fois par attribut.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "73",
    },
    {
      key: "Attribut exceptionnel (Charisme)",
      description:
        "Que vous débordiez d’énergie ou que vous soyez capable d’encaisser l’attaque d’un troll, de tenir l’alcool, d’éviter des coups, de vendre du charbon à Newcastle ou de faire passer un chat pour un empoté, vous êtes naturellement supérieur. Choisissez un attribut physique ou mental. Votre maximum dans cet attribut (mais pas votre rang actuel) est augmenté de 1. Ce trait ne peut être sélectionné qu’une seule fois par attribut.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "73",
    },
    {
      key: "Attribut exceptionnel (Constitution)",
      description:
        "Que vous débordiez d’énergie ou que vous soyez capable d’encaisser l’attaque d’un troll, de tenir l’alcool, d’éviter des coups, de vendre du charbon à Newcastle ou de faire passer un chat pour un empoté, vous êtes naturellement supérieur. Choisissez un attribut physique ou mental. Votre maximum dans cet attribut (mais pas votre rang actuel) est augmenté de 1. Ce trait ne peut être sélectionné qu’une seule fois par attribut.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "73",
    },
    {
      key: "Attribut exceptionnel (Force)",
      description:
        "Que vous débordiez d’énergie ou que vous soyez capable d’encaisser l’attaque d’un troll, de tenir l’alcool, d’éviter des coups, de vendre du charbon à Newcastle ou de faire passer un chat pour un empoté, vous êtes naturellement supérieur. Choisissez un attribut physique ou mental. Votre maximum dans cet attribut (mais pas votre rang actuel) est augmenté de 1. Ce trait ne peut être sélectionné qu’une seule fois par attribut.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "73",
    },
    {
      key: "Attribut exceptionnel (Intuition)",
      description:
        "Que vous débordiez d’énergie ou que vous soyez capable d’encaisser l’attaque d’un troll, de tenir l’alcool, d’éviter des coups, de vendre du charbon à Newcastle ou de faire passer un chat pour un empoté, vous êtes naturellement supérieur. Choisissez un attribut physique ou mental. Votre maximum dans cet attribut (mais pas votre rang actuel) est augmenté de 1. Ce trait ne peut être sélectionné qu’une seule fois par attribut.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "73",
    },
    {
      key: "Attribut exceptionnel (Logique)",
      description:
        "Que vous débordiez d’énergie ou que vous soyez capable d’encaisser l’attaque d’un troll, de tenir l’alcool, d’éviter des coups, de vendre du charbon à Newcastle ou de faire passer un chat pour un empoté, vous êtes naturellement supérieur. Choisissez un attribut physique ou mental. Votre maximum dans cet attribut (mais pas votre rang actuel) est augmenté de 1. Ce trait ne peut être sélectionné qu’une seule fois par attribut.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "73",
    },
    {
      key: "Attribut exceptionnel (Réaction)",
      description:
        "Que vous débordiez d’énergie ou que vous soyez capable d’encaisser l’attaque d’un troll, de tenir l’alcool, d’éviter des coups, de vendre du charbon à Newcastle ou de faire passer un chat pour un empoté, vous êtes naturellement supérieur. Choisissez un attribut physique ou mental. Votre maximum dans cet attribut (mais pas votre rang actuel) est augmenté de 1. Ce trait ne peut être sélectionné qu’une seule fois par attribut.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "73",
    },
    {
      key: "Attribut exceptionnel (Volonté)",
      description:
        "Que vous débordiez d’énergie ou que vous soyez capable d’encaisser l’attaque d’un troll, de tenir l’alcool, d’éviter des coups, de vendre du charbon à Newcastle ou de faire passer un chat pour un empoté, vous êtes naturellement supérieur. Choisissez un attribut physique ou mental. Votre maximum dans cet attribut (mais pas votre rang actuel) est augmenté de 1. Ce trait ne peut être sélectionné qu’une seule fois par attribut.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "73",
    },
    {
      key: "Attributs limités",
      description:
        "Vous n’avez eu ni l’opportunité ni les ressources pour vous consacrer au développement de vos points forts. Ce trait ne peut être acquis et ne s’applique que lors de la création de personnage. Effet en jeu : vous ne pouvez pas commencer avec des attributs égaux au maximum de votre métatype. Si vous utilisez les règles de système de parcours de vie, vous devez réduire l’attribut maximisé de 1 et assigner ce point à un attribut différent.",
      type: "negative",
      karmaCost: "5",
      book: "compagnon",
      page: "131",
    },
    {
      key: "Balise astrale",
      description:
        "Quand les gens parlent de personnes ayant une « âme radieuse », ils pensent que c’est une bonne chose. Vous ne partagez pas cet avis. À cause de votre aura éclatante, on vous voit dans l’espace astral comme le nez au milieu de la figure. Vous avez du mal à cacher ou à masquer votre aura et toute tentative pour vous localiser peut être effectuée par des cancres de première année du programme d’Études arcaniques du centre universitaire d’Hagerstown. Vous êtes considéré comme Inexpérimenté pour tous vos tests de Furtivité sur le plan astral. Vous ne pouvez jamais choisir la métamagie Camouflage. Les tests d’Observation astrale effectués contre vous bénéficient d’une remise d’Atout de 1 et leurs seuils sont réduits de 1. Les tests de pistage astral effectués contre vous bénéficient d’une remise d’Atout de 2 et leurs seuils sont réduits de moitié.",
      type: "negative",
      karmaCost: "10",
      book: "ldb",
      page: "77",
    },
    {
      key: "Banlieusard",
      description:
        "Les banlieues résidentielles ont établi des règles de conduite à respecter si l’on veut s’intégrer, et personne ne veut passer pour un étranger, n’est-ce pas ? Comment s’habiller ou parler, et surtout ce qu’il ne faut jamais mentionné en public. Heureusement, vous connaissez toutes ces règles tacites. Peut-être avez-vous grandi dans une banlieue ou passé beaucoup de temps dans ce genre d’endroits. Quoi qu’il en soit, vous savez vous fondre dans le décor et éviter d’attirer l’attention de vos voisins. Vous bénéficiez d’une remise d’Atout de 1 pour toute interaction sociale avec un personnage vivant ou ayant vécu en banlieue.",
      type: "positive",
      karmaCost: "5",
      book: "seattleEmeraude",
      page: "162",
    },
    {
      key: "Bravache",
      description:
        "Au diable les Ombres, à vous les feux de la rampe ! Une fois par séance, vous pouvez gagner un point d’Atout pour n’importe quelle action pour peu que vous en profitiez pour frimer un maximum. À chaque utilisation de ce trait, augmentez votre Pression de 1 point.",
      type: "positive",
      karmaCost: "6",
      book: "compagnon",
      page: "128",
    },
    {
      key: "Bravoure usurpée",
      description:
        "Vous êtes un poseur soldat/mercenaire ou un frimeur, quelqu’un qui adore s’afficher comme faisant partie de l’armée ou d’un groupe paramilitaire, mais qui n’a jamais été une seule fois sur le terrain ou participé à une quelconque opération. Vous pouvez aussi être un raté qui n’a jamais réussi à suivre l’entraînement de base, mais qui se considère et se présente tout de même comme un vrai soldat, ou pire, comme un « agent d’élite ». Vous êtes le genre de personnes qui adorent le style et la réputation des militaires, mais qui n’ont jamais accordé d’efforts ou de temps à l’armée ; ce qui a tendance à taper sur les nerfs de ce qui l’ont vraiment fait. Vous ne pouvez obtenir que +1 d’Atout maximum par round en présence d’un véritable militaire ou mercenaire. Si quelqu’un parvient à découvrir la supercherie, vous subirez –2 pour tous vos tests sociaux, d’Influence ou d’Escroquerie et ne pourrez pas gagner d’Atout en sa présence.",
      type: "positive",
      karmaCost: "10",
      book: "seattleEmeraude",
      page: "105",
    },
    {
      key: "Bricoleur",
      description:
        "Quand vous n’avez pas le temps ou les bonnes pièces pour bien le faire, vous le faites tout de même. Que vous utilisiez du ruban adhésif, que vous reliez des câbles qui ne devraient pas l’être ou que vous tapiez simplement dessus, vous trouvez un moyen créatif de faire fonctionner une machine, même brièvement. Quand vous effectuez un test de Bricolage (voir p. 103), vous bénéficiez d’une remise d’Atout de 1.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "73",
    },
    {
      key: "Bruits parasites réconfortants",
      description:
        "Vous êtes habitué au Bruit, et vous le trouvez même réconfortant. Quand vous êtes soumis au Bruit, vous bénéficiez d’une remise d’Atout de 1 (avec un coût minimum de 1). Cela ne s’applique qu’aux actions matricielles. Il est possible de réduire le Bruit en partie, mais s’il est totalement annulé ce trait ne s’applique plus.",
      type: "positive",
      karmaCost: "4",
      book: "compagnon",
      page: "128",
    },
    {
      key: "C’est pas moi",
      description:
        "Vous avez tendance à souvent échapper à vos responsabilités. Si vous le souhaitez, après que le maître de jeu a lancé les dés pour déterminer la Pression à la fin d’un run, vous pouvez le forcer à relancer. Le nouveau résultat n’affecte que votre Pression individuelle. Si plusieurs runners disposent de ce trait, la relance ne se fait qu’une fois mais les affecte tous.",
      type: "positive",
      karmaCost: "12",
      book: "compagnon",
      page: "129",
    },
    {
      key: "Caméléon astral",
      description:
        "Votre aura ne se stabilise jamais très longtemps. Vous avez la capacité de vous fondre dans l’environnement astral pour qu’il soit plus difficile d’identifier ou de lire votre aura et votre signature astrale. Les personnages subissent un malus de -2 dés à leurs tests pour identifier votre aura ou votre signature astrale. Votre signature astrale s’estompe deux fois plus vite qu’à la normale (voir p. 162).",
      type: "positive",
      karmaCost: "9",
      book: "ldb",
      page: "73",
    },
    {
      key: "Cartographie mentale",
      description:
        "Vous vivez dans l’Underground depuis si longtemps que ses changements ne vous perturbent plus. Vous êtes capable de visualiser une carte des lieux dans votre tête sans que cela vous demande énormément d’efforts. Le même processus fonctionne dans les couloirs labyrinthiques des universités ou les bureaux des corporations. Quand vous ne faites rien qui sort de l’ordinaire, vous vous souvenez de l’endroit où vous vous trouvez et vous ne vous perdez pas tant que vous vous trouvez dans un bâtiment ou une structure fermés (mais pas dans la forêt, par exemple). Lorsque vous êtes en pleine action (que ce soit en combat, en agissant à votre tour d’initiative, etc.) et que vous utilisez une action Bouger, vous pouvez dépenser une action mineure au même moment pour éviter de vous perdre en avançant trop vite. Si vous y allouez assez d’actions, vous pouvez même vous rappeler de tout votre itinéraire, même si vous êtes plongé dans le noir ou l’obscurité.",
      type: "positive",
      karmaCost: "5",
      book: "seattleEmeraude",
      page: "199",
    },
    {
      key: "Ce qui ne tue pas rend plus fort",
      description:
        "La vie n’est pas facile à Puyallup. Si vous ne finissez pas étouffé par le brouillard acide ou les cendres, vous mangez sûrement des restes toxiques ou avariés pour ne pas mourir de faim. Ne pouvant vous procurer de médicaments, vous avez dû combattre de multiples maladies et infections bactériennes. Mais ceux qui survivent à cela en ressortent plus fort. Remplacez un dé de votre réserve par un dé libre pour n’importe quel test de maladie ou de toxine.",
      type: "positive",
      karmaCost: "4",
      book: "seattleEmeraude",
      page: "135",
    },
    {
      key: "Chaman Salish",
      description:
        "Que vous soyez né Salish ou non, vous avez été entraîné par leurs chamans ou par l’un de leurs pairs exilés. Grâce à cette formation, vous êtes deux fois plus efficace lorsque vous utilisez des réactifs. Vous pouvez utiliser des réactifs d’une autre tradition que la vôtre. Lorsque vous utilisez des réactifs de votre tradition, vous n’avez besoin que de la moitié de la quantité normale (arrondie au supérieur, minimum 1).",
      type: "positive",
      karmaCost: "9",
      book: "seattleEmeraude",
      page: "67",
    },
    {
      key: "Chien en laisse",
      description:
        "Vous sortez du Programme de dressage. Quelle qu’ait été la nature de votre entraînement, vos enseignants ont mis l’accent sur la loyauté envers la méga. Depuis, vous n’en manquez pas. Vous obtenez un bonus de +2 dés à tous les tests de Volonté visant à vous empêcher de nuire, diffamer ou porter atteinte à la corporation Shiawase.",
      type: "positive",
      karmaCost: "8",
      book: "jeuxPouvoir",
      page: "138",
    },
    {
      key: "Code d’honneur : Bushido corporatiste",
      description:
        "Ceci est une variante du trait Code d’honneur : Bushido que vous trouverez p. 78, SR6. Ceux qui le possèdent respectent les valeurs classiques de droiture, de courage, de compassion, de respect, d’honnêteté, d’honneur, de loyauté et de maîtrise de soi, mais les envisagent selon les besoins de la maison mère. Cela signifie que leur loyauté se rapporte à la corporation, et que, s’ils doivent trahir d’autres personnes pour la préserver, ainsi vont les choses. De la même manière, ils se montrent honnêtes auprès des employés de leur corpo, mais peuvent mentir comme des arracheurs de dents à toute personne extérieure à celle-ci, si c’est dans l’intérêt de l’entreprise. Il est donc parfois difficile de travailler avec ou contre eux, mais ce trait les rend également prévisibles, étant donné que leur loyauté n’est un secret pour personne. Vous ne pouvez dépenser ou gagner de l’Atout pendant vingt-quatre heures après ne pas avoir respecté un principe de votre code. Si le même principe n’est pas respecté plusieurs fois ou une nouvelle fois au cours de cette période de vingt-quatre heures, chaque infraction ajoute quarante-huit heures de plus aux vingt-quatre heures initiales. Si un principe différent n’est pas respecté, les vingt-quatre heures de cette infraction s’ajoutent aux vingt-quatre heures de précédentes infractions et la même règle s’applique pour des violations additionnelles.",
      type: "positive",
      karmaCost: "10",
      book: "jeuxPouvoir",
      page: "105",
    },
    {
      key: "Code d'honneur [Black hat]",
      description:
        "C’est un code un peu délicat qui ne peut être choisi qu’avec l’accord du groupe avec lequel vous jouez, joueurs et maître de jeu. Un personnage du Black Hat s’occupe avant tout de ses propres intérêts. Si une action ne lui rapporte rien, il ne la fait pas. L’altruisme c’est pour les imbéciles. Cela ne signifie pas obligatoirement qu’il abandonnera ou trahira automatiquement les membres de son équipe, car la loyauté à long terme peut s’avérer plus rentable. Mais les considérations éthiques pour savoir s’il faut accepter ou non un boulot lui sont totalement étrangères et il ne fera rien pour sauver des victimes innocentes, car ces deux derniers mots ne signifient rien pour lui. Ce code peut sembler simple à suivre, mais comme pour les autres codes, parfois les émotions peuvent nuire aux intentions des personnages. Vous ne pouvez dépenser ou gagner de l’Atout pendant vingt-quatre heures après avoir enfreint un principe de votre code. Si le même principe n’est pas respecté plusieurs fois ou une nouvelle fois au cours de cette période de vingt-quatre heures, chaque infraction ajoute quarante-huit heures de plus aux vingt-quatre heures initiales. Si un principe différent n’est pas respecté, les vingt-quatre heures de cette infraction s’ajoutent aux vingt-quatre heures de précédentes infractions et la même règle s’applique pour des violations additionnelles.",
      type: "negative",
      karmaCost: "10",
      book: "ldb",
      page: "78",
    },
    {
      key: "Code d'honneur [Bushido]",
      description:
        "Droiture, courage, compassion, respect, honnêteté, honneur, loyauté et maîtrise de soi sont les principes fondamentaux du code du Bushido. Bien qu’il y ait une marge d’interprétation pour le sens de ces mots, le personnage ne peut pas trop dévier de leur définition établie. Vous ne pouvez dépenser ou gagner de l’Atout pendant vingt-quatre heures après avoir enfreint un principe de votre code. Si le même principe n’est pas respecté plusieurs fois ou une nouvelle fois au cours de cette période de vingt-quatre heures, chaque infraction ajoute quarante-huit heures de plus aux vingt-quatre heures initiales. Si un principe différent n’est pas respecté, les vingt-quatre heures de cette infraction s’ajoutent aux vingt-quatre heures de précédentes infractions et la même règle s’applique pour des violations additionnelles.",
      type: "negative",
      karmaCost: "10",
      book: "ldb",
      page: "78",
    },
    {
      key: "Code d'honneur [Code des pirates]",
      description:
        "Basé sur certains idéaux et concepts des pirates du XVIIIe siècle, il varie d’individu en individu, mais les principes les plus communs sont les suivants : tous les membres d’une équipe ont une voix égale et reçoivent la même part ; aucun vol ni malhonnêteté entre les membres de l’équipe ; interdiction d’abandonner le navire (c’est-à-dire, rester avec l’équipe jusqu’à la fin) ; et toujours être prêt. Vous ne pouvez dépenser ou gagner de l’Atout pendant vingt-quatre heures après avoir enfreint un principe de votre code. Si le même principe n’est pas respecté plusieurs fois ou une nouvelle fois au cours de cette période de vingt-quatre heures, chaque infraction ajoute quarante-huit heures de plus aux vingt-quatre heures initiales. Si un principe différent n’est pas respecté, les vingt-quatre heures de cette infraction s’ajoutent aux vingt-quatre heures de précédentes infractions et la même règle s’applique pour des violations additionnelles.",
      type: "negative",
      karmaCost: "10",
      book: "ldb",
      page: "78",
    },
    {
      key: "Code d'honneur [Code duello]",
      description:
        "La croyance au cœur de ce code, c’est que les conflits interpersonnels d’un certain niveau doivent se régler à un contre un au cours d’un duel d’honneur. Le personnage peut définir le niveau de dispute qui nécessite un duel, mais il doit être suffisamment élevé pour qu’il n’ait pas besoin de défier quelqu’un en duel toutes les deux minutes, mais raisonnablement faible pour qu’il puisse lancer un défi à un moment ou à un autre. Vous ne pouvez dépenser ou gagner de l’Atout pendant vingt-quatre heures après avoir enfreint un principe de votre code. Si le même principe n’est pas respecté plusieurs fois ou une nouvelle fois au cours de cette période de vingt-quatre heures, chaque infraction ajoute quarante-huit heures de plus aux vingt-quatre heures initiales. Si un principe différent n’est pas respecté, les vingt-quatre heures de cette infraction s’ajoutent aux vingt-quatre heures de précédentes infractions et la même règle s’applique pour des violations additionnelles.",
      type: "negative",
      karmaCost: "10",
      book: "ldb",
      page: "78",
    },
    {
      key: "Code d'honneur [Credo des assassins]",
      description:
        "Un personnage respectant ce code tue pour l’argent, mais uniquement pour l’argent. Il n’a jamais recours à des tueries aveugles. Ce code implique qu’aucun innocent ou témoin ne peut être tué à cause de ses actions. Vous ne pouvez dépenser ou gagner de l’Atout pendant vingt-quatre heures après avoir enfreint un principe de votre code. Si le même principe n’est pas respecté plusieurs fois ou une nouvelle fois au cours de cette période de vingt-quatre heures, chaque infraction ajoute quarante-huit heures de plus aux vingt-quatre heures initiales. Si un principe différent n’est pas respecté, les vingt-quatre heures de cette infraction s’ajoutent aux vingt-quatre heures de précédentes infractions et la même règle s’applique pour des violations additionnelles.",
      type: "negative",
      karmaCost: "10",
      book: "ldb",
      page: "78",
    },
    {
      key: "Code d'honneur [Khalsa]",
      description:
        "Code suivi par les combattants sikhs, le Khalsa a quatre interdits : pas de coupe de cheveux, pas de viande halal, aucune cohabitation sauf avec son épouse et pas d’alcool, de tabac ou de drogue. Les principes incluent l’honnêteté, l’équité, la loyauté et la résistance à la tyrannie et à la persécution. Vous ne pouvez dépenser ou gagner de l’Atout pendant vingt-quatre heures après avoir enfreint un principe de votre code. Si le même principe n’est pas respecté plusieurs fois ou une nouvelle fois au cours de cette période de vingt-quatre heures, chaque infraction ajoute quarante-huit heures de plus aux vingt-quatre heures initiales. Si un principe différent n’est pas respecté, les vingt-quatre heures de cette infraction s’ajoutent aux vingt-quatre heures de précédentes infractions et la même règle s’applique pour des violations additionnelles.",
      type: "negative",
      karmaCost: "10",
      book: "ldb",
      page: "78",
    },
    {
      key: "Code d'honneur [White hat]",
      description:
        "Ce code est simple : les actions du personnage ne doivent pas être directement responsables de la mort de quelqu’un. Vous ne pouvez dépenser ou gagner de l’Atout pendant vingt-quatre heures après avoir enfreint un principe de votre code. Si le même principe n’est pas respecté plusieurs fois ou une nouvelle fois au cours de cette période de vingt-quatre heures, chaque infraction ajoute quarante-huit heures de plus aux vingt-quatre heures initiales. Si un principe différent n’est pas respecté, les vingt-quatre heures de cette infraction s’ajoutent aux vingt-quatre heures de précédentes infractions et la même règle s’applique pour des violations additionnelles.",
      type: "negative",
      karmaCost: "10",
      book: "ldb",
      page: "78",
    },
    {
      key: "Comme le nez au milieu de la figure",
      description:
        "Pour faire simple : vous détonez, peu importe où vous allez. Vous ne pouvez ni gagner ni dépenser d’Atout lors des tests de Furtivité.",
      type: "negative",
      karmaCost: "7",
      book: "tombeauOuvert",
      page: "170",
    },
    {
      key: "Comme un poisson dans l’eau",
      description:
        "Vous avez vécu si longtemps sur les îles, que nager est comme une seconde nature pour vous. Votre vitesse de nage augmente de 1 mètre à chaque niveau de ce trait (maximum 2 mètres).",
      type: "positive",
      karmaCost: "5",
      book: "seattleEmeraude",
      page: "121",
    },
    {
      key: "Compétences limitées",
      description:
        "Maîtriser une compétence spécifique ne vous a jamais emballé. Ce trait ne peut être acquis et ne s’applique que lors de la création de personnage. Vous ne pouvez pas démarrer avec une compétence à son rang de départ maximum. Si vous utilisez les règles de système de parcours de vie, vous devez réduire la compétence maximisée de 1 et assigner ce point à une compétence différente.",
      type: "negative",
      karmaCost: "5",
      book: "compagnon",
      page: "131",
    },
    {
      key: "Compétences multiples",
      description:
        "Vous n’êtes pas limité à une seule compétence maximisée lors de la création de personnage. Vous pouvez disposer de deux compétences au rang 6.",
      type: "positive",
      karmaCost: "18",
      book: "compagnon",
      page: "129",
    },
    {
      key: "Composantes de sort",
      description:
        "Vous avez appris à utiliser des réactifs pour alimenter vos sorts, ce qui réduit vos chances de subir le Drain. Quand vous lancez un sort, vous pouvez dépenser une action mineure pour utiliser des réactifs afin de faciliter vos tests de résistance au Drain. Pour chaque réactif ainsi sacrifié, vous gagnez un dé supplémentaire, avec un maximum égal à votre rang dans la compétence Enchantement (Alchimie).",
      type: "positive",
      karmaCost: "12",
      book: "compagnon",
      page: "129",
    },
    {
      key: "Concentration accrue",
      description:
        "Vous savez comment cloisonner votre esprit et comment maintenir des sorts et des formes complexes sans subir un trop grand stress. Vous pouvez maintenir plusieurs sorts ou formes complexes sans malus. Pour chaque niveau, vous pouvez maintenir un sort ou une forme complexe supplémentaire sans subir le malus associé. Le sort ou la forme complexe ne peut avoir une valeur de Drain ou de Technodrain modifiée de 7 ou plus.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "73",
    },
    {
      key: "Connaisseur corporatiste",
      description:
        "Certains runners sont nés dans les hauteurs des enclaves. D’autres les observent à distance. Quoi qu’il en soit, vous vous êtes familiarisés avec les modes, tendances, habitudes et manières du style et de l’étiquette corporatiste. Quelle que soit votre méthode, vous avez appris à vous fondre dans la culture des corporations et c’est un avantage, que vous élaboriez une escroquerie ou proposiez un contrat à la table des négociations. Vous obtenez une remise d’Atout de 1 aux tests d’Escroquerie et d’Étiquette lorsque vous tentez de vous mêler à la société corporatiste. Pour finir, vous gagnez la connaissance Mode.",
      type: "positive",
      karmaCost: "10",
      book: "seattleEmeraude",
      page: "80",
    },
    {
      key: "Contorsionniste",
      description:
        "Grâce à l’entraînement et à la génétique, vous êtes capable de plier la plupart des vos articulations bien au-delà des capacités métahumaines. Par exemple, vos mains peuvent être aussi larges que vos poignets, vos épaules pivotent et se courbent dans toutes les directions, vous pouvez plier votre corps en deux en avant ou en arrière et vous pouvez tourner la tête derrière vous sans bouger vos épaules. Vous bénéficiez d’une remise d’Atout de 1 sur tous vos tests impliquant des prises, de vous défaire de liens, une certaine flexibilité ou de tenir dans des espaces réduits.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "74",
    },
    {
      key: "Contrebandier de Carbonado",
      description:
        "Que vous travailliez comme trafiquant de CalHots à CalLibre, comme passeur aux UCAS ou que vous soyez un affranchi effectuant une livraison, vous savez vous servir des tunnels dans les mines de Carbonado pour échapper aux autorités, quelles qu’elles soient. Vous obtenez 1 dé supplémentaire pour les tests de Connaissance ou de Plein air visant à déterminer où, quand et comment traverser les frontières de Puyallup. Vous obtenez également +1 dé lorsque vous échappez à quiconque tente de vous suivre en entrant ou sortant des mines.",
      type: "positive",
      karmaCost: "3",
      book: "seattleEmeraude",
      page: "135",
    },
    {
      key: "Contrebandier discret",
      description:
        "Vous savez où cacher les choses pour que personne ne les trouve. Si l’objet que vous cherchez à dissimuler n’est pas plus gros qu’un pistolet lourd, son seuil de Dissimulation augmente de 1. Cet effet fonctionne contre les tests de Perception classiques et les senseurs.",
      type: "positive",
      karmaCost: "7",
      book: "compagnon",
      page: "129",
    },
    {
      key: "Contrefaçon bon marché",
      description:
        "Depuis des décennies, les entreprises chinoises ont pour réputation de fabriquer des imitations médiocres des produits de grandes marques, et Wuxing ne fait pas exception à la règle. Elle commercialise toute une gamme de produits à prix cassés, qui ressemblent à leurs équivalents bien plus coûteux, mais ne fonctionnent pas toujours aussi bien. À vous de les utiliser à vos risques et périls. Ce trait s’applique aux accessoires et à l’équipement, pas aux personnes. Le prix de l’objet est réduit de cinquante pour cent, mais pour tout test réalisé avec celui-ci (y compris les tests pour le réparer), la quantité de 1 nécessaire à un échec ou un échec critique est réduite de un (par exemple, si vous deviez faire quatre 1 avec une réserve de dés de 7 pour échouer, ce trait réduirait ce chiffre à trois 1). En cas d’échec critique, l’objet est détruit, en plus des autres pénalités que son utilisateur subira. Ce trait ne s’applique pas aux focus ou aux autres objets magiques, compte tenu de la solide réputation de Wuxing dans ce domaine d’activité. Le Score Social des accessoires du type Contrefaçon bon marché est réduit de moitié par rapport à ce qu’il aurait été avec l’original (voir p. 62, Feu Nourri). Les joueurs peuvent trouver de l’équipement de type Contrefaçon bon marché s’ils possèdent une connaissance adaptée (comme Marchés noirs et Commerces de détail) ou s’ils ont un contact qui vend ou interagit avec l’objet en question. Ce dernier doit réussir un test de Réseau + Loyauté (2) pour indiquer aux PJ où ils pourraient trouver l’équipement qu’ils cherchent.",
      type: "",
      karmaCost: "",
      book: "jeuxPouvoir",
      page: "162",
    },
    {
      key: "Crise de confiance",
      description:
        "À cause d’un syndrome de l’imposteur, d’un échec traumatisant ou tout simplement de trop de rejets et de petits échecs au cours de votre vie, vous doutez constamment de vos capacités. Au cours d’une rencontre, le runner doit effectuer un test de Volonté (2) avec une action mineure. En cas d’échec, il ne peut gagner ou dépenser de l’Atout pendant toute la rencontre.",
      type: "negative",
      karmaCost: "6",
      book: "ldb",
      page: "78",
    },
    {
      key: "Cyber‑psychose",
      description:
        "Vos très nombreuses augmentations ont fait de vous un peu plus qu’un simple métahumain. Dans votre cas, cela se traduit par un certain détachement, parfois perturbé par de brusques explosions d’émotions inappropriées. Pour choisir ce trait votre score d’Essence doit être de 1 ou moins. Effet en jeu : chaque fois que votre réserve d’Atout atteint zéro, vous commencez à perdre le contact avec votre situation et votre environnement. Soit vous devenez détaché et apathique, soit vous êtes empli d’une émotion intense qui semble sortir de nulle part. Jusqu’à ce que vous regagniez de l’Atout, votre nombre d’actions mineures par round diminue de 1 par niveau de ce trait. Si le niveau de ce dernier est supérieur au nombre d’actions mineures actuellement à votre disposition, votre action majeure se transforme alors en 4 actions mineures, desquelles vous soustrayez les actions mineures qui restent à enlever.",
      type: "negative",
      karmaCost: "8",
      book: "compagnon",
      page: "132",
    },
    {
      key: "Cyborg",
      description:
        "Vous représentez la fusion parfaite entre le métahumain et la machine. Votre corps est capable de recevoir un nombre d’augmentations auxquelles la plupart des gens ne survivraient pas. Vous ne pouvez acquérir ce trait que si votre score d’Essence est de 1 ou moins et que vous possédez déjà 10 niveaux du trait Accoutumance aux augmentations. Comme avec Accoutumance aux augmentations, vous débloquez 0,1 point d’Essence par niveau ; cette réserve est dépensée en priorité lors de l’installation d’augmentations supplémentaires.",
      type: "positive",
      karmaCost: "5",
      book: "compagnon",
      page: "129",
    },
    {
      key: "D’un district à l’autre",
      description:
        "Everett possède deux postes frontaliers principaux et la branche nord des autorités portuaires. Les personnes qui y vivent ou y travaillent connaissent bien les tenants et aboutissants des voyages. Grâce à leur aide, il peut être simple comme bonjour de traverser la frontière. Vous obtenez une remise d’Atout de 1 pour vos tests de Plein air ou vos tests de Connaissance voués à déterminer où, quand et comment traverser les frontières d’Everett. Vous bénéficiez également de la même remise d’Atout pour les tests sociaux lorsque vous discutez des anomalies qui apparaissent sur les documents présentés aux postes-frontière d’Everett.",
      type: "positive",
      karmaCost: "3",
      book: "seattleEmeraude",
      page: "92",
    },
    {
      key: "Danger public",
      description:
        "Vous savez, cette histoire de conduite, là… peut-être que vous n’êtes pas fait pour ça. Ce n’est pas que vous êtes mauvais, c’est juste que quand vous êtes au volant, même les cocatrix s’abstiennent de traverser. –2 à la réserve de dés sur tous les tests d’accident.",
      type: "negative",
      karmaCost: "4",
      book: "tombeauOuvert",
      page: "170",
    },
    {
      key: "Dans l’angle mort de Big Brother",
      description:
        "Dans l’arrière-cour des mégas, l’intimité est une denrée rare. Elles surveillent tout et tout le monde, à tel point qu’il est difficile de rester incognito. Cependant, vos sens sont habitués aux systèmes de surveillance, vous conférant un bonus qui vous permet d’échapper aux caméras et de vous faufiler là on l’on ne vous verra pas. Bien sûr, si vous connaissez ces angles morts, cela signifie que vous êtes également plus susceptible de deviner où d’autres pourraient se cacher. Vous obtenez un point d’Atout sur vos tests de Discrétion pour échapper aux systèmes de surveillance tels que les caméras et les autres senseurs. Vous gagnez également une remise d’Atout de 1 sur vos tests de Perception lorsque vous utilisez un système de surveillance. Pour finir, vous gagnez la connaissance Systèmes de surveillance.",
      type: "positive",
      karmaCost: "14",
      book: "seattleEmeraude",
      page: "80",
    },
    {
      key: "Dans les petits papiers",
      description:
        "Les philosophes disent que les mains d’un artisan sont marquées par les matériaux qu’il utilise. Votre art, c’est le travail que vous effectuez pour le crime organisé, et sa marque est indélébile. Vous n’êtes plus seulement un ami; plutôt un membre éloigné de la famille. Elle fait plus souvent appel à vous qu’à d’autres et certaines connaissances vous ont tourné le dos, car même si l’idée ne vous plaît pas vous en faites partie désormais. Votre contact intermédiaire au sein de la Pègre passe désormais à Loyauté 2 et Réseau 4. Vous bénéficiez également d’une remise d’Atout de 1 pour tous les tests sociaux contre ceux qui respectent ou craignent votre organisation. Lorsque vous achetez ce trait, Dans les petits papiers remplace le trait Opportuniste. Cela ne vous octroie aucun point de Karma. Le trait Dans les petits papiers doit être acheté après Opportuniste.",
      type: "positive",
      karmaCost: "10",
      book: "seattleEmeraude",
      page: "188",
    },
    {
      key: "Défense charismatique",
      description:
        "Soit vous êtes trop magnifique pour qu’on vous frappe, soit votre langue est si acérée qu’elle désamorce toute violence. Votre Score Défensif est basé sur votre Charisme plutôt que sur votre Constitution.",
      type: "positive",
      karmaCost: "12",
      book: "jeuxPouvoir",
      page: "77",
    },
    {
      key: "Dépôts dermiques",
      description:
        "Des dépôts calcaires se développent sur ou à travers votre peau, ce qui vous rend plus robuste et un peu brut de décoffrage. Littéralement. Vous gagnez 1 niveau d’Armure naturelle (cumulable avec toute autre armure). Vos attaques à mains nues infligent des dommages physiques.",
      type: "positive",
      karmaCost: "7",
      book: "ldb",
      page: "74",
    },
    {
      key: "Déserteur",
      description:
        "Vous n’en pouviez plus de la vie de ganger et souhaitiez en changer. Peut-être avez-vous grimpé trop d’échelons, à tel point qu’il vous empêchait de progresser ? Peut-être ne tolériez-vous plus ses actes ? Quoi qu’il en soit, vous avez payé votre ticket de sortie, avec des os brisés et probablement des nuyens. Mais même si vous ne faites plus partie de la bande, vos anciens frères n’ont pas oublié les années que vous avez passées parmi eux. À leurs yeux, les couleurs du gang et la loyauté envers la famille coulent toujours dans vos veines malgré votre départ. La Loyauté de votre contact intermédiaire au sein du gang est désormais de 1 et son Réseau de 3. De plus, vous pouvez ajouter deux dés à votre réserve une fois par session de jeu quel que soit le test. Lorsque vous achetez Déserteur, retirez le trait Mauvaises fréquentations à votre personnage et remplacez-le par celui-ci. Vous ne pourrez récupérer aucun point de Karma. Ces traits ne peuvent pas être achetés en même temps.",
      type: "positive",
      karmaCost: "10",
      book: "seattleEmeraude",
      page: "149",
    },
    {
      key: "Détermination",
      description:
        "Votre concentration et votre volonté placent votre conduite au-dessus de la moyenne. Avant d’effectuer un test de Pilotage, vous pouvez annoncer un bonus ou une action d’Atout. Vous pouvez en diminuer le coût en dépensant des actions mineures (1 action dépensée réduit le coût de 1), jusqu’à un minimum de 1. L’effet est perdu si cette dépense n’est pas immédiatement suivie d’une action de Pilotage.",
      type: "positive",
      karmaCost: "11",
      book: "tombeauOuvert",
      page: "166",
    },
    {
      key: "Distrait",
      description:
        "Vous avez beau essayer de vous concentrer et de garder les yeux grands ouverts, les gens arrivent toujours à échapper à votre vigilance. Vous ne pouvez ni gagner ni dépenser d’Atout lors des tests de Perception opposés à la Furtivité d’un adversaire.",
      type: "negative",
      karmaCost: "5",
      book: "tombeauOuvert",
      page: "170",
    },
    {
      key: "Dominateur de créatures",
      description:
        "Vous mettez votre volonté et votre agressivité à profit pour dominer d’autres créatures. Vous pouvez dépenser une action majeure pour tenter de dominer une créature non pensante avec Influence (Intimidation) + Charisme contre Intuition + Volonté de la cible. En cas de succès, vous en prenez le contrôle comme si vous aviez le pouvoir de créature Contrôle animal. L’effet dure pendant une minute par succès net. Après cela, la créature reprend son comportement normal et vous bénéficiez d’une remise d’Atout de 1 pour tous vos tests contre elle. Vous ne pouvez tenter de dominer une créature spécifique qu’une seule et unique fois.",
      type: "positive",
      karmaCost: "10",
      book: "compagnon",
      page: "129",
    },
    {
      key: "Dos douloureux",
      description:
        "Pour vous les coups subis sont souvent synonymes de maux de dos, entorses ou toute autre atteinte à votre mobilité. Chaque fois que vous êtes sous l’effet de modificateurs de dommages, vous subissez en plus l’état Entravé (même si vous disposez de moyens pour compenser les modificateurs de dommages, vous subissez tout de même l’état). Cet état disparaît en même temps que les modificateurs.",
      type: "negative",
      karmaCost: "12",
      book: "compagnon",
      page: "132",
    },
    {
      key: "Douleur chronique",
      description:
        "Vous êtes fréquemment sujet à des douleurs violentes qui se déclarent sans prévenir. Au début de chaque séance (après avoir réinitialisé votre Atout), faites un test de Constitution + Volonté (3 + le nombre de séances pendant lequel vous n’avez pas souffert des effets de ce trait). En cas d’échec, la douleur se déclare. Pendant toute la séance, vous subissez un malus de −1 à la réserve de dés sur tous vos tests, à l’exception de l’encaissement des dommages. Les drogues, pouvoirs d’adepte et autres effets réduisant les malus de blessure sont sans effet sur votre douleur chronique.",
      type: "negative",
      karmaCost: "15",
      book: "compagnon",
      page: "132",
    },
    {
      key: "Dresseur de créatures",
      description:
        "Vous êtes un expert en dressage d’animaux et de créatures non pensantes et pouvez leur faire suivre des ordres précis. Avant toute chose, la créature doit être apprivoisée. Cela requiert une semaine de travail et un test réussi d’Influence + Charisme contre son Intuition + Volonté. Une fois apprivoisée, vous pouvez commencer à l’entraîner. Chaque tentative prend une semaine et demande un nouveau test ; une réussite vous permet d’enseigner une nouvelle commande à la créature. Chacune ne peut apprendre qu’un nombre maximum de commandes égal à sa Logique × 2. Pour chaque commande vous devez définir un déclencheur et une action spécifique. Le premier peut consister en un son, un geste ou autre que la créature doit être capable de percevoir. Une fois l’ordre donné, elle exécute l’action prédéfinie. Donner un ordre à une créature requiert une action mineure.",
      type: "positive",
      karmaCost: "10",
      book: "compagnon",
      page: "129",
    },
    {
      key: "Dur à cuire",
      description:
        "Que ce soit grâce à un entraînement mental, à une discipline physique d’automutilation ou simplement parce que vous êtes un véritable dur à cuire, vous encaissez mieux les coups que les autres. Vous bénéficiez d’une remise d’Atout de 1 sur tous vos tests de résistance aux dommages.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "74",
    },
    {
      key: "Ecorché",
      description:
        "Une expérience matricielle, de simsens ou de BTL a grillé vos neurones et vous êtes constamment sur les nerfs quand vous êtes connecté même quand vous n’utilisez que la RA. Vous ne pouvez dépenser de l’Atout quand vous êtes connecté à la Matrice. Cela inclut une connexion par l’intermédiaire d’un commlink, d’un smartlink et toute autre source de transmission de données à partir de l’éther.",
      type: "negative",
      karmaCost: "6",
      book: "ldb",
      page: "78",
    },
    {
      key: "Empathie avec les véhicules (Véhicules aériens)",
      description:
        "Vous êtes plus proche des véhicules que des gens et un simple contact physique vous permet d’en tirer les meilleures performances. Quand vous pilotez un véhicule de la catégorie de votre spécialisation, son Accélération et son intervalle de vitesse augmentent de 2. Pour 4 points de Karma, ce bénéfice n’est effectif que quand vous le pilotez manuellement. Pour 8 points de Karma, vous en profitez quand vous avez tout lien physique avec le véhicule (que vous soyez au volant ou branché).",
      type: "positive",
      karmaCost: "4",
      book: "tombeauOuvert",
      page: "167",
    },
    {
      key: "Empathie avec les véhicules (Véhicules aquatiques)",
      description:
        "Vous êtes plus proche des véhicules que des gens et un simple contact physique vous permet d’en tirer les meilleures performances. Quand vous pilotez un véhicule de la catégorie de votre spécialisation, son Accélération et son intervalle de vitesse augmentent de 2. Pour 4 points de Karma, ce bénéfice n’est effectif que quand vous le pilotez manuellement. Pour 8 points de Karma, vous en profitez quand vous avez tout lien physique avec le véhicule (que vous soyez au volant ou branché).",
      type: "positive",
      karmaCost: "4",
      book: "tombeauOuvert",
      page: "167",
    },
    {
      key: "Empathie avec les véhicules (Véhicules terrestres)",
      description:
        "Vous êtes plus proche des véhicules que des gens et un simple contact physique vous permet d’en tirer les meilleures performances. Quand vous pilotez un véhicule de la catégorie de votre spécialisation, son Accélération et son intervalle de vitesse augmentent de 2. Pour 4 points de Karma, ce bénéfice n’est effectif que quand vous le pilotez manuellement. Pour 8 points de Karma, vous en profitez quand vous avez tout lien physique avec le véhicule (que vous soyez au volant ou branché).",
      type: "positive",
      karmaCost: "4",
      book: "tombeauOuvert",
      page: "167",
    },
    {
      key: "En réseau",
      description:
        "Vous êtes connu pour votre capacité à dénicher toutes les personnes ayant de bons contacts dans votre communauté et pour les présenter à ceux qui peuvent les aider à étendre leur influence. Lorsque vous obtenez un nouveau contact dont l’indice de Réseau est de 4 ou moins, celui-ci augmente immédiatement de 1.",
      type: "negative",
      karmaCost: "4",
      book: "jeuxPouvoir",
      page: "105",
    },
    {
      key: "Endetté",
      description:
        "Parfois, pour avoir de l’argent, vous devez en emprunter. Vous avez contracté une dette pour pouvoir accéder aux Ombres. Quand vous dépensez du Karma pour obtenir de l’argent, chaque point vous rapporte 5 000 nuyens au lieu de 2 000. Chaque point de Karma dépensé augmente également votre dette de 5 000 nuyens auprès de quelqu’un de très dangereux et capable de venir réclamer son argent. Vous devez payer des intérêts égaux à 500 nuyens par mois, en plus d’un éventuel remboursement de capital. Si vous ne payez pas les intérêts, les prêteurs viennent vous voir. Si vous payez votre dette, vous pouvez vous débarrasser de ce trait, sans avoir besoin de dépenser de Karma. Ce trait ne peut être obtenu qu’au cours de la création d’un personnage pas en jeu.",
      type: "negative",
      karmaCost: "0",
      book: "ldb",
      page: "78",
    },
    {
      key: "Endurance à la douleur",
      description:
        "La douleur n’est qu’une illusion de l’esprit. C’est soit ça, soit vous êtes né avec une analgésie congénitale. Quoi qu’il en soit, vous ne subissez pas comme les autres les effets secondaires des blessures et de la douleur.  Quand vous êtes blessé, réduisez de1 point votre malus de blessures (minimum 0).",
      type: "positive",
      karmaCost: "7",
      book: "ldb",
      page: "74",
    },
    {
      key: "Enfant de MCT",
      description:
        "Vous avez été élevé pour faire passer MCT au-dessus de tout. Même si vous ne faites plus partie de ses citoyens ou si vous avez été condamné pour un crime, vous refusez de travailler contre votre ancienne famille. Vous irez même jusqu’à lui confier des informations quand vous surprenez des rumeurs selon lesquelles on chercherait à lui porter atteinte. Ce trait devient particulièrement intéressant maintenant que les tensions grandissent au sein des factions de MCT et que des conflits internes éclatent. Votre tuyau pourrait être ignoré ou tracé afin de remonter jusqu’à celui ou celle qui a parlé. Vous gagnez un point d’Atout lors des tests sociaux impliquant des contacts chez MCT. Vous ne pouvez en aucun cas utiliser d’Atout sur les tests qui pourraient porter préjudice à un citoyen de MCT.",
      type: "positive",
      karmaCost: "4",
      book: "jeuxPouvoir",
      page: "91",
    },
    {
      key: "Ennemi des drones",
      description:
        "Certains disent que les ordinateurs leur en veulent. Vous, c’est les drones. Il y a quelque chose chez vous qui énerve leurs algorithmes. Et personne ne croira que les drones de circulation vous font poireauter plus longtemps aux feux que les autres. En combat, les drones ont tendance à vous cibler quand ils ont le choix. Vos propres drones sont récalcitrants, peu importe combien de fois vous réinitialisez leur autopilote. À moins d’être en plongée à l’intérieur, vous ne pouvez pas dépenser d’Atout pour les piloter ni bénéficier de leur assistance (par exemple dans le cadre d’une équipe de mécanos ou quand vous utilisez un kit d’Ingénierie ; voir p. 163). Pour tous les autres drones, c’est vous la seule cible de leur agressivité, c’est donc un problème difficile à prouver ou à cerner (le maître de jeu décide de la manière dont cela se traduit dans la partie).",
      type: "negative",
      karmaCost: "4",
      book: "tombeauOuvert",
      page: "170",
    },
    {
      key: "Enragé du volant",
      description:
        "Ça fait si longtemps que vous affrontez les routes du Sixième Monde que vous êtes constamment à cran quand vous êtes au volant. Dès que quelqu’un vous cause du tort, vous n’avez qu’une idée en tête : lui rendre la monnaie de sa pièce. Si le véhicule ou drone que vous pilotez subit des dommages, vous ne pouvez obtenir et dépenser de l’Atout que lors de tests opposés contre la cible qui les a occasionnés, jusqu’à ce que celle-ci soit détruite ou que la rencontre soit terminée.",
      type: "negative",
      karmaCost: "7",
      book: "tombeauOuvert",
      page: "170",
    },
    {
      key: "Entraînement à la résistance arcanique (Charisme)",
      description:
        "Les étudiants en magie apprennent les techniques standard de leur tradition pour résister à la fatigue qui s’empare d’eux après l’utilisation de leurs pouvoirs arcaniques. Cependant, certains professeurs proposent des entraînements qui répondent aux besoins individuels de leurs élèves et les aident à réduire les effets de la magie plus efficacement. Les magiciens peuvent choisir Charisme comme nouvel attribut de tradition. Ils utiliseront cet attribut pour tous les tests de résistance au Drain.",
      type: "positive",
      karmaCost: "7",
      book: "voiesOccultes",
      page: "110",
    },
    {
      key: "Entraînement à la résistance arcanique (Intuition)",
      description:
        "Les étudiants en magie apprennent les techniques standard de leur tradition pour résister à la fatigue qui s’empare d’eux après l’utilisation de leurs pouvoirs arcaniques. Cependant, certains professeurs proposent des entraînements qui répondent aux besoins individuels de leurs élèves et les aident à réduire les effets de la magie plus efficacement. Les magiciens peuvent choisir Intuition comme nouvel attribut de tradition. Ils utiliseront cet attribut pour tous les tests de résistance au Drain.",
      type: "positive",
      karmaCost: "7",
      book: "voiesOccultes",
      page: "110",
    },
    {
      key: "Entraînement à la résistance arcanique (Logique)",
      description:
        "Les étudiants en magie apprennent les techniques standard de leur tradition pour résister à la fatigue qui s’empare d’eux après l’utilisation de leurs pouvoirs arcaniques. Cependant, certains professeurs proposent des entraînements qui répondent aux besoins individuels de leurs élèves et les aident à réduire les effets de la magie plus efficacement. Les magiciens peuvent choisir Logique comme nouvel attribut de tradition. Ils utiliseront cet attribut pour tous les tests de résistance au Drain.",
      type: "positive",
      karmaCost: "7",
      book: "voiesOccultes",
      page: "110",
    },
    {
      key: "Entraînement au combat avancé",
      description:
        "L’Urban Combat Simulator de Fort Lewis est l’un des centres d’entraînement les plus avancés jamais créés. C’est une merveille de technologie au sein de laquelle travaillent des entraîneurs et des coachs parmi les meilleurs dans le domaine de la guerre. Les individus qui ont fréquenté ce centre ont reçu l’une des formations au combat les plus complètes au monde, et vous en faites partie. Par conséquent, vous êtes plus efficace et performant en termes de tactiques de combat et de travail d’équipe. Vous obtenez +1 action mineure et +2 dés à votre réserve pour tout test relatif à des manœuvres de combat (Feu nourri, p. 88). Vous devez avoir la compétence de connaissances Tactiques d’escouades.",
      type: "positive",
      karmaCost: "10",
      book: "seattleEmeraude",
      page: "105",
    },
    {
      key: "Entrées chez Evo",
      description:
        "Vos relations chez Evo font de vous un bon candidat potentiel quand elle veut tester un nouvel équipement sur le terrain. Avoir ses entrées chez Evo vous permet d’accepter ces missions de test lucratives (et dangereuses). Ce trait ouvre la possibilité pour Evo de proposer du matériel à tester au personnage. Les détails sont à la discrétion du maître de jeu, mais devraient toujours s’accompagner de défaillances ou de problèmes potentiels.",
      type: "positive",
      karmaCost: "4",
      book: "jeuxPouvoir",
      page: "64",
    },
    {
      key: "Esprit analytique",
      description:
        "Vous êtes passé maître dans l’art de résoudre les problèmes. Vous pouvez analyser les informations pour vous aider à en déduire des solutions tout en vous focalisant sur les éléments utiles sans être déconcentré par les distractions et le bruit. Vous bénéficiez d’une remise d’Atout de 1 sur tout test basé sur la Logique concernant la reconnaissance de motifs, l’analyse d’une preuve, la recherche d’indices ou la résolution d’énigmes. Cet avantage réduit également de moitié le temps nécessaire au personnage pour résoudre un problème.",
      type: "positive",
      karmaCost: "3",
      book: "ldb",
      page: "74",
    },
    {
      key: "Esprit d’entreprise",
      description:
        "Votre détachement tout professionnel rassure la plupart de vos clients, mais vous empêche de nouer des relations plus profondes. Aucun de vos contacts ne peut avoir d’indice de Loyauté supérieur à 3. Quand vous interagissez avec un client professionnel (comme un M. Johnson), bénéficiez d’une remise d’Atout de 1 sur tous vos tests d’Influence (Étiquette).",
      type: "negative",
      karmaCost: "8",
      book: "compagnon",
      page: "132",
    },
    {
      key: "Esprit d’équipe",
      description:
        "Vous faites partie d’une équipe, et vous savez comment veiller sur elle. Vous pouvez dépenser de l’Atout à la place d’un autre personnage, sans surcoût. La dépense peut être partagée ou être à votre seule charge, pour tout bonus ou toute action. La limite d’une seule utilisation d’Atout par test s’applique néanmoins toujours, indépendamment de qui s’acquitte du coût.",
      type: "positive",
      karmaCost: "10",
      book: "compagnon",
      page: "129",
    },
    {
      key: "Esprit de compétition",
      description:
        "Vous êtes rapide, mais encore plus quand vous avez quelqu’un à battre… ou à rattraper. Quand vous êtes engagé dans une course ou une poursuite, gagnez un point d’Atout au début de chaque round. Cet Atout ne peut alimenter que votre réserve de course-poursuite (voir p. 175).",
      type: "positive",
      karmaCost: "8",
      book: "tombeauOuvert",
      page: "167",
    },
    {
      key: "Esprit mentor",
      description:
        "Vous croyez qu’une autre force que vous-même vous aide à canaliser votre magie et que cette autre chose croit en vous. Que ce soit le totem du Loup, la divinité nordique Loki ou le Dieu chrétien, vous utilisez vos croyances pour modeler et focaliser plus facilement vos capacités arcaniques. Vous gagnez les avantages indiqués avec la description de votre esprit mentor (voir p. 165). Si vous ne respectez pas ses dogmes, vous perdez la foi et le lien avec votre mentor et tous les avantages qu’il vous confère.",
      type: "positive",
      karmaCost: "10",
      book: "ldb",
      page: "74",
    },
    {
      key: "Félin",
      description:
        "Vous avez une grâce naturelle qu’on ne retrouve généralement que chez les félidés ; tous vos mouvements sont souples et vous avez tendance à toujours retomber sur vos pieds, littéralement si ce n’est métaphoriquement. Vous bénéficiez d’une remise d’Atout de 1 sur tous vos tests d’équilibre, de chute et pour retomber sans vous blesser.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "74",
    },
    {
      key: "Fermier Black Fence",
      description:
        "Votre réputation auprès de Gets et du personnel de BFF vous donne accès à un club particulier. En tant que Fermier, vous pouvez vous faire livrer presque n’importe où à Seattle. Il existe quelques exceptions à la règle et les prix augmentent parfois quand les produits sont commandés dans les barrens, mais pour un petit supplément (le tarif augmente de dix pour cent), vous pouvez même vous faire livrer votre équipement dans ces zones. Toutes les commandes se récupèrent en extérieur et sont déposées par des drones. La livraison d’un objet dans une zone sensible inclut un supplément de dix pour cent et, si le drone est détruit, le client est responsable de sa perte et doit verser la somme nécessaire pour le remplacer. Généralement, il ne coûte pas bien cher, puisque BFF n’envoie que des modèles simples et basiques dans les lieux dangereux. Un objet commun ou nécessitant un permis peut être livré en moins de 10 min n’importe où à Snohomish, en 10 à 20 minutes à Everett, en 15 à 30 min à Redmond, Bellevue et Downtown, en 30 à 50 min à Outremer et Renton, en 40 à 90 min à Auburn et Tacoma ou en 90 à 120 min à Puyallup et Fort Lewis. La disponibilité des objets illégaux est laissée à la discrétion du maître de jeu. Leur temps de livraison doit être adapté en conséquence.",
      type: "positive",
      karmaCost: "5",
      book: "seattleEmeraude",
      page: "174",
    },
    {
      key: "Finesse",
      description:
        "Vous privilégiez toujours la subtilité pour atteindre vos objectifs et les stratégies à base de force brute vous mettent mal à l’aise. Vous ne pouvez pas gagner ou dépenser d’Atout lors d’actions susceptibles de générer un modificateur de Pression. Si vous ne générez personnellement aucun modificateur de Pression positif, votre équipe bénéficie d’un modificateur de Pression de −1.",
      type: "negative",
      karmaCost: "7",
      book: "compagnon",
      page: "132",
    },
    {
      key: "Flash-back",
      description:
        "Lorsque vous sélectionnez ce trait, choisissez un événement qui sera au cœur des flash-back (un événement précis en jeu peut mener à l’obtention de ce trait). Déterminez ensuite un ou plusieurs déclencheurs des flash-back. Ils doivent faire appel à tous les sens et être précis, afin que les flash-back ne soient pas invoqués trop souvent. Lorsque le personnage se retrouve face à un déclencheur, il doit réaliser un test de Sang-froid (4) ou plonger dans un flash-back. Un flash-back dure trois minutes. Lorsqu’il commence, le personnage fait un test de Sangfroid (3) ; s’il réussit, il reconnaît qu’il est dans un flashback et est capable de le supporter. Il reçoit un malus de –4 à sa réserve de dé pour tout test avec un attribut physique pendant la durée du flash-back. S’il rate le second test, il ne peut rien faire d’autre que réagir au flash-back.",
      type: "negative",
      karmaCost: "6",
      book: "feuNourri",
      page: "124",
    },
    {
      key: "Focalisé",
      description:
        "Vous êtes entièrement dévoué à votre objectif et rien ne reste sur votre chemin bien longtemps. Avec l’accord et les indications de votre maître de jeu, choisissez un but précis pour votre personnage. Lors de tests directement liés à l’accomplissement de cet objectif, vous avez toujours la possibilité de remplacer un de vos dés par deux Dés libres. Si vous réussissez à atteindre votre but, vous pouvez vous en fixer un nouveau. Si vous renoncez à l’un de vos objectifs, vous ne pouvez en choisir un autre avant un mois.",
      type: "positive",
      karmaCost: "6",
      book: "compagnon",
      page: "129",
    },
    {
      key: "Focalisé sur la cible",
      description:
        "Vous êtes hyperconcentré sur votre adversaire en combat, ce qui limite votre perception globale de la situation et vous fait parfois perdre de vue les autres intervenants. Si vous attaquez, jusqu’à la fin de ce round vous ne pouvez ni gagner ni dépenser d’Atout sur vos tests de défense, sauf contre votre cible.",
      type: "negative",
      karmaCost: "8",
      book: "tombeauOuvert",
      page: "171",
    },
    {
      key: "Fou du volant",
      description:
        "Si c’est un engin prévu pour se déplacer, mais qu’il est dans un sale état, vous savez comment le rafistoler en un clin d’œil. Vous bénéficiez d’une remise d’Atout de 1 sur tous vos tests de réparation pour n’importe quel véhicule et vous pouvez dépenser de l’Atout pendant vos périodes de repos pour effectuer des tests étendus de réparation.",
      type: "positive",
      karmaCost: "10",
      book: "ldb",
      page: "74",
    },
    {
      key: "Gâchette facile",
      description:
        "Ares est bien plus que Knight Errant et la fabrication d’armes, mais ces deux branches ont défini les bases de sa culture corporatiste. Cela signifie que certains employés d’Ares, qu’ils aient arrêté ou non de travailler pour la corporation, se reposent bien trop souvent sur les armes à feu pour résoudre les conflits. Ils ne tirent pas forcément, mais ont la mauvaise habitude de sortir une arme pour appuyer leurs discours. à chaque fois qu’une discussion s’enflamme (à la discrétion du maître de jeu), le personnage avec ce trait doit faire un test de Sang-froid (2). S’il échoue, il sort son arme préférée et vise son adversaire, sans tenir compte des lois locales ou des conséquences de ses actes. S’il n’a aucune arme sur lui, il se prépare à combattre en serrant les poings ou en faisant un geste similaire.",
      type: "negative",
      karmaCost: "3",
      book: "jeuxPouvoir",
      page: "37",
    },
    {
      key: "Gourmet",
      description:
        "La nourriture vulgaire est une insulte à votre palais raffiné. Chaque fois que vous mangez de la nourriture indigne d’un style de vie élevé ou plus, vous subissez l’état Nauséeux pendant une heure. Les fast foods, les plats instantanés, les produits Stuffer Shack et en général tout ce qui coûte moins de 20¥ par portion provoquera chez vous un profond inconfort.",
      type: "negative",
      karmaCost: "5",
      book: "compagnon",
      page: "132",
    },
    {
      key: "Gremlins",
      description:
        "Les commlinks plantent, les armes s’enraient, les systèmes électriques disjonctent. Tout ce qui peut se détraquer de technologique a dysfonctionné au moins une fois entre vos mains. A chaque fois que vous utilisez un appareil, lancez 2d6. Si vous obtenez un 1 sur l’un des dés, l’appareil ne fonctionne pas correctement et on peut considérer qu’il s’agit d’une complication. L’appareil peut être rapidement réparé avec une action mineure et utilisé de nouveau. Si vous obtenez deux 1, l’appareil a subi une panne catastrophique et ce jet est considéré comme un échec critique. L’appareil est en panne pour de bon et il se peut que vous subissiez un choc électrique ou un biofeedback.",
      type: "negative",
      karmaCost: "6",
      book: "ldb",
      page: "79",
    },
    {
      key: "Gremlins des Bermudes",
      description:
        "Un genre de gremlins un peu à part. Ils adorent interférer avec GridGuide et imiter la voix de votre Autopilote. Et bonne chance pour retrouver votre plan papier dans la boîte à gants. Ça fait deux arrêts qu’ils l’ont balancé. Quand vous pilotez un véhicule, lancez 2D6. Si vous obtenez un 1, les gremlins vous ont joué un tour sur le trajet et vous avez raté une sortie. Du coup, en essayant de retrouver votre chemin, vous vous êtes mis en retard. Lancez 1D6 et consultez la table suivante pour déterminer à quel point. • 1–2: 10–20 minutes • 3–4: 30 minutes à 1 heure • 5: 1–2 heures • 6: Plus de 2 heures, mais vous avez découvert un petit resto sympa. Si vous obtenez deux 1 sur le premier jet, vous vous retrouvez en plein territoire ennemi ou interdit, et vous faites face à une hostilité marquée pour en sortir. Dans un souci de simplicité, le maître de jeu peut également se contenter de doubler les durées de la table précédente.",
      type: "negative",
      karmaCost: "4",
      book: "tombeauOuvert",
      page: "171",
    },
    {
      key: "Guérison rapide",
      description:
        "Vous récupérez de vos blessures plus rapidement que les autres, ce qui est extrêmement utile pour une profession dans laquelle vous vous exposez à des tirs ennemis. Réduisez de moitié l’intervalle de tout test de récupération naturelle (p. 125), ce qui signifie que vous pouvez soigner des dommages étourdissants au bout d’une demi-heure et des dommages physiques au bout d’une demi-journée.",
      type: "positive",
      karmaCost: "8",
      book: "ldb",
      page: "74",
    },
    {
      key: "Handicap (Agilité)",
      description:
        "Pour choisir ce trait votre score d’Essence doit être de 1 ou moins. Effet en jeu : chaque fois que votre réserve d’Atout atteint zéro, vous commencez à perdre le contact avec votre situation et votre environnement. Soit vous devenez détaché et apathique, soit vous êtes empli d’une émotion intense qui semble sortir de nulle part. Jusqu’à ce que vous regagniez de l’Atout, votre nombre d’actions mineures par round diminue de 1 par niveau de ce trait. Si le niveau de ce dernier est supérieur au nombre d’actions mineures actuellement à votre disposition, votre action majeure se transforme alors en 4 actions mineures, desquelles vous soustrayez les actions mineures qui restent à enlever. La valeur maximale que le personnage peut atteindre dans l’attribut choisi est réduite de 2 jusqu’à un minimum de 2.",
      type: "negative",
      karmaCost: "8",
      book: "ldb",
      page: "79",
    },
    {
      key: "Handicap (Charisme)",
      description:
        "Certains individus ont des limitations naturelles. Un genou défaillant, une nature génétique médiocre ou une maladie issue de l’enfance ne vous permet pas d’atteindre le niveau maximum dans un attribut. La valeur maximale que le personnage peut atteindre dans l’attribut choisi est réduite de 2 jusqu’à un minimum de 2.",
      type: "negative",
      karmaCost: "8",
      book: "ldb",
      page: "79",
    },
    {
      key: "Handicap (Constitution)",
      description:
        "Certains individus ont des limitations naturelles. Un genou défaillant, une nature génétique médiocre ou une maladie issue de l’enfance ne vous permet pas d’atteindre le niveau maximum dans un attribut. La valeur maximale que le personnage peut atteindre dans l’attribut choisi est réduite de 2 jusqu’à un minimum de 2.",
      type: "negative",
      karmaCost: "8",
      book: "ldb",
      page: "79",
    },
    {
      key: "Handicap (Force)",
      description:
        "Certains individus ont des limitations naturelles. Un genou défaillant, une nature génétique médiocre ou une maladie issue de l’enfance ne vous permet pas d’atteindre le niveau maximum dans un attribut. La valeur maximale que le personnage peut atteindre dans l’attribut choisi est réduite de 2 jusqu’à un minimum de 2.",
      type: "negative",
      karmaCost: "8",
      book: "ldb",
      page: "79",
    },
    {
      key: "Handicap (Intuition)",
      description:
        "Certains individus ont des limitations naturelles. Un genou défaillant, une nature génétique médiocre ou une maladie issue de l’enfance ne vous permet pas d’atteindre le niveau maximum dans un attribut. La valeur maximale que le personnage peut atteindre dans l’attribut choisi est réduite de 2 jusqu’à un minimum de 2.",
      type: "negative",
      karmaCost: "8",
      book: "ldb",
      page: "79",
    },
    {
      key: "Handicap (Logique)",
      description:
        "Certains individus ont des limitations naturelles. Un genou défaillant, une nature génétique médiocre ou une maladie issue de l’enfance ne vous permet pas d’atteindre le niveau maximum dans un attribut. La valeur maximale que le personnage peut atteindre dans l’attribut choisi est réduite de 2 jusqu’à un minimum de 2.",
      type: "negative",
      karmaCost: "8",
      book: "ldb",
      page: "79",
    },
    {
      key: "Handicap (Réaction)",
      description:
        "Certains individus ont des limitations naturelles. Un genou défaillant, une nature génétique médiocre ou une maladie issue de l’enfance ne vous permet pas d’atteindre le niveau maximum dans un attribut. La valeur maximale que le personnage peut atteindre dans l’attribut choisi est réduite de 2 jusqu’à un minimum de 2.",
      type: "negative",
      karmaCost: "8",
      book: "ldb",
      page: "79",
    },
    {
      key: "Handicap (Volonté)",
      description:
        "Certains individus ont des limitations naturelles. Un genou défaillant, une nature génétique médiocre ou une maladie issue de l’enfance ne vous permet pas d’atteindre le niveau maximum dans un attribut. La valeur maximale que le personnage peut atteindre dans l’attribut choisi est réduite de 2 jusqu’à un minimum de 2.",
      type: "negative",
      karmaCost: "8",
      book: "ldb",
      page: "79",
    },
    {
      key: "Hostilité des esprits (Aînés)",
      description:
        "Vous avez pu susciter leur courroux en raison de la manière dont vous les traitez, parce que vous avez tué un puissant et respecté membre de leur espèce ou parce que vous êtes né sous une mauvaise étoile et vous avez été identifié comme un ennemi de ces entités. La raison n’a aucune importance, ce qui l’est, c’est qu’un certain type d’esprits/sprites vous déteste. Les esprits de cette catégorie bénéficient d’une remise d’Atout de 1 pour résister à vos tentatives de Conjuration ou de Technomancie. Ce trait peut être choisi plusieurs fois en optant pour un autre type d’esprits/sprites à chaque fois. En combat, les esprits du type choisi vous attaquent en premier et avec acharnement, souvent jusqu’au point de s’en prendre à votre cadavre ou de bricker votre deck s’ils n’ont rien d’autre à faire.",
      type: "negative",
      karmaCost: "12",
      book: "ldb",
      page: "79",
    },
    {
      key: "Hostilité des esprits (Air)",
      description:
        "Vous avez pu susciter leur courroux en raison de la manière dont vous les traitez, parce que vous avez tué un puissant et respecté membre de leur espèce ou parce que vous êtes né sous une mauvaise étoile et vous avez été identifié comme un ennemi de ces entités. La raison n’a aucune importance, ce qui l’est, c’est qu’un certain type d’esprits/sprites vous déteste. Les esprits de l'Air bénéficient d’une remise d’Atout de 1 pour résister à vos tentatives de Conjuration ou de Technomancie. Ce trait peut être choisi plusieurs fois en optant pour un autre type d’esprits/sprites à chaque fois. En combat, les esprits de l'Air vous attaquent en premier et avec acharnement, souvent jusqu’au point de s’en prendre à votre cadavre ou de bricker votre deck s’ils n’ont rien d’autre à faire.",
      type: "negative",
      karmaCost: "12",
      book: "ldb",
      page: "79",
    },
    {
      key: "Hostilité des esprits (Bêtes)",
      description:
        "Vous avez pu susciter leur courroux en raison de la manière dont vous les traitez, parce que vous avez tué un puissant et respecté membre de leur espèce ou parce que vous êtes né sous une mauvaise étoile et vous avez été identifié comme un ennemi de ces entités. La raison n’a aucune importance, ce qui l’est, c’est qu’un certain type d’esprits/sprites vous déteste. Les esprits des Bêtes bénéficient d’une remise d’Atout de 1 pour résister à vos tentatives de Conjuration ou de Technomancie. Ce trait peut être choisi plusieurs fois en optant pour un autre type d’esprits/sprites à chaque fois. En combat, les esprits des Bêtes vous attaquent en premier et avec acharnement, souvent jusqu’au point de s’en prendre à votre cadavre ou de bricker votre deck s’ils n’ont rien d’autre à faire.",
      type: "negative",
      karmaCost: "12",
      book: "ldb",
      page: "79",
    },
    {
      key: "Hostilité des esprits (Eau)",
      description:
        "Vous avez pu susciter leur courroux en raison de la manière dont vous les traitez, parce que vous avez tué un puissant et respecté membre de leur espèce ou parce que vous êtes né sous une mauvaise étoile et vous avez été identifié comme un ennemi de ces entités. La raison n’a aucune importance, ce qui l’est, c’est qu’un certain type d’esprits/sprites vous déteste. Les esprits de l'Eau bénéficient d’une remise d’Atout de 1 pour résister à vos tentatives de Conjuration ou de Technomancie. Ce trait peut être choisi plusieurs fois en optant pour un autre type d’esprits/sprites à chaque fois. En combat, les esprits de l'Eau vous attaquent en premier et avec acharnement, souvent jusqu’au point de s’en prendre à votre cadavre ou de bricker votre deck s’ils n’ont rien d’autre à faire.",
      type: "negative",
      karmaCost: "12",
      book: "ldb",
      page: "79",
    },
    {
      key: "Hostilité des esprits (Feu)",
      description:
        "Vous avez pu susciter leur courroux en raison de la manière dont vous les traitez, parce que vous avez tué un puissant et respecté membre de leur espèce ou parce que vous êtes né sous une mauvaise étoile et vous avez été identifié comme un ennemi de ces entités. La raison n’a aucune importance, ce qui l’est, c’est qu’un certain type d’esprits/sprites vous déteste. Les esprits du Feu  bénéficient d’une remise d’Atout de 1 pour résister à vos tentatives de Conjuration ou de Technomancie. Ce trait peut être choisi plusieurs fois en optant pour un autre type d’esprits/sprites à chaque fois. En combat, les esprits du Feu vous attaquent en premier et avec acharnement, souvent jusqu’au point de s’en prendre à votre cadavre ou de bricker votre deck s’ils n’ont rien d’autre à faire.",
      type: "negative",
      karmaCost: "12",
      book: "ldb",
      page: "79",
    },
    {
      key: "Hostilité des esprits (Terre)",
      description:
        "Vous avez pu susciter leur courroux en raison de la manière dont vous les traitez, parce que vous avez tué un puissant et respecté membre de leur espèce ou parce que vous êtes né sous une mauvaise étoile et vous avez été identifié comme un ennemi de ces entités. La raison n’a aucune importance, ce qui l’est, c’est qu’un certain type d’esprits/sprites vous déteste. Les esprits de Terre bénéficient d’une remise d’Atout de 1 pour résister à vos tentatives de Conjuration ou de Technomancie. Ce trait peut être choisi plusieurs fois en optant pour un autre type d’esprits/sprites à chaque fois. En combat, les esprits de Terre vous attaquent en premier et avec acharnement, souvent jusqu’au point de s’en prendre à votre cadavre ou de bricker votre deck s’ils n’ont rien d’autre à faire.",
      type: "negative",
      karmaCost: "12",
      book: "ldb",
      page: "79",
    },
    {
      key: "Hostilité des sprites (Coursier)",
      description:
        "Vous avez pu susciter leur courroux en raison de la manière dont vous les traitez, parce que vous avez tué un puissant et respecté membre de leur espèce ou parce que vous êtes né sous une mauvaise étoile et vous avez été identifié comme un ennemi de ces entités. La raison n’a aucune importance, ce qui l’est, c’est qu’un certain type d’esprits/sprites vous déteste. Les sprites de cette catégorie bénéficient d’une remise d’Atout de 1 pour résister à vos tentatives de Conjuration ou de Technomancie. Ce trait peut être choisi plusieurs fois en optant pour un autre type d’esprits/sprites à chaque fois. En combat, les sprites du type choisi vous attaquent en premier et avec acharnement, souvent jusqu’au point de s’en prendre à votre cadavre ou de bricker votre deck s’ils n’ont rien d’autre à faire.",
      type: "negative",
      karmaCost: "12",
      book: "ldb",
      page: "79",
    },
    {
      key: "Hostilité des sprites (Cracker)",
      description:
        "Vous avez pu susciter leur courroux en raison de la manière dont vous les traitez, parce que vous avez tué un puissant et respecté membre de leur espèce ou parce que vous êtes né sous une mauvaise étoile et vous avez été identifié comme un ennemi de ces entités. La raison n’a aucune importance, ce qui l’est, c’est qu’un certain type d’esprits/sprites vous déteste. Les sprites de cette catégorie bénéficient d’une remise d’Atout de 1 pour résister à vos tentatives de Conjuration ou de Technomancie. Ce trait peut être choisi plusieurs fois en optant pour un autre type d’esprits/sprites à chaque fois. En combat, les sprites du type choisi vous attaquent en premier et avec acharnement, souvent jusqu’au point de s’en prendre à votre cadavre ou de bricker votre deck s’ils n’ont rien d’autre à faire.",
      type: "negative",
      karmaCost: "12",
      book: "ldb",
      page: "79",
    },
    {
      key: "Hostilité des sprites (Données)",
      description:
        "Vous avez pu susciter leur courroux en raison de la manière dont vous les traitez, parce que vous avez tué un puissant et respecté membre de leur espèce ou parce que vous êtes né sous une mauvaise étoile et vous avez été identifié comme un ennemi de ces entités. La raison n’a aucune importance, ce qui l’est, c’est qu’un certain type d’esprits/sprites vous déteste. Les sprites de cette catégorie bénéficient d’une remise d’Atout de 1 pour résister à vos tentatives de Conjuration ou de Technomancie. Ce trait peut être choisi plusieurs fois en optant pour un autre type d’esprits/sprites à chaque fois. En combat, les sprites du type choisi vous attaquent en premier et avec acharnement, souvent jusqu’au point de s’en prendre à votre cadavre ou de bricker votre deck s’ils n’ont rien d’autre à faire.",
      type: "negative",
      karmaCost: "12",
      book: "ldb",
      page: "79",
    },
    {
      key: "Hostilité des sprites (Erreur)",
      description:
        "Vous avez pu susciter leur courroux en raison de la manière dont vous les traitez, parce que vous avez tué un puissant et respecté membre de leur espèce ou parce que vous êtes né sous une mauvaise étoile et vous avez été identifié comme un ennemi de ces entités. La raison n’a aucune importance, ce qui l’est, c’est qu’un certain type d’esprits/sprites vous déteste. Les sprites de cette catégorie bénéficient d’une remise d’Atout de 1 pour résister à vos tentatives de Conjuration ou de Technomancie. Ce trait peut être choisi plusieurs fois en optant pour un autre type d’esprits/sprites à chaque fois. En combat, les sprites du type choisi vous attaquent en premier et avec acharnement, souvent jusqu’au point de s’en prendre à votre cadavre ou de bricker votre deck s’ils n’ont rien d’autre à faire.",
      type: "negative",
      karmaCost: "12",
      book: "ldb",
      page: "79",
    },
    {
      key: "Hostilité des sprites (Machine)",
      description:
        "Vous avez pu susciter leur courroux en raison de la manière dont vous les traitez, parce que vous avez tué un puissant et respecté membre de leur espèce ou parce que vous êtes né sous une mauvaise étoile et vous avez été identifié comme un ennemi de ces entités. La raison n’a aucune importance, ce qui l’est, c’est qu’un certain type d’esprits/sprites vous déteste. Les sprites de cette catégorie bénéficient d’une remise d’Atout de 1 pour résister à vos tentatives de Conjuration ou de Technomancie. Ce trait peut être choisi plusieurs fois en optant pour un autre type d’esprits/sprites à chaque fois. En combat, les sprites du type choisi vous attaquent en premier et avec acharnement, souvent jusqu’au point de s’en prendre à votre cadavre ou de bricker votre deck s’ils n’ont rien d’autre à faire.",
      type: "negative",
      karmaCost: "12",
      book: "ldb",
      page: "79",
    },
    {
      key: "Humain 2.0",
      description:
        "Grâce aux manipulations génétiques et à la reproduction sélective, Shiawase a réussi à améliorer quelque peu le génome humain. Il ne tient qu’à vous de découvrir votre plein potentiel. Vos limites raciales en Charisme et en Volonté augmentent de 1. Vous ne pouvez pas utiliser la magie ni la Résonance.",
      type: "positive",
      karmaCost: "25",
      book: "jeuxPouvoir",
      page: "138",
    },
    {
      key: "Illetré",
      description:
        "Peut-être qu’apprendre dans les livres n’était pas votre truc ou peut-être n’avez-vous jamais été exposé à une grande quantité d’informations pour étendre vos connaissances. Quoi qu’il en soit, vous avez certaines lacunes dans votre éducation de base. Vous ne pouvez pas dépenser de l’Atout sur vos tests utilisant la Logique.",
      type: "negative",
      karmaCost: "6",
      book: "ldb",
      page: "79",
    },
    {
      key: "Immunodéficience",
      description:
        "Renifler constamment est aussi gênant pour vous que pour les membres de votre équipe, mais un éternuement au mauvais moment ou le besoin soudain de trouver des toilettes peut signifier la fin d’un run. Vous êtes presque tout le temps malade. Cela peut être un rhume mineur ou il peut s’agir d’une mauvaise grippe ou pire, mais vous n’avez jamais contracté d’infection que vous n’avez pas traînée pendant un certain temps. Vous ne pouvez pas dépenser de l’Atout pour résister à une infection. Le seuil pour combattre les infections auxquelles vous êtes exposé est augmenté de 1. Pendant que vous subissez les symptômes d’une maladie, vous avez un malus de -1 dé.",
      type: "negative",
      karmaCost: "8",
      book: "ldb",
      page: "79",
    },
    {
      key: "Import/Export (niveau 1)",
      description:
        "Quand on vit à la frontière d’autant de pays et aussi près des docks, on serait bête de ne pas ouvrir grand les oreilles pour se tenir informé des dernières nouvelles. Avec la quantité de marchandises qui transitent, on peut partir du principe qu’il y aura toujours quelqu’un pour vendre moins cher ou acheter plus cher, et vous avez tous les tuyaux nécessaires pour en tirer parti. Pour 10 points de Karma, vous obtenez un contact spécial Négociant de Tacoma (intermédiaire) avec Loyauté 1 et Réseau 3; pour 14 points de Karma, le Réseau s’élève à 4. De plus, vous bénéficiez d’une remise d’Atout de 1 pour vos tests de Négociation destinés à acheter ou vendre des biens par le biais de ce contact.",
      type: "positive",
      karmaCost: "10",
      book: "seattleEmeraude",
      page: "187",
    },
    {
      key: "Import/Export (niveau 2)",
      description:
        "Quand on vit à la frontière d’autant de pays et aussi près des docks, on serait bête de ne pas ouvrir grand les oreilles pour se tenir informé des dernières nouvelles. Avec la quantité de marchandises qui transitent, on peut partir du principe qu’il y aura toujours quelqu’un pour vendre moins cher ou acheter plus cher, et vous avez tous les tuyaux nécessaires pour en tirer parti. Pour 10 points de Karma, vous obtenez un contact spécial Négociant de Tacoma (intermédiaire) avec Loyauté 1 et Réseau 3; pour 14 points de Karma, le Réseau s’élève à 4. De plus, vous bénéficiez d’une remise d’Atout de 1 pour vos tests de Négociation destinés à acheter ou vendre des biens par le biais de ce contact.",
      type: "positive",
      karmaCost: "14",
      book: "seattleEmeraude",
      page: "187",
    },
    {
      key: "Incompétence (Armes à feu)",
      description:
        "Vous avez beau vous entraîner et tenter de comprendre, il y a certaines compétences qui vous échappent. Quand vous sélectionnez ce trait, choisissez une compétence. Vous ne pouvez pas gagner de rangs dans cette compétence. Vous ne pouvez pas être incompétent dans des compétences que vous n’avez pas eu l’occasion d’essayer ; aussi, vous ne pouvez pas choisir ce trait pour des compétences de Magie si vous n’avez pas d’attribut Magie et vous ne pouvez pas le choisir pour la compétence Technomancie si vous n’avez pas d’indice de Résonance. Cette compétence ne peut être choisie qu’une seule fois.",
      type: "negative",
      karmaCost: "10",
      book: "ldb",
      page: "79",
    },
    {
      key: "Incompétence (Armes exotiques)",
      description:
        "Vous avez beau vous entraîner et tenter de comprendre, il y a certaines compétences qui vous échappent. Quand vous sélectionnez ce trait, choisissez une compétence. Vous ne pouvez pas gagner de rangs dans cette compétence. Vous ne pouvez pas être incompétent dans des compétences que vous n’avez pas eu l’occasion d’essayer ; aussi, vous ne pouvez pas choisir ce trait pour des compétences de Magie si vous n’avez pas d’attribut Magie et vous ne pouvez pas le choisir pour la compétence Technomancie si vous n’avez pas d’indice de Résonance. Cette compétence ne peut être choisie qu’une seule fois.",
      type: "negative",
      karmaCost: "10",
      book: "ldb",
      page: "79",
    },
    {
      key: "Incompétence (Astral)",
      description:
        "Vous avez beau vous entraîner et tenter de comprendre, il y a certaines compétences qui vous échappent. Quand vous sélectionnez ce trait, choisissez une compétence. Vous ne pouvez pas gagner de rangs dans cette compétence. Vous ne pouvez pas être incompétent dans des compétences que vous n’avez pas eu l’occasion d’essayer ; aussi, vous ne pouvez pas choisir ce trait pour des compétences de Magie si vous n’avez pas d’attribut Magie et vous ne pouvez pas le choisir pour la compétence Technomancie si vous n’avez pas d’indice de Résonance. Cette compétence ne peut être choisie qu’une seule fois.",
      type: "negative",
      karmaCost: "10",
      book: "ldb",
      page: "79",
    },
    {
      key: "Incompétence (Athlétisme)",
      description:
        "Vous avez beau vous entraîner et tenter de comprendre, il y a certaines compétences qui vous échappent. Quand vous sélectionnez ce trait, choisissez une compétence. Vous ne pouvez pas gagner de rangs dans cette compétence. Vous ne pouvez pas être incompétent dans des compétences que vous n’avez pas eu l’occasion d’essayer ; aussi, vous ne pouvez pas choisir ce trait pour des compétences de Magie si vous n’avez pas d’attribut Magie et vous ne pouvez pas le choisir pour la compétence Technomancie si vous n’avez pas d’indice de Résonance. Cette compétence ne peut être choisie qu’une seule fois.",
      type: "negative",
      karmaCost: "10",
      book: "ldb",
      page: "79",
    },
    {
      key: "Incompétence (Biotech)",
      description:
        "Vous avez beau vous entraîner et tenter de comprendre, il y a certaines compétences qui vous échappent. Quand vous sélectionnez ce trait, choisissez une compétence. Vous ne pouvez pas gagner de rangs dans cette compétence. Vous ne pouvez pas être incompétent dans des compétences que vous n’avez pas eu l’occasion d’essayer ; aussi, vous ne pouvez pas choisir ce trait pour des compétences de Magie si vous n’avez pas d’attribut Magie et vous ne pouvez pas le choisir pour la compétence Technomancie si vous n’avez pas d’indice de Résonance. Cette compétence ne peut être choisie qu’une seule fois.",
      type: "negative",
      karmaCost: "10",
      book: "ldb",
      page: "79",
    },
    {
      key: "Incompétence (Combat rapproché)",
      description:
        "Vous avez beau vous entraîner et tenter de comprendre, il y a certaines compétences qui vous échappent. Quand vous sélectionnez ce trait, choisissez une compétence. Vous ne pouvez pas gagner de rangs dans cette compétence. Vous ne pouvez pas être incompétent dans des compétences que vous n’avez pas eu l’occasion d’essayer ; aussi, vous ne pouvez pas choisir ce trait pour des compétences de Magie si vous n’avez pas d’attribut Magie et vous ne pouvez pas le choisir pour la compétence Technomancie si vous n’avez pas d’indice de Résonance. Cette compétence ne peut être choisie qu’une seule fois.",
      type: "negative",
      karmaCost: "10",
      book: "ldb",
      page: "79",
    },
    {
      key: "Incompétence (Conjuration)",
      description:
        "Vous avez beau vous entraîner et tenter de comprendre, il y a certaines compétences qui vous échappent. Quand vous sélectionnez ce trait, choisissez une compétence. Vous ne pouvez pas gagner de rangs dans cette compétence. Vous ne pouvez pas être incompétent dans des compétences que vous n’avez pas eu l’occasion d’essayer ; aussi, vous ne pouvez pas choisir ce trait pour des compétences de Magie si vous n’avez pas d’attribut Magie et vous ne pouvez pas le choisir pour la compétence Technomancie si vous n’avez pas d’indice de Résonance. Cette compétence ne peut être choisie qu’une seule fois.",
      type: "negative",
      karmaCost: "10",
      book: "ldb",
      page: "79",
    },
    {
      key: "Incompétence (Électronique)",
      description:
        "Vous avez beau vous entraîner et tenter de comprendre, il y a certaines compétences qui vous échappent. Quand vous sélectionnez ce trait, choisissez une compétence. Vous ne pouvez pas gagner de rangs dans cette compétence. Vous ne pouvez pas être incompétent dans des compétences que vous n’avez pas eu l’occasion d’essayer ; aussi, vous ne pouvez pas choisir ce trait pour des compétences de Magie si vous n’avez pas d’attribut Magie et vous ne pouvez pas le choisir pour la compétence Technomancie si vous n’avez pas d’indice de Résonance. Cette compétence ne peut être choisie qu’une seule fois.",
      type: "negative",
      karmaCost: "10",
      book: "ldb",
      page: "79",
    },
    {
      key: "Incompétence (Enchantement)",
      description:
        "Vous avez beau vous entraîner et tenter de comprendre, il y a certaines compétences qui vous échappent. Quand vous sélectionnez ce trait, choisissez une compétence. Vous ne pouvez pas gagner de rangs dans cette compétence. Vous ne pouvez pas être incompétent dans des compétences que vous n’avez pas eu l’occasion d’essayer ; aussi, vous ne pouvez pas choisir ce trait pour des compétences de Magie si vous n’avez pas d’attribut Magie et vous ne pouvez pas le choisir pour la compétence Technomancie si vous n’avez pas d’indice de Résonance. Cette compétence ne peut être choisie qu’une seule fois.",
      type: "negative",
      karmaCost: "10",
      book: "ldb",
      page: "79",
    },
    {
      key: "Incompétence (Escroquerie)",
      description:
        "Vous avez beau vous entraîner et tenter de comprendre, il y a certaines compétences qui vous échappent. Quand vous sélectionnez ce trait, choisissez une compétence. Vous ne pouvez pas gagner de rangs dans cette compétence. Vous ne pouvez pas être incompétent dans des compétences que vous n’avez pas eu l’occasion d’essayer ; aussi, vous ne pouvez pas choisir ce trait pour des compétences de Magie si vous n’avez pas d’attribut Magie et vous ne pouvez pas le choisir pour la compétence Technomancie si vous n’avez pas d’indice de Résonance. Cette compétence ne peut être choisie qu’une seule fois.",
      type: "negative",
      karmaCost: "10",
      book: "ldb",
      page: "79",
    },
    {
      key: "Incompétence (Furtivité)",
      description:
        "Vous avez beau vous entraîner et tenter de comprendre, il y a certaines compétences qui vous échappent. Quand vous sélectionnez ce trait, choisissez une compétence. Vous ne pouvez pas gagner de rangs dans cette compétence. Vous ne pouvez pas être incompétent dans des compétences que vous n’avez pas eu l’occasion d’essayer ; aussi, vous ne pouvez pas choisir ce trait pour des compétences de Magie si vous n’avez pas d’attribut Magie et vous ne pouvez pas le choisir pour la compétence Technomancie si vous n’avez pas d’indice de Résonance. Cette compétence ne peut être choisie qu’une seule fois.",
      type: "negative",
      karmaCost: "10",
      book: "ldb",
      page: "79",
    },
    {
      key: "Incompétence (Influence)",
      description:
        "Vous avez beau vous entraîner et tenter de comprendre, il y a certaines compétences qui vous échappent. Quand vous sélectionnez ce trait, choisissez une compétence. Vous ne pouvez pas gagner de rangs dans cette compétence. Vous ne pouvez pas être incompétent dans des compétences que vous n’avez pas eu l’occasion d’essayer ; aussi, vous ne pouvez pas choisir ce trait pour des compétences de Magie si vous n’avez pas d’attribut Magie et vous ne pouvez pas le choisir pour la compétence Technomancie si vous n’avez pas d’indice de Résonance. Cette compétence ne peut être choisie qu’une seule fois.",
      type: "negative",
      karmaCost: "10",
      book: "ldb",
      page: "79",
    },
    {
      key: "Incompétence (Ingénierie)",
      description:
        "Vous avez beau vous entraîner et tenter de comprendre, il y a certaines compétences qui vous échappent. Quand vous sélectionnez ce trait, choisissez une compétence. Vous ne pouvez pas gagner de rangs dans cette compétence. Vous ne pouvez pas être incompétent dans des compétences que vous n’avez pas eu l’occasion d’essayer ; aussi, vous ne pouvez pas choisir ce trait pour des compétences de Magie si vous n’avez pas d’attribut Magie et vous ne pouvez pas le choisir pour la compétence Technomancie si vous n’avez pas d’indice de Résonance. Cette compétence ne peut être choisie qu’une seule fois.",
      type: "negative",
      karmaCost: "10",
      book: "ldb",
      page: "79",
    },
    {
      key: "Incompétence (Perception)",
      description:
        "Vous avez beau vous entraîner et tenter de comprendre, il y a certaines compétences qui vous échappent. Quand vous sélectionnez ce trait, choisissez une compétence. Vous ne pouvez pas gagner de rangs dans cette compétence. Vous ne pouvez pas être incompétent dans des compétences que vous n’avez pas eu l’occasion d’essayer ; aussi, vous ne pouvez pas choisir ce trait pour des compétences de Magie si vous n’avez pas d’attribut Magie et vous ne pouvez pas le choisir pour la compétence Technomancie si vous n’avez pas d’indice de Résonance. Cette compétence ne peut être choisie qu’une seule fois.",
      type: "negative",
      karmaCost: "10",
      book: "ldb",
      page: "79",
    },
    {
      key: "Incompétence (Pilotage)",
      description:
        "Vous avez beau vous entraîner et tenter de comprendre, il y a certaines compétences qui vous échappent. Quand vous sélectionnez ce trait, choisissez une compétence. Vous ne pouvez pas gagner de rangs dans cette compétence. Vous ne pouvez pas être incompétent dans des compétences que vous n’avez pas eu l’occasion d’essayer ; aussi, vous ne pouvez pas choisir ce trait pour des compétences de Magie si vous n’avez pas d’attribut Magie et vous ne pouvez pas le choisir pour la compétence Technomancie si vous n’avez pas d’indice de Résonance. Cette compétence ne peut être choisie qu’une seule fois.",
      type: "negative",
      karmaCost: "10",
      book: "ldb",
      page: "79",
    },
    {
      key: "Incompétence (Piratage)",
      description:
        "Vous avez beau vous entraîner et tenter de comprendre, il y a certaines compétences qui vous échappent. Quand vous sélectionnez ce trait, choisissez une compétence. Vous ne pouvez pas gagner de rangs dans cette compétence. Vous ne pouvez pas être incompétent dans des compétences que vous n’avez pas eu l’occasion d’essayer ; aussi, vous ne pouvez pas choisir ce trait pour des compétences de Magie si vous n’avez pas d’attribut Magie et vous ne pouvez pas le choisir pour la compétence Technomancie si vous n’avez pas d’indice de Résonance. Cette compétence ne peut être choisie qu’une seule fois.",
      type: "negative",
      karmaCost: "10",
      book: "ldb",
      page: "79",
    },
    {
      key: "Incompétence (Plein air)",
      description:
        "Vous avez beau vous entraîner et tenter de comprendre, il y a certaines compétences qui vous échappent. Quand vous sélectionnez ce trait, choisissez une compétence. Vous ne pouvez pas gagner de rangs dans cette compétence. Vous ne pouvez pas être incompétent dans des compétences que vous n’avez pas eu l’occasion d’essayer ; aussi, vous ne pouvez pas choisir ce trait pour des compétences de Magie si vous n’avez pas d’attribut Magie et vous ne pouvez pas le choisir pour la compétence Technomancie si vous n’avez pas d’indice de Résonance. Cette compétence ne peut être choisie qu’une seule fois.",
      type: "negative",
      karmaCost: "10",
      book: "ldb",
      page: "79",
    },
    {
      key: "Incompétence (Sorcellerie)",
      description:
        "Vous avez beau vous entraîner et tenter de comprendre, il y a certaines compétences qui vous échappent. Quand vous sélectionnez ce trait, choisissez une compétence. Vous ne pouvez pas gagner de rangs dans cette compétence. Vous ne pouvez pas être incompétent dans des compétences que vous n’avez pas eu l’occasion d’essayer ; aussi, vous ne pouvez pas choisir ce trait pour des compétences de Magie si vous n’avez pas d’attribut Magie et vous ne pouvez pas le choisir pour la compétence Technomancie si vous n’avez pas d’indice de Résonance. Cette compétence ne peut être choisie qu’une seule fois.",
      type: "negative",
      karmaCost: "10",
      book: "ldb",
      page: "79",
    },
    {
      key: "Incompétence (Technomancie)",
      description:
        "Vous avez beau vous entraîner et tenter de comprendre, il y a certaines compétences qui vous échappent. Quand vous sélectionnez ce trait, choisissez une compétence. Vous ne pouvez pas gagner de rangs dans cette compétence. Vous ne pouvez pas être incompétent dans des compétences que vous n’avez pas eu l’occasion d’essayer ; aussi, vous ne pouvez pas choisir ce trait pour des compétences de Magie si vous n’avez pas d’attribut Magie et vous ne pouvez pas le choisir pour la compétence Technomancie si vous n’avez pas d’indice de Résonance. Cette compétence ne peut être choisie qu’une seule fois.",
      type: "negative",
      karmaCost: "10",
      book: "ldb",
      page: "79",
    },
    {
      key: "Indécis",
      description:
        "Vous avez du mal à prendre des décisions dans le feu de l’action. Vous devez bénéficier de quatre actions mineures par round de combat pour choisir ce trait. Effet en jeu : si vous ne disposez pas d’au moins 5 points d’Atout, vous ne pouvez pas échanger des actions mineures pour une seconde action majeure.",
      type: "negative",
      karmaCost: "11",
      book: "compagnon",
      page: "132",
    },
    {
      key: "Indic",
      description:
        "Celui qui vous dira qu’il n’y a pas de loi vous raconte des conneries. Que ce soit la Star et les Pawns, les Yaks et les Vory ou les Cutters et les Hellhounds, tous veulent des informations et vous savez négocier vos scoops contre de l’argent, leur protection ou des services. Le problème, c’est que personne n’a confiance en un indic. Bien sûr, vous vous considérez plutôt comme un courtier en informations débutant, mais ça ne les empêchera pas de vous casser le nez. Vous n’obtenez pas d’Atout lorsque vous effectuez des tests sociaux pour vendre les informations confidentielles que vous avez obtenues. Si un groupe découvre que vous les avez dévoilés, vous ne pourrez pas dépenser d’Atout sur les tests sociaux contre les membres de cette entité vous ayant démasqué.",
      type: "positive",
      karmaCost: "4",
      book: "seattleEmeraude",
      page: "149",
    },
    {
      key: "Indomptable",
      description:
        "Que ce soit à cause de la sélection naturelle, des études approfondies ou des entraînements intensifs, il est difficile de briser votre esprit. Vous pouvez résister plus longtemps à un interrogatoire, ignorer les blessures les moins graves et résister mentalement à un déferlement de mana. Vous bénéficiez d’une remise d’Atout de 1 sur tous les tests utilisant la Volonté.",
      type: "positive",
      karmaCost: "10",
      book: "ldb",
      page: "74",
    },
    {
      key: "Influenceur mode",
      description:
        "Vous avez une manière de faire les choses qui inspire d’autres personnes à vouloir faire de même. Quand vous partagez une information en public (sur un commentaire, une vidéo ou autre), on prête attention à votre avis et altère légèrement ce que l’on fait pour vous ressembler un peu plus (bien que votre style ne soit pas assez scandaleux ni voyant pour correspondre au trait Style distinctif). Lorsque vous achetez des vêtements à la mode (tout ce qui appartient à une ligne de vêtements, comme Armanté ou Zoé), vous bénéficiez d’une réduction de cinquante pour cent, car les designers et les vendeurs veulent que vous fassiez la promotion de leurs articles.",
      type: "positive",
      karmaCost: "5",
      book: "jeuxPouvoir",
      page: "149",
    },
    {
      key: "Insomniaque",
      description:
        "Dormir ? Qu’est-ce que c’est ? Vous pouvez avoir des cauchemars, un problème au cerveau, une biochimie bizarre ou un problème psychologique, mais, quelle que soit la raison, vous ne parvenez pas à passer une bonne nuit de sommeil. Sans un repos correct, vous ne pouvez pas regagner de l’Atout ou en dépenser comme vous le voudriez. Chaque jour le runner doit effectuer un test de Constitution + Volonté (3) pour parvenir à passer une bonne nuit. S’il échoue, il ne peut gagner plus de deux points d’Atout par jour, quelle que soit la manière de les obtenir. De plus, il ne peut pas dépenser plus de 2 points d’Atout pour un même test, avant remise éventuelle. L’achat et l’utilisation d’un régulateur de sommeil réduisent le seuil du test de 1 point. Le runner peut aussi se procurer des médicaments (50 nuyens par dose) qui réduisent le seuil de 2 points.",
      type: "negative",
      karmaCost: "4",
      book: "ldb",
      page: "79",
    },
    {
      key: "Inspirant",
      description:
        "Vous savez motiver les gens pour qu’ils donnent le meilleur d’eux‑mêmes. Au prix d’une action majeure, vous pouvez faire un test d’Influence (Leadership) + Charisme pour aider un autre personnage lors d’un test d’équipe impliquant n’importe quelle compétence. Vous ou le personnage que vous assistez (au choix du joueur) gagnez un point d’Atout.",
      type: "positive",
      karmaCost: "11",
      book: "compagnon",
      page: "130",
    },
    {
      key: "Invocateur étroit d’esprit (Aînés)",
      description:
        "Chaque niveau de ce trait vous contraint à abandonner la capacité d’invoquer et lier l’un des dix types d’esprits standard (air, bêtes, terre, feu, gardien, guide, aînés, plantes, ouvrier, eau). Vous pouvez toujours bannir tous les types d’esprits. Ce trait peut être choisi jusqu’à cinq fois en sélectionnant un type d’esprit différent. ",
      type: "negative",
      karmaCost: "2",
      book: "voiesOccultes",
      page: "111",
    },
    {
      key: "Invocateur étroit d’esprit (Air)",
      description:
        "Chaque niveau de ce trait vous contraint à abandonner la capacité d’invoquer et lier l’un des dix types d’esprits standard (air, bêtes, terre, feu, gardien, guide, aînés, plantes, ouvrier, eau). Vous pouvez toujours bannir tous les types d’esprits. Ce trait peut être choisi jusqu’à cinq fois en sélectionnant un type d’esprit différent. ",
      type: "negative",
      karmaCost: "2",
      book: "voiesOccultes",
      page: "111",
    },
    {
      key: "Invocateur étroit d’esprit (Bêtes)",
      description:
        "Chaque niveau de ce trait vous contraint à abandonner la capacité d’invoquer et lier l’un des dix types d’esprits standard (air, bêtes, terre, feu, gardien, guide, aînés, plantes, ouvrier, eau). Vous pouvez toujours bannir tous les types d’esprits. Ce trait peut être choisi jusqu’à cinq fois en sélectionnant un type d’esprit différent. ",
      type: "negative",
      karmaCost: "2",
      book: "voiesOccultes",
      page: "111",
    },
    {
      key: "Invocateur étroit d’esprit (Eau)",
      description:
        "Chaque niveau de ce trait vous contraint à abandonner la capacité d’invoquer et lier l’un des dix types d’esprits standard (air, bêtes, terre, feu, gardien, guide, aînés, plantes, ouvrier, eau). Vous pouvez toujours bannir tous les types d’esprits. Ce trait peut être choisi jusqu’à cinq fois en sélectionnant un type d’esprit différent. ",
      type: "negative",
      karmaCost: "2",
      book: "voiesOccultes",
      page: "111",
    },
    {
      key: "Invocateur étroit d’esprit (Feu)",
      description:
        "Chaque niveau de ce trait vous contraint à abandonner la capacité d’invoquer et lier l’un des dix types d’esprits standard (air, bêtes, terre, feu, gardien, guide, aînés, plantes, ouvrier, eau). Vous pouvez toujours bannir tous les types d’esprits. Ce trait peut être choisi jusqu’à cinq fois en sélectionnant un type d’esprit différent. ",
      type: "negative",
      karmaCost: "2",
      book: "voiesOccultes",
      page: "111",
    },
    {
      key: "Invocateur étroit d’esprit (Gardien)",
      description:
        "Chaque niveau de ce trait vous contraint à abandonner la capacité d’invoquer et lier l’un des dix types d’esprits standard (air, bêtes, terre, feu, gardien, guide, aînés, plantes, ouvrier, eau). Vous pouvez toujours bannir tous les types d’esprits. Ce trait peut être choisi jusqu’à cinq fois en sélectionnant un type d’esprit différent. ",
      type: "negative",
      karmaCost: "2",
      book: "voiesOccultes",
      page: "111",
    },
    {
      key: "Invocateur étroit d’esprit (Guide)",
      description:
        "Chaque niveau de ce trait vous contraint à abandonner la capacité d’invoquer et lier l’un des dix types d’esprits standard (air, bêtes, terre, feu, gardien, guide, aînés, plantes, ouvrier, eau). Vous pouvez toujours bannir tous les types d’esprits. Ce trait peut être choisi jusqu’à cinq fois en sélectionnant un type d’esprit différent. ",
      type: "negative",
      karmaCost: "2",
      book: "voiesOccultes",
      page: "111",
    },
    {
      key: "Invocateur étroit d’esprit (Ouvrier)",
      description:
        "Chaque niveau de ce trait vous contraint à abandonner la capacité d’invoquer et lier l’un des dix types d’esprits standard (air, bêtes, terre, feu, gardien, guide, aînés, plantes, ouvrier, eau). Vous pouvez toujours bannir tous les types d’esprits. Ce trait peut être choisi jusqu’à cinq fois en sélectionnant un type d’esprit différent. ",
      type: "negative",
      karmaCost: "2",
      book: "voiesOccultes",
      page: "111",
    },
    {
      key: "Invocateur étroit d’esprit (Plantes)",
      description:
        "Chaque niveau de ce trait vous contraint à abandonner la capacité d’invoquer et lier l’un des dix types d’esprits standard (air, bêtes, terre, feu, gardien, guide, aînés, plantes, ouvrier, eau). Vous pouvez toujours bannir tous les types d’esprits. Ce trait peut être choisi jusqu’à cinq fois en sélectionnant un type d’esprit différent. ",
      type: "negative",
      karmaCost: "2",
      book: "voiesOccultes",
      page: "111",
    },
    {
      key: "Invocateur étroit d’esprit (Terre)",
      description:
        "Chaque niveau de ce trait vous contraint à abandonner la capacité d’invoquer et lier l’un des dix types d’esprits standard (air, bêtes, terre, feu, gardien, guide, aînés, plantes, ouvrier, eau). Vous pouvez toujours bannir tous les types d’esprits. Ce trait peut être choisi jusqu’à cinq fois en sélectionnant un type d’esprit différent. ",
      type: "negative",
      karmaCost: "2",
      book: "voiesOccultes",
      page: "111",
    },
    {
      key: "Invocateur Shinto",
      description:
        "Votre spécialisation en religion Shinto vous confère une affinité particulière avec les esprits liés à cette tradition. Vous obtenez un bonus de +1 dé à vos tests d’Invocation au sein d’un sanctuaire Shinto. Les esprits corrompus vous privilégieront toujours à d’autres cibles.",
      type: "positive",
      karmaCost: "2",
      book: "jeuxPouvoir",
      page: "138",
    },
    {
      key: "Invocateur timide",
      description:
        "Que ce soit dû à une mauvaise expérience dans le passé ou aux spécificités de son éducation arcanique, le magicien est frappé de stupeur à chaque fois qu’il invoque un esprit. L’esprit, qui sent son malaise, prend le dessus et exécute souvent les ordres du conjurateur à la lettre : il ne fera rien de plus, mais il se peut qu’il ait envie de faire bien moins (en cours de route, l’esprit fera preuve d’un comportement capricieux ou arrogant, selon la tradition du magicien). Un invocateur timide doit être très précis dans sa formulation, à moins d’être prêt à ce que l’esprit le fasse tourner en rond. Ce trait ne peut être sélectionné que par les personnages qui possèdent la compétence Conjuration. Les esprits invoqués par le magicien font en sorte de mal interpréter ses ordres (à la discrétion du maître de jeu). Si le magicien veut s’assurer qu’il n’y a aucune faille dans ses instructions, il doit se poser avant la conjuration et faire un test étendu de Conjuration + Intuition (8, 5 min) pour bien formuler ses prochains ordres.",
      type: "negative",
      karmaCost: "8",
      book: "voiesOccultes",
      page: "111",
    },
    {
      key: "Je suis ici chez moi",
      description:
        "Ceux qui passent leur temps entourés d’agents de sécurité apprennent à se montrer engageants, afin de rendre leurs interactions avec ceux-ci plus cordiales qu’avec n’importe quel autre esclave corpo. Les habitants de Bellevue vont encore plus loin. Ils savent que les policiers sont là pour les protéger, pas pour les coffrer, et ces derniers en sont tout aussi conscients. Vous savez comment interagir avec les forces de l’ordre du district. De plus, votre charisme réduit vos chances de vous faire arrêter par la police, mais, si cela devait arriver, vous feriez en sorte de ne pas vous attirer d’ennuis. Vous obtenez une remise d’Atout de 1 pour toutes les interactions sociales impliquant au moins un agent de sécurité du district.",
      type: "positive",
      karmaCost: "3",
      book: "seattleEmeraude",
      page: "55",
    },
    {
      key: "Jours comptés",
      description:
        "L’épée de Damoclès suspendue au‑dessus de votre tête ne tient plus qu’à un fil. Tôt ou tard (vraisemblablement tôt), vous allez mourir. Vous avez déjà dépassé votre date limite. À quoi allez‑vous consacrer vos derniers instants ? Quel souvenir laisserez‑vous ? Vous êtes irrémédiablement et indubitablement condamné. Cela peut venir d’une bombe corticale, de nanites insidieuses, d’une maladie rare ou même d’un contrat sur votre tête. Au début de chaque séance (après avoir réinitialisé votre Atout), faites un test de Constitution ou Volonté (le plus élevé) + Atout. Le seuil de départ est de 1 et augmente de 1 après chaque séance. Vous pouvez dépenser de l’Atout sur ce test. Si vous échouez, votre heure est venue. Le premier événement qui pourrait se révéler fatal… vous est fatal. La Loi de Murphy dans toute sa splendeur. Si rien de dangereux ne se produit au cours de la partie, à la fin de la séance vous vous écroulez, mort. Vous pouvez cramer un point d’Atout pour éviter ça, mais à moins de racheter ce trait, votre survie au prochain rendez‑vous risque d’être encore plus improbable (le fait de cramer un point d’Atout ne réinitialise pas le seuil de difficulté du test).",
      type: "negative",
      karmaCost: "25",
      book: "compagnon",
      page: "132",
    },
    {
      key: "Jusqu’au cou",
      description:
        "Vous voudriez peut-être revenir en arrière, mais il est trop tard. Même si vous êtes prêt à abandonner les avantages dont vous bénéficiez au sein du groupe de votre choix, tout le monde vous considère comme un membre à part entière et cela vous poursuivra où que vous alliez. Votre contact intermédiaire au sein de la Pègre passe désormais à Loyauté 4 et Réseau 5. Vous gagnez également un point d’Atout ainsi qu’un dé supplémentaire pour tous les tests sociaux contre ceux qui respectent ou craignent votre organisation. De plus, un runner impliqué Jusqu’au cou avec une organisation peut, à la discrétion du MJ, demander à un homme de main (Indice de professionnalisme 4) de l’accompagner pour une opération de son choix pendant un laps de temps limité. Ce trait attire également l’attention. Tous les changements de Réputation et de Pression sont doublés. Vous pouvez payer vingt pour cent de votre style de vie le plus cher chaque mois pour empêcher cette augmentation de vos scores de Réputation et de Pression. Lorsque vous achetez ce trait, Jusqu’au cou remplace Dans les petits papiers. Cela ne vous octroie aucun point de Karma. Le trait Jusqu’au cou doit être acheté après Dans les petits papiers.",
      type: "positive",
      karmaCost: "20",
      book: "seattleEmeraude",
      page: "188",
    },
    {
      key: "L’école de la rue",
      description:
        "Devenir pro vous a rendu blasé. Vous avez participé à bien des opérations des ombres, connu les gains et les pertes, l’amitié et la trahison, les échappées belles et les camarades morts au combat. Tout le monde peut le lire dans vos yeux: vous avez mérité votre place ici. Le métier a laissé une trace indélébile, qui inspire une sorte de respect bien spécifique à ceux qui ont été à votre place ou espèrent un jour vous ressembler. Vous bénéficiez d’une remise d’Atout de 1 lorsque vous réalisez des tests sociaux avec des intermédiaires, des M. Johnson ainsi que des gangs et quiconque a l’habitude de travailler avec des agents des Ombres. De plus, vous pouvez ajouter deux dés à votre réserve une fois par session de jeu lors de n’importe quel test. Cependant, votre attitude bourrue vous empêche de gagner de l’Atout lors d’un test social contre ceux qui n’ont pas pour habitude de travailler avec des shadowrunners, hormis le point attribué par ce trait. Lorsque vous l’achetez, retirez le trait Rêveur éveillé à votre personnage et remplacez-le par celui-ci. Vous ne pourrez récupérer aucun point de Karma. Ces traits ne peuvent pas être achetés en même temps.",
      type: "positive",
      karmaCost: "10",
      book: "seattleEmeraude",
      page: "149",
    },
    {
      key: "L’optimisme de Northgate",
      description:
        "Habiter à Everett vous rend énergique et enthousiaste. Vous pouvez partager cette joie de vivre autour de vous. Les habitants et les travailleurs passant plus de la moitié de leur temps à Everett ont adopté une mentalité « au diable la prudence, faut ce qui faut » environ trois mois après la déclaration d’indépendance. Les personnages avec ce trait obtiennent une remise d’Atout de 1 pour tout test social impliquant un habitant ou un travailleur d’Everett.",
      type: "positive",
      karmaCost: "3",
      book: "seattleEmeraude",
      page: "92",
    },
    {
      key: "La cambrousse",
      description:
        "Dans les Barrens, la connexion matricielle est vétuste. Malgré la révolution du sans fil, il reste énormément de zones mortes et quelques îlots sans bruit, que même DIEU aurait du mal à dénicher. Seuls ceux qui ont vécu là-bas ont ce lien profond avec les caractéristiques et les particularités de Puyallup. Forts de ces informations, ils peuvent duper les autres. Lorsque vous piratez un appareil depuis le district de Puyallup, les augmentations du Score de Surveillance sont réduites de 1 (minimum 1).",
      type: "positive",
      karmaCost: "3",
      book: "seattleEmeraude",
      page: "135",
    },
    {
      key: "La loi du plus fort",
      description:
        "À un moment de votre vie, vous avez réussi plusieurs runs soit pour S-K, soit contre S-K, qui ont attiré l’attention de la corpo et l’ont marquée. Dans ce deuxième cas, votre run a été couronné de succès grâce à votre talent exceptionnel ou bien vous avez échappé aux tentatives de S-K de vous abattre. Quoi qu’il en soit, vous avez fait bonne impression à la direction. Elle ne vous apprécie peut-être pas (surtout si vous avez tué quelqu’un), mais elle vous respecte d’un point de vue professionnel. Vous obtenez un point d’Atout pour tout test social auprès d’un employé de Saeder-Krupp lorsque vous vous trouvez dans l’environnement géographique sélectionné au moment où vous choisissez ce trait. Une agglomération se rapporte à une unique conurbation et les zones périphériques ; une région correspond à une petite nation ou une partie importante d’une nation plus imposante (Suisse, NouvelleAngleterre) ; l’international comprend, comme son nom l’indique, le monde entier.",
      type: "positive",
      karmaCost: "2",
      book: "jeuxPouvoir",
      page: "122",
    },
    {
      key: "Le coeur de (groupe spécifique)",
      description:
        "Vous avez des contacts au sein d’un groupe, auxquels vous pouvez faire appel en cas de problème « méta » physique. Il peut s’agit de n’importe quel type de groupe, extrémiste comme le policlub Humanis ou Human Nation, écologiste, éco-terroriste, politique, humanitaire, etc. Vous obtenez une action d’Atout à 5 points spéciale vous permettant d’appeler à l’aide de quatre membres du groupe en question. Vous pouvez décider du moment de son intervention; le délai minimum est d’une demi-heure partout à Seattle, à l’exception des zones où le groupe est très actif, où il est réduit à cinq minutes. L’aide obtenue dépendra du groupe. Un groupe extrémiste pourra faire usage de violence quand d’autres se contenteront de faire diversion, de faire le guet, ou toute autre action en rapport avec leurs compétences et convictions.",
      type: "positive",
      karmaCost: "3",
      book: "seattleEmeraude",
      page: "173",
    },
    {
      key: "Les Bilkos sont mes amis (niveau 1)",
      description:
        "Dans votre passé ou durant votre carrière, vous avez tissé un lien fort avec un ou plusieurs Bilkos de Fort Lewis. De ce fait, vous n’avez aucun mal à obtenir des informations ou de l’équipement; contre un certain prix (relativement bas). La disponibilité de l’équipement que vous cherchez à obtenir par le biais d’un contact est réduite de 1 ou 2, et l’indice de Réseau du contact augmente de 1 ou 2 selon le coût en Karma. Vous devez créer un lien avec ce contact lors de la création de votre personnage. Toutes les autres règles sur les contacts s’appliquent. Vous pouvez acheter ce trait plusieurs fois afin d’obtenir d’autres contacts.",
      type: "positive",
      karmaCost: "7",
      book: "seattleEmeraude",
      page: "105",
    },
    {
      key: "Les Bilkos sont mes amis (niveau 2)",
      description:
        "Dans votre passé ou durant votre carrière, vous avez tissé un lien fort avec un ou plusieurs Bilkos de Fort Lewis. De ce fait, vous n’avez aucun mal à obtenir des informations ou de l’équipement; contre un certain prix (relativement bas). La disponibilité de l’équipement que vous cherchez à obtenir par le biais d’un contact est réduite de 1 ou 2, et l’indice de Réseau du contact augmente de 1 ou 2 selon le coût en Karma. Vous devez créer un lien avec ce contact lors de la création de votre personnage. Toutes les autres règles sur les contacts s’appliquent. Vous pouvez acheter ce trait plusieurs fois afin d’obtenir d’autres contacts.",
      type: "positive",
      karmaCost: "12",
      book: "seattleEmeraude",
      page: "105",
    },
    {
      key: "Les copains du village",
      description:
        "Vous avez soit grandi à la campagne, soit vous y avez passé pas mal de temps, à tel point que vous savez vous fondre dans la masse des « ruraux ». Vous savez comment vous habiller, vous comporter, ce qu’il faut leur dire et éviter de mentionner pour vous mêler à ces habitants et ne pas vous les mettre à dos. Vous bénéficiez d’une remise d’Atout de 1 pour toute interaction sociale avec un personnage vivant ou ayant vécu dans une zone rurale.",
      type: "positive",
      karmaCost: "5",
      book: "seattleEmeraude",
      page: "162",
    },
    {
      key: "Les Gardiens du Passage",
      description:
        "Bellevue est un endroit difficile d’accès. Les autoroutes sont parcourues par des go-gangs déchaînés, et comme si ça ne suffisait pas un péage lourdement gardé en bloque l’accès. Bien sûr, les habitants du cru savent quand les gangs sont de sortie et quand la sécurité se relâche un peu. Une source sûre vous permet de connaître les plannings de sécurité à la frontière et de savoir quand les go-gangs ont le plus de chances de se trouver dans le secteur. Vous n’avez pas besoin d’un test de Connaissance pour découvrir ces informations.",
      type: "positive",
      karmaCost: "3",
      book: "seattleEmeraude",
      page: "55",
    },
    {
      key: "Livraison internationale",
      description:
        "Wuxing a l’habitude de profiter de son accès au transport international et de ses privilèges extraterritoriaux pour livrer des cargaisons que les gouvernements locaux considèrent comme illégales. Vous avez tissé des liens avec la méga qui vous permettent de déplacer des cargaisons d’une quantité raisonnable d’une grande ville à l’autre sans crainte qu’elles soient saisies par les autorités locales. La définition exacte de «quantité raisonnable» est laissée à la discrétion du maître de jeu, même si généralement, la valeur marchande des biens ne dépasse pas six chiffres. Les «grandes villes» sont celles qui abritent au moins un million d’habitants. Le temps de livraison correspond approximativement à un jour par 4000 kilomètres parcourus (un jour minimum).",
      type: "negative",
      karmaCost: "4",
      book: "jeuxPouvoir",
      page: "162",
    },
    {
      key: "Lueur d’espoir",
      description:
        "Vous tirez toujours le meilleur parti des situations, même pourries. Voire très, très pourries. À chaque fois que vous obtenez une complication, gagnez un point d’Atout. À chaque fois que vous obtenez un échec critique, votre réserve d’Atout est remplie à son maximum de 7. Les effets de la complication ou de l’échec critique se produisent malgré tout. Si ceux-ci sont évités ou annulés, ce trait ne vous fait pas gagner d’Atou",
      type: "positive",
      karmaCost: "8",
      book: "tombeauOuvert",
      page: "167",
    },
    {
      key: "M. Tout le Monde",
      description:
        "Vous êtes la personne la moins intéressante du monde. Vous avez une taille moyenne, un poids moyen, une carrure moyenne, vous êtes moyen dans tous les domaines. Rien en vous ne permet de vous différencier des autres, ce qui peut s’avérer extrêmement utile. les personnages subissent un malus de -2 dés à leurs tests de Mémoire (p. 106) pour se rappeler s’ils vous ont déjà vu et le seuil des tests pour remarquer que vous les suivez ou que vous les observez est augmenté de 1. Si vous acquérez un signe distinctif permanent (quelque chose d’évident, un cyberware peu commun, un tatouage unique, ce genre de choses) vous perdez ce trait. Si vous acquérez un signe distinctif temporaire, comme une coiffure extrême, les effets de ce trait sont annulés jusqu’à ce que vous vous débarrassiez de ce signe distinctif.",
      type: "positive",
      karmaCost: "8",
      book: "ldb",
      page: "75",
    },
    {
      key: "Mâchoire de verre",
      description:
        "Il n’en faut pas beaucoup pour vous faire voir trentesix chandelles. Vous n’avez jamais su encaisser les coups. Vous avez une case de dommages étourdissants de moins pour chaque niveau de ce trait jusqu’à un minimum de 2 cases.",
      type: "negative",
      karmaCost: "4",
      book: "ldb",
      page: "80",
    },
    {
      key: "Mage académique",
      description:
        "Une très grande partie des mages (en particulier des traditions hermétiques) ne sont pas formés par un professeur particulier. Ils sont inscrits à l’université. Je vous l’accorde, l’éducation académique est hors de prix, mais elle porte ses fruits en termes d’acquisition de connaissances. Pendant la création de personnage, les mages peuvent acheter des Connaissances au prix de 2 points de Karma chacune. Ils peuvent également acheter des Connaissances avec leur budget de départ (p. 68, SR6) au prix de 1000 nuyens par Connaissance. Ce trait peut être combiné avec le trait Endetté ; cependant, cela augmente le prix par Connaissance, qui sera de 2000 nuyens.",
      type: "positive",
      karmaCost: "1",
      book: "voiesOccultes",
      page: "110",
    },
    {
      key: "Maîtrise d’attribut (Agilité)",
      description:
        "Une partie de vous ne vous fait jamais défaut; quand vous vous reposez dessus, vous vous en tirez toujours. Choisissez un de ces attributs: Constitution, Agilité, Réaction, Force, Volonté, Intuition ou Charisme. Quand vous effectuez un test basé sur celui-ci, bénéficiez d’une remise d’Atout de 1 à moins que votre Score Offensif ne vous accorde déjà un gain d’Atout. Vous ne pouvez acquérir ce trait qu’une seule fois. Il est incompatible avec Esprit analytique. Si vous possédez le trait Esprit analytique, vous ne pouvez pas prendre Maîtrise d’attribut. Si vous possédez le trait Maîtrise d’attribut, vous ne pouvez pas prendre Esprit analytique.",
      type: "positive",
      karmaCost: "8",
      book: "tombeauOuvert",
      page: "167",
    },
    {
      key: "Maîtrise d’attribut (Charisme)",
      description:
        "Une partie de vous ne vous fait jamais défaut; quand vous vous reposez dessus, vous vous en tirez toujours. Choisissez un de ces attributs: Constitution, Agilité, Réaction, Force, Volonté, Intuition ou Charisme. Quand vous effectuez un test basé sur celui-ci, bénéficiez d’une remise d’Atout de 1 à moins que votre Score Offensif ne vous accorde déjà un gain d’Atout. Vous ne pouvez acquérir ce trait qu’une seule fois. Il est incompatible avec Esprit analytique. Si vous possédez le trait Esprit analytique, vous ne pouvez pas prendre Maîtrise d’attribut. Si vous possédez le trait Maîtrise d’attribut, vous ne pouvez pas prendre Esprit analytique.",
      type: "positive",
      karmaCost: "8",
      book: "tombeauOuvert",
      page: "167",
    },
    {
      key: "Maîtrise d’attribut (Constitution)",
      description:
        "Une partie de vous ne vous fait jamais défaut; quand vous vous reposez dessus, vous vous en tirez toujours. Choisissez un de ces attributs: Constitution, Agilité, Réaction, Force, Volonté, Intuition ou Charisme. Quand vous effectuez un test basé sur celui-ci, bénéficiez d’une remise d’Atout de 1 à moins que votre Score Offensif ne vous accorde déjà un gain d’Atout. Vous ne pouvez acquérir ce trait qu’une seule fois. Il est incompatible avec Esprit analytique. Si vous possédez le trait Esprit analytique, vous ne pouvez pas prendre Maîtrise d’attribut. Si vous possédez le trait Maîtrise d’attribut, vous ne pouvez pas prendre Esprit analytique.",
      type: "positive",
      karmaCost: "8",
      book: "tombeauOuvert",
      page: "167",
    },
    {
      key: "Maîtrise d’attribut (Force)",
      description:
        "Une partie de vous ne vous fait jamais défaut; quand vous vous reposez dessus, vous vous en tirez toujours. Choisissez un de ces attributs: Constitution, Agilité, Réaction, Force, Volonté, Intuition ou Charisme. Quand vous effectuez un test basé sur celui-ci, bénéficiez d’une remise d’Atout de 1 à moins que votre Score Offensif ne vous accorde déjà un gain d’Atout. Vous ne pouvez acquérir ce trait qu’une seule fois. Il est incompatible avec Esprit analytique. Si vous possédez le trait Esprit analytique, vous ne pouvez pas prendre Maîtrise d’attribut. Si vous possédez le trait Maîtrise d’attribut, vous ne pouvez pas prendre Esprit analytique.",
      type: "positive",
      karmaCost: "8",
      book: "tombeauOuvert",
      page: "167",
    },
    {
      key: "Maîtrise d’attribut (Intuition)",
      description:
        "Une partie de vous ne vous fait jamais défaut; quand vous vous reposez dessus, vous vous en tirez toujours. Choisissez un de ces attributs: Constitution, Agilité, Réaction, Force, Volonté, Intuition ou Charisme. Quand vous effectuez un test basé sur celui-ci, bénéficiez d’une remise d’Atout de 1 à moins que votre Score Offensif ne vous accorde déjà un gain d’Atout. Vous ne pouvez acquérir ce trait qu’une seule fois. Il est incompatible avec Esprit analytique. Si vous possédez le trait Esprit analytique, vous ne pouvez pas prendre Maîtrise d’attribut. Si vous possédez le trait Maîtrise d’attribut, vous ne pouvez pas prendre Esprit analytique.",
      type: "positive",
      karmaCost: "8",
      book: "tombeauOuvert",
      page: "167",
    },
    {
      key: "Maîtrise d’attribut (Réaction)",
      description:
        "Une partie de vous ne vous fait jamais défaut; quand vous vous reposez dessus, vous vous en tirez toujours. Choisissez un de ces attributs: Constitution, Agilité, Réaction, Force, Volonté, Intuition ou Charisme. Quand vous effectuez un test basé sur celui-ci, bénéficiez d’une remise d’Atout de 1 à moins que votre Score Offensif ne vous accorde déjà un gain d’Atout. Vous ne pouvez acquérir ce trait qu’une seule fois. Il est incompatible avec Esprit analytique. Si vous possédez le trait Esprit analytique, vous ne pouvez pas prendre Maîtrise d’attribut. Si vous possédez le trait Maîtrise d’attribut, vous ne pouvez pas prendre Esprit analytique.",
      type: "positive",
      karmaCost: "8",
      book: "tombeauOuvert",
      page: "167",
    },
    {
      key: "Maîtrise d’attribut (Volonté)",
      description:
        "Une partie de vous ne vous fait jamais défaut; quand vous vous reposez dessus, vous vous en tirez toujours. Choisissez un de ces attributs: Constitution, Agilité, Réaction, Force, Volonté, Intuition ou Charisme. Quand vous effectuez un test basé sur celui-ci, bénéficiez d’une remise d’Atout de 1 à moins que votre Score Offensif ne vous accorde déjà un gain d’Atout. Vous ne pouvez acquérir ce trait qu’une seule fois. Il est incompatible avec Esprit analytique. Si vous possédez le trait Esprit analytique, vous ne pouvez pas prendre Maîtrise d’attribut. Si vous possédez le trait Maîtrise d’attribut, vous ne pouvez pas prendre Esprit analytique.",
      type: "positive",
      karmaCost: "8",
      book: "tombeauOuvert",
      page: "167",
    },
    {
      key: "Mal des transports",
      description:
        "C’est sûr que pouvoir transiter entre différents endroits est très pratique, mais ça ne rend pas la chose plaisante. Rouler la fenêtre ouverte ne vous est d’aucune aide ; c’est juste que vous devrez nettoyer la voiture après coup. Chaque fois que vous passez plus de trente minutes dans un véhicule en mouvement, subissez l’état Nauséeux (p. 57, SR6). Cet état persiste pendant les dix minutes suivant l’arrêt du véhicule. Les tests de récupération ne sont que temporaires et durent (succès nets) minutes.",
      type: "negative",
      karmaCost: "4",
      book: "tombeauOuvert",
      page: "171",
    },
    {
      key: "Mal du simsens",
      description:
        "Quelque part dans votre cerveau vous avez des fils qui se croisent. À chaque fois que vous vous connectez à la Matrice en RV, vous êtes désorienté au point d’en être nauséeux. Vous ne pouvez pas gagner ou dépenser de l’Atout quand vous accédez à la Matrice en RV. Vous subissez également l’état Nauséeux (p. 57) pendant une heure après vous être déconnecté de la Matrice.",
      type: "negative",
      karmaCost: "6",
      book: "ldb",
      page: "80",
    },
    {
      key: "Malchance",
      description:
        "Vous êtes né sous une mauvaise étoile, vous avez cassé un miroir, renversé du sel, vous avez le mauvais œil ou vous n’avez tout simplement pas de chance. Quelle que soit la raison, tout a tendance à aller de travers autour de vous. Souvent. Les complications se produisent plus souvent. Comptez les dés affichant des 1 et des 2 pour déterminer quand il y a une complication. Cela n’affecte pas les échecs critiques, uniquement les complications normales.",
      type: "negative",
      karmaCost: "10",
      book: "ldb",
      page: "80",
    },
    {
      key: "Malchance légendaire",
      description:
        "La chance semble vous fuir, et même quand ce n’est pas le cas cela ne fait pas une grande différence. Vous ne pouvez gagner qu’un seul point d’Atout par tour.",
      type: "negative",
      karmaCost: "25",
      book: "compagnon",
      page: "133",
    },
    {
      key: "Manoeuvre emblématique",
      description:
        "Vous avez une action spéciale, que vous répétez encore et encore pour une simple raison: elle fonctionne à tous les coups. Et aussi, elle pète la classe. Du coup, ça fait deux raisons. ",
      type: "positive",
      karmaCost: "4",
      book: "tombeauOuvert",
      page: "167",
    },
    {
      key: "Masque chamanique",
      description:
        "Certains magiciens canalisent leurs pouvoirs arcaniques par le biais de leur esprit mentor. De son côté, le totem commence à se manifester à travers une transformation temporaire visible (des traits bestiaux, des effets élémentaires, etc.). La transformation étant due au mana, seuls les êtres vivants peuvent donc la remarquer. Plus le magicien obtient de succès à son test de magie, plus la transformation sera prononcée et plus identifiable sera le totem, même pour les ordinaires. Le mage choisit un effet (ex. : un visage de loup translucide qui couvre son visage, des yeux dans lesquels brûle un feu arcanique). Cet effet survient à chaque utilisation de toute compétence qui implique la magie (ou pour les adeptes, en activant tout pouvoir d’adepte). En utilisant une action mineure (en plus de l’action requise pour utiliser la compétence magique choisie), le magicien obtient une remise d’Atout de 1 pour ce test (adeptes : pour le premier test impliquant le pouvoir d’adepte activé). Il y a également un inconvénient : le masque chamanique révèle inévitablement la nature d’Éveillé du mage. Cela pourrait attirer sur lui les tirs ennemis et le mettre en danger.",
      type: "positive",
      karmaCost: "4",
      book: "voiesOccultes",
      page: "110",
    },
    {
      key: "Mauvais souvenirs",
      description:
        "lorsque vous prenez (ou obtenez) ce trait, choisissez le sujet de vos Mauvais souvenirs. Lorsque vous êtes forcé de faire face à ce sujet, vous ne pouvez gagner au maximum qu’un seul point d’Atout par tour au lieu de deux.",
      type: "negative",
      karmaCost: "3",
      book: "feuNourri",
      page: "124",
    },
    {
      key: "Mauvaise réputation",
      description:
        "Vous avez mauvaise réputation dans la rue. Peut-être avez-vous perdu une équipe ou vous êtes-vous fait jeter d’une équipe pour avoir craqué en interrogatoire. Quoi qu’il en soit, votre réputation vous précède et jamais dans le bon sens. Vous ne pouvez pas dépenser de l’Atout pour des tests sociaux. Si vous participez à un test d’équipe pour aider au cours d’un test social, personne ne peut dépenser de l’Atout et l’individu adverse bénéficie d’une remise d’Atout de 1",
      type: "negative",
      karmaCost: "8",
      book: "ldb",
      page: "80",
    },
    {
      key: "Mauvaises fréquentations",
      description:
        "Quand la police se terre, ce sont les gangs qui font la loi. Ils vous garantissent la sécurité, de l’action, un endroit où dormir et quelqu’un qui surveillera vos arrières. Vous avez prouvé votre valeur et faites maintenant partie d’un gang. Bien que cela vous confère certains avantages, vous avez également des responsabilités. Rien n’est jamais gratuit, les gars. Vous obtenez un contact (intermédiaire) dans le gang de votre choix avec Loyauté 3 et Réseau 3. Celui-ci peut vous acheter et vous vendre des marchandises ainsi que potentiellement vous proposer du travail. Vous obtenez également un point d’Atout bonus lors de tous les tests sociaux contre quiconque respecte ou craint votre gang. Ce point d’Atout doit être utilisé pour ce test, sans quoi il sera perdu. De plus, ce trait double toutes les modifications négatives de votre Réputation personnelle et toutes les modifications positives de votre Pression. Vous pouvez payer vingt pour cent de votre style de vie le plus cher chaque mois pour empêcher cette augmentation de vos scores de Réputation et de Pression.",
      type: "positive",
      karmaCost: "10",
      book: "seattleEmeraude",
      page: "149",
    },
    {
      key: "Maximisation du cyberjack",
      description:
        "Votre matière grise s’est accoutumée à l’interface avec votre cyberjack, ce qui améliore ses capacités. Ajoutez 1 point au plus faible des deux attributs matriciels de votre cyberjack.",
      type: "positive",
      karmaCost: "12",
      book: "compagnon",
      page: "130",
    },
    {
      key: "Mémoire photographique",
      description:
        "Si la plupart des gens enregistrent leur vie dans des vidéos, vous ne cessez jamais vos enregistrements. Cela fait des tonnes de données à traiter en permanence, mais vous êtes imbattable lors des soirées quiz ou pour vous rappeler de la couleur préférée de vos amis quand ils étaient enfants. Vous bénéficiez d’une remise d’Atout de 1 sur tous les tests de Mémoire (p. 106).",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "75",
    },
    {
      key: "Mémorisation alchimique",
      description:
        "Vous êtes tellement rodé à la pratique de l’alchimie que vous êtes capable d’exécuter la plupart des tâches les yeux bandés. Si vous choisissez d’acheter des succès au lieu de lancer les dés quand vous créez une préparation alchimique, vous obtenez un succès par tranche complète de trois dés que vous auriez lancé normalement. La réserve de dés opposée (qui correspond à la valeur de Drain de la préparation) doit alors également acheter un succès par tranche complète de quatre dés (minimum 1). Si vous achetez aussi des succès lors du test de Drain, vous en obtenez un par tranche complète de trois dés.",
      type: "positive",
      karmaCost: "10",
      book: "compagnon",
      page: "130",
    },
    {
      key: 'Mentalité "zone-zéro"',
      description:
        "Votre sang-froid vous rend insensible aux supplications. Ceux qui ont été tués sur le territoire de la corporation ne vous inspirent ni remords ni pitié ; les autres non plus d’ailleurs. Vous croyez corps et âme au bien-fondé du protocole zone-zéro et pensez que toutes les autres corpos devraient en faire usage. Vous les considérez comme faibles, vu qu’elles ne l’appliquent pas. Vous ne pouvez pas dépenser d’Atout sur les tests sociaux, hormis les tests d’Intimidation.",
      type: "negative",
      karmaCost: "6",
      book: "jeuxPouvoir",
      page: "91",
    },
    {
      key: "Mondain",
      description:
        "Vous savez naturellement quoi dire et quoi faire lorsque vous vous mêlez à la haute société (ou peut-être avezvous passé du temps et fourni des efforts pour que cela devienne comme une seconde nature). Vous connaissez tous les impairs en termes de mode, savez comment flirter, échanger des banalités et vous glisser dans une pièce ; en clair, vous pouvez vous fondre dans le décor et ne pas attirer l’attention de la foule huppée. Vous bénéficiez d’une remise d’Atout de 1 pour toute interaction sociale avec un personnage vivant ou ayant vécu parmi l’élite.",
      type: "positive",
      karmaCost: "5",
      book: "seattleEmeraude",
      page: "162",
    },
    {
      key: "Muscles",
      description:
        "Vous savez faire valoir votre impressionnant physique dans vos interactions sociales. Vous pouvez utiliser votre Force au lieu de votre Charisme pour vos tests de compétences sociales, mais seulement si vous êtes capable de mettre votre physique avantageux en avant.",
      type: "positive",
      karmaCost: "6",
      book: "compagnon",
      page: "130",
    },
    {
      key: "Nerveux",
      description:
        "Vous êtes toujours prêt pour les ennuis. Peut‑être un peu trop. Vous subissez un malus de −1 à la réserve de dés sur tous vos tests de Sang‑froid et d’Initiative.",
      type: "negative",
      karmaCost: "5",
      book: "compagnon",
      page: "133",
    },
    {
      key: "Non‑létal",
      description:
        "Même si vous devez vous battre, vous vous efforcez de ne pas tuer Vous ne pouvez pas gagner ou dépenser d’Atout quand vous utilisez un sort ou une attaque infligeant des dommages physiques.",
      type: "negative",
      karmaCost: "5",
      book: "compagnon",
      page: "133",
    },
    {
      key: "Obsession",
      description:
        "Vous devez pratiquer chaque jour l’activité choisie pendant un temps déterminé par le niveau de ce trait. Ne pas le faire provoque en vous un état de manque vous infligeant un malus de –2 à votre réserve de dé pour tous vos tests ; augmentez ce malus de 1 point à chaque fois que s’écoule une autre période égale au temps de sevrage. Tant que vous êtes en manque, vous ne pouvez d’aucune manière gagner ou dépenser de l’Atout. Cependant, les personnages ne souffrent pas des effets des traits négatifs Anxiété, Dépression ou Paranoïa lorsqu’ils cèdent à leur obsession (le joueur et le maître de jeu doivent se mettre d’accord pour déterminer si le personnage est capable de faire d’autres actions en même temps que son obsession).",
      type: "negative",
      karmaCost: "2",
      book: "feuNourri",
      page: "124",
    },
    {
      key: "On s’y fait",
      description:
        "De l’air que l’on inspire à l’eau que l’on boit, en passant par la terre avec laquelle jouent les enfants, Auburn regorge de toxines. Tous les marmots n’y survivent pas, mais ceux qui y parviennent deviennent plus résistants. Vous gagnez +1 en Constitution pour tout test de Résistance aux toxines.",
      type: "positive",
      karmaCost: "5",
      book: "seattleEmeraude",
      page: "42",
    },
    {
      key: "Opportuniste",
      description:
        "Crime organisé signifie profit organisé, et vous avez suffisamment de contacts pour profiter au maximum de l’organisation criminelle de votre choix pour optimiser les bénéfices. Caveat emptor, il va sans dire que si vous renforcez trop vos liens avec elle, vous pourriez finir Dans ses petits papiers. Vous obtenez un contact Pègre (intermédiaire) au sein du syndicat du crime de votre choix, avec Loyauté 1 et Réseau 3. Celui-ci peut vous acheter et vous vendre des objets ainsi que potentiellement vous proposer du travail.",
      type: "positive",
      karmaCost: "5",
      book: "seattleEmeraude",
      page: "188",
    },
    {
      key: "Optimisation logicielle",
      description:
        "Comment tirer le meilleur de votre matos électronique ? En lançant plus de softs ! Vous pouvez lancer un programme supplémentaire sur n’importe lequel de vos appareils. Quand vous le faites, vous gagnez 1 point d’Atout.",
      type: "positive",
      karmaCost: "10",
      book: "compagnon",
      page: "130",
    },
    {
      key: "Organisme sensible",
      description:
        "Il peut s’agir d’un talent arcanique latent qui ne s’est pas encore manifesté ou juste d’un système immunitaire hyperactif, mais le résultat est le même. Votre corps ne tolère pas que quelque chose de non naturel lui soit greffé ou implanté. Le coût en Essence est doublé pour tout cyberware, bioware et nanoware. Il n’y a aucun malus pour le geneware. Vous ne pouvez avoir ce trait si vous avez un indice de Magie ou de Résonance (notez que le nanoware et le geneware seront abordés dans de futurs suppléments).",
      type: "negative",
      karmaCost: "8",
      book: "ldb",
      page: "80",
    },
    {
      key: "Outsider",
      description:
        "Vous n’êtes pas un chef de peloton. Être à la traîne vous motive à donner le meilleur de vous-même. Ou à partir dans une gerbe de flammes. Dans une poursuite, à chaque fois que quelqu’un bénéficie d’une position avantageuse par rapport à vous (voir p. 175), ajoutez un dé libre à tous vos tests de Pilotage.",
      type: "positive",
      karmaCost: "7",
      book: "tombeauOuvert",
      page: "168",
    },
    {
      key: "Overdrive étendu",
      description:
        "Vous savez comment tirer le maximum de vos augmentations quand le besoin s’en fait sentir. Quand vous amplifiez une de vos augmentations (p. 290, SR6), vous pouvez maintenir l’effet pendant un round par niveau de ce trait (au lieu d’être limité à un seul test). Vous devez utiliser le Dé libre pour chaque test impliquant l’attribut amplifié.",
      type: "positive",
      karmaCost: "6",
      book: "compagnon",
      page: "131",
    },
    {
      key: "Overdrive maximum",
      description:
        "Sur une échelle de un à dix, votre cyber est à onze Quand vous amplifiez votre cyberware (p. 290, SR6), gagnez un point d’Atout. Si vous sur‑sollicitez votre augmentation avec une complication ou un échec critique, le temps de redémarrage de votre matériel diminue d’un round.",
      type: "positive",
      karmaCost: "7",
      book: "compagnon",
      page: "131",
    },
    {
      key: "Pacifiste",
      description:
        "Comme son nom l’indique, ce trait limite la façon dont un personnage pourrait faire usage de violence envers d’autres personnages.  Si celui-ci va délibérément à l’encontre de ses croyances pacifistes, il ne pourra pas dépenser ou gagner d’Atout pendant vingt-quatre heures après avoir commis un acte violent. Tout acte violent commis durant ces vingt-quatre heures augmente la durée pendant laquelle le personnage ne pourra dépenser ou gagner d’Atout, de vingt-quatre heures supplémentaires.",
      type: "negative",
      karmaCost: "5",
      book: "feuNourri",
      page: "124",
    },
    {
      key: "Paparazzi retors",
      description:
        "Êtes-vous abonnés à tous les journaux à scandales de la région? Avez-vous un contact vous confiant toutes les informations juteuses partagées en interne, qui vous retrouve régulièrement dans le kaf shop du coin? Quelle que soit la manière dont vous obtenez vos tuyaux, vous connaissez tout le monde en ville, tout comme leurs secrets. Ces quelques informations peuvent vous rapporter de l’argent ou vous permettre d’éviter bien des mésaventures. Vous obtenez une remise d’Atout de 1 lors des tests de Perception visant à reconnaître un individu et à distinguer les déguisements et impostures. Vous obtenez également les compétences de connaissances Potins de célébrités et Actualités.",
      type: "positive",
      karmaCost: "10",
      book: "seattleEmeraude",
      page: "80",
    },
    {
      key: "Paralysie en combat",
      description:
        "Quel que soit le nombre de fois que votre samouraï des rues vous a amené au stand de tir, vous ne pouvez pas vous empêcher de rester paralysé dès que ça commence à tirer. Bien entendu, vous finissez par réagir, mais vous avez toujours l’impression d’être à la traîne pendant les combats. Votre Score d’Initiative est réduit de moitié au début d’un combat. Vous ne pouvez pas choisir les actions Se déplacer et Sprinter au premier round et vous agissez en dernier au cours de ce round. Après le premier round, vous vous déplacez normalement, mais votre Score d’Initiative ne change pas.",
      type: "negative",
      karmaCost: "8",
      book: "ldb",
      page: "80",
    },
    {
      key: "Pare-feu endommagé",
      description:
        "C’est peut-être de la malchance, ou alors c’est que vous n’arrêtez pas de cliquer sur les mauvais liens matriciels, mais vos firewalls sont de vraies passoires. Quand vous devez faire un test en utilisant le Firewall d’un appareil, votre adversaire gagne un point d’Atout.",
      type: "negative",
      karmaCost: "3",
      book: "tombeauOuvert",
      page: "171",
    },
    {
      key: "Paria",
      description:
        "Autrefois, vous apparteniez à la haute société, mais la roue tourne. Désormais, vous êtes considéré comme un paria. Lorsque vous vous mêlez à la haute société (le genre de personnes qui fréquentent le Grand tour, par exemple, ou d’autres cercles sociaux similaires), vous subissez le désavantage «l’auditeur éprouve un profond dégoût pour l’orateur» lors de l’attribution de l’Atout pour un test de Social (p. 102, SR6).",
      type: "negative",
      karmaCost: "5",
      book: "jeuxPouvoir",
      page: "149",
    },
    {
      key: "Permis de chasse",
      description:
        "Contrairement à un permis de port d’arme standard, un permis de chasse vous autorise à emporter du gibier, traverser la frontière avec des armes de chasse pendant la saison (fusils, arcs ou armes à canon lisse) et à voyager légalement (quoique sous étroite surveillance) entre les territoires salishs et Seattle. Il vous faut un SIN légal, enregistré lors de chaque passage ce qui peut occasionner des délais assez longs, mais c’est une aubaine pour les économies des deux nations et un des rares moyens pour les gens de se procurer de la viande véritable. Vous pouvez traverser la frontière Seattle-Salish sans autorisation ou procédure supplémentaire ; vous pouvez transporter une arme de chasse appropriée sans soulever trop de questions ou d’attention. Tout sac de capacité supérieure à 40 litres sera inspecté.",
      type: "positive",
      karmaCost: "5",
      book: "seattleEmeraude",
      page: "42",
    },
    {
      key: "Personne(s) à charge",
      description:
        "Qu’il s’agisse d’enfants, d’amants ou d’autre chose, des gens dépendent financièrement de vous. Ils vivent dans votre appartement, mangent votre nourriture, utilisent votre compte tridéo et vous coûtent généralement suffisamment d’argent pour que chacune de vos missions soit importante. Personne(s) à charge de niveau 1 est l’équivalent d’un membre de la famille qui ne vit pas avec vous, mais qui a besoin d’être soutenu financièrement. 5 % de vos gains sont attribués à cette personne. Pour ce trait, le pourcentage s’applique à tous vos revenus. Vos gains pour des boulots, le recel de biens volés ou de données de valeur et même vos gains au jeu. Les personnes qui comptent pour vous prospèrent en même temps que vous.",
      type: "negative",
      karmaCost: "4",
      book: "ldb",
      page: "80",
    },
    {
      key: "Phobie",
      description:
        "Vous n’irez jamais volontairement près (dans le sens où le sujet serait assez proche pour que vous pensiez qu’il peut vous nuire immédiatement) de la source de votre phobie. Si vous y êtes forcé, vous ne pourrez pas gagner ou dépenser de l’Atout et vous subirez un malus de –2 dés à votre réserve de dé pour tout test, à l’exception des tests de résistance aux dommages, tant que votre Phobie vous paralyse. Vous devrez également faire un test de Sang-froid (3) toutes les cinq minutes ou interrompre toute activité, vous mettre en boule et espérer que le sujet de votre Phobie s’en aille.",
      type: "negative",
      karmaCost: "3",
      book: "feuNourri",
      page: "124",
    },
    {
      key: "PIHpeauteur",
      description:
        "Vous maîtrisez le système d’évaluation du Persona interne d’Horizon et pouvez le manipuler à partir de n’importe quel faux SIN de la corpo. Quand vous utilisez un SIN Horizon sur une propriété de la corpo, vous gagnez un point d’Atout à chaque interaction sociale donnant lieu à au moins un test.",
      type: "positive",
      karmaCost: "6",
      book: "jeuxPouvoir",
      page: "77",
    },
    {
      key: "Pilote à distance",
      description:
        "Conduire, c’est le pied… du moins quand vous n’êtes pas dans le véhicule. Tous ces mouvements, c’est franchement déstabilisant. Le pilotage à distance, il n’y a que ça de vrai. Vous ne pouvez pas gagner ni dépenser d’Atout quand vous pilotez un véhicule en étant physiquement présent à l’intérieur.",
      type: "negative",
      karmaCost: "12",
      book: "tombeauOuvert",
      page: "171",
    },
    {
      key: "Plus machine que métahumain",
      description:
        "Pour soigner vos blessures, mieux vaut un tournevis qu’un bandage. Vous ne pouvez acquérir ce trait que si votre score d’Essence est de 2 ou moins. Vous faire bénéficier de premiers soins nécessite la compétence Biotech (Cybertechnologie) plutôt que Biotech (Premiers soins). Le seuil est égal à votre Essence (arrondie à l’inférieur).",
      type: "positive",
      karmaCost: "5",
      book: "compagnon",
      page: "131",
    },
    {
      key: "Poissard",
      description:
        "Les événements inattendus, improbables et malheureux sont votre quotidien. Chaque fois que vous obtenez une complication, elle compte comme un échec critique, peu importe le nombre de succès générés.",
      type: "negative",
      karmaCost: "12",
      book: "compagnon",
      page: "133",
    },
    {
      key: "Polyglotte",
      description:
        "Votre truc à vous, c’est les langues. Vous pouvez apprendre de nouvelles compétences de langues au prix de 2 points de Karma. Améliorer le niveau de vos compétences de langues ne vous coûte que 1 point de Karma. Vous pouvez améliorer vos compétences de langues jusqu’au niveau 4 (Langue maternelle).",
      type: "positive",
      karmaCost: "4",
      book: "compagnon",
      page: "131",
    },
    {
      key: "Poseur",
      description:
        "Quel que soit le sang qui coule dans vos veines, il ne correspond pas à ce que vous savez être au fond de vous. Après un peu de chirurgie esthétique ici ou là, quelques cours matriciels de sperethiel ou d’or’zet et beaucoup de temps passé à regarder des documentaires sur les Tír ou le Seattle Underground, et vous voilà prêt à vous joindre à ceux que vous considérez être vos pairs. Un poseur (ou une poseuse) est une personne qui idolâtre un métatype autre que le sien (à préciser au moment du choix du trait) et qui se fait passer pour l’un d’entre eux. Outre de la chirurgie esthétique et de solides connaissances, il faut que la corpulence du personnage le lui permette. Ne comptez pas vous faire passer pour un troll si vous êtes un nain ! Seuls les humains, elfes et orks peuvent prendre ce trait pour se faire passer pour un autre de ces trois métatypes. De façon exceptionnelle, le maître de jeu peut autoriser un ork costaud à se faire passer pour un petit troll, et inversement, et pareillement entre un grand nain et un petit humain. Les personnages du métatype imité bénéficient d’une remise d’Atout pour influencer le poseur. De plus, les gens qui identifient le poseur comme tel peuvent potentiellement devenir condescendants ou méprisant. Dans ce cas, le poseur ne peut plus gagner d’Atout lors de ses interactions sociales avec eux.",
      type: "negative",
      karmaCost: "6",
      book: "ldb",
      page: "80",
    },
    {
      key: "Préjugés [Groupe]",
      description:
        "Vous avez des opinions ou des croyances profondément ancrées en vous au sujet d’un groupe précis d’individus et quoi que les autres puissent dire, vous savez que ces individus sont néfastes. Vous avez une tellement mauvaise opinion à leur égard que vous ne pouvez pas vous concentrer quand ils sont dans les parages. Choisissez un groupe ou un type d’individus. Vous êtes incapable de gagner ou d’utiliser l’Atout tant que l’objet de vos préjugés est présent (sauf si vous vous opposez directement à lui).",
      type: "negative",
      karmaCost: "8",
      book: "ldb",
      page: "81",
    },
    {
      key: "Première impression",
      description:
        "Vous savez vous faire remarquer et marquer les esprits dès la première rencontre. Les personnes que vous rencontrez pour la première fois sont séduites par votre esprit, votre charme et vos flatteries et se montrent moins vigilantes. Quand vous rencontrez quelqu’un pour la première fois, vous gagnez 2 points d’Atout pour vos tests sociaux et votre Pression ainsi que votre Réputation sont ignorées pour cette première rencontre.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "75",
    },
    {
      key: "Prime",
      description:
        "Un individu ou un groupe a placé une prime sur votre tête. Contrairement à un mandat d’arrêt, il s’agit d’une invitation ouverte à tout chasseur de prime professionnel : vous livrer vivant, c’est repartir avec un gros paquet de nuyens. Quand votre niveau de Pression atteint ou dépasse 17, les chasseurs de primes vous collent au train. Vous devez toujours les éviter et regarder par‑dessus votre épaule, sans jamais pouvoir relâcher votre vigilance. Vous commencez chaque séance avec une réserve d’Atout à zéro.",
      type: "negative",
      karmaCost: "10",
      book: "compagnon",
      page: "133",
    },
    {
      key: "Prison dorée",
      description:
        "Vous avez passé un certain temps derrière les barreaux. La plupart des runners considèrent qu’aller en prison signe potentiellement la fin de leur carrière, mais vous savez que ce n’est qu’un changement de paradigme. Vous avez un SIN criminel et vos données biométriques sont enregistrées dans le Registre Mondial des SIN. Vos adversaires reçoivent un point d’Atout lors de leur test de Pistage et pour Traquer une icône. De plus, ce trait double toutes les modifications négatives de votre Réputation personnelle et toutes les modifications positives de votre Pression. Ces effets peuvent être annulés en payant vingt pour cent du coût de votre style de vie mensuel (le plus élevé parmi tous vos faux SIN) supplémentaires pour couvrir vos traces. À noter que ces paiements doivent être effectués à temps et non pas rétroactivement, avant toute modification de vos scores de Réputation et de Pression.",
      type: "positive",
      karmaCost: "12",
      book: "seattleEmeraude",
      page: "187",
    },
    {
      key: "Problèmes de confiance",
      description:
        "On s’est trop joué de vous et vous êtes toujours à l’affût de signes de duperie. Vous ne pouvez gagner ou dépenser de l’Atout sur aucun test d’Influence (Étiquette ou Négociation) ou de Jauger les intentions. Aucun de vos contacts ne peut avoir un indice de Loyauté supérieur à 3. Si vous rejoignez un groupe magique, votre Loyauté ne peut pas dépasser 3.",
      type: "negative",
      karmaCost: "10",
      book: "compagnon",
      page: "133",
    },
    {
      key: "Prodige des arts martiaux",
      description:
        "Vous maîtrisez rapidement tout art martial que vous apprenez. Vous bénéficiez d’une remise de 2 points de Karma pour apprendre un art martial ou de nouvelles techniques (p. 93, Feu Nourri). Vous pouvez combiner plusieurs techniques et arts martiaux lors d’une même période d’entraînement.",
      type: "positive",
      karmaCost: "14",
      book: "compagnon",
      page: "131",
    },
    {
      key: "Rafistoleur (Armes de véhicule)",
      description:
        "Quand vous étiez gosse, vous préfériez vous balader à la casse plutôt qu’au magasin de jouets (peut-être parce que les gamins des Barrens n’ont jamais assez d’argent pour acheter quoi que ce soit dans ce dernier). En grandissant, Choisissez une spécialisation d’Ingénierie. Pour 4 points de Karma, le temps de réparation de base associé est réduit de 10 minutes. Pour 8 points de Karma, le seuil est également diminué de 1.",
      type: "positive",
      karmaCost: "4",
      book: "tombeauOuvert",
      page: "168",
    },
    {
      key: "Rafistoleur (Armurerie)",
      description:
        "Quand vous étiez gosse, vous préfériez vous balader à la casse plutôt qu’au magasin de jouets (peut-être parce que les gamins des Barrens n’ont jamais assez d’argent pour acheter quoi que ce soit dans ce dernier). En grandissant, Choisissez une spécialisation d’Ingénierie. Pour 4 points de Karma, le temps de réparation de base associé est réduit de 10 minutes. Pour 8 points de Karma, le seuil est également diminué de 1.",
      type: "positive",
      karmaCost: "4",
      book: "tombeauOuvert",
      page: "168",
    },
    {
      key: "Rafistoleur (Crochetage)",
      description:
        "Quand vous étiez gosse, vous préfériez vous balader à la casse plutôt qu’au magasin de jouets (peut-être parce que les gamins des Barrens n’ont jamais assez d’argent pour acheter quoi que ce soit dans ce dernier). En grandissant, Choisissez une spécialisation d’Ingénierie. Pour 4 points de Karma, le temps de réparation de base associé est réduit de 10 minutes. Pour 8 points de Karma, le seuil est également diminué de 1.",
      type: "positive",
      karmaCost: "4",
      book: "tombeauOuvert",
      page: "168",
    },
    {
      key: "Rafistoleur (Démolition)",
      description:
        "Quand vous étiez gosse, vous préfériez vous balader à la casse plutôt qu’au magasin de jouets (peut-être parce que les gamins des Barrens n’ont jamais assez d’argent pour acheter quoi que ce soit dans ce dernier). En grandissant, Choisissez une spécialisation d’Ingénierie. Pour 4 points de Karma, le temps de réparation de base associé est réduit de 10 minutes. Pour 8 points de Karma, le seuil est également diminué de 1.",
      type: "positive",
      karmaCost: "4",
      book: "tombeauOuvert",
      page: "168",
    },
    {
      key: "Rafistoleur (Mécanique aéronautique)",
      description:
        "Quand vous étiez gosse, vous préfériez vous balader à la casse plutôt qu’au magasin de jouets (peut-être parce que les gamins des Barrens n’ont jamais assez d’argent pour acheter quoi que ce soit dans ce dernier). En grandissant, Choisissez une spécialisation d’Ingénierie. Pour 4 points de Karma, le temps de réparation de base associé est réduit de 10 minutes. Pour 8 points de Karma, le seuil est également diminué de 1.",
      type: "positive",
      karmaCost: "4",
      book: "tombeauOuvert",
      page: "168",
    },
    {
      key: "Rafistoleur (Mécanique automobile)",
      description:
        "Quand vous étiez gosse, vous préfériez vous balader à la casse plutôt qu’au magasin de jouets (peut-être parce que les gamins des Barrens n’ont jamais assez d’argent pour acheter quoi que ce soit dans ce dernier). En grandissant, Choisissez une spécialisation d’Ingénierie. Pour 4 points de Karma, le temps de réparation de base associé est réduit de 10 minutes. Pour 8 points de Karma, le seuil est également diminué de 1.",
      type: "positive",
      karmaCost: "4",
      book: "tombeauOuvert",
      page: "168",
    },
    {
      key: "Rafistoleur (Mécanique industrielle)",
      description:
        "Quand vous étiez gosse, vous préfériez vous balader à la casse plutôt qu’au magasin de jouets (peut-être parce que les gamins des Barrens n’ont jamais assez d’argent pour acheter quoi que ce soit dans ce dernier). En grandissant, Choisissez une spécialisation d’Ingénierie. Pour 4 points de Karma, le temps de réparation de base associé est réduit de 10 minutes. Pour 8 points de Karma, le seuil est également diminué de 1.",
      type: "positive",
      karmaCost: "4",
      book: "tombeauOuvert",
      page: "168",
    },
    {
      key: "Rafistoleur (Mécanique nautique)",
      description:
        "Quand vous étiez gosse, vous préfériez vous balader à la casse plutôt qu’au magasin de jouets (peut-être parce que les gamins des Barrens n’ont jamais assez d’argent pour acheter quoi que ce soit dans ce dernier). En grandissant, Choisissez une spécialisation d’Ingénierie. Pour 4 points de Karma, le temps de réparation de base associé est réduit de 10 minutes. Pour 8 points de Karma, le seuil est également diminué de 1.",
      type: "positive",
      karmaCost: "4",
      book: "tombeauOuvert",
      page: "168",
    },
    {
      key: "Rage de vivre",
      description:
        "Quoi que vous subissiez, vous avez la volonté de tenir jusqu’au bout. Vous êtes capable d’encaisser une balle calibre .50 dans la poitrine et de vous réveiller à l’hôpital, plutôt que de ne plus jamais vous réveiller. Pour chaque niveau de ce trait, vous gagnez deux cases supplémentaires de surplus de dommages (voir p. 123).",
      type: "positive",
      karmaCost: "8",
      book: "ldb",
      page: "75",
    },
    {
      key: "Renfort",
      description:
        "Vous vous êtes heurté à suffisamment de CI et de personas dans la Matrice et vous avez commencé à renforcer vos défenses. Votre forme physique vous aide à absorber une partie des blessures infligées à votre persona matriciel. Vos tests de résistance aux dommages matriciels bénéficient d’une remise d’Atout de 1. De plus, quand vous subissez des dommages dans la Matrice, vous pouvez convertir jusqu’à deux cases de dommages matriciels en dommages étourdissants, protégeant ainsi votre persona aux dépens de votre corps physique.",
      type: "positive",
      karmaCost: "10",
      book: "ldb",
      page: "75",
    },
    {
      key: "Représentation (niveau 1)",
      description:
        "Certains professeurs des arcanes proposent des techniques supplémentaires, appelées représentations, à leurs étudiants pour compléter leur apprentissage. Bien que la plupart de ces étudiants, en devenant de plus en plus confiants, se défont petit à petit de ces techniques, d’autres les trouvent rassurantes ou utiles et les gardent. Ce trait est accessible aux mages et adeptes mystiques, mais pas aux adeptes. Le magicien définit une action bien visible ou audible : des gestes, des mots à prononcer, des chants ou autre. Elle devra être réalisée à chaque fois qu’il utilisera ses pouvoirs arcaniques. Sinon, il peut également porter un costume ou une tenue spéciale (ou aucune). L’acte ou l’habit ne peut pas être classique ou insignifiant (ex. : des vêtements débraillés ou particulièrement originaux), il doit éveiller les soupçons des passants, même ceux des ordinaires, et leur indiquer que du mojo est à l’œuvre. Sous la forme simple de ce trait (1), le magicien n’est pas forcé d’utiliser sa représentation, mais s’il ne le fait pas, il devra subir un malus de -4 à sa réserve de dés pour tous les tests d’Astral, de Conjuration, d’Enchantement et de Sorcellerie. L’autre inconvénient de ce trait, c’est qu’il indique aux ennemis que le magicien est la «personne dangereuse» et si les adversaires suivent la bonne vieille devise «butez le mage en premier», cela le met en danger de mort. Mais malgré ces inconvénients, ce trait lui octroie un avantage : une fois par jour, lorsque le magicien réalise sa représentation en utilisant ses pouvoirs arcaniques, il gagne une remise d’Atout de 1 pour ce test.",
      type: "negative",
      karmaCost: "5",
      book: "voiesOccultes",
      page: "111",
    },
    {
      key: "Représentation (niveau 2)",
      description:
        "Certains professeurs des arcanes proposent des techniques supplémentaires, appelées représentations, à leurs étudiants pour compléter leur apprentissage. Bien que la plupart de ces étudiants, en devenant de plus en plus confiants, se défont petit à petit de ces techniques, d’autres les trouvent rassurantes ou utiles et les gardent. Ce trait est accessible aux mages et adeptes mystiques, mais pas aux adeptes. Le magicien définit une action bien visible ou audible : des gestes, des mots à prononcer, des chants ou autre. Elle devra être réalisée à chaque fois qu’il utilisera ses pouvoirs arcaniques. Sinon, il peut également porter un costume ou une tenue spéciale (ou aucune). L’acte ou l’habit ne peut pas être classique ou insignifiant (ex. : des vêtements débraillés ou particulièrement originaux), il doit éveiller les soupçons des passants, même ceux des ordinaires, et leur indiquer que du mojo est à l’œuvre.  L’autre inconvénient de ce trait, c’est qu’il indique aux ennemis que le magicien est la «personne dangereuse» et si les adversaires suivent la bonne vieille devise «butez le mage en premier», cela le met en danger de mort. Mais malgré ces inconvénients, ce trait lui octroie un avantage : une fois par jour, lorsque le magicien réalise sa représentation en utilisant ses pouvoirs arcaniques, il gagne une remise d’Atout de 1 pour ce test.",
      type: "negative",
      karmaCost: "8",
      book: "voiesOccultes",
      page: "111",
    },
    {
      key: "Résistance (électricité)",
      description:
        "Grâce à la génétique et aux entraînements, vous avez développé une forte résistance et tolérance à certaines formes d’énergies néfastes (ou à l’absence d’énergie dans le cas du froid). Quand vous choisissez ce trait, choisissez un type de dommages élémentaires (p. 113). Quand vous subissez une attaque qui inflige ce type de dommages, vous bénéficiez d’une remise d’Atout de 1 sur votre test de défense.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "75",
    },
    {
      key: "Résistance (feu)",
      description:
        "Grâce à la génétique et aux entraînements, vous avez développé une forte résistance et tolérance à certaines formes d’énergies néfastes (ou à l’absence d’énergie dans le cas du froid). Quand vous choisissez ce trait, choisissez un type de dommages élémentaires (p. 113). Quand vous subissez une attaque qui inflige ce type de dommages, vous bénéficiez d’une remise d’Atout de 1 sur votre test de défense.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "75",
    },
    {
      key: "Résistance (froid)",
      description:
        "Grâce à la génétique et aux entraînements, vous avez développé une forte résistance et tolérance à certaines formes d’énergies néfastes (ou à l’absence d’énergie dans le cas du froid). Quand vous choisissez ce trait, choisissez un type de dommages élémentaires (p. 113). Quand vous subissez une attaque qui inflige ce type de dommages, vous bénéficiez d’une remise d’Atout de 1 sur votre test de défense.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "75",
    },
    {
      key: "Résistance (produits chimiques)",
      description:
        "Grâce à la génétique et aux entraînements, vous avez développé une forte résistance et tolérance à certaines formes d’énergies néfastes (ou à l’absence d’énergie dans le cas du froid). Quand vous choisissez ce trait, choisissez un type de dommages élémentaires (p. 113). Quand vous subissez une attaque qui inflige ce type de dommages, vous bénéficiez d’une remise d’Atout de 1 sur votre test de défense.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "75",
    },
    {
      key: "Résistance à la magie",
      description:
        "Il se peut que vous soyez né sous une lune rouge, que vous vous soyez injecté des substances étrangères dans le corps ou qu’une partie de votre âme ait été absorbée par un esprit ou un vampire. Que ce soit une bonne chose ou non, le mana semble avoir des difficultés à se connecter à vous. Que ce soit un Éclair mana qui risque de vous griller le cerveau ou une Sphère de feu pour vous incinérer vivant, ou même un sort de soins pour refermer vos blessures, la magie a plus de mal à vous affecter. Vous bénéficiez d’une remise d’Atout de 1 sur tous les tests de résistance à la magie. Cependant, quand on vous lance un sort de Santé, considérez que votre Essence est inférieure de 2 points à sa valeur réelle.",
      type: "positive",
      karmaCost: "8",
      book: "ldb",
      page: "75",
    },
    {
      key: "Résistance à la magie du sang",
      description:
        "Pour une raison ou une autre, la magie du sang fonctionne mal sur vous Tous les pratiquants de la magie du sang subissent un malus de -2 dés quand ils lancent un rituel ou un sort de cette discipline contre vous, et ils ne peuvent gagner qu’1 point d’Atout par tour en votre présence (remplaçant le maximum normal qui est de 2).",
      type: "positive",
      karmaCost: "12",
      book: "jeuxPouvoir",
      page: "51",
    },
    {
      key: "Résistance aux pathogènes",
      description:
        "Quand vous affirmez ne jamais avoir été malade de votre vie, il est fort probable que ce soit vrai. Vous avez un système immunitaire très performant qui a maîtrisé l’art de combattre tout ce qui peut tenter d’envahir votre corps et de vous rendre malade. Vous bénéficiez d’une remise d’Atout de 1 sur tous vos tests de résistance aux pathogènes.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "75",
    },
    {
      key: "Résistances aux toxines",
      description:
        "Que vous ayez des organes naturellement plus performants ou que vous pensiez que vous faire mordre par un serpent tous les jours est un passe-temps amusant, vous êtes capable de résister aux effets des toxines du Sixième Monde. Vous bénéficiez d’une remise d’Atout de 1 sur tous vos tests de résistance aux toxines.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "75",
    },
    {
      key: "Rêveur éveillé",
      description:
        "Aujourd’hui, vous n’êtes personne, rien qu’un métahumain parmi tant d’autres, qui n’a pas reçu sa part du gâteau. Néanmoins, cela va changer. Que vous soyez un ganger de Zone-Z ambitieux ou un magicien des rues conscient de sa valeur, vous savez que vous n’allez pas vivre éternellement dans les bas quartiers. Les Ombres sont votre porte de sortie, et les intermédiaires tout comme les M. Johnson adorent nourrir votre détermination. Bien sûr, personne n’a des étoiles dans les yeux ou de l’ambition éternellement. Que vous cherchiez à obtenir la fortune ou la gloire, tôt ou tard, vous réussirez, et le bel enthousiasme de votre jeunesse se fanera. En revanche, personne ne pourra ignorer que votre parcours aura fait de vous celui ou celle que vous êtes aujourd’hui. Lorsque vous aurez atteint votre objectif, vous pourrez remplacer Rêveur éveillé par L’école de la rue. Vous bénéficiez d’une remise d’Atout de 1 lorsque vous effectuez des tests de négociation contre des intermédiaires et des M. Johnson. De plus, vous pouvez gagner un point d’Atout par session sur tout test vous permettant de poursuivre vos rêves les plus fous.",
      type: "positive",
      karmaCost: "10",
      book: "seattleEmeraude",
      page: "148",
    },
    {
      key: "rEVOlutionnaire",
      description:
        "Vous êtes familier avec le fonctionnement d’Evo et avez manié assez de ses prototypes pour savoir comment les faire fonctionner sans problème. Lorsque le possesseur de ce trait utilise une arme rEVOlution Arms (Feu Nourri, p. 36), il peut choisir de ne pas lancer le Dé libre.",
      type: "positive",
      karmaCost: "10",
      book: "jeuxPouvoir",
      page: "64",
    },
    {
      key: "Robin des bois",
      description:
        "Quelque chose vous pousse à aider les autres. Chaque mois vous devez faire don d’au moins 1000¥ par niveau de ce trait. Les bénéficiaires ne peuvent faire partie ni de votre famille, ni de votre équipe. Vous pouvez utiliser cet argent pour acquérir des faveurs auprès de vos contacts ou travailler pour le peuple. Si vous ne pouvez pas distribuer cet argent, cela vous rend anxieux et vous fait vous sentir coupable. Vos adversaires bénéficient d’une remise d’Atout de 1 sur tous leurs tests opposés contre vous. Le maximum que vous devez payer par mois est de 1000¥ par niveau, il ne s’accumule pas en cas de retard.",
      type: "negative",
      karmaCost: "5",
      book: "compagnon",
      page: "133",
    },
    {
      key: "Robuste",
      description:
        "Vous êtes bâti comme une armoire à glace. Vous pouvez encaisser quelques coups supplémentaires avant d’être neutralisé. Vous avez un nombre de cases supplémentaires sur votre Moniteur de dommages physiques égal à votre rang dans ce trait.",
      type: "positive",
      karmaCost: "4",
      book: "ldb",
      page: "76",
    },
    {
      key: "Roi de la casse",
      description:
        "Oui oui, c’est une pièce de Harley… enfin, c’est compatible… à peu près… c’est juste pas le fabricant d’origine, quoi. Vous pouvez payer plus cher pour une pièce officielle, mais entre vous et moi elle sort de chez le même sous-traitant d’Aztlan; elle a juste fait un petit détour par Hong Kong Le PJ dispose de plus de facilités pour réparer ou modifier son véhicule avec des pièces à l’adéquation approximative. Pour 4 points de Karma, quand vous cherchez des pièces d’occasion, réduisez la Disponibilité de 1 (voir p. 163, test d’Atout). Pour 8 points de Karma, quand vous utilisez ces pièces lors d’un test de réparation (voir p. 163), la pénalité appliquée au seuil est également diminuée de 1.",
      type: "positive",
      karmaCost: "4",
      book: "tombeauOuvert",
      page: "168",
    },
    {
      key: "S-Kondescendant",
      description:
        "Bien qu’il soit fréquent que les employés et citoyens d’une corporation, en particulier si celle-ci est extraterritoriale, développent une certaine forme d’élitisme, cette attitude est très répandue au sein de Saeder-Krupp. L’élitisme s’apparente à du racisme, excepté qu’au lieu de détester des gens selon leurs origines, leur culture, leur couleur de peau, leur ethnicité ou leur métatype, les élitistes méprisent les gens selon leur classe et leur statut social. Généralement, cela revient à dire que les riches n’aiment pas les pauvres, mais également que les citoyens corporatistes détestent les citoyens non corporatistes et les SINless. Le terme «S-Kondescendant» a été inventé pour qualifier ces gens-là, qui prédominent au sein de la méga, mais il donne l’impression que ces personnes sont bien plus sympathiques qu’elles ne le sont réellement. En choisissant ce trait, vous obtenez un point d’Atout pour tous vos tests sociaux, lorsque vous interagissez avec un employé de S-K (ancien ou actuel), ainsi qu’avec toute autre personne possédant ce trait. Cependant, lorsque vous vous adressez à un individu avec un style de vie bas, inférieur au vôtre ou qui ne possède pas de SIN, vous ne pouvez pas gagner ni dépenser d’Atout en sa présence (sauf pour l’attaquer).",
      type: "negative",
      karmaCost: "5",
      book: "jeuxPouvoir",
      page: "122",
    },
    {
      key: "Sensibilité à la douleur",
      description:
        "Vous avez les nerfs sensibles et une nature globalement douillette. Quelle que soit la raison, vous êtes très affecté par les blessures et l’inconfort. Tous les modificateurs de blessure sont doublés.",
      type: "negative",
      karmaCost: "10",
      book: "ldb",
      page: "81",
    },
    {
      key: "SINner",
      description:
        "Contrairement à beaucoup de runners, qui n’ont pas de SIN ou un SIN criminel, vous avez un SIN légal lié à des données biométriques. Vous y êtes suffisamment attaché, à cause d’une famille ou d’un intérêt personnel, pour ne pas pouvoir le brûler. Vous payez des impôts à l’entité qui a émis le SIN, qu’il s’agisse d’une mégacorporation ou d’une nation. Cela représente une augmentation de 10 % du coût de votre style de vie. En raison des données enregistrées dans le Registre Mondial des SIN, il est plus facile de vous traquer ou de vous identifier, ce qui octroie à vos adversaires une remise d’Atout de 1 à chaque fois qu’ils tentent l’action Traquer une icône contre vous.",
      type: "negative",
      karmaCost: "8",
      book: "ldb",
      page: "81",
    },
    {
      key: "Spécialiste",
      description:
        "Vous avez gagné vos compétences à la sueur de votre front, mais cela a un prix. Vous êtes vraiment doué dans un domaine, mais cette fixation vous a rendu moins bon dans les autres. Choisissez une de vos compétences. Quand vous l’utilisez en dehors du champ d’application d’une spécialisation ou d’une expertise, vous ne pouvez ni gagner ni dépenser d’Atout.",
      type: "negative",
      karmaCost: "8",
      book: "tombeauOuvert",
      page: "171",
    },
    {
      key: "Style de conduite: As du combat",
      description:
        "Pour vous, une vitesse élevée et des virages serrés ne sont pas encore assez dangereux. Que ce soit lors d’une fusillade dans les airs, dans un combat de motards ou sur l’autoroute pendant une escarmouche face aux 405 Hellhounds, vous savez mêler mobilité et force de frappe. Le coût des actions d’Atout suivantes est réduit de moitié (la nouvelle valeur est placée entre parenthèses): • Assaut (2 points d’Atout) • Ciblage automatique (3 Points d’Atout) • Feu croisé (3 points d’Atout) • Quitte ou double (1, 2 ou 3 points d’Atout sur lors des tests d’Ingénierie [Armes de véhicule]).",
      type: "positive",
      karmaCost: "12",
      book: "tombeauOuvert",
      page: "168",
    },
    {
      key: "Style de conduite: Cascadeur",
      description:
        "Le légendaire Evel Knievel est votre idole et vous adorez littéralement les cascades dans les tridéos. Que personne ne vienne vous dire que ce sont des trucages ou des ORA! Le coût des actions d’Atout suivantes est réduit de moitié (la nouvelle valeur est placée entre parenthèses): • Demi-tour (1 point d’Atout) • Tokyo Drift (1 point d’Atout) • Auto-stop (2 points d’Atout) • Par ici la sortie (3 points d’Atout)",
      type: "positive",
      karmaCost: "9",
      book: "tombeauOuvert",
      page: "168",
    },
    {
      key: "Style de conduite: Chauffard",
      description:
        "Vous prenez des risques à la moindre occasion, comptant sur votre chance et la nature chaotique et imprévisible d’une poursuite pour parvenir à vos fins. Vous refusez tout compromis. Soit vous gagnez le gros lot, soit vous explosez dans une gerbe de flammes. Voire les deux! Le coût des actions d’Atout suivantes est réduit de moitié (la nouvelle valeur est placée entre parenthèses): • Quitte ou double (1, 2 ou 3 points d’Atout) uniquement lors des tests de Pilotage • Poule mouillée (3 points d’Atout) • Compteurs à zéro (1 point d’Atout) • Surenchère (1, 2 ou 3 points d’Atout)",
      type: "positive",
      karmaCost: "8",
      book: "tombeauOuvert",
      page: "169",
    },
    {
      key: "Style de conduite: Intercepteur",
      description:
        "Quand vous traquez une cible, vous savez comment faire en sorte qu’elle ne s’en sorte pas. Le coût des actions d’Atout suivantes est réduit de moitié (la nouvelle valeur est placée entre parenthèses, arrondie à l’inférieur si nécessaire): • Dans le rouge (2 points d’Atout) • Concentration (1 point d’Atout) • Dans ma bulle (2 points d’Atout) • Quitte ou double (1, 2 ou 3 points d’Atout), uniquement lors des tests pendant une filature ou que vous poursuivez une cible.",
      type: "positive",
      karmaCost: "8",
      book: "tombeauOuvert",
      page: "169",
    },
    {
      key: "Style de conduite: Pro de l’évasion",
      description:
        "Vous connaissez quelques manœuvres bien pratiques pour semer des poursuivants, ce qui vous arrive sans doute plus souvent qu’à votre tour. Le coût des actions d’Atout suivantes est réduit de moitié (la nouvelle valeur est placée entre parenthèses): • Semer les poursuivants (2 ou 4 points d’Atout) • Manoeuvre d’évitement (2 points d’Atout) • Fuite ! (2 points d’Atout) • Quitte ou double (1, 2 ou 3 points d’Atout), uniquement lors des tests de défense quand vous pilotez un véhicule",
      type: "positive",
      karmaCost: "10",
      book: "tombeauOuvert",
      page: "169",
    },
    {
      key: "Style distinctif",
      description:
        "Vous ne passez pas inaperçu. Vous avez un style et une manière uniques de vous habiller. Ce n’est pas simplement une crête rose ou un trench-coat noir caractéristique. Il s’agit plutôt d’un lézard issu de la GRIME de deux mètres de haut avec un jabot arc-en-ciel et une tête pleine de piercings avec un anneau dans le museau et habillé en punk. Ou un ork albinos qui porte des lunettes de soleil blanches et un trench-coat blanc par-dessus un costume blanc. Tout style distinctif est bien autre chose que la manière dont vous vous habillez, c’est un mode de vie. Vous ne pouvez pas gagner ou dépenser de l’Atout si vous n’affichez pas votre style distinctif. Les autres ont un bonus de +2 dés pour leurs tests de Mémoire (p. 106) afin de se souvenir de votre apparence ou se rappeler s’ils vous ont déjà vu.",
      type: "negative",
      karmaCost: "6",
      book: "ldb",
      page: "81",
    },
    {
      key: "Sujet aux accidents",
      description:
        "Quand les choses partent en sucette, vous avez plus de mal à tirer votre épingle du jeu. Quand vous obtenez une complication ou un échec critique, vous ne pouvez pas influencer le résultat en dépensant de l’Atout.",
      type: "negative",
      karmaCost: "3",
      book: "tombeauOuvert",
      page: "171",
    },
    {
      key: "Sujet aux blessures",
      description:
        "Quand vous êtes blessé, c’est toujours gravement. Chaque fois que vous subissez des dommages (quelle qu’en soit la source), cochez une case supplémentaire du même type (physique ou étourdissant).",
      type: "negative",
      karmaCost: "15",
      book: "compagnon",
      page: "133",
    },
    {
      key: "Syndiqué",
      description:
        "Vous êtes plus qu’un sympathisant: vous êtes membre officiel d’un syndicat ouvrier. Vous êtes au courant de toutes les dernières nouvelles ou grèves en cours et pouvez toujours compter sur les autres membres pour vous soutenir quand les grands patrons corporatistes deviennent trop gourmands. Vous ne trahirez jamais un piquet de grève et ne soutiendrez jamais un jaune. Gagnez 1 point d’Atout lors de vos interactions avec un membre de n’importe quel syndicat ouvrier.",
      type: "positive",
      karmaCost: "8",
      book: "seattleEmeraude",
      page: "42",
    },
    {
      key: "Syndrome d’accumulation du matériel",
      description:
        "Comme on dit : face à l’adversité, rien ne vaut une bonne séance de shopping. En tout cas, c’est ce que vous dites, vous ! Vous devez posséder au moins une spécialisation ou maîtrise de compétence pour choisir ce trait. Effet en jeu : chaque mois vous devez dépenser au moins 1000¥ par niveau de ce trait en matériel. Si vous êtes dans l’impossibilité de le faire, cela vous rend triste ou anxieux. Vous perdez les bénéfices de toutes vos spécialités et maîtrises jusqu’à ce que vous puissiez satisfaire vos pulsions dépensières. Même si vous prenez du retard, le montant que vous devez dépenser par mois ne se cumule pas.",
      type: "negative",
      karmaCost: "5",
      book: "compagnon",
      page: "133",
    },
    {
      key: "Talents multiples",
      description:
        "Vous n’êtes pas limité à un seul attribut maximisé lors de la création de personnage. Ce trait ne peut être choisi qu’à la création de personnage. Vous pouvez attribuer la valeur maximale pour votre métatype à deux attributs.",
      type: "positive",
      karmaCost: "18",
      book: "compagnon",
      page: "131",
    },
    {
      key: "Taupe",
      description:
        "Vous avez un contact chez Ares, plus précisément, au sein de Knight Errant. Cette relation peut influer sur la manière dont les forces de l’ordre vous traitent. Votre influence ne vous permet pas de vous en tirer quoi qu’il advienne, mais cela peut faciliter les interactions houleuses avec le système de répression. Lorsque vous choisissez ce trait, vous obtenez un contact chez Knight Errant avec Réseau 2 et Loyauté 2. Afin d’en tirer parti, vous devez a) vous faire arrêter ou emprisonner par les forces de l’ordre et b) être capable de contacter cette personne, que ce soit par commcall, message ou d’une autre manière. Si vous remplissez ces conditions, l’influence ou les conseils de votre contact sur la façon de se comporter face aux forces de l’ordre vous octroient +2 dés à tous les tests de Social contre les forces de l’ordre ou les professionnels de la justice pénale liés à situation en cours, quelle que soit la corporation à laquelle ils appartiennent. Votre contact ne peut vous sortir du pétrin qu’une fois par semaine.",
      type: "positive",
      karmaCost: "12",
      book: "jeuxPouvoir",
      page: "37",
    },
    {
      key: "Territoire",
      description:
        "Si on passe suffisamment de temps quelque part, on finit par connaître cet endroit sur le bout des doigts. Vous connaissez chaque recoin de ce quartier, chaque ruelle, chaque boutique, les rivalités et les romances locales et vous êtes capable d’utiliser toutes ces connaissances à votre avantage. Dans la Matrice, vous avez passé un nombre incalculable d’heures dans le code, vous connaissez ses gremlins, ses tics, ses avatars locaux et ceux qui n’ont rien à faire là. Choisissez un quartier ou un serveur matriciel à chaque fois que vous choisissez ce trait. Les tests de Plein air et de Perception que vous effectuez sur votre territoire bénéficient d’une remise d’Atout de 1.",
      type: "positive",
      karmaCost: "10",
      book: "ldb",
      page: "76",
    },
    {
      key: "Toujours en retard",
      description:
        "Vous arrivez tout le temps avec au moins quinze minutes de retard à chaque événement prévu. Lorsque l’événement en question est une rencontre avec un employeur potentiel, votre équipe subit un malus de –1 à ses tests de Social contre M. Johnson à cause de votre manque de professionnalisme.",
      type: "negative",
      karmaCost: "2",
      book: "feuNourri",
      page: "124",
    },
    {
      key: "Toujours prêt",
      description:
        "Quand vous êtes sur la route (ou dans tout autre type de transport), vous êtes toujours à l’affût et prêt à engager une course-poursuite. Quand votre réserve de course-poursuite (voir p. 175) devient disponible, elle contient 1 point d’Atout par niveau (limité à la taille de votre réserve).",
      type: "positive",
      karmaCost: "8",
      book: "tombeauOuvert",
      page: "170",
    },
    {
      key: "Tradition de possession",
      description:
        "Le conjurateur n’a jamais appris à invoquer les esprits pour qu’ils se manifestent sur le plan physique ou, pour on ne sais quelle raison, s’abstient volontairement de le faire. Ce trait ne peut être sélectionné que par les personnages qui possèdent la compétence Conjuration. Les esprits invoqués par un magicien de cette tradition remplacent leur pouvoir Matérialisation par le pouvoir Possession (p. 70).",
      type: "negative",
      karmaCost: "10",
      book: "voiesOccultes",
      page: "111",
    },
    {
      key: "Traqué",
      description:
        "Quelqu’un veut vous voir mort, et il a les moyens de sa politique. Quand votre Pression est de 15 ou plus, les assassins vous rattrapent. Vous vous en tirez toujours d’un cheveu, mais jamais indemne. Au début de chaque séance (après avoir réinitialisé votre Atout), faites un test de Constitution pour résister à des dommages de (7+1 par niveau de ce trait) P. Vous pouvez traiter ces blessures avec tout moyen à court terme (premiers soins, médikit, sorts, etc.) mais ne pouvez bénéficier de soins longue durée avant le début de la séance.",
      type: "negative",
      karmaCost: "5",
      book: "compagnon",
      page: "133",
    },
    {
      key: "Traqueur implacable",
      description:
        "Ils peuvent courir et se cacher autant qu’ils veulent, jamais ils ne vous échapperont. Vous gagnez 1 point d’Atout quand vous utilisez la compétence Plein Air (Pistage).",
      type: "positive",
      karmaCost: "6",
      book: "compagnon",
      page: "131",
    },
    {
      key: "Traumatisme",
      description:
        "Il y a une situation sociale que vous ne supportez pas, comme vous retrouver avec de nombreuses personnes, parler à des inconnus, attirer tous les regards, ne pas être au centre des attentions ou une myriade d’autres situations que les autres considèrent comme normales, mais que vous trouvez particulièrement stressantes. Choisissez un traumatisme social précis. Quand vous y êtes confronté, vous devez effectuer un test de Charisme (2) en tant qu’action mineure. Si vous échouez, vous ne pouvez pas gagner ou dépenser de l’Atout tant que vous n’avez pas réussi. Vous pouvez choisir de ne pas effectuer ce test, mais, dans ce cas, tous les tests dirigés contre vous bénéficient d’un point d’Atout bonus.",
      type: "negative",
      karmaCost: "8",
      book: "ldb",
      page: "81",
    },
    {
      key: "Tremblement des mains",
      description:
        "Tics nerveux, caféinomanie ou maladresse congénitale, peu importe la raison : vous seriez incapable de tracer une ligne droite même si votre vie en dépendait. Vous avez aussi un mal fou à utiliser un clavier, à nouer vos lacets de chaussures et à maintenir une lunette de visée sur une cible. Vous ne pouvez pas dépenser de l’Atout pour des tests utilisant l’Agilité et qui nécessitent l’utilisation de vos mains (c’est à dire un test de Furtivité pour effectuer un tour de passe-passe impliquant directement les mains ainsi qu’un test d’attaque avec une arme en main, mais pas un test d’Athlétisme pour courir même si vous bougez les mains dans ce cas).",
      type: "negative",
      karmaCost: "6",
      book: "ldb",
      page: "81",
    },
    {
      key: "Tripes",
      description:
        "Ce n’est pas que vous n’éprouviez pas la peur, c’est que vous êtes incapable de vous laisser impressionner. Vous pouvez faire face à n’importe quel adversaire, même les plus impressionnants, et aucun interrogatoire ne peut vous faire craquer. Vous bénéficiez d’une remise d’Atout de 1 sur tous vos tests pour résister à l’Intimidation ou aux effets qui provoquent l’état Effrayé.",
      type: "positive",
      karmaCost: "12",
      book: "ldb",
      page: "76",
    },
    {
      key: "Tu as peut-être manqué quelque chose",
      description:
        "Lorsque vous vous trouvez dans une situation potentiellement dangereuse, vous devez prendre toutes les précautions possibles pour repérer les menaces éventuelles. Si un autre membre de l’équipe l’a déjà fait, vous devez passer au moins autant de temps que lui pour compléter cette même tâche, même si cela agace vos coéquipiers (comme le decker qui passe un savon au samouraï des rues pour avoir «contrôlé la qualité de son travail»). ",
      type: "negative",
      karmaCost: "2",
      book: "feuNourri",
      page: "124",
    },
    {
      key: "Tueur",
      description:
        "En combat vous préférez achever vos ennemis, pour éliminer les témoins et toute tentative de vengeance ultérieure. Vous ne pouvez pas gagner ou dépenser d’Atout quand vous utilisez un sort ou une attaque infligeant des dommages étourdissants.",
      type: "negative",
      karmaCost: "4",
      book: "compagnon",
      page: "134",
    },
    {
      key: "Vashonista",
      description:
        "Né et élevé sur Vashon, vous maîtrisez la mode sur le bout des doigts et êtes conscient de l’impact social qu’elle produit sur ceux qui vous entourent. Vous comprenez les choix vestimentaires d’autrui et savez adapter votre propre style. Vous obtenez un point d’Atout pour toute rencontre sociale en face à face où la tenue vestimentaire peut avoir un impact, même minime.",
      type: "positive",
      karmaCost: "10",
      book: "seattleEmeraude",
      page: "121",
    },
    {
      key: "Véhicules à gogo",
      description:
        "À l’image d’un face qui dispose de contacts, un rigger peut investir dans de nombreux ateliers de désossage, casses, surplus et revendeurs d’occasion. Grâce à eux, il peut avoir accès à divers moyens de transport en dehors de son propre véhicule. Pour 3 points de Karma: Trajet gratuit Votre personnage trouve toujours un moyen de se déplacer. Une fois par jour au prix d’un test d’Influence + Charisme (4) réussi, il obtient un trajet gratuit à bord d’un véhicule (transport en commun, auto-stop, bus de fêtards, etc.) qui l’amène près de la destination de son choix. Pour 6 points de Karma : Véhicule de remplacement. Quand il utilise Trajet gratuit, le personnage peut choisir de dépenser 2 points d’Atout pour disposer gratuitement d’un véhicule du marché similaire au sien, utilisable comme bon lui semble pendant une journée. Pour 9 points de Karma : Transport alternatif. Au prix d’un test d’Influence + Charisme (4) réussi, le personnage peut dépenser 4 points d’Atout pour obtenir l’accès à un moyen de transport spécial (avion, bateau, sous-marin, etc.) utilisable comme bon lui semble pendant une journée. Le maître de jeu a le dernier mot sur ce qui est accessible. Note : Si le PJ rend un véhicule endommagé, il doit payer pour les réparations ou les effectuer lui-même. Un remboursement en faveurs est tout à fait possible. Tous les effets liés au trait Véhicules à gogo sont cumulables.",
      type: "positive",
      karmaCost: "3",
      book: "tombeauOuvert",
      page: "170",
    },
    {
      key: "Vertiges RA",
      description:
        "Que ce soit à cause de la surcharge d’informations, d’un problème de focalisation dans votre champ de vision ou juste d’une incapacité à vous concentrer quand il y a tant de choses à regarder, vous vous sentez nauséeux et vous avez des vertiges quand vous utilisez la Réalité Augmentée (voir p. 173). Vous ne pouvez pas gagner ou dépenser de l’Atout quand vous utilisez n’importe quelle forme de RA. Vous gagnez aussi l’état Nauséeux (p. 57) quand vous utilisez la RA et pendant une heure après avoir quitté ce mode.",
      type: "negative",
      karmaCost: "4",
      book: "ldb",
      page: "81",
    },
    {
      key: "Vie saine",
      description:
        "Vous avez grandi dans le grenier du pays et, de ce fait, toujours eu accès à la meilleure nourriture possible. Aujourd’hui, vous êtes devenu grand et fort, comme vos parents vous l’avaient promis. Vous pouvez augmenter votre attribut de Constitution de 1 immédiatement après avoir sélectionné ce trait. Cela ne vous coûtera aucun point de Karma, mais vous devrez augmenter votre style de vie de 500 nuyens par mois. Si vous ne pouvez plus payer ce surcoût ou si vous passez trop de temps dans un lieu dépourvu de nourriture de qualité, vous perdrez 2 points de Constitution (jusqu’à un minimum de 1) jusqu’à ce que vous puissiez reprendre votre régime habituel. Ce trait n’augmente pas le maximum de votre attribut Constitution.",
      type: "positive",
      karmaCost: "10",
      book: "seattleEmeraude",
      page: "174",
    },
    {
      key: "Vision nocturne",
      description:
        "Grâce à l’augmentation naturelle de cellules à bâtonnet dans vos yeux, à l’implantation de ces mêmes cellules ou une augmentation qui accroît la luminosité des données perçues, vous êtes capable de voir dans des circonstances dans lesquelles les autres seraient aveugles. Vous voyez clairement, quel que soit le niveau de luminosité à l’exception de l’obscurité totale (voir Environnement et visibilité, p. 115).",
      type: "positive",
      karmaCost: "6",
      book: "ldb",
      page: "76",
    },
    {
      key: "Vision thermographique",
      description:
        "Grâce à des amplifications ou juste la génétique, votre vision vous permet de voir les différences de températures sur et autour des objets et des personnes, mais la plupart du temps la lumière ambiante normale masque les signatures thermiques. De fortes sources de chaleur peuvent produire une sorte de lueur, mais généralement quelque chose qui émet autant de chaleur dégage aussi beaucoup de lumière et votre vision normale vous suffit. Vous pouvez voir la chaleur des choses dans l’obscurité totale (si elles sont plus chaudes ou plus froides que la température ambiante), ce qui vous permet d’agir dans ces conditions.",
      type: "positive",
      karmaCost: "8",
      book: "ldb",
      page: "76",
    },
    {
      key: "Vulnérabilité à une toxine (gamma‑scopolamine)",
      description:
        "Vous êtes particulièrement sensible à une toxine commune. Quand vous y êtes soumis, augmentez sa virulence de 2. Dans ce cas précis, vous ne pouvez pas gagner ou dépenser d’Atout sur vos tests de Résistance aux toxines.",
      type: "negative",
      karmaCost: "2",
      book: "compagnon",
      page: "134",
    },
    {
      key: "Vulnérabilité à une toxine (gaz lacrymogène/incapacitant)",
      description:
        "Vous êtes particulièrement sensible à une toxine commune. Quand vous y êtes soumis, augmentez sa virulence de 2. Dans ce cas précis, vous ne pouvez pas gagner ou dépenser d’Atout sur vos tests de Résistance aux toxines.",
      type: "negative",
      karmaCost: "2",
      book: "compagnon",
      page: "134",
    },
    {
      key: "Vulnérabilité à une toxine (gaz poivre)",
      description:
        "Vous êtes particulièrement sensible à une toxine commune. Quand vous y êtes soumis, augmentez sa virulence de 2. Dans ce cas précis, vous ne pouvez pas gagner ou dépenser d’Atout sur vos tests de Résistance aux toxines.",
      type: "negative",
      karmaCost: "2",
      book: "compagnon",
      page: "134",
    },
    {
      key: "Vulnérabilité à une toxine (gaz vomitif)",
      description:
        "Vous êtes particulièrement sensible à une toxine commune. Quand vous y êtes soumis, augmentez sa virulence de 2. Dans ce cas précis, vous ne pouvez pas gagner ou dépenser d’Atout sur vos tests de Résistance aux toxines.",
      type: "negative",
      karmaCost: "2",
      book: "compagnon",
      page: "134",
    },
    {
      key: "Vulnérabilité à une toxine (narcoject)",
      description:
        "Vous êtes particulièrement sensible à une toxine commune. Quand vous y êtes soumis, augmentez sa virulence de 2. Dans ce cas précis, vous ne pouvez pas gagner ou dépenser d’Atout sur vos tests de Résistance aux toxines.",
      type: "negative",
      karmaCost: "2",
      book: "compagnon",
      page: "134",
    },
    {
      key: "Vulnérabilité à une toxine (neuro‑stuns)",
      description:
        "Vous êtes particulièrement sensible à une toxine commune. Quand vous y êtes soumis, augmentez sa virulence de 2. Dans ce cas précis, vous ne pouvez pas gagner ou dépenser d’Atout sur vos tests de Résistance aux toxines.",
      type: "negative",
      karmaCost: "2",
      book: "compagnon",
      page: "134",
    },
    {
      key: "Vulnérabilité à une toxine (Seven−7)",
      description:
        "Vous êtes particulièrement sensible à une toxine commune. Quand vous y êtes soumis, augmentez sa virulence de 2. Dans ce cas précis, vous ne pouvez pas gagner ou dépenser d’Atout sur vos tests de Résistance aux toxines.",
      type: "negative",
      karmaCost: "2",
      book: "compagnon",
      page: "134",
    },
  ],
};
