export default function HelloWorld(){
    const propsUserCard = {
        nama: "Ju Ji Hoon",
        nim: "999999",
        tanggal: "2025-01-01"
    }

    return (
        <div>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <GreetingBijai />
            <QuoteText />
            <UserCard 
	            nama="Tatiavierzara Rizky" 
	            nim="2355301196"
	            tanggal={new Date().toLocaleDateString()}
	          />
             <UserCard {...propsUserCard}/>

             <img src="img/ju jihoon.jpg" alt="logo"/>

        </div>
    )
}

function GreetingBijai(){
    return (
        <small>Salam Dari Binjai</small>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimau Mu!!";
    const text2 = "Aku ingin jadi aing maung";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function UserCard(props){
    return (
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}