interface AppConfig {
    api: {
        domen: string;
        version: string;
        methods: {
            account: string;
            login: string;
            registration: string;
        }
    }
    defaultLanguage: string;
    socket: string;
    localStorageKey: {
        language: string;
    },
    errors: {
        noPhoneOrPass: string;
        incorrectPhone: string;
    }
}
