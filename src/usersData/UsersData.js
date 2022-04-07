const UsersData = { 
    usersList: [{ userName: 'adi', password: 'adi1', nickName: 'Adi Aviv', image: 'https://th.bing.com/th/id/R.82a29fdaaebade9793c8a7e583b3606f?rik=9DQFu7gzXxc71g&riu=http%3a%2f%2fwww.aceshowbiz.com%2fimages%2fwennpic%2fthe-rock-premiere-faster-01.jpg&ehk=KGMFVF%2fwOn3wrMJJRvb7xx6t8OsKhub5P2GFd1EphgI%3d&risl=&pid=ImgRaw&r=0' },
                { userName: 'guy', password: 'guy1', nickName: 'Guy Ben Razon', image: '' },
                { userName: 'hemi', password: 'hemi1', nickName: 'Hemi Hemi', image: '' },],
    
    usersChat: new Map([
        ['adi', [{nameContact: 'adi', massages: [{massage: '', isRecived: true, time: "18:00"}]},
                 {nameContact: 'Amir', massages: [{massage: '', isRecived: true, time: "18:00"}]}]],
        ['guy', [{nameContact: '', massages: [{massage: '', isRecived: true, time: "18:00"}]}]],
        ['hemi', [{nameContact: '', massages: [{massage: '', isRecived: true, time: "18:00"}]}]]
    ]),

    usersPhoto: new Map([
    ["adi", "https://th.bing.com/th/id/R.82a29fdaaebade9793c8a7e583b3606f?rik=9DQFu7gzXxc71g&riu=http%3a%2f%2fwww.aceshowbiz.com%2fimages%2fwennpic%2fthe-rock-premiere-faster-01.jpg&ehk=KGMFVF%2fwOn3wrMJJRvb7xx6t8OsKhub5P2GFd1EphgI%3d&risl=&pid=ImgRaw&r=0"]
        ])
    };

export default UsersData;

