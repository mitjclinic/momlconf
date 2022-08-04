import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaLinkedin, FaTwitter } from "react-icons/fa"

const Organizer = ({
  imageData,
  name,
  title,
  affiliation,
  twitter,
  linkedin,
}) => {
  const image = getImage(imageData)

  return (
    <div>
      <div>
        <GatsbyImage image={image} alt={name} />
      </div>

      <div>
        <h1>{name}</h1>

        <div>
          <p>{title}</p>
          <p>{affiliation}</p>
        </div>

        <div>
          {twitter ?? <FaTwitter />}
          {linkedin ?? <FaLinkedin />}
        </div>
      </div>
    </div>
  )
}
export default Organizer
