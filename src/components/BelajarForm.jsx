import {useState} from 'react'
import "./BelajarForm.style.css"
const BelajarForm = () => {
    const [username,setUsername] = useState('yazid');
    const [jeniskelamin,setJenisKelamin] = useState('l');
    return (
        <div className="belajar-form">
           <h1>Form Registrasi</h1>
           <div className="biodata">
               <div>Biodata</div>
               <div className='biodata-wrap'>
                <div className="biodata-title">
                    Name :
                </div>
                 <input type="text" name="nama"/><br/>
               </div>
               <div className='biodata-wrap'>
               <div className="biodata-title">
                    NIM :
                </div> <input type="text" name="nim"/><br/>
               </div>
               <div className='biodata-wrap'>
               <div className="biodata-title">
                    Tanggal Lahir :
                </div> <input type="date" name="tanggallahir"/><br/>
               </div>
               <div className='biodata-wrap'>
               <div className="biodata-title">
                    NIM :
                </div> <input type="text" name="nim"/><br/>
               </div>
               <div className="biodata-wrap">
                   <div className="biodata-title">
                       Alamat : 
                   </div>
                   <textarea name="alamat" id="" cols="30" rows="10"></textarea>
               </div>
               
               <div className="biodata-wrap">
                   <div className="biodata-title">
                       Jenis Kelamin :
                   </div>
                   <input type="radio" name="sex" value="l" checked={jeniskelamin === "l"}  onChange={(e) => {
                       setJenisKelamin(e.target.value)
                   }}/>
                   <span>Laki-Laki</span>
               <input type="radio" name="sex"  value="p" checked={jeniskelamin === "p"} onChange={(e) => {
                       setJenisKelamin(e.target.value)
                   }}/>
                   <span>Perempuan</span>
               </div>
           </div>
        </div>
    );
}
 
export default BelajarForm;