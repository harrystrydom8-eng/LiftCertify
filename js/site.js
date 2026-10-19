"use strict";

const menuButton = document.querySelector(".nav-toggle");
const navigation = document.querySelector(".nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isExpanded));
    navigation.classList.toggle("is-open", !isExpanded);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      menuButton.setAttribute("aria-expanded", "false");
      navigation.classList.remove("is-open");
    }
  });
}

document.querySelectorAll("[data-year]").forEach((year) => {
  year.textContent = String(new Date().getFullYear());
});

document.querySelectorAll("form[data-ajax]").forEach((form) => {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const status = form.querySelector(".form-status");
    const submitButton = form.querySelector('[type="submit"]');
    if (!status || !submitButton) return;

    status.textContent = "Sending your request...";
    status.removeAttribute("data-error");
    submitButton.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: form.method || "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Form submission failed");

      form.reset();
      status.textContent = "Thanks. Your request has been sent.";
    } catch {
      status.textContent = "We could not send your request. Please try one of the contact options above.";
      status.setAttribute("data-error", "true");
    } finally {
      submitButton.disabled = false;
    }
  });
});