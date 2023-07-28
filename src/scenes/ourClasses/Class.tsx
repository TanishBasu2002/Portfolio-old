type Props = {
  name: string;
  description?: string;
  image: string;
  link?: string;
};

const Project = ({ name, description, image, link }: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex
  h-[380px] w-[450px] flex-col items-center justify-center
  whitespace-normal bg-primary-500 text-center text-white
  opacity-0 transition duration-500 hover:opacity-90`;

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
        {link && (
          <a className="mt-5 text-lg underline" href={link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        )}
      </div>
      <img alt={`${image}`} src={image} />
    </li>
  );
};

export default Project;