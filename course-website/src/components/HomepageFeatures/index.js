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
            <a href='https://ugedugh-my.sharepoint.com/:p:/g/personal/poffei_st_ug_edu_gh/EYPKFTtKBvhKqIhj9EkmeGABkrgP9lJtBTYA0VBgTy0-8g?e=qxI3bq' target='_blank'>Lecture Slide 1: OS Introduction</a>
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
        <ul>
          <li>
            <a href='https://ugedugh-my.sharepoint.com/:p:/g/personal/poffei_st_ug_edu_gh/EfO4bTjfLrFNlLeMMMPUzDIBcWonq1Xb0na1QOxuiBF2MA?e=Y60Dbt' target='_blank'>Lecture Slide 2: OS Concepts</a>
          </li>
          
          <li>
            <strong>Reading Exercise: Chapter 2,3 and 4.1-4.5 from Operating Systems: Principles and Practice by Michael Dahlin and Thomas Anderson</strong> 
          </li>

          <li>
            <a href='#' target='_blank'>WEEK 2 Exercise from the reading yet to come</a> 
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'WEEK 3',
    Svg: require('@site/static/img/wk3.svg').default,
    description: (
      <>
      <ul>
      <li>
        <a href='https://ugedugh-my.sharepoint.com/:p:/g/personal/poffei_st_ug_edu_gh/EQYKwjvVlgBEklG6HT0fEHUBEVGu_tdcALavzYL691_ubw?e=8Igp6b' target='_blank'>Lecture Slide 3: Synchronization</a>
      </li>
      
      <li>
        <strong>Reading Exercise: Chapter 5.1-5.6 and 6.5 from Operating Systems: Principles and Practice by Michael Dahlin and Thomas Anderson</strong> 
      </li>

      <li>
        <a href='#' target='_blank'>WEEK 3 Exercise from the reading yet to come</a> 
      </li>
    </ul>
      </>
    ),
  },
  {
    title: 'WEEK 4',
    Svg: require('@site/static/img/wk4.svg').default,
    description: (
      <>
      <ul>
      <li>
        <a href='https://ugedugh-my.sharepoint.com/:p:/g/personal/poffei_st_ug_edu_gh/EQEPm8W9XMZFgUpgf3hYyiwB9zdt-CH8uELh0bgv-XifKg?e=4tLt6K' target='_blank'>Lecture Slide 4: Multithreaded kernels</a>
      </li>
      
      <li>
        <strong>Reading Exercise: Chapter 4.5-4.8 and 5.7-5.8 from Operating Systems: Principles and Practice by Michael Dahlin and Thomas Anderson</strong> 
      </li>

      <li>
        <a href='#' target='_blank'>WEEK 4 Exercise from the reading yet to come</a> 
      </li>
    </ul>
      </>
    ),
  },
  {
    title: 'WEEK 5',
    Svg: require('@site/static/img/wk5.svg').default,
    description: (
      <>
      <ul>
      <li>
        <a href='https://ugedugh-my.sharepoint.com/:p:/g/personal/poffei_st_ug_edu_gh/EWOyOH8lZz9AvSQD-cbTVHMBjf3hFk6XXLVw4q3-WAzITw?e=6nlSSS' target='_blank'>Lecture Slide 5: Uniprocessor Scheduling</a>
      </li>
      
      <li>
        <strong>Reading Exercise: Chapter 7 from Operating Systems: Principles and Practice by Michael Dahlin and Thomas Anderson</strong> 
      </li>

      <li>
        <a href='#' target='_blank'>WEEK 5 Exercise from the reading yet to come</a> 
      </li>
    </ul>
      </>
    ),
  },
  {
    title: 'WEEK 6',
    Svg: require('@site/static/img/wk6.svg').default,
    description: (
      <>
      <ul>
      <li>
        <a href='https://ugedugh-my.sharepoint.com/:p:/g/personal/poffei_st_ug_edu_gh/Eaq9w0cobBVPs-I453rLqvEBgyplaiKvky8iBkyAQh_OhA?e=yw13aF' target='_blank'>Lecture Slide 6: Address Translation</a>
      </li>
      
      <li>
        <strong>Reading Exercise: Chapter 8.1-8.2 from Operating Systems: Principles and Practice by Michael Dahlin and Thomas Anderson</strong> 
      </li>

      <li>
        <a href='#' target='_blank'>WEEK 6 Exercise from the reading yet to come</a> 
      </li>
    </ul>
      </>
    ),
  },
  {
    title: 'WEEK 7',
    Svg: require('@site/static/img/wk7.svg').default,
    description: (
      <>
      <ul>
      <li>
        <a href='https://ugedugh-my.sharepoint.com/:p:/g/personal/poffei_st_ug_edu_gh/EcuampYOpGBMqRxxJGCOLp8B3InzB1wzlETDCxCSuQ8sbA?e=8AxCBT' target='_blank'>Lecture Slide 7: Caching</a>
      </li>
      
      <li>
        <strong>Reading Exercise: Chapter 8.3 and 9.1-9.4 from Operating Systems: Principles and Practice by Michael Dahlin and Thomas Anderson</strong> 
      </li>

      <li>
        <a href='#' target='_blank'>WEEK 7 Exercise from the reading yet to come</a> 
      </li>
    </ul>
      </>
    ),
  },
  {
    title: 'WEEK 8',
    Svg: require('@site/static/img/wk8.svg').default,
    description: (
      <>
      <ul>
      <li>
        <a href='https://ugedugh-my.sharepoint.com/:p:/g/personal/poffei_st_ug_edu_gh/Ea7Ywo5KN5FHreukVFXMlAIB6ktPHRjpAYlIryCSnsmycQ?e=TsgoGE' target='_blank'>Lecture Slide 8: Demand Paging</a>
      </li>
      
      <li>
        <strong>Reading Exercise: Chapter 9.5-9.7 from Operating Systems: Principles and Practice by Michael Dahlin and Thomas Anderson</strong> 
      </li>

      <li>
        <a href='#' target='_blank'>WEEK 8 Exercise from the reading yet to come</a> 
      </li>
    </ul>
      </>
    ),
  },
  {
    title: 'WEEK 9',
    Svg: require('@site/static/img/wk9.svg').default,
    description: (
      <>
      <ul>
      <li>
        <a href='https://ugedugh-my.sharepoint.com/:p:/g/personal/poffei_st_ug_edu_gh/EY-UAEsJWopMqdKJY3xSNHgB1BN6x_ziTUGR0MiG6jmDJQ?e=egCHhF' target='_blank'>Lecture Slide 9: I/O Subsystem and Storage Devices</a>
      </li>
      
      <li>
        <strong>Reading Exercise: Chapter 11.3, 7.5, and 12 from Operating Systems: Principles and Practice by Michael Dahlin and Thomas Anderson</strong> 
      </li>

      <li>
        <a href='#' target='_blank'>WEEK 9 Exercise from the reading yet to come</a> 
      </li>
    </ul>
      </>
    ),
  },
  {
    title: 'WEEK 10',
    Svg: require('@site/static/img/wk10.svg').default,
    description: (
      <>
      <ul>
      <li>
        <a href='https://ugedugh-my.sharepoint.com/:p:/g/personal/poffei_st_ug_edu_gh/EeV4A_ox-LpKtZ4SApoClLkBSGHjERlfwHr6LIyLtlpk9w?e=LcJKt7' target='_blank'>Lecture Slide 10: File Systems</a>
      </li>
      
      <li>
        <strong>Reading Exercise: Chapter 11.1-11.2 and 13 from Operating Systems: Principles and Practice by Michael Dahlin and Thomas Anderson</strong> 
      </li>

      <li>
        <a href='#' target='_blank'>WEEK 10 Exercise from the reading yet to come</a> 
      </li>
    </ul>
      </>
    ),
  },
  {
    title: 'WEEK 11',
    Svg: require('@site/static/img/wk11.svg').default,
    description: (
      <>
        Revision on Operating Systems
      </>
    ),
  },
  {
    title: 'WEEK 12',
    Svg: require('@site/static/img/wk12.svg').default,
    description: (
      <>
        Examination on Operating Systems
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
