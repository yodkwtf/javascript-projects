const main = document.querySelector("main");

document.addEventListener("keydown", (e) => {
  const keyCode = e.keyCode;
  const key = e.key;
  const code = e.code;

  const output = `
  <div class="key-info">
      <span class="info-1">
        <h3>KeyCode</h3>
        <h1 id="keycode">${keyCode}</h1>
      </span>
      <span class="info-2">
        <h4>Key</h4>
        <h3 id="key">${key}</h3>
      </span>
      <span class="info-2">
        <h4>Code</h4>
        <h3 id="code">${code}</h3>
      </span>
    </div>
  `;

  main.innerHTML = output;
});
