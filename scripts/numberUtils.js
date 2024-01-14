
    function getUniqueNum(arrRoot, array, letNum){
        do{
            arrRoot = removeNumber(arrRoot, letNum);
            letNum = arrRoot[Math.floor(Math.random() * arrRoot.length)];
                if(arrRoot <= 0){
                    return Math.floor(Math.random() * 61);
                }
        }
        while(compareNumbers(array, letNum));
        return letNum;
    }

    function getRandomNumber(excludeArray) {
        let randomNum;
        while (excludeArray.includes(randomNum = Math.floor(Math.random() * 60) + 1));
        return randomNum;
    }

    function isLuckyDraw(){
        return Math.floor(Math.random() * 100)+1 <= getElementById('percentage').value;
    }
        