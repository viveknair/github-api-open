console.log("Inserting content script...");

document.addEventListener("keydown", function (event) {
  console.log("here 1", event.altKey, event.key);
  // Check if the user pressed the "option/alt" and "o" key
  if (event.altKey && event.key === "ø") {
    console.log("here 2");
    // Get the current URL
    const currentUrl = window.location.href;
    // Define a regular expression to match the GitHub URL format
    const githubUrlRegex =
      /^https:\/\/github\.com\/([A-Za-z0-9_-]+)\/([A-Za-z0-9_-]+)$/;
    // Check if the current URL matches the GitHub URL format
    if (githubUrlRegex.test(currentUrl)) {
      const [, owner, repo] = githubUrlRegex.exec(currentUrl);

      const apiUrl = `https://api.github.com/repos/${owner}/${repo}`;

      console.log("owner: ", owner);
      console.log("repo: ", repo);
      console.log("apiUrl: ", apiUrl);

      // Open the webpage in a new tab
      window.open(apiUrl, "_blank");
    }
  }
});
