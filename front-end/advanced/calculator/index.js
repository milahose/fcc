$(() => {
  let input = '';
  
  $('button').on('click', (e) => {
    e.preventDefault();
    const $this = $(e.target);

    console.log($this.text())
  });
});