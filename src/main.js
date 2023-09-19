import FilterView from './view/filter-view';
import TripInfoView from './view/trip-info-view';
import { RenderPosition, render } from './render.js';
import BoardPresenter from '../src/presenter/board-presenter.js';

const tripInfoElement = document.querySelector('.trip-main');
const filterElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');

const boardPresenter = new BoardPresenter({
  boardContainer: tripEventsElement
});

render(new TripInfoView(), tripInfoElement, RenderPosition.AFTERBEGIN);
render(new FilterView(), filterElement);

boardPresenter.init();
