import { FC } from 'react';

import TrustBar, { TrustBarProps } from '@homework-task/components/TrustBar';

import Hero, { HeroProps } from '../Hero';
import ItemsShowcase, { ItemsShowcaseProps } from '../ItemsShowcase';

interface SectionProps {
    backgroundColor?: string;
}

interface Component {
    type: string;
    componentKey: number;
    props?: ItemsShowcaseProps | HeroProps | TrustBarProps;
}

interface Section {
    type: string;
    sectionKey: number;
    props?: SectionProps;
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
