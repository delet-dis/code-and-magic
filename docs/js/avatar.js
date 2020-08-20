'use strict';

//функция изменения превью аватарки пользователя
(function () {
  const filePicker = document.querySelector('.upload input[type=file]'),
    preview = document.querySelector('.setup-user-pic'),
    previewNonModal = document.querySelector('.setup-open-icon');

  const FILE_TYPES = ['gif', 'jpeg', 'png', 'jpg'];

  //слушатель изменения аватарки
  filePicker.addEventListener('change', () => {
    let file = filePicker.files[0];

    let fileName = file.name.toLowerCase();

    let matches = FILE_TYPES.some((item) => {
      return fileName.endsWith(item);
    });

    if (matches) {
      let reader = new FileReader();

      reader.addEventListener('load', () => {
        preview.src = reader.result;
        previewNonModal.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  })
})();