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

  function switchClass(obj, st) {
    obj.classList.toggle(st);
  };

  // for (i = 0; i < myInfoSwitch.length; i++) {
  //   myInfoSwitch[i].onclick = switchClass(myCardInfo[i], 'card-info--active');
  //   myInfoSwitch[i].onclick = alert('OK');

  //   myCloseInfo[i].onclick = addEventListener('click', switchClass(myCardInfo[i], 'card-info--active'));
  // }

  // myInfoSwitch.forEach( (item, index) => {
  //   item.addEventListener('click', switchClass(item, 'card-info--active'));
  // });


});
