/**
 * Used to get the current stage of the event
 *
 * pre -> 1 month before the event
 * mid -> Event is ongoing
 * post -> Event is over
 */
export function getEventStage() {
  const currentDate = new Date();

  // Months are 0 indexed but that's kinda... yeah
  const currentMonth = currentDate.getUTCMonth() + 1;

  let stage = "post";

  if (currentMonth == 9) {
    // Sept.
    stage = "pre";
  } else if (currentMonth == 10) {
    // October
    stage = "mid";
  } else {
    //  Nov. to Aug.
    stage = "post";
  }

  // Toggle this if you're a time traveler
  // stage = "mid";

  return stage;
}
