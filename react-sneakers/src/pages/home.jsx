import Card from '../components/Card/Card';

function Home({
    items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart,
}) {
    return(
        <div className="content p-40">
    <div className="d-flex align-center mb-40 justify-between">
    <h1>{searchValue ? `Поиск по запросу: "${searchValue}"`: 'Все кроссовки'}</h1>
  <div className="search-block d-flex">
    <img src="/img/search.svg" alt="search"/>
   {searchValue && <img
    onClick={()=>setSearchValue("")}
   className="removeBtn clear cu-p" width={32} height={32} src="/img/removebtn.svg" alt="remove" />}
    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
    </div>
    </div>

    <div className="d-flex flex-wrap">
      
  
     
    {items
    .filter(item=>item.title.toLowerCase().includes(searchValue.toLowerCase()))
    .map((item,index)=>(
        <Card 
        key={index}
        title={item.title}
       price={item.price} 
       imageUrl={item.imageUrl}
       onFavorite={(obj)=>onAddToFavorite(obj)}
       onPlus={(obj)=>onAddToCart(obj)}
       />
      ))}


    </div>


  </div>
    );
}

export default Home;