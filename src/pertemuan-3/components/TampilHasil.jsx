export default function ( { label,totalGaji}) { 
    return ( 
        <div className="mb-3"> 
            <p className="font-semibold">
            {label}
            {totalGaji}
            </p>

        </div> 
    ); 
}