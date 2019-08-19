import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDBService } from './services/in-memory-db.service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDBService)
    ]
})
export class FakeApiModule {
}
