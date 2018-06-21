//Closing dropdowns
// document.querySelector('body').addEventListener('click', function(event) {
//   if (event.target.tagName.toLowerCase() === 'li') {
//     // do your action on your 'li' or whatever it is you're listening for
//   }
// });

import scrollToElement from 'scroll-to-element';

function hoverTargetActive(items){
    [...items].forEach(item=>{
      item.addEventListener('mouseenter', function(e) {
        if(this.classList.contains('inactive')) return;
        document.querySelector(item.dataset.target).classList.add('active');
      },
      item.addEventListener('mouseleave', function(e) {
        if(this.classList.contains('inactive')) return;
        document.querySelector(item.dataset.target).classList.remove('active');
      })
    )
  })
}

function handleDropdownToggle(target, action) {
  let element = document.getElementById(target);
  scrollToElement('#city-dropdown', {
    duration: 500
  });
  if(action=="open") {
    element.classList.add('active');
  } else if (action=="close") {
    element.classList.remove('active');
  } else {
    element.classList.toggle('active');
  }
}

const cityGWName = {
  'Ставрополь': 'stavropol',
  'Белгород': 'belgorod',
  'Белорецк': 'beloretsk',
  'Владивосток': 'vladivostok',
  'Липецк': 'lipetsk',
  'Елец': 'elets',
  'Ефремов': 'efremov',
  'Москва': 'moscow',
  'Невинномысск': 'nevinka',
  'Нефтекамск': 'neftekamsk',
  'Томск': 'tomsk',
  'Уфа': 'ufa',
  'Элиста': 'elista',
}

export {hoverTargetActive, handleDropdownToggle, cityGWName}
