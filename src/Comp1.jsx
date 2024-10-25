import './assets/css/style.css'
import comp1 from './assets/css/comp1.module.css'

export default function Comp1(){
    return(
        <>
            Comp1
            <h1 className='h1'>Comp 1</h1>
            <p className={comp1.pera}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque enim accusamus, adipisci at unde laboriosam tempora, recusandae eveniet deleniti quaerat ex veritatis expedita dignissimos autem dolorum. Deserunt exercitationem sed placeat.</p>
            <p>{console.log("wdw3fe3g")
            }</p>
            <p style={{backgroundColor:'cyan',fontSize:"25px"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, tenetur at! Consectetur, perferendis assumenda est sunt inventore nobis? Consequuntur, earum.</p>
        </>
        
        
    )
}
