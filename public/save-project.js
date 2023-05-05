const projectFormHandler = async (event) => {
  event.preventDefault();

  const projectName = document.querySelector('#project-name').value.trim();
  const projectDescription = document
    .querySelector('#project-description')
    .value.trim();
  const projectFunding = document
    .querySelector('#project-funding')
    .value.trim();
  const projectCreated = Date.now();

  if (projectName && projectDescription && projectFunding) {
    const response = await fetch('/api/projects', {
      method: 'POST',
      body: JSON.stringify({
        projectName,
        projectDescription,
        projectFunding,
        projectCreated,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to save project.');
    }
  }
};

document
  .querySelector('.project-form')
  .addEventListener('submit', projectFormHandler);
