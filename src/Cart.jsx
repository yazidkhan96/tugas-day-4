import {useState} from 'react';
import Detail from './components/Detail';
import Header from './components/Header';
const Cart = () => {
    const [cart,setCart] = useState(0)
    // const tambahKeranjang = () => {
    //     setCart((prev) => prev+1)
    // }
    return (
        <div>
            <div><Header keranjang={cart}/></div>
            {/* dari detail mengirim ke cart , dari cart mengirim ke header */}
            <Detail tambahKeranjang={() => {
                setCart((prev) => prev + 1)
            }}/>
        </div>
    );
}
 
export default Cart;