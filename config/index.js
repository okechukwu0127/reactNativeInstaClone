export default {
    images: {

        heartIcon: require('../assets/heart.png'),
        chatIcon: require('../assets/comment.png'),
        arrowIcon: require('../assets/share.png')

        },

        styleConstans: {
            rowHeight : 40
        },

        userKey:'0984569872387',

        baseUrl :
            {
                /*url:"http://instagram_clone-m4te25.turbo360-vertex.com/api/"*/
                url:"http://192.168.1.3/2018/node/instaClone/server",
                signUp:'/signUp.php',
                login:'/login.php',
                msgJson:'/msg.php'
            }
}