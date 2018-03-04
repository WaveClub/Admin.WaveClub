import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
    private appConfig: AppConfig;

    constructor(private http: HttpClient) { }

    public get app(): AppConfig {
        return this.appConfig;
    }

    public loadConfigs(): Promise<object[]> {
        const appConfigPromise = this.http.get('/configs/app.config.json').toPromise();
        appConfigPromise.then((config: AppConfig) => this.appConfig = config);  
        
        return Promise.all([appConfigPromise]);
    }
}