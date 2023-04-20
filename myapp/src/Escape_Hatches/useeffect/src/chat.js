// export function createConnection() {
//     // A real implementation would actually connect to the server
//     return {
//       connect() {
//         console.log('✅ Connecting...');
//       },
//       disconnect() {
//         console.log('❌ Disconnected.');
//       }
//     };
//   }
  
export function createConnection(serverUrl, roomId) {
    // A real implementation would actually connect to the server
    return {
      connect() {
        console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
      },
      disconnect() {
        console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
      }
    };
  }
  