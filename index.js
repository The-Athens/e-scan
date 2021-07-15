var getUserMedia = require('getusermedia')

getUserMedia({
    video: true, audio: true
},
    function (err, stream) {
        if (err) return console.error(err)

        console.log(stream)
        var video = document.createElement('video')
        document.body.appendChild(video)

        video.srcObject = stream
        video.play()

    })