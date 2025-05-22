export default function HelloWorld(){
    const propsUserCard = {
        nama: "Najwa Azizi",
        nim: "2355301156",
        tanggal: "3/13/2025",
      };

    return (
       <div>
         <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <GreetingBinjai/>
            <QuoteText/>
        <UserCard {...propsUserCard}/>
            <UserCard 
	            nama="Najwa Azizi" 
	            nim="2355301156"
	            tanggal={new Date().toLocaleDateString()}
	        />
        <center><img src="img/najwa.jpg" alt="logo"/></center>  
        </div>
    )
}

function GreetingBinjai(){
    return(
        <small>Salam dari Binjai</small>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
      <div>
        <hr />
        <p>{text.toLowerCase()}</p>
        <p>{text2.toUpperCase()}</p>
      </div>
    );
  }

  function UserCard(props) {
    return (
      <div>
        <hr />
        <h3>Nama: {props.nama}</h3>
        <p>NIM: {props.nim}</p>
        <p>Tanggal: {props.tanggal}</p>
      </div>
    );
  }