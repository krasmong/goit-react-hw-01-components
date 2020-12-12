import PropTypes from 'prop-types';
import s from '../Statistics/Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section class="statistics">
      {title && <h2 className={s.title}>{title}</h2>}
      <ul class="stat-list">
        {stats.map(stat => (
          <li class="item" key={stat.id}>
            <span class="label">{stat.label}</span>
            <span class="percentage">{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
