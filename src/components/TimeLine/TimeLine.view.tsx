import React, { ReactNode } from 'react';
import { map } from 'lodash/fp';
import moment from 'moment';
import { Timeline } from 'types/Timeline';
import { TimelineProps } from './TimeLine.props';
import ibm from 'assets/images/ibm.png';
import skplanet from 'assets/images/skplanet.png';
import stationfive from 'assets/images/stationfive.png';
import winning from 'assets/images/winning.png';

const IMAGES: any = {
  ibm,
  skplanet,
  stationfive,
  winning,
};

const renderSummary = (
  summary: string[],
  style: Record<string, string>,
): ReactNode[] => {
  return map(
    (line: string): ReactNode => (
      <p style={{ color: style.fontDescriptionColor }}>{line}</p>
    ),
  )(summary);
};

const renderTimeline = (
  data: Timeline[],
  style: Record<string, string>,
): ReactNode[] => {
  return map((item: Timeline): ReactNode => {
    return (
      <div
        key={item.id}
        className="timeline__item"
        style={{ borderColor: style.borderColor }}
      >
        <div className="timeline__item__container">
          <div className="timeline__item__thumbnail">
            <img src={IMAGES[item.id]} alt={item.company} />
          </div>
          <div
            className="timeline__item__title"
            style={{ borderColor: style.borderColor }}
          >
            <div className="timeline__item__title__pre">
              <h3 style={{ color: style.fontLabelColor }}>{item.role}</h3>
              <p style={{ color: style.fontDescriptionColor }}>
                {item.company}
              </p>
            </div>
            <div className="timeline__item__title__post">
              <p style={{ color: style.fontDescriptionColor }}>
                {`${moment(item.startDate, 'YYYYMMDD').format('MMM YYYY')} - ${
                  item.endDate
                    ? moment(item.endDate, 'YYYYMMDD').format('MMM YYYY')
                    : 'Current'
                }`}
              </p>
              <p style={{ color: style.fontDescriptionColor }}>
                {item.location}
              </p>
            </div>
          </div>
        </div>
        <div className="timeline__item__summary">
          {renderSummary(item.summary, style)}
        </div>
      </div>
    );
  })(data);
};

const TimeLine = (props: TimelineProps): ReactNode => {
  const theme = props.theme.data;
  const generalStyle = theme.get('general');

  return (
    <div className="timeline">{renderTimeline(props.data, generalStyle)}</div>
  );
};

export default TimeLine;
