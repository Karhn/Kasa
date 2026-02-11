export default function Banner({ image, title }) {
    return (
        <div className="banner">
            <img src={image} className="banner-img" />

            {title && (
                <h1 className="banner-title">
                    {title}
                </h1>
            )}
        </div>
    )
}