(function() {
    // Create HTML elements for sliders and reset button
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '10px';
    container.style.right = '10px';
    container.style.zIndex = '9999';
    container.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    container.style.padding = '10px';
    container.style.borderRadius = '5px';

    // Brightness Slider
    const brightnessSlider = document.createElement('input');
    brightnessSlider.type = 'range';
    brightnessSlider.min = '0';
    brightnessSlider.max = '200';
    brightnessSlider.value = '100';
    brightnessSlider.style.marginBottom = '10px';
    brightnessSlider.style.width = '200px';
    brightnessSlider.title = 'Adjust Brightness';

    const brightnessLabel = document.createElement('label');
    brightnessLabel.textContent = 'Brightness:';
    brightnessLabel.style.color = 'white';
    brightnessLabel.style.display = 'block';
    container.appendChild(brightnessLabel);
    container.appendChild(brightnessSlider);

    // Contrast Slider
    const contrastSlider = document.createElement('input');
    contrastSlider.type = 'range';
    contrastSlider.min = '0';
    contrastSlider.max = '200';
    contrastSlider.value = '100';
    contrastSlider.style.width = '200px';
    contrastSlider.title = 'Adjust Contrast';

    const contrastLabel = document.createElement('label');
    contrastLabel.textContent = 'Contrast:';
    contrastLabel.style.color = 'white';
    contrastLabel.style.display = 'block';
    container.appendChild(contrastLabel);
    container.appendChild(contrastSlider);

    // Reset Button
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reset';
    resetButton.style.marginTop = '10px';
    resetButton.style.padding = '5px 10px';
    resetButton.style.backgroundColor = '#f44336';
    resetButton.style.color = 'white';
    resetButton.style.border = 'none';
    resetButton.style.borderRadius = '3px';
    resetButton.style.cursor = 'pointer';
    resetButton.title = 'Reset to Default';
    container.appendChild(resetButton);

    // Append sliders and reset button to body
    document.body.appendChild(container);

    // Get the video element
    const video = document.querySelector('video');
    if (!video) {
        alert('No video tag found on this page!');
    } else {
        // Apply initial brightness and contrast
        video.style.filter = `brightness(${brightnessSlider.value}%) contrast(${contrastSlider.value}%)`;

        // Update filters on slider change
        brightnessSlider.addEventListener('input', () => {
            video.style.filter = `brightness(${brightnessSlider.value}%) contrast(${contrastSlider.value}%)`;
        });

        contrastSlider.addEventListener('input', () => {
            video.style.filter = `brightness(${brightnessSlider.value}%) contrast(${contrastSlider.value}%)`;
        });

        // Reset sliders and video filter on button click
        resetButton.addEventListener('click', () => {
            brightnessSlider.value = 100;
            contrastSlider.value = 100;
            video.style.filter = 'brightness(100%) contrast(100%)';
        });
    }
})();
