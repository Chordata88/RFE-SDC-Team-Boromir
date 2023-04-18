const http = require('k6/http')
const {check, sleep} = require('k6')

module.exports = {
  options: {
    stages: [
      { duration: '5s', target: 10 },
      { duration: '20s', target: 20 },
      { duration: '2s', target: 0 }

    ],
    thresholds: {
      http_req_duration: ['p(90)<20', 'p(95)<50', 'p(100)<200']
    }
  },


default: function () {

    const pages = [
      '/qa/questions/?product_id=180',
       //'/qa/questions/:question_id/report?question_id=1209',
      // '/this-does-not-exist/',
    ]

    for (let page of pages) {
      const res = http.get('http://localhost:8080' + page);
      check(res, {
        'status was 200': (r) => r.status === 200,
        'duration was <= 20ms': (r) => r.timings.duration <= 20,
        'duration was <= 50ms': (r) => r.timings.duration <= 50,

        'duration was <= 200ms': (r) => r.timings.duration <= 200,
        'duration was <= 500ms': (r) => r.timings.duration <= 500,
        'duration was <= 1000ms': (r) => r.timings.duration <= 1000,

      });
      sleep(1);

    }
  }

}