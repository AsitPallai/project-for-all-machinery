
  
    const center = { x: 300, y: 300 };
    const radius = 220;
    const branches = document.querySelectorAll('.branch');
    const total = branches.length;

    branches.forEach((branch, i) => {
      const angle = (i / total) * (2 * Math.PI);
      const x = center.x + radius * Math.cos(angle);
      const y = center.y + radius * Math.sin(angle);
      branch.style.left = `${x}px`;
      branch.style.top = `${y}px`;
    });

    function toggleBranches() {
      branches.forEach(branch => branch.classList.toggle('show'));
    }
