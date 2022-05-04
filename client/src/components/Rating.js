import React from "react";
import '../index.css';

const Rating = (props) => {
    const checked = () => {
        console.log(props.starCount);
        if ((props.starCount > 0) && (props.starCount < 2)) {
            return (
                <>
                <span className="fa fa-star checked"></span>,
                <span className="fa fa-star"></span>,
                <span className="fa fa-star"></span>,
                <span className="fa fa-star"></span>,
                <span className="fa fa-star"></span>
                </>
            )

        } else if ((props.starCount > 1) && (props.starCount < 3)) {
            return (
                <>
                <span className="fa fa-star checked"></span>,
                <span className="fa fa-star checked"></span>,
                <span className="fa fa-star"></span>,
                <span className="fa fa-star"></span>,
                <span className="fa fa-star"></span>
                </>

            )

        } else if ((props.starCount > 2) && (props.starCount < 4)) {
            return (
                <>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                </>

            )

        } else if (props.starCount > 4) {
            return (
                <>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                </>

            )

        } else if (props.starCount === 5) {
            return (
                <>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span> 
                </>
            )
        } else {
            return (
            <>
            Has not been rated.
            </>
        )
    }
    }

    return (
        <div>
            {checked()}
        </div>
    )
}

export default Rating;