
    function alignNum(numbersToAlign) {
        for (let i = 0; i < numbersToAlign.length; i++) {
            if (numbersToAlign[i] < 10) {
                numbersToAlign[i] = '0' + numbersToAlign[i];
            }
        }
    }          
       
    function feedbackClick() {
        var warningMessage = getElementById('warning');

        for (var i = 0; i < numberInputs.length; i++) {
           
            if (numberInputs[i].value !== '' && isDuplicate(numberInputs, numberInputs[i])) {
                
                warningMessage.textContent = "Please enter a unique number for each input.";
                return setWarning(warningMessage);
                
            }else if (numberInputs[i].value !== '' && (numberInputs[i].value < 1 || numberInputs[i].value > 60)){
                
                        warningMessage.textContent = "The number "+numberInputs[i].value+" is invalid";
                        return setWarning(warningMessage);
            }
        }

        warningMessage.textContent = '';
        return processForm();
    }

    function displayMsg(userNumbers, serverNumbers, messageState) {
        var correctNumbers = 0;

        for (var i = 0; i < 15; i++) {
            for (var j = 0; j < serverNumbers.length; j++) {
                if (parseInt(serverNumbers[j]) === parseInt(userNumbers[i])) {
                    correctNumbers++;
                }
            }
        }

        var resultsDiv = querySelector('.results');
        var resultsParagraph = querySelector('p.sentence-style');

        if(!messageState.length){
            resultsParagraph.textContent = "You didn't put any numbers!";
        }else if(userNumbers.length < 6){
            resultsParagraph.textContent = "You need to put less 6 numbers!";
        }else if (correctNumbers >= 6) {
            resultsParagraph.textContent = 'You got '+correctNumbers+' numbers right. You win!';
        } else {
            resultsParagraph.textContent = 'You got '+correctNumbers+' numbers right. You lose!';
        }

        resultsDiv.appendChild(resultsParagraph);

    }

    function displayResults(serverNumbers, messageState){
        var resultsDiv = querySelector('.results');
        var resultsParagraph = resultsDiv.querySelector('p.server-number');
        alignNum(serverNumbers);
        resultsParagraph.textContent = '(' + serverNumbers.join(') (') + ')';

        resultsDiv.appendChild(resultsParagraph);
        displayMsg(userNumbers, serverNumbers, messageState);
    }

    function uniqueFeedbackMsg(input) {
        var allInputs = querySelectorAll('input[type="number"]');
        var warningMessage = getElementById('warning');

        if(isDuplicate(allInputs, input)){
            return warningMessage.textContent = "Please enter a unique number for each input.";
        }else if (input.value !== '' && (input.value < 1 || input.value > 60)){
            return warningMessage.textContent = "The number "+input.value+" is invalid.";
        }else{
            warningMessage.textContent = '';
        }
    }

    function setWarning(warningMessage){
        applyWarningStyles(warningMessage, "3em", "#fff");
        setTimeout(function () {
            applyWarningStyles(warningMessage, "2.5em", "#dcd2f5");
        }, 500);
        
        return false;
    }

    function applyWarningStyles(element, fontSize, color) {
        element.style.transition = ".5s";
        element.style.fontSize = fontSize;
        element.style.color = color;
    }
