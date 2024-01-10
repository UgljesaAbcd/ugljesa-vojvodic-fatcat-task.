import { FC } from 'react';

import Hero, { HeroProps } from '../Hero';
import ItemsShowcase, { ItemsShowcaseProps } from '../ItemsShowcase';
import TrustBar, { TrustBarProps } from '../TrustBar';

interface ComponentProps {
    [key: string]: any;
}

interface Component {
    type: string;
    componentKey: number;
    props?: ComponentProps;
}

interface Section {
    type: string;
    sectionKey: number;
    props?: ComponentProps;
    components: Array<Component>;
}

interface PageGeneratorProps {
    data: Array<Section>;
}

const PageGenerator: FC<PageGeneratorProps> = ({ data }) => {
    return (
        <div>
            {data.map((section) => (
                <div
                    key={section.sectionKey}
                    style={{ backgroundColor: section.props?.backgroundColor }}
                >
                    {section.components.map((component) => (
                        <div key={component.componentKey}>
                            {
                                {
                                    ['componentHero']: (
                                        <Hero
                                            {...(component.props as HeroProps)}
                                        />
                                    ),
                                    ['componentItemsShowcase']: (
                                        <ItemsShowcase
                                            {...(component.props as ItemsShowcaseProps)}
                                        />
                                    ),
                                    ['componentTrustBar']: (
                                        <TrustBar
                                            {...(component.props as TrustBarProps)}
                                        />
                                    ),
                                }[component.type]
                            }
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default PageGenerator;
