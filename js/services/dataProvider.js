'use strict';

mdrSearchApp.factory('dataProvider', function($http, $q) {

    var dataUrl = 'http://localhost:51329/api/members/mocked-data';
    var complexDataUrl = 'http://localhost:51329/api/members/more-mocked-data';

    var iadData = [{
        "documentId": "12345",
        "createdDate": "11/11/2015",
        "statusIndicator": "indicator",
        "creator": "GOD",
        "folderId": "some folder ID",
        "contactName": "Jack",
        "contactInfo": "info",
        "subjectType": "none subject type",
        "contacts": "contacts",
        "remarks": "remarks"
    }];

    var jivaData = [{
        notes: 'Notes sdrfgs dfg ',
        callType: 'Call Type sfsdfg',
        phoneNumber: 'Phone # and Extension sdfgsdf',
        fax: 'Fax No. sdfg',
        emaiId: '111Email ID',
        memberId: '222Member ID',
        callStatus: '333Call Status',
        statusReason: '444Status Reason',
        userName: '555User Name',
        callerName: '666Caller Name',
        contactType: '777Contact Type',
        providerId: '888Provider ID',
        inquiryType: '6745Inquiry Type',
        broadTopic: '4567Broad Topic',
        spokeWith: '4567Spoke With',
        followUpRequired: '4567Follow-Up Required',
        closeDate: '4567Close Date',
        source: '4567Source',
        nextFollowUpDate: '4567Next Follow-Up Date'
    }];

    return {
        getMembers: function () {
            var deferred = $q.defer();
            $http.get(dataUrl)
                .success(function (data) {
                    deferred.resolve(data);
                })
                .error(function (err) {
                    deferred.reject(error);
                });

            return deferred.promise;
        },

        getMoreMembers: function () {
            var deferred = $q.defer();
            $http.get(complexDataUrl)
                .success(function(data) {
                    deferred.resolve(data);
                })
                .error(function(err) {
                    deferred.reject(err);
                });

            return deferred.promise;
        },

        getMockedData: function() {
            var deferred = $q.defer();
            setTimeout(function() {
                deferred.resolve(iadData);
            }, 1000);

            return deferred.promise;
        },

        getMoreMockedData: function() {
            var deferred = $q.defer();
            setTimeout(function() {
                deferred.resolve(jivaData);
            }, 1000);

            return deferred.promise;
        }
    }
});