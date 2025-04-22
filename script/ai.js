export class AI {
  constructor(opponent, ball, gameEl) {
    this.opponent = opponent;  // Reference to the opponent player
    this.ball = ball;          // Reference to the ball object
    this.gameEl = gameEl;      // The game area element
  }

  update(deltaTime) {
    const ballCenterY = this.ball.y + this.ball.size / 2;
    const opponentCenterY = this.opponent.getCenterY();

    // Simple AI: Move the paddle towards the ball
    if (ballCenterY > opponentCenterY) {
      this.opponent.move(this.opponent.speed);
    } else if (ballCenterY < opponentCenterY) {
      this.opponent.move(-this.opponent.speed);
    }

    this.opponent.update(deltaTime);  // Update the opponent's position
  }
}
