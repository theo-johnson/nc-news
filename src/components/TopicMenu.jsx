import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiltersContext } from '../contexts/FiltersContext';

function TopicMenu({
  currentTopic,
  setCurrentTopic,
  topicMenuShown,
  setTopicMenuShown,
}) {
  const { filters, setFilters } = useContext(FiltersContext);

  function changeTopic(event) {
    setFilters((currentFilters) => ({
      ...currentFilters,
      topic: event.target.value,
    }));
    setCurrentTopic(event.target.value);
    setTopicMenuShown(false);
  }

  return (
    <div className="topic-menu">
      {currentTopic === 'Home' ? null : (
        <Link to="/">
          <button
            className="topic-menu__button"
            value="Home"
            onClick={changeTopic}
          >
            News
          </button>
        </Link>
      )}

      {currentTopic === 'Cooking' ? null : (
        <Link to="/cooking">
          <button
            className="topic-menu__button"
            value="Cooking"
            onClick={changeTopic}
          >
            Cooking
          </button>
        </Link>
      )}

      {currentTopic === 'Coding' ? null : (
        <Link to="/coding">
          <button
            className="topic-menu__button"
            value="Coding"
            onClick={changeTopic}
          >
            Coding
          </button>
        </Link>
      )}
    </div>
  );
}

export default TopicMenu;
