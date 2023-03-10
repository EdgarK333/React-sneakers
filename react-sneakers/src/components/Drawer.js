function Drawer ({onClose,onRemove,items=[]}) {
    return(
        <div  className="overlay">
        <div className="drawer">
    <h2 className="d-flex justify-between mb-30">Корзина 
    <img onClick={onClose} className="removeBtn cu-p" width={32} height={32} src="/img/removebtn.svg" alt="remove" />
    </h2>

    {
      items.length> 0 ? 
      <div className="items">
      {
        items.map((obj) =>(

       

    <div className="cartItem d-flex align-center mb-20">
     
      <div style={{backgroundImage:`url(${obj.imageUrl})`}} className="cartItemImg">

      </div>
      
      
      <div className="mr-20 flex">
        <p className="mb-5">{obj.title}</p>
        <b>{obj.price} руб.</b>
      </div>
      <img
       onClick={()=>onRemove(obj.id)}
       className="removeBtn" width={32} height={32} src="/img/removebtn.svg" alt="remove" />
    </div>
))}

<div class="cartTotalBlock">
<ul >
  <li className="d-flex">
    <span>Итого:</span>
    <div></div>
    <b>21 498 руб. </b>
  </li>
  <li className="d-flex">
  <span>Налог 5%:</span>
    <div></div>
    <b>1074 руб.</b>
  </li>
</ul>
<button class="greenButton">Оформить заказ <img src="/img/strelka.svg" alt="strelka"/></button>
</div>

</div>
 : <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img className="mb-20" width={120} height={120} src="/img/empty-cart.jpg" alt="empty-cart" />
      <h2>Корзина пустая</h2>
      <p className="opacity-6">Добавьте хотя бы пару кроссовок , что бы сделать заказ.</p>
      <button onClick={onClose} class="greenButton">
      <img src="/img/strelka.svg" alt="strelka" />
      Вернуться назад
      </button>
    </div>
    }

    

    
    

    


</div>
</div>

    );
  }

export default Drawer;