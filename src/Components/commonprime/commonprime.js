import { Dropdown } from 'primereact/dropdown';
import { InputText } from "primereact/inputtext";
import { Calendar } from 'primereact/calendar';
import "../prime.scss"



const CommonPrime=({formArr=[],formObj,onChangeCb,option=[]})=> {


const _dropdownRender=((field)=>{
    return <div className="card flex justify-content-center">
            <Dropdown name={field.name} value={formObj?.[field.name]??""} onChange={onChangeCb} options={field.options??option} optionLabel="name" 
                editable placeholder={field.placeholder} className="w-full md:w-14rem" />
        </div>
 })

 const _inputRender = (field)=> {
    return(
        <div className="card flex justify-content-center">
        <InputText name={field.name} value={formObj?.[field.name]??""} onChange={onChangeCb} placeholder={field.placeholder}/>
    </div> )
 }

 const _dobRender = (field) =>{
    return(
        <div className="card flex justify-content-center">
            <Calendar name={field.name} id={field.label} value={formObj?.[field.name]??""} onChange={onChangeCb}   placeholder={field.placeholder}/>
        </div>
    )
 }



   const _formFieldRender=(field)=>{
        return(
            !!field.type? <div>
                <label>{field.label}</label>
               { (field.type==="dropdown"?_dropdownRender(field):null)}
               { (field.type==="input"?_inputRender(field):null)}
               { (field.type==="calendar"?_dobRender(field):null)}
               
            </div>:<div></div>
        )

    }


    return (
        <div className="form" >
            {formArr.map((field)=>{
               return <div className={field.id} key={field.name}>
                    {_formFieldRender(field)}
                </div>
                    
            }

            )}
            
        </div>
    )
}
export default CommonPrime;