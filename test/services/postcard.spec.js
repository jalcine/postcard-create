'use strict';

const expect  = require('chai').expect;
const Angular = require('angular');
const Sinon   = require('sinon');

const Config = require('../../config');

require('angular-mocks');

describe('postcard service', () => {
  let $q;
  let $rootScope;
  let API;
  let Postcard;

  beforeEach(Angular.mock.inject(($injector) => {
    $q         = $injector.get('$q');
    $rootScope = $injector.get('$rootScope');
    API        = $injector.get('API');
    Postcard   = $injector.get('Postcard');
  }));

  describe('create', () => {
    it('calls the correct endpoint with the correct params', () => {
      var payload = { id: 'psc_id' };

      Sinon.stub(API, 'post').returns($q.resolve());

      Postcard.create(payload);

      $rootScope.$apply();

      expect(API.post.firstCall.args[0]).to.eql(Config.API_HOST + '/postcards');
      expect(API.post.firstCall.args[1]).to.eql(payload);

      API.post.restore();
    });
  });
});
