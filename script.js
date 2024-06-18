document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const text = document.getElementById('post-text').value;
    const imageFile = document.getElementById('post-image').files[0];
    const videoFile = document.getElementById('post-video').files[0];
    const audioFile = document.getElementById('post-audio').files[0];

    const postContainer = document.createElement('div');
    postContainer.className = 'post';

    const postText = document.createElement('p');
    postText.textContent = text;
    postContainer.appendChild(postText);

    if (imageFile) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(imageFile);
        postContainer.appendChild(img);
    }

    if (videoFile) {
        const video = document.createElement('video');
        video.src = URL.createObjectURL(videoFile);
        video.controls = true;
        postContainer.appendChild(video);
    }

    if (audioFile) {
        const audio = document.createElement('audio');
        audio.src = URL.createObjectURL(audioFile);
        audio.controls = true;
        postContainer.appendChild(audio);
    }

    document.getElementById('posts-container').appendChild(postContainer);

    // Clear form
    document.getElementById('post-form').reset();
});
