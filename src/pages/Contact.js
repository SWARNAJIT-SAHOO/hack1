import { Row,Col,Table, Container } from "reactstrap";
import {BsFillCcCircleFill} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";
import {BsFacebook} from "react-icons/bs";

const Contact=()=>{
    return(
        <div style={{width:'100%',backgroundColor:'black',color:'wheat'}}>
            <Container>


<Row>
    <Col md={7}><br></br>
        <h2>Know Your Rights</h2>
    </Col>
    <Col md={5}><br></br>
        <Table dark >
            <tr>
                <td>RESOURCES</td>
                <td>FOLLOW US</td>
                <td>LEGAL</td>
            </tr><br></br>
            <tr>
                <td>Github</td>
                <td>Terms</td>
                <td>Privacy Policy</td>
            </tr><br></br>
            <tr>
                <td></td>
                <td>Twitter</td>
                <td>Facebook</td>
            </tr>
        </Table>
    </Col>
</Row>


<hr></hr>
<br></br>
<Row >
            <Col md={8}>
            <Row>
            <Col md={1} ><BsFillCcCircleFill/></Col>
            <Col md={11}>
         <h5>All Right Are Reserved</h5>
            </Col>
        </Row>
            </Col>
            <Col md={4}>
                
                    
                <BsTwitter/>
                        <BsFacebook style={{marginLeft:'1cm'}}/>
           
            </Col>
        </Row><br></br>
            </Container>
        </div>
    );
}
export default Contact