## Evergrowing high level list of remaining work:

### Developer changes
    - switch over to Typescript (?)
    - rename Request to something else because "request" has too many meanings within app
    - setup testing framework
    - write some tests
    - change all the single quotes to double because having both is driving me crazy
    - add logging

### DB
    - create and store user information
        - user id, name, and role (approver, case worker, volunteer)
    - add status to requests (Waiting, Approved, Rejected, Fulfilled)

### Request Creation
    - track id of requester
    - add option to add house/location
    - need list of items and possible attributes of items
    - create fields for all types of items
    - add field for comments

### Request View for Approver
    - notify requester when status is changed
    - some UI treatment when button is selected
    - filter requests by status - WAITING, APPROVED, REJECTED, FULFILLED
    - [lower priority] ability to approve/reject items within request
    - ability to add comments/feed

### Request View for Requester
    - view lists of requests user has made
    - receive notifictions when approver makes change
    - ability to add comments/feed

### Login System/Authorization
    - need login system that prevents users from reusing passwords used in DESC internal systems

### Notifications
    - in app notifications when messages are added or statuses are changed
    - email integration & notifications with link to open app

### Wishlist
    - add another status of WISHLIST for items that cannot be fulfilled anytime soon, but don't want to reject outright

### [Not MVP] Volunteer View
    - view all approved requests that need to be fulfilled
    - ability to mark request as fulfilled
