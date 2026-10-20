// Dynamic Festival Banner & Popup Generator
export function getUpcomingFestivalGreeting() {
  const today = new Date();
  const month = today.getMonth() + 1; // 1-12
  const day = today.getDate();

  // Indian & Global Major Festival Calendar Windows
  const festivals = [
    {
      name: "Diwali (Festival of Lights) 🪔✨",
      greeting: "Wishing you a luminous and prosperous Diwali! May light and warmth fill your journey.",
      month: 11,
      startDay: 1,
      endDay: 15,
      bg: "from-amber-500/20 via-orange-500/10 to-yellow-500/20",
      border: "border-amber-500/40",
      icon: "fa-fire"
    },
    {
      name: "Dussehra & Navratri Celebration 🏹✨",
      greeting: "Happy Dussehra & Navratri! Celebrating victory of light and positive energy.",
      month: 10,
      startDay: 10,
      endDay: 25,
      bg: "from-purple-500/20 via-pink-500/10 to-amber-500/20",
      border: "border-purple-500/40",
      icon: "fa-gem"
    },
    {
      name: "Holi (Festival of Colors) 🎨✨",
      greeting: "Happy Holi! Wishing you a bright, vibrant, and joyful celebration.",
      month: 3,
      startDay: 15,
      endDay: 30,
      bg: "from-pink-500/20 via-fuchsia-500/10 to-cyan-500/20",
      border: "border-pink-500/40",
      icon: "fa-palette"
    },
    {
      name: "New Year & Season Festivities 🎆✨",
      greeting: "Wishing you a brilliant and inspiring New Year full of breakthroughs!",
      month: 1,
      startDay: 1,
      endDay: 10,
      bg: "from-cyan-500/20 via-indigo-500/10 to-purple-500/20",
      border: "border-cyan-500/40",
      icon: "fa-wand-magic-sparkles"
    }
  ];

  // Match festival window
  const activeFest = festivals.find(f => f.month === month && day >= f.startDay && day <= f.endDay);

  // Fallback to general seasonal greeting
  if (!activeFest) {
    return {
      name: "Welcome & Festival Season Greetings ✨",
      greeting: "Warm festive wishes to you and your family! Have a productive and inspiring week.",
      bg: "from-cyan-500/10 via-indigo-500/10 to-purple-500/10",
      border: "border-cyan-500/30",
      icon: "fa-sparkles"
    };
  }

  return activeFest;
}