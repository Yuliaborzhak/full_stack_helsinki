sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: Status code 201 (Created)
    deactivate server

    Note right of browser: The browser executes a JS function for creating a new note as JSON, pushing it into the array of notes, rerendering the note list on the page and sending the new note to the server as JSON.
    Note right of server: The server creates a new note object, and adds it to an array called notes

    
