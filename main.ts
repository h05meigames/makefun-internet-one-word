// makefun-internet-one-word — The Internet in One Word
// Describes the whole internet in a single word.
// v1: "doomscroll" — the first word everyone reaches for: one doom-laden
// habit, not the whole internet, and no surprise in it.
// v2: "distractopia" — distraction + dystopia: the whole internet as a
// world built out of distractions. Funny on its own, surprising, true
// about the system as a whole, and it lands in one beat.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const entry = "distractopia";

mkdirSync(dirname("/output/entry.txt"), { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(entry);
