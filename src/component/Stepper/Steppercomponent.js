import React, { useEffect, useState } from 'react';
import Singers from '../Singers/Singers';
import Albums from '../Albums/Albums';
import SongsComponent from '../SongsComponent/SongsComponent'
import list from '../../api/api.json'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormUserDetails from '../FormUserDetails/FormUserDetails';

/*==================== style from material ====================*/
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));
/*==================== style from material ====================*/


const Steppercomponent = () => {
    /*==================== use state hooks ====================*/
    // ? target singer to select
    const [targetSinger, setTargetSinger] = useState([]);

    // ? get data from api to show albums
    const [dataTargrt, setDataTargrt] = useState([]);

    // ? get data we select in albums 
    const [dataAlbums, setDataAlbums] = useState([]);

    // ?check if this singer has album and if you remove singer remove all albums 
    const [checkAlbums, setCheckAlbums] = useState([]);

    // ? to get songs and show them
    const [songs, setSongs] = useState([]);

    const [itemssold, setItemssold] = useState([]);


    // ? to get counter songs
    const [counter, setCounter] = useState(0);

    // ? to get total salary songs
    const [salary, setSalary] = useState(0);

    // ?  get  user name 
    const [name, setName] = useState("");

    // ?  get  email 
    const [email, setEmail] = useState("");

    // ?  get  mobile 
    const [mobile, setMobile] = useState("");
    /*==================== use state hooks ====================*/


    /*==================== update state from Child ====================*/
    const onChangeCount = (value) => {
        setCounter(value)
    }
    const onChangeSalary = (value) => {
        setSalary(value)
    }
    const onChangeName = (value) => {
        setName(value)
    }
    const onChangeEmail = (value) => {
        setEmail(value)
    }
    const onChangeMobile = (value) => {
        setMobile(value)
    }
    const onChangeItemssold = (value) => {
        setItemssold(value)
    }
    /*==================== update state from Child ====================*/





    /*==================== to show the save data when start render ====================*/
    useEffect(() => {
        const targetSinger = JSON.parse(localStorage.getItem('targetSinger'));
        const dataTargrt = JSON.parse(localStorage.getItem('dataTargrt'));
        const dataAlbums = JSON.parse(localStorage.getItem('dataAlbums'));
        const songs = JSON.parse(localStorage.getItem('songs'));
        const counter = JSON.parse(localStorage.getItem('counter'));
        const itemssold = JSON.parse(localStorage.getItem('itemssold'));
        const salary = JSON.parse(localStorage.getItem('salary'));

        if (targetSinger) {
            setTargetSinger(targetSinger);
            //loops for every element i select and add class active when start
            for (let i = 0; i < targetSinger.length; i++) {
                if (document.getElementById(targetSinger[i])) {
                    document.getElementById(targetSinger[i]).classList.add("active");
                }
            }
        }
        if (dataTargrt) {
            setDataTargrt(dataTargrt);
            let arrray = [];
            dataTargrt.forEach(element => {
                element.albums.forEach(data => {
                    arrray.push(Object.keys(data).map(el => (data[el]))[0])
                })

            });
            setCheckAlbums(arrray);
        }
        if (dataAlbums) {
            setDataAlbums(dataAlbums);
        }
        if (songs) {
            setSongs(songs);
        }
        if (counter) {
            setCounter(counter)
        }
        if (itemssold) {
            setItemssold(itemssold)
        }
        if (salary) {
            setSalary(salary)
        }



    }, []);
    /*==================== to show the save data when start render ====================*/



    /*==================== to show the save data when start render and any change ====================*/
    useEffect(() => {
        localStorage.setItem('targetSinger', JSON.stringify(targetSinger));
        localStorage.setItem('dataTargrt', JSON.stringify(dataTargrt));
        localStorage.setItem('dataAlbums', JSON.stringify(dataAlbums));
        localStorage.setItem('dataAlbums', JSON.stringify(songs));
        localStorage.setItem('counter', JSON.stringify(counter));
        localStorage.setItem('itemssold', JSON.stringify(itemssold));
        localStorage.setItem('salary', JSON.stringify(salary));

        let arrray = [];
        dataTargrt.forEach(element => {
            element.albums.forEach(data => {
                arrray.push(Object.keys(data).map(el => (data[el]))[0])
            })

        });

        setCheckAlbums(arrray);

    }, [targetSinger], [dataTargrt], [dataAlbums], [checkAlbums], [songs], [salary], [counter]);
    /*==================== to show the save data when start render and any change ====================*/

    /*==================== to show the save data when start render and any render agin ====================*/
    useEffect(() => {
        localStorage.setItem('dataTargrt', JSON.stringify(dataTargrt));
        localStorage.setItem('dataAlbums', JSON.stringify(dataAlbums));
        localStorage.setItem('songs', JSON.stringify(songs));
        localStorage.setItem('counter', JSON.stringify(counter));
        localStorage.setItem('itemssold', JSON.stringify(itemssold));
        localStorage.setItem('salary', JSON.stringify(salary));
    })
    /*==================== to show the save data when start render and any render agin ====================*/



    /*==================== sorted array to apper sorted next step ====================*/

    let sorteddataTargrt = dataTargrt.sort(function (a, b) {
        return a.id - b.id || a.name.localeCompare(b.name);
    });

    songs.sort(function (a, b) {
        return a.album - b.album || a.name.localeCompare(b.name);
    });
    /*==================== sorted array to apper sorted next step ====================*/



    /*==================== on click any card in singers ====================*/
    const getValueAndName = (e) => {
        //get data from api
        let getdataitem = list.find((d) => d.id == e.currentTarget.id);

        if (targetSinger.includes(e.currentTarget.getAttribute('id'))) {
            setTargetSinger(targetSinger.filter((item) => e.currentTarget.getAttribute('id') !== item));
            setDataTargrt(dataTargrt.filter(item => item.id !== parseInt(e.currentTarget.getAttribute('id'))))
            e.currentTarget.className = "notactive";
        }

        else {
            e.currentTarget.className = "active"
            setTargetSinger([...targetSinger, e.currentTarget.getAttribute('id')]);
            setDataTargrt([...dataTargrt, getdataitem])

        }
    }
    /*==================== on click any card in singers ====================*/


    // ! way to get Intersection between two array  
    // const getIntersection = (arr1, arr2) => {
    //     return arr1.filter(n => { return arr2.indexOf(n) != -1; });
    // }
    // getIntersection(arr1, arr2);


    /*==================== on click any card in albums ====================*/
    const getDataalbums = (e) => {

        if (dataAlbums.includes(e.currentTarget.getAttribute('id'))) {
            setDataAlbums(dataAlbums.filter((item) => e.currentTarget.getAttribute('id') !== item));
            setSongs(songs.filter(item => item.album != parseInt(e.currentTarget.getAttribute('id'))));
            e.currentTarget.className = "notactive";
        }

        else {
            e.currentTarget.className = "active"
            list.find(record => record.albums.find(el => {
                if (el.album == e.currentTarget.getAttribute('id')) {
                    setSongs([...songs, el]);
                }
            }))
            setDataAlbums([...dataAlbums, e.currentTarget.getAttribute('id')]);
        }
    }
    /*==================== on click any card in albums ====================*/



    /*==================== step in material ====================*/
    function getSteps() {
        return ['Singers', 'album', 'Songs', "form"];
    }
    /*==================== step in material ====================*/

    /*==================== pass component to step====================*/
    function getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <Singers targetSinger={targetSinger} list={list} onClick={getValueAndName} />;
            case 1:
                return <Albums dataAlbums={dataAlbums} dataTargrt={sorteddataTargrt} getDataalbums={getDataalbums} />;
            case 2:
                return <SongsComponent
                    onChangeCount={onChangeCount}
                    onChangeSalary={onChangeSalary}
                    onChangeItemssold={onChangeItemssold}
                    itemssold={itemssold}
                    salary={salary}
                    counter={counter}
                    songs={songs}
                    checkAlbums={checkAlbums} />;
            case 3: return <FormUserDetails
                onChangeName={onChangeName}
                name={name}
                onChangeEmail={onChangeEmail}
                email={email}
                onChangeMobile={onChangeMobile}
                mobile={mobile}
            />
            default:
                return 'Unknown stepIndex';
        }
    }
    /*==================== pass component to step====================*/


    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };


    return (
        <div className={classes.root} >

            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography component={'span'} variant={'body2'} className={classes.instructions}>
                            <h1>name : {name}</h1>
                            <h1>Email : {email}</h1>
                            <h1>Mobile : {mobile}</h1>
                            <h1>number of songs : {counter}</h1>
                            <h1>Total Salary : {salary}</h1>
                        </Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                    <div>
                        <Typography component={'div'} variant={'body2'} className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                        <div>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={classes.backButton}
                            >
                                Back
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div >

    )
}

export default Steppercomponent
