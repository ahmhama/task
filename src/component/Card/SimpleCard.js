import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import './card.css'

export default function SimpleCard({ ...props }) {

    return (
        <Card className="root" onClick={props.onClick} id={props.id} data_singer={props.data_singer}>
            <CardContent>
                <CardMedia
                    className="imgcard"
                    image={props.img}
                    title="Contemplative Reptile"
                />

                <Typography variant="h5" component="h2">
                    {props.name}
                </Typography>
                <Typography color="textSecondary">
                    {props.gender || props.year}
                </Typography>
            </CardContent>
        </Card>
    );
}
