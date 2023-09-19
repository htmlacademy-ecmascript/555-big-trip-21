import EventsListView from '../view/events-list-view';
import FormEventEditView from '../view/form-event-edit-view';
import PointView from '../view/point-view';
import SortView from '../view/sort-view';
import { render } from '../render';

const POINTS_COUNT = 3;

export default class BoardPresenter {
  eventListComponent = new EventsListView();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(new SortView(), this.boardContainer);
    render(this.eventListComponent, this.boardContainer);
    render(new FormEventEditView(), this.eventListComponent.getElement());

    for (let i = 0; i < POINTS_COUNT; i++) {
      render(new PointView, this.eventListComponent.getElement());
    }
  }
}
