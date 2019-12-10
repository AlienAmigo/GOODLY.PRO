function ready (fn) {
  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {

  const myInfoSwitch = document.querySelectorAll('.card__important-info');
  const myCloseInfo = document.querySelectorAll('.card-info__close');
  const myCardInfo = document.querySelectorAll('.card-info');

  myInfoSwitch.forEach( (item, index) => {
    item.addEventListener('click', function() {
      myCardInfo[index].classList.add('card-info--active');
      myInfoSwitch[index].classList.add('card__important-info--non-active');
    });
  });

  myCloseInfo.forEach( (item, index) => {
    item.addEventListener('click', function() {
      myCardInfo[index].classList.remove('card-info--active');
      myInfoSwitch[index].classList.remove('card__important-info--non-active');
    });
  });


});
