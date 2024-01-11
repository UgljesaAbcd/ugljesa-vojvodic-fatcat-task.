import { FC } from 'react';
import Marquee from 'react-fast-marquee';

export interface TrustBarProps {
    images: string[];
}

const TrustBar: FC<TrustBarProps> = ({ images }) => {
    return (
        <Marquee>
            {images.map((image) => (
                <img width={100} key={image} src={image} className="mx-10" />
            ))}
        </Marquee>
    );
};

export default TrustBar;
