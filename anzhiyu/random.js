var posts=["2023/06/14/加入我们/","2023/06/16/使用雨云搭建BC端群组服/","2023/05/19/hello-world/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};