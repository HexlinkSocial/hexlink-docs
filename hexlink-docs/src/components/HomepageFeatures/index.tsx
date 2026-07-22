import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  link: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Tips for Community Members',
    link: '/docs/category/tips-for-community-members',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Guides, tips, and resources to help community members get the most out of the platform.
      </>
    ),
  },
  {
    title: 'Tips for Community Runners',
    link: '/docs/category/tips-for-community-runners',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Best practices, management strategies, and tools for organizing and running communities.
      </>
    ),
  },
  {
    title: 'Get Involved',
    link: '/docs/category/get-involved',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Learn how you can participate, contribute, and collaborate with our growing community.
      </>
    ),
  },
];

function FeatureIcon({Svg}: {Svg: FeatureItem['Svg']}) {
  return (
    <div className={styles.iconWrapper}>
      <Svg className={styles.featureSvg} role="img" />
    </div>
  );
}

function FeatureCard({title, link, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4 margin-bottom--lg')}>
      <Link to={link} className={styles.cardLink}>
        <div className={clsx('card', styles.featureCard)}>
          <div className="card__header text--center">
            <FeatureIcon Svg={Svg} />
            <Heading as="h3" className={styles.featureTitle}>
              {title}
            </Heading>
          </div>
          <div className="card__body text--center">
            <p className={styles.featureDescription}>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <FeatureCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}