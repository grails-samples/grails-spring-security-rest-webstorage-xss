package api

class Announcement {

    String title
    String message

    static constraints = {
        message nullable: true
    }
}
