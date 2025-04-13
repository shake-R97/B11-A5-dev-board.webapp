function getsElementbyId(name){
    const value = document.getElementById(name).innerText
    const convertedValue = parseInt(value);
    return convertedValue;
}

function getContainer(conNames) {
    const container = document.getElementById(conNames);
    return container;
}

function getButton(btn){
    const button = document.getElementById(btn);
    button.disabled = true;
    return button;
}

function getSlogan(sloganId){
    const slogans = document.getElementById(sloganId).innerText;
    return slogans;
}