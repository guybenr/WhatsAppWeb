const UsersData = { 
    usersList: [{ userName: 'adi', password: 'adi1', nickName: 'Adi Aviv', image: '' },
                { userName: 'guy', password: 'guy1', nickName: 'Guy Ben Razon', image: '' },
                { userName: 'hemi', password: 'hemi1', nickName: 'Hemi Hemi', image: '' },],
    
    usersChat: new Map([
        ['adi', [{nameContact: '', massages: [{massage: '', isRecived: true}]}]],
        ['guy', [{nameContact: '', massages: [{massage: '', isRecived: true}]}]],
        ['hemi', [{nameContact: '', massages: [{massage: '', isRecived: true}]}]]
    ])};

export default UsersData;

