function LoiChuc()  {
    return React.createElement(
        'button', 
         { onClick:() =>  alert('Chào bạn! Chúc sức khỏe') }, 
         'Chúc'
    );
} //LoiChuc
ReactDOM.render(LoiChuc(), document.getElementById('kq'));