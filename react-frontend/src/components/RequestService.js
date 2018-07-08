    import axios from 'axios';

    /**
     * Service used by Request form to send data to backend
     */
    class RequestService {

      sendData(data) {
        axios.post('http://localhost:4200/items/add/post', {
            clientId: data.clientId,
            gender: data.gender,
            items: data.items,
            // all created requests have initial status of pending
            status: 'PENDING'
      })
      .then(function (response) {
          console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      }
      
    }

    export default RequestService;