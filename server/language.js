var translate = (lang) => {
    let content = [{}]

    if (lang == 'fr') {
        content = {
            motto: "Deviens membre du hackerspace LeLab !",
            prop: "Le hackerspace LeLab est une initiative citoyenne neuchâteloise qui vise à unir des innovateurs, des inventeurs et des startups afin de développer et concevoir ensemble des projets innovants.",
            QA: [
                { question: "Qu'est-ce qu'un hackerspace ?", answer: "Un hackerspace est constitué d'un open space, d'une communauté active et de machines de prototypages. L'idée est de proposer le développement de projets ensemble et de mettre à disposition une infrastructure de prototypage pour tous les membres. Nous souhaitons permettre aux gens de passer d'une idée à un concept, et du concept à la réalisation." },
                { question: "J'ai une super idée, mais je ne connais pas grand chose.", answer: "Bonne nouvelle. Pas besoin de sortir d'un cursus ingénieur pour nous rejoindre. Nous serons très heureux de faire ta connaissance et de te montrer comment parvenir à ton objectif." },
                { question: "Il existe déjà un fablab et repair café en ville.", answer: "Les hackerspaces sont des structures indépendantes des autorités au contraire des fablabs et ces derniers sont destinés à des projets d'envergure créatrice. Notre objectif est de développer des systèmes. Nous ne réparons pas d'électroménager, mais nos projets prennent en compte le respect des normes environnementales." },
                { question: "Notre startup est basée à Microcity. Pouvons-nous profiter de vos services ?", answer: "Oui, veuillez remplir le formulaire." },
                { question: "Notre startup recherche des locaux dans lesquels nous pourrions développer notre produit.", answer: "Les locaux permettront de travailler uniquement en commun. Veuillez nous contacter pour plus d'informations." }
            ]
        }
    } else if (lang == 'en') {
        content = {
            motto: "Become a member of the LeLab hackerspace!",
            prop: "The hackerspace LeLab is a citizen initiative from Neuchâtel that aims to unite innovators, inventors and startups in order to develop and design innovative projects together.",
            QA: [
                { question: "What is a hackerspace?", answer: "A hackerspace consists of an open space, an active community and prototyping machines. The idea is to propose the development of projects together and to provide a prototyping infrastructure for all members. We want to enable people to move from an idea to a concept, and from concept to realization." },
                { question: "[I have a great idea, but I don't know much about it.", answer: "That's good news. You don't have to be an engineer to join us. We would be very happy to get to know you and show you how to achieve your goal." },
                { question: "There's already a fablab and repair café in town.", answer: "Hackerspaces are structures independent of the authorities, unlike fablabs, and the latter are intended for large creative projects. Our goal is to develop systems. We do not repair appliances, but our projects take into account the respect of environmental standards." },
                { question: "Our startup is based in Microcity. Can we benefit from your services?", answer: "Yes, please fill out the form." },
                { question: "Our startup is looking for premises where we could develop our product.", answer: "The premises will allow us to work only together. Please contact us for more information." }
            ]
        }
    }

    return content
}

module.exports = { translate }
