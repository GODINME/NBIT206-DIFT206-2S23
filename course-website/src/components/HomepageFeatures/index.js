import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'WEEK 1',
    Svg: require('@site/static/img/wk1.svg').default,
    description: (
      <>
        <ul>
          <li>
            <a href='https://ugedugh-my.sharepoint.com/:p:/g/personal/poffei_st_ug_edu_gh/EbozCX-L6ShNi1D0wDT2PKcBrxo2MRgc_-diLofzZhgPGQ?e=WWrd5Z' target='_blank'>Lecture Slide 1</a>
          </li>
          
          <li>
            <strong>Reading Exercise: Chapter 1 from Operating Systems: Principles and Practice by Michael Dahlin and Thomas Anderson</strong> 
          </li>

          <li>
            <a href='https://forms.office.com/Pages/ResponsePage.aspx?id=X78blMDydUiiTGkHhl0lGpJ-ZlQQWDdCu1Xqk7-_7gxUNDhWUE81WlREVkxYRkxMMzhEM1VPTDlZUi4u' target='_blank'>WEEK 1 Exercise from the reading</a> 
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'WEEK 2',
    Svg: require('@site/static/img/wk2.svg').default,
    description: (
      <>
        Comming Soon!!!
      </>
    ),
  },
  {
    title: 'WEEK 3',
    Svg: require('@site/static/img/wk3.svg').default,
    description: (
      <>
        Coming Soon!!!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
