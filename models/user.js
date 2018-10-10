class User {
    constructor(userName, password) {
        this.userName = userName;
        this.password = password;
        this.status = 'offline';
    }

    get userName() {
        return this.userName;  
    }  

    get password() {
        return this.password;  
    }

    get status() {
        return this.status;  
    }

    set userName(userName) {
        this.userName = userName;  
    }  

    set password(password) {
        this.password = password;  
    }

    set status(status) {
        this.status = status;  
    }

    toComparePasswords (password) {
        if(this.password==password) {
            return true;
        }
        else {
            return false;
        }
    }

    toCompareUserName (name) {
        if(this.userName==name) {
            return true;
        }
        else {
            return false;
        }
    }
}