package api

import grails.rest.RestfulController
import groovy.transform.CompileStatic

@CompileStatic
class AnnouncementController extends RestfulController<Announcement> {
    static responseFormats = ['json']

    AnnouncementController() {
        super(Announcement)
    }
}