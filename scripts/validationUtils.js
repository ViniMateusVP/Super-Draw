
        numberInputs.forEach(function (input) {
            input.addEventListener('keydown', function (event) {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    feedbackClick();
                }
            });
        });

    
    function isDuplicate(inputs, currentInput) {
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i] !== currentInput && parseInt(inputs[i].value) === parseInt(currentInput.value)) {
                return true;
            }
        }
        return false;
    }

    function removeNumber(array, letNum){
            
        for(let i = array.length-1; i >= 0; i--){
            if(array[i] === letNum){
                array.splice(i, 1);
                return array;
            }
        }
        return array;
    }

    function removeInvalidIndex(array){
        
        for(let i = array.length-1; i >= 0; i--){
            if(isNaN(array[i]) || array[i] === 0 || array[i] === ''){
                array.splice(i, 1);
            }
        }
        return array;
    }

    function compareNumbers(arrNumber, letNumber){
        if(arrNumber.includes(letNumber)){
            return true;
        }
        return false;
    }

