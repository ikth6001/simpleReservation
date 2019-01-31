window.addEventListener('DOMContentLoaded', function() {
	initInternal();
	addMoreBtnEvent();
	addToTopBtnEvent();
});

function initInternal() {
	addCategoryClickEventListener();
	document.getElementsByClassName("categoryBtn")[0].click();
	addPromotions();
}

function addPromotions() {
	var element= document.getElementById('areaPromotion');
	var template= document.querySelector('#promotionTemplate').innerHTML;
	
	sendGetAjaxRequest('http://localhost:8080/edwith.reserve.service/api/promotioned', function() {
		if (this.status == 200) {
			var txt = this.responseText;
			var promotioned= JSON.parse(txt);
			
			var children= [];
			var leng= promotioned.length;
			for(var i=0; i<leng; i++) {
				var tmp= document.createElement('div');
				tmp.innerHTML= template.replace("${path}", 'data:image/PNG;base64,' + promotioned[i].imgBase64);
				children[i]= tmp.firstElementChild;
			}
			
			animate(element, children, template, promotioned, 0, 1, 0);
		}
	});
}

function animate(element, children, template, items, firstIdx, secondIdx, cnt) {
	window.requestAnimationFrame(function() {
		var firstEle= children[firstIdx];
		var secondEle= children[secondIdx];
		
		if(cnt == 0) {
			firstEle.style.left= "0px";
			firstEle.style.top= "0px";
			secondEle.style.left= "600px";
			secondEle.style.top= "-200px";
			element.appendChild(firstEle);
			element.appendChild(secondEle);
			cnt= cnt+1;
		} else if(cnt == 600) {
			element.innerHTML= "";
			firstIdx= (firstIdx === items.length-1) ? 0 : firstIdx+1;
			secondIdx= (secondIdx === items.length-1) ? 0 : secondIdx+1;
			cnt= 0;
		} else {
			firstEle.style.left= parseInt(firstEle.style.left) - 1 + "px";
			secondEle.style.left= parseInt(secondEle.style.left) - 1 + "px";
			cnt= cnt+1;
		}
		animate(element, children, template, items, firstIdx, secondIdx, cnt);
	});
}

var size= 4;

function addCategoryClickEventListener() {
	var elements = document.getElementsByClassName("categoryBtn");
	for (var i=0; i<elements.length; i++) {
		var ele = elements[i];
		ele.addEventListener("click", function() {
			for (var j = 0; j < elements.length; j++) {
				elements[j].style.color = "black";
				elements[j].style.textDecoration = "none";
			}
			this.style.color = "green";
			this.style.textDecoration = "underline";
			code= this.getAttribute('code');
			
			sendGetAjaxRequest('http://localhost:8080/edwith.reserve.service/api/products/' + code + '/' + size, function() {
				if(this.status == 200) {
					var response= this.responseText;
					var products= JSON.parse(response);
					setProductCount(code);
					displayProduct(products);
				}
			});
		}, false);
	}
}

function setProductCount(code) {
	sendGetAjaxRequest('http://localhost:8080/edwith.reserve.service/api/count/' + code, function() {
		var leng= this.responseText;
		var innerText= '예약 가능한 공연이 ' + leng + '개 있습니다.';
		var element= document.getElementById('areaCount');
		element.innerText= innerText;
	})
}

function displayProduct(products) {
	var html= document.querySelector('#productTemplate').innerHTML;
	var leng= products.length > 4 ? 4 : products.length;
	var area= document.getElementsByClassName('areaProduct');
	area[0].innerHTML= '';
	area[1].innerHTML= '';
	
	for(var i=0; i<leng; i++) {
		var child= document.createElement('div');
		child.setAttribute('style', 'margin-bottom: 15px;')
		child.setAttribute('class', 'product');
		var product= products[i];
		child.innerHTML= html.replace('${path}', 'data:image/PNG;base64,' + product.imgBase64)
							 .replace('${name}', product.name)
							 .replace('${place}', product.place)
							 .replace('${description}', product.description);
		
		console.log('idx ' + (i%2) );
		area[i%2].appendChild(child);
	}
}

function sendGetAjaxRequest(url, callback) {
	var req = new XMLHttpRequest();
	req.addEventListener("load", callback);
	req.open("GET", url, true);
	req.send();
}

function addMoreBtnEvent() {
	var ele= document.getElementById('areaBtnMore');
	ele.addEventListener("click", function() {
		
		/*고민좀 해보자...*/
		
		/*var displayedProducts= document.getElementsByClassName('product');
		var productLeng= displayedProducts.length;
		var toAdd= productLeng < products.length ? products.length - productLeng : -1;
		toAdd= toAdd > 4 ? 4 : toAdd;
		
		if(toAdd <= 0) {
			this.style.display= 'none';
			return;
		}
		 현재 전역 변수에 저장된 데이터를 가져오는데.. 페이징 조회로 변경하자 
		var area= document.getElementsByClassName('areaProduct');
		var html= document.querySelector('#productTemplate').innerHTML;
		for(var i=productLeng; i<productLeng + toAdd; i++) {
			var child= document.createElement('div');
			child.setAttribute('style', 'margin-bottom: 15px;')
			child.setAttribute('class', 'product');
			var product= products[i];
			child.innerHTML= html.replace('${path}', 'data:image/PNG;base64,' + product.imgBase64)
								 .replace('${name}', product.name)
								 .replace('${place}', product.place)
								 .replace('${description}', product.description);
			
			area[i%2].appendChild(child);
		}
		
		if( (productLeng + toAdd) === products.length ) {
			this.style.display= 'none';
		}*/
	});
}

function addToTopBtnEvent() {
	var ele= document.getElementById('areaBtnToTop');
	ele.addEventListener("click", function() {
		window.scrollTo(0, 0);
	});
}