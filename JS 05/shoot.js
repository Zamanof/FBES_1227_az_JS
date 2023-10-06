let bulletX = 5;
let onFly = false

const moveBullet = ()=>{
    if(onFly){
        if (bulletX >= 200){
            bulletX = 30;
            onFly = false;
        }
        else {
            setTimeout(moveBullet, 50)
        }
        bullet.style.left = `${bulletX}px`
        bulletX += 5
    }
}

const keyHandler = (e)=>{
    console.log(e)
    if (e.code === 'Space' && !onFly){
        onFly = true
        moveBullet()
    }
}