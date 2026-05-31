// Shared client-side logic for EmbraceIN static site

document.addEventListener("DOMContentLoaded", () => {
  // Shared static background logo watermark.
  if (!document.getElementById("static_background_logo")) {
    const watermark = document.createElement("div");
    watermark.id = "static_background_logo";
    watermark.className = "static-background-logo";

    const logo = document.createElement("img");
    logo.src = "images/logo.svg";
    logo.alt = "";
    logo.className = "static-background-logo__image";

    watermark.appendChild(logo);
    document.body.prepend(watermark);
  }

  // Initialize Lucide Icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // 1. Header scroll changes & Back-to-Top visibility
  const header = document.getElementById("app_header");
  const scrollTopBtn = document.getElementById("scroll_to_top_floating_btn");

  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (header) {
      if (scrollY > 50) {
        header.classList.remove("bg-transparent", "py-5");
        header.classList.add("bg-earth-linen/95", "backdrop-blur-md", "shadow-sm", "border-b", "border-earth-clay/10", "py-3");
      } else {
        header.classList.remove("bg-earth-linen/95", "backdrop-blur-md", "shadow-sm", "border-b", "border-earth-clay/10", "py-3");
        header.classList.add("bg-transparent", "py-5");
      }
    }

    if (scrollTopBtn) {
      if (scrollY > 300) {
        scrollTopBtn.classList.remove("hidden", "opacity-0", "pointer-events-none");
        scrollTopBtn.classList.add("opacity-100");
      } else {
        scrollTopBtn.classList.add("hidden", "opacity-0", "pointer-events-none");
        scrollTopBtn.classList.remove("opacity-100");
      }
    }
  };

  // Run once initially in case page loads scrolled down
  handleScroll();
  window.addEventListener("scroll", handleScroll);

  // 2. Scroll-to-Top action
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 3. Mobile Menu Toggle
  const mobileToggleBtn = document.getElementById("mobile_menu_toggle_btn");
  const mobileNavDrawer = document.getElementById("mobile_nav_drawer");

  if (mobileToggleBtn && mobileNavDrawer) {
    mobileToggleBtn.addEventListener("click", () => {
      const isHidden = mobileNavDrawer.classList.contains("hidden");
      if (isHidden) {
        mobileNavDrawer.classList.remove("hidden");
        mobileToggleBtn.innerHTML = '<i data-lucide="x" class="w-6 h-6"></i>';
      } else {
        mobileNavDrawer.classList.add("hidden");
        mobileToggleBtn.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
      }
      if (typeof lucide !== "undefined") {
        lucide.createIcons();
      }
    });
  }
});
