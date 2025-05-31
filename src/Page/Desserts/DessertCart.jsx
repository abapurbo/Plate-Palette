import { MdAddShoppingCart } from 'react-icons/md';
import useAuth from '../../Auth/useAuth/useAuth';
// import AuthContext from '../../Auth/AuthContext/AuthContext';

const DessertCart = ({ item }) => {
    const { insertDessertCart } = useAuth()
  
    const handleAddDessertItem = categoryName => {
        insertDessertCart(categoryName)
        alert('Your dessert add localStorage')
    }
    return (
        <div className="card bg-[##F5EDEB]  shadow-sm">
            <figure>
                <picture>
                    <source srcSet={item.image.desktop} media='(min-width: 1024px)'></source>
                    <source srcSet={item.image.tablet} media='(min-width: 768px)'></source>
                    <source srcSet={item.image.mobile} media='(max-width: 767px)'></source>
                    <img src={item.image.thumbnail} alt="thumbnail image" />
                </picture>
            </figure>
            <div className="card-body space-y-3">
                <div className='relative'>
                    <div className="card-actions absolute left-[50%] right-[50%] bottom-2 justify-center">
                        <button onClick={() => handleAddDessertItem(item.category)} className="text-[16px] font-bold px-4 py-2 btn rounded-4xl outline-2 outline-red-700"><MdAddShoppingCart className='text-xl'></MdAddShoppingCart> Add to Cart</button>
                    </div>
                </div>

                <div>
                    <h2 className="text-[16px] text-[#c2776a] font-semibold">{item.category}</h2>
                    <h1 className='text-[18px] text-black font-semibold'>{item.name}</h1>
                    <span className='text-[21px] text-[#e26049]'>${item.price}</span>
                </div>



            </div>
        </div>
    );
};

export default DessertCart;