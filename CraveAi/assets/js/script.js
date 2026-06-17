// CraveAi main script
// Put your real Linkvertise publisher ID here when you are ready.
// Example: const LINKVERTISE_ID = 123456;
const LINKVERTISE_ID = "";

function setupLinkvertise() {
    if (typeof window.linkvertise !== "function") {
        return;
    }

    if (!LINKVERTISE_ID || LINKVERTISE_ID === "YOUR_ID") {
        console.warn("Linkvertise is loaded, but no publisher ID is set yet.");
        return;
    }

    window.linkvertise(LINKVERTISE_ID, {
        whitelist: [],
        blacklist: ["craveai.com", "localhost", "127.0.0.1"],
    });
}

document.addEventListener("DOMContentLoaded", function () {
    setupLinkvertise();

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener("click", function (event) {
            const targetSelector = this.getAttribute("href");
            if (targetSelector === "#") {
                event.preventDefault();
                return;
            }

            const target = document.querySelector(targetSelector);
            if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    console.log("CraveAi website loaded:", window.location.pathname);
});
