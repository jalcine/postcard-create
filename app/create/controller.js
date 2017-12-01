'use strict';

module.exports = ($scope, Postcard) => {

  $scope.payload = { mail_type: 'usps_first_class' };
  $scope.loading = false;
  $scope.error = null;
  $scope.payload = null;

  $scope.create = (payload) => {
    $scope.error = null;
    $scope.loading = true;
    $scope.postcard = null;

    Postcard.create(payload)
    .then((postcard) => {
      $scope.postcard = postcard;
    })
    .catch((err) => {
      $scope.error = err.message;
    })
    .finally(() => {
      $scope.loading = false;
    });
  };

};
