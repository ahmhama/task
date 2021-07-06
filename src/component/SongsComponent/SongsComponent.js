import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import "./SongsComponent.css";

const SongsComponent = ({ ...props }) => {

    // get the songs from album and update if remove any album after selected
    let listsong = props.songs.filter((item) => props.checkAlbums.includes(item.album));

    useEffect(() => {
        props.onChangeCount(props.itemssold.length)
        for (let i = 0; i < props.itemssold.length; i++) {
            if (document.getElementById(props.itemssold[i])) {
                document.getElementById(props.itemssold[i]).classList.add("active");
            }
        }

    }, [])

    const count = (e) => {

        if (props.itemssold.includes(e.currentTarget.id)) {
            props.onChangeItemssold(props.itemssold.filter((item) => e.currentTarget.id != item))
            props.onChangeCount(props.counter - 1)
            props.onChangeSalary(props.salary - parseFloat(e.currentTarget.getAttribute('price')))
            e.currentTarget.className = "songitem notactive";

        }
        else {
            props.onChangeItemssold([...props.itemssold, e.currentTarget.id])
            props.onChangeCount(props.counter + 1)
            props.onChangeSalary(props.salary + parseFloat(e.currentTarget.getAttribute('price')))
            e.currentTarget.className = " songitem active";
        }
    }



    const renderlist = () => {
        return listsong.map((item) => {
            return <div className="album"> album{item.album}
                {item.song.map((el) => {
                    return <div className="songitem"
                        id={el.id}
                        price={el.salary}
                        onClick={count}>
                        {el.name}
                    </div>
                })}
            </div>
        })
    }

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={9}>
                    {renderlist()}
                </Grid>
                <Grid item xs={3}>
                    <Card className="counter">
                        <Typography className="title">
                            count  : {props.itemssold.length <= 0 || listsong <= 0 ? "0" : props.counter}
                        </Typography>
                    </Card>

                    <Card className="counter">
                        <Typography className="title">
                            salary :  {props.itemssold.length <= 0 || listsong <= 0 ? "0" : props.salary}$
                        </Typography>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default SongsComponent
