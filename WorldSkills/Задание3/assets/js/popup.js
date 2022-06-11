const open = document.querySelectorAll('.popup-open');
const popupClose = document.querySelectorAll(".popup-close"); 
const popup = document.querySelectorAll('.popup');



if(open.length > 0){
	for(let index = 0; index < open.length; index++){
		const popuplink = open[index];
		const popups = popup[index];
		popuplink.addEventListener('click', function(e){
			openPopup(popups);
		})
	}
}

if(popupClose.length > 0){
	for(let index = 0; index < popupClose.length; index ++){
		const lock = popupClose[index];
		const popups = popup[index];

		lock.addEventListener('click', function(e){
			closePopup(popups);
		})

	}
}

function openPopup(popups){
	popups.className = 'popup.open';
}
function closePopup(popups){
	popups.className = 'popup';
}
