
import Image from 'next/image';

const products = [
  { id: 1, name: 'Modern Chair', price: '$120', image: '/hero.png' },
  { id: 2, name: 'Classic Table', price: '$250', image: '/a3.png' },
  { id: 3, name: 'Stylish Sofa', price: '$450', image: '/About1.png' },
  { id: 4, name: 'Wooden Desk', price: '$300', image: '/a2.png' },
  { id: 5, name: 'Elegant Lamp', price: '$80', image: '/a1.png' },
  { id: 6, name: 'Plant Stand', price: '$60', image: '/last.png' },
];

export default function Product() {
  return (
    <div>


    
    {/* Header */}


      {/* <header>
        <div className="flex w-[90%] 2xl:w-[1580px] bg mx-auto h-[7vh] items-center justify-between">
          <Link href="/" className="2xl:text-2xl">Avion</Link>
          <div className="flex gap-6">
            <Link href="/About">About Us</Link>
            <a>Contact</a>
            <a>Blog</a>
            <div className="flex gap-4">
              <div><Link href="/Shopping"><IoCartOutline /></Link></div>
              <div><Link href="/Sign"><MdOutlineAccountCircle /></Link></div>
              <div><Link href="/Product"><CiSearch /></Link></div>
            </div>
          </div>
        </div>
        
        <div className="2xl:w-[1500px] w-[90%] border-b-2 mx-auto" />
        <div className="flex mx-auto items-center h-11">
          <div className="flex gap-5 font-sans text-gray-500 mx-auto">
            <Link href="/AllProducts">All Products</Link>
            <Link href="/Product">Product List</Link>
            <Link href="/Plantspots" className="hover:text-primary transition duration-200">Plants Pots</Link>
            <a>Ceramics</a>
            <a>Tables</a>
            <a>Chairs</a>
            <a>Crockery</a>
            <a>Tableware</a>
            <a>Cutlery</a>
          </div>
        </div>
      </header> */}



   {/* Product Listings */}


      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Product Listings</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <Image
              width={500} height={500}
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
                <p className="text-lg text-gray-700 mb-4">{product.price}</p>
                <button className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-80 w-full">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>



    </div>
  );
}
