import { useMemo, useState } from "react";
import CommonPrime from "./commonprime/commonprime";
import './prime.scss';
const formFieldArr=[
 {
    id:"a",
    name:"a",
    type:"dropdown",
    label:"A",
    placeholder:"",
    col:"col-4",
    options:[
        {
            code:"XYZ",
            name:"XYZ",
        },
        {
            code:"ABC",
            name:"ABC",
        }
    ]
 },
 {
    id:"b",
    name:"b",
    type:"dropdown",
    label:"B",
    placeholder:"",
    col:"col-4",
    options:[
        {
            code:"1",
            name:"Major",
        },
        {
            code:"2",
            name:"Minor",
        },
        {
            code:"3",
            name:"Other",
        }
    ]
 },
 {},
 {
    id:"c",
    name:"c",
    type:"dropdown",
    label:"C",
    placeholder:"",
    col:"col-4",
    options:[
        {
            code:"1",
            name:"Yes",
        },
        {
            code:"2",
            name:"No",
        }
    ]
 },
 {
    id:"d",
    name:"d",
    type:"dropdown",
    label:"D",
    placeholder:"",
    col:"col-4",
    options:[
        {
            code:"1",
            name:"Major",
        },
        {
            code:"2",
            name:"Minor",
        },
        {
            code:"3",
            name:"Other",
        }
    ]
 },
 {
    id:"e",
    name:"e",
    type:"dropdown",
    label:"E",
    placeholder:"",
    col:"col-4",
    options:[
        {
            code:"1",
            name:"KuchBhi",
        },
        {
            code:"2",
            name:"KuchBhiNhi",
        }
    ]
 },
 {
    id:"f",
    name:"f",
    type:"dropdown",
    label:"F",
    placeholder:"",
    col:"col-4",
    options:[
        {
            code:"1",
            name:"Yes",
        },
        {
            code:"2",
            name:"No",
        }
    ]
 },
 {
    id:"g",
    name:"g",
    type:"dropdown",
    label:"G",
    placeholder:"",
    col:"col-4",
    options:[
        {
            code:"1",
            name:"Boy",
        },
        {
            code:"2",
            name:"Girl",
        }
    ]
 },
 {
    id:"h",
    name:"h",
    type:"dropdown",
    label:"H",
    placeholder:"",
    col:"col-4",
    options:[
        {
            code:"1",
            name:"Male",
        },
        {
            code:"2",
            name:"female",
        }
    ]
 },
 {
    id:"i",
    name:"i",
    type:"dropdown",
    label:"I",
    placeholder:"",
    col:"col-4",
    options:[
        {
            code:"1",
            name:"Yes",
        },
        {
            code:"2",
            name:"No",
        }
    ]
 },
 {
    id:"j",
    name:"j",
    type:"dropdown",
    label:"J",
    placeholder:"",
    col:"col-4",
    options:[
        {
            code:"1",
            name:"Good",
        },
        {
            code:"2",
            name:"Bad",
        }
    ]
 },
 {
    id:"k",
    name:"k",
    type:"dropdown",
    label:"K",
    placeholder:"",
    col:"col-4",
    options:[
        {
            code:"1",
            name:"Major",
        },
        {
            code:"2",
            name:"Minor",
        },
        {
            code:"3",
            name:"Other",
        }    
    ]
 },

 {
    id:"name",
    name:"name",
    type:"input",
    label:"Name:-",
    placeholder:"Enter name",
    col:"col-4",
 },
 {
    id:" fname",
    name:"fname",
    type:"input",
    label:"F. Name:-",
    placeholder:"Enter fname",
    col:"col-4",
 },
 {
    id:"mname",
    name:"mname",
    type:"input",
    label:"M. Name:-",
    placeholder:"Enter mname",
    col:"col-4",
 },
 {
    id:"date",
    name:"date",
    type:"calendar",
    label:"DOB:-",
    placeholder:"dd/mm/yyyy",
    col:"col-4",
 },
 
 
 
]
const CctnsFormField=()=>{
    const [fieldobj,setFieldObj]=useState(null)
    const handleChange = (e) => {
        const { name,date, value } = e.target;
        setFieldObj((prev) => ({ ...prev, [name]: value ,[date]:value}));
    };

    console.log(fieldobj)
 const _formField=useMemo(()=>{
    let _ffarr= [...formFieldArr];
    _ffarr?.forEach(field=>{
        if(!["a","b",'c','f','i','name','fname','mname','date'].includes(field.name)){
            field.type='';
        }
    })
    if(fieldobj?.c?.code == 1 ){
        _ffarr[4].type="dropdown"
    }
    if(fieldobj?.c?.code == 1  && fieldobj?.d?.code==1){
        _ffarr[5].type="dropdown"
    }if(fieldobj?.f?.code == 1 ){
        _ffarr[7].type="dropdown"
        _ffarr[8].type="dropdown"
    }if(fieldobj?.i?.code == 1 ){
        _ffarr[10].type="dropdown"
        _ffarr[11].type="dropdown"
    }
  
    return _ffarr;
 } ,[fieldobj] )

    return(
     <div className="Main_Prime_Cont">
        <CommonPrime formArr={_formField} formObj={fieldobj} onChangeCb={handleChange}/>
     </div>
    )
}
export default CctnsFormField;