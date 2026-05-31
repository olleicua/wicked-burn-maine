document.currentScript.after(
  <p className="gallery-year-picker">
    <button
      onClick={event => {
        document.getElementById('gallery-2025').style.display = 'block';
        document.getElementById('gallery-2026').style.display = 'none';
        document.querySelectorAll('.gallery-year-picker button').forEach(
          $b => $b.classList.remove('active')
        );
        event.target.classList.add('active');
      }}>
      2025
    </button>
    <button
      className="active"
      onClick={() => {
        document.getElementById('gallery-2025').style.display = 'none';
        document.getElementById('gallery-2026').style.display = 'block';
        document.querySelectorAll('.gallery-year-picker button').forEach(
          $b => $b.classList.remove('active')
        );
        event.target.classList.add('active');
      }}>
      2026
    </button>
  </p>
);
