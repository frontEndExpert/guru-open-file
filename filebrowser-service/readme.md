Start service using node by running `node index.js`

Call api via ajax to the url with parameters like this
http://yourhost:8081/read-file/fileName/:fileName/page/:page

Example API call:
http://localhost:8081/read-file/fileName/smallfile.txt/page/1
http://localhost:8081/read-file/fileName/largefile.txt/page/20

Parameters:
- fileName = file name to read content (required). There are 3 files available as below
-- smallfile.txt
-- file.txt
-- largefile.txt
- page = Page number (required)

Response:
    status:
        - 200 = success
        - 404 = file not found
    fileName = the given fileName
    page = the given page number
    totalPage = total page that file contains
    content = array containing lines of content
    error = message in case status is not 200
