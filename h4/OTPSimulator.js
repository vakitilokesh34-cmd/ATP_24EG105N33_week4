/**
 * OTP Countdown Simulator
 * This script simulates the typical 10-second countdown seen after sending an OTP.
 */

console.log("OTP sent successfully!");

let secondsLeft = 10;
console.log("Countdown started...");

// setInterval runs the provided function every 1000ms (1 second).
let timer = setInterval(() => {
  console.log(`Time remaining: ${secondsLeft}s`);
  secondsLeft--;

  // Once the countdown reaches 0 (or -1), stop the timer and offer to resend.
  if (secondsLeft < 0) {
    console.log("OTP Expired. Please click 'Resend OTP'.");
    clearInterval(timer); // Stops the interval from running further.
  }
}, 1000);
