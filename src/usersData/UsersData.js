const UsersData = {
    usersList: [{ userName: 'adi', password: 'adi123456789', nickName: 'Adi Aviv', image: 'https://th.bing.com/th/id/R.82a29fdaaebade9793c8a7e583b3606f?rik=9DQFu7gzXxc71g&riu=http%3a%2f%2fwww.aceshowbiz.com%2fimages%2fwennpic%2fthe-rock-premiere-faster-01.jpg&ehk=KGMFVF%2fwOn3wrMJJRvb7xx6t8OsKhub5P2GFd1EphgI%3d&risl=&pid=ImgRaw&r=0' },
                { userName: 'guy', password: 'guy123456789', nickName: 'Guy Ben Razon', image: 'https://www.sandfmeatshop.com/wp-content/uploads/2021/10/4488.jpg' },
                { userName: 'hemi', password: 'hemi123456789', nickName: 'Hemi Hemi', image: 'https://michal-aharon.co.il/wp-content/uploads/2021/12/%D7%90%D7%99%D7%99%D7%9C-%D7%90%D7%93%D7%9D-2.jpg' },
                { userName: 'eran', password: 'eran123456789', nickName: 'Eran Haim', image: 'https://storage.googleapis.com/yk-cdn/photos/pdp/pedro-jarque-krebs/lion-king.jpg' },
                { userName: 'or', password: 'hemi123456789', nickName: 'Or Aviv', image: 'https://cdn.justjaredjr.com/wp-content/uploads/headlines/2017/07/hp-jk-rowling-birthday-tweets.jpg' },
                { userName: 'suny', password: 'suny123456789', nickName: 'Sun', image: 'https://sunsetsandwine.files.wordpress.com/2014/10/img_8524.jpg?w=1176&h=1176&crop=1' }],

    usersChat: new Map([
        ['adi', [{
            nameContact: 'guy', massages: [{massage: "hello friend", isRecived: true, time: "18:00", type: "text"},
                                           {massage: "hello Adi Aviv", isRecived: false, time: "22:00", type: "text"},
                                           {massage: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", isRecived: true, time: "22:05", type: "audio"},
                                           {massage: "it's a very nice song", isRecived: false, time: "22:07", type: "text"}]},
        { nameContact: 'hemi', massages: [{massage: "hey adi", isRecived: true, time: "12:30", type: "text"},
                                          {massage: "hello hemi", isRecived: false, time: "12:45", type: "text"}]},
        { nameContact: 'eran', massages: [{ massage: 'hey pizi', isRecived: false, time: "11:40", type: "text" },
                                          { massage: 'https://th.bing.com/th/id/R.af2655fa81ba840a700515b9b0827141?rik=FPW0wEIXnQ%2bNvQ&pid=ImgRaw&r=0', isRecived: true, time: "11:42", type: "image" },
                                          { massage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU5GA8GzY6vKaoI3HyViEdCjW92NSZrt2BHw&usqp=CAU', isRecived: false, time: "11:53", type: "image" }] },
        { nameContact: 'or', massages: [{ massage: 'https://www.w3schools.com/html/mov_bbb.mp4', isRecived: false, time: "15:30", type: "video" },
                                        { massage: 'hey sister', isRecived: true, time: "15:30", type: "text" }] },
        { nameContact: 'suny', massages: [{ massage: 'hello sunny', isRecived: false, time: "22:30", type: "text" },
                                          { massage: 'hey adiiiii , how are you ?', isRecived: true, time: "22:30", type: "text" },
                                          { massage: 'https://cdn.xxl.thumbs.canstockphoto.com/ok-3d-people-men-person-with-word-ok-drawing_csp10508503.jpg', isRecived: false, time: "22:30", type: "image" },
                                          { massage: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Yes.png', isRecived: true, time: "22:30", type: "image" },
                                          { massage: 'how are you my friend ?', isRecived: false, time: "22:30", type: "text" },
                                          { massage: 'very good , thanks', isRecived: true, time: "22:30", type: "text" },
                                          { massage: 'https://samplelib.com/lib/preview/mp3/sample-6s.mp3', isRecived: false, time: "22:30", type: "audio" },
                                          { massage: 'by by adi', isRecived: true, time: "22:30", type: "text" },] }
    ]]]),
};

export default UsersData;

