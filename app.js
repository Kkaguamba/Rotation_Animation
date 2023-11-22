let circleText = circleBtn.querySelector(".circle-text");
circleText.innerHTML = circleText.textContent.split("").map((char, index) => '<span style="transform: rotate(${index * 28.3}deg)">${char}</span>').join("");
