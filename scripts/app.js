
        function resetClick(event){
            event.preventDefault(); 
            for (var i = 0; i < 15; i++) {
                userNumbers[i] = '';
            }
            setNumberInputs();
        }

        var generatedNumbers = [];

        function generateClick(event) {
            event.preventDefault();

            for (var i = 0; i < 15; i++) {
             
                    if(numberInputs[i].value === '' || generatedNumbers[i] === parseInt(numberInputs[i].value)){
                        userNumbers[i] = getRandomNumber(userNumbers);
                        generatedNumbers[i] = userNumbers[i];
                    }else{
                        userNumbers[i] = parseInt(numberInputs[i].value);
                    }
            }
            setNumberInputs();
        }
        
        function processForm() {
            setuserNumbers();
            let copyClient = userNumbers.slice();
            copyClient = removeInvalidIndex(copyClient);
            let curNum = copyClient[Math.floor(Math.random() * copyClient.length)];
            serverNumbers = [];

            for (var i = 0; i <= 5; i++) {
                if(isLuckyDraw() && copyClient.length > 0){
                    if(compareNumbers(serverNumbers, curNum)){
                        curNum = getUniqueNum(copyClient, serverNumbers, curNum);
                        serverNumbers[i] = curNum;
                    }else{
                        serverNumbers[i] = curNum;
                    }
                }else{
                    serverNumbers[i] = getRandomNumber(serverNumbers);
                }
            }
            
            displayResults(serverNumbers, copyClient);

            return false;
        }
