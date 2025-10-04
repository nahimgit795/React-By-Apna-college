export default function Price({oldPrice,newPrice}){
    let oldstyles={
       textDecoration: "line-through"
    };
    let newstyles={
        fontWeight:"bold"
    };
    let styles={
        backgroundColor:"grey",
        height:"50px",
        borderBottomRadius:"30px",
    }
    return(
        <div style={styles}>
            <span style={oldstyles}>{oldPrice}</span>
            <span style={newstyles}> {newPrice}</span>
        </div>
    );
}