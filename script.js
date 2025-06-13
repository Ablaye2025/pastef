// Génère la liste d’activités
document.addEventListener("DOMContentLoaded", () => {
  const activites = [
    "Atelier photo du dimanche",
    "Montage vidéo de voyage",
    "Exposition en ligne"
  ];

  const liste = document.getElementById("liste-activites");

  activites.forEach(act => {
    const item = document.createElement("li");
    item.className = "list-group-item";
    item.textContent = act;
    liste.appendChild(item);
  });
});

// Gère l’envoi du formulaire
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const messageBox = document.getElementById("formMessage");

  form?.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        messageBox.innerHTML = '<div class="alert alert-success">✅ Message transmis avec succès !</div>';
        form.reset();
      } else {
        messageBox.innerHTML = '<div class="alert alert-danger">❌ Une erreur est survenue. Essayez plus tard.</div>';
      }
    } catch (error) {
      messageBox.innerHTML = '<div class="alert alert-danger">❌ Impossible d\'envoyer le message. Vérifiez votre connexion.</div>';
    }
  });
});

// Génère le texte circulaire animé
document.addEventListener("DOMContentLoaded", () => {
  const allWrappers = document.querySelectorAll(".circle-text-wrapper");

  allWrappers.forEach(wrapper => {
    const text = (wrapper.dataset.text || "").repeat(10);
    const container = wrapper.querySelector(".circle-text");

    for (let i = 0; i < text.length; i++) {
      const span = document.createElement("span");
      span.innerText = text[i];
      span.style.transform = `rotate(${i * 10}deg) translate(0, -140px)`;
      container.appendChild(span);
    }
  });
});
