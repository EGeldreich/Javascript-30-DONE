// select all inputs
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    // get suffix "px" for blur and spacing, nothing for base, from html data-
    const suffix = this.dataset.sizing || '';
    // rewrite variables with new value
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    console.log(this.value);
};

// update variables when input is changed
// base color not updating unless i quit the pop-up on windows
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

