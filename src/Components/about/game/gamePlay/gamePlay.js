getResult = (item1, item2) => {
    if (item1.id === 'ROCK') {
        switch (item2.id) {
            case 'PAPER':
                return 'YOU LOSE'
            case 'SCISSORS':
                return 'YOU WON'
            case 'LIZARD':
                return 'YOU WON'
            case 'SPOCK':
                return 'YOU LOSE'
            default:
                return 'IT IS DRAW'
        }
    } else if (item1.id === 'PAPER') {
        switch (item2.id) {
            case 'ROCK':
                return 'YOU WON'
            case 'SCISSORS':
                return 'YOU LOSE'
            case 'LIZARD':
                return 'YOU LOSE'
            case 'SPOCK':
                return 'YOU WON'
            default:
                return 'IT IS DRAW'
        }
    } else if (item1.id === 'SCISSORS') {
        switch (item2.id) {
            case 'ROCK':
                return 'YOU LOSE'
            case 'PAPER':
                return 'YOU WIN'
            case 'LIZARD':
                return 'YOU WIN'
            case 'SPOCK':
                return 'YOU LOSE'
            default:
                return 'IT IS DRAW'
        }
    } else if (item1.id === 'LIZARD') {
        switch (item2.id) {
            case 'ROCK':
                return 'YOU LOSE'
            case 'SCISSORS':
                return 'YOU LOSE'
            case 'PAPER':
                return 'YOU WIN'
            case 'SPOCK':
                return 'YOU WIN'
            default:
                return 'IT IS DRAW'
        } 
    } else {
        switch (item2.id)
        {
            case 'ROCK':
                return 'YOU WON'
            case 'PAPER':
                return 'YOU LOSE'
            case 'SCISSORS':
                return 'YOU WON'
            case 'LIZARD':
                return 'YOU LOSE'
            default:
                return 'IT IS DRAW'
        }
    }
}
