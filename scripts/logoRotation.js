const circleContainer = document.getElementById('circle-container');
let rotationAngle = 0;
let degrees = 0.02;

function rotateLogos() {
    if(!(rotationAngle+degrees <= 360))
        rotationAngle = 0;            
    else
        rotationAngle = rotationAngle + degrees;
        

    circleContainer.style.setProperty('--rotation-angle', `${rotationAngle}deg`);
    updateLogoRotation();
};

function updateLogoRotation() {
    document.querySelectorAll('.hero-logos').forEach((logo) => {
        logo.style.transform = `rotate(-${rotationAngle}deg)`
    });
}




function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
window.onload = async function(){
    await startRotation()
}

async function startRotation() {
    rotate()
    async function rotate() {
        rotateLogos();
        await sleep(1)
        rotate();
    }
}