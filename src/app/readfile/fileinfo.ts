/* status:
- 200 = success
- 404 = file not found
fileName = the given fileName
page = the given page number
totalPage = total page that file contains
content = array containing lines of content
error = message in case status is not 200 */

export class Fileinfo {
    constructor(
    public status: number,
    public fileName?: string,
    public page: string = "1",
    public totalPage?: number,
    public content?: string[]
    ) {}
}
