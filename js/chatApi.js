// document.getElementById('generate').addEventListener('click', async () => {
//     const prompt = document.getElementById('prompt').value;

//     try {
//         const response = await fetch('https://api.openai.com/v1/completions', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer TU_API_KEY_DE_OPENAI`
//             },
//             body: JSON.stringify({
//                 model: 'text-davinci-003',  // Usa el modelo GPT-3.5
//                 prompt: prompt,
//                 max_tokens: 150
//             })
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();
//         document.getElementById('description').innerText = data.choices[0].text.trim();
//     } catch (error) {
//         console.error('Error:', error);
//         document.getElementById('description').innerText = 'Error generating description';
//     }
// });

document.getElementById('generate').addEventListener('click', async () => {
    const prompt = document.getElementById('prompt').value;

    try {
        const response = await fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer TU_API_KEY_DE_OPENAI`
            },
            body: JSON.stringify({
                model: 'text-davinci-003',  // Usa el modelo disponible
                prompt: prompt,
                max_tokens: 150
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const responseContainer = document.getElementById('response-container');
        responseContainer.textContent = data.choices[0].text.trim();
    } catch (error) {
        console.error('Error:', error);
        const responseContainer = document.getElementById('response-container');
        responseContainer.textContent = 'Error generating description';
    }
});

