import React from 'react';
import { TimeLine } from 'components';
import { ExperienceProps } from './Experience.props';

const Experience = (props: ExperienceProps): JSX.Element => {
  const profile = props.profile.data;
  const experience = profile.get('experience');

  const theme = props.theme.data;
  const generalStyle = theme.get('general');

  return (
    <div id="experience" className="experience">
      <h3
        className="experience__header"
        style={{ color: generalStyle.fontLabelColor }}
      >
        Experience
      </h3>
      <TimeLine data={experience} />
    </div>
  );
};

export default Experience;
