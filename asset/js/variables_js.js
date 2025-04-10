
// Progress bar
window.addEventListener("scroll", () => {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";

  // Update reading progress
  document.getElementById("readingProgress").style.width = scrolled + "%";

  // Highlight active section in TOC
  const sections = document.querySelectorAll("section[id]");
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
      pageYOffset >= sectionTop - 100 &&
      pageYOffset < sectionTop + sectionHeight - 100
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  document.querySelectorAll(".toc-link").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === currentSection) {
      link.classList.add("active");
    }
  });
});

// Tab switching for interactive demo
document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons and content
    document
      .querySelectorAll(".tab-button")
      .forEach((btn) => btn.classList.remove("active"));
    document
      .querySelectorAll(".tab-content")
      .forEach((content) => content.classList.remove("active"));

    // Add active class to clicked button and corresponding content
    button.classList.add("active");
    const tabId = button.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});

// Copy button functionality
document.querySelectorAll(".copy-button").forEach((button) => {
  button.addEventListener("click", () => {
    const codeBlock = button.nextElementSibling;
    const code = codeBlock.textContent;

    navigator.clipboard.writeText(code).then(() => {
      button.textContent = "Copied!";
      button.classList.add("copied");

      setTimeout(() => {
        button.textContent = "Copy";
        button.classList.remove("copied");
      }, 2000);
    });
  });
});

// Interactive demo functionality
document.getElementById("run-let").addEventListener("click", () => {
  const output = document.getElementById("let-output");
  output.innerHTML = "";

  try {
    let count = 1;
    appendOutput(output, `count: ${count}`);

    count = 2;
    appendOutput(output, `count: ${count}`);

    {
      let blockVar = "only in this block";
      appendOutput(output, `blockVar: ${blockVar}`);
    }

    try {
      appendOutput(output, `blockVar outside block: ${blockVar}`);
    } catch (error) {
      appendOutput(output, `Error: ${error.message}`, true);
    }
  } catch (error) {
    appendOutput(output, `Error: ${error.message}`, true);
  }
});

document.getElementById("run-const").addEventListener("click", () => {
  const output = document.getElementById("const-output");
  output.innerHTML = "";

  try {
    const PI = 3.14159;
    appendOutput(output, `PI: ${PI}`);

    try {
      appendOutput(output, "Trying to reassign PI...");
      // PI = 3.14; // This would cause an error
      appendOutput(output, "This code is commented out to prevent error");
    } catch (error) {
      appendOutput(output, `Error: ${error.message}`, true);
    }

    const user = { name: "John" };
    appendOutput(output, `user: ${JSON.stringify(user)}`);

    user.name = "Jane";
    appendOutput(output, `Modified user: ${JSON.stringify(user)}`);

    try {
      appendOutput(output, "Trying to reassign user object...");
      // user = { name: 'Bob' }; // This would cause an error
      appendOutput(output, "This code is commented out to prevent error");
    } catch (error) {
      appendOutput(output, `Error: ${error.message}`, true);
    }
  } catch (error) {
    appendOutput(output, `Error: ${error.message}`, true);
  }
});

document.getElementById("run-var").addEventListener("click", () => {
  const output = document.getElementById("var-output");
  output.innerHTML = "";

  try {
    var score = 100;
    appendOutput(output, `score: ${score}`);

    score = 200;
    appendOutput(output, `score after reassignment: ${score}`);

    var score = 300;
    appendOutput(output, `score after redeclaration: ${score}`);

    {
      var blockVar = "not actually block-scoped";
    }
    appendOutput(output, `blockVar outside block: ${blockVar}`);
  } catch (error) {
    appendOutput(output, `Error: ${error.message}`, true);
  }
});

function appendOutput(element, text, isError = false) {
  const p = document.createElement("p");
  p.textContent = text;
  if (isError) {
    p.classList.add("text-red-600");
  }
  element.appendChild(p);
}

// Dark mode toggle (simplified implementation)
const darkModeToggle = document.querySelector(".dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const icon = darkModeToggle.querySelector("i");
  if (icon.classList.contains("fa-moon")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      // Add highlight effect
      targetElement.classList.add("section-highlight");

      // Remove highlight after animation completes
      setTimeout(() => {
        targetElement.classList.remove("section-highlight");
      }, 2000);

      // Scroll to the element
      window.scrollTo({
        top: targetElement.offsetTop - 20,
        behavior: "smooth",
      });
    }
  });
});
