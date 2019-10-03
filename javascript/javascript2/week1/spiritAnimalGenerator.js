
const spiritAnimalName = ['strong and courageous', 'highly influential',
                        'a master of correct timing', 'family is important to you',
                        'tireless nature', 'The Alligator','The black Jaguar',
                        'The German Shepherd', 'Winning horse', 'The Komodo Dragon'];
const input = document.getElementById('input');
const btn = document.getElementById('getSpirit');
const p = document.getElementById('spiritName');
    
     input.addEventListener('input', function () {
        get(input.value, 'text');
    }); 

    input.addEventListener('mouseover', function () {    
        get(input.value, 'hover');
    });

    btn.addEventListener('click', function() {    
        get(input.value, 'click');
    });

function get(value, selectedOption) {
    const arrName = Math.floor(Math.random() * spiritAnimalName.length);
    const option = document.getElementById('selectOption').value;
    if (!input.value || !selectedOption) {
        p.textContent = `Enter your name first and select an option`;
    } else if(option === selectedOption && value) {
        const inputName = value;
        p.textContent = `${inputName} - ${spiritAnimalName[arrName]}`;
        return p.textContent;
    }
}




