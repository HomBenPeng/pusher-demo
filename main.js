// Initialize Channels client
let channels = new Pusher('6401d26c3bbb0832b001', {
    cluster: 'ap3'
  })
  
  // Subscribe to the appropriate channel
  let channel = channels.subscribe('channel-name')
  
  // Bind a callback function to an event within the subscribed channel
  channel.bind('event-name', function(data) {
    pushData(data)
    // Do what you wish with the data from the event
  })
//api/channels-event