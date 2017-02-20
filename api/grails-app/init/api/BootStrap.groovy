package api

class BootStrap {
    final static List<String> authorities = ['ROLE_BOSS', 'ROLE_EMPLOYEE']

    def init = { servletContext ->
        setupUsers()
        setupAnnouncements()
    }

    def destroy = {
    }

    private static void setupAnnouncements() {

        def announcements = [
                [title: 'Grails Quickcasts #1'],
                [title: 'Grails Quickcasts #2']
        ]

        announcements.each { new Announcement(it).save(failOnError: true) }
    }

    private static void setupUsers() {
        authorities.each { String authority ->
            if (!SecurityRole.findByAuthority(authority)) {
                new SecurityRole(authority).save()
            }
        }

        if (!User.findByUsername('sherlock')) {
            def u = new User(username: 'sherlock', password: 'elementary')
            u.save()
            new UserSecurityRole(u, SecurityRole.findByAuthority('ROLE_BOSS')).save()
        }

        if (!User.findByUsername('watson')) {
            def u = new User(username: 'watson', password: '221Bbakerstreet')
            u.save()
            new UserSecurityRole(u, SecurityRole.findByAuthority('ROLE_EMPLOYEE')).save()
        }
    }
}
