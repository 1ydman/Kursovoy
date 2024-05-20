var imagesSectional = []; 
var currentIndexSectional = 0;

var imagesSwing = [];
var currentIndexSwing = 0;

var imagesDoors = [];
var currentIndexDoors = 0;

var imagesIndustrial = []; 
var currentIndexIndustrial = 0;

var loadMoreButtonSectional = document.getElementById(
	'loadMoreButtonSectional'
);
var gallerySectional = document.querySelector('.gallery-sectional');

var loadMoreButtonSwing = document.getElementById('loadMoreButtonSwing');
var gallerySwing = document.querySelector('.gallery-swing');

var loadMoreButtonDoors = document.getElementById('loadMoreButtonDoors');
var galleryDoors = document.querySelector('.gallery-doors');

var loadMoreButtonIndustrial = document.getElementById(
	'loadMoreButtonIndustrial'
);
var galleryIndustrial = document.querySelector('.gallery-industrial');

fetch('gallery.xml')
	.then((response) => response.text())
	.then((data) => {
		var parser = new DOMParser();
		var xmlDoc = parser.parseFromString(data, 'text/xml');

		var imageElementsSectional = xmlDoc.querySelectorAll('sectional > image');
		imageElementsSectional.forEach((image) => {
			imagesSectional.push(image.textContent);
		});

		var imageElementsSwing = xmlDoc.querySelectorAll('swing > image');
		imageElementsSwing.forEach((image) => {
			imagesSwing.push(image.textContent);
		});
		var imageElementsDoors = xmlDoc.querySelectorAll('doors > image');
		imageElementsDoors.forEach((image) => {
			imagesDoors.push(image.textContent);
		});
		var imageElementsIndustrial = xmlDoc.querySelectorAll('industrial > image');
		imageElementsIndustrial.forEach((image) => {
			imagesIndustrial.push(image.textContent);
		});
		console.log(
			'Количество изображений для секционных ворот:',
			imagesSectional.length
		);
		console.log(
			'Количество изображений для распашных ворот:',
			imagesSwing.length
		);
		console.log('Изображения для секционных ворот:', imagesSectional);
		console.log('Изображения для распашных ворот:', imagesSwing);

		loadMoreButtonSectional.addEventListener('click', function () {
			for (var i = 0; i < 2; i++) {
				if (currentIndexSectional < imagesSectional.length) {
					var row = document.createElement('div');
					row.className = 'gallery-page-row';
					for (var j = 0; j < 4; j++) {
						if (currentIndexSectional < imagesSectional.length) {
							var column = document.createElement('div');
							column.className = 'column';
							var image = document.createElement('img');
							image.src = imagesSectional[currentIndexSectional];
							image.alt = 'Image ' + (currentIndexSectional + 1);
							column.appendChild(image);
							row.appendChild(column);
							currentIndexSectional++;
						}
					}
					gallerySectional.appendChild(row);
				}
			}
			if (currentIndexSectional >= imagesSectional.length) {
				loadMoreButtonSectional.style.display = 'none';
			}
		});

		loadMoreButtonSwing.addEventListener('click', function () {
			for (var i = 0; i < 2; i++) {
				if (currentIndexSwing < imagesSwing.length) {
					var row = document.createElement('div');
					row.className = 'gallery-page-row';
					for (var j = 0; j < 4; j++) {
						if (currentIndexSwing < imagesSwing.length) {
							var column = document.createElement('div');
							column.className = 'column';
							var image = document.createElement('img');
							image.src = imagesSwing[currentIndexSwing];
							image.alt = 'Image ' + (currentIndexSwing + 1);
							column.appendChild(image);
							row.appendChild(column);
							currentIndexSwing++;
						}
					}
					gallerySwing.appendChild(row);
				}
				if (currentIndexSwing >= imagesSwing.length) {
					loadMoreButtonSwing.style.display = 'none';
				}
			}
		});
		loadMoreButtonDoors.addEventListener('click', function () {
			for (var i = 0; i < 2; i++) {
				if (currentIndexDoors < imagesSwing.length) {
					var row = document.createElement('div');
					row.className = 'gallery-page-row';
					for (var j = 0; j < 4; j++) {
						if (currentIndexDoors < imagesSwing.length) {
							var column = document.createElement('div');
							column.className = 'column';
							var image = document.createElement('img');
							image.src = imagesDoors[currentIndexDoors];
							image.alt = 'Image ' + (currentIndexDoors + 1);
							column.appendChild(image);
							row.appendChild(column);
							currentIndexDoors++;
						}
					}
					galleryDoors.appendChild(row);
				}
				if (currentIndexDoors >= imagesDoors.length) {
					loadMoreButtonDoors.style.display = 'none';
				}
			}
		});
		loadMoreButtonIndustrial.addEventListener('click', function () {
			for (var i = 0; i < 2; i++) {
				if (currentIndexIndustrial < imagesIndustrial.length) {
					var row = document.createElement('div');
					row.className = 'gallery-page-row';
					for (var j = 0; j < 4; j++) {
						if (currentIndexIndustrial < imagesIndustrial.length) {
							var column = document.createElement('div');
							column.className = 'column';
							var image = document.createElement('img');
							image.src = imagesIndustrial[currentIndexIndustrial];
							image.alt = 'Image ' + (currentIndexIndustrial + 1);
							column.appendChild(image);
							row.appendChild(column);
							currentIndexIndustrial++;
						}
					}
					galleryIndustrial.appendChild(row);
				}
				if (currentIndexIndustrial >= imagesIndustrial.length) {
					loadMoreButtonIndustrial.style.display = 'none';
				}
			}
		});

		if (imagesSectional.length <= 8) {
			loadMoreButtonSectional.style.display = 'none';
		}
		if (imagesSwing.length <= 8) {
			loadMoreButtonSwing.style.display = 'none';
			console.log(
				'Display property of loadMoreButtonSwing:',
				loadMoreButtonSwing.style.display
			);

			if (imagesDoors.length <= 8) {
				loadMoreButtonDoors.style.display = 'none';
			}
		}
	})
	.catch((error) => console.error('Ошибка загрузки XML-файла:', error));
