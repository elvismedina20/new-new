export class Player {
  constructor(el, side) {
    this.el = el;        // Reference to the HTML element for this player
    this.side = side;     // 'left' or 'right' to determine the player’s position
    this.width = 20;      // Width of the paddle
    this.height = 80;     // Height of the paddle
    this.speed = 5;       // Speed at which the paddle moves
    this.y = 0;           // Vertical position of the paddle
    this.dy = 0;          // Vertical speed of the paddle (used for movement)
    this.updateVisual();  // Set the initial visual properties
  }

  move(dy) {
    this.dy = dy;   // Update the vertical speed to move the paddle
  }

  getCenterY() {
    return this.y + this.height / 2;   // Get the vertical center of the paddle
  }

  update(deltaTime) {
    this.y += this.dy;   // Update the vertical position
    // Ensure the paddle stays within the boundaries of the game area
    this.y = Math.max(0, Math.min(this.y, this.el.parentElement.clientHeight - this.height));
    this.updateVisual();
  }

  updateVisual() {
    // Update the visual appearance of the player paddle
    this.el.style.height = `${this.height}px`;
    this.el.style.width = `${this.width}px`;
    this.el.style.position = 'absolute';
    this.el.style.top = `${this.y}px`;
    this.el.style.left = this.side === 'left' ? '20px' : 'calc(100% - 40px)';
  }

  fire() {
    // Optional: Add firing logic for future power-ups or features
  }
}
