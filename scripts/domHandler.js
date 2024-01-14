
    getElementById('megaForm').addEventListener('submit', function(event){ 
        event.preventDefault();
        processForm();
    });

    var numberInputs = querySelectorAll('input[type="number"]');
    var serverNumbers = [];
    var userNumbers = [];

    function getElementById(id) {
        return document.getElementById(id);
    }
    
    function setElementValueById(id, value) {
        document.getElementById(id).value = value;
    }
    
    function querySelectorAll(selector) {
        return document.querySelectorAll(selector);
    }

    function querySelector(selector) {
        return document.querySelector(selector);
    }

    function setNumberInputs(){
        for (var i = 0; i < numberInputs.length; i++) {
            numberInputs[i].value = parseInt(userNumbers[i]);
        }
    }

    function setuserNumbers(){
        for (var i = 0; i < 15; i++) {
                userNumbers[i] = parseInt(numberInputs[i].value);
        }
    }
