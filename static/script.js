document.getElementById('loginForm').addEventListener('submit', function(event) {  
    event.preventDefault();  
    alert('Login functionality not implemented yet.');  
});  

document.getElementById('registerForm').addEventListener('submit', function(event) {  
    event.preventDefault();  
    alert('Registration functionality not implemented yet.');  
});  

function removeItem(button) {  
    const item = button.parentElement;  
    item.remove();  
    alert('Item removed from cart.');  
}  

function checkout() {  
    alert('Checkout functionality not implemented yet.');  
}

document.getElementById('uploadForm').addEventListener('submit', async function(event) {  
    event.preventDefault();  
    
    const fileInput = document.getElementById('imageUpload');  
    const formData = new FormData();  
    formData.append('file', fileInput.files[0]);  

    try {  
        const response = await fetch('http://localhost:5000/upload', { // Update with your backend URL  
            method: 'POST',  
            body: formData,  
        });  

        if (!response.ok) {  
            throw new Error('Network response was not ok');  
        }  

        const data = await response.json();  
        document.getElementById('resultText').innerText = `Disease: ${data.disease}`;  
        document.getElementById('result').style.display = 'block';  
    } catch (error) {  
        alert('Error uploading image: ' + error.message);  
    }  
});