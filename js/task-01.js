const arrayOfCategories = document
  .querySelector('#categories')
  .querySelectorAll('.item');

console.log('Number Of Categories:', arrayOfCategories.length);

arrayOfCategories.forEach(listItem => {
  console.log('Category:', listItem.firstElementChild.textContent);
  console.log(
    'Elements:',
    listItem.firstElementChild.nextElementSibling.querySelectorAll('li').length,
  );
});
