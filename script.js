// Animation d'apparition de la carte
gsap.from(".profile-card", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: "power2.out"
});

// Animation des statistiques (slide-in)
gsap.from(".stat", {
    opacity: 0,
    x: 50,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2
});

// Effet de rebond sur les boutons au survol
document.querySelectorAll(".left button").forEach(button => {
    button.addEventListener("mouseenter", () => {
        gsap.to(button, { scale: 1.1, duration: 0.2, ease: "power1.out" });
    });

    button.addEventListener("mouseleave", () => {
        gsap.to(button, { scale: 1, duration: 0.2, ease: "power1.out" });
    });
});
