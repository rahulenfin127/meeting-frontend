import { Button, Table } from "react-bootstrap";


const MeetingListPage = () =>{



return(
    <>
    <h1>Meeting List</h1>
    <Table striped bordered hover responsive className="table-sm">
        <thead>
            <tr>
                <th>Meeting Name</th>
                <th>Host Name</th>
                <th>Participants</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </Table>

    
    
    </>
)

}

export default MeetingListPage