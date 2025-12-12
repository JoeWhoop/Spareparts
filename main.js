// PLIK: main.js
(() => {
  // zabezpieczenie przed podwójnym ładowaniem (cache / duplikaty)
  if (window.__MECH_APP_INIT__) return;
  window.__MECH_APP_INIT__ = true;

  const FORM_BASE_URL = "https://web.miniextensions.com/iZC8bQQmgC94HrP8oiSm";

  // Warianty kluczy (u Ciebie to działało, więc zostawiamy)
  const PREFILL_KEYS = {
    mechanic: [
      "prefill_Mechanic",
      "prefill_MECHANIC",
      "prefill_Mechanic ",
      "prefill_Mechanic_Name",
      "prefill_MechanicName"
    ],
    sparePart: [
      "prefill_Spare_Part",
      "prefill_SPARE_PART",
      "prefill_Spare Part",
      "prefill_SPARE PART",
      "prefill_SparePart"
    ]
  };

  function buildRedirectUrl(mechanic, sparePart) {
    const url = new URL(FORM_BASE_URL);
    url.search = "";

    for (const k of PREFILL_KEYS.mechanic) url.searchParams.set(k, mechanic);
    for (const k of PREFILL_KEYS.sparePart) url.searchParams.set(k, sparePart);

    return url.toString();
  }

  function init() {
    const mechanicEl = document.getElementById("mechanicDropdown");
    const spareEl = document.getElementById("sparePartDropdown");
    const btn = document.getElementById("goButton");

    if (!mechanicEl || !spareEl || !btn) return;

    // USUWA WSZYSTKIE stare event listenery (jeśli były dodane wcześniej przez inny main.js / inline script)
    const cleanBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(cleanBtn, btn);

    cleanBtn.addEventListener("click", () => {
      const mechanic = mechanicEl.value;
      const sparePart = spareEl.value;

      if (!mechanic || !sparePart) {
        alert("Wybierz mechanika i część.");
        return;
      }

      // (opcjonalnie) zapis lokalny bez alertów
      try {
        localStorage.setItem("mechanikSession", JSON.stringify({
          mechanic,
          sparePart,
          ts: new Date().toISOString()
        }));
      } catch (_) {}

      const redirectUrl = buildRedirectUrl(mechanic, sparePart);
      window.location.assign(redirectUrl);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
