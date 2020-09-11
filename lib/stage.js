export function getCurrentStage() {
  const currentDate = new Date();
  let stage = "mid"; // Event is ongoing

  // Months are 0 indexed.
  if (currentDate.getMonth() == 8) {
    stage = "pre";
  } else if (currentDate.getMonth() == 9) {
    stage = "mid";
  } else {
    stage = "post";
  }

  // Toggle this if you're a time traveler
  // stage = "mid";

  return stage;
}
