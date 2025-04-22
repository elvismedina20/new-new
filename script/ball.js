export class Ball {
  constructor(gameEl, el) {
    this.gameEl = gameEl;   // The game area element
    this.el = el;            // The HTML element for the ball
    this.size = 15;          // Size of the ball (radius for the circle)
    this.x = gameEl.clientWidth / 2;  // Horizontal center of the game area
    this.y = gameEl.clientHeight / 2; // Vertical center of the game area
    this.dx = 0;             // Horizontal velocity
    this.dy = 0;             // Vertical velocity
    this.speed = 2;          // Ball speed
    this.reset();            // Initialize ball position and movement
  }

  update(deltaTime) {
    // Update the ball's position based on velocity
    this.x += this.dx * this.speed;
    this.y += this.dy * this.speed;

    // Check for collision with the walls (top and bottom)
    if (this.y <= 0 || this.y + this.size >= this.gameEl.clientHeight) {
      this.dy = -this.dy;  // Reverse the vertical direction
    }

    // Check if the ball is out of bounds (left or right)
    if (this.x <= 0 || this.x + this.size >= this.gameEl.clientWidth) {
      this.reset();  // Reset the ball to the center
    }

    // Update the visual position of the ball
    this.updateVisual();
  }

  updateVisual() {
    this.el.style.width = `${this.size}px`;
    this.el.style.height = `${this.size}px`;
    this.el.style.position = 'absolute';
    this.el.style.top = `${this.y}px`;
    this.el.style.left = `${this.x}px`;
  }

  reset() {
    // Reset the ball position to the center of the game area
    this.x = this.gameEl.clientWidth / 2;
    this.y = this.gameEl.clientHeight / 2;
    this.dx = Math.random() < 0.5 ? -1 : 1;  // Random horizontal direction
    this.dy = Math.random() < 0.5 ? -1 : 1;  // Random vertical direction
  }
}
