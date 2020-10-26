var socket = io();

socket.on('connect', function(){
    socket.emit('requestDbNames');//Get database names to display to user
});

socket.on('gameNamesData', function(data){
    for(var i = 0; i < Object.keys(data).length; i++){
        var div = document.getElementById('game-list');
        var button = document.createElement('button');
        
        button.innerHTML = data[i].name;
        button.setAttribute('onClick', "startGame('" + data[i].id + "')");
        button.setAttribute('id', 'gameButton');
        button.setAttribute('class', 'mt-3 bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded w-1/2 h-16')
        div.appendChild(button);
        div.appendChild(document.createElement('br'));

    }
});

function startGame(data){
    window.location.href="/host/" + "?id=" + data;
}

function deleteAll(){
    console.log("Deleted all quizzes.");
    socket.emit('deleteAll');
}
