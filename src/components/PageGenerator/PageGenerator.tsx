import { FC, useState } from 'react';

import { clsx } from 'clsx';

import TrustBar, { TrustBarProps } from '@homework-task/components/TrustBar';

import Hero, { HeroProps } from '../Hero';
import ItemsShowcase, { ItemsShowcaseProps } from '../ItemsShowcase';
import { Layout } from '../Layout';

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
    const [selectedLayout, setSelectedLayout] = useState<
        'bg-gray40' | 'bg-white'
    >('bg-gray40');
    return (
        <div>
            <select
                value={selectedLayout}
                onChange={(e) =>
                    setSelectedLayout(
                        e.target.value as 'bg-gray40' | 'bg-white'
                    )
                }
                className={clsx(
                    'shadow',
                    'appearance-none',
                    'border',
                    'rounded',
                    'py-2',
                    'px-3',
                    'text-gray-700',
                    'leading-tight'
                )}
            >
                <option value="bg-gray40">Layout 1</option>
                <option value="bg-white">Layout 2</option>
            </select>
            <Layout background={selectedLayout}>
                {data.map((section) => (
                    <div
                        key={section.sectionKey}
                        style={{
                            backgroundColor: section.props?.backgroundColor,
                        }}
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
            </Layout>
        </div>
    );
};

export default PageGenerator;
