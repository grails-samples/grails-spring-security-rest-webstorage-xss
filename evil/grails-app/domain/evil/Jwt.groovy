package evil

import grails.rest.*

@Resource(uri='/jwt')
class Jwt {
    String username
    String accessToken
    String refreshToken
	
    static constraints = {
        username unique: true, validator: { val, obj ->
            if ( val == 'null') {
                return false
            }
            true
        }
    }

    static mapping = {
    	accessToken type: 'text'
        refreshToken type: 'text'
    }
}
