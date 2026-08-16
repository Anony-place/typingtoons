# Ninja Branch Climb — Game Design Review

The current prototype is a useful proof of concept, but it is not yet strong enough as a finished game. The intended player loop is:

1. See the next branch and its word.
2. Type anywhere on the page.
3. Typed letters visibly fill/highlight the word.
4. A per-branch countdown creates pressure.
5. Complete the word before the countdown reaches zero.
6. Ninja jumps to the next branch.
7. Camera follows upward.
8. Landing gives coins/score and a satisfying animation.
9. Difficulty increases gradually.
10. Missing/wrong typing creates a clear, fair consequence.

Priority improvements:
- Make the active word visually obvious and show typed-prefix progress.
- Make the deadline visible on the branch itself, with a shrinking timer bar and danger state.
- Break the branch visually when time expires, then animate the ninja falling.
- Keep the camera centered on the ninja and smoothly follow every successful climb; never leave the player stranded near the bottom.
- Generate new branches as the player climbs instead of using a fixed set that eventually runs out.
- Use deterministic reachability so every new branch can actually be landed on.
- Increase word difficulty and branch pressure gradually rather than using random difficulty spikes.
- Add a clean landing squash, leaf burst, coin burst, small screen shake on damage, and a clear fall/game-over animation.
- Keep the UI lightweight: height, score, coins, hearts, pause. Avoid technical-looking HUD panels.
- Desktop and mobile should share the same loop; mobile should focus the hidden input on tap without showing an unnecessary in-game textbox.
- Pause should be an actual mouse/touch UI control, not a keyboard shortcut.
