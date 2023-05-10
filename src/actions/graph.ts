import chartStore from '../stores/chartStore';
import { SERVER_URL } from '../constants';
import axios from 'axios';

export const getGraphData = async () => {
  axios
    .get(`${SERVER_URL}/init/graph`)
    .then(function (response) {
      chartStore.chartWeekScores = response.data.chartWeekScores;
    })
    .catch(function (error) {
      console.log(error);
    });
};
