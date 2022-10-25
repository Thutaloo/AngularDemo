export class user {
    constructor(
        public username: string,
        public email: string,
        public phoneNumber: number,
        public topics: string,
        public timePreference: string,
        public transport: boolean) {
    }
}