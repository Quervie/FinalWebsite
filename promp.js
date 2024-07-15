 document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            setTimeout(function() {
                document.getElementById('response').style.display = 'block';
            }, 500); // Show the response message after a short delay
        });
