export class Player {
    constructor(name, points = 0, playerCards =[]) {
        this.name = name;
        this.points = points;
        this.playerCards = playerCards;
    }

    updatePoints = (pointsToAdd) => {
        this.points += pointsToAdd;
    }
}
