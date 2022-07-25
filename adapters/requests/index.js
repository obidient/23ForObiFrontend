// Import api call adapter
import { get } from '../xhr';

export function getSupportGroups() {
  return get('/support-group/');
}

export function getStates() {
  return get('/states/');
}

export function getOverallprogress() {
  return get('/overall-progress/');
}
