import EventsListView from '../view/events-list-view.js';
import FormEventEditView from '../view/form-event-edit-view.js';
import PointView from '../view/point-view.js';
import SortView from '../view/sort-view.js';
import { render } from '../render.js';

export default class BoardPresenter {
  sortComponent = new SortView();
  eventListComponent = new EventsListView();

  constructor({boardContainer, destinationsModel, offersModel, pointsModel}) {
    this.boardContainer = boardContainer;
    this.destination = destinationsModel;
    this.offers = offersModel;
    this.points = pointsModel;

    this.points = [...pointsModel.get()];
  }

  init() {
    render(this.sortComponent, this.boardContainer);
    render(this.eventListComponent, this.boardContainer);

    render(new FormEventEditView({
      point: this.points[0],
      pointDestination: this.destination.getById(this.points[0].destination),
      pointOffers: this.offers.getByType(this.points[0].type)
    }), this.eventListComponent.getElement());

    this.points.forEach((point) => {
      render(
        new PointView({
          point,
          pointDestination: this.destination.getById(point.destination),
          pointOffers: this.offers.getByType(point.type)
        }), this.eventListComponent.getElement()
      );
    });
  }
}
