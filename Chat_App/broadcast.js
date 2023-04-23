function Chat()
{
    //Variables
    const channel = new BroadcastChannel("Comp5210");

    //data taken from textarea
    let message = document.getElementById('comm');

    // message area that data will be sent to
    let received = document.getElementById('receive');

    // send message
    channel.postMessage(message.value);

    // receive message
    channel.onmessage = event => {
        received.innerHTML = event.data;
    }
}