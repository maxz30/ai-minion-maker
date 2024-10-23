const form = document.getElementById('minion-form');
const generateBtn = document.getElementById('generate-btn');
const minionImage = document.getElementById('minion-image');

generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const eyes = document.getElementById('eyes').value;
    const nose = document.getElementById('nose').value;
    const mouth = document.getElementById('mouth').value;
    const background = document.getElementById('background').value;
    const style = document.getElementById('style').value;
    
    const url = `https://image.pollinations.ai/prompt/Detailed%20minion%20boy,%20${eyes},%20${nose},%20${mouth},%20in%20a%20${background}%20scene%20with%20a%20full%20moon,%20${style}%20style,%20spooky,%20highly%20detailed?nologo=1&seed=917530
