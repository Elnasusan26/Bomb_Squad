document.getElementById('submit-answer').addEventListener('click', function() {
    const answer = document.getElementById('answer').value;
    
    // Check if the answer is correct
    if (answer === '4') {
        // Show explosion
        document.getElementById('explosion').classList.remove('hidden');
        document.getElementById('question-container').classList.add('hidden');
    } else {
        alert('Incorrect answer. Try again!');
    }
});