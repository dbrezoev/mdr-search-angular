'use strict';

mdrSearchApp.factory('consts', function() {

    //helper function merges the properties of two object into one
    function extend(obj, src) {
        for (var key in src) {
            if (src.hasOwnProperty(key)) obj[key] = src[key];
        }
        return obj;
    }

    var iadMap = {
        documentId: "Document ID",
        createdDate: 'Created Date',
        statusIndicator: 'Status Indicator',
        creator: 'Creator',
        folderId: 'Folder ID',
        contactName: 'Contact Name',
        contactInfo: 'Contact Info',
        subjectType: 'Subject Type',
        contacts: 'Contacts',
        remarks: 'Remarks'
    };

    var jivaMap = {
        notes: 'Notes',
        callType: 'Call Type',
        phoneNumber: 'Phone # and Extension',
        fax: 'Fax No.',
        emaiId: 'Email ID',
        memberId: 'Member ID',
        callStatus: 'Call Status',
        statusReason: 'Status Reason',
        userName: 'User Name',
        callerName: 'Caller Name',
        contactType: 'Contact Type',
        providerId: 'Provider ID',
        inquiryType: 'Inquiry Type',
        broadTopic: 'Broad Topic',
        spokeWith: 'Spoke With',
        followUpRequired: 'Follow-Up Required',
        closeDate: 'Close Date',
        source: 'Source',
        nextFollowUpDate: 'Next Follow-Up Date'
    };

    var both = extend(iadMap, jivaMap);

    return {
        iadColumnsMap: iadMap,
        jivaColumnsMap: jivaMap,
        bothSourcesColumnsMap: both,
        columnWidth: '150'
    }
});