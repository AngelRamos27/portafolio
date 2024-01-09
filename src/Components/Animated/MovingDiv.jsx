import FloatingDiv from "./FloatingDiv"

const MovingDiv = ({ images }) => {

    return (
        <>
            <div className=" grid grid-cols-3 ">
                {images.map((image, index) => (
                    <img src={image.pic} className='w-32 h-32' alt={`Image ${index}`} />
                ))}

            </div>


        </>
    )
}

export default MovingDiv
