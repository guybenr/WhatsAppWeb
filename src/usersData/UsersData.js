const UsersData = {
    usersList: [{ userName: 'adi', password: 'adi1', nickName: 'Adi Aviv', image: 'https://th.bing.com/th/id/R.82a29fdaaebade9793c8a7e583b3606f?rik=9DQFu7gzXxc71g&riu=http%3a%2f%2fwww.aceshowbiz.com%2fimages%2fwennpic%2fthe-rock-premiere-faster-01.jpg&ehk=KGMFVF%2fwOn3wrMJJRvb7xx6t8OsKhub5P2GFd1EphgI%3d&risl=&pid=ImgRaw&r=0' },
    { userName: 'guy', password: 'guy1', nickName: 'Guy Ben Razon', image: 'https://www.sandfmeatshop.com/wp-content/uploads/2021/10/4488.jpg' },
    { userName: 'hemi', password: 'hemi1', nickName: 'Hemi Hemi', image: 'https://th.bing.com/th/id/R.791308d45b03ef8875a0220393f1c2a3?rik=eo6Utsi689PQkg&riu=http%3a%2f%2fmedia1.santabanta.com%2ffull1%2fAnimals%2fHorses%2fhorses-64a.jpg&ehk=0MfdCI5EPwRG9UizlcjQzMnWNi7%2fxsIQ002AUMaOlN4%3d&risl=&pid=ImgRaw&r=0' },],

    usersChat: new Map([
        ['adi', [{
            nameContact: 'guy', massages: [{
                massage: "hello friend", isRecived: true, time: "18:00", type: "text"},
            {
                massage: "hello Adi Aviv", isRecived: false, time: "18:00", type: "text"
            }]
        },
        { nameContact: 'hemi', massages: [{ massage: '', isRecived: true, time: "", type: "" }] }]],
        ['guy', [{ nameContact: 'adi', massages: [{ massage: '', isRecived: true, time: "", type: "" }] }]],
        ['hemi', [{ nameContact: '', massages: [{ massage: '', isRecived: true, time: "", type: "" }] }]]
    ]),

    usersPhoto: new Map([
        ["adi", "https://th.bing.com/th/id/R.82a29fdaaebade9793c8a7e583b3606f?rik=9DQFu7gzXxc71g&riu=http%3a%2f%2fwww.aceshowbiz.com%2fimages%2fwennpic%2fthe-rock-premiere-faster-01.jpg&ehk=KGMFVF%2fwOn3wrMJJRvb7xx6t8OsKhub5P2GFd1EphgI%3d&risl=&pid=ImgRaw&r=0"]
    ])
};

export default UsersData;

