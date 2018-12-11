function readyListeners() {
    $('#elf-generator').on('click', () => {
        generateCharacter(elf, acolyte);
    });
    
    $('#half-orc-generator').on('click', () => {
        generateCharacter(halfOrc, outlander);
    });
}

function loadPage() {
    readyListeners();
}

$(loadPage);