// Variables to control camera rotation
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
let rotation = { x: 0, y: 0 };

const cameraWrapper = document.querySelector('#cameraWrapper');
const sceneWrapper = document.querySelector('#sceneWrapper');

// Get the screen dimensions
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

// Mouse down event to start dragging
document.addEventListener('mousedown', (event) => {
  isDragging = true;
  previousMousePosition = {
    x: event.clientX,
    y: event.clientY,
  };

  sceneWrapper.classList.add('grabbing');
  sceneWrapper.classList.remove('not_grabbing');
});

// Mouse up event to stop dragging
document.addEventListener('mouseup', () => {
  isDragging = false;

  sceneWrapper.classList.remove('grabbing');
  sceneWrapper.classList.add('not_grabbing');
});

// Mouse move event to update camera rotation and handle wrapping
document.addEventListener('mousemove', (event) => {
  if (!isDragging) return;

  let mouseX = event.clientX;
  let mouseY = event.clientY;

  // Calculate mouse delta
  let deltaX = mouseX - previousMousePosition.x;
  let deltaY = mouseY - previousMousePosition.y;

  // Update the camera's rotation based on mouse movement
  rotation.y += deltaX * 0.1;  // Horizontal rotation (yaw)
  rotation.x += deltaY * 0.1;  // Vertical rotation (pitch)

  // Apply the new rotation to the camera wrapper
  cameraWrapper.setAttribute('rotation', `${rotation.x} ${rotation.y} 0`);

  // Update the previous mouse position
  previousMousePosition = { x: mouseX, y: mouseY };
});
