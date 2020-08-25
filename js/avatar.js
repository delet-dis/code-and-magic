'use strict';

// функция изменения превью аватарки пользователя
(() => {
  const filePicker = document.querySelector('.upload input[type=file]');
  const preview = document.querySelector('.setup-user-pic');
  const previewNonModal = document.querySelector('.setup-open-icon');

  const FILE_TYPES = ['gif', 'jpeg', 'png', 'jpg'];

  // слушатель изменения аватарки
  filePicker.addEventListener('change', () => {
    const file = filePicker.files[0];

    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((item) => fileName.endsWith(item));

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        preview.src = reader.result;
        previewNonModal.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
})();
