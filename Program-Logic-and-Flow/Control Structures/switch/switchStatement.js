// 

// SYNTAX:
switch (expression) {
    case value1:
    // Code to execute if expression matches value1
    break;
    case value2:
    // Code to execute if expression matches value2
    break;
  // ... additional cases
    default:
    // Code to execute if none of the cases match
}

// EXAMPLE:
themeSelector.addEventListener("change", function () {
    switch (themeSelector.value) {
        case "default":
        themeLink.href = "default-theme.css";
        break;
        case "light":
        themeLink.href = "light-theme.css";
        break;
        case "dark":
        themeLink.href = "dark-theme.css";
        break;
        default:
        themeLink.href = "default-theme.css";
    }
});