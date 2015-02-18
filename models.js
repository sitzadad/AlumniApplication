var AlumniModel = Backbone.Model.extend({
  urlRoot: 'NOT YET ASSIGNED',
  defaults: function () {
    return {
      photo: '',
      bio: '',
      skills: [],
      education: [
        {
          degree: '',
          degreeConcentration: '',
          years: {
            startYear: '',
            endYear: ''
          }
        }
      ],
      experience: [
          {
            company: '',
            position: '',
            description: '',
            years: {
              startYear: '',
              endYear: ''
            }
          }
        ],
      gradLocation: '',
      currentLocation: {
        city: '',
        state: ''
      },
      portfolioURL: '',
      email: ''
    };
  },
  initialize: function () {
    console.log('MovieModel initialized');
  }
});
