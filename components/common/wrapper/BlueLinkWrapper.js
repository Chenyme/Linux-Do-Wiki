import Link from "next/link";

const BlueLinkWrapper = ({text, herf, target}) => {
  return (
      <Link href={herf} target={target} style={{color: '#3A9FE8'}}>
        {text}
      </Link>
  );
};

export default BlueLinkWrapper;