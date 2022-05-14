import "./Tours.css";
const Tours = (props) =>{
    return(
        <>
        <div id="content">
        {
            props.tour.map(data => {
                return(
                    <div id="divTour">
                        <h3>Place :{data.name}</h3>
                        <img src={data.image} alt="" />
                    </div>
                )
                
            })
        }

        </div>
        </>
        
        
    )
};

export default Tours;