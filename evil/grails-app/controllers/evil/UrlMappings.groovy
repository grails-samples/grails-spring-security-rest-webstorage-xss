package evil

class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(controller: 'jwt', action: 'index')
        "500"(view:'/error')
        "404"(view:'/notFound')
    }
}
