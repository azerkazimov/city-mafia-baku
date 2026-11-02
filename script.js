const factions = {
  mafia: "Mafiya",
  city: "Şəhər",
  neutral: "Neytral",
};

const icons = {
  crown:
    '<svg viewBox="0 0 48 48" aria-hidden="true"><path fill="currentColor" d="M8 34h32l-3-16-8 8-5-12-5 12-8-8z"/><path fill="currentColor" d="M10 36h28v3H10z"/><circle cx="8" cy="16" r="2.2" fill="currentColor"/><circle cx="24" cy="8" r="2.2" fill="currentColor"/><circle cx="40" cy="16" r="2.2" fill="currentColor"/></svg>',
  mask:
    '<svg viewBox="0 0 48 48" aria-hidden="true"><path fill="currentColor" d="M10 16c0-4 6-8 14-8s14 4 14 8v6c0 8-6 16-14 16S10 30 10 22z"/><path fill="#1a1408" d="M16 22h6v4h-6zm10 0h6v4h-6z"/><path fill="currentColor" d="M22 28h4l-2 4z"/></svg>',
  pistol:
    '<svg viewBox="0 0 48 48" aria-hidden="true"><path fill="currentColor" d="M8 18h22l4 4h6v6H30l-2 4h-6l2-4H14l-2 10h-6z"/></svg>',
  shuriken:
    '<svg viewBox="0 0 48 48" aria-hidden="true"><path fill="currentColor" d="M24 4l4 12 12-4-8 12 8 12-12-4-4 12-4-12-12 4 8-12-8-12 12 4z"/><circle cx="24" cy="24" r="3.2" fill="#1a1408"/></svg>',
  masks:
    '<svg viewBox="0 0 48 48" aria-hidden="true"><path fill="currentColor" d="M6 16c0-4 4-7 10-7 4 0 7 2 8 4-1 2-4 4-8 4-6 0-10-3-10-1z"/><path fill="currentColor" d="M24 13c1-2 4-4 8-4 6 0 10 3 10 7 0-2-4-1-10 1-4 0-7-2-8-4z"/><ellipse cx="16" cy="28" rx="8" ry="10" fill="currentColor"/><ellipse cx="32" cy="28" rx="8" ry="10" fill="currentColor"/><path fill="#1a1408" d="M13 27h6v3h-6zm16 0h6v3h-6z"/></svg>',
  star:
    '<svg viewBox="0 0 48 48" aria-hidden="true"><path fill="currentColor" d="M24 6l5 12 13 1-10 8 3 13-11-7-11 7 3-13-10-8 13-1z"/></svg>',
  shield:
    '<svg viewBox="0 0 48 48" aria-hidden="true"><path fill="currentColor" d="M24 6l16 6v12c0 10-7 16-16 18C15 40 8 34 8 24V12z"/><path fill="#1a1408" d="M24 14l8 3v6c0 5-3 8-8 10-5-2-8-5-8-10v-6z"/></svg>',
  wings:
    '<svg viewBox="0 0 48 48" aria-hidden="true"><path fill="currentColor" d="M24 34c-2-8-8-14-16-16 4 2 7 6 8 10-6-1-11-1-14 2 6 0 11 2 14 6-4 2-8 2-12 1 5 2 10 2 14 0-2 4-2 7-1 9 2-4 4-8 7-12z"/><path fill="currentColor" d="M24 34c2-8 8-14 16-16-4 2-7 6-8 10 6-1 11-1 14 2-6 0-11 2-14 6 4 2 8 2 12 1-5 2-10 2-14 0 2 4 2 7 1 9-2-4-4-8-7-12z"/></svg>',
  spark:
    '<svg viewBox="0 0 48 48" aria-hidden="true"><path fill="currentColor" d="M24 4l3 13 13 3-13 3-3 13-3-13-13-3 13-3z"/><path fill="currentColor" d="M36 28l1.4 5 5 1.4-5 1.4L36 41l-1.4-5-5-1.4 5-1.4z"/></svg>',
  bomb:
    '<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="28" r="12" fill="currentColor"/><path fill="currentColor" d="M24 16v-4h6l2-4 3 2-2 4h3v4h-6"/><path fill="#1a1408" d="M20 26h3v3h-3z"/></svg>',
  scorpion:
    '<svg viewBox="0 0 48 48" aria-hidden="true"><path fill="currentColor" d="M18 30c0-6 4-10 8-10h4c2 0 4 2 4 4v2h4v4h-6l-2 8h-6l-1-6c-3 1-5 0-5-2z"/><path fill="currentColor" d="M30 14c4-4 10-2 10 2 0 3-3 4-5 3l-3 5h-4l2-6c-2 0-3-2 0-4z"/><path fill="currentColor" d="M14 22l-6 2 2 3 5-2zm2 6l-7 3 1 3 6-2z"/></svg>',
  skull:
    '<svg viewBox="0 0 48 48" aria-hidden="true"><path fill="currentColor" d="M24 8c9 0 16 7 16 16 0 6-3 10-8 12v6H16v-6c-5-2-8-6-8-12 0-9 7-16 16-16z"/><path fill="#1a1408" d="M16 22h6v6h-6zm10 0h6v6h-6zM21 32h6v3h-6z"/></svg>',
};

const roles = [
  ["Don Mafiya", "mafia", "Baş mafiya", "crown", "Oyunun baş mafiyasıdır. Mafiya üzvlərini tanıyır və səsverməyə nəzarət edir. Gecə öldürmə qərarını əsasən Don verir."],
  ["Varis Mafiya", "mafia", "Donun varisi", "crown", "Don ölərsə, onun yerinə keçir və mafiya qrupuna rəhbərlik etməyə başlayır."],
  ["Sadə Mafiya", "mafia", "Sadə üzv", "mask", "Mafiya qrupunun sadə üzvüdür. Gecə kimisə öldürmək üçün Don ilə birlikdə qərar verir."],
  ["Komissar", "city", "Şəhərin qoruyucusu", "star", "Şəhərin əsas qoruyucusudur. Gecə kiminsə kim olduğunu yoxlaya bilər. “Bu şəxs mafiyadır ya yox?” sualına cavab alır."],
  ["Mag", "city", "Sehrbaz", "spark", "Sehrbazdır. Gecə kimisə bir dəfə dirildə bilər və ya bir dəfə qoruma tətbiq edə bilər."],
  ["İkiüzlü", "city", "Gizli məqsəd", "masks", "Gündüz özünü sivil kimi göstərsə də, oyunun axarını dəyişdirə biləcək gizli məqsədləri var. Sistemə görə ya mafiyaya, ya da şəhərə işləyir."],
  ["Ninja", "city", "Səssiz qatil", "shuriken", "Səssiz qatildir. Gecə birini öldürür, lakin izi çox çətin tapılır. Komissar onu yoxlayanda nəticə “sivil” kimi çıxır."],
  ["Varis Komissar", "city", "Komissarın varisi", "shield", "Komissar sağ olduqca dinc sakin kimi oynayır. Komissar oyundan çıxanda onun yerinə keçir və bütün bacarıqlarını alır."],
  ["Mələk", "city", "Gecə qoruyucusu", "wings", "Hər gecə bir nəfəri qoruyur və həmin gecə onu öldürmək mümkün olmur. Eyni adamı iki gecə ardıcıl qoruya bilmir."],
  ["Kamikadze", "neutral", "Öz ölümü bahasına", "bomb", "Özünü partlada bilər və bir nəfəri özü ilə apara bilər. Bu, öz ölümü bahasına olur."],
  ["Manyak", "neutral", "Tək qatil", "skull", "Tək oynayan psixopatik obrazdır. Hər gecə istədiyi birini öldürür. Nə mafiyadır, nə də sivildir. Hər kəs üçün təhlükəlidir."],
  ["Killer", "neutral", "Sərt qatil", "pistol", "Sərt qatil obrazıdır. Hər gecə bir nəfəri sakitcə öldürə bilər. Manyakdan fərqli olaraq daha sistemli işləyir."],
  ["Skorpion", "neutral", "Yalnız səsvermə ilə", "scorpion", "Hər gecə 1 gülləsi var. Gecə kimsə ona silah açarsa, 2 gülləsi olur. 2 silah açılarsa, 3 gülləsi olur. Onu yalnız səsvermə ilə oyundan çıxarmaq mümkündür."],
  ["Oğru", "neutral", "Rol oğrusu", "mask", "Oğrudur. Gecə birini izləyə bilər və onun rolunu oğurlaya bilər və ya sadəcə kimliyini öyrənər."],
];

const corners =
  '<span class="corner tl"></span><span class="corner tr"></span><span class="corner bl"></span><span class="corner br"></span>';
const motif = '<span class="motif" aria-hidden="true"><i></i><i></i><i></i></span>';

const grid = document.getElementById("grid");

roles.forEach(([name, faction, subtitle, icon, text]) => {
  const card = document.createElement("button");
  card.className = "card";
  card.type = "button";
  card.dataset.faction = faction;
  card.setAttribute("aria-pressed", "false");
  card.setAttribute("aria-label", name + " kartı. Bacarığı görmək üçün çevirin");
  card.innerHTML =
    `<div class="scene"><div class="inner">` +
    `<div class="face front">` +
    corners +
    `<span class="badge ${faction}">${factions[faction]}</span>` +
    `<span class="icon">${icons[icon]}</span>` +
    `<span class="name">${name}</span>` +
    `<span class="sub">${subtitle}</span>` +
    motif +
    `</div>` +
    `<div class="face back" aria-live="polite">` +
    corners +
    `<h2>${name}</h2>` +
    `<p>${text}</p>` +
    `</div>` +
    `</div></div>`;
  card.addEventListener("click", () => {
    const flipped = card.classList.toggle("flipped");
    card.setAttribute("aria-pressed", String(flipped));
  });
  grid.appendChild(card);
});

document.querySelectorAll(".filters button").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document.querySelectorAll(".filters button").forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    grid.querySelectorAll(".card").forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.faction !== filter;
    });
  });
});
