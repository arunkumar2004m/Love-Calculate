


        function calculateLoveScore() {
            let name1 = document.getElementById("yourname").value.trim();
            let name2 = document.getElementById("yourpartner").value.trim();
            let result = document.getElementById("result");
            let shareButton = document.getElementById("shareButton");

            let namePattern = /^[A-Za-z\s]+$/;

            if (name1 === "" || name2 === "") {
                result.innerHTML = "❌ Please enter both names!";
                result.style.color = "red";
                result.style.opacity = "1";
                shareButton.style.display = "none";
                return;
            }

            if (!namePattern.test(name1) || !namePattern.test(name2)) {
                result.innerHTML = "❌ Names must only contain letters!";
                result.style.color = "red";
                result.style.opacity = "1";
                shareButton.style.display = "none";
                return;
            }

            let score = generateLoveScore(name1, name2);
            displayLoveScore(score, result, shareButton);
        }

        function generateLoveScore(name1, name2) {
            let combinedNames = (name1 + name2).toLowerCase();
            let score = 0;

            for (let i = 0; i < combinedNames.length; i++) {
                score += combinedNames.charCodeAt(i);
            }

            return (score % 100) + 1;
        }

        function displayLoveScore(score, result, shareButton) {
            let message = "";
            if (score >= 80) {
                message = `❤️ Your Love Score is: ${score}% <br> You're a perfect match!`;
                result.style.color = "green";
            } else if (score >= 50) {
                message = `💛 Your Love Score is: ${score}% <br> You have good potential together!`;
                result.style.color = "orange";
            } else {
                message = `💔 Your Love Score is: ${score}% <br> Not the best couple, but friendship is great!`;
                result.style.color = "red";
            }

            result.innerHTML = message;
            result.style.opacity = "1";
            result.classList.add("fade-in");
           

            shareButton.style.display = "block";
          
        }

        function shareResult() {
            let resultText = document.getElementById("result").innerText;
            let shareData = {
                title: "Love Calculator ❤️",
                text: resultText,
                url: window.location.href
            };

            if (navigator.share) {
                navigator.share(shareData).catch(err => console.log("Error sharing:", err));
            } else {
                alert("Sharing not supported in this browser.");
            }
        }
        
