const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generatebtn = document.getElementById('generatebtn');
const downlodebtn = document.getElementById('downlodebtn');

const qrContainer = document.querySelector('.qr-body')

let size = sizes.value;

generatebtn.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmptyInput();
});

sizes.addEventListener('change',(e)=>{
    size = e.target.value;
    isEmptyInput();
});


downlodebtn.addEventListener('click', ()=>{
    let img = document.querySelector('.qr-body img');

    if(img !== null){
        let imgAtrr = img.getAttribute('src');
        downlodebtn.setAttribute("href", imgAtrr);
    }
    else{
        downlodebtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
});

function isEmptyInput() {

    qrText.value.length > 0 ?  generateQRCode() :   alert("Enter the text or URL to generate your QR code");
}
function generateQRCode(){
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
}