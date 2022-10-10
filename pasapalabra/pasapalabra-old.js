const STATUS_FAILED = 'failed';
const STATUS_UNANSWERED = 'unanswered';
const STATUS_CORRECT = 'correct';

const questions = [
    {
        letter: 'a',
        answer: 'abducir',
        status: STATUS_UNANSWERED,
        question:
            'CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien',
    },
    {
        letter: 'b',
        answer: 'bingo',
        status: STATUS_UNANSWERED,
        question:
            "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
    },
    {
        letter: 'c',
        answer: 'churumbel',
        status: STATUS_UNANSWERED,
        question: 'CON LA C. Niño, crío, bebé',
    },
    {
        letter: 'd',
        answer: 'diarrea',
        status: STATUS_UNANSWERED,
        question:
            'CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida',
    },
    {
        letter: 'e',
        answer: 'ectoplasma',
        status: STATUS_UNANSWERED,
        question:
            'CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación',
    },
    {
        letter: 'f',
        answer: 'facil',
        status: STATUS_UNANSWERED,
        question:
            'CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad',
    },
    {
        letter: 'g',
        answer: 'galaxia',
        status: STATUS_UNANSWERED,
        question:
            'CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas',
    },
    {
        letter: 'h',
        answer: 'harakiri',
        status: STATUS_UNANSWERED,
        question: 'CON LA H. Suicidio ritual japonés por desentrañamiento',
    },
    {
        letter: 'i',
        answer: 'iglesia',
        status: STATUS_UNANSWERED,
        question: 'CON LA I. Templo cristiano',
    },
    {
        letter: 'j',
        answer: 'jabali',
        status: STATUS_UNANSWERED,
        question:
            "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
    },
    {
        letter: 'k',
        answer: 'kamikaze',
        status: STATUS_UNANSWERED,
        question:
            'CON LA K. Persona que se juega la vida realizando una acción temeraria',
    },
    {
        letter: 'l',
        answer: 'licantropo',
        status: STATUS_UNANSWERED,
        question: 'CON LA L. Hombre lobo',
    },
    {
        letter: 'm',
        answer: 'misantropo',
        status: STATUS_UNANSWERED,
        question:
            'CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas',
    },
    {
        letter: 'n',
        answer: 'necedad',
        status: STATUS_UNANSWERED,
        question: 'CON LA N. Demostración de poca inteligencia',
    },
    {
        letter: 'ñ',
        answer: 'señal',
        status: STATUS_UNANSWERED,
        question:
            'CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.',
    },
    {
        letter: 'o',
        answer: 'orco',
        status: STATUS_UNANSWERED,
        question:
            'CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien',
    },
    {
        letter: 'p',
        answer: 'protoss',
        status: STATUS_UNANSWERED,
        question:
            'CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft',
    },
    {
        letter: 'q',
        answer: 'queso',
        status: STATUS_UNANSWERED,
        question:
            'CON LA Q. Producto obtenido por la maduración de la cuajada de la leche',
    },
    {
        letter: 'r',
        answer: 'raton',
        status: STATUS_UNANSWERED,
        question: 'CON LA R. Roedor',
    },
    {
        letter: 's',
        answer: 'stackoverflow',
        status: STATUS_UNANSWERED,
        question:
            'CON LA S. Comunidad salvadora de todo desarrollador informático',
    },
    {
        letter: 't',
        answer: 'terminator',
        status: STATUS_UNANSWERED,
        question:
            'CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984',
    },
    {
        letter: 'u',
        answer: 'unamuno',
        status: STATUS_UNANSWERED,
        question:
            "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
    },
    {
        letter: 'v',
        answer: 'vikingos',
        status: STATUS_UNANSWERED,
        question:
            'CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa',
    },
    {
        letter: 'w',
        answer: 'sandwich',
        status: STATUS_UNANSWERED,
        question:
            'CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso',
    },
    {
        letter: 'x',
        answer: 'botox',
        status: STATUS_UNANSWERED,
        question:
            'CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética',
    },
    {
        letter: 'y',
        answer: 'peyote',
        status: STATUS_UNANSWERED,
        question:
            'CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos',
    },
    {
        letter: 'z',
        answer: 'zen',
        status: STATUS_UNANSWERED,
        question:
            'CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional',
    },
];

let players = [
    {
        player: 3,
        name: 'Pepito',
        score: 22,
        fails: 10,
    },
    {
        player: 2,
        name: 'Manolete',
        score: 14,
        fails: 18,
    },
    {
        player: 1,
        name: ' ',
        score: 0,
        fails: 0,
    },
];

const playGame = () => {
    getPlayerName();
    questionsLoop(questions);
};

const iFinished = () => {
    alert(
        `Congrats!! You finished the game with a score ${players[2].score} and a fail number of ${players[2].fails}.`
    );
    sortScores();
};

const iDidNotFinish = () => {
    alert(
        `You finished the game with a score of ${players[2].score} and a fail number of ${players[2].fails}. Goodbye, see you soon.`
    );
};

const getPlayerName = () => {
    document.getElementById('player2').value = players[2].name;
};
const sortScores = () => {
    let playersArray = [
        [players[0].name, players[0].score],
        [players[1].name, players[1].score],
        [players[2].name, players[2].score],
    ];

    let scoreBoard = playersArray.sort((a, b) => b[1] - a[1]);

    console.log(
        '------------------Here is our Score Board: -------------------'
    );
    console.table(scoreBoard);
};

const questionsLoop = (listOfQuestions) => {
    const nextIndexQuestion = (start) => {
        for (let j = start; j < listOfQuestions.length; j++) {
            if (listOfQuestions[j].status === STATUS_UNANSWERED) {
                return j;
            }
        }
        for (let i = 0; i < start; i++) {
            if (listOfQuestions[i].status === STATUS_UNANSWERED) {
                return i;
            }
        }
    };
    const isGameFinished = () =>
        !listOfQuestions.some((q) => q.status === STATUS_UNANSWERED);

    const currentPlayer = players[2];
    let lastQuestionIndex = 0;
    while (!isGameFinished()) {
        const userCancelsDialog = (answer) => answer === null;
        const userWantsFinish = (answer) => answer.toLowerCase() === 'end';
        const userWantsSkip = (answer) =>
            answer.toLowerCase() === 'pasapalabra';

        const currentQuestion = listOfQuestions[lastQuestionIndex];
        let userAnswer = prompt(currentQuestion.question);

        if (userWantsFinish(userAnswer) || userCancelsDialog(userAnswer)) {
            return iDidNotFinish();
        }
        if (userWantsSkip(userAnswer)) {
            alert('OK');
        } else if (userAnswer.toLowerCase() === currentQuestion.answer) {
            currentPlayer.score += 1;
            alert('Correct! 1 point for you.');
            currentQuestion.status = STATUS_CORRECT;
        } else {
            alert('Incorrect!');
            currentPlayer.fails += 1;
            currentQuestion.status = STATUS_FAILED;
        }
        lastQuestionIndex = nextIndexQuestion(lastQuestionIndex + 1);
    }
    return iFinished();
};

playGame();
