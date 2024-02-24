const houseBtn = document.getElementById("btn1");
const educationBtn = document.getElementById("btn2");
const medicalBtn = document.getElementById("btn3");
const scholarBtn = document.getElementById("btn4");

const houseDiv = document.getElementById("homeDiv");
const educationDiv = document.getElementById("educationDiv");
const medicalDiv = document.getElementById("medicalDiv");
const scholarDiv = document.getElementById("scholarDiv");

const page2 = document.getElementById("page2");
const backBtn = document.getElementsByClassName("backBtn");

function backHome(){
    houseDiv.style.opacity = 0;
    educationDiv.style.opacity = 0;
    medicalDiv.style.opacity = 0;
    scholarDiv.style.opacity = 0;
    page2.style.display = "none";
}

function resetZIndex() {
    houseDiv.style.zIndex = 1;
    educationDiv.style.zIndex = 1;
    medicalDiv.style.zIndex = 1;
    scholarDiv.style.zIndex = 1;
}

function hideAllDivs() {
    resetZIndex();
    houseDiv.style.opacity = 0;
    educationDiv.style.opacity = 0;
    medicalDiv.style.opacity = 0;
    scholarDiv.style.opacity = 0;
}

function appearDiv(div, zIndex) {
    hideAllDivs();
    div.style.opacity = 1;
    div.style.zIndex = zIndex;
    page2.style.display = "block";
    page2.style.backgroundColor = "black";
    page2.style.opacity = .5;

}

function appearHouse() {
    appearDiv(houseDiv, 2);
}

function appearEducation() {
    appearDiv(educationDiv, 2);
}

function appearMedical() {
    appearDiv(medicalDiv, 2);
}

function appearScholar() {
    appearDiv(scholarDiv, 2);
}

houseBtn.onclick = appearHouse;
educationBtn.onclick = appearEducation;
medicalBtn.onclick = appearMedical;
scholarBtn.onclick = appearScholar;

for(let i = 0; i < backBtn.length; i++){
    backBtn[i].onclick = backHome;
    
}


const switchBtn = document.getElementById('switch');
    switchBtn.addEventListener('change', () => {
        if (switchBtn.checked) {
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
        }
});
