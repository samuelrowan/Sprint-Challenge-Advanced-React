import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";


const CompetitorCard = props => {
    return(
        <Card>
            <CardBody>
                <CardTitle>{props.name}</CardTitle>
                <p>{props.country}</p>
            </CardBody>
        </Card>
    )
}
export default CompetitorCard;