// Toast Notification Functionality
        document.addEventListener("DOMContentLoaded", () => {
            const toastOverlay = document.getElementById("toast-overlay");

            function showToast(message, bgColor) {
                toastOverlay.textContent = message;
                toastOverlay.style.backgroundColor = bgColor;
                toastOverlay.classList.add("toast-show");

                setTimeout(() => {
                    toastOverlay.classList.remove("toast-show");
                }, 3000);
            }

            document.getElementById("btn1").addEventListener("click", () => {
                showToast("Success! Action completed successfully.", "#10b981");
            });
            
            document.getElementById("btn2").addEventListener("click", () => {
                showToast("Error! Something went wrong.", "#ef4444");
            });
            
            document.getElementById("btn3").addEventListener("click", () => {
                showToast("Info: Here's some information.", "#84cc16");
                });
            
            document.getElementById("btn4").addEventListener("click", () => {
                showToast("Warning: Please check your input.", "#f97316");
            });
        });
