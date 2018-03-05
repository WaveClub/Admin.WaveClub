interface AppConfig {
    api: {
        domen: string;
        methods: {
            login: string;
        }
    }
    defaultLanguage: string;
    socket: string;
    localStorageKey: {
        language: string;
    },
    errors: {
        noNameOrPass: string;
    }
}
