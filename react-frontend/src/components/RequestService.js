import axios from "axios";

/**
 * Service used by Request form to send data to backend
 */
class RequestService {

  /**
   * Create new request with given data
   * Data should match schema defined in Request.js
   */
  sendData(data) {
    axios.post("http://localhost:4200/requests/add/post", {
      clientId: data.clientId,
      gender: data.gender,
      items: data.items,
      urgency: data.urgency,
      notes: data.notes,
      // all created requests have initial status of pending
      status: "PENDING"
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  /**
   * Set Request with given id to contain given data
   * Data must match schema defined in Request.js
   */
  updateData(data, id) {
    axios.post("http://localhost:4200/requests/update/" + id, data)
    .then (response => {
      console.log(response);
      console.log(response.data);
    }).catch(err => console.log(err))
  }

}

export default RequestService;