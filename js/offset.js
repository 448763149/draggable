/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-05-28 15:57:58
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-05-28 17:46:18
 * @detail: 
 * @change: 
 */
const h1 = document.querySelector('h1')
const photos = document.querySelector('div.photos')
// 获取需要移动位置的decument
const box = document.querySelector('.box')
const cat = document.querySelector('img[alt="cat"]')


//获得容器坐标。
var container = document.getElementById('innerContainer');

//开始 X 坐标。
var startX = 15;
//开始 Y 坐标。
var startY = 15;
//结束 X 坐标。
var maxX = startX + container.clientWidth - cat.width;
//结束 Y 坐标。
var maxY = startY + container.clientHeight - cat.height;

const photoLeft = photos.offsetLeft
const photoTop = photos.offsetTop



// 获取需要移动到的位置
const boxLeft = box.offsetLeft
const boxTop = box.offsetTop
cat.addEventListener('mousedown',(e) => {
  const catLeft = e.pageX - photoLeft - cat.offsetLeft
  const catTop = e.pageY - photoTop - cat.offsetTop
  function moving(e) {
    //不可以超出指定的范围。
   
    let moveLeft =  e.pageX - catLeft - photoLeft
    let moveTop =  e.pageY - catTop - photoTop
    if (moveLeft >= startX && moveTop >= startY && moveLeft <= maxX && moveTop <= maxY) {
      //当移动位置在范围内时，元素跟随鼠标移动。
      cat.style.left = moveLeft + 'px'
      cat.style.top = moveTop + 'px'
    }else{
      //向右移动时，如果移动坐标没有大于最大 X 坐标，则移动，否则设置成最大 X 坐标的值。
      if (moveLeft >= startX && moveLeft <= maxX) {
        cat.style.left = moveLeft + "px";
      } else if (moveLeft > maxX) {
        cat.style.left = maxX + "px";
      } else if (moveLeft < startX) {
        cat.style.left = startX + "px";
      }
      //向下移动时，如果移动坐标没有大于最大 Y 坐标，则移动，否则设置成最大 Y 坐标的值。
      if (moveTop >= startY && moveTop <= maxY) {
        cat.style.top = moveTop + "px";
      } else if (moveTop > maxY) {
        cat.style.top = maxY + "px";
      } else if (moveTop < startY) {
        cat.style.top = startY + "px";
      }
    }
  }
  document.addEventListener('mousemove', moving, false)
  document.addEventListener('mouseup',(e) => {
    if(cat.offsetLeft >= boxLeft && cat.offsetLeft <= boxLeft + 5 && cat.offsetTop >= boxTop &&  cat.offsetTop <= boxTop + 5){
      h1.innerHTML='成功' 
    }else{
      h1.innerHTML='失败'
    }
    document.removeEventListener('mousemove', moving)
  },false)
},false)



