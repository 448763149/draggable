/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-05-28 15:17:43
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-05-28 15:38:07
 * @detail: 
 * @change: 
 */
const empty = document.querySelector('div.empty');
const h1 = document.querySelector('h1');
const patterns = document.querySelector('.patterns');
const tshirt = document.querySelector('.tshirt');
let name;

tshirt.addEventListener('dragstart',(e)=>{
	h1.innerHTML = '这个不能拖喔';
});

tshirt.addEventListener('dragend',(e)=>{
	return 0;
});

document.addEventListener('dragstart',(e)=>{
	name = e.target.alt;
},false);

patterns.addEventListener('drag',(e)=>{
	e.target.style.border = '3px dashed red';
	empty.style.border = '3px dashed red';
},false);

document.addEventListener('dragend',(e)=>{
	e.target.style.border = 'none';
	empty.style.border = 'none';
	if(patterns.children.length !== 0){
		h1.innerHTML = '拖动你喜欢的图案到衣服上吧';
	}else{
		h1.innerHTML = '很多时候，人生就这样在你期盼中失望，而在不经意间又错过了机会。';
	}
	h1.style.color = '#ffb8c6';
},false);

empty.addEventListener('dragenter',(e)=>{
	if(empty.firstChild){
		empty.removeChild(empty.firstChild);
	}
	h1.innerHTML = name;
	h1.style.color = '#ffb8c6';
},false);

empty.addEventListener('dragover',(e)=>{
	e.preventDefault();
},false);

empty.addEventListener('drop',(e)=>{
	e.preventDefault();
	e.target.appendChild(document.querySelector(`img[alt=${name}]`));
},false);
