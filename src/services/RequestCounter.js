import axios from 'axios';
import Events from '../Events';

let numOpenRequests = 0;

axios.interceptors.request.use(config => {
  increment();
  return config;
});

axios.interceptors.response.use(response => {
  decrement();
  return response;
}, error => {
  decrement();
  Promise.reject(error);
});

function increment() {
  if (numOpenRequests === 0) {
    Events.trigger(Events.RequestsSent);
  }
  numOpenRequests++;
}

function decrement() {
  numOpenRequests--;
  if (!numOpenRequests) {
    Events.trigger(Events.ResponsesReceived);
  }
}