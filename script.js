const form = document.getElementById('exerciseForm');
const exerciseList = document.getElementById('exerciseList');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('exerciseName').value.trim();
  const series = document.getElementById('series').value.trim();
  const reps = document.getElementById('repetitions').value.trim();

  // VALIDATION
  if (!name || !series || !reps || series <= 0 || reps <= 0) {
    alert('Preencha todos os campos corretamente!');
    return;
  }

  addExercise(name, series, reps);
  form.reset();
});

function addExercise(name, series, reps) {
  const card = document.createElement('div');
  card.className = 'bg-gray-50 border p-4 rounded shadow flex justify-between items-center';

  const info = document.createElement('div');
  info.innerHTML = `
    <p class="font-semibold">${name}</p>
    <p>Séries: ${series} | Repetições: ${reps}</p>
  `;

  const buttons = document.createElement('div');
  buttons.className = 'flex gap-2';

  const concludeBtn = document.createElement('button');
  concludeBtn.textContent = 'Concluir';
  concludeBtn.className = 'bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600';

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remover';
  removeBtn.className = 'bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600';

  // MARK AS DONE
  concludeBtn.addEventListener('click', () => {
    card.classList.add('opacity-60');
    concludeBtn.disabled = true;
    removeBtn.disabled = true;
  });

  // REMOVE
  removeBtn.addEventListener('click', () => {
    if (!concludeBtn.disabled) {
      card.remove();
    }
  });

  buttons.appendChild(concludeBtn);
  buttons.appendChild(removeBtn);

  card.appendChild(info);
  card.appendChild(buttons);

  exerciseList.appendChild(card);
}