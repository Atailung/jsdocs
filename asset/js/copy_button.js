function copyCode() {
    const code = document.getElementById("code-block").innerText;
    navigator.clipboard.writeText(code).then(() => {
      alert("✅ Code copied!");
    }).catch(err => {
      console.error("Failed to copy", err);
    });
  }
  
  // Make it accessible globally if needed
  window.copyCode = copyCode;
  