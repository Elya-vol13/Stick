function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
    var sticksCount = document.getElementById("sticksCount").value;
    if (sticksCount > 25 | sticksCount < 20){
        alert("Можно выбрать только от 20 до 25");
    }
    else{
        var sticksContainer = document.getElementById("sticksContainer");
        sticksContainer.innerHTML = '';
        for (var i = 0; i < sticksCount; i++) {
            var randomStickNumber = getRandomInt(1, 4);
            var stickImage;
            switch (randomStickNumber) {
              case 1:
                var stick = document.createElement("img");
                stick.src = "1.png";
                stick.classList.add("stick");
                sticksContainer.appendChild(stick);
                break
              case 2:
                var stick = document.createElement("img");
                stick.src = "2.png";
                stick.classList.add("stick");
                sticksContainer.appendChild(stick);
                break
              case 3:
                var stick = document.createElement("img");
                stick.src = "3.png";
                stick.classList.add("stick");
                sticksContainer.appendChild(stick);
                break
              case 4:
                var stick = document.createElement("img");
                stick.src = "4.png";
                stick.classList.add("stick");
                sticksContainer.appendChild(stick);
                break

      }
    }
    
    }
    
    document.getElementById("playerForm").style.display = "block";
    document.getElementById("message").innerHTML = "";
}

function makeMove() {
    var playerInput = document.getElementById("playerInput").value;
    var sticks = document.getElementsByClassName("stick");
    if (playerInput > 3){
        alert("Можно забрать только 1, 2 или 3 палочки!")
    }
    else{
        var count = 0;
        for (var i = 0; i < playerInput; i++) {
            if (sticks.length > 0) {
                sticks[sticks.length - 1].remove();
                count++;
            }
        }
        
        if (sticks.length === 0) {
            document.getElementById("message").innerHTML = "Поздравляю! Вы выйграли!";
            document.getElementById("playerForm").style.display = "none";
        } else {
            var message = "Вы забрали " + count + " палоч";
            if (count === 1) {
                message += "ку";
            }
            if (count > 1) {
                message += "ки";
            }
            if (count === 0){
              message = "Вы не забрали палочки! Заберите палочки!"
            }
            document.getElementById("message").innerHTML =  message
        }
        
        document.getElementById("playerInput").value = "";
    }
}
