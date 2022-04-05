const UsersData = { 
    usersList: [{ userName: 'adi', password: 'adi1', nickName: 'Adi Aviv', image: '' },
                { userName: 'guy', password: 'guy1', nickName: 'Guy Ben Razon', image: '' },
                { userName: 'hemi', password: 'hemi1', nickName: 'Hemi Hemi', image: '' },],
    
    usersChat: new Map([
        ['adi', [{nameContact: 'Maor Shvartz', massages: [{massage: '', isRecived: true, time: "18:00"}]},
                 {nameContact: 'Yehuda Kolgate', massages: [{massage: '', isRecived: true, time: "18:00"}]}]],
        ['guy', [{nameContact: '', massages: [{massage: '', isRecived: true, time: "18:00"}]}]],
        ['hemi', [{nameContact: '', massages: [{massage: '', isRecived: true, time: "18:00"}]}]]
    ])};

export default UsersData;

